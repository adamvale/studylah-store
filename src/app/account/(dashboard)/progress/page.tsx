import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import { ownedSubjects, calibrationFrom } from "@/lib/server/study";
import { computeRisk } from "@/lib/server/risk";
import { getScoreHistory, getCohortStanding } from "@/lib/server/progress";
import { unlockedBadgeIds } from "@/lib/server/xp";
import { RiskMeterSection, CalibrationCard } from "@/components/risk-meter";
import { BadgeCase } from "@/components/game";
import { ScoreHistorySection, type ProgressCard } from "@/components/score-history";
import { PageHeading } from "@/components/page-heading";
import { RadarChart, type RadarAxis } from "@/components/radar-chart";

export const metadata: Metadata = { title: "Progress" };

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

// Kept out of the component body so the impurity (Date.now) isn't called
// during render, see react-hooks/purity.
function weeksSince(iso: string): number {
  return Math.floor((Date.now() - new Date(iso).getTime()) / WEEK_MS);
}

// Share of the last `window` days on which the student practised (0 to 100).
function activeDaysPct(days: string[], window = 14): number {
  const cutoff = new Date(Date.now() - (window - 1) * DAY_MS).toISOString().slice(0, 10);
  const active = new Set(days.filter((d) => d >= cutoff)).size;
  return Math.min(100, Math.round((active / window) * 100));
}

// The measurement tab: marks at risk, calibration, and score history. The
// DOING happens on Today, this page answers "is it working?".
export default async function ProgressPage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  await requireMaster(customerId);

  const customer = await prisma.customer.findUnique({
    where: { id: customerId },
    select: { email: true },
  });
  const subjects = await ownedSubjects(customerId);

  // Score history + anonymous cohort standing for each subject checked.
  const history = await getScoreHistory(customerId, customer?.email ?? "");
  const cards: ProgressCard[] = await Promise.all(
    history.map(async (h) => {
      const cohort = await getCohortStanding(
        h.level,
        h.slug,
        h.latest.score,
        h.latest.totalMarks
      );
      const prev = h.attempts.length >= 2 ? h.attempts[h.attempts.length - 2].pct : null;
      return {
        level: h.level,
        slug: h.slug,
        subjectName: h.subjectName,
        latestScore: h.latest.score,
        latestTotal: h.latest.totalMarks,
        latestPct: h.latest.pct,
        latestEstimate: h.latest.estimate,
        band: h.latest.band,
        prevPct: prev,
        points: h.attempts.map((a) => a.pct),
        cohortBeats: cohort?.beats ?? null,
        weeksSince: weeksSince(h.latest.at),
      };
    })
  );

  const dayRows = await prisma.dailyQuizDay.findMany({
    where: { customerId },
    orderBy: { day: "desc" },
  });
  const risks = await computeRisk(customerId);
  const calibration = calibrationFrom(dayRows);
  const badges = await unlockedBadgeIds(customerId);

  const [mistakeTotal, mistakeResolved] = await Promise.all([
    prisma.mistakeEntry.count({ where: { customerId } }),
    prisma.mistakeEntry.count({ where: { customerId, resolved: true } }),
  ]);

  // Learning-profile radar: six sides of getting exam-ready, each 0 to 100,
  // higher is better, all from the student's own data.
  const recentDays = dayRows.slice(0, 60);
  const answered = recentDays.reduce((s, r) => s + r.answered, 0);
  const correct = recentDays.reduce((s, r) => s + r.correct, 0);
  const sureBucket = calibration.buckets.find((b) => b.level === "sure");
  const radarAxes: RadarAxis[] = [
    {
      label: "Readiness",
      value: cards.length
        ? Math.round(
            cards.reduce((s, c) => s + Math.max(0, Math.min(100, c.latestPct)), 0) / cards.length
          )
        : 0,
    },
    { label: "Accuracy", value: answered ? Math.round((correct / answered) * 100) : 0 },
    {
      label: "Calibration",
      value: sureBucket
        ? sureBucket.pctRight
        : calibration.taps
          ? Math.round(
              calibration.buckets.reduce((s, b) => s + b.pctRight * b.n, 0) / calibration.taps
            )
          : 0,
    },
    { label: "Consistency", value: activeDaysPct(dayRows.map((r) => r.day)) },
    {
      label: "Coverage",
      value: subjects.length ? Math.round((cards.length / subjects.length) * 100) : 0,
    },
    {
      label: "Recall",
      value: mistakeTotal === 0 ? 100 : Math.round((mistakeResolved / mistakeTotal) * 100),
    },
  ];

  if (subjects.length === 0) {
    return (
      <div className="rounded-2xl border border-hairline bg-surface p-8 text-center">
        <p className="font-display text-lg font-bold text-ink">
          Progress starts with a subject
        </p>
        <p className="mt-2 text-sm text-body">
          Once you own a forecast, this page tracks your marks at risk, your
          calibration, and every readiness check you take.
        </p>
        <Link
          href="/account/add-subjects"
          className="mt-4 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
        >
          Add a subject
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PageHeading
        size="sm"
        description="The honest read-out: how many marks are still in play, how reliable your &quot;sure&quot; is, and whether your readiness scores are moving. Do the work on Today, watch it land here."
      >
        Is it working?
      </PageHeading>

      <section className="glass p-5">
        <h3 className="font-display text-lg font-bold text-ink">Your learning profile</h3>
        <p className="mt-1 text-sm text-body">
          Six sides of being exam-ready. The gold shows where you are now, the
          blue ring is a solid target to fill.
        </p>
        <div className="mt-2">
          <RadarChart axes={radarAxes} target={70} />
        </div>
      </section>

      <RiskMeterSection risks={risks} />

      <BadgeCase unlocked={badges} />

      <CalibrationCard taps={calibration.taps} buckets={calibration.buckets} />

      <ScoreHistorySection cards={cards} />
    </div>
  );
}
