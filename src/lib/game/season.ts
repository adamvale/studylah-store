// ── StudyLah Legends: the season pack, as data ─────────────────────────────────
// Implements the commissioned season design pack (owner's drive,
// claude_code_handoff 1.1/design_docs): province lore + d100 encounter
// tables (08), quests (03/09), Fog Front + mini-bosses (04/10), balance
// numbers (05), and the systems copy deck (11). Client-safe, no imports.
// All content is original StudyLah IP from the commissioned pack.

// ── Province lore: family → place identity (codex: texture + landform) ────
export interface SpeciesRow {
  upTo: number; // d100 upper bound, rows in ascending order
  species: string;
}

export interface ProvinceLore {
  place: string;
  undercroft: string;
  landmark: string;
  route: SpeciesRow[];
  under: SpeciesRow[];
  keystone: string; // Undercroft keystone species (pinned stage 2)
}

const LORE: Record<string, ProvinceLore> = {
  chemistry: {
    place: "Marshlight Fen",
    undercroft: "The Stillwater Vault",
    landmark: "the reed jetty",
    route: [
      { upTo: 30, species: "concept" },
      { upTo: 55, species: "method" },
      { upTo: 75, species: "careless" },
      { upTo: 90, species: "unset" },
      { upTo: 100, species: "time" },
    ],
    under: [
      { upTo: 45, species: "method" },
      { upTo: 75, species: "concept" },
      { upTo: 100, species: "unset" },
    ],
    keystone: "method",
  },
  physics: {
    place: "Kitestone Highlands",
    undercroft: "The Anchor Galleries",
    landmark: "the wind shrine",
    route: [
      { upTo: 38, species: "concept" },
      { upTo: 63, species: "careless" },
      { upTo: 82, species: "method" },
      { upTo: 94, species: "unset" },
      { upTo: 100, species: "time" },
    ],
    under: [
      { upTo: 50, species: "concept" },
      { upTo: 80, species: "careless" },
      { upTo: 100, species: "method" },
    ],
    keystone: "concept",
  },
  biology: {
    place: "Deepgrove",
    undercroft: "The Root Cellar",
    landmark: "the seed arch",
    route: [
      { upTo: 32, species: "unset" },
      { upTo: 60, species: "careless" },
      { upTo: 82, species: "concept" },
      { upTo: 92, species: "method" },
      { upTo: 100, species: "time" },
    ],
    under: [
      { upTo: 45, species: "unset" },
      { upTo: 75, species: "concept" },
      { upTo: 100, species: "careless" },
    ],
    keystone: "unset",
  },
  emath: {
    place: "Terrace Vale",
    undercroft: "The Ledger Stair",
    landmark: "the abacus bridge",
    route: [
      { upTo: 35, species: "method" },
      { upTo: 62, species: "careless" },
      { upTo: 82, species: "time" },
      { upTo: 94, species: "concept" },
      { upTo: 100, species: "unset" },
    ],
    under: [
      { upTo: 50, species: "method" },
      { upTo: 78, species: "careless" },
      { upTo: 100, species: "time" },
    ],
    keystone: "method",
  },
  geography: {
    place: "Windmere Shores",
    undercroft: "The Chart Room",
    landmark: "the tide gauge",
    route: [
      { upTo: 30, species: "unset" },
      { upTo: 56, species: "time" },
      { upTo: 78, species: "careless" },
      { upTo: 92, species: "concept" },
      { upTo: 100, species: "method" },
    ],
    under: [
      { upTo: 40, species: "time" },
      { upTo: 75, species: "unset" },
      { upTo: 100, species: "careless" },
    ],
    keystone: "time",
  },
  history: {
    place: "Ashlight Ruins",
    undercroft: "The Cold Archive",
    landmark: "the archive steps",
    route: [
      { upTo: 34, species: "time" },
      { upTo: 62, species: "unset" },
      { upTo: 82, species: "concept" },
      { upTo: 94, species: "careless" },
      { upTo: 100, species: "method" },
    ],
    under: [
      { upTo: 42, species: "unset" },
      { upTo: 80, species: "time" },
      { upTo: 100, species: "concept" },
    ],
    keystone: "unset",
  },
};
LORE["amath"] = LORE.emath;
LORE["poa"] = LORE.emath;
LORE["social-studies"] = LORE.history;
LORE["fnn"] = LORE.biology;

export function loreFor(family?: string): ProvinceLore {
  return LORE[family ?? ""] ?? LORE.history;
}

// Saltwind Steps species skew (mixed-subject breather zone)
export const SALTWIND_TABLE: SpeciesRow[] = [
  { upTo: 30, species: "time" },
  { upTo: 60, species: "careless" },
  { upTo: 80, species: "unset" },
  { upTo: 90, species: "concept" },
  { upTo: 100, species: "method" },
];

// ISO week key for weekly content (Fog Front). Day is YYYY-MM-DD (SG time).
export function isoWeekOf(day: string): string {
  const dt = new Date(`${day}T00:00:00Z`);
  const dayNum = (dt.getUTCDay() + 6) % 7;
  dt.setUTCDate(dt.getUTCDate() - dayNum + 3);
  const firstThursday = new Date(Date.UTC(dt.getUTCFullYear(), 0, 4));
  const week =
    1 +
    Math.round(
      ((dt.getTime() - firstThursday.getTime()) / 86400000 - 3 + ((firstThursday.getUTCDay() + 6) % 7)) / 7
    );
  return `${dt.getUTCFullYear()}w${week}`;
}

export function rollSpecies(table: SpeciesRow[], roll: number): string {
  for (const row of table) if (roll <= row.upTo) return row.species;
  return table[table.length - 1].species;
}

// ── Balance (deliverable 5) ────────────────────────────────────────────────
export function stageForLevel(level: number): 1 | 2 | 3 {
  return level <= 6 ? 1 : level <= 13 ? 2 : 3;
}

export function hpForStage(stage: 1 | 2 | 3): number {
  return stage === 1 ? 3 : stage === 2 ? 4 : 5;
}

// steps-per-encounter → per-step probability (midpoint of the doc's band)
export const ENCOUNTER_RATE = {
  route: 1 / 10,
  undercroft: 1 / 7.5,
  saltwind: 1 / 12,
  campus: 1 / 6.5,
} as const;

// ── The Fog Order mini-bosses (deliverable 4/10) ───────────────────────────
export type BossModifier = "fog_option" | "soft_timer" | "jab_lock";

export interface MiniBoss {
  id: string;
  name: string;
  epithet: string;
  species: string; // sprite family (Order palette described in copy)
  stage: 2 | 3;
  hp: number;
  modifier: BossModifier;
  intro: string[];
  reveal: string;
  onCorrect: string[];
  onWrong: string[];
  onBreather: string;
  defeated: string[];
}

export const MINI_BOSSES: MiniBoss[] = [
  {
    id: "whisper",
    name: "The Whisper",
    epithet: "a hush that took shape",
    species: "concept",
    stage: 2,
    hp: 5,
    modifier: "fog_option",
    intro: [
      "The grass stops rustling — everything holds its breath.",
      "Oh, good. You. Don't worry — I'll make this easy for you. You need that, don't you?",
    ],
    reveal: "See? One less way to be wrong. You're welcome.",
    onCorrect: [
      "Because I helped. Say it.",
      "Two in a row. Imagine doing that alone. You can't, but imagine.",
    ],
    onWrong: ["There it is. That's the real you. Comfortable?"],
    onBreather: "…Why would you WANT to see all of it?",
    defeated: [
      "The hush unclenches. Birdsong returns mid-note.",
      "You'd have got those anyway…? That's — no one's ever said that back.",
    ],
  },
  {
    id: "hurry",
    name: "The Hurry",
    epithet: "a deadline wearing a coat",
    species: "time",
    stage: 2,
    hp: 6,
    modifier: "soft_timer",
    intro: [
      "It's already there when you arrive. It checks its wrist. There's no watch. It checks anyway.",
      "You're late. You're always late. Everyone is always late. GO.",
    ],
    reveal: "Sixty seconds! Generous. I'm told I'm generous.",
    onCorrect: [
      "You had TWELVE SECONDS LEFT. Do you know what I could do with twelve seconds? Nothing. It's for having.",
      "Tick.",
    ],
    onWrong: ["HA! …wait. You still answered. That's not how panic works."],
    onBreather: "You can't just — sit there. Living. On MY time.",
    defeated: [
      "It sits down for possibly the first time.",
      "…What time is it? No — don't tell me. I want to not know for a minute.",
    ],
  },
  {
    id: "blank",
    name: "The Blank",
    epithet: "the moment before you start",
    species: "unset",
    stage: 3,
    hp: 6,
    modifier: "jab_lock",
    intro: [
      "The path ahead is white. Not fog — unwritten.",
      "Don't. Whatever you're about to do — the first bit will be small and stupid. Better to do nothing beautifully.",
    ],
    reveal: "See? Small and stupid. That's all you're allowed to be.",
    onCorrect: [
      "That barely counted.",
      "A jab. A JAB. Where's your ambition?",
      "…oh no. You've got momentum. I HATE momentum.",
    ],
    onWrong: ["Good! Stop there. Stopping is the only thing I've ever finished."],
    onBreather: "Composure? In THIS economy?",
    defeated: [
      "The white path fills in behind it — grass, stones, ordinary things.",
      "I was going to say something devastating but I couldn't decide how to sta—",
    ],
  },
];

export function bossById(id: string): MiniBoss | undefined {
  return MINI_BOSSES.find((b) => b.id === id);
}

// Murk fights fair — no modifier. Somehow that's worse.
export const MURK_BARKS = {
  onCorrect: ["…Clean. The Elder teaches that stroke. She taught me."],
  onWrong: [
    "You will see that one again. That is not a threat. That is the only kind thing the world does reliably.",
  ],
  onBreather: "Yes. That. I never once did that. Write it down — the Commander said to breathe.",
};

// ── Quests (deliverables 3 + 9, adapted to shipped verbs) ─────────────────
export type QuestStepKind =
  | "reach" // reach a named zone/tile
  | "talk" // talk to a named npc id
  | "battle_wins" // win N wild battles (optionally of a species)
  | "clear_mistakes" // server-verified notebook clears
  | "return"; // come back to the giver

export interface QuestDef {
  id: string;
  name: string;
  giver: string; // npc id prefix
  star: boolean; // surfaces a real study action
  xp: number;
  offer: string[];
  progress: string; // quest-log line while active
  done: string[]; // giver's return lines
  target: number;
  kind: QuestStepKind;
  species?: string;
  serverCheck?: "resolved3" | "method2" | "oldest";
}

export const QUESTS: QuestDef[] = [
  {
    id: "unswept",
    name: "The Unswept Path",
    giver: "nurse",
    star: false,
    xp: 15,
    offer: [
      "You. Backpack. You've passed my camp four times at a dead run.",
      "New errand: walk the route. Walk. When you reach a Province camp, sit a moment. Then come back and tell me one thing you noticed.",
    ],
    progress: "Reach a Province camp keeper, then return to Nurse Fern.",
    done: [
      "Well? …Mm. It's always there. Rest isn't a reward, it's equipment. Take some.",
      "Bench is still there. So is the kettle.",
    ],
    target: 1,
    kind: "talk",
    species: "heal:",
  },
  {
    id: "signs",
    name: "Signs of Life",
    giver: "villager2",
    star: false,
    xp: 15,
    offer: [
      "Three signs. Repainted them myself, wrist's ruined, nobody's read one.",
      "Go read them. All three. Then tell me it was a waste of paint, I dare you.",
    ],
    progress: "Read 3 route signs (walk up to a sign and press A).",
    done: ["Well? Waste of paint? …Hmph. Signs used to mean something. Fine. Yours might."],
    target: 3,
    kind: "reach",
  },
  {
    id: "notebook3",
    name: "Three From the Notebook",
    giver: "elder",
    star: true,
    xp: 30,
    offer: [
      "Sit a moment. Your notebook — heavy lately?",
      "The Fog quotes you to yourself. That's all it ever does. Answer back. Three entries, any three.",
    ],
    progress: "Clear 3 mistakes from your notebook (Bestiary → re-tests, or the daily three).",
    done: [
      "Three questions. Then tea. You've had the questions — the tea's on.",
      "I'm leaving a lamp on your porch. Not for the dark outside, you understand.",
    ],
    target: 3,
    kind: "clear_mistakes",
    serverCheck: "resolved3",
  },
  {
    id: "shortcut",
    name: "The Rival's Shortcut",
    giver: "rival",
    star: false,
    xp: 15,
    offer: [
      "Gym's that way. I know the fast way. You'll take the long way and somehow that's supposed to be a lesson.",
      "Reach any gym door before I stop leaning on this signpost. My marker only moves when you do. House rules.",
    ],
    progress: "Reach a gym door.",
    done: [
      "…Okay. Long way's shorter when you don't climb fences. Noted. Officially noted.",
      "Here. Spare pin. It's not sentimental, I have several.",
    ],
    target: 1,
    kind: "reach",
  },
  {
    id: "tide",
    name: "The Fisher's Tide",
    giver: "fisher",
    star: true,
    xp: 15,
    offer: [
      "Tide's in. Brought something of yours back.",
      "Sea returns what you thought you'd finished with. Kinder than it sounds. Win one battle on these steps, then come back.",
    ],
    progress: "Win 1 battle at Saltwind Steps, then return to the Fisher.",
    done: ["There. Settled twice is settled proper. Shell for the shelf."],
    target: 1,
    kind: "battle_wins",
  },
  {
    id: "gruntwork",
    name: "Grunt Work",
    giver: "defector",
    star: false,
    xp: 15,
    offer: [
      "Don't mind me. Quit the Order. The pension was fog, turns out. All of it was fog.",
      "My old squadmates are up on the routes. Beat them gently, would you? It wakes them up a bit. Three should do.",
    ],
    progress: "Defeat 3 Fog Order grunts on Province routes.",
    done: [
      "Three teas going cold up there where three grunts used to loom. Best work anyone's done in this cave for a generation.",
      "Take the hood. Dye it something loud. That's an order — last one I'll ever give.",
    ],
    target: 3,
    kind: "battle_wins",
    species: "grunt",
  },
  {
    id: "blueprint",
    name: "The Golem's Blueprint",
    giver: "villager:",
    star: true,
    xp: 30,
    offer: [
      "See that fence? Fell over. Stacked the posts in the wrong order. Sound familiar?",
      "Golems are just steps stacked wrong. You've got a couple in that notebook — re-stack two, and I'll re-stack this.",
    ],
    progress: "Clear 2 Method Golem entries from your notebook.",
    done: ["Fence stands, golems don't. Same trade, ours. Steps in the right order."],
    target: 2,
    kind: "clear_mistakes",
    serverCheck: "method2",
  },
  {
    id: "oldest",
    name: "Murk's First Question",
    giver: "murkquest",
    star: true,
    xp: 30,
    offer: [
      "…There is a question you have been avoiding. I can smell it. I invented avoiding.",
      "The oldest one. The bottom of the notebook. It has been… patient with you.",
    ],
    progress: "Clear the OLDEST unresolved entry in your notebook.",
    done: [
      "…So. How old was it? Mine was four months old when I stopped opening the book at all.",
      "You are already braver than the Commander of the Fog Order. Do not let it go to your head.",
    ],
    target: 1,
    kind: "clear_mistakes",
    serverCheck: "oldest",
  },
  {
    id: "guardianround",
    name: "The Guardian's Round",
    giver: "camp",
    star: false,
    xp: 15,
    offer: [
      "The guardian walks the Province now. Did you know they patrol what you've secured?",
      "Walk out and stand with it a moment. It likes company and will never say so.",
    ],
    progress: "Reach the roaming guardian at any cleared gym.",
    done: ["It came back the long way past your porch. It doesn't do that for everyone. Take the charm."],
    target: 1,
    kind: "reach",
  },
  {
    id: "buddies",
    name: "Study Buddies",
    giver: "student_a",
    star: true,
    xp: 30,
    offer: [
      "I have a schedule for facing my dreaded one. The schedule has a schedule.",
      "Could you just — go beat three wild ones? So the three of us can watch it be survivable?",
    ],
    progress: "Win 3 wild battles, then report back to Ping.",
    done: [
      "That took you no time at all. My schedule allocated three weeks. I need to sit down and re-plan sitting down.",
      "Data collected. Doors noted. C brought snacks.",
    ],
    target: 3,
    kind: "battle_wins",
  },
];

export function questById(id: string): QuestDef | undefined {
  return QUESTS.find((q) => q.id === id);
}

// ── Fog Front (weekly boss, deliverable 4 part 1) ──────────────────────────
export const FRONT_NOTICE = [
  "FOG SIGHTED: {landmark}. It's sitting there like it pays rent.",
  "The {landmark} is fogged over again. Someone should ask it to leave. Politely. With questions.",
  "Lost: one {landmark}. Last seen under a large opinion of itself.",
];

export const FRONT_CLEARED = [
  "Look at that. It was under there the whole time.",
  "Smells like rain again, not like nothing.",
];

// ── Systems copy deck (deliverable 11) ─────────────────────────────────────
export const COPY = {
  capReached:
    "Your lamp is full today. Anything more you do now is just for you — the world still counts it, the lamp just can't hold more light till tomorrow.",
  wipe: "The fog carries you home. It's oddly gentle about it.",
  wipeLetterIntro: "That last question — here's how it walks, step by step.",
  wipeLetterOutro: "The one that got you is still out there. Tomorrow's first hunt, if you want it. — the notebook",
  shiny:
    "…it's gold-touched. Same creature, rarer light. Nothing about it is stronger — it's just yours to have seen.",
  shieldMorning: "Your shield's up — today is free.",
  examGreetings: [
    "The Hollow is quiet this week. Quiet is on your side.",
    "Lanterns are lit. Nothing here needs you today — it's just glad you came.",
    "You've done the walking. This week the path remembers it for you.",
  ],
  examShield: "Shield's up all week. Days off cost nothing here.",
  serverDown: "The archive's dozing. Your progress is safe; try the door again in a bit.",
  questionFail: "That page blew away. Another's coming — no hearts were harmed.",
  longSession: "My feet are tired. Split the rest with tomorrow-you?",
  echoSpawn: "A memory stirs in the fog…",
} as const;
