import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import {
  ownedSubjects,
  pickDailyQuestions,
  sgDay,
  isCorrect,
  computeStreak,
} from "@/lib/server/study";

// Grades today's daily three SERVER-SIDE. The selection is deterministic per
// (customer, day), so we recompute it here rather than trusting the client
// about which questions were asked. First completion of the day records the
// streak day and seeds any misses into the mistake notebook; re-submits just
// return the marked results without double-counting.
export async function POST(request: Request) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  let body: { answers?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const answers =
    typeof body.answers === "object" && body.answers !== null
      ? (body.answers as Record<string, string>)
      : {};

  const today = sgDay();
  const subjects = await ownedSubjects(customerId);
  const picks = pickDailyQuestions(subjects, customerId, today);
  if (picks.length === 0) {
    return NextResponse.json({ error: "No questions available." }, { status: 400 });
  }

  const results = picks.map(({ question: q, subject }) => {
    const given = String(answers[q.id] ?? "");
    const correct = given !== "" && isCorrect(q, given);
    const correctAnswer =
      q.type === "mcq" && q.options
        ? q.options[Number(q.correctKey[0])] ?? q.correctKey.join(" / ")
        : q.correctKey.join(" / ");
    const givenDisplay =
      q.type === "mcq" && q.options && given !== ""
        ? q.options[Number(given)] ?? given
        : given;
    return {
      id: q.id,
      level: subject.level,
      slug: subject.slug,
      subjectName: subject.name,
      topic: q.topic,
      stem: q.stem,
      correct,
      given,
      givenDisplay,
      correctAnswer,
      workedSolution: q.workedSolution,
    };
  });

  const correctCount = results.filter((r) => r.correct).length;

  // Record the day once. If the row already exists, this was a re-visit —
  // keep the original counts and don't re-seed mistakes.
  const existing = await prisma.dailyQuizDay.findUnique({
    where: { customerId_day: { customerId, day: today } },
  });
  if (!existing) {
    await prisma.dailyQuizDay.create({
      data: { customerId, day: today, answered: results.length, correct: correctCount },
    });
    const misses = results.filter((r) => !r.correct);
    if (misses.length > 0) {
      await prisma.mistakeEntry.createMany({
        data: misses.map((r) => ({
          customerId,
          level: r.level,
          slug: r.slug,
          topic: r.topic,
          questionId: r.id,
          stem: r.stem,
          correctAnswer: r.correctAnswer,
          myAnswer: r.givenDisplay || null,
          reason: "unset",
          source: "daily",
        })),
      });
    }
  }

  const rows = await prisma.dailyQuizDay.findMany({
    where: { customerId },
    select: { day: true },
  });
  const streak = computeStreak(
    rows.map((r) => r.day),
    today
  );

  return NextResponse.json({
    results,
    score: correctCount,
    total: results.length,
    streak: streak.current,
    seededMistakes: existing ? 0 : results.filter((r) => !r.correct).length,
  });
}
