// "Clear the Fog" — the game rules. Client-safe (no server imports): the
// level curve, titles, badge catalogue and ghost-companion stages. XP is
// awarded ONLY server-side (src/lib/server/xp.ts); this file just interprets
// totals. Compliance: everything here rewards EFFORT — never grades.

// ── Level curve ───────────────────────────────────────────────────────────
// Total XP required to REACH level L: 25·(L−1)·L.
// L2=50 · L3=150 · L5=500 · L7=1050 · L10=2250 · L15=5250 · L20=9500.
// An engaged student (~60 XP/day) hits L5 in ~1 week, L10 in ~6 weeks —
// paced for a 4-month exam season.

export function levelForXp(xp: number): number {
  let level = 1;
  while (xp >= 25 * level * (level + 1)) level++;
  return level;
}

export function xpToReachLevel(level: number): number {
  return 25 * (level - 1) * level;
}

export function levelProgress(xp: number): {
  level: number;
  intoLevel: number;
  needed: number;
  pct: number;
} {
  const level = levelForXp(xp);
  const floor = xpToReachLevel(level);
  const ceil = xpToReachLevel(level + 1);
  const intoLevel = xp - floor;
  const needed = ceil - floor;
  return { level, intoLevel, needed, pct: Math.round((intoLevel / needed) * 100) };
}

// ── Titles (effort-based, never grade promises) ──────────────────────────
const TITLES: [number, string][] = [
  [25, "Grand Scholar of 2026"],
  [20, "Paper Slayer"],
  [16, "Mark Guardian"],
  [13, "Monster Hunter"],
  [10, "Topic Tamer"],
  [7, "Fog Cutter"],
  [5, "Streak Keeper"],
  [3, "Homework Hero"],
  [2, "Page Turner"],
  [1, "Freshie"],
];

export function titleForLevel(level: number): string {
  for (const [min, title] of TITLES) {
    if (level >= min) return title;
  }
  return "Freshie";
}

// ── Badge catalogue ───────────────────────────────────────────────────────
export interface BadgeDef {
  id: string;
  name: string;
  emoji: string;
  hint: string; // shown greyed-out before unlock
  xp: number; // bonus XP granted on unlock
}

export const BADGES: BadgeDef[] = [
  { id: "first-steps", name: "First Steps", emoji: "🎯", hint: "Complete your first daily three", xp: 10 },
  { id: "early-bird", name: "Early Bird", emoji: "🌅", hint: "Finish the daily three before 8am", xp: 10 },
  { id: "streak-3", name: "Kindling", emoji: "🔥", hint: "Reach a 3-day streak", xp: 10 },
  { id: "streak-7", name: "On Fire", emoji: "🔥", hint: "Reach a 7-day streak", xp: 25 },
  { id: "streak-14", name: "Unstoppable", emoji: "⚡", hint: "Reach a 14-day streak", xp: 50 },
  { id: "streak-30", name: "Eruption", emoji: "🌋", hint: "Reach a 30-day streak", xp: 100 },
  { id: "slayer-1", name: "First Blood", emoji: "⚔️", hint: "Banish your first mistake (beat it twice)", xp: 10 },
  { id: "slayer-10", name: "Monster Hunter", emoji: "🗡️", hint: "Banish 10 mistakes for good", xp: 25 },
  { id: "fog-10", name: "Fog Lifter", emoji: "🌤️", hint: "Get 10 topics to Confident", xp: 25 },
  { id: "fog-25", name: "Sky Clearer", emoji: "☀️", hint: "Get 25 topics to Confident", xp: 50 },
  { id: "calibrated", name: "Straight Shooter", emoji: "🎯", hint: "Be right on 85% of your \"Sure\" answers (20+ taps)", xp: 25 },
  { id: "full-recon", name: "Full Recon", emoji: "🧭", hint: "Predict your mark in every subject you own", xp: 25 },
];

export function badgeById(id: string): BadgeDef | undefined {
  return BADGES.find((b) => b.id === id);
}

// ── XP values (referenced by the server award sites + quest labels) ──────
export const XP = {
  dailyBase: 20,
  dailyPerCorrect: 5, // ×3 max
  mistakeCleared: 15,
  topicStepByTier: { "very-high": 10, high: 7, moderate: 4, watch: 2 } as Record<string, number>,
  focusSession: 10, // capped 4/day
  diagnosticAttempt: 15, // capped 1/subject/day
  diagnosticBest: 10, // new personal best on a subject
} as const;

// ── The bestiary ──────────────────────────────────────────────────────────
// Every mistake is a monster; its species is WHY the mark was lost (the
// notebook's reason field). Monsters have 2 HP — two consecutive correct
// re-tests in the daily three banish them (the resurrection mechanic).

export interface MonsterDef {
  name: string;
  emoji: string;
  tag: string; // what it does to you
  beat: string; // how to fight it
}

export const MONSTERS: Record<string, MonsterDef> = {
  unset: {
    name: "Unknown Spirit",
    emoji: "❓",
    tag: "Unidentified — you can't fight what you haven't named.",
    beat: "Classify why you lost the mark and it takes its true form.",
  },
  careless: {
    name: "Careless Imp",
    emoji: "😈",
    tag: "Steals marks you already own.",
    beat: "Slow down on the final step. Re-read the question before answering.",
  },
  concept: {
    name: "Concept Wraith",
    emoji: "👻",
    tag: "The dangerous one — it wears carelessness as a disguise.",
    beat: "Re-learn the idea from your notes, then let the re-test come to you.",
  },
  method: {
    name: "Method Golem",
    emoji: "🗿",
    tag: "Heavy and slow — it blocks the working, not the idea.",
    beat: "Drill the working structure until the steps are automatic.",
  },
  time: {
    name: "Time Vampire",
    emoji: "🧛",
    tag: "Feeds on your final ten minutes.",
    beat: "Timed practice. The rehearsal clock is garlic.",
  },
};

export const MONSTER_HP = 2; // consecutive correct re-tests to banish

// ── "Almost there" pull ───────────────────────────────────────────────────
// The next thing levelling up actually GETS you — shown under XP bars and in
// the level-up ceremony so tomorrow always has a reason.
const UNLOCKS: [number, string][] = [
  [3, "your ghost earns its headband"],
  [5, "the “Streak Keeper” title"],
  [7, "your ghost earns a cape"],
  [10, "the “Topic Tamer” title"],
  [12, "your ghost earns reading glasses"],
  [16, "your ghost earns the crown"],
  [20, "your ghost starts to glow"],
  [25, "the final title: “Grand Scholar of 2026”"],
];

export function nextUnlock(level: number): { level: number; what: string } | null {
  for (const [lv, what] of UNLOCKS) {
    if (lv > level) return { level: lv, what };
  }
  return null;
}

// ── Ghost companion stages ────────────────────────────────────────────────
// The companion grows with level; accessories stack.
export function ghostStage(level: number): {
  headband: boolean;
  cape: boolean;
  glasses: boolean;
  crown: boolean;
  glow: boolean;
} {
  return {
    headband: level >= 3,
    cape: level >= 7,
    glasses: level >= 12,
    crown: level >= 16,
    glow: level >= 20,
  };
}
