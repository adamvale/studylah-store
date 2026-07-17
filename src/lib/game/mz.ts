"use client";

// ── RPG Maker MZ renderer for StudyLah Legends ─────────────────────────────
// The owner holds an RPG Maker MZ licence; the MZ EULA permits using its
// bundled assets outside the engine. Assets are curated into /public/game/mz
// by scripts/sync-game-assets.mjs. This module knows how to:
//   1. load the MZ sheets (tilesets, characters, faces)
//   2. compose A1/A2/A3/A4 AUTOTILES (the 48px quarter-tile algorithm that
//      makes water shore, paths edge and walls join like a real RPG)
//   3. pre-render whole zones to offscreen canvases (3 water frames)
//   4. draw MZ character walkers (48px, 3-frame walk, 4 directions)
// The logical world (world2.ts tile ids) is unchanged; this is a pure
// renderer swap. Fallback: callers keep procedural art until sheets load.

import {
  TILE, PORTAL, ROOF, ROOF_RIDGE, STAIRS, CAVE_FLOOR, CAVE_WALL, FOGBANK,
  ROCK, SAND, RUINS, FENCE, BRIDGE, INT_FLOOR, INT_WALL, BOOKSHELF, DESK,
  TELESCOPE, HEARTH, STALL, RUG, MAT, LANTERN, type Zone,
} from "@/lib/game/world2";

export const MZ = 48; // the MZ tile size
const H = 24; // half tile (quarter size)

// ── image cache ─────────────────────────────────────────────────────────────
const images = new Map<string, HTMLImageElement>();
let failed = false;

function img(path: string): HTMLImageElement {
  let el = images.get(path);
  if (!el) {
    el = new Image();
    el.onerror = () => {
      failed = true;
    };
    el.src = path;
    images.set(path, el);
  }
  return el;
}

const tileset = (name: string) => img(`/game/mz/tilesets/${name}.png`);
export const mzCharSheet = (name: string) => img(`/game/mz/characters/${name}.png`);

// Preload every sheet the themes reference and resolve once ready (null if
// anything is missing so callers keep the fallback art).
const CORE_SHEETS = [
  "Outside_A1", "Outside_A2", "Outside_A3", "Outside_A4", "Outside_A5", "Outside_B", "Outside_C",
  "Inside_A2", "Inside_A4", "Inside_B", "Inside_C",
  "Dungeon_A1", "Dungeon_A2", "Dungeon_A4", "Dungeon_A5", "Dungeon_B", "Dungeon_C",
  "SF_Inside_B", "SF_Inside_C", "SF_Outside_A3", "SF_Outside_A4", "SF_Outside_B", "SF_Outside_C",
];
const CORE_CHARS = [
  "SF_Actor1", "SF_Actor2", "SF_Actor3", "People1", "People2", "Evil", "Monster",
  "SF_Monster", "Nature", "!Door1", "!SF_Door1", "!Crystal", "!Flame", "!Other1", "!Other2",
];

let ready: Promise<boolean> | null = null;
export function loadMz(): Promise<boolean> {
  if (ready) return ready;
  ready = new Promise((resolve) => {
    const all = [
      ...CORE_SHEETS.map((n) => tileset(n)),
      ...CORE_CHARS.map((n) => mzCharSheet(n)),
    ];
    let left = all.length;
    const done = () => {
      left -= 1;
      if (left <= 0) resolve(!failed);
    };
    for (const el of all) {
      if (el.complete && el.naturalWidth > 0) done();
      else {
        el.addEventListener("load", done, { once: true });
        el.addEventListener("error", done, { once: true });
      }
    }
  });
  return ready;
}

// ── autotile compositor ─────────────────────────────────────────────────────
// Floor autotiles (A1 water, A2 ground, A4 wall TOPS) live in 2x3-tile blocks;
// each drawn tile is four 24px quarters picked by neighbour connectivity.
// Wall-type autotiles (A3 buildings/roofs, A4 wall FACES) are 2x2 blocks with
// the same idea minus diagonals. This is the standard MZ algorithm.

// quarter parameters: [edgeX, cenX, icX] in half-tiles, per corner column,
// and [edgeY, cenY, icY] per corner row (floor blocks are 4x6 quarters).
const QX = [
  { edge: 0, cen: 2, ic: 2 }, // left quarters
  { edge: 3, cen: 1, ic: 3 }, // right quarters
];
const QY = [
  { edge: 2, cen: 4, ic: 0 }, // top quarters
  { edge: 5, cen: 3, ic: 1 }, // bottom quarters
];

function floorQuarter(
  ctx: CanvasRenderingContext2D,
  sheet: HTMLImageElement,
  bx: number, // block origin in PIXELS
  by: number,
  dx: number,
  dy: number,
  right: 0 | 1,
  bottom: 0 | 1,
  h: boolean, // horizontal neighbour same
  v: boolean, // vertical neighbour same
  d: boolean // diagonal neighbour same
) {
  const cx = QX[right];
  const cy = QY[bottom];
  let qx: number;
  let qy: number;
  if (!h && !v) {
    qx = cx.edge;
    qy = cy.edge;
  } else if (h && !v) {
    qx = cx.cen;
    qy = cy.edge;
  } else if (!h && v) {
    qx = cx.edge;
    qy = cy.cen;
  } else if (!d) {
    qx = cx.ic;
    qy = cy.ic;
  } else {
    qx = cx.cen;
    qy = cy.cen;
  }
  ctx.drawImage(sheet, bx + qx * H, by + qy * H, H, H, dx + right * H, dy + bottom * H, H, H);
}

export interface N8 {
  l: boolean; r: boolean; u: boolean; d: boolean;
  ul: boolean; ur: boolean; dl: boolean; dr: boolean;
}

export function drawFloorAuto(
  ctx: CanvasRenderingContext2D,
  sheet: HTMLImageElement,
  blockTx: number, // block origin in TILES
  blockTy: number,
  dx: number,
  dy: number,
  n: N8
) {
  const bx = blockTx * MZ;
  const by = blockTy * MZ;
  floorQuarter(ctx, sheet, bx, by, dx, dy, 0, 0, n.l, n.u, n.ul);
  floorQuarter(ctx, sheet, bx, by, dx, dy, 1, 0, n.r, n.u, n.ur);
  floorQuarter(ctx, sheet, bx, by, dx, dy, 0, 1, n.l, n.d, n.dl);
  floorQuarter(ctx, sheet, bx, by, dx, dy, 1, 1, n.r, n.d, n.dr);
}

export function drawWallAuto(
  ctx: CanvasRenderingContext2D,
  sheet: HTMLImageElement,
  blockTx: number,
  blockTy: number,
  dx: number,
  dy: number,
  n: N8
) {
  const bx = blockTx * MZ;
  const by = blockTy * MZ;
  // wall blocks are 4x4 quarters; x: edge 0/3, centre 2/1; y likewise
  const put = (right: 0 | 1, bottom: 0 | 1, h: boolean, v: boolean) => {
    const qx = h ? (right ? 1 : 2) : right ? 3 : 0;
    const qy = v ? (bottom ? 1 : 2) : bottom ? 3 : 0;
    ctx.drawImage(sheet, bx + qx * H, by + qy * H, H, H, dx + right * H, dy + bottom * H, H, H);
  };
  put(0, 0, n.l, n.u);
  put(1, 0, n.r, n.u);
  put(0, 1, n.l, n.d);
  put(1, 1, n.r, n.d);
}

// ── theme spec ──────────────────────────────────────────────────────────────
type Ground =
  | { auto: "a2"; sheet: string; kind: number }
  | { auto: "a1"; sheet: string; kind: 0 | 1 } // animated water, 3 frames
  | { a5: [string, number, number] } // plain tile: sheet, col, row
  | null;

interface WallSpec {
  type: "walltop" | "wallface" | "a3";
  sheet: string;
  kind: number;
}

interface ObjSpec {
  sheet: string; // a B/C-style object sheet
  col: number;
  row: number;
  w?: number; // in tiles (default 1)
  h?: number; // in tiles (default 1), anchored at the BASE tile
}

export interface MzTheme {
  ground: (tile: number) => Ground; // base layer (autotiles connect by equality)
  wall?: (tile: number) => WallSpec | null;
  objects?: (tile: number) => ObjSpec[] | null;
}

const B = (sheet: string, col: number, row: number, w = 1, h = 1): ObjSpec => ({ sheet, col, row, w, h });

// grounds shared between themes
const g = {
  meadow: { auto: "a2", sheet: "Outside_A2", kind: 0 } as Ground,
  dirt: { auto: "a2", sheet: "Outside_A2", kind: 8 } as Ground,
  sand: { auto: "a2", sheet: "Outside_A2", kind: 16 } as Ground,
  road: { auto: "a2", sheet: "Outside_A2", kind: 2 } as Ground,
  dirtRoad: { auto: "a2", sheet: "Outside_A2", kind: 10 } as Ground,
  sandRoad: { auto: "a2", sheet: "Outside_A2", kind: 18 } as Ground,
  bush: { auto: "a2", sheet: "Outside_A2", kind: 4 } as Ground,
  bushSand: { auto: "a2", sheet: "Outside_A2", kind: 20 } as Ground,
  sea: { auto: "a1", sheet: "Outside_A1", kind: 0 } as Ground,
  pond: { auto: "a1", sheet: "Outside_A1", kind: 1 } as Ground,
  caveDirt: { auto: "a2", sheet: "Dungeon_A2", kind: 0 } as Ground,
  caveRock: { auto: "a2", sheet: "Dungeon_A2", kind: 8 } as Ground,
  woodFloor: { auto: "a2", sheet: "Inside_A2", kind: 0 } as Ground,
  rugRed: { auto: "a2", sheet: "Inside_A2", kind: 10 } as Ground,
  rugGreen: { auto: "a2", sheet: "Inside_A2", kind: 11 } as Ground,
  ruinsCobble: { a5: ["Outside_A5", 4, 3] } as Ground, // Cobblestones A (Ruins)
  cobble: { a5: ["Outside_A5", 0, 3] } as Ground, // Cobblestones A
};

// Outside_B object picks (verified against the sheet image)
const OB = {
  sign: B("Outside_B", 9, 1),
  well: B("Outside_B", 11, 1),
  tuft: B("Outside_B", 8, 3),
  stump: B("Outside_B", 12, 3),
  tree: B("Outside_B", 13, 4),
  hedge: B("Outside_B", 14, 3),
  boulder: B("Outside_B", 15, 3),
  flowerA: B("Outside_B", 8, 4),
  flowerB: B("Outside_B", 10, 4),
  bigTree: B("Outside_B", 8, 6, 2, 2),
  deadTree: B("Outside_B", 8, 12, 1, 2),
  mushroom: B("Outside_B", 11, 12),
  palm: B("Outside_B", 12, 12, 2, 2),
  cactus: B("Outside_B", 14, 12, 1, 2),
  snowPine: B("Outside_B", 8, 8, 1, 2),
};
const OC = {
  tablet: B("Outside_C", 0, 0, 1, 2), // engraved monument
  grave: B("Outside_C", 0, 4, 1, 2),
  pillar: B("Outside_C", 1, 0, 1, 2),
  mossPillar: B("Outside_C", 3, 0, 1, 2),
  brokenPillar: B("Outside_C", 6, 2),
  statue: B("Outside_C", 0, 8, 1, 2),
  goldStatue: B("Outside_C", 6, 8, 1, 2),
  lanternHang: B("Outside_C", 6, 12),
};
const IB = {
  shelf: B("Inside_B", 14, 3, 1, 2),
  shelf2: B("Inside_B", 13, 3, 1, 2),
  fireplace: B("Inside_B", 14, 7, 2, 2),
  counter: B("Inside_B", 9, 9),
  smallTable: B("Inside_B", 3, 14),
  clock: B("Inside_B", 5, 14, 1, 2),
};
const IC = {
  books: B("Inside_C", 0, 8),
  openBook: B("Inside_C", 4, 8),
  plant: B("Inside_C", 13, 9),
};
const SFI = {
  blackboard: B("SF_Inside_C", 0, 0, 3, 2),
  skeleton: B("SF_Inside_C", 1, 2, 1, 2),
  specimen: B("SF_Inside_C", 2, 2, 1, 2),
  plant: B("SF_Inside_C", 3, 2),
};

// family → outdoor biome accents for provinces
export interface Biome {
  grass: Ground;
  path: Ground;
  tall: Ground;
  tree: ObjSpec;
  accent: ObjSpec; // replaces FLOWER sometimes
  water: Ground;
  bgm: string;
  battleback: [string, string];
}

export const BIOMES: Record<string, Biome> = {
  chemistry: { grass: g.meadow, path: g.dirtRoad, tall: g.bush, tree: OB.tree, accent: OB.mushroom, water: g.pond, bgm: "Field2", battleback: ["PoisonSwamp", "PoisonSwamp"] },
  physics: { grass: g.dirt, path: g.dirtRoad, tall: g.bush, tree: OB.boulder, accent: OB.tuft, water: g.sea, bgm: "Field1", battleback: ["Stone2", "Cliff"] },
  biology: { grass: g.meadow, path: g.dirtRoad, tall: g.bush, tree: OB.bigTree, accent: OB.flowerB, water: g.pond, bgm: "Field2", battleback: ["GrassMaze", "Forest"] },
  emath: { grass: g.meadow, path: g.road, tall: g.bush, tree: OB.hedge, accent: OB.flowerA, water: g.pond, bgm: "Field1", battleback: ["DecorativeTile1", "Town3"] },
  amath: { grass: g.meadow, path: g.road, tall: g.bush, tree: OB.hedge, accent: OB.flowerA, water: g.pond, bgm: "Field1", battleback: ["DecorativeTile1", "Town3"] },
  poa: { grass: g.meadow, path: g.road, tall: g.bush, tree: OB.hedge, accent: OB.flowerA, water: g.pond, bgm: "Field1", battleback: ["DecorativeTile1", "Town3"] },
  geography: { grass: g.sand, path: g.sandRoad, tall: g.bushSand, tree: OB.palm, accent: OB.boulder, water: g.sea, bgm: "Ship1", battleback: ["Sand", "Desert"] },
  history: { grass: g.dirt, path: g.dirtRoad, tall: g.bush, tree: OC.brokenPillar, accent: OC.grave, water: g.pond, bgm: "Dungeon2", battleback: ["Wasteland", "Ruins1"] },
  "social-studies": { grass: g.dirt, path: g.dirtRoad, tall: g.bush, tree: OC.brokenPillar, accent: OC.grave, water: g.pond, bgm: "Dungeon2", battleback: ["Wasteland", "Ruins1"] },
  fnn: { grass: g.meadow, path: g.dirtRoad, tall: g.bush, tree: OB.bigTree, accent: OB.flowerB, water: g.pond, bgm: "Field2", battleback: ["GrassMaze", "Forest"] },
};
export const biomeFor = (family?: string): Biome => BIOMES[family ?? ""] ?? BIOMES.history;

// ── the per-zone theme ──────────────────────────────────────────────────────
// One function builds the theme for any zone id; provinces vary by family.
export function themeFor(zone: Zone, family?: string): MzTheme {
  const id = zone.id;
  const interior = id.startsWith("int:") || id === "reading";
  const dungeon = id.startsWith("under:") || id === "cells";
  const campus = id === "campus";
  const biome = biomeFor(family);
  const province = id.startsWith("prov:");
  const beach = id === "saltwind" || id === "lantern";
  const summit = id === "summit";

  const grass: Ground = summit ? g.dirt : province ? biome.grass : g.meadow;
  const path: Ground = summit ? g.dirtRoad : province ? biome.path : g.road;
  const water: Ground = beach ? g.sea : id === "hub" ? g.pond : province ? biome.water : g.pond;

  const ground = (tile: number): Ground => {
    switch (tile) {
      case TILE.GRASS: case TILE.TREE: case TILE.FLOWER: case TILE.SIGN:
      case PORTAL: case STAIRS: case ROCK: case FENCE: case LANTERN:
        if (interior) return g.woodFloor;
        if (dungeon) return id === "cells" ? g.caveRock : g.caveDirt;
        if (campus) return g.ruinsCobble;
        if (beach) return g.sand;
        return grass;
      case TILE.TALL:
        return beach ? g.bushSand : province ? biome.tall : g.bush;
      case TILE.PATH:
      case TILE.DOOR:
        return interior ? g.woodFloor : dungeon ? g.caveDirt : campus ? g.cobble : beach ? g.sand : path;
      case TILE.WATER:
        return water;
      case BRIDGE:
        return water; // bridge plank drawn as object over water
      case SAND:
        return g.sand;
      case CAVE_FLOOR:
        return id === "cells" ? g.caveRock : g.caveDirt;
      case CAVE_WALL:
        return id === "cells" ? g.caveRock : g.caveDirt; // face drawn over
      case FOGBANK:
      case RUINS:
        return g.ruinsCobble;
      case INT_FLOOR: case BOOKSHELF: case DESK: case TELESCOPE:
      case HEARTH: case STALL: case INT_WALL:
        return g.woodFloor;
      case RUG:
        return g.rugRed;
      case MAT:
        return g.rugGreen; // isolated rug autotile reads as a doormat
      case TILE.WALL: case ROOF: case ROOF_RIDGE:
        return grass; // building sits on grass; wall/roof autotile covers it
      default:
        return grass;
    }
  };

  const wall = (tile: number): WallSpec | null => {
    switch (tile) {
      case TILE.WALL:
        // campus: school walls (SF), summit: temple, elsewhere: plaster
        return campus
          ? { type: "a3", sheet: "SF_Outside_A3", kind: 8 }
          : { type: "a3", sheet: "Outside_A3", kind: summit ? 25 : 9 };
      case ROOF:
      case ROOF_RIDGE:
        return campus
          ? { type: "a3", sheet: "SF_Outside_A3", kind: 0 }
          : { type: "a3", sheet: "Outside_A3", kind: summit ? 17 : 2 };
      case CAVE_WALL:
        return { type: "wallface", sheet: "Dungeon_A4", kind: id === "cells" ? 1 : 0 };
      case INT_WALL:
        return { type: "wallface", sheet: "Inside_A4", kind: 16 };
      default:
        return null;
    }
  };

  const objects = (tile: number): ObjSpec[] | null => {
    switch (tile) {
      case TILE.TREE:
        if (interior) return [IB.shelf2];
        if (dungeon) return [OC.brokenPillar];
        if (campus) return [OB.deadTree];
        if (beach) return [OB.palm];
        if (summit) return [OB.boulder];
        return [province ? biome.tree : OB.tree];
      case TILE.FLOWER:
        return [province ? biome.accent : OB.flowerA];
      case TILE.SIGN:
        return [dungeon || campus ? OC.tablet : OB.sign];
      case ROCK:
        return [OB.boulder];
      case STAIRS:
        return [B("Dungeon_A5", 5, 0)];
      case BRIDGE:
        return [B("Outside_A5", 3, 0)];
      case FENCE:
        return [OB.hedge];
      case BOOKSHELF:
        return [IB.shelf];
      case DESK:
        return [IB.smallTable, IC.openBook];
      case TELESCOPE:
        return [SFI.skeleton];
      case HEARTH:
        return [IB.fireplace];
      case STALL:
        return [IB.counter];
      default:
        return null;
    }
  };

  return { ground, wall, objects };
}

// ── zone pre-render ─────────────────────────────────────────────────────────
// The whole zone's static layers render once into 3 offscreen canvases (the
// A1 water animation frames). The game loop blits the visible window and
// draws dynamic things (doors, portals, lantern glows, characters) on top.
export interface ZoneRender {
  frames: HTMLCanvasElement[]; // 3 water-animation frames of the whole zone
  voidTile: HTMLCanvasElement; // pattern tile for outside-the-map (forest/rock)
}

const zoneCache = new WeakMap<Zone, ZoneRender>();

function sameGround(a: Ground, b: Ground): boolean {
  if (!a || !b) return false;
  if ("auto" in a && "auto" in b) return a.sheet === b.sheet && a.kind === b.kind && a.auto === b.auto;
  if ("a5" in a && "a5" in b) return a.a5[0] === b.a5[0] && a.a5[1] === b.a5[1] && a.a5[2] === b.a5[2];
  return false;
}

export function zoneCanvases(zone: Zone, family?: string): ZoneRender {
  const hit = zoneCache.get(zone);
  if (hit) return hit;
  const theme = themeFor(zone, family);
  const frames: HTMLCanvasElement[] = [];

  const tileAt = (x: number, y: number): number => zone.grid[y]?.[x] ?? TILE.TREE;

  // outside-the-map pattern: the zone's own border look (forest, cave rock).
  // Interior rooms sit in darkness, not an infinite furniture warehouse.
  const interior = zone.id.startsWith("int:") || zone.id === "reading";
  const voidTile = document.createElement("canvas");
  voidTile.width = MZ;
  voidTile.height = MZ;
  if (interior) {
    const vctx = voidTile.getContext("2d")!;
    vctx.fillStyle = "#0b0e14";
    vctx.fillRect(0, 0, MZ, MZ);
  } else {
    const vctx = voidTile.getContext("2d")!;
    vctx.imageSmoothingEnabled = false;
    const spec = theme.ground(TILE.TREE);
    const solid: N8 = { l: true, r: true, u: true, d: true, ul: true, ur: true, dl: true, dr: true };
    if (spec && "auto" in spec && spec.auto === "a2") {
      drawFloorAuto(vctx, tileset(spec.sheet), (spec.kind % 8) * 2, Math.floor(spec.kind / 8) * 3, 0, 0, solid);
    } else if (spec && "a5" in spec) {
      vctx.drawImage(tileset(spec.a5[0]), spec.a5[1] * MZ, spec.a5[2] * MZ, MZ, MZ, 0, 0, MZ, MZ);
    }
    const wallSpec = theme.wall?.(CAVE_WALL);
    const objs = theme.objects?.(TILE.TREE);
    if (zone.id.startsWith("under:") || zone.id === "cells") {
      if (wallSpec) {
        drawWallAuto(vctx, tileset(wallSpec.sheet), (wallSpec.kind % 8) * 2, Math.floor(wallSpec.kind / 8) * 5 + 3, 0, 0, solid);
      }
    } else if (objs?.length) {
      const o = objs[0];
      // clamp tall/wide objects into the single pattern tile
      vctx.drawImage(tileset(o.sheet), o.col * MZ, o.row * MZ, MZ, MZ, 0, 0, MZ, MZ);
    }
  }

  for (let f = 0; f < 3; f++) {
    const cv = document.createElement("canvas");
    cv.width = zone.width * MZ;
    cv.height = zone.height * MZ;
    const ctx = cv.getContext("2d")!;
    ctx.imageSmoothingEnabled = false;

    // pass 1: ground
    for (let y = 0; y < zone.height; y++) {
      for (let x = 0; x < zone.width; x++) {
        const spec = theme.ground(tileAt(x, y));
        drawGround(ctx, theme, spec, x, y, x * MZ, y * MZ, f, tileAt);
      }
    }
    // pass 2: walls + objects (row order so tall objects overlap upwards)
    for (let y = 0; y < zone.height; y++) {
      for (let x = 0; x < zone.width; x++) {
        const t = tileAt(x, y);
        const w = theme.wall?.(t);
        if (w) drawWallSpec(ctx, w, x, y, tileAt, theme);
        const objs = theme.objects?.(t);
        if (objs) {
          for (const o of objs) {
            const wpx = (o.w ?? 1) * MZ;
            const hpx = (o.h ?? 1) * MZ;
            ctx.drawImage(
              tileset(o.sheet),
              o.col * MZ, o.row * MZ, wpx, hpx,
              x * MZ - (((o.w ?? 1) - 1) * MZ) / 2, (y + 1) * MZ - hpx, wpx, hpx
            );
          }
        }
      }
    }
    frames.push(cv);
  }
  const render: ZoneRender = { frames, voidTile };
  zoneCache.set(zone, render);
  return render;
}

function neighbours(
  x: number,
  y: number,
  spec: Ground,
  theme: MzTheme,
  tileAt: (x: number, y: number) => number
): N8 {
  const same = (nx: number, ny: number) => sameGround(theme.ground(tileAt(nx, ny)), spec);
  return {
    l: same(x - 1, y), r: same(x + 1, y), u: same(x, y - 1), d: same(x, y + 1),
    ul: same(x - 1, y - 1), ur: same(x + 1, y - 1), dl: same(x - 1, y + 1), dr: same(x + 1, y + 1),
  };
}

function drawGround(
  ctx: CanvasRenderingContext2D,
  theme: MzTheme,
  spec: Ground,
  x: number,
  y: number,
  dx: number,
  dy: number,
  frame: number,
  tileAt: (x: number, y: number) => number
) {
  if (!spec) return;
  if ("a5" in spec) {
    ctx.drawImage(tileset(spec.a5[0]), spec.a5[1] * MZ, spec.a5[2] * MZ, MZ, MZ, dx, dy, MZ, MZ);
    return;
  }
  const n = neighbours(x, y, spec, theme, tileAt);
  if (spec.auto === "a1") {
    // under-layer so animated shorelines never flash the canvas colour
    const under = theme.ground(TILE.GRASS);
    if (under && "auto" in under) {
      drawFloorAuto(ctx, tileset(under.sheet), (under.kind % 8) * 2, Math.floor(under.kind / 8) * 3, dx, dy, { l: true, r: true, u: true, d: true, ul: true, ur: true, dl: true, dr: true });
    }
    drawFloorAuto(ctx, tileset(spec.sheet), frame * 2, spec.kind * 3, dx, dy, n);
    return;
  }
  // A2 ground: bushes and other see-through kinds sit on the plain grass base
  const kind = spec.kind;
  if (kind === 4 || kind === 20) {
    const under = theme.ground(TILE.GRASS);
    if (under && "auto" in under && under.auto === "a2") {
      drawFloorAuto(ctx, tileset(under.sheet), (under.kind % 8) * 2, Math.floor(under.kind / 8) * 3, dx, dy, { l: true, r: true, u: true, d: true, ul: true, ur: true, dl: true, dr: true });
    }
  }
  drawFloorAuto(ctx, tileset(spec.sheet), (kind % 8) * 2, Math.floor(kind / 8) * 3, dx, dy, n);
}

function drawWallSpec(
  ctx: CanvasRenderingContext2D,
  w: WallSpec,
  x: number,
  y: number,
  tileAt: (x: number, y: number) => number,
  theme: MzTheme
) {
  const same = (nx: number, ny: number) => {
    const other = theme.wall?.(tileAt(nx, ny));
    return Boolean(other && other.sheet === w.sheet && other.kind === w.kind && other.type === w.type);
  };
  const n: N8 = {
    l: same(x - 1, y), r: same(x + 1, y), u: same(x, y - 1), d: same(x, y + 1),
    ul: same(x - 1, y - 1), ur: same(x + 1, y - 1), dl: same(x - 1, y + 1), dr: same(x + 1, y + 1),
  };
  const dx = x * MZ;
  const dy = y * MZ;
  const sheet = tileset(w.sheet);
  if (w.type === "a3") {
    drawWallAuto(ctx, sheet, (w.kind % 8) * 2, Math.floor(w.kind / 8) * 2, dx, dy, n);
  } else if (w.type === "wallface") {
    drawWallAuto(ctx, sheet, (w.kind % 8) * 2, Math.floor(w.kind / 8) * 5 + 3, dx, dy, n);
  } else {
    drawFloorAuto(ctx, sheet, (w.kind % 8) * 2, Math.floor(w.kind / 8) * 5, dx, dy, n);
  }
}

// ── characters ──────────────────────────────────────────────────────────────
export interface MzChar {
  sheet: string;
  index: number; // 0-7 on standard sheets; ignored on $-prefixed single sheets
  hue?: number; // optional hue-rotate in degrees (companion tints)
}

const DIR_ROW: Record<string, number> = { down: 0, left: 1, right: 2, up: 3 };

// Draw one MZ walker cell. Standard sheets: 4x2 characters, each 3 frames x 4
// dirs of 48x48. "$" sheets: the whole file is ONE character (cell = w/3 x h/4).
// Characters sit with feet on the tile; MZ art overlaps ~6px above.
export function drawMzChar(
  ctx: CanvasRenderingContext2D,
  ch: MzChar,
  dir: string,
  frame: number, // 0..2 (1 = idle)
  dx: number,
  dy: number,
  scale = 1
) {
  const sheet = mzCharSheet(ch.sheet);
  if (!sheet.complete || sheet.naturalWidth === 0) return false;
  const single = ch.sheet.startsWith("$") || ch.sheet.startsWith("!$");
  const cw = single ? sheet.naturalWidth / 3 : 48;
  const chh = single ? sheet.naturalHeight / 4 : 48;
  const bx = single ? 0 : (ch.index % 4) * 144;
  const by = single ? 0 : Math.floor(ch.index / 4) * 192;
  const sx = bx + frame * cw;
  const sy = by + DIR_ROW[dir] * chh;
  const dw = cw * scale;
  const dh = chh * scale;
  if (ch.hue) {
    ctx.save();
    ctx.filter = `hue-rotate(${ch.hue}deg)`;
    ctx.drawImage(sheet, sx, sy, cw, chh, dx + (MZ - dw) / 2, dy + MZ - dh, dw, dh);
    ctx.restore();
  } else {
    ctx.drawImage(sheet, sx, sy, cw, chh, dx + (MZ - dw) / 2, dy + MZ - dh, dw, dh);
  }
  return true;
}

// ── casting: StudyLah Legends roles → MZ sheets ────────────────────────────
export const MZ_HEROES: Record<string, MzChar> = {
  jun: { sheet: "SF_Actor1", index: 0 },
  mei: { sheet: "SF_Actor1", index: 1 },
  agent: { sheet: "SF_Actor1", index: 6 },
};

export const MZ_NPCS: Record<string, MzChar> = {
  elder_maple: { sheet: "People1", index: 7 },
  nurse_fern: { sheet: "People1", index: 5 },
  kai_rival: { sheet: "SF_Actor1", index: 2 },
  mina: { sheet: "People1", index: 1 },
  old_tan: { sheet: "People1", index: 4 },
  camp_keeper: { sheet: "Evil", index: 0 },
  route_farmer: { sheet: "People1", index: 6 },
  student_a: { sheet: "SF_Actor1", index: 7 },
  student_b: { sheet: "SF_Actor1", index: 4 },
  student_c: { sheet: "SF_Actor1", index: 3 },
  fog_grunt: { sheet: "Evil", index: 7 },
  commander_murk: { sheet: "SF_Monster", index: 1 },
  examiner_sage: { sheet: "Evil", index: 3 },
};

// mistake species → walker + painted battler
export const MZ_SPECIES: Record<string, { char: MzChar; battler: string }> = {
  careless: { char: { sheet: "Monster", index: 1 }, battler: "Petitdevil" },
  concept: { char: { sheet: "SF_Monster", index: 2 }, battler: "Wraith" },
  method: { char: { sheet: "Monster", index: 3 }, battler: "Stoneknight" },
  time: { char: { sheet: "Monster", index: 6 }, battler: "Demoncount" },
  unset: { char: { sheet: "Nature", index: 1 }, battler: "SF_Will_o_the_wisp" },
};

export const MZ_GUARDIANS: Record<string, { char: MzChar; battler: string }> = {
  marsh_newt: { char: { sheet: "Nature", index: 3 }, battler: "Frilledlizard" },
  highland_ram: { char: { sheet: "Nature", index: 0 }, battler: "SF_Whitewolf" },
  grove_sproutling: { char: { sheet: "Nature", index: 5 }, battler: "Treant" },
  terrace_counter: { char: { sheet: "Nature", index: 1 }, battler: "Gnome" },
  coast_drifter: { char: { sheet: "SF_Monster", index: 0 }, battler: "Undine" },
  ruins_watcher: { char: { sheet: "SF_Monster", index: 2 }, battler: "Gatekeeper" },
  clarity: { char: { sheet: "Nature", index: 7 }, battler: "Unicorn" },
};

// Gugu the companion spirit; starters tint it (hue-rotate from pink)
export const MZ_GUGU: MzChar = { sheet: "Nature", index: 6 };
export const GUGU_HUES: Record<string, number> = {
  none: 0,
  ember: 25, // pink → ember orange
  tide: 220, // → blue
  grove: 120, // → green
  gold: 55, // championship gold
};

// dialogue faces: role → face sheet + index (4x2 grid of 144px faces)
export const MZ_FACES: Record<string, { sheet: string; index: number }> = {
  jun: { sheet: "SF_Actor1", index: 0 },
  mei: { sheet: "SF_Actor1", index: 1 },
  agent: { sheet: "SF_Actor1", index: 6 },
  elder_maple: { sheet: "People1", index: 7 },
  nurse_fern: { sheet: "People1", index: 5 },
  kai_rival: { sheet: "SF_Actor1", index: 2 },
  mina: { sheet: "People1", index: 1 },
  old_tan: { sheet: "People1", index: 4 },
  camp_keeper: { sheet: "Evil", index: 0 },
  route_farmer: { sheet: "People1", index: 6 },
  student_a: { sheet: "SF_Actor1", index: 7 },
  student_b: { sheet: "SF_Actor1", index: 4 },
  student_c: { sheet: "SF_Actor1", index: 3 },
  fog_grunt: { sheet: "Evil", index: 7 },
  commander_murk: { sheet: "SF_Monster", index: 1 },
  examiner_sage: { sheet: "Evil", index: 3 },
};

// door animation state by proximity (0 closed .. 3 open), drawn from !Door1
export function drawMzDoor(
  ctx: CanvasRenderingContext2D,
  dx: number,
  dy: number,
  openness: 0 | 1 | 2 | 3,
  school = false
) {
  const sheet = mzCharSheet(school ? "!SF_Door1" : "!Door1");
  if (!sheet.complete || sheet.naturalWidth === 0) return false;
  // !Door sheets animate via the direction rows: down=closed → up=open
  ctx.drawImage(sheet, 0 + 48, openness * 48, 48, 48, dx, dy, 48, 48);
  return true;
}

// portal pad: a crystal from !Crystal (animated via frame column)
export function drawMzPortal(
  ctx: CanvasRenderingContext2D,
  dx: number,
  dy: number,
  frame: number,
  locked: boolean
) {
  const sheet = mzCharSheet("!Crystal");
  if (!sheet.complete || sheet.naturalWidth === 0) return false;
  ctx.save();
  if (locked) ctx.filter = "grayscale(0.9) brightness(0.7)";
  ctx.drawImage(sheet, frame * 48, 0, 48, 48, dx, dy, 48, 48);
  ctx.restore();
  // soft glow
  if (!locked) {
    ctx.fillStyle = "rgba(255, 220, 0, 0.12)";
    ctx.beginPath();
    ctx.arc(dx + 24, dy + 24, 22, 0, Math.PI * 2);
    ctx.fill();
  }
  return true;
}

// a lit lantern: hanging lamp object + flame glow (the Lightbearer motif)
export function drawMzLantern(ctx: CanvasRenderingContext2D, dx: number, dy: number, f2: number) {
  const sheet = tileset("Outside_C");
  if (!sheet.complete || sheet.naturalWidth === 0) return false;
  ctx.fillStyle = f2 ? "rgba(255, 220, 0, 0.16)" : "rgba(255, 183, 3, 0.13)";
  ctx.beginPath();
  ctx.arc(dx + 24, dy + 20, 26, 0, Math.PI * 2);
  ctx.fill();
  ctx.drawImage(sheet, 6 * MZ, 12 * MZ, MZ, MZ, dx, dy, MZ, MZ);
  return true;
}
