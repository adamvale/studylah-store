import Link from "next/link";
import { ghostStage, BADGES } from "@/lib/game";

// Server-renderable game UI: the evolving ghost companion, the player header
// (level · title · XP bar), and the badge case. No client state, award
// toasts live in the components that call the APIs.

export function GhostCompanion({ level, size = 44 }: { level: number; size?: number }) {
  const s = ghostStage(level);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-label={`Your companion (level ${level})`}
      role="img"
    >
      {s.glow && (
        <circle cx="50" cy="54" r="44" fill="none" stroke="#ffdc00" strokeOpacity="0.35" strokeWidth="4" />
      )}
      {s.cape && (
        <path d="M18 52 Q14 84 24 88 L38 76 L30 54 Z M82 52 Q86 84 76 88 L62 76 L70 54 Z" fill="#8b7cf6" opacity="0.9" />
      )}
      {/* body */}
      <circle cx="50" cy="42" r="26" fill="#ffffff" />
      <rect x="24" y="42" width="52" height="34" fill="#ffffff" />
      <circle cx="33" cy="76" r="8.7" fill="#ffffff" />
      <circle cx="50" cy="76" r="8.7" fill="#ffffff" />
      <circle cx="67" cy="76" r="8.7" fill="#ffffff" />
      {/* headband */}
      {s.headband && (
        <>
          <rect x="24" y="26" width="52" height="7" rx="3.5" fill="#ffdc00" />
          <path d="M76 27 l9 -5 l-2 8 l-7 3 Z" fill="#ffdc00" />
        </>
      )}
      {/* crown */}
      {s.crown && (
        <path d="M36 18 L42 8 L50 16 L58 8 L64 18 Z" fill="#ffdc00" stroke="#161c26" strokeWidth="1.5" />
      )}
      {/* eyes (+ glasses) */}
      {s.glasses ? (
        <>
          <circle cx="42" cy="44" r="7.5" fill="none" stroke="#161c26" strokeWidth="2.5" />
          <circle cx="59" cy="44" r="7.5" fill="none" stroke="#161c26" strokeWidth="2.5" />
          <line x1="49.5" y1="44" x2="51.5" y2="44" stroke="#161c26" strokeWidth="2.5" />
          <circle cx="42" cy="44" r="3" fill="#161c26" />
          <circle cx="59" cy="44" r="3" fill="#161c26" />
        </>
      ) : (
        <>
          <circle cx="42" cy="44" r="3.4" fill="#161c26" />
          <circle cx="59" cy="44" r="3.4" fill="#161c26" />
        </>
      )}
    </svg>
  );
}

export function PlayerHeader({
  level,
  title,
  intoLevel,
  needed,
  progressPct,
  streak,
}: {
  level: number;
  title: string;
  intoLevel: number;
  needed: number;
  progressPct: number;
  streak: number;
}) {
  return (
    <div className="flex items-center gap-3">
      <GhostCompanion level={level} size={48} />
      <div className="min-w-0">
        <p className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-xs font-bold text-accent">
            Lv {level}
          </span>
          <span className="font-display text-sm font-bold text-ink">{title}</span>
          {streak > 0 && (
            <span className="font-mono text-xs text-accent">🔥 {streak}</span>
          )}
        </p>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="h-1.5 w-32 overflow-hidden rounded-full bg-night">
            <span
              className="block h-full rounded-full bg-accent"
              style={{ width: `${progressPct}%` }}
            />
          </span>
          <span className="font-mono text-[10px] text-body">
            {intoLevel}/{needed} XP
          </span>
        </div>
      </div>
    </div>
  );
}

export function BadgeCase({ unlocked }: { unlocked: Set<string> }) {
  const done = BADGES.filter((b) => unlocked.has(b.id)).length;
  return (
    <section className="rounded-2xl border border-hairline bg-surface p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-lg font-bold text-ink">Badge case</h3>
        <p className="font-mono text-xs text-body">
          {done}/{BADGES.length} unlocked
        </p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {BADGES.map((b) => {
          const got = unlocked.has(b.id);
          return (
            <div
              key={b.id}
              className={`rounded-xl border px-3 py-3 text-center ${
                got ? "border-accent/50 bg-night" : "border-hairline bg-night opacity-45"
              }`}
              title={b.hint}
            >
              <p aria-hidden="true" className={`text-2xl ${got ? "" : "grayscale"}`}>
                {b.emoji}
              </p>
              <p className={`mt-1 text-xs font-medium ${got ? "text-ink" : "text-body"}`}>
                {b.name}
              </p>
              <p className="mt-0.5 text-[10px] leading-tight text-body">
                {got ? `+${b.xp} XP` : b.hint}
              </p>
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-xs text-body/80">
        Badges reward the work, not the grade, every one of these is earned by
        showing up. See what&apos;s left on{" "}
        <Link href="/account" className="font-medium text-accent hover:underline">
          Today
        </Link>
        .
      </p>
    </section>
  );
}
