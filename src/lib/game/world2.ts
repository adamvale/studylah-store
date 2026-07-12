import { TILE, isWalkable as baseWalkable, type WorldSubject } from "@/lib/game/world";
import { loreFor, SALTWIND_TABLE, ENCOUNTER_RATE, type SpeciesRow } from "@/lib/game/season";

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
export const ROOF = 10 as const;
export const ROOF_RIDGE = 11 as const;
export const STAIRS = 12 as const;
export const CAVE_FLOOR = 13 as const;
export const CAVE_WALL = 14 as const;
export const FOGBANK = 15 as const; // walkable; the Old Campus encounter tile
export const ROCK = 16 as const;
export const SAND = 17 as const;
export const RUINS = 18 as const; // walkable restored-campus floor
export const FENCE = 19 as const;
export const BRIDGE = 20 as const;
// Building interiors
export const INT_FLOOR = 21 as const; // walkable wooden floor
export const INT_WALL = 22 as const; // interior wall (solid)
export const BOOKSHELF = 23 as const;
export const DESK = 24 as const;
export const TELESCOPE = 25 as const;
export const HEARTH = 26 as const; // cosy fireplace (animated campfire)
export const STALL = 27 as const; // market counter
export const RUG = 28 as const; // decorative, walkable
export const MAT = 29 as const; // the exit doormat inside a building
export const LANTERN = 30 as const; // a lit beacon-lamp (the Lightbearer motif)

const EXTRA_WALKABLE = new Set<number>([
  PORTAL, STAIRS, CAVE_FLOOR, FOGBANK, SAND, RUINS, BRIDGE, INT_FLOOR, RUG, MAT,
]);

export function walkable(t: number): boolean {
  return baseWalkable(t) || EXTRA_WALKABLE.has(t);
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
  emoji: string; // fallback when sheets fail to load
  sprite: string; // walker block + portrait name on the original sheets
  name: string;
  lines: string[];
  heal?: boolean;
  battle?: NpcBattle;
  winLines?: string[]; // spoken once the battle beat is already done
  monster?: string; // draw as a monster walker instead of a human sprite
  boss?: string; // mini-boss id (season.ts MINI_BOSSES) — boss battle rules
  front?: { level: string; slug: string; species: string }; // weekly Fog Front
  keystone?: { level: string; slug: string; species: string }; // Undercroft keystone
  stone?: "left" | "near" | "far"; // Undercroft echo stone
  quest?: string; // quest id this NPC gives (season.ts QUESTS)
}

export interface GymSpot {
  x: number;
  y: number;
  level: string;
  slug: string;
  name: string;
  short: string;
  emoji: string;
  family?: string;
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
  encounter?: WorldSubject; // subject whose questions power battles here
  mixed?: WorldSubject[]; // Saltwind: rotate subjects per encounter
  table?: SpeciesRow[]; // d100 species table (defaults to lore route)
  encounterRate?: number; // per-step probability on encounter tiles
  encounterTiles?: number[]; // tile ids that roll encounters (default TALL)
  respawn?: boolean; // false: cleared tiles convert permanently (Old Campus)
  stoneOrder?: ("left" | "near" | "far")[]; // Undercroft puzzle order
  signs?: { x: number; y: number; text: string }[];
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
  // ridge cap, sloped roof, then a plastered wall row — reads as a real house
  for (let y = y0; y < y0 + h; y++) {
    for (let x = x0; x < x0 + w; x++) {
      const t = y === y0 ? ROOF_RIDGE : y < y0 + h - 1 ? ROOF : TILE.WALL;
      put(grid, x, y, t);
    }
  }
  if (doorX !== undefined) put(grid, doorX, y0 + h - 1, TILE.DOOR);
}

// ── Building interiors ───────────────────────────────────────────────────────
// A door in the hub is a portal into a small furnished room. Each room is its
// own zone with wall border, wooden floor, themed furniture and an exit mat.
type InteriorStyle = "study" | "home" | "shop";

const INTERIOR_FURNITURE: Record<InteriorStyle, [number, number, number][]> = {
  study: [
    [2, 1, BOOKSHELF], [3, 1, BOOKSHELF], [5, 1, BOOKSHELF], [6, 1, BOOKSHELF],
    [7, 1, TELESCOPE], [4, 2, DESK],
    [1, 6, LANTERN], [7, 6, LANTERN],
    [3, 4, RUG], [4, 4, RUG], [5, 4, RUG],
  ],
  home: [
    [2, 1, HEARTH], [6, 1, BOOKSHELF], [7, 2, DESK],
    [1, 6, LANTERN], [7, 6, LANTERN],
    [3, 4, RUG], [4, 4, RUG], [5, 4, RUG],
  ],
  shop: [
    [2, 1, STALL], [4, 1, STALL], [6, 1, STALL],
    [1, 6, LANTERN], [7, 6, LANTERN],
    [3, 4, RUG], [4, 4, RUG], [5, 4, RUG],
  ],
};

// The hub's enterable buildings — shared so buildHub (portals) and buildRegion
// (the interior zones) agree on door coordinates.
const HUB_INTERIORS: {
  id: string;
  name: string;
  style: InteriorStyle;
  doorX: number;
  doorY: number;
}[] = [
  { id: "int:study", name: "Elder Maple's Study", style: "study", doorX: 5, doorY: 5 },
  { id: "int:home1", name: "A Cosy Home", style: "home", doorX: 16, doorY: 4 },
  { id: "int:home2", name: "A Quiet Home", style: "home", doorX: 4, doorY: 12 },
  { id: "int:corner", name: "The Corner Shop", style: "shop", doorX: 16, doorY: 12 },
];

function buildInterior(
  id: string,
  name: string,
  style: InteriorStyle,
  exitZone: string,
  exitX: number,
  exitY: number
): Zone {
  const W = 9;
  const H = 8;
  const grid: number[][] = [];
  for (let y = 0; y < H; y++) {
    const row: number[] = [];
    for (let x = 0; x < W; x++) {
      const edge = x === 0 || x === W - 1 || y === 0 || y === H - 1;
      row.push(edge ? INT_WALL : INT_FLOOR);
    }
    grid.push(row);
  }
  for (const [fx, fy, t] of INTERIOR_FURNITURE[style]) put(grid, fx, fy, t);
  const mx = 4;
  put(grid, mx, H - 1, MAT); // exit doormat, breaking the bottom wall
  return {
    id,
    name,
    grid,
    width: W,
    height: H,
    start: { x: mx, y: H - 2 },
    portals: [{ x: mx, y: H - 1, toZone: exitZone, toX: exitX, toY: exitY, label: "Outside" }],
    npcs: [],
    encounterRate: 0,
  };
}

const provId = (s: WorldSubject) => `prov:${s.level}/${s.slug}`;

// ── Haven Hollow (hub) ─────────────────────────────────────────────────────
function buildHub(
  subjects: WorldSubject[],
  cleared: Set<string>,
  allGymsCleared: boolean,
  story: Set<string>,
  frontPlace: string | null,
  saltwindOpen: boolean,
  blankHere: boolean,
  cellsOpen: boolean,
  readingOpen: boolean
): Zone {
  const lit = subjects.filter((s) => cleared.has(`${s.level}/${s.slug}`)).length;
  const total = subjects.length;
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

  // Elder Maple's study (big building, west) + three enterable homes/shop.
  // Doors line up with HUB_INTERIORS so each opens into a furnished room.
  building(grid, 3, 3, 5, 3, 5);
  building(grid, 15, 3, 3, 2, 16);
  building(grid, 3, 11, 3, 2, 4);
  building(grid, 15, 11, 3, 2, 16);
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
  // the town notice board
  put(grid, 11, 5, TILE.SIGN);

  // Province portals along the east edge, one per subject
  const portals: Portal[] = subjects.map((s, i) => {
    const y = 4 + i * 2;
    put(grid, 19, y, PORTAL);
    for (let x = 10; x <= 18; x++) if (grid[y][x] === TILE.GRASS) put(grid, x, y, TILE.PATH);
    return { x: 19, y, toZone: provId(s), toX: 7, toY: 23, label: `${s.emoji} ${s.name} Province` };
  });

  // Saltwind Steps portal, south-east corner of the avenue
  put(grid, 19, 12, PORTAL);
  for (let x = 10; x <= 18; x++) if (grid[12][x] === TILE.GRASS) put(grid, x, 12, TILE.PATH);
  portals.push({
    x: 19,
    y: 12,
    toZone: "saltwind",
    toX: 2,
    toY: 4,
    label: "🌊 Saltwind Steps",
    locked: saltwindOpen
      ? undefined
      : "The coast road opens when two beacons burn — the Provinces have to meet somewhere.",
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
      : `The gate answers to beacons, not keys — ${lit}/${total} lit. Every gym emblem lights one.`,
  });

  const npcs: Npc[] = [
    {
      id: "elder",
      x: 5,
      y: 7,
      emoji: "🧓",
      sprite: "elder_maple",
      name: "Elder Maple",
      quest: "notebook3",
      lines: [
        "Years ago the Fog swallowed the Old Campus beyond the Summit. A whole cohort stopped believing they could pass — and it fed.",
        "I walked out of that Fog with one notebook: every mistake I ever made, written down and faced. That book burned a path.",
        `Each gym emblem lights a beacon over Haven — ${lit} of ${total} burn tonight. Light them all, Lightbearer, and the Summit gate will open.`,
      ],
    },
    {
      id: "nurse",
      x: 9,
      y: 5,
      emoji: "💚",
      sprite: "nurse_fern",
      name: "Nurse Fern",
      heal: true,
      quest: "unswept",
      lines: [
        "Every researcher falls. The ones who matter get back up — there, hearts restored.",
        "Elder Maple says courage isn't never failing. It's coming back the next morning.",
      ],
    },
    {
      id: "villager1",
      x: 13,
      y: 10,
      emoji: "👧",
      sprite: "mina",
      name: "Mina",
      lines: [
        "My brother tried to cram the whole syllabus the night before his papers. The Fog LOVES that.",
        "A little every day — that's what actually scares it.",
      ],
    },
    {
      id: "villager2",
      x: 16,
      y: 10,
      emoji: "👴",
      sprite: "old_tan",
      name: "Old Tan",
      quest: "signs",
      lines: [
        "I was there when the Old Campus fell. We didn't lose to hard questions, child — we lost to silence. Nobody admitted what they didn't know.",
        "Your bestiary is the opposite of silence. Keep writing the monsters down.",
      ],
    },
    {
      id: "student_a",
      x: 6,
      y: 10,
      emoji: "🧒",
      sprite: "student_a",
      name: "Ping",
      quest: "buddies",
      lines:
        lit === 0
          ? ["The sky over Haven used to have lights, my grandma says. I've never seen one…"]
          : lit < total
          ? [`${lit} beacon${lit === 1 ? "" : "s"}! I saw ${lit === 1 ? "it" : "them"} come on from my window! Are you doing that?`]
          : ["ALL the beacons are lit! When I take my papers, I'm going to remember this sky."],
    },
    {
      id: "duelwarden",
      x: 14,
      y: 12,
      emoji: "⚔️",
      sprite: "student_c",
      name: "Rin the Duel Warden",
      lines: [
        "Two researchers, one sealed set of questions, no audience. That's a duel done properly.",
        "Make a code and hand it to a friend — or bring me a code someone handed you.",
      ],
    },
    {
      id: "guru",
      x: 8,
      y: 12,
      emoji: "🎓",
      sprite: "examiner_sage",
      name: "Sage of the Academy",
      lines: [
        "Every subject you carry has a teacher waiting in the Academy — one for each.",
        "Sit a while. Learn a little, prove it with a question, and the Fog loses its grip.",
      ],
    },
    {
      id: "student_b",
      x: 12,
      y: 4,
      emoji: "👦",
      sprite: "student_b",
      name: "Wei",
      lines:
        lit === 0
          ? ["I failed my mid-years and I didn't tell anyone. The fog outside my window got thicker that week. Weird, right?"]
          : ["I showed my mistake book to Elder Maple like you do. The fog by my window… it's thinner now. Thank you."],
    },
  ];
  // Kai, the rival — races you for a reason he won't say out loud at first
  if (story.has("rival1")) {
    npcs.push({
      id: "rival",
      x: 12,
      y: 12,
      emoji: "🧢",
      sprite: "kai_rival",
      name: "Kai",
      quest: "shortcut",
      lines: [
        "Okay, that round was yours. Truth? My big sister froze in her exam year. The Fog got loud and she just… stopped answering.",
        "That's why I race. If I'm fast enough, maybe it never catches me. Meet me at the Summit — I want the rematch where she gave up.",
      ],
    });
  } else if (story.has("starter")) {
    npcs.push({
      id: "rival",
      x: 10,
      y: 12,
      emoji: "🧢",
      sprite: "kai_rival",
      name: "Kai",
      battle: { questions: 3, threshold: 2, beat: "rival1" },
      lines: [
        "You're the new Lightbearer? I'm Kai — Elder Maple trained me first, whatever the old ghost says.",
        "The Summit gate hasn't opened in years. I'm going to be the one standing there when it does.",
        "Show me three questions' worth of proof you belong on this road!",
      ],
      winLines: ["…Fine. You're real. See you on the routes, Lightbearer."],
    });
  }

  // Murk, thawing, sets his first question once the Summit business is done
  if (story.has("fog2")) {
    npcs.push({
      id: "murkquest",
      x: 8,
      y: 2,
      emoji: "🌫️",
      sprite: "commander_murk",
      name: "Commander Murk",
      quest: "oldest",
      lines: [
        "…Do not look so surprised. The town has benches. I am using a bench.",
        "There is a question you have been avoiding. I can smell it. I invented avoiding.",
      ],
    });
  }

  // Mini-boss 3 blocks the plaza's north reach once three beacons burn
  if (blankHere) {
    npcs.push({
      id: "boss:blank",
      x: 10,
      y: 3,
      emoji: "🌫️",
      sprite: "fog_grunt",
      monster: "unset",
      boss: "blank",
      name: "The Blank",
      lines: [
        "The path ahead is white. Not fog — unwritten.",
        "Don't. Whatever you're about to do — the first bit will be small and stupid. Better to do nothing beautifully.",
      ],
    });
  }

  // A Fog Order grunt skulks by the north gate until seen off
  if (!story.has("fog1") && story.has("rival1")) {
    npcs.push({
      id: "grunt",
      x: 9,
      y: 3,
      emoji: "🌫️",
      sprite: "fog_grunt",
      name: "Fog Order Grunt",
      battle: { questions: 2, threshold: 2, beat: "fog1" },
      lines: [
        "Beacons, beacons. The Order snuffed them once and Haven slept SO peacefully.",
        "Nobody fails a paper they never face, kid. Confusion is mercy. Care to donate yours?",
      ],
      winLines: ["Tch — Commander Murk will hear about you, Lightbearer."],
    });
  }

  // Doors into the furnished interiors — you land just above the exit mat.
  for (const it of HUB_INTERIORS) {
    portals.push({ x: it.doorX, y: it.doorY, toZone: it.id, toX: 4, toY: 6, label: it.name });
  }

  // The saga gates: the Sunken Cells descend from the spine's south end, and
  // the Reading Room waits at the end of the south lane.
  put(grid, 10, 15, PORTAL);
  portals.push({
    x: 10,
    y: 15,
    toZone: "cells",
    toX: 6,
    toY: 2,
    label: "🕯 The Sunken Cells — Fort Canning",
    locked: cellsOpen
      ? undefined
      : "The Cells listen for footsteps that have lit two beacons. Not yet.",
  });
  for (let x = 11; x <= 18; x++) if (grid[14][x] === TILE.GRASS) put(grid, x, 14, TILE.PATH);
  put(grid, 19, 14, PORTAL);
  portals.push({
    x: 19,
    y: 14,
    toZone: "reading",
    toX: 6,
    toY: 8,
    label: "📖 The Reading Room — Bras Basah",
    locked: readingOpen
      ? undefined
      : "The Reading Room opens when the island is safe — after the Championship.",
  });

  return {
    id: "hub",
    name: "Haven Hollow",
    grid,
    width: W,
    height: H,
    start: { x: 10, y: 14 },
    portals,
    npcs,
    signs: [
      {
        x: 11,
        y: 5,
        text: frontPlace
          ? `NOTICE: fog sighted on ${frontPlace}. It's sitting there like it pays rent. Someone should ask it to leave. Politely. With questions.`
          : "NOTICE: no fog fronts this week. The board enjoys the rest.",
      },
    ],
  };
}

// ── A subject province: route + gym + Undercroft stairs ───────────────────
function buildProvince(
  s: WorldSubject,
  opts: {
    underOpen: boolean;
    front: { key: string; species: string } | null;
    bossHere: "whisper" | null;
    beaten: Set<string>;
  }
): Zone {
  const lore = loreFor(s.family);
  const W = 15;
  const H = 26;
  const grid = blank(W, H);

  for (let y = 1; y < H - 1; y++) put(grid, 7, y, TILE.PATH);

  // exit back to Haven
  put(grid, 7, 24, PORTAL);
  const portals: Portal[] = [{ x: 7, y: 24, toZone: "hub", toX: 18, toY: 8, label: "Haven Hollow" }];

  // the Undercroft stairs, sunk into the west hedge
  put(grid, 2, 12, STAIRS);
  portals.push({
    x: 2,
    y: 12,
    toZone: `under:${s.level}/${s.slug}`,
    toX: 2,
    toY: 9,
    label: lore.undercroft,
    locked: opts.underOpen
      ? undefined
      : "The Undercroft opens once Haven trusts you — light any beacon first.",
  });

  // tall-grass bands the route must cross
  for (const bandY of [20, 16, 12, 8]) {
    for (let x = 3; x <= 11; x++) {
      if (grid[bandY][x] === TILE.GRASS || grid[bandY][x] === TILE.PATH) put(grid, x, bandY, TILE.TALL);
    }
    for (const gy of [bandY - 1, bandY + 1]) {
      for (const gx of [4, 10]) if (grid[gy]?.[gx] === TILE.GRASS) put(grid, gx, gy, TILE.TALL);
    }
  }

  put(grid, 2, 18, TILE.WATER);
  put(grid, 3, 18, TILE.WATER);
  put(grid, 12, 10, TILE.FLOWER);
  put(grid, 3, 6, TILE.FLOWER);

  // the gym at the top of the route
  building(grid, 5, 2, 5, 3, 7);
  put(grid, 4, 4, TILE.SIGN);
  // Old Tan's other signs (quest: Signs of Life)
  put(grid, 9, 10, TILE.SIGN);
  put(grid, 4, 21, TILE.SIGN);

  const signs = [
    { x: 4, y: 4, text: "THE FOG READS YOUR NOTEBOOK. Read it first." },
    { x: 9, y: 10, text: "TALL GRASS AHEAD — imps love a rusher. Walk in with hearts full." },
    { x: 4, y: 21, text: "CAMP: 40 PACES SOUTH. Closer than you think. Everything is." },
  ];

  const npcs: Npc[] = [
    {
      id: `heal:${s.slug}`,
      x: 5,
      y: 22,
      emoji: "⛺",
      sprite: "camp_keeper",
      name: "Camp Keeper",
      heal: true,
      quest: "guardianround",
      lines: [
        "Long route ahead. Rest — there, hearts restored.",
        `They say ${lore.place} has a guardian. It only shows itself to those who take the gym honestly.`,
      ],
    },
    {
      id: `grunt:${s.slug}`,
      x: 6,
      y: 14,
      emoji: "🌫️",
      sprite: "fog_grunt",
      name: "Fog Order Grunt",
      battle: { questions: 2, threshold: 1 },
      lines: [
        `The ${lore.place} beacon has been dark for years — cosy, isn't it?`,
        "Quota's quota, kid. Prove you're worth the gym door.",
      ],
      winLines: ["…huh. It's warmer out here than they said."],
    },
    {
      id: `villager:${s.slug}`,
      x: 9,
      y: 18,
      emoji: "🧑‍🌾",
      sprite: "route_farmer",
      name: "Route Farmer",
      quest: "blueprint",
      lines: [
        `Wild ones in this grass fight with real ${s.name} questions — the Fog dresses them up as monsters.`,
        "Beat one and it joins your dex. The grass regrows — train as long as you like.",
      ],
    },
  ];

  // The weekly Fog Front squats on the landmark until someone asks it to leave
  if (opts.front) {
    npcs.push({
      id: `front:${s.slug}`,
      x: 9,
      y: 6,
      emoji: "🌫️",
      sprite: "fog_grunt",
      monster: opts.front.species,
      front: { level: s.level, slug: s.slug, species: opts.front.species },
      name: "The Fog Front",
      lines: [
        `The fog sits on ${lore.landmark} like it pays rent.`,
        "It has a large opinion of itself. Ask it to leave. Politely. With questions.",
      ],
    });
  }

  // Mini-boss 1 haunts the weakest province once the Order takes notice
  if (opts.bossHere === "whisper" && !opts.beaten.has("whisper")) {
    npcs.push({
      id: "boss:whisper",
      x: 5,
      y: 9,
      emoji: "🌫️",
      sprite: "fog_grunt",
      monster: "concept",
      boss: "whisper",
      name: "The Whisper",
      lines: [
        "The grass stops rustling — everything holds its breath.",
        "Oh, good. You. Don't worry — I'll make this easy for you. You need that, don't you?",
      ],
    });
  }

  return {
    id: provId(s),
    name: lore.place,
    grid,
    width: W,
    height: H,
    start: { x: 7, y: 23 },
    portals,
    npcs,
    gym: { x: 7, y: 4, ...s },
    encounter: s,
    table: lore.route,
    encounterRate: ENCOUNTER_RATE.route,
    signs,
  };
}

// ── The Undercroft: the subject's foundations, literally underground ──────
function buildUndercroft(s: WorldSubject, underCleared: boolean): Zone {
  const lore = loreFor(s.family);
  const W = 15;
  const H = 12;
  const grid: number[][] = Array.from({ length: H }, () =>
    Array.from({ length: W }, () => CAVE_FLOOR as number)
  );
  for (let x = 0; x < W; x++) {
    grid[0][x] = CAVE_WALL;
    grid[H - 1][x] = CAVE_WALL;
  }
  for (let y = 0; y < H; y++) {
    grid[y][0] = CAVE_WALL;
    grid[y][W - 1] = CAVE_WALL;
  }
  // inner pillars for cave shape
  for (const [px, py] of [[4, 3], [4, 4], [10, 3], [10, 4], [4, 7], [10, 7], [7, 5]] as const) {
    put(grid, px, py, CAVE_WALL);
  }
  put(grid, 2, 10, STAIRS); // back up
  put(grid, 2, 2, TILE.SIGN); // the entrance tablet

  // deterministic per-subject stone order, posted in plain sight
  const orders: ("left" | "near" | "far")[][] = [
    ["left", "near", "far"],
    ["far", "left", "near"],
    ["near", "far", "left"],
  ];
  let h = 0;
  for (const ch of s.slug) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const stoneOrder = orders[h % 3];
  const orderWords = stoneOrder.map((o) => (o === "left" ? "the Left stone" : o === "near" ? "the Near stone" : "the Far stone"));

  const portals: Portal[] = [
    { x: 2, y: 10, toZone: provId(s), toX: 2, toY: 13, label: lore.place },
  ];

  const npcs: Npc[] = [
    {
      id: `stoneL:${s.slug}`,
      x: 2,
      y: 6,
      emoji: "🪨",
      sprite: "fog_grunt",
      stone: "left",
      name: "Echo Stone (Left)",
      lines: ["The stone hums, waiting to be struck."],
    },
    {
      id: `stoneN:${s.slug}`,
      x: 7,
      y: 8,
      emoji: "🪨",
      sprite: "fog_grunt",
      stone: "near",
      name: "Echo Stone (Near)",
      lines: ["The stone hums, waiting to be struck."],
    },
    {
      id: `stoneF:${s.slug}`,
      x: 12,
      y: 3,
      emoji: "🪨",
      sprite: "fog_grunt",
      stone: "far",
      name: "Echo Stone (Far)",
      lines: ["The stone hums, waiting to be struck."],
    },
    {
      id: `defector:${s.slug}`,
      x: 5,
      y: 9,
      emoji: "🫖",
      sprite: "fog_grunt",
      name: "Defected Grunt",
      quest: "gruntwork",
      lines: [
        "Don't mind me. Quit the Order. The pension was fog, turns out. All of it was fog.",
        `Left sang first here once… read the tablet. The stones remember the order even when I don't.`,
      ],
    },
    {
      id: `keystone:${s.slug}`,
      x: 12,
      y: 9,
      emoji: "🗿",
      sprite: "fog_grunt",
      monster: lore.keystone,
      keystone: underCleared ? undefined : { level: s.level, slug: s.slug, species: lore.keystone },
      name: "The Keystone",
      lines: underCleared
        ? ["The under-beacon glows steadily. The foundations hold."]
        : ["Something vast sleeps against the keystone door. Ring the stones in order to wake it."],
    },
  ];

  return {
    id: `under:${s.level}/${s.slug}`,
    name: lore.undercroft,
    grid,
    width: W,
    height: H,
    start: { x: 2, y: 9 },
    portals,
    npcs,
    encounter: s,
    table: lore.under,
    encounterRate: ENCOUNTER_RATE.undercroft,
    encounterTiles: [CAVE_FLOOR],
    stoneOrder,
    signs: [
      {
        x: 2,
        y: 2,
        text: `The tablet reads: strike ${orderWords[0]}, then ${orderWords[1]}, then ${orderWords[2]}. The door listens.`,
      },
    ],
  };
}

// ── Saltwind Steps: where the Provinces meet the sea ───────────────────────
function buildSaltwind(subjects: WorldSubject[], beaten: Set<string>): Zone {
  const W = 20;
  const H = 11;
  const grid = blank(W, H);
  // the sea, east
  for (let y = 1; y < H - 1; y++) {
    for (let x = 12; x < W - 1; x++) put(grid, x, y, TILE.WATER);
  }
  // sandy shore strip
  for (let y = 1; y < H - 1; y++) put(grid, 11, y, SAND);
  // the long bridge — the postcard moment
  for (let x = 12; x < W - 1; x++) put(grid, x, 4, BRIDGE);
  put(grid, W - 2, 4, PORTAL);
  // paths + grass
  for (let x = 1; x <= 11; x++) put(grid, x, 4, TILE.PATH);
  for (const [tx, ty] of [[4, 2], [7, 3], [5, 6], [8, 7], [3, 8], [9, 2], [6, 8]] as const) {
    put(grid, tx, ty, TILE.TALL);
  }
  put(grid, 2, 2, TILE.FLOWER);
  put(grid, 9, 8, SAND);
  // the ferry stone south along the shore — out to the Southern Isles
  put(grid, 11, 9, PORTAL);

  const npcs: Npc[] = [
    {
      id: "fisher",
      x: 10,
      y: 6,
      emoji: "🎣",
      sprite: "route_farmer",
      name: "Saltwind Fisher",
      quest: "tide",
      lines: [
        "Tide's in. Brought something of yours back.",
        "Sea returns what you thought you'd finished with. Kinder than it sounds.",
      ],
    },
    {
      id: "salt_camp",
      x: 2,
      y: 6,
      emoji: "⛺",
      sprite: "camp_keeper",
      name: "Shore Keeper",
      heal: true,
      lines: ["Salt air fixes most things. Hearts restored — mind the tide."],
    },
  ];

  // Mini-boss 2 paces the bridge's far end
  if (!beaten.has("hurry")) {
    npcs.push({
      id: "boss:hurry",
      x: 15,
      y: 4,
      emoji: "🌫️",
      sprite: "fog_grunt",
      monster: "time",
      boss: "hurry",
      name: "The Hurry",
      lines: [
        "It's already there when you arrive. It checks its wrist. There's no watch. It checks anyway.",
        "You're late. You're always late. Everyone is always late. GO.",
      ],
    });
  }

  return {
    id: "saltwind",
    name: "Saltwind Steps",
    grid,
    width: W,
    height: H,
    start: { x: 2, y: 4 },
    portals: [{ x: W - 2, y: 4, toZone: "hub", toX: 18, toY: 8, label: "Haven Hollow" }, { x: 11, y: 9, toZone: "lantern", toX: 2, toY: 5, label: "🏮 The Lantern Walk — the Southern Isles" }],
    npcs,
    encounter: subjects[0],
    mixed: subjects,
    table: SALTWIND_TABLE,
    encounterRate: ENCOUNTER_RATE.saltwind,
  };
}

// ── The Old Campus: the school the Fog claimed — Murk's story, walkable ────
function buildCampus(subjects: WorldSubject[], campusCleared: Set<string>, story: Set<string>): Zone {
  const W = 21;
  const H = 12;
  const grid: number[][] = Array.from({ length: H }, () =>
    Array.from({ length: W }, () => RUINS as number)
  );
  for (let x = 0; x < W; x++) {
    grid[0][x] = CAVE_WALL;
    grid[H - 1][x] = CAVE_WALL;
  }
  for (let y = 0; y < H; y++) {
    grid[y][0] = CAVE_WALL;
    grid[y][W - 1] = CAVE_WALL;
  }
  // three ruined buildings
  building(grid, 3, 2, 4, 3, 4);
  building(grid, 9, 2, 4, 3, 10);
  building(grid, 15, 2, 4, 3, 16);
  // fog banks — the encounter tiles; cleared ones become plain ruins floor
  const fogSpots: [number, number][] = [
    [2, 6], [4, 7], [6, 6], [8, 8], [10, 7], [12, 6], [14, 8], [16, 7], [18, 6], [5, 9], [11, 9], [17, 9],
  ];
  let fogged = 0;
  for (const [fx, fy] of fogSpots) {
    if (!campusCleared.has(`${fx}-${fy}`)) {
      put(grid, fx, fy, FOGBANK);
      fogged++;
    }
  }
  put(grid, 10, 10, PORTAL);

  const clearedCount = fogSpots.length - fogged;
  const allClear = fogged === 0;

  const DIARY = [
    "Entry one: I never failed an exam. Write that down, whoever finds this. Not one.",
    "Entry two: the trick is momentum. I had it once. Whole cohorts borrowed mine.",
    "Entry three: the beacons made it worse, somehow. Every light was a thing to keep lit.",
    "Entry four: I stopped being able to start. Not finish — START. Nobody warns you about starting.",
    "Entry five: today I did not open the book. The quiet was… I want to say kind.",
    "Entry six: if anyone reads this — the fog isn't the enemy. The silence about the fog is.",
  ];

  const npcs: Npc[] = [
    {
      id: "carrel",
      x: 4,
      y: 3,
      emoji: "📖",
      sprite: "commander_murk",
      name: "Murk's Study Carrel",
      lines: DIARY.slice(0, Math.max(1, Math.min(6, Math.floor((clearedCount / fogSpots.length) * 6) + 1))),
    },
    {
      id: "plinth",
      x: 10,
      y: 3,
      emoji: "🌫️",
      sprite: "commander_murk",
      name: "Commander Murk",
      quest: allClear && !story.has("ninth") ? "ninth" : undefined,
      lines: allClear
        ? story.has("ninth")
          ? ["It's warm. It was always going to be warm.", "Thorough is not the same as brave — but you already knew that."]
          : [
              "…I know this plinth. I used to eat lunch on it. Before it was a plinth. Before everything was fog.",
              "Eight beacons for the syllabus. The ninth is for the ones who stopped. Light it anyway.",
            ]
        : [
            "The campus remembers more than it says. Clear the fog, room by room.",
            `${clearedCount} of ${fogSpots.length} memories settled. The plinth can wait. It has practice.`,
          ],
    },
  ];

  // the returned townsfolk, once the ninth lamp burns
  if (story.has("ninth")) {
    npcs.push(
      {
        id: "returned1",
        x: 6,
        y: 5,
        emoji: "🧑",
        sprite: "student_c",
        name: "Returned Student",
        lines: ["We could see it from the low road. The ninth one. Everyone could."],
      },
      {
        id: "returned2",
        x: 14,
        y: 5,
        emoji: "🧓",
        sprite: "old_tan",
        name: "Returned Elder",
        lines: ["I sat my papers in that room. The fog never owned it. Turns out it was only borrowing."],
      }
    );
  }

  return {
    id: "campus",
    name: "The Old Campus",
    grid,
    width: W,
    height: H,
    start: { x: 10, y: 9 },
    portals: [{ x: 10, y: 10, toZone: "summit", toX: 7, toY: 4, label: "Summit of Clarity" }],
    npcs,
    encounter: subjects[0],
    mixed: subjects,
    encounterRate: ENCOUNTER_RATE.campus,
    encounterTiles: [FOGBANK],
    respawn: false,
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
      sprite: "commander_murk",
      name: "Commander Murk",
      battle: { questions: 3, threshold: 2, beat: "fog2", mixed: true },
      lines: [
        "Stop. Before you judge me, Lightbearer, know this: I was Maple's first prodigy. First beacon-keeper. First to burn out.",
        "One bad year and everyone I'd ever impressed looked away. The Fog didn't laugh at me. It was QUIET. So I joined the quiet.",
        "A student who never faces the question never fails it. That is the Order's mercy. Show me your answer to that — three questions, every subject.",
      ],
      winLines: [
        "You dropped a mark against the grunts, you know. And you… wrote it down. And came back.",
        "…That was the move I never learned. The Summit is yours. Perhaps the quiet isn't.",
      ],
    });
  }
  if (!story.has("rival2")) {
    npcs.push({
      id: "rival2",
      x: 7,
      y: 6,
      emoji: "🧢",
      sprite: "kai_rival",
      name: "Kai",
      battle: { questions: 3, threshold: 2, beat: "rival2", mixed: true },
      lines: [
        "This is where my sister's cohort fell. I swore I'd stand here one day and not be afraid.",
        "I'm not racing you anymore — I'm racing the version of me that would've quit. One last round. Make it worthy.",
      ],
      winLines: [
        "Ha… I lost and the sky didn't fall. She'd laugh at how long that took me to learn.",
        "Go. Take the championship for Haven — and when your real papers come, remember you already beat the Fog on its own mountain.",
      ],
    });
  }
  npcs.push({
    id: "sage",
    x: 7,
    y: 3,
    emoji: "🎓",
    sprite: "examiner_sage",
    name: "Examiner Sage",
    battle: story.has("rival2")
      ? { questions: 8, threshold: 6, beat: "championship", mixed: true }
      : undefined,
    lines: story.has("rival2")
      ? [
          "Every beacon burning, Murk answered, Kai answered. The Old Campus has waited years for a sky like tonight's.",
          "Eight questions now, one from every corner of your frontier — no theme, no mercy, exactly like the morning that matters.",
          "Six correct and Haven has a Champion again. Lightbearer… begin.",
        ]
      : ["The gauntlet has an order, researcher. Settle what stands behind you first."],
    winLines: [
      "It is done. The Clarity guardian stirs for the first time since the Old Campus fell — look up, Champion.",
      "Hear me: the Fog is never slain, only kept out by lights like yours. Tend the beacons. Keep the notebook. Sit the real papers the way you climbed this mountain — one honest question at a time.",
    ],
  });

  const portals: Portal[] = [
    { x: 7, y: 11, toZone: "hub", toX: 10, toY: 2, label: "Haven Hollow" },
  ];
  if (story.has("championship")) {
    put(grid, 3, 5, PORTAL);
    portals.push({
      x: 3,
      y: 5,
      toZone: "campus",
      toX: 10,
      toY: 9,
      label: "🌫 The Old Campus",
    });
  }

  return {
    id: "summit",
    name: "Summit of Clarity",
    grid,
    width: W,
    height: H,
    start: { x: 7, y: 10 },
    portals,
    npcs,
  };
}

export interface RegionState {
  cleared: Set<string>; // gym keys
  story: Set<string>; // story beats
  beaten: Set<string>; // mini-boss ids + front:<week> keys
  underCleared: Set<string>; // undercroft keystone keys
  campusCleared: Set<string>; // fog-tile keys "x-y"
  front: { key: string; species: string; place: string } | null; // weekly Fog Front
  examWeek: boolean;
  unlockAll?: boolean; // device-local test flag: every zone open, ignore gates
}


// ── THE LIGHTBEARER SAGA — expansion zones (see docs/STORY-CODEX.md) ─────────

// Act III: the Sunken Cells beneath Fort Canning. The Fog Order's records-room,
// where Murk keeps the names of everyone the island ever hushed. Read the
// plaques to bring them home; at the bottom you don't fight Murk — you FIND him.
function buildCells(subjects: WorldSubject[], story: Set<string>): Zone {
  const W = 13;
  const H = 15;
  const grid: number[][] = [];
  for (let y = 0; y < H; y++) {
    const row: number[] = [];
    for (let x = 0; x < W; x++) {
      const edge = x === 0 || x === W - 1 || y === 0 || y === H - 1;
      row.push(edge ? CAVE_WALL : CAVE_FLOOR);
    }
    grid.push(row);
  }
  // serpentine descent: two wall shelves with offset gaps
  for (let x = 1; x <= 8; x++) put(grid, x, 4, CAVE_WALL);
  for (let x = 4; x <= 11; x++) put(grid, x, 8, CAVE_WALL);
  // the way home
  put(grid, 6, 1, PORTAL);
  // name plaques, each with its lamp relit beside it
  put(grid, 2, 3, TILE.SIGN);
  put(grid, 3, 3, LANTERN);
  put(grid, 10, 6, TILE.SIGN);
  put(grid, 9, 6, LANTERN);
  put(grid, 2, 10, TILE.SIGN);
  put(grid, 3, 10, LANTERN);
  // Murk's empty desk-light at the bottom
  put(grid, 5, 13, LANTERN);
  put(grid, 7, 13, LANTERN);

  const npcs: Npc[] = [];
  if (!story.has("cells1")) {
    npcs.push({
      id: "cells1",
      x: 10,
      y: 3,
      emoji: "🌫️",
      sprite: "fog_grunt",
      name: "Archivist of the Hush",
      battle: { questions: 2, threshold: 2, beat: "cells1", mixed: true },
      lines: [
        "Shh. This is a records-room. Every name here CHOSE the quiet… mostly.",
        "You want to read them out loud? Names are heavy. Show me you can carry two questions first.",
      ],
      winLines: ["…they never sound heavy when YOU say them. Go on, then. Read."],
    });
  }
  if (!story.has("cells2")) {
    npcs.push({
      id: "cells2",
      x: 2,
      y: 7,
      emoji: "🌫️",
      sprite: "fog_grunt",
      name: "Keeper of the Lower Shelf",
      battle: { questions: 2, threshold: 2, beat: "cells2", mixed: true },
      lines: [
        "The deeper shelves are older. Cohorts your grandparents whispered about.",
        "The Commander files a new name every season. Yours has a folder ready. Two questions say it stays empty.",
      ],
      winLines: ["Folder's… blank. First blank folder I've ever shelved. Keep walking, Lightbearer."],
    });
  }
  if (!story.has("cells")) {
    npcs.push({
      id: "murkcells",
      x: 6,
      y: 12,
      emoji: "🌫️",
      sprite: "commander_murk",
      name: "Commander Murk",
      lines: [
        "…You read them aloud. Forty years I've kept this room, and no one ever came to READ.",
        "You want to know why I keep the list? Look at the top. First name filed. Maple's first prodigy — the first beacon-keeper. The boy who burned out and found the island simply… looked away.",
        "It's my name, Lightbearer. I filed myself. The Order was never an army — it's a waiting room for everyone the island forgot to forgive.",
        "Take the room. Light every one of them. And when you reach the Summit — bring your notebook. I want to see the move I never learned.",
      ],
    });
  } else {
    npcs.push({
      id: "cellsdone",
      x: 6,
      y: 12,
      emoji: "🕯️",
      sprite: "elder_maple",
      name: "Elder Maple",
      lines: [
        "So this is where he kept them. All those names… and his own at the top, all along.",
        "I taught him everything except how to fail. That lesson he had to wait forty years for a student to bring DOWN here.",
      ],
    });
  }

  return {
    id: "cells",
    name: "The Sunken Cells",
    grid,
    width: W,
    height: H,
    start: { x: 6, y: 2 },
    portals: [{ x: 6, y: 1, toZone: "hub", toX: 10, toY: 14, label: "Haven Hollow" }],
    npcs,
    mixed: subjects,
    encounterRate: 1 / 14,
    encounterTiles: [CAVE_FLOOR],
    signs: [
      { x: 2, y: 3, text: "KOH S.L., Class of 1987 — faced the paper at last. Welcome home." },
      { x: 10, y: 6, text: "R. NAIR, Class of 1994 — asked the question out loud. Welcome home." },
      { x: 2, y: 10, text: "TAN W.M., Class of 2003 — opened the notebook again. Welcome home." },
    ],
  };
}

// Late game: the Lantern Walk across the Southern Isles — cross the water by
// keeping your own lamp lit against the wind. The Examiner waits at the last
// islet, but only for a student all Three Hushes have learned to trust.
function buildLanternWalk(
  subjects: WorldSubject[],
  story: Set<string>,
  beaten: Set<string>
): Zone {
  const W = 21;
  const H = 11;
  const grid: number[][] = [];
  for (let y = 0; y < H; y++) {
    const row: number[] = [];
    for (let x = 0; x < W; x++) row.push(TILE.WATER as number);
    grid.push(row);
  }
  // five islets, joined by plank bridges along the walk row
  const islets = [2, 6, 10, 14, 18];
  for (const cx of islets) {
    for (let y = 4; y <= 6; y++) {
      for (let x = cx - 1; x <= cx + 1; x++) put(grid, x, y, SAND);
    }
    put(grid, cx, 4, LANTERN);
  }
  for (let x = 3; x < 18; x++) {
    if (grid[5][x] === TILE.WATER) put(grid, x, 5, BRIDGE);
  }
  put(grid, 2, 6, PORTAL); // the way back to the Saltwind shore
  put(grid, 6, 6, TILE.SIGN);

  const npcs: Npc[] = [];
  if (!story.has("walk")) {
    npcs.push({
      id: "walkgrunt",
      x: 10,
      y: 5,
      emoji: "🌫️",
      sprite: "fog_grunt",
      name: "Warden of the Wind",
      battle: { questions: 3, threshold: 2, beat: "walk", mixed: true },
      lines: [
        "Out here there's no beacon to borrow. Just your own little lamp and the wind.",
        "The Whisper calls these isles home. Three questions in the open air — let's see whose light gutters first.",
      ],
      winLines: ["Steady little flame you've got. The last islet is watching you now."],
    });
  }
  const allHushes = beaten.has("whisper") && beaten.has("hurry") && beaten.has("blank");
  if (allHushes && !story.has("finalpaper")) {
    npcs.push({
      id: "examfinal",
      x: 18,
      y: 5,
      emoji: "🎓",
      sprite: "examiner_sage",
      name: "…",
      battle: { questions: 5, threshold: 5, beat: "finalpaper", mixed: true },
      lines: ["…"],
      winLines: ["…", "(The Examiner bows. The wind carries the last of the Fog out to sea.)"],
    });
  } else if (!allHushes) {
    put(grid, 18, 4, TILE.SIGN);
  }

  return {
    id: "lantern",
    name: "The Lantern Walk",
    grid,
    width: W,
    height: H,
    start: { x: 2, y: 5 },
    portals: [{ x: 2, y: 6, toZone: "saltwind", toX: 11, toY: 8, label: "Saltwind Steps" }],
    npcs,
    mixed: subjects,
    encounterRate: 1 / 12,
    encounterTiles: [SAND],
    signs: [
      { x: 6, y: 6, text: "THE LANTERN WALK — five isles, one flame. The wind tests every lamp; only the steady cross." },
      { x: 18, y: 4, text: "A stone seat faces the open sea. Someone is expected — after the Three Hushes rest." },
    ],
  };
}

// Post-game: the Reading Room at Bras Basah — the calm New Game+ hearth where
// the island gathers once it is safe.
function buildReadingRoom(story: Set<string>): Zone {
  const W = 13;
  const H = 10;
  const grid: number[][] = [];
  for (let y = 0; y < H; y++) {
    const row: number[] = [];
    for (let x = 0; x < W; x++) {
      const edge = x === 0 || x === W - 1 || y === 0 || y === H - 1;
      row.push(edge ? INT_WALL : INT_FLOOR);
    }
    grid.push(row);
  }
  for (const x of [2, 3, 4, 8, 9, 10]) put(grid, x, 1, BOOKSHELF);
  put(grid, 6, 1, HEARTH); // the campfire at the story's end
  put(grid, 1, 7, LANTERN);
  put(grid, 11, 7, LANTERN);
  for (let x = 5; x <= 7; x++) for (let y = 4; y <= 5; y++) put(grid, x, y, RUG);
  put(grid, 6, 9, MAT);

  const after = story.has("championship");
  const npcs: Npc[] = [
    {
      id: "maple_reading",
      x: 4,
      y: 3,
      emoji: "🕯️",
      sprite: "elder_maple",
      name: "Elder Maple",
      lines: after
        ? [
            "Forty years I lit one lamp a night and called it hope. You lit an island and called it homework.",
            "The end is just New Game+, child. There is always another cohort to carry the light to.",
          ]
        : ["When the island is safe, we will all read together here. Finish what you started, Lightbearer."],
    },
    {
      id: "kai_reading",
      x: 8,
      y: 3,
      emoji: "🧢",
      sprite: "kai_rival",
      name: "Kai",
      lines: after
        ? [
            "My sister came here yesterday. Sat in that chair. Read for an HOUR. Didn't check the clock once.",
            "Turns out the finish line was a reading room. Race you to the next shelf.",
          ]
        : ["I'm saving that chair by the fire. For someone who's been gone a long time."],
    },
    {
      id: "rin_reading",
      x: 3,
      y: 6,
      emoji: "⚔️",
      sprite: "student_c",
      name: "Rin the Duel Warden",
      lines: ["Even wardens read. ESPECIALLY wardens. The best duellists are the best readers — codes can wait."],
    },
    {
      id: "sage_reading",
      x: 9,
      y: 6,
      emoji: "🎓",
      sprite: "examiner_sage",
      name: "Examiner Sage",
      lines: [
        "THE END IS JUST NEW GAME+. I had that carved above the hearth. The Fog never understood it — endings are where readers begin.",
      ],
    },
  ];

  return {
    id: "reading",
    name: "The Reading Room",
    grid,
    width: W,
    height: H,
    start: { x: 6, y: 8 },
    portals: [{ x: 6, y: 9, toZone: "hub", toX: 18, toY: 14, label: "Haven Hollow" }],
    npcs,
    encounterRate: 0,
  };
}

export function buildRegion(subjects: WorldSubject[], st: RegionState): Region {
  const gymsLit = subjects.filter((s) => st.cleared.has(`${s.level}/${s.slug}`)).length;
  const unlock = st.unlockAll === true;
  const allGymsCleared = unlock || (subjects.length > 0 && gymsLit === subjects.length);
  const underOpen = unlock || gymsLit >= 1;
  const saltwindOpen = unlock || gymsLit >= 2;
  const blankHere = gymsLit >= 3 && !st.beaten.has("blank") && !st.story.has("championship");
  const frontActive = st.front && !st.examWeek ? st.front : null;

  const cellsOpen = unlock || gymsLit >= 2;
  const readingOpen = unlock || st.story.has("championship");

  const zones: Record<string, Zone> = {
    hub: buildHub(
      subjects,
      st.cleared,
      allGymsCleared,
      st.story,
      frontActive ? frontActive.place : null,
      saltwindOpen,
      blankHere,
      cellsOpen,
      readingOpen
    ),
    summit: buildSummit(st.story),
    cells: buildCells(subjects, st.story),
    lantern: buildLanternWalk(subjects, st.story, st.beaten),
    reading: buildReadingRoom(st.story),
  };
  for (const s of subjects) {
    const key = `${s.level}/${s.slug}`;
    zones[provId(s)] = buildProvince(s, {
      underOpen,
      front: frontActive && frontActive.key === key ? { key, species: frontActive.species } : null,
      bossHere:
        frontActive && frontActive.key === key && gymsLit >= 1 && !st.beaten.has("whisper")
          ? "whisper"
          : null,
      beaten: st.beaten,
    });
    zones[`under:${key}`] = buildUndercroft(s, st.underCleared.has(key));
  }
  if (saltwindOpen) zones["saltwind"] = buildSaltwind(subjects, st.beaten);
  if (unlock || st.story.has("championship")) {
    zones["campus"] = buildCampus(subjects, st.campusCleared, st.story);
  }
  // Enterable hub interiors — exit lands the player just south of the door.
  for (const it of HUB_INTERIORS) {
    zones[it.id] = buildInterior(it.id, it.name, it.style, "hub", it.doorX, it.doorY + 1);
  }
  return { zones, startZone: "hub" };
}
