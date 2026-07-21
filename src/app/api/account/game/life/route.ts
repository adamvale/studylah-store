import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { masterApiGate } from "@/lib/server/entitlements";
import { awardXp } from "@/lib/server/xp";
import { LIFE_TRACKS, lifeLesson } from "@/lib/life-skills";

// Life Skills API. Owners only, native shell. GET the tracks + which lessons
// this student has finished; POST marks a lesson done (XP). The guardrail field
// stays server-side (it shapes Guru's chat, not the UI).

const LIFE_XP = 8;

export async function GET() {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) return NextResponse.json({ error: "Not signed in." }, { status: 401 });

  const done = await prisma.lifeProgress.findMany({
    where: { customerId },
    select: { lessonKey: true },
  });
  return NextResponse.json({
    completed: done.map((d) => d.lessonKey),
    tracks: LIFE_TRACKS.map((t) => ({
      key: t.key,
      name: t.name,
      blurb: t.blurb,
      icon: t.icon,
      tint: t.tint,
      lessons: t.lessons.map((l) => ({
        key: l.key,
        title: l.title,
        minutes: l.minutes,
        steps: l.steps,
        talkPrompt: l.talkPrompt ?? null,
      })),
    })),
  });
}

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) return NextResponse.json({ error: "Not signed in." }, { status: 401 });

  let body: { lessonKey?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const lessonKey = typeof body.lessonKey === "string" ? body.lessonKey : "";
  if (!lifeLesson(lessonKey)) {
    return NextResponse.json({ error: "Unknown lesson." }, { status: 400 });
  }
  try {
    await prisma.lifeProgress.create({ data: { customerId, lessonKey } });
    await awardXp(customerId, "life", `life:${lessonKey}`, LIFE_XP, lessonKey);
  } catch {
    // already completed (unique constraint), that's fine, idempotent
  }
  return NextResponse.json({ ok: true });
}
