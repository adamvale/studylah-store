import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import {
  ownedSubjects,
  ownedSubjectsAll,
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
import { type BossInfo } from "@/components/quest-board";
import { PhaseBanner, WeekReport } from "@/components/today-pulse";
import {
  IconFlame,
  IconCheckCircle,
  IconRepeat,
  IconCrown,
  IconCap,
  IconSparkle,
  IconBolt,
  IconGhost,
  IconBook,
} from "@/components/icons";

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

// "Hey Daniel!" from the email's local part, best-effort.
function firstNameFrom(email: string): string {
  const raw = email.split("@")[0] ?? "";
  const word = raw.split(/[._\-+]/)[0] ?? "";
  if (!word) return "there";
  return word.charAt(0).toUpperCase() + word.slice(1, 12);
}

const SG_DAYKEY = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Singapore",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});
const SG_DOW = new Intl.DateTimeFormat("en-SG", {
  timeZone: "Asia/Singapore",
  weekday: "narrow",
});

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
  // Subjects whose 2026 exams are done retire from the study tools (the time
  // gate); tell the student where their stuff went, once, quietly.
  const allSubjects = await ownedSubjectsAll(customerId);
  const retired = allSubjects.filter(
    (a) => !subjects.some((s) => s.level === a.level && s.slug === a.slug)
  );
  const today = sgDay();

  const [dayRows, unresolvedMistakes, examDates, orderCount, downloads, attempts, goals, weekXpRows, reviewsDue] =
    await Promise.all([
      prisma.dailyQuizDay.findMany({ where: { customerId }, orderBy: { day: "desc" } }),
      prisma.mistakeEntry.count({ where: { customerId, resolved: false } }),
      prisma.examDate.count({ where: { customerId } }),
      prisma.order.count({ where: { customerId, status: { not: "refunded" } } }),
      prisma.downloadEvent.count({ where: { orderItem: { order: { customerId } } } }),
      prisma.diagnosticAttempt.count({ where: { customerId } }),
      prisma.subjectGoal.count({ where: { customerId } }),
      prisma.xpEvent.findMany({
        where: { customerId, createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } },
        select: { createdAt: true, amount: true },
      }),
      prisma.reviewCard.count({ where: { customerId, dueAt: { lte: new Date() } } }),
    ]);

  // The hero chart: XP earned per Singapore day, the week at a glance.
  const weekDays: { key: string; dow: string; xp: number }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
    weekDays.push({ key: SG_DAYKEY.format(d), dow: SG_DOW.format(d), xp: 0 });
  }
  let weekXp = 0;
  for (const ev of weekXpRows) {
    const key = SG_DAYKEY.format(ev.createdAt);
    const slot = weekDays.find((w) => w.key === key);
    if (slot) {
      slot.xp += ev.amount;
      weekXp += ev.amount;
    }
  }
  const maxDayXp = Math.max(1, ...weekDays.map((w) => w.xp));

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
      {/* ── Hero: the greeting + the week, app-dashboard style. The layout
          follows the Query reference: soft-glow bloom behind the greeting,
          a small agent chip, the gradient name, then exactly TWO primary
          action cards so the screen asks for one decision, not ten. ── */}
      <div className="relative">
        <div className="sl-bloom" aria-hidden />
        <span className="chip !py-1 text-[11px]">
          <IconSparkle size={13} className="text-accent" />
          StudyLand
        </span>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-sm font-medium text-body">{todayLabel()}</p>
            <h2 className="mt-0.5 font-display text-3xl font-extrabold tracking-tight text-ink">
              Hey <span className="sl-grad-text">{firstNameFrom(customer?.email ?? "")}</span>!
            </h2>
          </div>
          {streak.current > 0 && (
            <span className="chip">
              <IconFlame size={14} className="text-accent" />
              {streak.current}-day streak{streak.doneToday ? "" : " · today keeps it"}
            </span>
          )}
        </div>
        <p className="mt-1.5 text-sm text-body">
          {openItems.length === 0
            ? "Mission complete. Come back tomorrow, the system resets at midnight."
            : `${openItems.length} quest${openItems.length === 1 ? "" : "s"} today, about ${totalMinutes} minutes. The XP is real.`}
        </p>

        {/* The two primary actions (the reference's Scan/Ask pair): the daily
            three, and whichever repair surface currently matters most. */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Link
            href="#daily"
            className="glass group p-4 transition-transform hover:-translate-y-0.5"
          >
            <span className="icon-orb text-accent" aria-hidden>
              <IconBolt size={20} />
            </span>
            <p className="mt-3 font-display text-sm font-bold leading-snug text-ink">
              The daily three
            </p>
            <p className="mt-0.5 text-xs text-body">
              {streak.doneToday ? "Done today, review below" : "3 questions · ~2 min"}
            </p>
          </Link>
          {unresolvedMistakes > 0 ? (
            <Link
              href="/account/mistakes"
              className="glass group p-4 transition-transform hover:-translate-y-0.5"
            >
              <span className="icon-orb text-coral" aria-hidden>
                <IconGhost size={20} />
              </span>
              <p className="mt-3 font-display text-sm font-bold leading-snug text-ink">
                Clear mistakes
              </p>
              <p className="mt-0.5 text-xs text-body">
                {unresolvedMistakes} waiting · +25 XP each
              </p>
            </Link>
          ) : (
            <Link
              href="/account/learn"
              className="glass group p-4 transition-transform hover:-translate-y-0.5"
            >
              <span className="icon-orb text-accent" aria-hidden>
                <IconBook size={20} />
              </span>
              <p className="mt-3 font-display text-sm font-bold leading-snug text-ink">
                Learn your way
              </p>
              <p className="mt-0.5 text-xs text-body">FastTrack, drills, practice</p>
            </Link>
          )}
        </div>

        {/* One compact card: the week's XP + today's counters, no tile sprawl */}
        <div className="glass-deep mt-4 p-5">
          <div className="flex items-baseline justify-between">
            <p className="text-sm font-semibold text-body">This week</p>
            <Link href="/account/progress" className="text-xs font-bold text-accent hover:underline">
              Details →
            </Link>
          </div>
          <div className="mt-1 flex items-end justify-between gap-4">
            <p className="font-display text-4xl font-extrabold text-ink">
              {weekXp}
              <span className="ml-1.5 text-base font-bold text-body">XP</span>
            </p>
            <div className="flex h-14 flex-1 items-end justify-end gap-1.5" aria-hidden>
              {weekDays.map((w, i) => (
                <div key={w.key} className="flex w-6 flex-col items-center gap-1 sm:w-8">
                  <div
                    className={`w-full rounded-full ${
                      w.xp > 0 ? "bg-gradient-to-t from-violet-500 to-fuchsia-300" : "bg-white/10"
                    }`}
                    style={{ height: `${Math.max(6, Math.round((w.xp / maxDayXp) * 40))}px` }}
                  />
                  <span className={`text-[10px] ${i === 6 ? "font-bold text-ink" : "text-body/70"}`}>
                    {w.dow}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-6 border-t border-white/10 pt-3 text-sm">
            <span className="flex items-center gap-2 text-body">
              <IconCheckCircle size={16} className="text-guarantee" />
              <span className="font-display font-extrabold text-ink">
                {mission.filter((m) => m.done).length}/{mission.length}
              </span>
              quests today
            </span>
            <Link href="/account/drills" className="flex items-center gap-2 text-body hover:text-ink">
              <IconRepeat size={16} className="text-accent" />
              <span className="font-display font-extrabold text-ink">{reviewsDue}</span>
              reviews due
            </Link>
          </div>
        </div>

        {/* Which season of the campaign we're in, driven by real paper dates */}
        <PhaseBanner customerId={customerId} subjects={subjects} />
        {retired.length > 0 && (
          <div className="mt-3 rounded-2xl border border-hairline bg-surface px-4 py-3 text-sm text-body">
            <IconCap size={14} className="mr-1 inline text-body" aria-hidden /> Exams done:{" "}
            <span className="font-medium text-ink">
              {retired.map((r) => r.name).join(", ")}
            </span>
            . {retired.length === 1 ? "That subject has" : "Those subjects have"}{" "}
            retired from your daily tools. Your PDFs stay in{" "}
            <Link href="/account/orders" className="font-medium text-accent hover:underline">
              Orders
            </Link>
            , and the guarantee window stays open as published.
          </div>
        )}
      </div>

      <GettingStarted steps={steps} />

      {/* Priority tasks, the reference's checklist card */}
      {openItems.length > 0 && (
        <section className="glass p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-lg font-extrabold text-ink">
              Priority tasks <span className="chip ml-1 !px-2 !py-0.5 text-[10px]">Today</span>
            </h3>
            <span className="text-xs text-body">~{totalMinutes} min total</span>
          </div>
          <ul className="mt-3 space-y-1">
            {mission.map((m) => (
              <li key={m.title}>
                <Link
                  href={m.href}
                  className={`group flex items-start gap-3 rounded-2xl px-2 py-2.5 transition-colors hover:bg-white/5 ${
                    m.done ? "opacity-55" : ""
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] ${
                      m.done
                        ? "border-guarantee/60 bg-guarantee/20 text-guarantee"
                        : "border-hairline text-transparent group-hover:border-accent/60"
                    }`}
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block text-sm font-semibold text-ink ${m.done ? "line-through decoration-body/50" : ""}`}>
                      {m.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-body">{m.detail}</span>
                  </span>
                  <span className="shrink-0 text-right">
                    <span className="block text-[11px] font-bold text-accent">{m.xp}</span>
                    <span className="block text-[11px] text-body">~{m.minutes} min</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {boss && (
            <p className="mt-2 border-t border-hairline pt-2.5 text-xs text-body">
              <IconCrown size={14} className="mr-1 inline text-accent" aria-hidden /> Weekly boss:{" "}
              <span className="font-semibold text-ink">{boss.topic}</span> ({boss.subjectName}), {boss.hpPct}% HP left. Every study step lands a hit.
            </p>
          )}
        </section>
      )}

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

      {/* Your subjects, a swipeable strip of ring gauges */}
      {risks.length > 0 && (
        <section>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-lg font-extrabold text-ink">Your subjects</h3>
            <span className="flex items-center gap-4 text-xs">
              <Link href="/account/progress" className="font-bold text-accent hover:underline">
                Full breakdown →
              </Link>
              <Link href="/account/rescue" className="font-medium text-body hover:text-ink">
                Behind? Rescue →
              </Link>
            </span>
          </div>
          <div className="sl-strip mt-3">
            {risks.map((r) => {
              const pct = Math.min(r.marksAtRisk, 100);
              const tone = pct >= 60 ? "#ff6b6b" : pct >= 30 ? "#ffdc00" : "#3ddc84";
              const C = 2 * Math.PI * 17;
              return (
                <Link
                  key={`${r.level}/${r.slug}`}
                  href="/account/study"
                  className="glass w-40 p-4 transition-transform hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 40 40" className="h-12 w-12" aria-hidden>
                    <circle cx="20" cy="20" r="17" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="4" />
                    <circle
                      cx="20" cy="20" r="17" fill="none" stroke={tone} strokeWidth="4"
                      strokeLinecap="round" strokeDasharray={`${(pct / 100) * C} ${C}`}
                      transform="rotate(-90 20 20)"
                    />
                    <text x="20" y="24" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f3f1ff">
                      {pct}
                    </text>
                  </svg>
                  <p className="mt-2 truncate text-sm font-bold text-ink" title={r.name}>{r.name}</p>
                  <p className="text-[11px] text-body">~{pct}/100 marks at risk</p>
                </Link>
              );
            })}
          </div>
        </section>
      )}


    </div>
  );
}
