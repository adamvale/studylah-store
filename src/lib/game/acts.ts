// ── The Lightbearer Saga, as acts ───────────────────────────────────────────
// Client-safe. The story beats, gyms and boss kills the game already tracks
// are grouped into ACTS so the student always sees where they are in the
// journey, what is next, and what finishing unlocks (group challenges).
// Progress derives entirely from server-persisted achievements; nothing here
// can be faked into marks or grades.

export interface ActContext {
  story: Set<string>;
  gymsLit: number;
  gymsTotal: number;
  beaten: Set<string>; // mini-boss ids
  underCleared: number;
  questsDone: Set<string>;
}

export interface ActGoal {
  id: string;
  label: string;
  done: boolean;
  current?: number;
  target?: number;
}

export interface ActProgress {
  id: string;
  num: string;
  title: string;
  place: string;
  blurb: string;
  goals: ActGoal[];
  pct: number;
  complete: boolean;
}

const HUSHES = ["whisper", "hurry", "blank"];

export function actProgress(ctx: ActContext): ActProgress[] {
  const s = ctx.story;
  const hushesFaced = HUSHES.filter((h) => ctx.beaten.has(h)).length;

  const acts: Omit<ActProgress, "pct" | "complete">[] = [
    {
      id: "act1",
      num: "Act I",
      title: "The Lamp That Wouldn't Light",
      place: "Haven Hollow, Toa Payoh",
      blurb: "Meet Elder Maple, choose your path, and light the plaza lamp the Fog Order snuffed.",
      goals: [
        { id: "starter", label: "Choose your researcher and companion", done: s.has("starter") },
        { id: "rival1", label: "Answer Kai's three-question challenge", done: s.has("rival1") },
        { id: "fog1", label: "See off the Fog Order grunt in the plaza", done: s.has("fog1") },
      ],
    },
    {
      id: "act2",
      num: "Act II",
      title: "The Six Provinces",
      place: "The island's heartlands",
      blurb: "Every subject you carry is a province. Clear its route, learn from its Guru, light its beacon.",
      goals: [
        {
          id: "gyms",
          label: "Light every beacon (one per subject)",
          done: ctx.gymsTotal > 0 && ctx.gymsLit >= ctx.gymsTotal,
          current: ctx.gymsLit,
          target: ctx.gymsTotal,
        },
        {
          id: "under",
          label: "Wake an Undercroft keystone",
          done: ctx.underCleared >= 1,
          current: Math.min(ctx.underCleared, 1),
          target: 1,
        },
        {
          id: "hush",
          label: "Face one of the Three Hushes",
          done: hushesFaced >= 1,
          current: Math.min(hushesFaced, 1),
          target: 1,
        },
      ],
    },
    {
      id: "act3",
      num: "Act III",
      title: "The Sunken Cells",
      place: "Fort Canning",
      blurb: "The Order keeps a list of everyone the island hushed. Go down, and read the names back to the light.",
      goals: [
        { id: "cells1", label: "Pass the Archivist of the Hush", done: s.has("cells1") },
        { id: "cells2", label: "Pass the Keeper of the Lower Shelf", done: s.has("cells2") },
        { id: "cells", label: "Find who waits at the bottom", done: s.has("cells") },
      ],
    },
    {
      id: "act4",
      num: "Act IV",
      title: "The Summit of Clarity",
      place: "Bukit Timah",
      blurb: "The gauntlet: Commander Murk, Kai's last race, and the Examiner's championship.",
      goals: [
        { id: "fog2", label: "Answer Commander Murk", done: s.has("fog2") },
        { id: "rival2", label: "Race Kai one last time", done: s.has("rival2") },
        { id: "championship", label: "Clear the Examiner's gauntlet", done: s.has("championship") },
      ],
    },
    {
      id: "act5",
      num: "Epilogue",
      title: "The Ninth Lamp",
      place: "one-north and beyond",
      blurb: "The island is safe. What remains is for the ones who stopped: the Old Campus, the open sea, the silent paper.",
      goals: [
        { id: "ninth", label: "Light the ninth, unofficial lamp", done: s.has("ninth") },
        { id: "walk", label: "Cross the Lantern Walk", done: s.has("walk") },
        { id: "finalpaper", label: "Sit the Examiner's silent paper", done: s.has("finalpaper") },
      ],
    },
  ];

  return acts.map((a) => {
    const done = a.goals.filter((g) => g.done).length;
    const pct = Math.round((done / a.goals.length) * 100);
    return { ...a, pct, complete: done === a.goals.length };
  });
}

// ── The group gate ──────────────────────────────────────────────────────────
// Owner's design: group challenges unlock only after a defined portion of the
// solo story. The line is Act I complete + the first beacon lit: the student
// has faced real questions alone before they represent anyone.
export function groupEligibleFrom(ctx: ActContext): boolean {
  const [act1] = actProgress(ctx);
  return act1.complete && ctx.gymsLit >= 1;
}

// ── Level bands ─────────────────────────────────────────────────────────────
// Owner's design: matchmaking is level-banded, a level 10 student can never
// join level 50 students to represent a school. Bands are server-checked.
export interface LevelBand {
  id: string;
  name: string;
  min: number;
  max: number; // inclusive
}

export const LEVEL_BANDS: LevelBand[] = [
  { id: "spark", name: "Spark Band", min: 1, max: 9 },
  { id: "flame", name: "Flame Band", min: 10, max: 19 },
  { id: "beacon", name: "Beacon Band", min: 20, max: 99 },
];

export function bandForLevel(level: number): LevelBand {
  return LEVEL_BANDS.find((b) => level >= b.min && level <= b.max) ?? LEVEL_BANDS[0];
}
