import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { masterApiGate } from "@/lib/server/entitlements";
import { awardXp } from "@/lib/server/xp";
import { PRACTICAL_SUBJECTS, practicalLesson } from "@/lib/practical-lab";

// Practical Lab API. Owners only. Completion reuses the LifeProgress table
// (lesson keys are namespaced, e.g. "chem-qa-1"), so no new migration.

const PRACTICAL_XP = 8;

export async function GET() {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) return NextResponse.json({ error: "Not signed in." }, { status: 401 });

  const allKeys = PRACTICAL_SUBJECTS.flatMap((s) => s.lessons.map((l) => l.key));
  const done = await prisma.lifeProgress.findMany({
    where: { customerId, lessonKey: { in: allKeys } },
    select: { lessonKey: true },
  });
  return NextResponse.json({
    completed: done.map((d) => d.lessonKey),
    subjects: PRACTICAL_SUBJECTS.map((s) => ({
      slug: s.slug,
      name: s.name,
      icon: s.icon,
      tint: s.tint,
      lessons: s.lessons.map((l) => ({
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
  if (!practicalLesson(lessonKey)) {
    return NextResponse.json({ error: "Unknown lesson." }, { status: 400 });
  }
  try {
    await prisma.lifeProgress.create({ data: { customerId, lessonKey } });
    await awardXp(customerId, "practical", `practical:${lessonKey}`, PRACTICAL_XP, lessonKey);
  } catch {
    // already completed, idempotent
  }
  return NextResponse.json({ ok: true });
}
