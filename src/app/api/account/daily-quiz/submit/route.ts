import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import {
  ownedSubjects,
  dailyPicks,
  sgDay,
  isCorrect,
  computeStreak,
} from "@/lib/server/study";

// Grades today's daily three SERVER-SIDE. The selection is deterministic per
// (customer, day) — including which mistake-notebook entries are due for a
// spaced re-test — so we recompute it here rather than trusting the client
// about which questions were asked. First completion of the day records the
// streak day, updates resurrection state, and seeds fresh misses into the
// notebook; re-submits just return marked results without double-counting.

const CONFIDENCE_LEVELS = ["sure", "unsure", "guess"] as const;
type Confidence = (typeof CONFIDENCE_LEVELS)[number];

const RESURFACE_RETRY_DAYS = 2; // wrong again → come back soon
const RESURFACE_NEXT_DAYS = 7; // right once → prove it again next week
const CLEARS_TO_RESOLVE = 2;

function inDays(days: number): Date {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
}

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  let body: { answers?: unknown; confidence?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const answers =
    typeof body.answers === "object" && body.answers !== null
      ? (body.answers as Record<string, string>)
      : {};
  const confidenceRaw =
    typeof body.confidence === "object" && body.confidence !== null
      ? (body.confidence as Record<string, string>)
      : {};

  const today = sgDay();
  const subjects = await ownedSubjects(customerId);

  // The day is recorded once; later rounds are bonus practice. Resurrections
  // only ride the FIRST attempt so render and grading stay consistent.
  const existing = await prisma.dailyQuizDay.findUnique({
    where: { customerId_day: { customerId, day: today } },
  });
  const firstAttempt = !existing;

  const picks = await dailyPicks(customerId, subjects, today, firstAttempt);
  if (picks.length === 0) {
    return NextResponse.json({ error: "No questions available." }, { status: 400 });
  }

  const results = picks.map(({ question: q, subject, mistakeId }) => {
    const given = String(answers[q.id] ?? "");
    const correct = given !== "" && isCorrect(q, given);
    const rawConf = confidenceRaw[q.id];
    const confidence: Confidence | null = (CONFIDENCE_LEVELS as readonly string[]).includes(
      rawConf
    )
      ? (rawConf as Confidence)
      : null;
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
      confidence,
      resurrected: Boolean(mistakeId),
      mistakeId: mistakeId ?? null,
      clearedNow: false,
    };
  });

  const correctCount = results.filter((r) => r.correct).length;

  if (firstAttempt) {
    // 1. Record the day (streak + calibration detail).
    await prisma.dailyQuizDay.create({
      data: {
        customerId,
        day: today,
        answered: results.length,
        correct: correctCount,
        detailJson: JSON.stringify(
          results.map((r) => ({
            questionId: r.id,
            correct: r.correct,
            confidence: r.confidence,
            resurrected: r.resurrected,
          }))
        ),
      },
    });

    // 2. Advance resurrection state for re-tested mistakes.
    for (const r of results) {
      if (!r.mistakeId) continue;
      const entry = await prisma.mistakeEntry.findUnique({ where: { id: r.mistakeId } });
      if (!entry || entry.resolved) continue;
      if (r.correct) {
        const streak = entry.clearStreak + 1;
        const cleared = streak >= CLEARS_TO_RESOLVE;
        await prisma.mistakeEntry.update({
          where: { id: entry.id },
          data: cleared
            ? { clearStreak: streak, resurfaceStage: entry.resurfaceStage + 1, resolved: true }
            : {
                clearStreak: streak,
                resurfaceStage: entry.resurfaceStage + 1,
                nextResurfaceAt: inDays(RESURFACE_NEXT_DAYS),
              },
        });
        r.clearedNow = cleared;
      } else {
        await prisma.mistakeEntry.update({
          where: { id: entry.id },
          data: { clearStreak: 0, nextResurfaceAt: inDays(RESURFACE_RETRY_DAYS) },
        });
      }
    }

    // 3. Seed FRESH misses (resurrected ones already live in the notebook).
    const misses = results.filter((r) => !r.correct && !r.resurrected);
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
          nextResurfaceAt: inDays(RESURFACE_RETRY_DAYS),
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
    // Explicit whitelist — internal fields (mistakeId, raw `given`) stay here.
    results: results.map((r) => ({
      id: r.id,
      subjectName: r.subjectName,
      topic: r.topic,
      correct: r.correct,
      givenDisplay: r.givenDisplay,
      correctAnswer: r.correctAnswer,
      workedSolution: r.workedSolution,
      confidence: r.confidence,
      resurrected: r.resurrected,
      clearedNow: r.clearedNow,
    })),
    score: correctCount,
    total: results.length,
    streak: streak.current,
    seededMistakes: firstAttempt
      ? results.filter((r) => !r.correct && !r.resurrected).length
      : 0,
    clearedMistakes: results.filter((r) => r.clearedNow).length,
  });
}
