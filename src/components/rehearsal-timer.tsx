"use client";

import { useEffect, useRef, useState } from "react";

// Exam-conditions countdown for the Final Rehearsal: pick the paper length,
// press start, put the phone face-down. Chimes at half-time, 15 and 5 minutes.
const PRESETS = [
  { label: "1 h", minutes: 60 },
  { label: "1 h 15", minutes: 75 },
  { label: "1 h 30", minutes: 90 },
  { label: "1 h 45", minutes: 105 },
  { label: "2 h", minutes: 120 },
  { label: "2 h 15", minutes: 135 },
];

function beep(times: number) {
  try {
    const Ctx =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    const ctx = new Ctx();
    for (let i = 0; i < times; i++) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 880;
      const t = ctx.currentTime + i * 0.35;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.2, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
      osc.start(t);
      osc.stop(t + 0.3);
    }
  } catch {
    // no audio available — the visual cues still work
  }
}

export function RehearsalTimer() {
  const [totalS, setTotalS] = useState(105 * 60);
  const [leftS, setLeftS] = useState(105 * 60);
  const [running, setRunning] = useState(false);
  const firedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => {
      setLeftS((s) => {
        const next = Math.max(0, s - 1);
        const marks: [string, number, number][] = [
          ["half", Math.floor(totalS / 2), 1],
          ["m15", 15 * 60, 2],
          ["m5", 5 * 60, 3],
          ["end", 0, 4],
        ];
        for (const [key, at, beeps] of marks) {
          if (next === at && !firedRef.current.has(key)) {
            firedRef.current.add(key);
            beep(beeps);
          }
        }
        if (next === 0) setRunning(false);
        return next;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [running, totalS]);

  function pick(minutes: number) {
    setRunning(false);
    firedRef.current = new Set();
    setTotalS(minutes * 60);
    setLeftS(minutes * 60);
  }

  function reset() {
    setRunning(false);
    firedRef.current = new Set();
    setLeftS(totalS);
  }

  const h = Math.floor(leftS / 3600);
  const m = Math.floor((leftS % 3600) / 60);
  const s = leftS % 60;
  const display =
    (h > 0 ? `${h}:` : "") +
    `${String(m).padStart(h > 0 ? 2 : 1, "0")}:${String(s).padStart(2, "0")}`;
  const elapsedPct = totalS === 0 ? 0 : Math.round(((totalS - leftS) / totalS) * 100);
  const urgent = leftS <= 5 * 60 && leftS > 0;

  return (
    <div className="rounded-2xl border border-hairline bg-surface p-6">
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={p.minutes}
            type="button"
            onClick={() => pick(p.minutes)}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              totalS === p.minutes * 60
                ? "border-accent text-accent"
                : "border-hairline text-body hover:text-ink"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <p
        className={`mt-8 text-center font-display text-7xl font-black tabular-nums sm:text-8xl ${
          urgent ? "text-coral" : "text-ink"
        }`}
        role="timer"
        aria-live="off"
      >
        {display}
      </p>

      <div className="mx-auto mt-6 h-2 max-w-md overflow-hidden rounded-full bg-night">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-1000"
          style={{ width: `${elapsedPct}%` }}
        />
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setRunning((r) => !r && leftS > 0)}
          className="rounded-lg bg-accent px-8 py-3 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
        >
          {running ? "Pause" : leftS === totalS ? "Start the paper" : "Resume"}
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-lg border border-hairline px-6 py-3 text-sm font-medium text-body hover:text-ink"
        >
          Reset
        </button>
      </div>

      <p className="mt-6 text-center text-xs text-body">
        Chimes at half-time, 15 minutes and 5 minutes — like an invigilator&apos;s
        warnings. Keep this tab open and the volume up.
      </p>
    </div>
  );
}
