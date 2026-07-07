// PLACEHOLDER DATA — for design review only. Real scorecards are published
// after each exam sitting, once papers are publicly discussed.
import { SUBJECTS, type Level, type Subject } from "./catalogue";
import { seededHash, TOPIC_POOLS } from "./topics";

export interface AccuracyRow {
  topic: string;
  forecastProbability: number;
  appeared: boolean;
}

export interface YearScorecard {
  year: number;
  rows: AccuracyRow[];
  hitRate: number;
}

export const SCORECARD_YEARS = [2025, 2024];

function clamp(n: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, n));
}

export function scorecardFor(subject: Subject): YearScorecard[] {
  return SCORECARD_YEARS.map((year) => {
    const pool = TOPIC_POOLS[subject.family];
    const h = seededHash(`${subject.level}/${subject.slug}/${year}`);
    const start = h % pool.length;
    const base = [88, 79, 71, 64, 55];
    const missIndex = 2 + (h % 3);
    const secondMiss = (h >> 4) % 4 === 0 ? (h >> 6) % 5 : -1;
    const rows: AccuracyRow[] = base.map((p, i) => ({
      topic: pool[(start + i) % pool.length],
      forecastProbability: clamp(p + (((h >> (i * 4)) % 9) - 4), 30, 95),
      appeared: i !== missIndex && i !== secondMiss,
    }));
    const hits = rows.filter((r) => r.appeared).length;
    return { year, rows, hitRate: Math.round((hits / rows.length) * 100) };
  });
}

export function latestHitRate(subject: Subject): number {
  return scorecardFor(subject)[0].hitRate;
}

export function averageHitRate(level?: Level): number {
  const subjects = level ? SUBJECTS.filter((s) => s.level === level) : SUBJECTS;
  const sum = subjects.reduce((acc, s) => acc + latestHitRate(s), 0);
  return Math.round(sum / subjects.length);
}
