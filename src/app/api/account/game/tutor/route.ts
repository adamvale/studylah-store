import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { masterApiGate } from "@/lib/server/entitlements";
import { ownedSubjects, sgDay } from "@/lib/server/study";
import { awardXp } from "@/lib/server/xp";
import { getSubject, type Level } from "@/lib/catalogue";
import { lifeTrack } from "@/lib/life-skills";
import {
  tutorReply,
  subjectTutorSystem,
  lifeCoachSystem,
  type TutorTurn,
  type TutorMedia,
} from "@/lib/server/tutor-chat";

// Guru Tutor API. Owners only, native shell. One conversational session covers
// teaching, practice, marking (typed or photo), planning and mocks.

const DAILY_MSG_CAP = 60; // Anthropic cost backstop (buyers-only)
const TUTOR_XP = 3;
const MEDIA: Record<string, TutorMedia> = {
  "image/jpeg": "image/jpeg",
  "image/png": "image/png",
  "image/webp": "image/webp",
};

async function systemFor(session: {
  kind: string;
  topicKey: string;
  level: string | null;
}): Promise<string | null> {
  if (session.kind === "life") {
    const track = lifeTrack(session.topicKey);
    return track ? lifeCoachSystem(track.name, track.guardrail) : null;
  }
  const subject = getSubject((session.level as Level) ?? "o-level", session.topicKey);
  return subject ? subjectTutorSystem(subject.name, session.level ?? "o-level") : null;
}

export async function GET() {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  const sessions = await prisma.tutorSession.findMany({
    where: { customerId },
    orderBy: { updatedAt: "desc" },
    take: 20,
    select: { id: true, kind: true, topicKey: true, level: true, title: true, updatedAt: true },
  });
  return NextResponse.json({ sessions });
}

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) return NextResponse.json({ error: "Not signed in." }, { status: 401 });

  let body: {
    action?: unknown;
    kind?: unknown;
    topicKey?: unknown;
    level?: unknown;
    seed?: unknown;
    sessionId?: unknown;
    text?: unknown;
    image?: unknown;
    media?: unknown;
  };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Daily message cap (Anthropic backstop).
  const since = new Date(`${sgDay()}T00:00:00+08:00`);
  const usedToday = await prisma.tutorMessage.count({
    where: { role: "user", session: { customerId }, createdAt: { gte: since } },
  });
  if (usedToday >= DAILY_MSG_CAP) {
    return NextResponse.json(
      { error: "That is a lot of tutoring today. Take a break and come back tomorrow.", capped: true },
      { status: 429 }
    );
  }

  // ── Start a session ──────────────────────────────────────────────────────
  if (body.action === "start") {
    const kind = body.kind === "life" ? "life" : "subject";
    const topicKey = typeof body.topicKey === "string" ? body.topicKey : "";
    const level = body.level === "na-level" ? "na-level" : "o-level";
    let title = "";
    let system = "";

    if (kind === "life") {
      const track = lifeTrack(topicKey);
      if (!track) return NextResponse.json({ error: "Unknown track." }, { status: 400 });
      title = track.name;
      system = lifeCoachSystem(track.name, track.guardrail);
    } else {
      const owned = await ownedSubjects(customerId);
      const match = owned.find((s) => s.slug === topicKey);
      if (!match) {
        return NextResponse.json({ error: "Enrol in this subject to study with its Guru." }, { status: 403 });
      }
      title = match.name;
      system = subjectTutorSystem(match.name, match.level);
    }

    const seed =
      typeof body.seed === "string" && body.seed.trim()
        ? body.seed.trim().slice(0, 500)
        : kind === "life"
          ? "Start this session. Say hello warmly in one short line, then ask your first question."
          : `Start tutoring ${title}. Say hello in one short line, then ask what I want to work on today. Keep it to two or three short lines, no lesson yet.`;

    const guruOpening = await tutorReply({ system, history: [], userText: seed });

    const session = await prisma.tutorSession.create({
      data: {
        customerId,
        kind,
        topicKey,
        level: kind === "subject" ? level : null,
        title,
        messages: { create: { role: "guru", content: guruOpening } },
      },
      include: { messages: true },
    });
    await awardXp(customerId, "tutor", `tutor-start:${session.id}`, TUTOR_XP, session.id);
    return NextResponse.json({
      session: { id: session.id, kind, topicKey, level: session.level, title },
      messages: session.messages.map((m) => ({ role: m.role, content: m.content })),
    });
  }

  // ── Reply within a session ───────────────────────────────────────────────
  const sessionId = typeof body.sessionId === "string" ? body.sessionId : "";
  const text = typeof body.text === "string" ? body.text.slice(0, 4000) : "";
  const image = typeof body.image === "string" ? body.image : "";
  const media = MEDIA[typeof body.media === "string" ? body.media : ""];
  if (!text && !image) {
    return NextResponse.json({ error: "Type a message." }, { status: 400 });
  }
  if (image && image.length > 7_000_000) {
    return NextResponse.json({ error: "That photo is too large." }, { status: 413 });
  }

  const session = await prisma.tutorSession.findFirst({
    where: { id: sessionId, customerId },
    include: { messages: { orderBy: { createdAt: "asc" }, take: 24 } },
  });
  if (!session) return NextResponse.json({ error: "Session not found." }, { status: 404 });
  const system = await systemFor(session);
  if (!system) return NextResponse.json({ error: "This session is no longer available." }, { status: 400 });

  const history: TutorTurn[] = session.messages.map((m) => ({
    role: m.role === "guru" ? "assistant" : "user",
    content: m.content,
  }));

  const guruReply = await tutorReply({
    system,
    history,
    userText: text || "Please mark my working.",
    image: image && media ? { base64: image, media } : undefined,
  });

  await prisma.$transaction([
    prisma.tutorMessage.create({
      data: { sessionId: session.id, role: "user", content: image ? `[photo] ${text}`.trim() : text },
    }),
    prisma.tutorMessage.create({
      data: { sessionId: session.id, role: "guru", content: guruReply },
    }),
    prisma.tutorSession.update({ where: { id: session.id }, data: { updatedAt: new Date() } }),
  ]);
  await awardXp(customerId, "tutor", `tutor-msg:${session.id}:${Date.now()}`, TUTOR_XP, session.id);

  return NextResponse.json({ reply: guruReply });
}
