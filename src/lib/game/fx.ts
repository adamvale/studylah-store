"use client";

import { useSyncExternalStore } from "react";
import { levelProgress, titleForLevel, xpToReachLevel } from "@/lib/game";

// ── The juice bus ──────────────────────────────────────────────────────────
// Every server XP award flows through emitGame() on the client: the HUD bar
// animates, "+N XP" flies up from where it happened, level-ups and badges
// queue full-screen ceremonies, and the sound engine fires. One event type,
// one listener (FxLayer), zero coupling between award sites and effects.

export type FxEvent =
  | { type: "xp"; amount: number; x?: number; y?: number }
  | { type: "levelup"; level: number; title: string }
  | { type: "badge"; id: string; name: string; emoji: string }
  | { type: "correct" }
  | { type: "wrong" }
  | { type: "encounter" }
  | { type: "shiny" }
  | { type: "blip" };

const FX = "studylah:fx";

export function emitFx(detail: FxEvent): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<FxEvent>(FX, { detail }));
}

export function onFx(handler: (e: FxEvent) => void): () => void {
  const listener = (e: Event) => handler((e as CustomEvent<FxEvent>).detail);
  window.addEventListener(FX, listener);
  return () => window.removeEventListener(FX, listener);
}

// The server's GamePayload / GameResult, as much of it as an award site has.
export interface FxGame {
  xpGained: number;
  totalXp?: number;
  level: number;
  title: string;
  leveledUp: boolean;
  newBadges?: { id: string; name: string; emoji: string }[];
}

// One call from any component that just received a graded response.
// `at` = viewport point the XP should fly up from (e.g. the tapped button).
export function emitGame(game: FxGame | null | undefined, at?: { x: number; y: number }): void {
  if (!game) return;
  if (game.xpGained > 0) {
    emitFx({ type: "xp", amount: game.xpGained, x: at?.x, y: at?.y });
    if (typeof game.totalXp === "number") hud.setXp(game.totalXp);
    else hud.addXp(game.xpGained);
  }
  if (game.leveledUp) emitFx({ type: "levelup", level: game.level, title: game.title });
  for (const b of game.newBadges ?? []) emitFx({ type: "badge", ...b });
}

// ── HUD store ──────────────────────────────────────────────────────────────
// Client-side mirror of the player's XP so the HUD animates immediately on
// awards instead of waiting for the next server render. Initialised from the
// layout's server props; XP events keep it fresh within the session.

interface HudState {
  totalXp: number;
  level: number;
  title: string;
  intoLevel: number;
  needed: number;
  progressPct: number;
}

let state: HudState | null = null;
const subs = new Set<() => void>();

function notify() {
  for (const fn of subs) fn();
}

function fromTotal(totalXp: number): HudState {
  const p = levelProgress(totalXp);
  return {
    totalXp,
    level: p.level,
    title: titleForLevel(p.level),
    intoLevel: p.intoLevel,
    needed: p.needed,
    progressPct: p.pct,
  };
}

export const hud = {
  // Server props give level + intoLevel; total is derivable.
  init(level: number, intoLevel: number): void {
    const total = xpToReachLevel(level) + intoLevel;
    if (state && state.totalXp >= total) return; // never regress mid-session
    state = fromTotal(total);
    notify();
  },
  setXp(totalXp: number): void {
    if (state && totalXp <= state.totalXp) return;
    state = fromTotal(totalXp);
    notify();
  },
  addXp(amount: number): void {
    if (!state || amount <= 0) return;
    state = fromTotal(state.totalXp + amount);
    notify();
  },
  subscribe(fn: () => void): () => void {
    subs.add(fn);
    return () => subs.delete(fn);
  },
  get(): HudState | null {
    return state;
  },
};

const getNull = () => null;

export function useHud(): HudState | null {
  return useSyncExternalStore(hud.subscribe, hud.get, getNull);
}
