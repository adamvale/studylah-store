import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { masterApiGate } from "@/lib/server/entitlements";
import { recordReview } from "@/lib/server/srs";
import {
  ownedSubjects,
  dailyPicks,
  sgDay,
  isCorrect,
  calibrationFrom,
  streakState,
  MAX_SHIELDS,
} from "@/lib/server/study";
import { XP } from "@/lib/game";
import {
  awardXp,
  unlockBadge,
  totalXpFor,
  gamePayload,
  type GamePayload,
} from "@/lib/server/xp";

// Grades today's daily three SERVER-SIDE. The selection is deterministic per
// (customer, day), including which mistake-notebook entries are due for a
// spaced re-test, so we recompute it here rather than trusting the client
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
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
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

  const results = picks.map(({ question: q, subject, mistakeId, reviewKey }) => {
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
      review: Boolean(reviewKey),
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

    // 2b. Spaced repetition: correct answers advance their Leitner card (or
    // create one at box 2), so today's wins come back for review in 3 days,
    // then 7, 21, 60. Wrong answers ride the mistake notebook instead, but a
    // lapse on an EXISTING card still knocks it back to box 1.
    for (const r of results) {
      if (r.correct) {
        await recordReview(customerId, "question", r.id, r.level, r.slug, true);
      } else if (r.review) {
        await recordReview(customerId, "question", r.id, r.level, r.slug, false);
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

  const streak = await streakState(customerId, today);

  // Every 5th consecutive day banks a streak shield (max held: 2), the
  // earned insurance that lets one missed day not erase weeks of habit.
  let shieldEarned = false;
  if (firstAttempt && streak.current > 0 && streak.current % 5 === 0 && streak.shields < MAX_SHIELDS) {
    try {
      await prisma.streakShield.create({ data: { customerId, earnedDay: today } });
      shieldEarned = true;
    } catch {
      // unique(customerId, earnedDay), already banked for this day
    }
  }

  // ── XP + badges (first attempt of the day only; every key dedupes) ──────
  let game: GamePayload | null = null;
  if (firstAttempt) {
    const xpBefore = await totalXpFor(customerId);
    let gained = 0;
    const newBadges: { id: string; name: string; emoji: string }[] = [];
    const collect = (b: { id: string; name: string; emoji: string; xp: number } | null) => {
      if (!b) return;
      newBadges.push({ id: b.id, name: b.name, emoji: b.emoji });
      gained += b.xp;
    };

    gained += await awardXp(
      customerId,
      "daily",
      `daily:${today}`,
      XP.dailyBase + XP.dailyPerCorrect * correctCount,
      `${correctCount}/${results.length}`
    );
    for (const r of results) {
      if (r.clearedNow && r.mistakeId) {
        gained += await awardXp(customerId, "mistake_cleared", `mclear:${r.mistakeId}`, XP.mistakeCleared);
      }
    }

    // Badges, cheap checks piggybacking data already in hand.
    collect(await unlockBadge(customerId, "first-steps"));
    const hourSg = Number(
      new Date().toLocaleString("en-GB", { hour: "2-digit", hour12: false, timeZone: "Asia/Singapore" })
    );
    if (hourSg < 8) collect(await unlockBadge(customerId, "early-bird"));
    for (const [n, id] of [[3, "streak-3"], [7, "streak-7"], [14, "streak-14"], [30, "streak-30"]] as const) {
      if (streak.current >= n) collect(await unlockBadge(customerId, id));
    }
    const clearedTotal = await prisma.xpEvent.count({
      where: { customerId, kind: "mistake_cleared" },
    });
    if (clearedTotal >= 1) collect(await unlockBadge(customerId, "slayer-1"));
    if (clearedTotal >= 10) collect(await unlockBadge(customerId, "slayer-10"));
    const calib = calibrationFrom(
      await prisma.dailyQuizDay.findMany({ where: { customerId }, select: { detailJson: true } })
    );
    const sure = calib.buckets.find((b) => b.level === "sure");
    if (sure && sure.n >= 20 && sure.pctRight >= 85) {
      collect(await unlockBadge(customerId, "calibrated"));
    }

    game = await gamePayload(customerId, xpBefore, gained, newBadges);
  }

  return NextResponse.json({
    game,
    // Explicit whitelist, internal fields (mistakeId, raw `given`) stay here.
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
    shields: streak.shields + (shieldEarned ? 1 : 0),
    shieldEarned,
    seededMistakes: firstAttempt
      ? results.filter((r) => !r.correct && !r.resurrected).length
      : 0,
    clearedMistakes: results.filter((r) => r.clearedNow).length,
  });
}
