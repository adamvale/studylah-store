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

const EXTRA_WALKABLE = new Set<number>([PORTAL, STAIRS, CAVE_FLOOR, FOGBANK, SAND, RUINS, BRIDGE]);

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

const provId = (s: WorldSubject) => `prov:${s.level}/${s.slug}`;

// ── Haven Hollow (hub) ─────────────────────────────────────────────────────
function buildHub(
  subjects: WorldSubject[],
  cleared: Set<string>,
  allGymsCleared: boolean,
  story: Set<string>,
  frontPlace: string | null,
  saltwindOpen: boolean,
  blankHere: boolean
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
    portals: [{ x: W - 2, y: 4, toZone: "hub", toX: 18, toY: 8, label: "Haven Hollow" }],
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
}

export function buildRegion(subjects: WorldSubject[], st: RegionState): Region {
  const gymsLit = subjects.filter((s) => st.cleared.has(`${s.level}/${s.slug}`)).length;
  const allGymsCleared = subjects.length > 0 && gymsLit === subjects.length;
  const underOpen = gymsLit >= 1;
  const saltwindOpen = gymsLit >= 2;
  const blankHere = gymsLit >= 3 && !st.beaten.has("blank") && !st.story.has("championship");
  const frontActive = st.front && !st.examWeek ? st.front : null;

  const zones: Record<string, Zone> = {
    hub: buildHub(
      subjects,
      st.cleared,
      allGymsCleared,
      st.story,
      frontActive ? frontActive.place : null,
      saltwindOpen,
      blankHere
    ),
    summit: buildSummit(st.story),
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
  if (st.story.has("championship")) {
    zones["campus"] = buildCampus(subjects, st.campusCleared, st.story);
  }
  return { zones, startZone: "hub" };
}
