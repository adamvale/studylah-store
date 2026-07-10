import { prisma } from "@/lib/db";
import { getSubject, type Level } from "@/lib/catalogue";
import { gradeEstimateFor } from "@/lib/server/diagnostic";

// Score history and cohort standing, both built on DiagnosticAttempt (the
// "Predict your mark" check). Signed-in attempts carry customerId; older ones
// are matched by the customer's email once they've unlocked results.

export interface AttemptPoint {
  score: number;
  totalMarks: number;
  pct: number;
  estimate: string;
  band: string;
  at: string; // ISO
}

export interface SubjectHistory {
  level: string;
  slug: string;
  subjectName: string;
  attempts: AttemptPoint[]; // oldest → newest
  latest: AttemptPoint;
  best: AttemptPoint;
}

function pctOf(score: number, total: number): number {
  return total === 0 ? 0 : Math.round((score / total) * 100);
}

export async function getScoreHistory(
  customerId: string,
  email: string
): Promise<SubjectHistory[]> {
  const rows = await prisma.diagnosticAttempt.findMany({
    where: {
      OR: [{ customerId }, { email, unlockedAt: { not: null } }],
    },
    orderBy: { createdAt: "asc" },
  });

  const bySubject = new Map<string, AttemptPoint[]>();
  const keyMeta = new Map<string, { level: string; slug: string }>();
  for (const r of rows) {
    const key = `${r.level}/${r.slug}`;
    keyMeta.set(key, { level: r.level, slug: r.slug });
    const point: AttemptPoint = {
      score: r.score,
      totalMarks: r.totalMarks,
      pct: pctOf(r.score, r.totalMarks),
      estimate: gradeEstimateFor(r.level, r.score, r.totalMarks),
      band: r.band,
      at: r.createdAt.toISOString(),
    };
    const list = bySubject.get(key) ?? [];
    list.push(point);
    bySubject.set(key, list);
  }

  const out: SubjectHistory[] = [];
  for (const [key, attempts] of bySubject) {
    const meta = keyMeta.get(key)!;
    const latest = attempts[attempts.length - 1];
    const best = attempts.reduce((a, b) => (b.pct > a.pct ? b : a), attempts[0]);
    out.push({
      level: meta.level,
      slug: meta.slug,
      subjectName: getSubject(meta.level as Level, meta.slug)?.name ?? meta.slug,
      attempts,
      latest,
      best,
    });
  }
  // Most recently attempted subject first.
  out.sort((a, b) => b.latest.at.localeCompare(a.latest.at));
  return out;
}

// Anonymous cohort standing: what fraction of all attempts on this paper this
// score beats. Suppressed below a minimum sample so a lone taker never sees
// "beats 0%". Never returns names or other students' data.
const MIN_COHORT = 8;

export async function getCohortStanding(
  level: string,
  slug: string,
  score: number,
  totalMarks: number
): Promise<{ beats: number; sample: number } | null> {
  const rows = await prisma.diagnosticAttempt.findMany({
    where: { level, slug },
    select: { score: true, totalMarks: true },
  });
  if (rows.length < MIN_COHORT) return null;
  const myPct = pctOf(score, totalMarks);
  const below = rows.filter((r) => pctOf(r.score, r.totalMarks) < myPct).length;
  return { beats: Math.round((below / rows.length) * 100), sample: rows.length };
}
