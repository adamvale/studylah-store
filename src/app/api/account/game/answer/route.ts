import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getSubject, type Level } from "@/lib/catalogue";
import { getDiagnosticSet } from "@/lib/diagnostic-questions";
import { getCustomerId } from "@/lib/server/customer-session";
import { ownedSubjects, sgDay, isCorrect } from "@/lib/server/study";
import { MONSTERS } from "@/lib/game";
import { awardXp, totalXpFor, gamePayload, markAchievement, type GamePayload } from "@/lib/server/xp";

// Grades ONE wild-battle answer server-side. Balance pass (season pack
// deliverable 5): every ATTEMPT pays, wins pay more — effort-weighted, so a
// losing session still earns. Hard daily cap keeps grinding pointless while
// battles stay meaningful (notebook clears + Fronts work past the cap).
const ATTEMPT_XP = 10;
const WIN_XP = 10;
const WILD_CAP_PER_DAY = 150;

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  let body: { level?: unknown; slug?: unknown; questionId?: unknown; answer?: unknown; species?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const level = body.level as Level;
  const slug = typeof body.slug === "string" ? body.slug : "";
  const questionId = typeof body.questionId === "string" ? body.questionId : "";
  const answer = typeof body.answer === "string" ? body.answer : "";

  if (!getSubject(level, slug) || !questionId) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const owned = await ownedSubjects(customerId);
  if (!owned.some((s) => s.level === level && s.slug === slug)) {
    return NextResponse.json({ error: "Own this subject to battle here." }, { status: 403 });
  }
  const question = getDiagnosticSet(level, slug)?.questions.find((q) => q.id === questionId);
  if (!question) {
    return NextResponse.json({ error: "Unknown question." }, { status: 400 });
  }

  const correct = answer !== "" && isCorrect(question, answer);
  const correctAnswer =
    question.type === "mcq" && question.options
      ? question.options[Number(question.correctKey[0])] ?? question.correctKey.join(" / ")
      : question.correctKey.join(" / ");

  // Dex capture: the first time a species is defeated in the wild it is
  // registered to the player's monster-dex. Cosmetic collection only — no
  // XP, so a spoofed species earns nothing.
  let newCapture = false;
  const species = typeof body.species === "string" ? body.species : "";
  if (correct && species && species in MONSTERS && species !== "unset") {
    newCapture = await markAchievement(customerId, `dex:${species}`);
  }

  let game: GamePayload | null = null;
  let capped = false;
  {
    const today = sgDay();
    const agg = await prisma.xpEvent.aggregate({
      where: { customerId, kind: "wild", sourceKey: { startsWith: `wild:${today}:` } },
      _sum: { amount: true },
      _count: true,
    });
    const usedXp = agg._sum.amount ?? 0;
    const amount = ATTEMPT_XP + (correct ? WIN_XP : 0);
    if (usedXp + amount <= WILD_CAP_PER_DAY) {
      const xpBefore = await totalXpFor(customerId);
      const gained = await awardXp(
        customerId,
        "wild",
        `wild:${today}:${agg._count + 1}`,
        amount,
        questionId
      );
      if (gained > 0) game = await gamePayload(customerId, xpBefore, gained, []);
    } else {
      capped = true;
    }
  }

  // Solution is only ever returned AFTER grading — safe, and it turns a lost
  // battle into a lesson.
  return NextResponse.json({
    correct,
    correctAnswer,
    workedSolution: question.workedSolution,
    newCapture,
    capped,
    game,
  });
}
