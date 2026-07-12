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
export const ROOF = 10 as const;
export const ROOF_RIDGE = 11 as const;

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
  emoji: string; // fallback when sheets fail to load
  sprite: string; // walker block + portrait name on the original sheets
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
  // ridge cap, sloped roof, then a plastered wall row — reads as a real house
  for (let y = y0; y < y0 + h; y++) {
    for (let x = x0; x < x0 + w; x++) {
      const t = y === y0 ? ROOF_RIDGE : y < y0 + h - 1 ? ROOF : TILE.WALL;
      put(grid, x, y, t);
    }
  }
  if (doorX !== undefined) put(grid, doorX, y0 + h - 1, TILE.DOOR);
}

const provId = (s: WorldSubject) => `prov:${s.level}/${s.slug}`;

// ── Haven Hollow (hub) ─────────────────────────────────────────────────────
function buildHub(
  subjects: WorldSubject[],
  cleared: Set<string>,
  allGymsCleared: boolean,
  story: Set<string>
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
      lines:
        lit === 0
          ? ["The sky over Haven used to have lights, my grandma says. I've never seen one…"]
          : lit < total
          ? [`${lit} beacon${lit === 1 ? "" : "s"}! I saw ${lit === 1 ? "it" : "them"} come on from my window! Are you doing that?`]
          : ["ALL the beacons are lit! When I take my papers, I'm going to remember this sky."],
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
      sprite: "camp_keeper",
      name: "Camp Keeper",
      heal: true,
      lines: [
        "Long route ahead. Rest — there, hearts restored.",
        `They say this province has a guardian creature. It only shows itself to those who take the gym honestly.`,
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
        `The ${s.name} beacon has been dark for years — cosy, isn't it?`,
        "Prove you're worth the gym door, or go home and skip this topic like everyone else.",
      ],
      winLines: ["Ugh. Go on then. The beacon's your problem now."],
    },
    {
      id: `villager:${s.slug}`,
      x: 9,
      y: 18,
      emoji: "🧑‍🌾",
      sprite: "route_farmer",
      name: "Route Farmer",
      lines: [
        `Wild ones in the grass fight with real ${s.name} questions — the Fog dresses them up as monsters.`,
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
    gym: { x: 7, y: 4, ...s },
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
    hub: buildHub(subjects, cleared, allGymsCleared, story),
    summit: buildSummit(story),
  };
  for (const s of subjects) zones[provId(s)] = buildProvince(s);
  return { zones, startZone: "hub" };
}
