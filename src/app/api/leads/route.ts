import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getSubject, LEVELS, type Level } from "@/lib/catalogue";
import { realTopCalls } from "@/lib/forecast-tables";
import { generateHeatmapPdf } from "@/lib/server/pdf-gen";
import { emailLayout, sendEmail } from "@/lib/server/email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface LeadPayload {
  email?: unknown;
  consent?: unknown;
  source?: unknown;
  level?: unknown;
  subjectSlug?: unknown;
}

export async function POST(request: Request) {
  let payload: LeadPayload;
  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 }
    );
  }
  if (payload.consent !== true) {
    return NextResponse.json(
      { error: "Consent is required to send you the PDF." },
      { status: 400 }
    );
  }

  const level =
    payload.level === "o-level" || payload.level === "na-level"
      ? (payload.level as Level)
      : null;
  const subjectSlug =
    typeof payload.subjectSlug === "string" ? payload.subjectSlug : null;
  const subject = level && subjectSlug ? getSubject(level, subjectSlug) : null;

  // PDPA requires provable opt-in: the consent timestamp is stored with the
  // lead and never inferred.
  await prisma.lead.create({
    data: {
      email,
      source: typeof payload.source === "string" ? payload.source : "unknown",
      level,
      subjectSlug,
      consentAt: new Date(),
    },
  });

  // Deliver the free heatmap when a subject was chosen. Best-effort: the
  // lead is stored either way, and the stub transport never fails silently.
  if (subject && level) {
    try {
      const topics = realTopCalls(level, subject.slug, 5);
      const pdf = await generateHeatmapPdf({
        levelName: LEVELS[level].name,
        subjectName: subject.name,
        topics,
      });
      await sendEmail({
        to: email,
        subject: `Your free ${subject.name} heatmap, StudyLah`,
        html: emailLayout(`
          <h1 style="font-size:20px;margin:0 0 12px;color:#101f33;">Your Top 5 heatmap is attached</h1>
          <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 16px;">
            The five topics our model rates most likely for ${subject.name}
            (${LEVELS[level].name}), 2026 sitting. Judge us on it, and when
            you're ready for every topic with confidence tiers, worked questions,
            and a timed rehearsal, the full pack is at studylah.education.
          </p>
          <p style="font-size:12px;color:#3d4e63;margin:0;">
            You're getting this because you asked for it. Unsubscribe anytime
            with one click, your consent is recorded and revocable (PDPA).
          </p>
        `),
        text: `Your free ${subject.name} heatmap (${LEVELS[level].name}) is attached.\n\nWant every topic, questions, and a rehearsal? studylah.education`,
        attachments: [
          {
            filename: `${subject.slug}-top5-heatmap-studylah.pdf`,
            content: pdf,
          },
        ],
      });
    } catch (e) {
      console.error("Heatmap email failed", e);
    }
  }

  return NextResponse.json({ ok: true });
}
