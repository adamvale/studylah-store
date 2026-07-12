"use client";

// ── Fog Frontier sprite sheets ─────────────────────────────────────────────
// Loader + lookups for the commissioned ORIGINAL asset pack (StudyLah IP)
// in /public/game. Manifests are inlined from the pack's JSON files so a
// tile can be addressed by name. Everything renders nearest-neighbour.

export const TS = 16;

const TERRAIN_NAMES = [
  "grass1", "grass2", "tallgrass_f1", "tallgrass_f2", "flowers_f1", "flowers_f2",
  "path", "path_edge_n", "path_edge_s", "path_edge_w", "path_edge_e",
  "path_corner_nw", "path_corner_ne", "path_corner_sw", "path_corner_se",
  "water_f1", "water_f2", "deep_water", "shore_n", "shore_s", "shore_w", "shore_e",
  "shore_nw", "shore_ne", "shore_sw", "shore_se", "bridge_h", "bridge_v",
  "tree", "pine", "fog_tree", "rock", "cliff_n", "cliff_s", "cliff_w", "cliff_e",
  "cliff_nw", "cliff_ne", "cliff_sw", "cliff_se", "cave_floor", "cave_wall",
  "sand", "marsh", "snow", "ruins_brick", "volcanic", "fence_h", "fence_v",
  "sign", "portal_f1", "portal_f2", "stairs", "ledge",
] as const;
const TERRAIN_COLS = 12;

const BUILDING_NAMES = [
  "terracotta_ridge", "terracotta_slope", "terracotta_eave", "terracotta_corner_w", "terracotta_corner_e",
  "slate_ridge", "slate_slope", "slate_eave", "slate_corner_w", "slate_corner_e",
  "thatch_ridge", "thatch_slope", "thatch_eave", "thatch_corner_w", "thatch_corner_e",
  "wall_plaster", "wall_timber", "wall_brick", "window_lit", "window_dark",
  "door_closed", "door_open_f1", "door_open_f2", "gym_facade",
  "prop_telescope", "prop_bookshelf", "prop_desk", "fountain_f1", "fountain_f2",
  "lamppost_lit", "lamppost_unlit", "market_stall", "tent", "campfire_f1", "campfire_f2",
] as const;
const BUILDING_COLS = 12;

const UI_NAMES = [
  "combo_flame", "dpad", "btn_a", "btn_b", "cursor", "arrow_n", "arrow_s", "arrow_w", "arrow_e",
  "map_town", "map_gym", "map_portal", "map_boss",
  "emblem_flask", "emblem_atom", "emblem_leaf", "emblem_compass", "emblem_scroll",
  "emblem_abacus", "emblem_gear", "emblem_globe",
  "champion_crest", "dex_unseen", "dex_seen", "dex_captured",
  "potion_0", "potion_1", "potion_2", "potion_3", "potion_4", "potion_5",
  "charm_0", "charm_1", "charm_2", "charm_3", "charm_4", "charm_5",
  "scroll_0", "scroll_1", "scroll_2", "scroll_3", "scroll_4", "scroll_5",
  "badge_0", "badge_1", "badge_2", "badge_3", "badge_4", "badge_5",
] as const;
// UI sheet: row y=0 is the 9-slice frames + buttons + hearts + xp bar; the
// named 16px cells start at y=48 (see pack README).
const UI_ROW0_Y = 48;
const UI_COLS = 16;

const FX_NAMES = [
  "hit1", "hit2", "hit3", "miss_puff", "heal", "capture1", "capture2", "capture3", "capture4",
  "levelup", "shield", "fog1", "fog2", "confetti", "dust", "rustle", "splash",
  "em_exclaim", "em_question", "em_heart", "em_zzz", "em_sweat",
] as const;
const FX_COLS = 12;

export const NPC_ORDER = [
  "elder_maple", "nurse_fern", "kai_rival", "mina", "old_tan", "camp_keeper",
  "route_farmer", "student_a", "student_b", "student_c", "fog_grunt",
  "commander_murk", "examiner_sage",
] as const;
export type NpcSprite = (typeof NPC_ORDER)[number];

export const PORTRAIT_ORDER = [
  "player_ghost", "elder_maple", "nurse_fern", "kai_rival", "mina", "old_tan",
  "camp_keeper", "route_farmer", "student_a", "student_b", "student_c",
  "fog_grunt", "commander_murk", "examiner_sage",
] as const;
export type PortraitName = (typeof PORTRAIT_ORDER)[number];

// monsters.png: one 64px block per species; battle 32×32 at (block,0),
// shiny at (block+32,0), walkers at y=48.
export const MONSTER_ORDER = ["careless", "concept", "method", "time", "unset"] as const;

// guardians.png: seven 32×32 battle sprites.
export const GUARDIAN_ORDER = [
  "marsh_newt", "highland_ram", "grove_sproutling", "terrace_counter",
  "coast_drifter", "ruins_watcher", "clarity",
] as const;
export type GuardianName = (typeof GUARDIAN_ORDER)[number];

// player_ghost.png: 48px block per scarf variant.
export const GHOST_VARIANTS = ["none", "ember", "tide", "grove", "gold"] as const;

const DIR_ROW: Record<string, number> = { down: 0, left: 1, right: 2, up: 3 };
export const WALKER_W = 16;
export const WALKER_H = 24;

export interface Sheets {
  terrain: HTMLImageElement;
  buildings: HTMLImageElement;
  player: HTMLImageElement;
  npcs: HTMLImageElement;
  monsters: HTMLImageElement;
  evolutions: HTMLImageElement;
  guardians: HTMLImageElement;
  fx: HTMLImageElement;
  ui: HTMLImageElement;
  portraits: HTMLImageElement;
}

let loaded: Sheets | null = null;
let loading: Promise<Sheets | null> | null = null;

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// Resolves null if anything fails — callers fall back to procedural art.
export function loadSheets(): Promise<Sheets | null> {
  if (loaded) return Promise.resolve(loaded);
  if (loading) return loading;
  loading = Promise.all([
    loadImage("/game/terrain.png"),
    loadImage("/game/buildings.png"),
    loadImage("/game/player_ghost.png"),
    loadImage("/game/npcs.png"),
    loadImage("/game/monsters.png"),
    loadImage("/game/monsters_evolutions.png"),
    loadImage("/game/guardians.png"),
    loadImage("/game/fx.png"),
    loadImage("/game/ui.png"),
    loadImage("/game/portraits.png"),
  ])
    .then(([terrain, buildings, player, npcs, monsters, evolutions, guardians, fx, ui, portraits]) => {
      loaded = { terrain, buildings, player, npcs, monsters, evolutions, guardians, fx, ui, portraits };
      return loaded;
    })
    .catch(() => null);
  return loading;
}

function idx(names: readonly string[], name: string): number {
  const i = names.indexOf(name);
  return i < 0 ? 0 : i;
}

export function terrainXY(name: string): [number, number] {
  const i = idx(TERRAIN_NAMES, name);
  return [(i % TERRAIN_COLS) * TS, Math.floor(i / TERRAIN_COLS) * TS];
}

export function buildingXY(name: string): [number, number] {
  const i = idx(BUILDING_NAMES, name);
  return [(i % BUILDING_COLS) * TS, Math.floor(i / BUILDING_COLS) * TS];
}

export function uiXY(name: string): [number, number] {
  const i = idx(UI_NAMES, name);
  return [(i % UI_COLS) * TS, UI_ROW0_Y + Math.floor(i / UI_COLS) * TS];
}

export function fxXY(name: string): [number, number] {
  const i = idx(FX_NAMES, name);
  return [(i % FX_COLS) * TS, Math.floor(i / FX_COLS) * TS];
}

// hearts live on the ui sheet's top strip at x=160 (full, half, empty)
export function heartXY(kind: "full" | "half" | "empty"): [number, number] {
  const off = kind === "full" ? 0 : kind === "half" ? 16 : 32;
  return [160 + off, 0];
}

export function monsterBlockX(species: string): number {
  const i = MONSTER_ORDER.indexOf(species as (typeof MONSTER_ORDER)[number]);
  return (i < 0 ? 0 : i) * 64;
}

export function guardianX(name: GuardianName): number {
  return GUARDIAN_ORDER.indexOf(name) * 32;
}

export function portraitXY(name: PortraitName, emotive = false): [number, number] {
  return [PORTRAIT_ORDER.indexOf(name) * 48, emotive ? 48 : 0];
}

export function ghostBlockX(variant: string): number {
  const i = GHOST_VARIANTS.indexOf(variant as (typeof GHOST_VARIANTS)[number]);
  return (i < 0 ? 0 : i) * 48;
}

export function npcBlockX(sprite: NpcSprite): number {
  return NPC_ORDER.indexOf(sprite) * 48;
}

// Draw one 16×24 walker cell (feet on the tile, head overlapping above).
export function drawWalker(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  blockX: number,
  dir: string,
  frame: number, // 0..2 (1 = idle)
  dx: number,
  dy: number
) {
  ctx.drawImage(
    img,
    blockX + frame * WALKER_W,
    DIR_ROW[dir] * WALKER_H,
    WALKER_W,
    WALKER_H,
    dx,
    dy - 8,
    WALKER_W,
    WALKER_H
  );
}

// CSS background props for showing a sheet region in the DOM, integer-scaled.
export function spriteCss(
  sheet: string,
  sx: number,
  sy: number,
  w: number,
  h: number,
  scale: number
): React.CSSProperties {
  return {
    width: w * scale,
    height: h * scale,
    backgroundImage: `url(/game/${sheet}.png)`,
    backgroundPosition: `${-sx * scale}px ${-sy * scale}px`,
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    imageRendering: "pixelated",
    // background-size must scale the WHOLE sheet
  };
}

// Convenience: full inline style with the sheet scaled coherently.
export function sheetSprite(
  sheet: "terrain" | "buildings" | "ui" | "fx" | "monsters" | "monsters_evolutions" | "guardians" | "portraits" | "player_ghost" | "npcs",
  sx: number,
  sy: number,
  w: number,
  h: number,
  scale: number,
  sheetW: number,
  sheetH: number
): React.CSSProperties {
  return {
    width: w * scale,
    height: h * scale,
    backgroundImage: `url(/game/${sheet}.png)`,
    backgroundPosition: `${-sx * scale}px ${-sy * scale}px`,
    backgroundSize: `${sheetW * scale}px ${sheetH * scale}px`,
    backgroundRepeat: "no-repeat",
    imageRendering: "pixelated",
  };
}

export const SHEET_DIMS: Record<string, [number, number]> = {
  terrain: [192, 80],
  buildings: [192, 48],
  player_ghost: [240, 96],
  npcs: [624, 96],
  monsters: [320, 64],
  monsters_evolutions: [320, 32],
  guardians: [224, 32],
  fx: [192, 80],
  ui: [256, 128],
  portraits: [672, 96],
};
