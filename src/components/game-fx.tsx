"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { onFx, type FxEvent } from "@/lib/game/fx";
import { sfx } from "@/lib/game/sound";
import { nextUnlock } from "@/lib/game";
import { GhostCompanion } from "@/components/game";
import { NamedIcon, type IconName } from "@/components/icons";

// ── The juice layer ────────────────────────────────────────────────────────
// One fixed overlay listening to the fx bus: "+N XP" fly-ups, confetti, and
// the full-screen level-up / badge ceremonies. Mounted only inside the
// native game shell.

interface FlyUp {
  id: number;
  amount: number;
  x: number;
  y: number;
}

type Ceremony =
  | { kind: "level"; level: number; title: string }
  | { kind: "badge"; name: string; emoji: string };

interface ConfettiBit {
  id: number;
  left: number; // vw %
  delay: number; // s
  color: string;
  drift: number; // px
}

const CONFETTI_COLORS = ["#ffdc00", "#6ea0ff", "#3ddc84", "#ff7ab0", "#7c3aed", "#ffffff"];

let nextId = 1;

export function FxLayer() {
  const [flyups, setFlyups] = useState<FlyUp[]>([]);
  const [queue, setQueue] = useState<Ceremony[]>([]);
  const [confetti, setConfetti] = useState<ConfettiBit[]>([]);
  const timeouts = useRef<number[]>([]);

  const burstConfetti = useCallback((n: number) => {
    const bits: ConfettiBit[] = Array.from({ length: n }, () => ({
      id: nextId++,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      drift: (Math.random() - 0.5) * 120,
    }));
    setConfetti((c) => [...c, ...bits]);
    timeouts.current.push(
      window.setTimeout(() => {
        setConfetti((c) => c.filter((b) => !bits.some((x) => x.id === b.id)));
      }, 2600)
    );
  }, []);

  useEffect(() => {
    const off = onFx((e: FxEvent) => {
      switch (e.type) {
        case "xp": {
          const fly: FlyUp = {
            id: nextId++,
            amount: e.amount,
            x: e.x ?? window.innerWidth / 2,
            y: e.y ?? window.innerHeight * 0.4,
          };
          setFlyups((f) => [...f, fly]);
          timeouts.current.push(
            window.setTimeout(() => setFlyups((f) => f.filter((v) => v.id !== fly.id)), 1300)
          );
          sfx.coin();
          break;
        }
        case "levelup":
          setQueue((q) => [...q, { kind: "level", level: e.level, title: e.title }]);
          burstConfetti(40);
          sfx.levelup();
          break;
        case "badge":
          setQueue((q) => [...q, { kind: "badge", name: e.name, emoji: e.emoji }]);
          burstConfetti(18);
          sfx.badge();
          break;
        case "correct":
          sfx.correct();
          break;
        case "wrong":
          sfx.wrong();
          break;
        case "encounter":
          sfx.encounter();
          break;
        case "shiny":
          sfx.shiny();
          break;
        case "blip":
          sfx.blip();
          break;
      }
    });
    const t = timeouts.current;
    return () => {
      off();
      t.forEach((id) => window.clearTimeout(id));
    };
  }, [burstConfetti]);

  const dismiss = useCallback(() => setQueue((q) => q.slice(1)), []);
  const current = queue[0] ?? null;

  return (
    <>
      {/* XP fly-ups */}
      {flyups.map((f) => (
        <span
          key={f.id}
          className="fx-flyup pointer-events-none fixed z-[70] -translate-x-1/2 font-pixel text-sm text-accent"
          style={{ left: f.x, top: f.y, textShadow: "0 0 12px rgba(255,220,0,.6)" }}
          aria-hidden="true"
        >
          +{f.amount} XP
        </span>
      ))}

      {/* Confetti */}
      {confetti.length > 0 && (
        <div className="pointer-events-none fixed inset-0 z-[65] overflow-hidden" aria-hidden="true">
          {confetti.map((b) => (
            <span
              key={b.id}
              className="fx-confetti absolute h-2 w-2"
              style={
                {
                  left: `${b.left}%`,
                  backgroundColor: b.color,
                  animationDelay: `${b.delay}s`,
                  "--drift": `${b.drift}px`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      )}

      {/* Ceremony */}
      {current && (
        <button
          type="button"
          onClick={dismiss}
          aria-label="Continue"
          className="fx-ceremony fixed inset-0 z-[60] flex w-full flex-col items-center justify-center gap-4 bg-night/95 px-6 text-center backdrop-blur"
        >
          {current.kind === "level" ? (
            <>
              <span className="fx-hero block">
                <GhostCompanion level={current.level} size={120} />
              </span>
              <span className="font-pixel text-xs tracking-widest text-accent">LEVEL UP</span>
              <span className="font-pixel text-3xl text-ink">Lv {current.level}</span>
              <span className="font-display text-xl font-bold text-accent">{current.title}</span>
              {(() => {
                const nu = nextUnlock(current.level);
                return nu ? (
                  <span className="text-sm text-body">
                    Next, Lv {nu.level}: {nu.what}
                  </span>
                ) : null;
              })()}
              <span className="mt-2 text-xs text-body">tap to continue</span>
            </>
          ) : (
            <>
              <span className="fx-hero block text-accent"><NamedIcon name={current.emoji as IconName} size={72} /></span>
              <span className="font-pixel text-xs tracking-widest text-accent">BADGE UNLOCKED</span>
              <span className="font-display text-2xl font-bold text-ink">{current.name}</span>
              <span className="mt-2 text-xs text-body">tap to continue</span>
            </>
          )}
        </button>
      )}
    </>
  );
}
