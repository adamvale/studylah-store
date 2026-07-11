import { TILE, isWalkable as baseWalkable, type WorldSubject } from "@/lib/game/world";

// ── The Fog Frontier region ────────────────────────────────────────────────
// Pure data (no DOM): the whole game world generated from the subjects a
// student owns. Haven Hollow (the hub town) links to one province per
// subject (route + gym) and, once every gym is cleared, to the Summit of
// Clarity — the championship. NPC presence and positions are derived from
// the story-beat set so progress physically opens the world.
//
// All names, characters and lore here are ORIGINAL StudyLah IP.

export { TILE } from "@/lib/game/world";
export type { WorldSubject } from "@/lib/game/world";

export const PORTAL = 9 as const;

export function walkable(t: number): boolean {
  return baseWalkable(t) || t === PORTAL;
}

export interface Portal {
  x: number;
  y: number;
  toZone: string;
  toX: number;
  toY: number;
  label: string;
  locked?: string; // message shown instead of travelling
}

export interface NpcBattle {
  questions: number;
  threshold: number; // correct answers needed to win
  beat?: string; // story beat reported on first win
  mixed?: boolean; // draw questions across every owned subject
}

export interface Npc {
  id: string;
  x: number;
  y: number;
  emoji: string;
  name: string;
  lines: string[];
  heal?: boolean;
  battle?: NpcBattle;
  winLines?: string[]; // spoken once the battle beat is already done
}

export interface GymSpot {
  x: number;
  y: number;
  level: string;
  slug: string;
  name: string;
  short: string;
  emoji: string;
}

export interface Zone {
  id: string;
  name: string;
  grid: number[][];
  width: number;
  height: number;
  start: { x: number; y: number };
  portals: Portal[];
  npcs: Npc[];
  gym?: GymSpot;
  encounter?: WorldSubject; // wild battles in this zone's tall grass
}

export interface Region {
  zones: Record<string, Zone>;
  startZone: string;
}

function blank(width: number, height: number): number[][] {
  const grid = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => TILE.GRASS as number)
  );
  for (let x = 0; x < width; x++) {
    grid[0][x] = TILE.TREE;
    grid[height - 1][x] = TILE.TREE;
  }
  for (let y = 0; y < height; y++) {
    grid[y][0] = TILE.TREE;
    grid[y][width - 1] = TILE.TREE;
  }
  return grid;
}

function put(grid: number[][], x: number, y: number, t: number) {
  if (grid[y] && x >= 0 && x < grid[y].length) grid[y][x] = t;
}

function building(grid: number[][], x0: number, y0: number, w: number, h: number, doorX?: number) {
  for (let y = y0; y < y0 + h; y++) {
    for (let x = x0; x < x0 + w; x++) put(grid, x, y, TILE.WALL);
  }
  if (doorX !== undefined) put(grid, doorX, y0 + h - 1, TILE.DOOR);
}

const provId = (s: WorldSubject) => `prov:${s.level}/${s.slug}`;

// ── Haven Hollow (hub) ─────────────────────────────────────────────────────
function buildHub(subjects: WorldSubject[], allGymsCleared: boolean, story: Set<string>): Zone {
  const W = 21;
  const H = 17;
  const grid = blank(W, H);

  // plaza paths: one vertical spine, one horizontal avenue
  for (let y = 1; y < H - 1; y++) put(grid, 10, y, TILE.PATH);
  for (let x = 1; x < W - 1; x++) put(grid, x, 8, TILE.PATH);

  // fountain
  put(grid, 12, 6, TILE.WATER);
  put(grid, 13, 6, TILE.WATER);
  put(grid, 12, 7, TILE.WATER);
  put(grid, 13, 7, TILE.WATER);

  // Elder Maple's study (big building, west)
  building(grid, 3, 3, 5, 3, 5);
  // homes
  building(grid, 15, 3, 3, 2);
  building(grid, 3, 11, 3, 2);
  building(grid, 15, 11, 3, 2);
  // flowers around the plaza
  for (const [fx, fy] of [
    [8, 6],
    [8, 10],
    [12, 10],
    [6, 8],
    [14, 9],
  ] as const) {
    put(grid, fx, fy, TILE.FLOWER);
  }

  // Province portals along the east edge, one per subject
  const portals: Portal[] = subjects.map((s, i) => {
    const y = 4 + i * 2;
    put(grid, 19, y, PORTAL);
    for (let x = 10; x <= 18; x++) if (grid[y][x] === TILE.GRASS) put(grid, x, y, TILE.PATH);
    return { x: 19, y, toZone: provId(s), toX: 7, toY: 23, label: `${s.emoji} ${s.name} Province` };
  });

  // Championship gate, north
  put(grid, 10, 1, PORTAL);
  portals.push({
    x: 10,
    y: 1,
    toZone: "summit",
    toX: 7,
    toY: 10,
    label: "⛰ Summit of Clarity",
    locked: allGymsCleared
      ? undefined
      : "The Summit gate is sealed. Clear every subject gym to open it.",
  });

  const npcs: Npc[] = [
    {
      id: "elder",
      x: 5,
      y: 7,
      emoji: "🧓",
      name: "Elder Maple",
      lines: [
        "The Fog thickens every year around exam season — it feeds on half-remembered ideas.",
        "Each province gym will test you. Win, and the Fog retreats a little.",
        "When every gym emblem is yours, the Summit gate opens. I'll be watching, researcher.",
      ],
    },
    {
      id: "nurse",
      x: 9,
      y: 5,
      emoji: "💚",
      name: "Nurse Fern",
      heal: true,
      lines: ["Rough battle? Rest a moment — there. Hearts restored. Go get them."],
    },
    {
      id: "villager1",
      x: 13,
      y: 10,
      emoji: "👧",
      name: "Mina",
      lines: [
        "My brother tried to cram the whole syllabus the night before. The Fog LOVES that.",
        "A little every day — that's what actually scares it.",
      ],
    },
    {
      id: "villager2",
      x: 16,
      y: 8,
      emoji: "👴",
      name: "Old Tan",
      lines: ["In my day the Fog took whole cohorts. Then Elder Maple taught us to write down every mistake."],
    },
  ];

  // Kai, the rival — waits by the south road until beaten, then cheers you on
  if (story.has("rival1")) {
    npcs.push({
      id: "rival",
      x: 12,
      y: 12,
      emoji: "🧢",
      name: "Kai",
      lines: [
        "Okay, that round was yours. I've been drilling my weak topics since.",
        "Meet me at the Summit when the gate opens. I want the rematch there.",
      ],
    });
  } else if (story.has("starter")) {
    npcs.push({
      id: "rival",
      x: 10,
      y: 12,
      emoji: "🧢",
      name: "Kai",
      battle: { questions: 3, threshold: 2, beat: "rival1" },
      lines: [
        "You're the new researcher? I'm Kai — Elder Maple trained me first.",
        "Nothing personal, but I'm going to clear the Summit before you.",
        "Show me three questions' worth of proof!",
      ],
      winLines: ["Fine — you're real. See you on the routes."],
    });
  }

  // A Fog Order grunt skulks by the north gate until seen off
  if (!story.has("fog1") && story.has("rival1")) {
    npcs.push({
      id: "grunt",
      x: 9,
      y: 3,
      emoji: "🌫️",
      name: "Fog Order Grunt",
      battle: { questions: 2, threshold: 2, beat: "fog1" },
      lines: [
        "The Fog Order thanks you for every topic you skip, kid.",
        "Confusion is our harvest. Care to donate?",
      ],
      winLines: ["Tch — the commander will hear about you."],
    });
  }

  return {
    id: "hub",
    name: "Haven Hollow",
    grid,
    width: W,
    height: H,
    start: { x: 10, y: 14 },
    portals,
    npcs,
  };
}

// ── A subject province: route + gym ───────────────────────────────────────
function buildProvince(s: WorldSubject): Zone {
  const W = 15;
  const H = 26;
  const grid = blank(W, H);

  for (let y = 1; y < H - 1; y++) put(grid, 7, y, TILE.PATH);

  // exit back to Haven
  put(grid, 7, 24, PORTAL);
  const portals: Portal[] = [{ x: 7, y: 24, toZone: "hub", toX: 18, toY: 8, label: "Haven Hollow" }];

  // tall-grass bands the route must cross
  for (const bandY of [20, 16, 12, 8]) {
    for (let x = 3; x <= 11; x++) {
      if (grid[bandY][x] === TILE.GRASS || grid[bandY][x] === TILE.PATH) put(grid, x, bandY, TILE.TALL);
    }
    // side patches for optional grinding
    for (const gy of [bandY - 1, bandY + 1]) {
      for (const gx of [4, 10]) if (grid[gy]?.[gx] === TILE.GRASS) put(grid, gx, gy, TILE.TALL);
    }
  }

  // water feature + flowers for identity
  put(grid, 2, 18, TILE.WATER);
  put(grid, 3, 18, TILE.WATER);
  put(grid, 12, 10, TILE.FLOWER);
  put(grid, 3, 6, TILE.FLOWER);

  // the gym at the top of the route
  building(grid, 5, 2, 5, 3, 7);
  put(grid, 4, 4, TILE.SIGN);

  const npcs: Npc[] = [
    {
      id: `heal:${s.slug}`,
      x: 5,
      y: 22,
      emoji: "⛺",
      name: "Camp Keeper",
      heal: true,
      lines: ["Long route ahead. Rest up — hearts restored."],
    },
    {
      id: `grunt:${s.slug}`,
      x: 6,
      y: 14,
      emoji: "🌫️",
      name: "Fog Order Grunt",
      battle: { questions: 2, threshold: 1 },
      lines: [`The ${s.name} gym? The Fog got there first. Prove you're worth the door.`],
      winLines: ["Ugh. Go on then."],
    },
    {
      id: `villager:${s.slug}`,
      x: 9,
      y: 18,
      emoji: "🧑‍🌾",
      name: "Route Farmer",
      lines: [
        `Wild ones in the grass here fight with real ${s.name} questions.`,
        "Beat one and it joins your dex. The grass regrows — train as long as you like.",
      ],
    },
  ];

  return {
    id: provId(s),
    name: `${s.name} Province`,
    grid,
    width: W,
    height: H,
    start: { x: 7, y: 23 },
    portals,
    npcs,
    gym: { x: 7, y: 4, level: s.level, slug: s.slug, name: s.name, short: s.short, emoji: s.emoji },
    encounter: s,
  };
}

// ── Summit of Clarity (championship) ──────────────────────────────────────
function buildSummit(story: Set<string>): Zone {
  const W = 15;
  const H = 13;
  const grid = blank(W, H);
  for (let y = 1; y < H - 1; y++) put(grid, 7, y, TILE.PATH);
  put(grid, 7, 11, PORTAL);
  // the hall of the Examiner
  building(grid, 5, 1, 5, 2);
  put(grid, 5, 5, TILE.FLOWER);
  put(grid, 9, 7, TILE.FLOWER);

  const npcs: Npc[] = [];

  // The gauntlet is physical: commander blocks the path, then Kai, then Sage.
  if (!story.has("fog2")) {
    npcs.push({
      id: "commander",
      x: 7,
      y: 8,
      emoji: "🌫️",
      name: "Commander Murk",
      battle: { questions: 3, threshold: 2, beat: "fog2", mixed: true },
      lines: [
        "So the Order's grunts couldn't stop one student.",
        "I am Murk. Every mark you've ever dropped belongs to the Fog.",
        "Let's see you take them back.",
      ],
      winLines: ["Impossible… the Fog will remember you."],
    });
  }
  if (!story.has("rival2")) {
    npcs.push({
      id: "rival2",
      x: 7,
      y: 6,
      emoji: "🧢",
      name: "Kai",
      battle: { questions: 3, threshold: 2, beat: "rival2", mixed: true },
      lines: [
        "Told you I'd be here first. The commander slowed me down, that's all.",
        "One last round — winner walks in to Sage.",
      ],
      winLines: ["…Go. Take the championship. And thanks for the push, honestly."],
    });
  }
  npcs.push({
    id: "sage",
    x: 7,
    y: 3,
    emoji: "🎓",
    name: "Examiner Sage",
    battle: story.has("rival2")
      ? { questions: 8, threshold: 6, beat: "championship", mixed: true }
      : undefined,
    lines: story.has("rival2")
      ? [
          "Every gym emblem, and both gatekeepers behind you. Well then.",
          "Eight questions, every subject you own, no theme, no mercy — the frontier's whole syllabus.",
          "Six correct makes you Regional Champion. Begin.",
        ]
      : ["The gauntlet has an order, researcher. Settle things behind you first."],
    winLines: [
      "Regional Champion. The Fog thins wherever you walk now.",
      "The real papers are your post-game, and you've already trained for them.",
    ],
  });

  return {
    id: "summit",
    name: "Summit of Clarity",
    grid,
    width: W,
    height: H,
    start: { x: 7, y: 10 },
    portals: [{ x: 7, y: 11, toZone: "hub", toX: 10, toY: 2, label: "Haven Hollow" }],
    npcs,
  };
}

export function buildRegion(
  subjects: WorldSubject[],
  cleared: Set<string>,
  story: Set<string>
): Region {
  const allGymsCleared =
    subjects.length > 0 && subjects.every((s) => cleared.has(`${s.level}/${s.slug}`));
  const zones: Record<string, Zone> = {
    hub: buildHub(subjects, allGymsCleared, story),
    summit: buildSummit(story),
  };
  for (const s of subjects) zones[provId(s)] = buildProvince(s);
  return { zones, startZone: "hub" };
}
