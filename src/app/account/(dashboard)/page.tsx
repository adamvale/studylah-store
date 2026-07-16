import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import {
  ownedSubjects,
  dailyPicks,
  toPublicDaily,
  sgDay,
  streakState,
} from "@/lib/server/study";
import { computeRisk } from "@/lib/server/risk";
import { getScoreHistory } from "@/lib/server/progress";
import { DailyQuiz, type NextUpItem } from "@/components/daily-quiz";
import { GettingStarted, type StartStep } from "@/components/getting-started";
import { TierPill } from "@/components/heat";
import { QuestBoard, type BossInfo } from "@/components/quest-board";
import { HomeBase } from "@/components/home-base";
import { PhaseBanner, WeekReport } from "@/components/today-pulse";

export const metadata: Metadata = { title: "Today" };

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

// Kept outside the component so the impurity (Date.now) isn't called during
// render, see react-hooks/purity.
function staleAttemptSubject(
  history: { subjectName: string; level: string; slug: string; latest: { at: string } }[]
): { subjectName: string; level: string; slug: string } | null {
  const cutoff = Date.now() - 2 * WEEK_MS;
  const stale = history.find((h) => new Date(h.latest.at).getTime() < cutoff);
  return stale ? { subjectName: stale.subjectName, level: stale.level, slug: stale.slug } : null;
}

function todayLabel(): string {
  return new Date().toLocaleDateString("en-SG", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Asia/Singapore",
  });
}

interface MissionItem {
  done: boolean;
  minutes: number;
  xp: string; // quest reward label, mirrors the server award rules
  title: string;
  detail: string;
  href: string;
  cta: string;
}

// The one question every student actually has: "what should I do right now?"
// This page answers it with a short, time-boxed mission computed from every
// system in StudyLand, then gets out of the way.
export default async function TodayPage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  await requireMaster(customerId);

  const customer = await prisma.customer.findUnique({
    where: { id: customerId },
    select: { email: true },
  });
  const subjects = await ownedSubjects(customerId);
  const today = sgDay();

  const [dayRows, unresolvedMistakes, examDates, orderCount, downloads, attempts, goals] =
    await Promise.all([
      prisma.dailyQuizDay.findMany({ where: { customerId }, orderBy: { day: "desc" } }),
      prisma.mistakeEntry.count({ where: { customerId, resolved: false } }),
      prisma.examDate.count({ where: { customerId } }),
      prisma.order.count({ where: { customerId, status: { not: "refunded" } } }),
      prisma.downloadEvent.count({ where: { orderItem: { order: { customerId } } } }),
      prisma.diagnosticAttempt.count({ where: { customerId } }),
      prisma.subjectGoal.count({ where: { customerId } }),
    ]);

  const streak = await streakState(customerId, today);
  const todayRow = dayRows.find((r) => r.day === today) ?? null;

  const picks = (await dailyPicks(customerId, subjects, today, !todayRow)).map(toPublicDaily);
  const risks = await computeRisk(customerId);
  const history = await getScoreHistory(customerId, customer?.email ?? "");

  // The next topic worth a real session: the highest marks-at-risk topic that
  // isn't confident yet, across every owned subject.
  let focusTopic: { topic: string; tier: "very-high" | "high" | "moderate" | "watch"; subjectName: string } | null =
    null;
  let boss: BossInfo | null = null;
  let best = -1;
  for (const r of risks) {
    for (const t of r.topics) {
      if (t.status >= 3) continue;
      if (t.atRisk > best) {
        best = t.atRisk;
        focusTopic = { topic: t.topic, tier: t.tier, subjectName: r.name };
        // The weekly boss IS the biggest at-risk topic; its HP falls as the
        // topic's study-plan status climbs toward Confident (3 steps).
        boss = {
          topic: t.topic,
          subjectName: r.name,
          tier: t.tier,
          hpPct: Math.round(((3 - t.status) / 3) * 100),
        };
      }
      break; // topics are sorted by atRisk desc, first unfinished is the subject's best
    }
  }

  const stale = staleAttemptSubject(history);
  const neverChecked = attempts === 0;

  // ── The mission ─────────────────────────────────────────────────────────
  const mission: MissionItem[] = [];
  mission.push({
    done: Boolean(todayRow),
    minutes: 2,
    xp: "+20-35 XP",
    title: "The daily three",
    detail: streak.doneToday
      ? `Done, ${todayRow?.correct ?? 0}/${todayRow?.answered ?? 3} today.`
      : streak.current > 0
      ? `Keep the ${streak.current}-day streak alive.`
      : "Three questions on your most-likely topics, marked instantly.",
    href: "#daily",
    cta: "Answer them",
  });
  if (unresolvedMistakes > 0) {
    mission.push({
      done: false,
      minutes: 5,
      xp: "+25 XP each",
      title: `Clear ${Math.min(unresolvedMistakes, 2)} from the mistake notebook`,
      detail: `${unresolvedMistakes} unresolved, each one is a mark leak with your name on it.`,
      href: "/account/mistakes",
      cta: "Open notebook",
    });
  }
  if (focusTopic) {
    mission.push({
      done: false,
      minutes: 25,
      xp: "+10 XP + topic XP",
      title: `One real session: ${focusTopic.topic}`,
      detail: `${focusTopic.subjectName}, your biggest marks-at-risk topic right now. Start the focus timer and work it.`,
      href: "/account/timer",
      cta: "Start the timer",
    });
  }
  if (!neverChecked && stale) {
    mission.push({
      done: false,
      minutes: 7,
      xp: "+15 XP (+10 on a best)",
      title: `Re-check ${stale.subjectName}`,
      detail: "It's been 2+ weeks since your last readiness check, see if the work moved the needle.",
      href: `/diagnostic/${stale.level}/${stale.slug}`,
      cta: "Predict your mark",
    });
  }
  if (examDates === 0 && subjects.length > 0) {
    mission.push({
      done: false,
      minutes: 2,
      xp: "unlocks pacing",
      title: "Add your paper dates",
      detail: "The pacing engine and rescue plan follow your real timetable once they know it.",
      href: "/account/study",
      cta: "Add dates",
    });
  }
  const openItems = mission.filter((m) => !m.done);
  const totalMinutes = openItems.reduce((s, m) => s + m.minutes, 0);

  // What the quiz suggests once it's marked, the session chains instead of
  // dead-ending.
  const nextUp: NextUpItem[] = [];
  if (unresolvedMistakes > 0) {
    nextUp.push({
      label: `Clear ${Math.min(unresolvedMistakes, 2)} mistakes`,
      detail: `${unresolvedMistakes} waiting in the notebook`,
      href: "/account/mistakes",
    });
  }
  if (focusTopic) {
    nextUp.push({
      label: `25 focused minutes on ${focusTopic.topic}`,
      detail: focusTopic.subjectName,
      href: "/account/timer",
    });
  }
  if (nextUp.length === 0) {
    nextUp.push({
      label: "See your progress",
      detail: "Marks at risk, calibration, score history",
      href: "/account/progress",
    });
  }

  // ── Onboarding runway (until all four are done) ────────────────────────
  const steps: StartStep[] = [
    {
      done: downloads > 0,
      label: "Download your PDFs",
      detail: "Forecast first, it tells the rest of the system where to aim.",
      href: "/account/orders",
      cta: "Orders",
    },
    {
      done: attempts > 0,
      label: "Predict your mark (7 minutes, free)",
      detail: "Ten questions on your most-likely topics, your baseline before the work starts.",
      href: "/diagnostic",
      cta: "Take the check",
    },
    {
      done: examDates > 0 || goals > 0,
      label: "Set your paper dates and grade goals",
      detail: "The pacing engine and rescue plan follow your real timetable.",
      href: "/account/study",
      cta: "Set them",
    },
    {
      done: dayRows.length > 0,
      label: "Start your daily streak",
      detail: "Three questions a day on the topics that matter, the habit that moves marks.",
      href: "#daily",
      cta: "Do today's three",
    },
  ];

  // ── Empty state: no purchases yet ───────────────────────────────────────
  if (orderCount === 0) {
    return (
      <div className="rounded-2xl border border-hairline bg-surface p-8 text-center">
        <p className="font-display text-lg font-bold text-ink">
          StudyLand wakes up with your first subject
        </p>
        <p className="mt-2 text-sm text-body">
          Buy any forecast and this page becomes your daily mission: what to
          practise, what to fix, and what to work next, computed fresh every
          day until your papers.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/subjects"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
          >
            Browse subjects
          </Link>
          <Link
            href="/diagnostic"
            className="rounded-lg border border-hairline px-5 py-2.5 text-sm font-medium text-ink hover:border-accent"
          >
            Predict your mark, free
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <HomeBase
        todayDone={streak.doneToday}
        streak={streak.current}
        dueMistakes={unresolvedMistakes}
        shields={streak.shields}
      />

      {/* Mission brief */}
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-2xl font-bold text-ink">{todayLabel()}</h2>
          {streak.current > 0 && (
            <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
              🔥 {streak.current}-day streak{streak.doneToday ? "" : ", today keeps it"}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-body">
          {openItems.length === 0
            ? "Mission complete. Come back tomorrow, the system resets at midnight."
            : `Today's quests: ${openItems.length}, about ${totalMinutes} minutes. Do them in order, the XP is real.`}
        </p>
        {/* Which season of the campaign we're in, driven by real paper dates */}
        <PhaseBanner customerId={customerId} subjects={subjects} />
      </div>

      <GettingStarted steps={steps} />

      {/* The mission list, quest board in the app, checklist on the web */}
      {openItems.length > 0 && <QuestBoard mission={mission} boss={boss} />}

      {/* The daily three, in place */}
      <div id="daily" className="scroll-mt-20">
        {picks.length > 0 && (
          <DailyQuiz
            questions={picks}
            streak={streak.current}
            doneToday={streak.doneToday}
            todayScore={todayRow?.correct ?? null}
            todayTotal={todayRow?.answered ?? null}
            nextUp={nextUp}
          />
        )}
      </div>

      {/* Honest momentum: the week in four numbers + the next lever */}
      <WeekReport
        customerId={customerId}
        nextLever={
          focusTopic
            ? { topic: focusTopic.topic, subjectName: focusTopic.subjectName }
            : null
        }
      />

      {/* Compact risk line, the full meters live on Progress */}
      {risks.length > 0 && (
        <section className="rounded-2xl border border-hairline bg-surface p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-lg font-bold text-ink">Marks at risk</h3>
            <span className="flex items-center gap-4 text-xs">
              <Link href="/account/progress" className="font-medium text-accent hover:underline">
                Full breakdown →
              </Link>
              <Link href="/account/rescue" className="font-medium text-body hover:text-ink">
                Behind? Rescue plan →
              </Link>
            </span>
          </div>
          <ul className="mt-3 space-y-2">
            {risks.map((r) => (
              <li key={`${r.level}/${r.slug}`} className="flex items-center gap-3">
                <span className="w-40 shrink-0 truncate text-sm text-ink">{r.name}</span>
                <span className="h-2 flex-1 overflow-hidden rounded-full bg-night">
                  <span
                    className={`block h-full rounded-full ${
                      r.marksAtRisk >= 60 ? "bg-coral" : r.marksAtRisk >= 30 ? "bg-accent" : "bg-guarantee"
                    }`}
                    style={{ width: `${Math.min(r.marksAtRisk, 100)}%` }}
                  />
                </span>
                <span className="w-14 shrink-0 text-right font-mono text-xs text-body">
                  ~{r.marksAtRisk}/100
                </span>
              </li>
            ))}
          </ul>
          {focusTopic && (
            <p className="mt-3 text-xs text-body">
              Biggest single lever right now:{" "}
              <span className="text-ink">{focusTopic.topic}</span> ({focusTopic.subjectName}){" "}
              <TierPill tier={focusTopic.tier} />
            </p>
          )}
        </section>
      )}
    </div>
  );
}
