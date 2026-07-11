"use client";

import { useMemo, useState } from "react";
import { TierPill, type ForecastTier } from "@/components/heat";
import { CampaignMap } from "@/components/campaign-map";

export interface PlanTopic {
  topic: string;
  tier: ForecastTier;
}

export interface PlanSubject {
  level: string;
  slug: string;
  name: string;
  levelShort: string;
  topics: PlanTopic[];
}

// 0 untouched · 1 revised · 2 practised · 3 confident
const STATUS_LABEL = ["Not started", "Revised", "Practised", "Confident"] as const;
const STATUS_CLS = [
  "border-hairline text-body",
  "border-signal/60 text-signal",
  "border-accent/60 text-accent",
  "border-guarantee/60 text-guarantee",
] as const;

const keyOf = (s: PlanSubject, topic: string) => `${s.level}/${s.slug}/${topic}`;

export function StudyPlanBoard({
  subjects,
  initialProgress,
  weeksLeft,
}: {
  subjects: PlanSubject[];
  initialProgress: Record<string, number>;
  weeksLeft: number | null;
}) {
  const [progress, setProgress] = useState<Record<string, number>>(initialProgress);
  const [xpToast, setXpToast] = useState<string | null>(null);

  async function cycle(subject: PlanSubject, topic: string) {
    const k = keyOf(subject, topic);
    const next = ((progress[k] ?? 0) + 1) % 4;
    setProgress((p) => ({ ...p, [k]: next })); // optimistic
    try {
      const res = await fetch("/api/account/topic-progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          level: subject.level,
          slug: subject.slug,
          topic,
          status: next,
        }),
      });
      if (!res.ok) throw new Error();
      const data = (await res.json()) as {
        game?: {
          xpGained: number;
          leveledUp: boolean;
          level: number;
          newBadges: { name: string; emoji: string }[];
        } | null;
      };
      if (data.game && (data.game.xpGained > 0 || data.game.newBadges.length > 0)) {
        const bits = [`+${data.game.xpGained} XP`];
        if (data.game.leveledUp) bits.push(`⬆️ Level ${data.game.level}!`);
        for (const b of data.game.newBadges) bits.push(`${b.emoji} ${b.name}`);
        setXpToast(bits.join(" · "));
        setTimeout(() => setXpToast(null), 3500);
      }
    } catch {
      setProgress((p) => ({ ...p, [k]: (next + 3) % 4 })); // roll back
    }
  }

  // This week's focus: the strongest-tier unfinished topics, spread across
  // subjects (2 each, 6 total) — the digital version of the PDFs' revision-
  // priority checklist.
  const focus = useMemo(() => {
    const picks: { subject: PlanSubject; topic: PlanTopic }[] = [];
    for (const subject of subjects) {
      let taken = 0;
      for (const topic of subject.topics) {
        if ((progress[keyOf(subject, topic.topic)] ?? 0) >= 3) continue;
        picks.push({ subject, topic });
        if (++taken >= 2) break;
      }
    }
    return picks
      .sort((a, b) => tierRank(b.topic.tier) - tierRank(a.topic.tier))
      .slice(0, 6);
  }, [subjects, progress]);

  // Pacing: for each subject, how many topics remain and — given the weeks
  // left — how many to close per week, plus any VERY HIGH topics not yet
  // started (the ones it would hurt most to leave).
  const pacing = useMemo(
    () =>
      subjects.map((subject) => {
        const total = subject.topics.length;
        const confident = subject.topics.filter(
          (t) => (progress[keyOf(subject, t.topic)] ?? 0) >= 3
        ).length;
        const remaining = total - confident;
        const untouchedVH = subject.topics
          .filter(
            (t) => t.tier === "very-high" && (progress[keyOf(subject, t.topic)] ?? 0) === 0
          )
          .map((t) => t.topic);
        const perWeek =
          weeksLeft && weeksLeft > 0 ? Math.ceil(remaining / weeksLeft) : null;
        return { subject, total, remaining, perWeek, untouchedVH };
      }),
    [subjects, progress, weeksLeft]
  );

  const allDone =
    subjects.length > 0 &&
    subjects.every((s) =>
      s.topics.every((t) => (progress[keyOf(s, t.topic)] ?? 0) >= 3)
    );

  return (
    <div className="space-y-6">
      {xpToast && (
        <p
          role="status"
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-accent/50 bg-night px-5 py-2.5 font-mono text-sm font-bold text-accent shadow-lg"
        >
          {xpToast}
        </p>
      )}
      {/* This week */}
      <section className="rounded-2xl border border-accent/40 bg-surface p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-ink">
            This week&apos;s focus
          </h3>
          {weeksLeft !== null && weeksLeft > 0 && (
            <p className="font-mono text-xs text-body">
              ≈ {weeksLeft} week{weeksLeft === 1 ? "" : "s"} to your first paper
            </p>
          )}
        </div>
        {allDone ? (
          <p className="mt-3 text-sm text-body">
            Everything&apos;s marked confident — run the Final Rehearsal under
            timed conditions, then keep the strongest topics warm.
          </p>
        ) : focus.length === 0 ? (
          <p className="mt-3 text-sm text-body">
            Your topics appear here once you own a subject.
          </p>
        ) : (
          <ul className="mt-3 space-y-2">
            {focus.map(({ subject, topic }) => (
              <li
                key={keyOf(subject, topic.topic)}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-hairline bg-night px-4 py-2.5"
              >
                <span className="min-w-0">
                  <span className="block truncate text-sm text-ink">{topic.topic}</span>
                  <span className="text-xs text-body">
                    {subject.name} · {subject.levelShort}
                  </span>
                </span>
                <span className="flex items-center gap-2">
                  <TierPill tier={topic.tier} />
                  <StatusButton
                    status={progress[keyOf(subject, topic.topic)] ?? 0}
                    onClick={() => void cycle(subject, topic.topic)}
                  />
                </span>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-3 text-xs text-body/80">
          Tap a status to advance it: Not started → Revised → Practised →
          Confident. Confident topics leave this list.
        </p>
      </section>

      {/* Pacing */}
      <section className="rounded-2xl border border-hairline bg-surface p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-ink">Your pace</h3>
          <span className="flex items-center gap-3">
            <p className="font-mono text-xs text-body">
              {weeksLeft && weeksLeft > 0
                ? `≈ ${weeksLeft} week${weeksLeft === 1 ? "" : "s"} to your first paper`
                : "Add your paper dates below for a weekly target"}
            </p>
            <a href="/account/rescue" className="text-xs font-medium text-accent hover:underline">
              Behind? Rescue plan →
            </a>
          </span>
        </div>
        <ul className="mt-3 space-y-2">
          {pacing.map(({ subject, total, remaining, perWeek, untouchedVH }) => (
            <li
              key={`${subject.level}/${subject.slug}`}
              className="rounded-xl border border-hairline bg-night px-4 py-2.5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm text-ink">{subject.name}</span>
                <span className="font-mono text-xs text-body">
                  {remaining === 0
                    ? "All confident ✓"
                    : perWeek
                    ? `${remaining} left · ~${perWeek}/week`
                    : `${remaining} of ${total} to go`}
                </span>
              </div>
              {untouchedVH.length > 0 && (
                <p className="mt-1 text-xs text-coral">
                  ⚠ VERY HIGH still untouched: {untouchedVH.slice(0, 3).join(", ")}
                  {untouchedVH.length > 3 ? `, +${untouchedVH.length - 3} more` : ""}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Per-subject checklists */}
      {subjects.map((subject) => {
        const total = subject.topics.length;
        const confident = subject.topics.filter(
          (t) => (progress[keyOf(subject, t.topic)] ?? 0) >= 3
        ).length;
        const pct = total === 0 ? 0 : Math.round((confident / total) * 100);
        return (
          <details
            key={`${subject.level}/${subject.slug}`}
            className="group rounded-2xl border border-hairline bg-surface"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4">
              <span>
                <span className="font-display font-bold text-ink">{subject.name}</span>
                <span className="ml-2 font-mono text-xs text-body">
                  {subject.levelShort}
                </span>
              </span>
              <span className="flex items-center gap-3">
                <span className="hidden h-2 w-28 overflow-hidden rounded-full bg-night sm:block">
                  <span
                    className="block h-full rounded-full bg-guarantee"
                    style={{ width: `${pct}%` }}
                  />
                </span>
                <span className="font-mono text-xs text-body">
                  {confident}/{total} · {pct}% clear
                </span>
                <span
                  aria-hidden="true"
                  className="text-body transition-transform group-open:rotate-180"
                >
                  ▾
                </span>
              </span>
            </summary>
            <div className="border-t border-hairline px-5 pt-5">
              <CampaignMap
                topics={subject.topics}
                statusFor={(t) => progress[keyOf(subject, t)] ?? 0}
                onSelect={(t) => void cycle(subject, t)}
              />
            </div>
            <div className="space-y-2 px-5 py-4">
              {subject.topics.map((topic) => (
                <div
                  key={topic.topic}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-hairline bg-night px-4 py-2.5"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-ink">{topic.topic}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <TierPill tier={topic.tier} />
                    <StatusButton
                      status={progress[keyOf(subject, topic.topic)] ?? 0}
                      onClick={() => void cycle(subject, topic.topic)}
                    />
                  </span>
                </div>
              ))}
            </div>
          </details>
        );
      })}
    </div>
  );
}

function StatusButton({ status, onClick }: { status: number; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Status: ${STATUS_LABEL[status]}. Click to advance.`}
      className={`w-28 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors ${STATUS_CLS[status]}`}
    >
      {STATUS_LABEL[status]}
    </button>
  );
}

function tierRank(tier: ForecastTier): number {
  switch (tier) {
    case "very-high":
      return 3;
    case "high":
      return 2;
    case "moderate":
      return 1;
    case "watch":
      return 0;
  }
}
