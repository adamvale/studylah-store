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
