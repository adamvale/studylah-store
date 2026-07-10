import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import {
  ownedSubjects,
  pickDailyQuestions,
  toPublicDaily,
  sgDay,
  computeStreak,
} from "@/lib/server/study";
import { getScoreHistory, getCohortStanding } from "@/lib/server/progress";
import { DailyQuiz } from "@/components/daily-quiz";
import { ScoreHistorySection, type ProgressCard } from "@/components/score-history";

export const metadata: Metadata = { title: "Daily" };

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

// Kept out of the component body so the impurity (Date.now) isn't called
// during render — see react-hooks/purity.
function weeksSince(iso: string): number {
  return Math.floor((Date.now() - new Date(iso).getTime()) / WEEK_MS);
}

export default async function DailyPage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");

  const customer = await prisma.customer.findUnique({
    where: { id: customerId },
    select: { email: true },
  });
  const subjects = await ownedSubjects(customerId);
  const today = sgDay();

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
  const streak = computeStreak(
    dayRows.map((r) => r.day),
    today
  );
  const todayRow = dayRows.find((r) => r.day === today) ?? null;

  const picks = pickDailyQuestions(subjects, customerId, today).map(toPublicDaily);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl font-bold text-ink">Your daily three</h2>
        <p className="mt-1 text-sm text-body">
          Three questions a day from your subjects&apos; most-likely topics.
          Retrieval practice is the single most effective way to make revision
          stick — and the streak keeps you honest.
        </p>
      </div>

      {subjects.length === 0 ? (
        <div className="rounded-2xl border border-hairline bg-surface p-8 text-center">
          <p className="font-display text-lg font-bold text-ink">
            Your daily practice starts with a subject
          </p>
          <p className="mt-2 text-sm text-body">
            Own a forecast and its Vault questions feed straight into your daily
            three.
          </p>
          <Link
            href="/account/add-subjects"
            className="mt-4 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
          >
            Add a subject
          </Link>
        </div>
      ) : picks.length === 0 ? (
        <div className="rounded-2xl border border-hairline bg-surface p-8 text-center text-sm text-body">
          No practice questions for your subjects yet — check back soon.
        </div>
      ) : (
        <DailyQuiz
          questions={picks}
          streak={streak.current}
          doneToday={streak.doneToday}
          todayScore={todayRow?.correct ?? null}
          todayTotal={todayRow?.answered ?? null}
        />
      )}

      {subjects.length > 0 && <ScoreHistorySection cards={cards} />}
    </div>
  );
}
