"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

// Focus timer (Pomodoro): alternating focus/break blocks with a chime, plus a
// 7-day "minutes studied" bar chart kept in localStorage. Self-contained, no
// server round-trips, no new tables.

const STORE_KEY = "studylah_focus_v1";
type Log = Record<string, number>; // YYYY-MM-DD -> focus minutes

const PRESETS = [
  { label: "25 / 5", focus: 25, brk: 5 },
  { label: "50 / 10", focus: 50, brk: 10 },
] as const;

function todayKey(): string {
  return new Date().toLocaleDateString("en-CA");
}
function loadLog(): Log {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) || "{}") as Log;
  } catch {
    return {};
  }
}
function saveLog(log: Log) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(log));
  } catch {
    // storage unavailable, the timer still works, stats just won't persist
  }
}

// True only after mount, so the client-only chart doesn't fight SSR hydration.
function useMounted(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

function beep(times: number) {
  try {
    const Ctx =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();
    for (let i = 0; i < times; i++) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 660;
      const t = ctx.currentTime + i * 0.35;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.2, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
      osc.start(t);
      osc.stop(t + 0.3);
    }
  } catch {
    // no audio available
  }
}

export function PomodoroTimer() {
  const mounted = useMounted();
  const [preset, setPreset] = useState<(typeof PRESETS)[number]>(PRESETS[0]);
  const [phase, setPhase] = useState<"focus" | "break">("focus");
  const [leftS, setLeftS] = useState(PRESETS[0].focus * 60);
  const [running, setRunning] = useState(false);
  const [xpToast, setXpToast] = useState<string | null>(null);
  // Lazy initial read (guarded for SSR) rather than a set-state-in-effect load.
  // The chart is mount-gated below, so SSR renders nothing to mismatch.
  const [log, setLog] = useState<Log>(loadLog);

  const leftRef = useRef(PRESETS[0].focus * 60);
  const logRef = useRef<Log>(log);

  function recordFocus(mins: number) {
    const key = todayKey();
    const updated = { ...logRef.current, [key]: (logRef.current[key] ?? 0) + mins };
    logRef.current = updated;
    saveLog(updated);
    setLog(updated);

    // Report the completed block for XP (server caps at 4/day; failures are
    // silent, the timer never depends on the network).
    void fetch("/api/account/xp/focus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ minutes: mins }),
    })
      .then(async (res) => {
        if (!res.ok) return;
        const data = (await res.json()) as { game?: { xpGained: number; leveledUp: boolean; level: number } | null };
        if (data.game && data.game.xpGained > 0) {
          setXpToast(
            data.game.leveledUp
              ? `+${data.game.xpGained} XP · Level ${data.game.level}!`
              : `+${data.game.xpGained} XP, focus block banked`
          );
          setTimeout(() => setXpToast(null), 4000);
        }
      })
      .catch(() => {});
  }

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => {
      const next = leftRef.current - 1;
      if (next > 0) {
        leftRef.current = next;
        setLeftS(next);
        return;
      }
      // Phase complete.
      beep(phase === "focus" ? 3 : 2);
      if (phase === "focus") {
        recordFocus(preset.focus);
        leftRef.current = preset.brk * 60;
        setLeftS(leftRef.current);
        setPhase("break");
      } else {
        leftRef.current = preset.focus * 60;
        setLeftS(leftRef.current);
        setPhase("focus");
        setRunning(false); // pause between cycles, restart when ready
      }
    }, 1000);
    return () => clearInterval(t);
  }, [running, phase, preset]);

  function pick(p: (typeof PRESETS)[number]) {
    setRunning(false);
    setPreset(p);
    setPhase("focus");
    leftRef.current = p.focus * 60;
    setLeftS(leftRef.current);
  }
  function reset() {
    setRunning(false);
    setPhase("focus");
    leftRef.current = preset.focus * 60;
    setLeftS(leftRef.current);
  }

  const m = Math.floor(leftS / 60);
  const s = leftS % 60;
  const display = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  const phaseTotal = (phase === "focus" ? preset.focus : preset.brk) * 60;
  const pct = phaseTotal === 0 ? 0 : Math.round(((phaseTotal - leftS) / phaseTotal) * 100);

  // 7-day chart data.
  const days: { label: string; mins: number }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toLocaleDateString("en-CA");
    days.push({ label: d.toLocaleDateString("en-SG", { weekday: "short" }), mins: log[key] ?? 0 });
  }
  const maxMins = Math.max(30, ...days.map((d) => d.mins));
  const weekTotal = days.reduce((sum, d) => sum + d.mins, 0);

  return (
    <div className="rounded-2xl border border-hairline bg-surface p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => pick(p)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                preset.label === p.label
                  ? "border-accent text-accent"
                  : "border-hairline text-body hover:text-ink"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            phase === "focus" ? "bg-accent/15 text-accent" : "bg-signal/15 text-signal"
          }`}
        >
          {phase === "focus" ? "Focus" : "Break"}
        </span>
      </div>

      <p
        className={`mt-6 text-center font-display text-7xl font-black tabular-nums ${
          phase === "focus" ? "text-ink" : "text-signal"
        }`}
        role="timer"
        aria-live="off"
      >
        {display}
      </p>

      <div className="mx-auto mt-5 h-2 max-w-md overflow-hidden rounded-full bg-night">
        <div
          className={`h-full rounded-full transition-[width] duration-1000 ${
            phase === "focus" ? "bg-accent" : "bg-signal"
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setRunning((r) => !r)}
          className="rounded-lg bg-accent px-8 py-3 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
        >
          {running ? "Pause" : leftS === phaseTotal ? "Start focusing" : "Resume"}
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-lg border border-hairline px-6 py-3 text-sm font-medium text-body hover:text-ink"
        >
          Reset
        </button>
      </div>

      {/* Weekly minutes, client-only to avoid a hydration mismatch. */}
      {mounted && (
        <div className="mt-8 border-t border-hairline pt-6">
          <div className="flex items-baseline justify-between">
            <h4 className="font-display text-sm font-bold text-ink">This week&apos;s focus</h4>
            <span className="font-mono text-xs text-body">
              {Math.floor(weekTotal / 60)}h {weekTotal % 60}m total
            </span>
          </div>
          <div className="mt-4 flex items-end justify-between gap-2" style={{ height: 88 }}>
            {days.map((d, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div className="flex w-full flex-1 items-end">
                  <div
                    className="w-full rounded-t bg-accent/80"
                    style={{ height: `${Math.round((d.mins / maxMins) * 72)}px` }}
                    title={`${d.mins} min`}
                  />
                </div>
                <span className="font-mono text-[10px] text-body">{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {xpToast && (
        <p className="mt-4 text-center font-mono text-sm font-bold text-accent" role="status">
          {xpToast}
        </p>
      )}

      <p className="mt-6 text-center text-xs text-body">
        Chimes when each block ends. Focus minutes are saved on this device only.
      </p>
    </div>
  );
}
