// One-shot asset pipeline: curates the owner's RPG Maker MZ library (owned
// copy of MZ; the EULA permits using its bundled assets outside the engine)
// from the external volume into public/game/mz + public/game/audio +
// public/game/fx, and writes src/lib/game/mz-manifest.json so the engine
// loads assets by name. Idempotent: re-run after adding names below.
//
//   node scripts/sync-game-assets.mjs           # copy images + effects
//   node scripts/sync-game-assets.mjs --audio   # also (re)convert audio (slow)
//
// The volume must be mounted. Audio converts ogg -> m4a (AAC) because iOS
// WKWebView and Safari cannot decode Ogg Vorbis; m4a plays everywhere.

import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync, statSync } from "node:fs";
import { join, basename } from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";

const SRC = "/Volumes/FortisLearn/@2026 StudyLah AI/Claude Website Code/Game Assets (Update)";
const ROOT = new URL("..", import.meta.url).pathname;
const DEST = join(ROOT, "public/game/mz");
const AUDIO_DEST = join(ROOT, "public/game/audio");
const FX_DEST = join(ROOT, "public/game/fx");

if (!existsSync(SRC)) {
  console.error(`Asset volume not mounted: ${SRC}`);
  process.exit(1);
}

// ── curated selections ──────────────────────────────────────────────────────
const TILESETS = [
  "Outside_A1", "Outside_A2", "Outside_A3", "Outside_A4", "Outside_A5", "Outside_B", "Outside_C",
  "Inside_A1", "Inside_A2", "Inside_A4", "Inside_A5", "Inside_B", "Inside_C",
  "Dungeon_A1", "Dungeon_A2", "Dungeon_A4", "Dungeon_A5", "Dungeon_B", "Dungeon_C",
  "World_A1", "World_A2", "World_B", "World_C",
  "SF_Inside_A4", "SF_Inside_B", "SF_Inside_C",
  "SF_Outside_A3", "SF_Outside_A4", "SF_Outside_A5", "SF_Outside_B", "SF_Outside_C",
];
const ALL_OF = { characters: true, faces: true, enemies: true, sv_actors: true };
const BATTLEBACKS1 = [
  "Grassland", "Cobblestones1", "Cobblestones3", "DirtCave", "RockCave", "Stone1", "Stone2",
  "Stone3", "Temple", "Snowfield", "Lava1", "Desert", "Sand", "Ship", "Fort1", "Road1",
  "Wood1", "DecorativeTile1", "Crystal", "IceCave", "PoisonSwamp", "GrassMaze", "Wasteland",
  "DirtField", "Clouds",
];
const BATTLEBACKS2 = [
  "Grassland", "Town1", "Town2", "Town3", "DirtCave", "RockCave", "Stone1", "Stone2", "Stone3",
  "Temple", "Snowfield", "Lava", "Desert", "Ship", "Port", "Fort1", "Forest", "Bridge", "Cliff",
  "Crystal", "IceCave", "PoisonSwamp", "GrassMaze", "Wasteland", "Ruins1", "Ruins2", "Ruins3",
  "Room1", "Room2", "Room3", "Brick", "Tower", "Clouds",
];
const SYSTEM = ["IconSet", "Balloon", "Shadow1", "Shadow2", "States", "Window"];

// Effekseer effects mapped to game moments (Phase 2). Names are the MZ set.
const EFFECTS = [
  "HitPhysical", "HitSpecial1", "HitEffect", "SlashPhysical", "SlashSpecial1",
  "FireOne1", "IceOne1", "ThunderOne1", "WaterOne1", "WindOne1", "EarthOne1",
  "LightOne1", "LightAll1", "LightPillar1", "DarknessOne1",
  "HealOne1", "CureOne1", "Powerup1", "Revive1", "Flash", "Fog",
  "GeneralSpecial1", "NeutralAll2", "Song",
];

// Audio: bgm loops, me jingles, se one-shots. Converted ogg -> m4a.
const BGM = [
  "Town1", "Town2", "Field1", "Field2", "Battle1", "Battle2", "Battle4", "Battle7",
  "Dungeon2", "Dungeon4", "Ship1", "Scene5", "Theme6",
];
const ME = ["Victory1", "Fanfare1", "Fanfare3", "Item", "Mystery", "Gameover1"];
const SE = [
  "Cursor1", "Decision1", "Decision2", "Cancel1", "Buzzer1",
  "Attack1", "Attack2", "Blow1", "Blow3", "Damage4", "Slash1", "Sword2",
  "Fire1", "Ice1", "Thunder1", "Water1", "Wind1", "Earth1", "Saint2", "Starlight",
  "Recovery", "Heal1", "Absorb1", "Powerup", "Up4", "Raise1",
  "Bell1", "Bell3", "Book1", "Chest1", "Chime1", "Chime2", "Coin", "Collapse1",
  "Darkness1", "Door1", "Equip1", "Evasion1", "Flash1", "Parry", "Run", "Move1",
  "Monster1", "Monster2", "Twine", "Teleport", "Shop1", "Save1",
];

const copied = { images: 0, effects: 0, textures: 0, audio: 0, skipped: [] };

function cp(from, to) {
  if (!existsSync(from)) {
    copied.skipped.push(basename(from));
    return false;
  }
  mkdirSync(join(to, ".."), { recursive: true });
  cpSync(from, to);
  return true;
}

function copyList(folder, names) {
  const out = [];
  for (const n of names) {
    if (cp(join(SRC, "img", folder, `${n}.png`), join(DEST, folder, `${n}.png`))) {
      copied.images++;
      out.push(n);
    }
  }
  return out;
}

function copyAll(folder) {
  const files = readdirSync(join(SRC, "img", folder)).filter(
    (f) => f.endsWith(".png") && !f.startsWith("._")
  );
  const out = [];
  for (const f of files) {
    if (cp(join(SRC, "img", folder, f), join(DEST, folder, f))) {
      copied.images++;
      out.push(f.replace(/\.png$/, ""));
    }
  }
  return out.sort();
}

// Effekseer .efkefc files reference textures/models by relative path, stored
// inside the binary as UTF-16LE strings. Scan both byte alignments and ship
// only what the chosen effects actually use.
function scanResources(buf) {
  const out = new Set();
  const s = buf.toString("utf16le");
  for (const m of s.matchAll(/(Texture\/[\x20-\x7e]+?\.png)/g)) out.add(m[1]);
  for (const m of s.matchAll(/(Model\/[\x20-\x7e]+?\.efkmodel)/g)) out.add(m[1]);
  // some files store forward paths without folder prefix; also check odd offset
  const s2 = buf.subarray(1).toString("utf16le");
  for (const m of s2.matchAll(/(Texture\/[\x20-\x7e]+?\.png)/g)) out.add(m[1]);
  for (const m of s2.matchAll(/(Model\/[\x20-\x7e]+?\.efkmodel)/g)) out.add(m[1]);
  return [...out];
}

function copyEffects() {
  const kept = [];
  const resources = new Set();
  for (const name of EFFECTS) {
    const from = join(SRC, "effects", `${name}.efkefc`);
    if (!existsSync(from)) {
      copied.skipped.push(`${name}.efkefc`);
      continue;
    }
    const buf = readFileSync(from);
    for (const r of scanResources(buf)) resources.add(r);
    cp(from, join(FX_DEST, "effects", `${name}.efkefc`));
    copied.effects++;
    kept.push(name);
  }
  for (const rel of resources) {
    if (cp(join(SRC, "effects", rel), join(FX_DEST, "effects", rel))) copied.textures++;
  }
  // the runtime
  cp(join(SRC, "js/libs/effekseer.min.js"), join(FX_DEST, "effekseer.min.js"));
  cp(join(SRC, "js/libs/effekseer.wasm"), join(FX_DEST, "effekseer.wasm"));
  return kept;
}

function convertAudio() {
  const require2 = createRequire(import.meta.url);
  const ffmpeg = require2("ffmpeg-static");
  const jobs = [
    ["bgm", BGM, ["-b:a", "96k"]],
    ["me", ME, ["-b:a", "96k"]],
    ["se", SE, ["-b:a", "80k"]],
  ];
  const out = { bgm: [], me: [], se: [] };
  for (const [folder, names, extra] of jobs) {
    for (const n of names) {
      const from = join(SRC, "audio", folder, `${n}.ogg`);
      const to = join(AUDIO_DEST, folder, `${n}.m4a`);
      if (!existsSync(from)) {
        copied.skipped.push(`${folder}/${n}.ogg`);
        continue;
      }
      mkdirSync(join(AUDIO_DEST, folder), { recursive: true });
      if (!existsSync(to) || statSync(to).mtimeMs < statSync(from).mtimeMs) {
        execFileSync(ffmpeg, ["-y", "-i", from, "-c:a", "aac", ...extra, to], { stdio: "pipe" });
        copied.audio++;
      }
      out[folder].push(n);
    }
  }
  return out;
}

// ── run ─────────────────────────────────────────────────────────────────────
const manifest = {
  tile: 48,
  tilesets: copyList("tilesets", TILESETS),
  characters: copyAll("characters"),
  faces: copyAll("faces"),
  enemies: copyAll("enemies"),
  svActors: copyAll("sv_actors"),
  battlebacks1: copyList("battlebacks1", BATTLEBACKS1),
  battlebacks2: copyList("battlebacks2", BATTLEBACKS2),
  system: copyList("system", SYSTEM),
  effects: copyEffects(),
  audio: { bgm: BGM, me: ME, se: SE },
};

if (process.argv.includes("--audio")) {
  manifest.audio = convertAudio();
} else {
  console.log("(audio skipped, pass --audio to convert)");
}

writeFileSync(
  join(ROOT, "src/lib/game/mz-manifest.json"),
  JSON.stringify(manifest, null, 2) + "\n"
);

console.log(
  `images: ${copied.images}, effects: ${copied.effects} (+${copied.textures} textures), audio: ${copied.audio}`
);
if (copied.skipped.length) console.log("skipped (missing):", copied.skipped.join(", "));
