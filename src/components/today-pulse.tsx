import Link from "next/link";
import { prisma } from "@/lib/db";
import { examPapersFor } from "@/lib/exam-dates-2026";
import type { OwnedSubject } from "@/lib/server/study";
import { NamedIcon, type IconName } from "@/components/icons";

// Two server-rendered cards for the Today page:
//   PhaseBanner - what season of the campaign we're in, driven by real SEAB
//                 paper dates (or the student's own entered dates).
//   WeekReport  - "your week", honest momentum numbers from stored events.

const DAY_MS = 24 * 60 * 60 * 1000;

// ── Phase banner ────────────────────────────────────────────────────────────

interface Phase {
  key: string;
  emoji: string;
  title: string;
  line: string;
  href?: string;
  cta?: string;
  border: string;
}

function phaseFor(days: number | null): Phase {
  if (days === null) {
    return {
      key: "build",
      emoji: "leaf",
      title: "Build phase",
      line: "No paper on the horizon yet, so the job is coverage: learn new topics and bank the daily three.",
      border: "border-hairline",
    };
  }
  if (days <= 7) {
    return {
      key: "war",
      emoji: "swords",
      title: `War week: first paper in ${days} day${days === 1 ? "" : "s"}`,
      line: "No new content now. Sharpen what you have: drills to zero, notebook cleared, one timed mock.",
      href: "/account/warroom",
      cta: "Open the War Room",
      border: "border-coral/60",
    };
  }
  if (days <= 30) {
    return {
      key: "sharpen",
      emoji: "target",
      title: `Sharpen phase: ${days} days to your first paper`,
      line: "Weak topics and timed practice beat new material from here. Let the rescue plan pick your battles.",
      href: "/account/rescue",
      cta: "Rescue plan",
      border: "border-accent/50",
    };
  }
  if (days <= 60) {
    return {
      key: "consolidate",
      emoji: "shield",
      title: `Consolidate phase: ${days} days to your first paper`,
      line: "Close the gaps: finish remaining topics, keep the daily three streak, start the drills habit now.",
      href: "/account/drills",
      cta: "Open Drills",
      border: "border-teal/50",
    };
  }
  return {
    key: "build",
    emoji: "leaf",
    title: `Build phase: ${days} days to your first paper`,
    line: "Time is on your side. Cover new topics steadily, the daily three plus one real session a day compounds.",
    href: "/account/study",
    cta: "Study plan",
    border: "border-hairline",
  };
}

export async function PhaseBanner({
  customerId,
  subjects,
}: {
  customerId: string;
  subjects: OwnedSubject[];
}) {
  const now = Date.now();
  // Own entered dates first, then the official SEAB table.
  const own = await prisma.examDate.findFirst({
    where: { customerId, at: { gt: new Date() } },
    orderBy: { at: "asc" },
  });
  let target = own?.at.getTime() ?? null;
  if (target === null) {
    const official = subjects
      .flatMap((s) => examPapersFor(s.level, s.slug))
      .map((p) => new Date(p.at).getTime())
      .filter((t) => t > now)
      .sort((a, b) => a - b)[0];
    target = official ?? null;
  }
  const days = target === null ? null : Math.max(0, Math.ceil((target - now) / DAY_MS));
  const phase = phaseFor(days);

  return (
    <div
      className={`mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border ${phase.border} bg-surface px-4 py-3`}
    >
      <p className="min-w-0 text-sm text-body">
        <span className="font-display font-bold text-ink">
          <NamedIcon name={phase.emoji as IconName} size={16} className="mr-1 inline text-accent" /> {phase.title}.
        </span>{" "}
        {phase.line}
      </p>
      {phase.href && phase.cta && (
        <Link
          href={phase.href}
          className="shrink-0 rounded-lg border border-hairline px-3 py-1.5 text-xs font-bold text-accent hover:border-accent"
        >
          {phase.cta} →
        </Link>
      )}
    </div>
  );
}

// ── Week report ─────────────────────────────────────────────────────────────

export async function WeekReport({
  customerId,
  nextLever,
}: {
  customerId: string;
  nextLever: { topic: string; subjectName: string } | null;
}) {
  const since = new Date(Date.now() - 7 * DAY_MS);
  const [days, cleared, reviews, xp] = await Promise.all([
    prisma.dailyQuizDay.findMany({
      where: { customerId, createdAt: { gte: since } },
      select: { answered: true, correct: true },
    }),
    prisma.xpEvent.count({
      where: { customerId, kind: "mistake_cleared", createdAt: { gte: since } },
    }),
    prisma.reviewCard.count({
      where: { customerId, updatedAt: { gte: since }, reps: { gt: 0 } },
    }),
    prisma.xpEvent.aggregate({
      where: { customerId, createdAt: { gte: since } },
      _sum: { amount: true },
    }),
  ]);

  const answered = days.reduce((s, d) => s + d.answered, 0);
  const correct = days.reduce((s, d) => s + d.correct, 0);
  const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : null;
  const weekXp = xp._sum.amount ?? 0;

  // Nothing happened this week and nothing to aim at: stay quiet.
  if (answered === 0 && cleared === 0 && reviews === 0 && !nextLever) return null;

  const stat = (value: string, label: string) => (
    <div className="rounded-xl border border-hairline bg-night px-3 py-2 text-center">
      <p className="font-display text-lg font-black text-ink">{value}</p>
      <p className="text-[10px] uppercase tracking-wide text-body">{label}</p>
    </div>
  );

  return (
    <section className="mt-6 rounded-2xl border border-hairline bg-surface p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-display text-lg font-bold text-ink">
          Your week
        </h2>
        <span className="text-xs text-body">
          last 7 days{weekXp > 0 ? ` · +${weekXp} XP` : ""}
        </span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {stat(`${days.length}/7`, "quiz days")}
        {stat(accuracy === null ? "-" : `${accuracy}%`, "accuracy")}
        {stat(String(cleared), "monsters cleared")}
        {stat(String(reviews), "cards reviewed")}
      </div>
      {nextLever && (
        <p className="mt-3 text-sm text-body">
          Biggest lever for next week:{" "}
          <span className="font-medium text-ink">
            {nextLever.topic} ({nextLever.subjectName})
          </span>
          . One real session there moves your meter more than anything else.
        </p>
      )}
    </section>
  );
}
