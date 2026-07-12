import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getSubject, type Level, type TopicFamily } from "@/lib/catalogue";
import { getDiagnosticSet, type PublicQuestion } from "@/lib/diagnostic-questions";
import { getCustomerId } from "@/lib/server/customer-session";
import { ownedSubjects, sgDay, isCorrect } from "@/lib/server/study";
import { awardXp, totalXpFor, gamePayload, type GamePayload } from "@/lib/server/xp";
import { guruLesson, familyCanTeach } from "@/lib/game/guru";

// The Subject Guru: enrolled students visit to LEARN a subject. The Guru
// teaches a short level-appropriate lesson, then sets one check-question from
// that subject's own bank. Strictly gated by ownership — a student is only
// ever taught and tested on the exact subjects (and level/tier) they own, so
// O-Level Pure, O-Level Science and N(A)-Level never bleed into each other.
// Effort XP, daily-capped; compliance-safe (no answer keys before grading).

const GURU_ATTEMPT_XP = 8;
const GURU_PASS_XP = 8;
const GURU_CAP_PER_DAY = 80;

// GET — the Gurus available to this student (one per owned subject).
export async function GET() {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }
  const owned = await ownedSubjects(customerId);
  const gurus = owned
    .filter((s) => familyCanTeach(s.family as TopicFamily))
    .map((s) => {
      const set = getDiagnosticSet(s.level, s.slug);
      const canCheck = Boolean(
        set?.questions.some((q) => q.type === "mcq" && q.options?.length)
      );
      return { level: s.level, slug: s.slug, name: s.name, family: s.family, canCheck };
    });
  return NextResponse.json({ gurus });
}

// PUT — begin a lesson: teaching beats + one SEALED check-question.
export async function PUT(request: Request) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }
  let body: { level?: unknown; slug?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const level = body.level as Level;
  const slug = typeof body.slug === "string" ? body.slug : "";
  const subject = getSubject(level, slug);
  if (!subject) {
    return NextResponse.json({ error: "Unknown subject." }, { status: 400 });
  }
  const owned = await ownedSubjects(customerId);
  if (!owned.some((s) => s.level === level && s.slug === slug)) {
    return NextResponse.json({ error: "Enrol in this subject to study with its Guru." }, { status: 403 });
  }

  const lesson = guruLesson(subject.family as TopicFamily, level, slug);

  // one sealed check-question from this subject's own set
  const mcqs = getDiagnosticSet(level, slug)?.questions.filter(
    (q) => q.type === "mcq" && q.options?.length
  );
  let question: PublicQuestion | null = null;
  if (mcqs && mcqs.length) {
    const q = mcqs[Math.floor(Math.random() * mcqs.length)];
    question = { id: q.id, type: q.type, topic: q.topic, stem: q.stem, options: q.options, marks: q.marks };
  }

  return NextResponse.json({
    subject: { level, slug, name: subject.name },
    lesson,
    question,
  });
}

// POST — grade the check-question, award capped effort XP, reveal the solution.
export async function POST(request: Request) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }
  let body: { level?: unknown; slug?: unknown; questionId?: unknown; answer?: unknown };
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
    return NextResponse.json({ error: "Enrol in this subject to study with its Guru." }, { status: 403 });
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

  // Effort XP for studying, extra for a correct check — daily-capped so it
  // rewards showing up to learn, not grinding.
  let game: GamePayload | null = null;
  let capped = false;
  {
    const today = sgDay();
    const agg = await prisma.xpEvent.aggregate({
      where: { customerId, kind: "guru", sourceKey: { startsWith: `guru:${today}:` } },
      _sum: { amount: true },
      _count: true,
    });
    const usedXp = agg._sum.amount ?? 0;
    const amount = GURU_ATTEMPT_XP + (correct ? GURU_PASS_XP : 0);
    if (usedXp + amount <= GURU_CAP_PER_DAY) {
      const xpBefore = await totalXpFor(customerId);
      const gained = await awardXp(customerId, "guru", `guru:${today}:${agg._count + 1}`, amount, questionId);
      if (gained > 0) game = await gamePayload(customerId, xpBefore, gained, []);
    } else {
      capped = true;
    }
  }

  return NextResponse.json({
    correct,
    correctAnswer,
    workedSolution: question.workedSolution,
    capped,
    game,
  });
}
