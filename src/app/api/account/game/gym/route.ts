import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getSubject, type Level } from "@/lib/catalogue";
import { getQuestionSet } from "@/lib/server/question-bank";
import { getCustomerId } from "@/lib/server/customer-session";
import { ownedSubjects, isCorrect } from "@/lib/server/study";
import { awardXp, totalXpFor, gamePayload, type GamePayload } from "@/lib/server/xp";

// The gym challenge: five answers graded atomically. Four or more correct
// clears the gym, a per-subject achievement plus a one-time 25 XP. Gyms can
// be re-fought any time (practice!), but the XP never pays twice.
const PASS_MARK = 4;
const GYM_XP = 25;

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  let body: { level?: unknown; slug?: unknown; answers?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const level = body.level as Level;
  const slug = typeof body.slug === "string" ? body.slug : "";
  const answers =
    typeof body.answers === "object" && body.answers !== null
      ? (body.answers as Record<string, string>)
      : {};

  if (!getSubject(level, slug)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const owned = await ownedSubjects(customerId);
  if (!owned.some((s) => s.level === level && s.slug === slug)) {
    return NextResponse.json({ error: "Own this subject to challenge its gym." }, { status: 403 });
  }
  const set = await getQuestionSet(level, slug);
  if (!set) {
    return NextResponse.json({ error: "No questions for this subject yet." }, { status: 404 });
  }

  const entries = Object.entries(answers).slice(0, 5);
  if (entries.length !== 5) {
    return NextResponse.json({ error: "A gym challenge is five questions." }, { status: 400 });
  }

  let correct = 0;
  const results: Record<string, boolean> = {};
  for (const [questionId, given] of entries) {
    const q = set.questions.find((x) => x.id === questionId);
    const ok = Boolean(q && typeof given === "string" && given !== "" && isCorrect(q, given));
    results[questionId] = ok;
    if (ok) correct++;
  }

  const cleared = correct >= PASS_MARK;
  let game: GamePayload | null = null;
  let firstClear = false;

  if (cleared) {
    try {
      await prisma.achievement.create({
        data: { customerId, badgeId: `gym:${level}/${slug}` },
      });
      firstClear = true;
    } catch {
      // already cleared before, re-fights are free practice
    }
    if (firstClear) {
      const xpBefore = await totalXpFor(customerId);
      const gained = await awardXp(customerId, "gym", `gym:${level}/${slug}`, GYM_XP);
      if (gained > 0) game = await gamePayload(customerId, xpBefore, gained, []);
    }
  }

  return NextResponse.json({ correct, total: 5, cleared, firstClear, results, game });
}
