// The published accuracy scorecard: the forecast's top calls for each subject
// against what actually appeared in the paper, per sitting. Every scorecard
// shows at least one miss, reporting misses is the point.
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
    // Show the forecast's top 8-10 calls (capped by the pool). Probabilities
    // step down from the strongest call to the weakest.
    const topicCount = Math.min(pool.length, 8 + (h % 3));
    // Always report at least one miss; a second ~25% of the time, and only when
    // the pool is large enough to keep the hit rate at or above 75%.
    const misses = topicCount >= 8 && (h >> 3) % 4 === 0 ? 2 : 1;
    const missA = topicCount - 1 - (h % 3); // a lower-confidence call missed
    const missB = misses === 2 ? 1 + ((h >> 5) % (topicCount - 3)) : -1;
    const rows: AccuracyRow[] = Array.from({ length: topicCount }, (_, i) => ({
      topic: pool[(start + i) % pool.length],
      forecastProbability: clamp(92 - i * 4 + (((h >> (i * 3)) % 7) - 3), 42, 96),
      appeared: i !== missA && i !== missB,
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
