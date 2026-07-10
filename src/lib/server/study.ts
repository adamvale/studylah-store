import { prisma } from "@/lib/db";
import {
  getDiagnosticSet,
  type DiagnosticQuestion,
  type PublicQuestion,
} from "@/lib/diagnostic-questions";
import { LEVELS, type Level } from "@/lib/catalogue";

// Shared server helpers for the study suite (daily retrieval, mistakes, goals,
// pacing). Kept Prisma-aware but framework-free so routes and pages can share.

export interface OwnedSubject {
  level: Level;
  slug: string;
  name: string;
  family: string;
  levelShort: string;
}

// The distinct subjects a customer has paid for (refunded orders excluded).
export async function ownedSubjects(customerId: string): Promise<OwnedSubject[]> {
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
// from today (or yesterday, if today isn't done yet — so the UI can say "do
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
}

export function pickDailyQuestions(
  subjects: OwnedSubject[],
  customerId: string,
  day: string
): DailyPick[] {
  const pool: DailyPick[] = [];
  for (const s of subjects) {
    const set = getDiagnosticSet(s.level, s.slug);
    if (!set) continue;
    for (const question of set.questions) pool.push({ question, subject: s });
  }
  if (pool.length === 0) return [];

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
    if (chosen.length >= DAILY_COUNT) break;
    const key = `${pool[i].subject.level}/${pool[i].subject.slug}`;
    if (usedSubjects.has(key)) continue;
    chosen.push(i);
    usedSubjects.add(key);
  }
  for (const i of idx) {
    if (chosen.length >= DAILY_COUNT) break;
    if (!chosen.includes(i)) chosen.push(i);
  }
  return chosen.map((i) => pool[i]);
}

// What the browser may see before answering — the sanitized question plus the
// subject context the daily card shows.
export interface PublicDailyQuestion extends PublicQuestion {
  level: Level;
  slug: string;
  subjectName: string;
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
  };
}

// Answer matching, identical rule to the diagnostic grader.
export function normaliseAnswer(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

export function isCorrect(question: DiagnosticQuestion, given: string): boolean {
  return question.correctKey.some((k) => normaliseAnswer(k) === normaliseAnswer(given));
}
