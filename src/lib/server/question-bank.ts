import { prisma } from "@/lib/db";
import { getSubject } from "@/lib/catalogue";
import {
  getDiagnosticSet as staticSet,
  type DiagnosticSet,
  type DiagnosticQuestion,
} from "@/lib/diagnostic-questions";

// ── Server-only game content reader ──────────────────────────────────────────
// The authored question/teaching bank lives in the database (seeded from
// content/game-bank/*.md). This module is the ONLY runtime reader. Because it
// imports prisma it can never be pulled into a client bundle, so answer keys
// (correctKey, workedSolution) physically cannot leak to the browser.
//
// Reads are cached in-process: content changes only at deploy/seed time, so a
// per-subject cache is safe and keeps hot paths as fast as the old in-memory
// module. If a subject has no rows yet, we fall back to the hand-authored
// diagnostic sets so the game never breaks on an unseeded subject.

export interface ImportedCard {
  kind: string;
  [key: string]: unknown;
}

const setCache = new Map<string, DiagnosticSet | null>();
const teachCache = new Map<string, ImportedCard[]>();

function labelFor(level: string, slug: string): string {
  const s = getSubject(level as never, slug);
  return s ? `${s.name} — predicted topics` : "Predicted topics";
}

function rowToQuestion(r: {
  id: string;
  type: string;
  topic: string;
  stem: string;
  optionsJson: string | null;
  correctJson: string;
  marks: number;
  workedSolution: string;
  misconceptionTag: string;
  difficulty: number;
}): DiagnosticQuestion {
  return {
    id: r.id,
    type: r.type as "mcq" | "short",
    topic: r.topic,
    stem: r.stem,
    options: r.optionsJson ? (JSON.parse(r.optionsJson) as string[]) : undefined,
    correctKey: JSON.parse(r.correctJson) as string[],
    marks: r.marks,
    workedSolution: r.workedSolution,
    misconceptionTag: r.misconceptionTag,
    difficulty: r.difficulty,
    mapsToProduct: "vault",
  };
}

// The battle/duel/guru question set for a subject: DB first, hand-authored
// fallback. Returns undefined only if neither source has the subject.
export async function getQuestionSet(
  level: string,
  slug: string
): Promise<DiagnosticSet | undefined> {
  const key = `${level}/${slug}`;
  const cached = setCache.get(key);
  if (cached !== undefined) return cached ?? undefined;

  // The query can throw when the DB is unreachable or the table doesn't exist
  // yet — notably during `next build` static generation, which runs BEFORE
  // `prisma migrate deploy`. In every such case, fall back to the hand-authored
  // set rather than crash the build/request. Don't cache DB errors (so a real
  // runtime process retries once the tables exist).
  let rows: Awaited<ReturnType<typeof prisma.gameQuestion.findMany>> = [];
  try {
    rows = await prisma.gameQuestion.findMany({
      where: { level, slug },
      orderBy: { ord: "asc" },
    });
  } catch {
    return staticSet(level, slug);
  }
  if (rows.length > 0) {
    const set: DiagnosticSet = {
      level: level as "o-level" | "na-level",
      slug,
      topicLabel: labelFor(level, slug),
      questions: rows.map(rowToQuestion),
    };
    setCache.set(key, set);
    return set;
  }

  const fallback = staticSet(level, slug) ?? null;
  setCache.set(key, fallback);
  return fallback ?? undefined;
}

// ── The "Predict your mark" diagnostic set ───────────────────────────────────
// The diagnostic is a fixed 10-question check — NOT the whole battle bank (which
// can run to 100+ questions per subject). getQuestionSet returns the full bank
// for the game; getDiagnosticSet trims it to exactly ten HARD questions from
// DISTINCT topics, chosen deterministically so the quiz, the grader, the results
// page and the results email all see the identical ten.
const DIAGNOSTIC_COUNT = 10;

// Rank by hardness. The authored `difficulty` tier (1–3) dominates; the older
// content signals (short-answer over MCQ, marks, analytical/numeric stems) break
// ties and grade the hand-authored static sets, which carry no difficulty.
function hardness(q: DiagnosticQuestion): number {
  let s = (q.difficulty ?? 2) * 10;
  s += q.marks * 2;
  if (q.type === "short") s += 3;
  s += Math.min(q.stem.length / 40, 3);
  if (/\d/.test(q.stem)) s += 1;
  if (/\b(calculate|how many|determine|deduce|explain why|work out|find the)\b/i.test(q.stem)) {
    s += 1;
  }
  return s;
}

// Deterministic tie-break by id, so the same ten come back every call.
function rankHardest(a: DiagnosticQuestion, b: DiagnosticQuestion): number {
  return hardness(b) - hardness(a) || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
}

function pickHardDistinct(questions: DiagnosticQuestion[], n: number): DiagnosticQuestion[] {
  // The hardest question within each distinct topic.
  const byTopic = new Map<string, DiagnosticQuestion>();
  for (const q of questions) {
    const cur = byTopic.get(q.topic);
    if (!cur || rankHardest(q, cur) < 0) byTopic.set(q.topic, q);
  }
  const chosen = [...byTopic.values()].sort(rankHardest).slice(0, n);
  // If there aren't n distinct topics, backfill with the next-hardest unused
  // questions so the check is always exactly n long.
  if (chosen.length < n) {
    const used = new Set(chosen.map((q) => q.id));
    for (const q of [...questions].sort(rankHardest)) {
      if (chosen.length >= n) break;
      if (!used.has(q.id)) {
        chosen.push(q);
        used.add(q.id);
      }
    }
  }
  return chosen.slice(0, n);
}

export async function getDiagnosticSet(
  level: string,
  slug: string
): Promise<DiagnosticSet | undefined> {
  const full = await getQuestionSet(level, slug);
  if (!full) return undefined;
  if (full.questions.length <= DIAGNOSTIC_COUNT) return full;
  return { ...full, questions: pickHardDistinct(full.questions, DIAGNOSTIC_COUNT) };
}

// The subject's imported teaching cards (empty if none — the Guru then uses
// its family library).
export async function getTeachingCards(level: string, slug: string): Promise<ImportedCard[]> {
  const key = `${level}/${slug}`;
  const cached = teachCache.get(key);
  if (cached !== undefined) return cached;

  let rows: Awaited<ReturnType<typeof prisma.gameTeachingCard.findMany>> = [];
  try {
    rows = await prisma.gameTeachingCard.findMany({
      where: { level, slug },
      orderBy: { ord: "asc" },
    });
  } catch {
    return []; // DB not ready (e.g. build-time) → Guru uses its family library
  }
  const cards = rows.map((r) => JSON.parse(r.dataJson) as ImportedCard);
  teachCache.set(key, cards);
  return cards;
}
