import { prisma } from "@/lib/db";
import {
  type DiagnosticQuestion,
  type PublicQuestion,
} from "@/lib/diagnostic-questions";
import { getQuestionSet } from "@/lib/server/question-bank";
import { LEVELS, type Level } from "@/lib/catalogue";
import { subjectExamOver } from "@/lib/exam-dates-2026";

// Shared server helpers for the study suite (daily retrieval, mistakes, goals,
// pacing). Kept Prisma-aware but framework-free so routes and pages can share.

export interface OwnedSubject {
  level: Level;
  slug: string;
  name: string;
  family: string;
  levelShort: string;
}

// The distinct subjects a customer has paid for (refunded orders excluded),
// MINUS subjects whose 2026 exams are over (the time gate in
// exam-dates-2026.ts): once the final paper is sat, the subject retires from
// every learning surface. Orders and downloads are untouched, they query the
// order tables directly. Use ownedSubjectsAll when you genuinely need the
// unfiltered list.
export async function ownedSubjects(customerId: string): Promise<OwnedSubject[]> {
  const all = await ownedSubjectsAll(customerId);
  return all.filter((s) => !subjectExamOver(s.level, s.slug));
}

export async function ownedSubjectsAll(customerId: string): Promise<OwnedSubject[]> {
  const orders = await prisma.order.findMany({
    where: { customerId, status: { not: "refunded" } },
    include: { items: { include: { product: { include: { subject: true } } } } },
  });
  const seen = new Map<string, OwnedSubject>();
  for (const order of orders) {
    for (const item of order.items) {
      const s = item.product.subject;
      const key = `${s.level}/${s.slug}`;
      if (seen.has(key)) continue;
      seen.set(key, {
        level: s.level as Level,
        slug: s.slug,
        name: s.name,
        family: s.family,
        levelShort: LEVELS[s.level as Level].shortName,
      });
    }
  }
  return [...seen.values()];
}

// --- Day boundaries in Asia/Singapore -----------------------------------
// The streak resets at the student's own midnight, not UTC. `en-CA` renders
// YYYY-MM-DD, which sorts and compares as a plain string.
export function sgDay(d: Date = new Date()): string {
  return d.toLocaleDateString("en-CA", { timeZone: "Asia/Singapore" });
}

export function addDays(day: string, delta: number): string {
  const [y, m, d] = day.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d + delta)).toISOString().slice(0, 10);
}

// Current streak = consecutive days with a completed daily quiz, counting back
// from today (or yesterday, if today isn't done yet, so the UI can say "do
// today to keep your 5-day streak").
export function computeStreak(
  days: string[],
  today: string
): { current: number; doneToday: boolean } {
  const set = new Set(days);
  const doneToday = set.has(today);
  let cursor = doneToday ? today : addDays(today, -1);
  let current = 0;
  while (set.has(cursor)) {
    current++;
    cursor = addDays(cursor, -1);
  }
  return { current, doneToday };
}

// Shield-aware streak: spent shields count as done-days, and if yesterday
// was missed (single-day gap only) while an unspent shield is available, it
// is spent automatically, the streak survives one slip. Earning happens in
// the daily-quiz submit route (every 5th consecutive day, max 2 held).
// Compliance: shields are earned by effort only, never bought.
export const MAX_SHIELDS = 2;

export async function streakState(
  customerId: string,
  today: string
): Promise<{ current: number; doneToday: boolean; shields: number }> {
  const [dayRows, shieldRows] = await Promise.all([
    prisma.dailyQuizDay.findMany({ where: { customerId }, select: { day: true } }),
    prisma.streakShield.findMany({ where: { customerId } }),
  ]);
  const days = new Set(dayRows.map((r) => r.day));
  for (const s of shieldRows) if (s.spentDay) days.add(s.spentDay);

  // Auto-spend: exactly yesterday missing, the day before present.
  const yesterday = addDays(today, -1);
  const dayBefore = addDays(today, -2);
  if (!days.has(yesterday) && days.has(dayBefore)) {
    const unspent = shieldRows.find((s) => !s.spentDay);
    if (unspent) {
      try {
        await prisma.streakShield.update({
          where: { id: unspent.id },
          data: { spentDay: yesterday },
        });
        unspent.spentDay = yesterday;
      } catch {
        // concurrent spend (unique customerId+spentDay), another request won
      }
      days.add(yesterday);
    }
  }

  const streak = computeStreak([...days], today);
  const shields = shieldRows.filter((s) => !s.spentDay).length;
  return { ...streak, shields };
}

// --- Daily question selection -------------------------------------------
// Deterministic per (customer, day): the same questions all day, different
// across days, spread across owned subjects. Recomputable at submit time, so
// nothing about the selection needs storing.

const DAILY_COUNT = 3;

function hashStr(str: string): number {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return (h ^ (h >>> 16)) >>> 0;
}

function mulberry32(seed: number): () => number {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface DailyPick {
  question: DiagnosticQuestion;
  subject: OwnedSubject;
  // Set when this slot is a spaced re-test of a mistake-notebook entry.
  mistakeId?: string;
  // Set when this slot is a scheduled spaced-repetition review of a question
  // the student previously got RIGHT (Leitner card come due, see srs.ts).
  reviewKey?: string;
}

export async function pickDailyQuestions(
  subjects: OwnedSubject[],
  customerId: string,
  day: string,
  excludeQuestionIds: Set<string> = new Set(),
  count: number = DAILY_COUNT
): Promise<DailyPick[]> {
  const pool: DailyPick[] = [];
  for (const s of subjects) {
    const set = await getQuestionSet(s.level, s.slug);
    if (!set) continue;
    for (const question of set.questions) {
      if (excludeQuestionIds.has(question.id)) continue;
      pool.push({ question, subject: s });
    }
  }
  if (pool.length === 0 || count <= 0) return [];

  const rand = mulberry32(hashStr(`${customerId}:${day}`));
  const idx = pool.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }

  // Pass 1: at most one question per subject, for variety. Pass 2: fill the
  // rest from whatever's left (covers customers who own only one subject).
  const chosen: number[] = [];
  const usedSubjects = new Set<string>();
  for (const i of idx) {
    if (chosen.length >= count) break;
    const key = `${pool[i].subject.level}/${pool[i].subject.slug}`;
    if (usedSubjects.has(key)) continue;
    chosen.push(i);
    usedSubjects.add(key);
  }
  for (const i of idx) {
    if (chosen.length >= count) break;
    if (!chosen.includes(i)) chosen.push(i);
  }
  return chosen.map((i) => pool[i]);
}

// ── Spaced resurrection ──────────────────────────────────────────────────
// Unresolved mistake-notebook entries with a questionId come back in the
// daily three once their nextResurfaceAt passes. Selection is DAY-stable
// (due = before the end of today in Singapore), so the page render and the
// grading pass inside one attempt agree on which questions were asked.

const MAX_RESURRECTIONS = 2;

function endOfSgDay(day: string): Date {
  return new Date(`${addDays(day, 1)}T00:00:00+08:00`);
}

export async function dailyPicks(
  customerId: string,
  subjects: OwnedSubject[],
  day: string,
  includeResurrections: boolean
): Promise<DailyPick[]> {
  const resurrected: DailyPick[] = [];
  if (includeResurrections && subjects.length > 0) {
    const owned = new Set(subjects.map((s) => `${s.level}/${s.slug}`));
    const due = await prisma.mistakeEntry.findMany({
      where: {
        customerId,
        resolved: false,
        questionId: { not: null },
        nextResurfaceAt: { lt: endOfSgDay(day) },
      },
      orderBy: { nextResurfaceAt: "asc" },
      take: 8, // a few spares in case some no longer resolve to a question
    });
    for (const m of due) {
      if (resurrected.length >= MAX_RESURRECTIONS) break;
      if (!owned.has(`${m.level}/${m.slug}`)) continue;
      const subject = subjects.find((s) => s.level === m.level && s.slug === m.slug)!;
      const set = await getQuestionSet(m.level, m.slug);
      const question = set?.questions.find((q) => q.id === m.questionId);
      if (!question) continue;
      if (resurrected.some((r) => r.question.id === question.id)) continue;
      resurrected.push({ question, subject, mistakeId: m.id });
    }
  }

  // Spaced-repetition slot: one due review of a previously-CORRECT question
  // (Leitner card, srs.ts). Day-stable for the same reason as resurrections
  // (due = before the end of today in SG, oldest debt first).
  const reviews: DailyPick[] = [];
  if (includeResurrections && subjects.length > 0 && resurrected.length < DAILY_COUNT - 1) {
    const owned = new Set(subjects.map((s) => `${s.level}/${s.slug}`));
    const taken = new Set(resurrected.map((r) => r.question.id));
    const dueCards = await prisma.reviewCard.findMany({
      where: { customerId, kind: "question", dueAt: { lt: endOfSgDay(day) } },
      orderBy: { dueAt: "asc" },
      take: 6,
    });
    for (const card of dueCards) {
      if (reviews.length >= 1) break;
      if (!owned.has(`${card.level}/${card.slug}`)) continue;
      if (taken.has(card.itemKey)) continue;
      const subject = subjects.find(
        (s) => s.level === card.level && s.slug === card.slug
      )!;
      const set = await getQuestionSet(card.level, card.slug);
      const question = set?.questions.find((q) => q.id === card.itemKey);
      if (!question) continue;
      reviews.push({ question, subject, reviewKey: card.itemKey });
    }
  }

  const exclude = new Set(
    [...resurrected, ...reviews].map((r) => r.question.id)
  );
  const fresh = await pickDailyQuestions(
    subjects,
    customerId,
    day,
    exclude,
    DAILY_COUNT - resurrected.length - reviews.length
  );
  return [...resurrected, ...reviews, ...fresh];
}

// What the browser may see before answering, the sanitized question plus the
// subject context the daily card shows. `resurrected` marks a spaced re-test
// from the mistake notebook (the UI badges it; answers are graded the same).
export interface PublicDailyQuestion extends PublicQuestion {
  level: Level;
  slug: string;
  subjectName: string;
  resurrected: boolean;
  review: boolean;
}

export function toPublicDaily(pick: DailyPick): PublicDailyQuestion {
  const { id, type, topic, stem, options, marks } = pick.question;
  return {
    id,
    type,
    topic,
    stem,
    options,
    marks,
    level: pick.subject.level,
    slug: pick.subject.slug,
    subjectName: pick.subject.name,
    resurrected: Boolean(pick.mistakeId),
    review: Boolean(pick.reviewKey),
  };
}

// Answer matching, identical rule to the diagnostic grader.
export function normaliseAnswer(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

export function isCorrect(question: DiagnosticQuestion, given: string): boolean {
  return question.correctKey.some((k) => normaliseAnswer(k) === normaliseAnswer(given));
}

// ── Calibration ──────────────────────────────────────────────────────────
// Aggregates the per-question confidence taps stored in DailyQuizDay.detailJson.
// The interesting number is sure-accuracy: well-calibrated students are right
// nearly every time they say "sure"; a low number means concept gaps are being
// filed as carelessness.

export type Confidence = "sure" | "unsure" | "guess";

export interface CalibrationBucket {
  level: Confidence;
  n: number;
  pctRight: number;
}

export function calibrationFrom(
  rows: { detailJson: string | null }[]
): { taps: number; buckets: CalibrationBucket[] } {
  const tally: Record<Confidence, { n: number; right: number }> = {
    sure: { n: 0, right: 0 },
    unsure: { n: 0, right: 0 },
    guess: { n: 0, right: 0 },
  };
  for (const row of rows) {
    if (!row.detailJson) continue;
    let detail: { correct?: boolean; confidence?: string | null }[];
    try {
      detail = JSON.parse(row.detailJson) as typeof detail;
    } catch {
      continue;
    }
    for (const d of detail) {
      const c = d.confidence as Confidence | null | undefined;
      if (!c || !(c in tally)) continue;
      tally[c].n++;
      if (d.correct) tally[c].right++;
    }
  }
  const buckets = (Object.keys(tally) as Confidence[])
    .map((level) => ({
      level,
      n: tally[level].n,
      pctRight: tally[level].n === 0 ? 0 : Math.round((tally[level].right / tally[level].n) * 100),
    }))
    .filter((b) => b.n > 0);
  return { taps: buckets.reduce((s, b) => s + b.n, 0), buckets };
}
