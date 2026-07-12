"use client";

import Link from "next/link";
import { useNativePlatform } from "@/lib/native";
import { useHud, emitFx } from "@/lib/game/fx";
import { nextUnlock } from "@/lib/game";
import { GhostCompanion } from "@/components/game";

// ── Home Base ──────────────────────────────────────────────────────────────
// The native app opens INTO the game: your ghost at home, speaking, with the
// day's places to go. Pure presentation — every fact comes from the server-
// rendered page around it. Web renders nothing (the dashboard already has
// its own information hierarchy).

function speech({
  todayDone,
  streak,
  dueMistakes,
  level,
}: {
  todayDone: boolean;
  streak: number;
  dueMistakes: number;
  level: number;
}): string {
  if (!todayDone && streak > 0) return `Our ${streak}-day flame dies at midnight! The daily three — quick!`;
  if (!todayDone) return "New day, new quests. Start with the daily three?";
  if (dueMistakes > 0)
    return `Nice work today! But I sense ${dueMistakes} monster${dueMistakes === 1 ? "" : "s"} stirring in the bestiary…`;
  const nu = nextUnlock(level);
  if (nu) return `All clear, boss! Next unlock — Lv ${nu.level}: ${nu.what}.`;
  return "All clear, boss! The world is yours.";
}

function Spot({
  href,
  label,
  children,
  x,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  x: string;
}) {
  return (
    <Link
      href={href}
      onClick={() => emitFx({ type: "blip" })}
      className="absolute bottom-2 flex w-16 -translate-x-1/2 flex-col items-center gap-1"
      style={{ left: x }}
    >
      <span className="text-3xl" aria-hidden>
        {children}
      </span>
      <span className="rounded bg-night/80 px-1.5 py-0.5 font-pixel text-[7px] text-ink">
        {label}
      </span>
    </Link>
  );
}

export function HomeBase({
  todayDone,
  streak,
  dueMistakes,
  shields = 0,
}: {
  todayDone: boolean;
  streak: number;
  dueMistakes: number;
  shields?: number;
}) {
  const native = useNativePlatform();
  const live = useHud();
  if (!native) return null;
  const level = live?.level ?? 1;
  const line =
    shields > 0 && !todayDone
      ? "Your shield's up — today is free. (But the quests are fun, just saying.)"
      : speech({ todayDone, streak, dueMistakes, level });

  return (
    <section
      aria-label="Home base"
      className="relative overflow-hidden rounded-2xl border border-hairline bg-night-2"
    >
      {/* room backdrop: wall band, window, floor */}
      <div className="absolute inset-x-0 top-0 h-16 bg-surface" aria-hidden />
      <div
        className="absolute left-5 top-3 h-10 w-10 rounded border-2 border-hairline bg-night"
        aria-hidden
      >
        <span className="absolute left-1 top-1 h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="absolute right-2 top-4 h-1 w-1 rounded-full bg-trust" />
        <span className="absolute left-4 top-6 h-1 w-1 rounded-full bg-ink/60" />
      </div>
      <div className="absolute inset-x-0 top-16 h-px bg-hairline" aria-hidden />

      <div className="relative flex min-h-40 items-start justify-center px-4 pb-16 pt-5">
        {/* speech bubble */}
        <div className="relative z-10 max-w-[15rem] rounded-xl border border-hairline bg-night px-3 py-2 text-center text-xs leading-relaxed text-ink shadow-lg">
          {line}
          <span
            className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-hairline bg-night"
            aria-hidden
          />
        </div>
      </div>

      {/* the ghost, alive at home */}
      <div className="pointer-events-none absolute bottom-9 left-1/2 -translate-x-1/2" aria-hidden>
        <span className="ghost-bob block">
          <GhostCompanion level={level} size={64} />
        </span>
      </div>

      {/* tappable places */}
      <Spot href="#daily" label="QUESTS" x="18%">
        📜
      </Spot>
      <Spot href="/account/adventure" label="WORLD" x="82%">
        🚪
      </Spot>
    </section>
  );
}
