"use client";

import Link from "next/link";
import { useNativePlatform } from "@/lib/native";
import { emitFx } from "@/lib/game/fx";
import { IconBoss } from "@/components/pixel-icons";
import { TierPill } from "@/components/heat";

// ── Quest board + weekly boss ──────────────────────────────────────────────
// One component, two renderings. Web: the original mission list, unchanged.
// Native: chunky tappable quest cards with pixel XP bounties, the first open
// quest glowing, and the weekly boss (the student's biggest marks-at-risk
// topic, straight from the risk engine) framed as a fight. Compliance: the
// boss is a topic to master, XP rewards the work, never the grade.

export interface QuestItem {
  done: boolean;
  minutes: number;
  xp: string;
  title: string;
  detail: string;
  href: string;
  cta: string;
}

export interface BossInfo {
  topic: string;
  subjectName: string;
  tier: "very-high" | "high" | "moderate" | "watch";
  hpPct: number; // 100 = untouched, 0 = mastered (from study-plan status)
}

export function QuestBoard({ mission, boss }: { mission: QuestItem[]; boss: BossInfo | null }) {
  const native = useNativePlatform();

  if (!native) {
    // The web dashboard's mission list, verbatim.
    return (
      <ol className="space-y-2">
        {mission.map((m, i) => (
          <li
            key={i}
            className={`flex flex-wrap items-center justify-between gap-3 rounded-2xl border px-5 py-4 ${
              m.done ? "border-guarantee/40 bg-surface opacity-70" : "border-hairline bg-surface"
            }`}
          >
            <span className="flex min-w-0 items-start gap-3">
              <span
                aria-hidden="true"
                className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold ${
                  m.done ? "bg-guarantee/20 text-guarantee" : "bg-accent/15 text-accent"
                }`}
              >
                {m.done ? "✓" : i + 1}
              </span>
              <span className="min-w-0">
                <span
                  className={`block font-medium ${m.done ? "text-body line-through" : "text-ink"}`}
                >
                  {m.title}
                  <span className="ml-2 font-mono text-xs font-normal text-body">
                    ~{m.minutes} min
                  </span>
                  <span className="ml-2 rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-medium text-accent">
                    {m.xp}
                  </span>
                </span>
                <span className="text-xs text-body">{m.detail}</span>
              </span>
            </span>
            {!m.done && (
              <Link
                href={m.href}
                className="shrink-0 text-sm font-medium text-accent hover:underline"
              >
                {m.cta} →
              </Link>
            )}
          </li>
        ))}
      </ol>
    );
  }

  // ── The game rendering ───────────────────────────────────────────────────
  const firstOpen = mission.findIndex((m) => !m.done);
  return (
    <div className="space-y-3">
      {boss && (
        <div className="rounded-2xl border border-coral/40 bg-surface p-4">
          <div className="flex items-center gap-3">
            <span className="text-coral">
              <IconBoss size={30} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-pixel text-[8px] tracking-widest text-coral">WEEKLY BOSS</p>
              <p className="truncate font-display text-sm font-bold text-ink">{boss.topic}</p>
              <p className="text-[11px] text-body">
                {boss.subjectName} · <TierPill tier={boss.tier} />
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="font-pixel text-[8px] text-body">HP</span>
            <span className="h-2 flex-1 overflow-hidden rounded-full bg-night">
              <span
                className="block h-full rounded-full bg-coral transition-[width] duration-700"
                style={{ width: `${boss.hpPct}%` }}
              />
            </span>
            <span className="font-pixel text-[8px] text-body">{boss.hpPct}%</span>
          </div>
          <div className="mt-3 flex gap-2">
            <Link
              href="/account/study"
              onClick={() => emitFx({ type: "blip" })}
              className="flex-1 rounded-lg bg-coral/15 px-3 py-2 text-center text-xs font-bold text-coral"
            >
              Deal damage
            </Link>
            <Link
              href="/account/practice"
              onClick={() => emitFx({ type: "blip" })}
              className="flex-1 rounded-lg border border-hairline px-3 py-2 text-center text-xs font-medium text-body"
            >
              Train first
            </Link>
          </div>
          <p className="mt-2 text-[10px] text-body">
            Its HP falls as this topic&apos;s study-plan steps reach Confident.
          </p>
        </div>
      )}

      {mission.map((m, i) => (
        <Link
          key={i}
          href={m.done ? "#" : m.href}
          onClick={() => emitFx({ type: "blip" })}
          aria-disabled={m.done}
          className={`block rounded-2xl border p-4 transition-transform active:scale-[0.98] ${
            m.done
              ? "pointer-events-none border-guarantee/40 bg-surface opacity-60"
              : i === firstOpen
              ? "glow-pulse border-accent/60 bg-surface"
              : "border-hairline bg-surface"
          }`}
        >
          <span className="flex items-center justify-between gap-2">
            <span className="font-pixel text-[8px] tracking-widest text-body">
              {m.done ? "CLEARED" : `QUEST ${i + 1}`}
            </span>
            <span className="rounded bg-accent/15 px-1.5 py-0.5 font-pixel text-[8px] text-accent">
              {m.xp.toUpperCase()}
            </span>
          </span>
          <span
            className={`mt-1.5 block font-display text-base font-bold ${
              m.done ? "text-body line-through" : "text-ink"
            }`}
          >
            {m.done ? "✓ " : ""}
            {m.title}
          </span>
          <span className="mt-0.5 block text-xs leading-relaxed text-body">{m.detail}</span>
          {!m.done && (
            <span className="mt-2 flex items-center justify-between">
              <span className="font-pixel text-[8px] text-body">~{m.minutes} MIN</span>
              <span className="text-sm font-bold text-accent">{m.cta} →</span>
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}
