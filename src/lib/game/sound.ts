"use client";

import { useSyncExternalStore } from "react";

// ── Chiptune SFX, synthesized in code ──────────────────────────────────────
// Zero assets, zero downloads: every sound is a couple of oscillator notes.
// Sounds only ever play inside the native shell (html[data-native]) and the
// mute toggle persists. AudioContext is created lazily on the first play —
// which always follows a user gesture (a tap), so autoplay policy is happy.

const KEY = "studylah_sound";
const EVT = "studylah:sound";

let ctx: AudioContext | null = null;

function inNative(): boolean {
  return typeof document !== "undefined" && document.documentElement.hasAttribute("data-native");
}

export function soundMuted(): boolean {
  try {
    return localStorage.getItem(KEY) === "off";
  } catch {
    return false;
  }
}

export function setSoundMuted(muted: boolean): void {
  try {
    localStorage.setItem(KEY, muted ? "off" : "on");
  } catch {
    // storage unavailable — session-only default
  }
  window.dispatchEvent(new Event(EVT));
}

function subscribeMuted(fn: () => void): () => void {
  window.addEventListener(EVT, fn);
  return () => window.removeEventListener(EVT, fn);
}

const getFalse = () => false;

export function useSoundMuted(): boolean {
  return useSyncExternalStore(subscribeMuted, soundMuted, getFalse);
}

function audio(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

// One square/triangle note. `slide` bends the pitch across the duration.
function note(
  freq: number,
  at: number,
  dur: number,
  type: OscillatorType = "square",
  gain = 0.04,
  slide = 0
): void {
  const ac = audio();
  if (!ac) return;
  const t = ac.currentTime + at;
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (slide !== 0) osc.frequency.linearRampToValueAtTime(freq + slide, t + dur);
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g).connect(ac.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

function play(fn: () => void): void {
  if (!inNative() || soundMuted()) return;
  try {
    fn();
  } catch {
    // audio unavailable — a silent game beats a crashed one
  }
}

export const sfx = {
  blip: () => play(() => note(660, 0, 0.05, "square", 0.03)),
  coin: () =>
    play(() => {
      note(988, 0, 0.06, "square", 0.035);
      note(1319, 0.06, 0.12, "square", 0.035);
    }),
  correct: () =>
    play(() => {
      note(523, 0, 0.08);
      note(784, 0.09, 0.16);
    }),
  wrong: () => play(() => note(180, 0, 0.25, "sawtooth", 0.05, -60)),
  encounter: () =>
    play(() => {
      note(880, 0, 0.07, "square", 0.04);
      note(660, 0.08, 0.07, "square", 0.04);
      note(440, 0.16, 0.14, "square", 0.04);
    }),
  levelup: () =>
    play(() => {
      const seq = [523, 659, 784, 1047];
      seq.forEach((f, i) => note(f, i * 0.09, 0.14, "square", 0.045));
      note(1319, 0.38, 0.3, "triangle", 0.05);
    }),
  badge: () =>
    play(() => {
      note(784, 0, 0.09, "triangle", 0.05);
      note(1175, 0.1, 0.22, "triangle", 0.05);
    }),
  shiny: () =>
    play(() => {
      note(1568, 0, 0.06, "triangle", 0.04);
      note(2093, 0.07, 0.1, "triangle", 0.04);
      note(2637, 0.15, 0.16, "triangle", 0.035);
    }),
};
