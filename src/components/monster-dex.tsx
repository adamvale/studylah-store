"use client";

import { useNativePlatform } from "@/lib/native";
import { MONSTERS, MONSTER_HP } from "@/lib/game";

// ── The monster-dex ────────────────────────────────────────────────────────
// Collection pride, native shell only (the web keeps the notebook's own
// header). Species at large = unresolved mistakes grouped by WHY the mark
// was lost; banished = the trophy shelf. Ethically clean retention: the way
// to grow the collection is to fix real mistakes.

export interface DexCounts {
  reason: string;
  atLarge: number;
  banished: number;
}

export function MonsterDex({ counts, wildCaptured = [] }: { counts: DexCounts[]; wildCaptured?: string[] }) {
  const native = useNativePlatform();
  const wild = new Set(wildCaptured);
  if (!native) return null;

  const totalAtLarge = counts.reduce((s, c) => s + c.atLarge, 0);
  const totalBanished = counts.reduce((s, c) => s + c.banished, 0);
  if (totalAtLarge + totalBanished + wild.size === 0) return null;

  return (
    <section aria-label="Monster collection" className="rounded-2xl border border-hairline bg-night-2 p-4">
      <div className="flex items-baseline justify-between">
        <p className="font-pixel text-[9px] tracking-widest text-accent">MONSTER-DEX</p>
        <p className="font-pixel text-[8px] text-body">
          {totalBanished} BANISHED · {totalAtLarge} AT LARGE
        </p>
      </div>
      <div className="mt-3 grid grid-cols-5 gap-2">
        {Object.entries(MONSTERS).map(([key, m]) => {
          const c = counts.find((x) => x.reason === key);
          const seen = Boolean((c && c.atLarge + c.banished > 0) || wild.has(key));
          return (
            <div
              key={key}
              className={`flex flex-col items-center gap-1 rounded-xl border p-2 text-center ${
                seen ? "border-hairline bg-surface" : "border-hairline/50 opacity-40"
              }`}
              title={seen ? `${m.name} — ${m.tag}` : "Not yet encountered"}
            >
              <span className={`text-2xl ${seen ? "" : "grayscale"}`} aria-hidden>
                {seen ? m.emoji : "❔"}
              </span>
              {seen ? (
                <>
                  {(c?.atLarge ?? 0) > 0 && (
                    <span className="font-pixel text-[7px] text-coral">×{c?.atLarge}</span>
                  )}
                  {(c?.banished ?? 0) > 0 && (
                    <span className="font-pixel text-[7px] text-guarantee">🏆{c?.banished}</span>
                  )}
                  {wild.has(key) && (
                    <span className="font-pixel text-[7px] text-trust">WILD✓</span>
                  )}
                </>
              ) : (
                <span className="font-pixel text-[7px] text-body">???</span>
              )}
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-[10px] leading-relaxed text-body">
        Beat a monster {MONSTER_HP}× in your daily three to banish it to the trophy shelf.
      </p>
    </section>
  );
}
