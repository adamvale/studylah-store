import { prisma } from "@/lib/db";
import { getSubject } from "@/lib/catalogue";
import { fullForecast } from "@/lib/topics";
import { FORECAST_TABLES } from "@/lib/forecast-tables";
import { forecastTier, type ForecastTier } from "@/components/heat";
import { ownedSubjects, type OwnedSubject } from "./study";

// ─────────────────────────────────────────────────────────────────────────
// Marks at Risk: a transparent, deterministic model of how much of a typical
// 100-mark paper is currently "in play" for this student.
//
//   topic marks   = tier weight, normalised so each subject's topics sum to
//                   100 (VERY HIGH counts 6, HIGH 4, MODERATE 2, WATCH 1, 
//                   mirroring how heavily past papers lean on top-tier calls)
//   risk fraction = how unfinished the topic is (study-plan status), plus a
//                   penalty per unresolved mistake logged on that topic
//   marks at risk = Σ topic marks × risk fraction
//
// It is a MODEL for prioritising effort, every surface that shows it must
// carry the caveat that it is not a prediction of anyone's actual paper.
// ─────────────────────────────────────────────────────────────────────────

const TIER_WEIGHT: Record<ForecastTier, number> = {
  "very-high": 6,
  high: 4,
  moderate: 2,
  watch: 1,
};

// Status 0 untouched · 1 revised · 2 practised · 3 confident. Confident keeps
// a 10% residual, honest (nothing is banked until the paper is sat) and it
// keeps "retain it" work visible.
const STATUS_RISK = [1.0, 0.7, 0.4, 0.1] as const;

const MISTAKE_PENALTY = 0.15; // per unresolved mistake on the topic
const MISTAKE_PENALTY_CAP = 0.3;

export const RISK_CAVEAT =
  "Modelled from the forecast tiers and your own progress so you can rank your effort, not a prediction or promise about your actual paper.";

// Topic labels differ slightly between sources ("N5, Algebraic Manipulation"
// vs "Algebraic Manipulation"). Strip any leading section code + dash before
// comparing.
export function normTopic(t: string): string {
  return t
    .replace(/^[A-Z]{1,3}\d{1,2}(\.\d)?\s*(, |-|-)?\s*/, "")
    .toLowerCase()
    .trim();
}

export interface TopicRisk {
  topic: string;
  tier: ForecastTier;
  marks: number; // share of a 100-mark paper
  status: number; // 0-3
  mistakes: number; // unresolved entries matched to this topic
  atRisk: number; // marks × risk fraction
}

export interface SubjectRisk {
  level: string;
  slug: string;
  name: string;
  levelShort: string;
  marksAtRisk: number; // 0-100
  // Decomposition for the meter card (rounded, so they may not sum exactly).
  fromVeryHigh: number;
  fromHigh: number;
  fromMistakes: number;
  unresolvedMistakes: number;
  untouchedVeryHigh: string[];
  topics: TopicRisk[]; // sorted by atRisk desc
}

function topicsWithTiers(s: OwnedSubject): { topic: string; tier: ForecastTier }[] {
  const key = `${s.level}/${s.slug}`;
  const table = FORECAST_TABLES[key];
  if (table) return table.map((t) => ({ topic: t.topic, tier: t.tier }));
  const family = getSubject(s.level, s.slug)?.family;
  if (!family) return [];
  return fullForecast(family as Parameters<typeof fullForecast>[0], key).map((t) => ({
    topic: t.topic,
    tier: forecastTier(t.probability),
  }));
}

// The tier a single topic carries, used to price topic-progress XP by how
// much the forecast says the topic matters. Null when the topic isn't in the
// subject's table (e.g. a renamed label).
export function tierForTopic(
  level: string,
  slug: string,
  topic: string
): ForecastTier | null {
  const key = `${level}/${slug}`;
  const table = FORECAST_TABLES[key];
  const want = normTopic(topic);
  if (table) {
    const hit = table.find((t) => normTopic(t.topic) === want);
    return hit ? hit.tier : null;
  }
  const family = getSubject(level as OwnedSubject["level"], slug)?.family;
  if (!family) return null;
  const hit = fullForecast(family as Parameters<typeof fullForecast>[0], key).find(
    (t) => normTopic(t.topic) === want
  );
  return hit ? forecastTier(hit.probability) : null;
}

export async function computeRisk(customerId: string): Promise<SubjectRisk[]> {
  const subjects = await ownedSubjects(customerId);
  if (subjects.length === 0) return [];

  const [progressRows, mistakeRows] = await Promise.all([
    prisma.topicProgress.findMany({ where: { customerId } }),
    prisma.mistakeEntry.findMany({
      where: { customerId, resolved: false },
      select: { level: true, slug: true, topic: true },
    }),
  ]);

  const statusMap = new Map<string, number>();
  for (const r of progressRows) {
    statusMap.set(`${r.level}/${r.slug}/${normTopic(r.topic)}`, r.status);
  }
  const mistakeMap = new Map<string, number>();
  for (const m of mistakeRows) {
    const k = `${m.level}/${m.slug}/${normTopic(m.topic)}`;
    mistakeMap.set(k, (mistakeMap.get(k) ?? 0) + 1);
  }

  return subjects.map((s) => {
    const raw = topicsWithTiers(s);
    const totalWeight = raw.reduce((sum, t) => sum + TIER_WEIGHT[t.tier], 0) || 1;

    let fromVeryHigh = 0;
    let fromHigh = 0;
    let fromMistakes = 0;
    let unresolvedMistakes = 0;
    const untouchedVeryHigh: string[] = [];

    const topics: TopicRisk[] = raw.map(({ topic, tier }) => {
      const marks = (TIER_WEIGHT[tier] / totalWeight) * 100;
      const key = `${s.level}/${s.slug}/${normTopic(topic)}`;
      const status = statusMap.get(key) ?? 0;
      const mistakes = mistakeMap.get(key) ?? 0;
      unresolvedMistakes += mistakes;

      const statusRisk = STATUS_RISK[status] ?? 1;
      const penalty = Math.min(mistakes * MISTAKE_PENALTY, MISTAKE_PENALTY_CAP);
      const fraction = Math.min(statusRisk + penalty, 1);
      const atRisk = marks * fraction;

      // Decomposition: status-driven risk by tier; penalty tracked separately.
      const statusPart = marks * statusRisk;
      const penaltyPart = atRisk - statusPart;
      if (tier === "very-high") fromVeryHigh += statusPart;
      else if (tier === "high") fromHigh += statusPart;
      fromMistakes += Math.max(penaltyPart, 0);
      if (tier === "very-high" && status === 0) untouchedVeryHigh.push(topic);

      return { topic, tier, marks, status, mistakes, atRisk };
    });

    topics.sort((a, b) => b.atRisk - a.atRisk);
    const marksAtRisk = Math.round(topics.reduce((sum, t) => sum + t.atRisk, 0));

    return {
      level: s.level,
      slug: s.slug,
      name: s.name,
      levelShort: s.levelShort,
      marksAtRisk: Math.min(marksAtRisk, 100),
      fromVeryHigh: Math.round(fromVeryHigh),
      fromHigh: Math.round(fromHigh),
      fromMistakes: Math.round(fromMistakes),
      unresolvedMistakes,
      untouchedVeryHigh,
      topics,
    };
  });
}

// ── Rescue plan (the panic button) ───────────────────────────────────────
// Rank the not-yet-confident VERY HIGH / HIGH topics by marks recoverable per
// step of effort, then lay them out day by day until the first paper.

export interface RescueItem {
  subjectName: string;
  levelShort: string;
  level: string;
  slug: string;
  topic: string;
  tier: ForecastTier;
  status: number;
  recoverable: number; // marks that come off the meter if made confident
  action: string;
}

export interface RescueDay {
  dayNumber: number; // 1 = today
  items: RescueItem[];
}

export interface RescuePlan {
  daysUntilPaper: number;
  planDays: RescueDay[];
  extras: RescueItem[]; // didn't fit the window, "if you find extra time"
  protectedBySubject: { name: string; levelShort: string; marks: number }[];
  unresolvedMistakes: number;
}

const ACTION_BY_STATUS = [
  "Learn it from the Forecast + your notes",
  "Drill it with Vault questions",
  "Timed practice, full questions, no notes",
] as const;

const SLOTS_PER_DAY = 3;
const MAX_PLAN_DAYS = 14;

export function buildRescuePlan(
  risks: SubjectRisk[],
  daysUntilPaper: number,
  unresolvedMistakes: number
): RescuePlan {
  const pool: RescueItem[] = [];
  for (const r of risks) {
    for (const t of r.topics) {
      if (t.status >= 3) continue;
      if (t.tier !== "very-high" && t.tier !== "high") continue;
      const recoverable = t.atRisk - t.marks * STATUS_RISK[3];
      pool.push({
        subjectName: r.name,
        levelShort: r.levelShort,
        level: r.level,
        slug: r.slug,
        topic: t.topic,
        tier: t.tier,
        status: t.status,
        recoverable,
        action: ACTION_BY_STATUS[Math.min(t.status, 2)],
      });
    }
  }
  // Highest marks recovered per step of effort first (a "revised" VERY HIGH
  // topic beats an untouched HIGH one).
  pool.sort(
    (a, b) =>
      b.recoverable / (3 - b.status) - a.recoverable / (3 - a.status) ||
      b.recoverable - a.recoverable
  );

  const days = Math.max(1, Math.min(daysUntilPaper, MAX_PLAN_DAYS));
  const capacity = days * SLOTS_PER_DAY;
  const scheduled = pool.slice(0, capacity);
  const extras = pool.slice(capacity, capacity + 6);

  // Interleave subjects: round-robin across per-subject queues, preserving
  // each queue's priority order, so no day is three slabs of one subject.
  const queues = new Map<string, RescueItem[]>();
  for (const item of scheduled) {
    const k = `${item.level}/${item.slug}`;
    const q = queues.get(k) ?? [];
    q.push(item);
    queues.set(k, q);
  }
  const interleaved: RescueItem[] = [];
  while (interleaved.length < scheduled.length) {
    for (const q of queues.values()) {
      const next = q.shift();
      if (next) interleaved.push(next);
    }
  }

  const planDays: RescueDay[] = [];
  for (let d = 0; d < days; d++) {
    const items = interleaved.slice(d * SLOTS_PER_DAY, (d + 1) * SLOTS_PER_DAY);
    if (items.length === 0) break;
    planDays.push({ dayNumber: d + 1, items });
  }

  const bySubject = new Map<string, { name: string; levelShort: string; marks: number }>();
  for (const item of scheduled) {
    const k = `${item.level}/${item.slug}`;
    const entry = bySubject.get(k) ?? {
      name: item.subjectName,
      levelShort: item.levelShort,
      marks: 0,
    };
    entry.marks += item.recoverable;
    bySubject.set(k, entry);
  }
  const protectedBySubject = [...bySubject.values()]
    .map((e) => ({ ...e, marks: Math.round(e.marks) }))
    .sort((a, b) => b.marks - a.marks);

  return { daysUntilPaper, planDays, extras, protectedBySubject, unresolvedMistakes };
}
