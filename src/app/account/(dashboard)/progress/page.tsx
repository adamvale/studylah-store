import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { ownedSubjects, calibrationFrom } from "@/lib/server/study";
import { computeRisk } from "@/lib/server/risk";
import { getScoreHistory, getCohortStanding } from "@/lib/server/progress";
import { unlockedBadgeIds } from "@/lib/server/xp";
import { RiskMeterSection, CalibrationCard } from "@/components/risk-meter";
import { BadgeCase } from "@/components/game";
import { ScoreHistorySection, type ProgressCard } from "@/components/score-history";

export const metadata: Metadata = { title: "Progress" };

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

// Kept out of the component body so the impurity (Date.now) isn't called
// during render, see react-hooks/purity.
function weeksSince(iso: string): number {
  return Math.floor((Date.now() - new Date(iso).getTime()) / WEEK_MS);
}

// The measurement tab: marks at risk, calibration, and score history. The
// DOING happens on Today, this page answers "is it working?".
export default async function ProgressPage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");

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
      <div>
        <h2 className="font-display text-2xl font-bold text-ink">Is it working?</h2>
        <p className="mt-1 text-sm text-body">
          The honest read-out: how many marks are still in play, how reliable
          your &ldquo;sure&rdquo; is, and whether your readiness scores are
          moving. Do the work on{" "}
          <Link href="/account" className="font-medium text-accent hover:underline">
            Today
          </Link>{" "}
, watch it land here.
        </p>
      </div>

      <RiskMeterSection risks={risks} />

      <BadgeCase unlocked={badges} />

      <CalibrationCard taps={calibration.taps} buckets={calibration.buckets} />

      <ScoreHistorySection cards={cards} />
    </div>
  );
}
