"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import {
  TILE,
  PORTAL,
  ROOF,
  ROOF_RIDGE,
  STAIRS,
  CAVE_FLOOR,
  CAVE_WALL,
  FOGBANK,
  SAND,
  RUINS,
  FENCE,
  BRIDGE,
  INT_FLOOR,
  INT_WALL,
  BOOKSHELF,
  DESK,
  TELESCOPE,
  HEARTH,
  STALL,
  RUG,
  MAT,
  LANTERN,
  walkable,
  buildRegion,
  type Zone,
  type Npc,
  type NpcBattle,
  type WorldSubject,
} from "@/lib/game/world2";
import {
  loreFor,
  rollSpecies,
  stageForLevel,
  hpForStage,
  bossById,
  QUESTS,
  questById,
  COPY,
  FRONT_CLEARED,
  type MiniBoss,
  type QuestDef,
} from "@/lib/game/season";
import { MONSTERS, STARTERS, HEROES, starterById } from "@/lib/game";
import { emitGame, emitFx, useHud, type FxGame } from "@/lib/game/fx";
import {
  loadSheets,
  terrainXY,
  buildingXY,
  ghostBlockX,
  npcBlockX,
  heroBlockX,
  monsterBlockX,
  fxXY,
  accessoryBlockX,
  guardianWalkerRect,
  buildingAnimXY,
  drawWalker,
  type AccessoryName,
  type Sheets,
  type NpcSprite,
  type GuardianName,
  type PortraitName,
} from "@/lib/game/sheets";
import {
  MonsterSprite,
  GuardianSprite,
  PortraitSprite,
  UiSprite,
  HeartRow,
  CaptureSwirl,
} from "@/components/sprite";
import { DuelHall } from "@/components/duel-hall";
import { SubjectGuru } from "@/components/subject-guru";
import { SingaporeMinimap, SingaporeMapOverlay } from "@/components/singapore-map";
import { districtForZone } from "@/lib/game/singapore";

// Subject family → gym emblem + province guardian (original sheet art).
const EMBLEM_BY_FAMILY: Record<string, string> = {
  chemistry: "emblem_flask",
  physics: "emblem_atom",
  biology: "emblem_leaf",
  geography: "emblem_globe",
  history: "emblem_scroll",
  "social-studies": "emblem_compass",
  emath: "emblem_abacus",
  amath: "emblem_abacus",
  poa: "emblem_abacus",
  fnn: "emblem_gear",
};
const GUARDIAN_BY_FAMILY: Record<string, GuardianName> = {
  chemistry: "marsh_newt",
  physics: "highland_ram",
  biology: "grove_sproutling",
  emath: "terrace_counter",
  amath: "terrace_counter",
  poa: "terrace_counter",
  geography: "coast_drifter",
  history: "ruins_watcher",
  "social-studies": "ruins_watcher",
  fnn: "grove_sproutling",
};
const emblemFor = (family?: string) => EMBLEM_BY_FAMILY[family ?? ""] ?? "emblem_gear";
const guardianFor = (family?: string): GuardianName => GUARDIAN_BY_FAMILY[family ?? ""] ?? "ruins_watcher";

// ── StudyLah Legends, the full game ───────────────────────────────────────────
// Immersive full-screen canvas RPG with PUBG-style overlay controls. Every
// battle strike is a REAL exam question graded server-side; story beats,
// gym emblems and dex captures persist as achievements. All content is
// original StudyLah IP.

interface PublicQuestion {
  id: string;
  type: "mcq" | "short";
  topic: string;
  stem: string;
  options?: string[];
  marks: number;
  fogIndex?: number; // Whisper's fog: one WRONG option the server marked
}

const TS = 16;
const MOVE_MS = 150;
const ENCOUNTER = 0.14;
const WILD = ["careless", "concept", "method", "time"] as const;
const MAX_HEARTS = 3;

// SSR-safe mount gate for the body portal (the game must escape the account
// template's stacking context, or the shell HUD paints over it).
const noopSub = () => () => {};
const clientTrue = () => true;
const serverFalse = () => false;

// ── Viewport: the tile grid matches the real screen aspect ────────────────
// Shorter screen side ≈ 13 tiles, the longer side fills to the same ratio, 
// with object-cover on the canvas there are NO letterbox bars. Quantised
// snapshot string keeps useSyncExternalStore referentially stable.
function viewSnapshot(): string {
  if (typeof window === "undefined") return "13x15";
  const w = window.innerWidth;
  const h = window.innerHeight;
  if (h >= w) {
    const rows = Math.max(13, Math.min(28, Math.round((13 * h) / w)));
    return `13x${rows}`;
  }
  const cols = Math.max(13, Math.min(30, Math.round((13 * w) / h)));
  return `${cols}x13`;
}
const viewServer = () => "13x15";
function subscribeView(cb: () => void): () => void {
  window.addEventListener("resize", cb);
  window.addEventListener("orientationchange", cb);
  return () => {
    window.removeEventListener("resize", cb);
    window.removeEventListener("orientationchange", cb);
  };
}

// ── Strikes v3 (balance pass): stakes and rhythm, not raw difficulty ───────
const STRIKES = [
  { id: "jab", name: "Quick Jab", desc: "1 dmg · miss costs 1 ❤", dmg: 1 },
  { id: "power", name: "Power Strike", desc: "2 dmg · miss: −1 ❤ and it heals", dmg: 2 },
  { id: "guard", name: "Take a Breath", desc: "shield the next miss · once", dmg: 0 },
] as const;
type StrikeId = (typeof STRIKES)[number]["id"];

// ── Pixel tileset v2 ───────────────────────────────────────────────────────
// Two animation frames (water waves, swaying grass, pulsing portals) of
// hand-drawn original pixels, no external assets, nothing licensed.
function makeTileset(f: number): Record<number, HTMLCanvasElement> {
  const out: Record<number, HTMLCanvasElement> = {};
  const mk = (draw: (c: CanvasRenderingContext2D) => void) => {
    const cv = document.createElement("canvas");
    cv.width = TS;
    cv.height = TS;
    const ctx = cv.getContext("2d")!;
    draw(ctx);
    return cv;
  };
  const rect = (c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, col: string) => {
    c.fillStyle = col;
    c.fillRect(x, y, w, h);
  };

  const grass = (c: CanvasRenderingContext2D) => {
    rect(c, 0, 0, TS, TS, "#4e9d54");
    rect(c, 0, 0, 8, 8, "#4a9750");
    rect(c, 8, 8, 8, 8, "#4a9750");
    for (const [x, y] of [[2, 3], [11, 2], [6, 6], [13, 10], [3, 12], [9, 14]] as const) {
      rect(c, x, y, 2, 1, "#419047");
    }
    rect(c, 5, 10, 1, 1, "#63b46a");
    rect(c, 12, 5, 1, 1, "#63b46a");
  };
  out[TILE.GRASS] = mk(grass);

  out[TILE.TALL] = mk((c) => {
    grass(c);
    const sway = f ? 1 : 0;
    for (const bx of [1, 5, 9, 13]) {
      rect(c, bx, 8, 2, 7, "#2f6d38");
      rect(c, bx + 1, 8, 1, 7, "#3b8746");
      rect(c, bx + sway, 5, 1, 4, "#2f6d38");
      rect(c, bx + 1 - sway, 4, 1, 2, "#79d47a");
    }
  });

  out[TILE.TREE] = mk((c) => {
    grass(c);
    c.fillStyle = "rgba(20,40,25,0.35)";
    c.fillRect(3, 13, 10, 2);
    rect(c, 7, 10, 3, 5, "#6b4423");
    rect(c, 7, 10, 1, 5, "#523418");
    c.fillStyle = "#1f5c2a";
    c.beginPath();
    c.arc(8, 7, 6.5, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = "#2b7436";
    c.beginPath();
    c.arc(7, 6, 5, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = "#3f8f4a";
    c.beginPath();
    c.arc(6, 5, 3, 0, Math.PI * 2);
    c.fill();
    rect(c, 5, 3, 1, 1, "#63b46a");
  });

  out[TILE.WATER] = mk((c) => {
    rect(c, 0, 0, TS, TS, "#2f6fc9");
    rect(c, 0, 0, TS, 4, "#3b7dd8");
    const o = f ? 3 : 0;
    rect(c, 1 + o, 4, 5, 1, "#7fb2f0");
    rect(c, 8 - o + 3, 9, 5, 1, "#7fb2f0");
    rect(c, 3 + o, 13, 4, 1, "#5e97e3");
    rect(c, 12 - o, 2, 2, 1, "#a9ccf7");
  });

  out[TILE.PATH] = mk((c) => {
    rect(c, 0, 0, TS, TS, "#d9c48a");
    rect(c, 0, 0, TS, 1, "#e5d4a1");
    for (const [x, y] of [[3, 4], [11, 7], [6, 12], [13, 13]] as const) {
      rect(c, x, y, 2, 1, "#c4ac72");
    }
    rect(c, 8, 2, 1, 1, "#b89f66");
  });

  out[TILE.WALL] = mk((c) => {
    rect(c, 0, 0, TS, TS, "#e2d9c8");
    rect(c, 0, 0, TS, 1, "#f0e8d8");
    rect(c, 0, 14, TS, 2, "#c9bda6");
    rect(c, 0, 7, TS, 1, "#cfc3ac");
    // window
    rect(c, 5, 3, 6, 7, "#8a7a5f");
    rect(c, 6, 4, 4, 5, "#2c3a52");
    rect(c, 6, 4, 2, 2, "#6ea0ff");
  });

  out[ROOF] = mk((c) => {
    rect(c, 0, 0, TS, TS, "#b0503a");
    rect(c, 0, 0, TS, 2, "#d98a5f");
    for (const y of [5, 9, 13]) {
      rect(c, 0, y, TS, 1, "#8f3e2d");
    }
    for (const [x, y] of [[3, 3], [10, 7], [6, 11]] as const) {
      rect(c, x, y, 2, 1, "#c96a4b");
    }
  });

  out[TILE.DOOR] = mk((c) => {
    rect(c, 0, 0, TS, TS, "#e2d9c8");
    rect(c, 0, 0, TS, 2, "#ffdc00");
    rect(c, 0, 14, TS, 2, "#c9bda6");
    rect(c, 3, 3, 10, 13, "#6b4423");
    rect(c, 4, 4, 8, 12, "#3a2f4a");
    rect(c, 5, 6, 6, 9, "#221b2e");
    rect(c, 9, 10, 1, 1, "#ffdc00");
  });

  out[TILE.FLOWER] = mk((c) => {
    grass(c);
    rect(c, 3, 4, 3, 3, "#ff7ab0");
    rect(c, 4, 5, 1, 1, "#fff1f7");
    rect(c, 10, 9, 3, 3, "#ffdc00");
    rect(c, 11, 10, 1, 1, "#b8860b");
    if (f) rect(c, 8, 3, 1, 1, "#ffffff");
  });

  out[TILE.SIGN] = mk((c) => {
    grass(c);
    rect(c, 7, 9, 2, 6, "#6b4423");
    rect(c, 2, 3, 12, 6, "#b98a4e");
    rect(c, 2, 3, 12, 1, "#d0a668");
    rect(c, 2, 8, 12, 1, "#8f6a3a");
    rect(c, 4, 5, 8, 1, "#6b4423");
    rect(c, 4, 7, 6, 1, "#6b4423");
  });

  out[PORTAL] = mk((c) => {
    grass(c);
    rect(c, 2, 2, 12, 12, "#221b2e");
    rect(c, 3, 3, 10, 10, "#3a2f4a");
    if (f) {
      rect(c, 5, 5, 6, 6, "#b89a00");
      rect(c, 6, 6, 4, 4, "#ffdc00");
      rect(c, 7, 7, 2, 2, "#fff6bf");
    } else {
      rect(c, 6, 6, 4, 4, "#ffdc00");
      rect(c, 7, 7, 2, 2, "#ffffff");
    }
  });

  return out;
}

// Soft shadow disc under every character, depth for free.
function drawShadow(ctx: CanvasRenderingContext2D, x: number, y: number, scale = 1) {
  ctx.fillStyle = "rgba(10, 14, 20, 0.32)";
  ctx.beginPath();
  ctx.ellipse(x + 8 * scale, y + 14.5 * scale, 5.5 * scale, 2 * scale, 0, 0, Math.PI * 2);
  ctx.fill();
}

// Level accessories from ghost_accessories.png, cell-for-cell aligned with
// the player walker (bob offsets baked into the art), drawn straight over.
// Thresholds mirror ghostStage() in src/lib/game.ts.
const ACCESSORY_LEVELS: [number, AccessoryName][] = [
  [7, "cape"],
  [3, "headband"],
  [12, "glasses"],
  [16, "crown"],
  [20, "glow"],
];

function drawAccessories(
  ctx: CanvasRenderingContext2D,
  sheet: HTMLImageElement,
  level: number,
  dir: string,
  frame: number,
  x: number,
  y: number
) {
  for (const [min, name] of ACCESSORY_LEVELS) {
    if (level >= min) drawWalker(ctx, sheet, accessoryBlockX(name), dir, frame, x, y);
  }
}

// ── The playable researchers ───────────────────────────────────────────────
// Heroes render from the commissioned heroes.png sheet (jun / mei / agent).
// This painter is the PROCEDURAL FALLBACK only, used when the sheet fails to
// load, 16×24, 1px #1a2230 outline, feet on the tile, 3-frame walk.
interface HeroPalette {
  hair: string;
  skin: string;
  top: string;
  bottom: string;
  accent: string;
  shades?: boolean; // Agent X's eyewear
}

const HERO_PALETTES: Record<string, HeroPalette> = {
  jun: { hair: "#6b4423", skin: "#f0c8a0", top: "#3b7dd8", bottom: "#d9c48a", accent: "#db222a" },
  mei: { hair: "#1a2230", skin: "#e8b88a", top: "#ff7ab0", bottom: "#7c3aed", accent: "#ffdc00" },
  agent: { hair: "#221b2e", skin: "#e8b88a", top: "#2b3242", bottom: "#1a2230", accent: "#db222a", shades: true },
};

function drawHero(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  dir: string,
  frame: number, // 0..2, 1 = idle
  heroId: string
) {
  const pal = HERO_PALETTES[heroId] ?? HERO_PALETTES.jun;
  const top = y - 8;
  const px = (dx: number, dy: number, w: number, h: number, col: string) => {
    ctx.fillStyle = col;
    ctx.fillRect(x + dx, top + dy, w, h);
  };
  const step = frame === 0 ? -1 : frame === 2 ? 1 : 0;

  // outline silhouette
  px(4, 1, 8, 10, "#1a2230");
  px(3, 10, 10, 9, "#1a2230");
  px(3, 18, 10, 6, "#1a2230");
  // hair + head
  px(5, 2, 6, 3, pal.hair);
  if (heroId === "mei") {
    px(11, 3, 2, 5, pal.hair); // ponytail
    px(11, 8, 1, 1, pal.accent);
  }
  if (heroId === "agent") px(4, 2, 8, 2, pal.hair); // slicked flat
  px(5, 5, 6, 4, pal.skin);
  // face by direction
  const ex = dir === "left" ? -1 : dir === "right" ? 1 : 0;
  if (dir !== "up") {
    if (pal.shades) {
      px(5 + ex, 6, 6, 2, "#10131a");
      px(6 + ex, 6, 1, 1, "#6ea0ff");
    } else {
      px(6 + ex, 6, 1, 1, "#1a2230");
      px(9 + ex, 6, 1, 1, "#1a2230");
    }
  } else {
    px(5, 5, 6, 4, pal.hair); // back of head
  }
  // torso
  px(4, 10, 8, 5, pal.top);
  if (heroId === "agent") {
    px(7, 10, 2, 5, "#e2d9c8"); // shirt + tie
    px(7, 11, 2, 3, pal.accent);
    px(3, 10, 1, 7, pal.top); // long coat edges
    px(12, 10, 1, 7, pal.top);
  }
  if (heroId === "jun") px(4, 10, 8, 1, pal.accent); // scarf line
  // arms (swing subtly)
  px(3, 11 + (step === -1 ? 1 : 0), 1, 3, pal.skin);
  px(12, 11 + (step === 1 ? 1 : 0), 1, 3, pal.skin);
  // legs (skirt for Mei)
  if (heroId === "mei") {
    px(4, 15, 8, 3, pal.bottom);
    px(5 + (step === -1 ? -1 : 0), 18, 2, 4, pal.skin);
    px(9 + (step === 1 ? 1 : 0), 18, 2, 4, pal.skin);
  } else {
    px(4, 15, 8, 3, pal.bottom);
    px(5 + (step === -1 ? -1 : 0), 18, 3, 4, pal.bottom);
    px(8 + (step === 1 ? 1 : 0), 18, 3, 4, pal.bottom);
  }
  // shoes
  px(5 + (step === -1 ? -1 : 0), 22, 3, 2, "#1a2230");
  px(8 + (step === 1 ? 1 : 0), 22, 3, 2, "#1a2230");
}

function drawGhost(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  facing: "up" | "down" | "left" | "right",
  frame: number,
  scarf?: string
) {
  const bob = frame ? 1 : 0;
  const px = (dx: number, dy: number, w: number, h: number, col: string) => {
    ctx.fillStyle = col;
    ctx.fillRect(x + dx, y + dy + bob, w, h);
  };
  // dark outline first, then the body inside it, sprites pop off the map
  px(2, 1, 12, 11, "#1a2230");
  px(2, 11, 12, 4, "#1a2230");
  px(3, 2, 10, 9, "#ffffff");
  px(3, 10, 10, 4, "#ffffff");
  px(4, 3, 3, 2, "#f2f6fa");
  px(3, 13, 3, 2, frame ? "#ffffff" : "#e7ecf2");
  px(7, 13, 2, 2, "#ffffff");
  px(10, 13, 3, 2, frame ? "#e7ecf2" : "#ffffff");
  // companion-spirit scarf + trailing knot
  if (scarf) {
    px(3, 10, 10, 2, scarf);
    px(11, 12, 2, 3, scarf);
  }
  const ex = facing === "left" ? -1 : facing === "right" ? 1 : 0;
  const ey = facing === "up" ? -1 : 0;
  px(5 + ex, 6 + ey, 2, 2, "#161c26");
  px(9 + ex, 6 + ey, 2, 2, "#161c26");
  px(5 + ex, 6 + ey, 1, 1, "#8fa3c0");
  px(9 + ex, 6 + ey, 1, 1, "#8fa3c0");
}

// Draw one tile from the original terrain/buildings sheets. Grass always
// underlays transparent props; the hub's pool renders as a fountain; gym
// buildings get the gold-emblem facade.
function drawSheetTile(
  ctx: CanvasRenderingContext2D,
  sh: Sheets,
  z: { id: string; gym?: { x: number; y: number } },
  tile: number,
  tx: number,
  ty: number,
  sx: number,
  sy: number,
  f2: number,
  f4: number,
  ptx: number,
  pty: number
) {
  const anim = (row: "door" | "fountain" | "campfire", frame: number) => {
    const [ax, ay] = buildingAnimXY(row, frame);
    ctx.drawImage(sh.buildingsAnim, ax, ay, 16, 16, sx, sy, 16, 16);
  };
  const t = (name: string) => {
    const [ux, uy] = terrainXY(name);
    ctx.drawImage(sh.terrain, ux, uy, 16, 16, sx, sy, 16, 16);
  };
  const b = (name: string) => {
    const [ux, uy] = buildingXY(name);
    ctx.drawImage(sh.buildings, ux, uy, 16, 16, sx, sy, 16, 16);
  };
  const grassBase = () => t((tx * 7 + ty * 13) % 5 === 0 ? "grass2" : "grass1");

  switch (tile) {
    case TILE.GRASS:
      grassBase();
      break;
    case TILE.TALL:
      grassBase();
      t(f2 ? "tallgrass_f2" : "tallgrass_f1");
      break;
    case TILE.TREE:
      grassBase();
      t((tx * 31 + ty * 17) % 7 === 0 ? "pine" : "tree");
      break;
    case TILE.WATER:
      if (z.id === "hub") anim("fountain", f4);
      else t(f2 ? "water_f2" : "water_f1");
      break;
    case TILE.PATH:
      t("path");
      break;
    case TILE.WALL:
      b(z.gym ? "gym_facade" : (tx + ty) % 2 === 0 ? "window_lit" : "wall_plaster");
      break;
    case ROOF_RIDGE:
      b("terracotta_ridge");
      break;
    case ROOF:
      b("terracotta_slope");
      break;
    case TILE.DOOR: {
      // the door opens as you approach, pure delight, zero cost
      const dist = Math.abs(tx - ptx) + Math.abs(ty - pty);
      anim("door", dist <= 1 ? 3 : dist === 2 ? 1 : 0);
      break;
    }
    case TILE.FLOWER:
      grassBase();
      t(f2 ? "flowers_f2" : "flowers_f1");
      break;
    case TILE.SIGN:
      if (z.id === "cells") t("cave_floor");
      else if (z.id === "lantern") t("sand");
      else grassBase();
      t("sign");
      break;
    case PORTAL:
      grassBase();
      t(f2 ? "portal_f2" : "portal_f1");
      break;
    case STAIRS:
      grassBase();
      t("stairs");
      break;
    case CAVE_FLOOR:
      t("cave_floor");
      break;
    case CAVE_WALL:
      t("cave_wall");
      break;
    case FOGBANK: {
      t("ruins_brick");
      const [fxx, fxy] = fxXY(f2 ? "fog2" : "fog1");
      ctx.drawImage(sh.fx, fxx, fxy, 16, 16, sx, sy, 16, 16);
      break;
    }
    case SAND:
      t("sand");
      break;
    case RUINS:
      t("ruins_brick");
      break;
    case FENCE:
      grassBase();
      t("fence_h");
      break;
    case BRIDGE:
      t(f2 ? "water_f2" : "water_f1");
      t("bridge_h");
      break;
    // ── building interiors ──────────────────────────────────────────────
    case INT_FLOOR:
      intFloor(ctx, sx, sy, tx, ty);
      break;
    case INT_WALL:
      b((tx + ty) % 4 === 0 ? "window_dark" : "wall_timber");
      break;
    case BOOKSHELF:
      intFloor(ctx, sx, sy, tx, ty);
      b("prop_bookshelf");
      break;
    case DESK:
      intFloor(ctx, sx, sy, tx, ty);
      b("prop_desk");
      break;
    case TELESCOPE:
      intFloor(ctx, sx, sy, tx, ty);
      b("prop_telescope");
      break;
    case HEARTH:
      intFloor(ctx, sx, sy, tx, ty);
      anim("campfire", f4);
      break;
    case STALL:
      intFloor(ctx, sx, sy, tx, ty);
      b("market_stall");
      break;
    case RUG:
      intFloor(ctx, sx, sy, tx, ty);
      ctx.fillStyle = "rgba(219, 34, 42, 0.55)";
      ctx.fillRect(sx + 1, sy + 1, 14, 14);
      ctx.fillStyle = "rgba(255, 220, 0, 0.5)";
      ctx.fillRect(sx + 3, sy + 3, 10, 10);
      ctx.fillStyle = "rgba(219, 34, 42, 0.55)";
      ctx.fillRect(sx + 5, sy + 5, 6, 6);
      break;
    case MAT:
      intFloor(ctx, sx, sy, tx, ty);
      ctx.fillStyle = "#6b4423";
      ctx.fillRect(sx + 2, sy + 9, 12, 6);
      ctx.fillStyle = "#8a6d3b";
      ctx.fillRect(sx + 3, sy + 10, 10, 4);
      break;
    case LANTERN: {
      if (z.id === "cells") t("cave_floor");
      else if (z.id === "lantern") t("sand");
      else intFloor(ctx, sx, sy, tx, ty);
      // a lit beacon-lamp, the Lightbearer motif. Soft glow, gold flame that
      // flickers on the 2-frame terrain clock.
      ctx.fillStyle = "rgba(255, 220, 0, 0.14)";
      ctx.beginPath();
      ctx.arc(sx + 8, sy + 8, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#3a2f4a"; // post
      ctx.fillRect(sx + 7, sy + 9, 2, 5);
      ctx.fillStyle = "#1a2230"; // lamp housing
      ctx.fillRect(sx + 5, sy + 3, 6, 6);
      ctx.fillStyle = f2 ? "#ffdc00" : "#ffb703"; // flame flicker
      ctx.fillRect(sx + 7, sy + 4, 2, 4);
      ctx.fillStyle = "#fff3b0";
      ctx.fillRect(sx + 7, sy + 5, 1, 2);
      break;
    }
    default:
      grassBase();
  }
}

// A warm wooden interior floor with a subtle plank grain, drawn per tile.
function intFloor(ctx: CanvasRenderingContext2D, sx: number, sy: number, tx: number, ty: number) {
  ctx.fillStyle = (tx + ty) % 2 === 0 ? "#b98a4e" : "#a97e45";
  ctx.fillRect(sx, sy, 16, 16);
  ctx.fillStyle = "rgba(107, 68, 35, 0.35)";
  ctx.fillRect(sx, sy + (ty % 2 === 0 ? 0 : 8), 16, 1);
}

type Dir = "up" | "down" | "left" | "right";

interface DialogueState {
  name: string;
  emoji: string;
  sprite?: string; // portrait on the sheets
  emotive?: boolean;
  lines: string[];
  idx: number;
  onDone?: () => void;
}

interface WildBattle {
  subject: WorldSubject;
  monster: string;
  shiny: boolean;
  echo?: boolean; // notebook echo, this one is personal
  stage: 1 | 2 | 3;
  hp: number;
  maxHp: number;
  round: number; // questions resolved so far
  phase: "strike" | "question" | "reveal" | "victory";
  strike?: StrikeId;
  question?: PublicQuestion;
  result?: { correct: boolean; correctAnswer: string; workedSolution: string; newCapture?: boolean };
  guarded: boolean; // breather stock: absorbs the next miss
  breatherBonus?: boolean; // Blank: composure pays +1 on the next hit
  fogCleared?: boolean; // Whisper: breather lifts the fog for the next question
  captured: boolean;
  boss?: MiniBoss;
  bark?: string; // the boss speaks between rounds, never over a question
  keystoneKey?: string; // Undercroft keystone: wrong answers cost +1 ❤
  isFront?: boolean; // the weekly Fog Front
  tileKey?: string; // Old Campus: clearing converts this tile for good
}

interface TrainerBattle {
  npc: Npc;
  battle: NpcBattle;
  questions: PublicQuestion[];
  bySubject: WorldSubject[];
  idx: number;
  correct: number;
  phase: "question" | "reveal" | "end";
  result?: { correct: boolean; correctAnswer: string; workedSolution: string };
  won?: boolean;
}

// per-device quest progress (steps live client-side; rewards verify server-side)
interface QuestProgressStore {
  active: Record<string, number>;
  signs: string[];
}
function loadQuestStore(): QuestProgressStore {
  if (typeof window === "undefined") return { active: {}, signs: [] };
  try {
    const raw = localStorage.getItem("ff_quest_state");
    if (raw) return JSON.parse(raw) as QuestProgressStore;
  } catch {
    // corrupted store, start fresh
  }
  return { active: {}, signs: [] };
}

export function AdventureGame({
  subjects,
  cleared: initialCleared,
  story: initialStory,
  starter: initialStarter,
  beaten: initialBeaten,
  underCleared: initialUnder,
  campusCleared: initialCampus,
  questsDone: initialQuests,
  front,
  echoBySubject,
  examWeek,
  hero: initialHero,
}: {
  subjects: WorldSubject[];
  cleared: string[];
  story: string[];
  starter: string | null;
  beaten: string[];
  underCleared: string[];
  campusCleared: string[];
  questsDone: string[];
  front: { key: string; species: string; place: string } | null;
  echoBySubject: Record<string, string>;
  examWeek: boolean;
  hero: string | null;
}) {
  const router = useRouter();
  const hudState = useHud();
  const mounted = useSyncExternalStore(noopSub, clientTrue, serverFalse);
  const viewStr = useSyncExternalStore(subscribeView, viewSnapshot, viewServer);
  const [viewCols, viewRows] = viewStr.split("x").map(Number);

  const [story, setStory] = useState<Set<string>>(new Set(initialStory));
  const [cleared, setCleared] = useState<Set<string>>(new Set(initialCleared));
  const [starter, setStarter] = useState<string | null>(initialStarter);
  const [heroId, setHeroId] = useState<string | null>(initialHero);
  const [hearts, setHearts] = useState(MAX_HEARTS);
  const [wins, setWins] = useState(0);
  const [zoneId, setZoneId] = useState("hub");
  const [toast, setToast] = useState<string | null>(null);
  const [dialogue, setDialogue] = useState<DialogueState | null>(null);
  const [battle, setBattle] = useState<WildBattle | null>(null);
  const [trainer, setTrainer] = useState<TrainerBattle | null>(null);
  const [gym, setGym] = useState<WorldSubject | null>(null);
  const [gymState, setGymState] = useState<{
    questions: PublicQuestion[];
    idx: number;
    answers: Record<string, string>;
    outcome: { correct: number; cleared: boolean } | null;
  } | null>(null);
  const [busy, setBusy] = useState(false);
  // Grunts without a story beat are re-fightable across sessions but stand
  // down once beaten within one.
  const [beatenNpcs, setBeatenNpcs] = useState<Set<string>>(new Set());
  const [onboard, setOnboard] = useState<"intro" | "hero" | "pick" | "done" | null>(
    !initialStory.includes("starter") ? "intro" : initialHero ? null : "hero"
  );
  const [beaten, setBeaten] = useState<Set<string>>(new Set(initialBeaten));
  const [underCleared, setUnderCleared] = useState<Set<string>>(new Set(initialUnder));
  const [campusCleared, setCampusCleared] = useState<Set<string>>(new Set(initialCampus));
  const [questsDone, setQuestsDone] = useState<Set<string>>(new Set(initialQuests));
  const [questStore, setQuestStore] = useState<QuestProgressStore>(loadQuestStore);
  const [questLogOpen, setQuestLogOpen] = useState(false);
  const [duelHallOpen, setDuelHallOpen] = useState(false);
  const [guruOpen, setGuruOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [wipeLetter, setWipeLetter] = useState<{ stem: string; solution: string } | null>(null);
  const rungRef = useRef<Record<string, string[]>>({});
  const [stonesOpen, setStonesOpen] = useState<Set<string>>(new Set());
  const capToastRef = useRef(false);
  useEffect(() => {
    try {
      localStorage.setItem("ff_quest_state", JSON.stringify(questStore));
    } catch {
      // storage unavailable, session-only progress
    }
  }, [questStore]);

  // Device-local test switch: `?unlock=1` (persists) opens every zone so the
  // owner can walk the whole map while testing. Server-side progression is
  // untouched, so real players are unaffected. `?unlock=0` clears it.
  const [unlockAll] = useState(() => {
    if (typeof window === "undefined") return false;
    const p = new URLSearchParams(window.location.search).get("unlock");
    if (p === "1") localStorage.setItem("studylah_unlock", "1");
    if (p === "0") localStorage.removeItem("studylah_unlock");
    return localStorage.getItem("studylah_unlock") === "1";
  });

  const region = useMemo(
    () =>
      buildRegion(subjects, {
        cleared,
        story,
        beaten,
        underCleared,
        campusCleared,
        front,
        examWeek,
        unlockAll,
      }),
    [subjects, cleared, story, beaten, underCleared, campusCleared, front, examWeek, unlockAll]
  );
  const zone = region.zones[zoneId] ?? region.zones[region.startZone];

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const zoneRef = useRef<Zone>(zone);
  const tilesetRef = useRef<Record<number, HTMLCanvasElement>[] | null>(null);
  const sheetsRef = useRef<Sheets | null>(null);
  const ghostVariantRef = useRef<string>("none");
  const heroRef = useRef<string>("jun");
  // Gugu trails the hero smoothly: a breadcrumb of the hero's recent SUB-TILE
  // positions (tile units). The companion is drawn at a fixed path-distance
  // behind, interpolated, so it glides one step back and never snaps/blocks.
  const trailRef = useRef<{ x: number; y: number; facing: Dir }[]>([]);
  const guguFacingRef = useRef<Dir>("down");
  const levelRef = useRef(1);
  const clearedRef = useRef<Set<string>>(new Set(initialCleared));
  const storyRef = useRef<Set<string>>(new Set(initialStory));
  const npcFacingRef = useRef<Record<string, Dir>>({});
  const viewRef = useRef({ cols: viewCols, rows: viewRows });
  const modeRef = useRef<"walk" | "ui">("walk");
  const scarfRef = useRef<string | undefined>(undefined);
  const player = useRef({
    tx: zone.start.x,
    ty: zone.start.y,
    fromX: zone.start.x,
    fromY: zone.start.y,
    facing: "up" as Dir,
    moving: false,
    t: 0,
  });
  const dirRef = useRef<Dir | null>(null);
  const queues = useRef<Record<string, PublicQuestion[]>>({});

  useEffect(() => {
    zoneRef.current = zone;
  }, [zone]);
  useEffect(() => {
    viewRef.current = { cols: viewCols, rows: viewRows };
  }, [viewCols, viewRows]);
  // No long-press selection/callout anywhere in the game.
  useEffect(() => {
    const onCtx = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (t?.closest('[data-testid="fog-frontier"]')) e.preventDefault();
    };
    document.addEventListener("contextmenu", onCtx);
    return () => document.removeEventListener("contextmenu", onCtx);
  }, []);

  // The game owns the screen: freeze the page behind it (no webpage scroll).
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prev = [html.style.overflow, body.style.overflow, body.style.overscrollBehavior] as const;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";
    return () => {
      html.style.overflow = prev[0];
      body.style.overflow = prev[1];
      body.style.overscrollBehavior = prev[2];
    };
  }, []);
  useEffect(() => {
    scarfRef.current = starter ? starterById(starter)?.colour : undefined;
    // champions walk the frontier in gold
    ghostVariantRef.current = story.has("championship") ? "gold" : starter ?? "none";
  }, [starter, story]);
  useEffect(() => {
    levelRef.current = hudState?.level ?? 1;
  }, [hudState]);
  useEffect(() => {
    heroRef.current = heroId ?? "jun";
  }, [heroId]);
  useEffect(() => {
    clearedRef.current = cleared;
  }, [cleared]);
  useEffect(() => {
    storyRef.current = story;
  }, [story]);
  // the original sprite sheets load once; until then the procedural art draws
  useEffect(() => {
    void loadSheets().then((sh) => {
      sheetsRef.current = sh;
    });
  }, []);
  const uiOpen = Boolean(dialogue || battle || trainer || gym || onboard || duelHallOpen || guruOpen || questLogOpen || mapOpen);
  useEffect(() => {
    modeRef.current = uiOpen ? "ui" : "walk";
    if (uiOpen) dirRef.current = null;
  }, [uiOpen]);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 3000);
  }, []);

  // Exam Week Mode: the game steps back, the greeting says so, once.
  // (queueMicrotask keeps the strict no-sync-setState-in-effect rule happy.)
  useEffect(() => {
    if (!examWeek) return;
    queueMicrotask(() =>
      showToast(COPY.examGreetings[Math.floor(Math.random() * COPY.examGreetings.length)])
    );
  }, [examWeek, showToast]);

  // ── question supply ──────────────────────────────────────────────────────
  const fetchQueue = useCallback(
    async (s: WorldSubject, hint = false): Promise<PublicQuestion[]> => {
      const key = `${s.level}/${s.slug}${hint ? ":hint" : ""}`;
      if (queues.current[key]?.length) return queues.current[key];
      try {
        const res = await fetch(
          `/api/account/game/questions?level=${s.level}&slug=${s.slug}&count=10${hint ? "&hint=1" : ""}`,
          { credentials: "include" }
        );
        if (!res.ok) return [];
        const data = (await res.json()) as { questions: PublicQuestion[] };
        queues.current[key] = data.questions;
        return data.questions;
      } catch {
        return [];
      }
    },
    []
  );

  const drawQuestions = useCallback(
    async (n: number, subject: WorldSubject | null): Promise<{ qs: PublicQuestion[]; from: WorldSubject[] }> => {
      // subject battles pull from one queue; mixed battles round-robin every
      // owned subject (the championship's "no theme, no mercy").
      const pool = subject ? [subject] : subjects;
      const lists = await Promise.all(pool.map((s) => fetchQueue(s)));
      const qs: PublicQuestion[] = [];
      const from: WorldSubject[] = [];
      let i = 0;
      while (qs.length < n) {
        const li = i % pool.length;
        const q = lists[li].shift();
        i++;
        if (q) {
          qs.push(q);
          from.push(pool[li]);
        } else if (lists.every((l) => l.length === 0)) {
          break;
        }
      }
      return { qs, from };
    },
    [subjects, fetchQueue]
  );

  const gradeAnswer = useCallback(
    async (
      subject: WorldSubject,
      questionId: string,
      answer: string,
      species?: string
    ): Promise<{ correct: boolean; correctAnswer: string; workedSolution: string; newCapture?: boolean; game: FxGame | null } | null> => {
      try {
        const res = await fetch("/api/account/game/answer", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ level: subject.level, slug: subject.slug, questionId, answer, species }),
        });
        if (!res.ok) return null;
        return (await res.json()) as {
          correct: boolean;
          correctAnswer: string;
          workedSolution: string;
          newCapture?: boolean;
          game: FxGame | null;
        };
      } catch {
        return null;
      }
    },
    []
  );

  const postBeat = useCallback(
    async (beat: string, choice?: string) => {
      try {
        const res = await fetch("/api/account/game/story", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ beat, choice }),
        });
        if (res.ok) {
          const data = (await res.json()) as { game: FxGame | null };
          emitGame(data.game, { x: window.innerWidth / 2, y: window.innerHeight * 0.3 });
        }
      } catch {
        // offline, the beat replays next time, idempotent server-side
      }
      setStory((prev) => new Set(prev).add(beat));
    },
    []
  );

  // ── movement + world interaction ─────────────────────────────────────────
  const blackout = useCallback(() => {
    setBattle(null);
    setTrainer(null);
    setHearts(MAX_HEARTS);
    const hub = region.zones[region.startZone];
    setZoneId(region.startZone);
    player.current.tx = hub.start.x;
    player.current.ty = hub.start.y;
    player.current.fromX = hub.start.x;
    player.current.fromY = hub.start.y;
    player.current.moving = false;
    trailRef.current = [];
    showToast(`💫 ${COPY.wipe}`);
  }, [region, showToast]);

  const openWild = useCallback(
    async (
      s: WorldSubject,
      opts: {
        species?: string;
        stage?: 1 | 2 | 3;
        hp?: number;
        echo?: boolean;
        boss?: MiniBoss;
        keystoneKey?: string;
        isFront?: boolean;
        tileKey?: string;
      } = {}
    ) => {
      const q = await fetchQueue(s, opts.boss?.modifier === "fog_option");
      if (!q.length) return;
      const shiny = !opts.boss && !opts.isFront && Math.random() < 1 / 16;
      emitFx({ type: shiny ? "shiny" : "encounter" });
      if (shiny) showToast(COPY.shiny);
      if (opts.echo) showToast(COPY.echoSpawn);
      const stage = opts.stage ?? stageForLevel(levelRef.current);
      const hp = opts.hp ?? hpForStage(stage);
      setBattle({
        subject: s,
        monster: opts.species ?? WILD[Math.floor(Math.random() * WILD.length)],
        shiny,
        echo: opts.echo,
        stage,
        hp,
        maxHp: hp,
        round: 0,
        phase: "strike",
        guarded: false,
        captured: false,
        boss: opts.boss,
        bark: opts.boss ? opts.boss.reveal : undefined,
        keystoneKey: opts.keystoneKey,
        isFront: opts.isFront,
        tileKey: opts.tileKey,
      });
    },
    [fetchQueue, showToast]
  );

  const startTrainer = useCallback(
    async (npc: Npc, b: NpcBattle) => {
      const subject = b.mixed ? null : zoneRef.current.encounter ?? subjects[0] ?? null;
      const { qs, from } = await drawQuestions(b.questions, subject);
      if (qs.length < b.questions) {
        showToast("Not enough fresh questions here right now, try again shortly.");
        return;
      }
      setTrainer({ npc, battle: b, questions: qs, bySubject: from, idx: 0, correct: 0, phase: "question" });
    },
    [drawQuestions, subjects, showToast]
  );

  const onArrive = useCallback(
    (tx: number, ty: number) => {
      const z = zoneRef.current;
      const tile = z.grid[ty]?.[tx];
      // A portal can sit on ANY tile, portal pads, building DOORs (into the
      // furnished interiors), and the interior exit MAT. Locked gates never
      // get this far (movement blocks them with their own message).
      const p = z.portals.find((pt) => pt.x === tx && pt.y === ty);
      if (p) {
        if (!p.locked) {
          const to = region.zones[p.toZone];
          if (to) {
            setZoneId(p.toZone);
            player.current.tx = p.toX;
            player.current.ty = p.toY;
            player.current.fromX = p.toX;
            player.current.fromY = p.toY;
            player.current.moving = false;
            trailRef.current = []; // don't streak Gugu across the new zone
            showToast(`, ${to.name}, `);
            emitFx({ type: "blip" });
          }
        }
        return;
      }
      if (tile === TILE.DOOR && z.gym) {
        if (z.gym.x === tx && z.gym.y === ty) {
          setGym({ level: z.gym.level, slug: z.gym.slug, name: z.gym.name, short: z.gym.short, emoji: z.gym.emoji, family: z.gym.family });
          setGymState(null);
          setQuestStore((prev) =>
            prev.active.shortcut !== undefined && prev.active.shortcut < 1
              ? { ...prev, active: { ...prev.active, shortcut: 1 } }
              : prev
          );
        }
        return;
      }
      const encTiles = z.encounterTiles ?? [TILE.TALL];
      if (encTiles.includes(tile) && (z.encounter || z.mixed)) {
        const rate = (z.encounterRate ?? ENCOUNTER) * (examWeek ? 0.5 : 1);
        if (Math.random() < rate) {
          const subject = z.mixed
            ? z.mixed[Math.floor(Math.random() * z.mixed.length)]
            : z.encounter!;
          const subjKey = `${subject.level}/${subject.slug}`;
          const echoSpecies = echoBySubject[subjKey];
          const isEcho = Boolean(echoSpecies) && z.id !== "campus" && Math.random() < 0.25;
          const table = z.table ?? loreFor(subject.family).route;
          const species = isEcho ? echoSpecies : rollSpecies(table, 1 + Math.floor(Math.random() * 100));
          void openWild(subject, {
            species,
            stage: z.id === "campus" ? 3 : undefined,
            echo: isEcho,
            tileKey: z.respawn === false ? `${tx}-${ty}` : undefined,
          });
        }
      }
    },
    [region, openWild, showToast, examWeek, echoBySubject]
  );

  const npcAt = useCallback((x: number, y: number): Npc | undefined => {
    return zoneRef.current.npcs.find((n) => n.x === x && n.y === y);
  }, []);

  // ── quest plumbing ───────────────────────────────────────────────────────
  const acceptQuest = useCallback((quest: QuestDef) => {
    setQuestStore((prev) => ({ ...prev, active: { ...prev.active, [quest.id]: 0 } }));
  }, []);

  const turnInQuest = useCallback(
    async (npc: Npc, quest: QuestDef) => {
      try {
        const res = await fetch("/api/account/game/quest", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: quest.id }),
        });
        const data = (await res.json()) as { done?: boolean; hint?: string; game?: FxGame | null };
        if (!data.done) {
          showToast(data.hint ?? quest.progress);
          return;
        }
        emitGame(data.game ?? null, { x: window.innerWidth / 2, y: window.innerHeight * 0.3 });
        setQuestsDone((prev) => new Set(prev).add(quest.id));
        setQuestStore((prev) => {
          const active = { ...prev.active };
          delete active[quest.id];
          return { ...prev, active };
        });
        setDialogue({
          name: npc.name,
          emoji: npc.emoji,
          sprite: npc.sprite,
          emotive: true,
          lines: quest.done,
          idx: 0,
        });
      } catch {
        showToast(COPY.serverDown);
      }
    },
    [showToast]
  );

  // A button: advance dialogue, or interact with what you're facing.
  const handleA = useCallback(() => {
    emitFx({ type: "blip" });
    if (dialogue) {
      setDialogue((d) => {
        if (!d) return null;
        if (d.idx < d.lines.length - 1) return { ...d, idx: d.idx + 1 };
        d.onDone?.();
        return null;
      });
      return;
    }
    if (modeRef.current !== "walk") return;
    const p = player.current;
    const fx = p.tx + (p.facing === "left" ? -1 : p.facing === "right" ? 1 : 0);
    const fy = p.ty + (p.facing === "up" ? -1 : p.facing === "down" ? 1 : 0);
    const z = zoneRef.current;

    // signposts, readable, and Old Tan's quest counts them
    const sign = z.signs?.find((sg) => sg.x === fx && sg.y === fy);
    if (sign) {
      const signKey = `${z.id}:${fx}-${fy}`;
      setQuestStore((prev) => {
        if (prev.active.signs === undefined || prev.signs.includes(signKey)) return prev;
        return {
          ...prev,
          signs: [...prev.signs, signKey],
          active: { ...prev.active, signs: prev.active.signs + 1 },
        };
      });
      setDialogue({ name: "Signpost", emoji: "🪧", lines: [sign.text], idx: 0 });
      return;
    }

    const npc = npcAt(fx, fy);
    if (!npc) {
      // the guardian's round, standing with it counts
      if (questStore.active.guardianround !== undefined && z.gym && cleared.has(`${z.gym.level}/${z.gym.slug}`)) {
        const gx = z.gym.x + 2;
        const gy = z.gym.y + 1;
        if (Math.abs(fx - gx) <= 1 && Math.abs(fy - gy) <= 1) {
          setQuestStore((prev) => ({ ...prev, active: { ...prev.active, guardianround: 1 } }));
          setDialogue({
            name: "The Guardian",
            emoji: "🦌",
            lines: ["(It looks at the beacon. Then at you. Then walks on, satisfied about something.)"],
            idx: 0,
          });
          return;
        }
      }
      return;
    }

    // echo stones, the Undercroft's puzzle
    if (npc.stone) {
      const order = z.stoneOrder ?? [];
      const rung = rungRef.current[z.id] ?? [];
      const next = [...rung, npc.stone];
      const ok = order.slice(0, next.length).every((o, ix) => o === next[ix]);
      if (!ok) {
        rungRef.current[z.id] = [];
        showToast("The notes scatter. The stones reset, unbothered.");
        return;
      }
      rungRef.current[z.id] = next;
      emitFx({ type: "blip" });
      if (next.length >= order.length) {
        setStonesOpen((prev) => new Set(prev).add(z.id));
        showToast("🎵 The third note lands, the keystone door grinds open.");
      } else {
        showToast(`🎵 The ${npc.stone} stone sings. ${next.length}/${order.length}.`);
      }
      return;
    }

    // the Undercroft keystone
    if (npc.keystone) {
      if (!stonesOpen.has(z.id)) {
        setDialogue({ name: npc.name, emoji: npc.emoji, sprite: npc.sprite, lines: npc.lines, idx: 0 });
        return;
      }
      const ks = npc.keystone;
      const subj = subjects.find((su) => su.level === ks.level && su.slug === ks.slug);
      if (subj) {
        void openWild(subj, { species: ks.species, stage: 2, hp: 4, keystoneKey: `${ks.level}/${ks.slug}` });
      }
      return;
    }

    // the weekly Fog Front + the Order's mini-bosses: dialogue, then battle
    if (npc.front || npc.boss) {
      const subj = npc.front
        ? subjects.find((su) => su.level === npc.front!.level && su.slug === npc.front!.slug)
        : zoneRef.current.encounter ?? subjects[0];
      const boss = npc.boss ? bossById(npc.boss) : undefined;
      setDialogue({
        name: npc.name,
        emoji: npc.emoji,
        sprite: npc.sprite,
        lines: boss ? boss.intro : npc.lines,
        idx: 0,
        onDone: () => {
          if (!subj) return;
          if (boss) {
            void openWild(subj, { species: boss.species, stage: boss.stage, hp: boss.hp, boss });
          } else if (npc.front) {
            void openWild(subj, {
              species: npc.front.species,
              stage: Math.max(2, stageForLevel(levelRef.current)) as 2 | 3,
              hp: 5,
              isFront: true,
            });
          }
        },
      });
      return;
    }
    // the character turns to face you, small thing, big life
    const OPPOSITE: Record<Dir, Dir> = { up: "down", down: "up", left: "right", right: "left" };
    npcFacingRef.current[npc.id] = OPPOSITE[p.facing];
    const beatDone = npc.battle?.beat ? story.has(npc.battle.beat) : beatenNpcs.has(npc.id);
    const willBattle = npc.battle && !beatDone;

    // Rin the Duel Warden opens the hall
    if (npc.id === "duelwarden") {
      setDialogue({
        name: npc.name,
        emoji: npc.emoji,
        sprite: npc.sprite,
        lines: npc.lines,
        idx: 0,
        onDone: () => setDuelHallOpen(true),
      });
      return;
    }

    // Finding Murk in the Sunken Cells IS the beat, no battle, just the truth.
    if (npc.id === "murkcells") {
      setDialogue({
        name: npc.name,
        emoji: npc.emoji,
        sprite: npc.sprite,
        lines: npc.lines,
        idx: 0,
        onDone: () => {
          void postBeat("cells");
          showToast("🕯 The names are yours to light now.");
        },
      });
      return;
    }

    // Sage of the Academy opens the Subject Gurus
    if (npc.id === "guru") {
      setDialogue({
        name: npc.name,
        emoji: npc.emoji,
        sprite: npc.sprite,
        lines: npc.lines,
        idx: 0,
        onDone: () => setGuruOpen(true),
      });
      return;
    }

    // quest-giver flow: offer → progress reminder → turn-in
    const quest = npc.quest && !npc.quest.startsWith("ninth") ? questById(npc.quest) : undefined;
    let lines = beatDone && npc.winLines ? npc.winLines : npc.lines;
    let onDone: (() => void) | undefined = () => {
      if (npc.heal) {
        setHearts(MAX_HEARTS);
        emitFx({ type: "correct" });
        showToast("❤️ Hearts restored!");
        // Nurse Fern's errand: reaching a camp keeper is the whole point
        if (npc.id.startsWith("heal:")) {
          setQuestStore((prev) =>
            prev.active.unswept !== undefined
              ? { ...prev, active: { ...prev.active, unswept: 1 } }
              : prev
          );
        }
      }
      if (willBattle && npc.battle) void startTrainer(npc, npc.battle);
    };

    if (quest && !questsDone.has(quest.id)) {
      const progress = questStore.active[quest.id];
      if (progress === undefined) {
        lines = quest.offer;
        const inner = onDone;
        onDone = () => {
          acceptQuest(quest);
          showToast(`📜 Quest accepted: ${quest.name}`);
          inner?.();
        };
      } else if (progress >= quest.target) {
        void turnInQuest(npc, quest);
        return;
      } else {
        lines = [quest.progress];
      }
    }

    // Murk's ninth lamp lives on the story route, not the quest table
    if (npc.quest === "ninth") {
      setDialogue({
        name: npc.name,
        emoji: npc.emoji,
        sprite: npc.sprite,
        lines: npc.lines,
        idx: 0,
        onDone: () => {
          void postBeat("ninth");
          showToast("🔦 The ninth lamp takes the flame. Everyone in Haven can see it.");
        },
      });
      return;
    }

    setDialogue({
      name: npc.name,
      emoji: npc.emoji,
      sprite: npc.sprite,
      emotive: beatDone,
      lines,
      idx: 0,
      onDone,
    });
  }, [
    dialogue,
    npcAt,
    story,
    beatenNpcs,
    startTrainer,
    showToast,
    questStore,
    questsDone,
    cleared,
    subjects,
    stonesOpen,
    openWild,
    acceptQuest,
    turnInQuest,
    postBeat,
  ]);

  const handleB = useCallback(() => {
    if (dialogue) {
      setDialogue((d) => {
        d?.onDone?.();
        return null;
      });
      return;
    }
    if (battle && battle.phase === "strike") {
      setBattle(null);
      showToast("You slipped away…");
    }
  }, [dialogue, battle, showToast]);

  // ── main loop ────────────────────────────────────────────────────────────
  useEffect(() => {
    tilesetRef.current = [makeTileset(0), makeTileset(1)];
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.imageSmoothingEnabled = false;

    let raf = 0;
    let last = performance.now();
    let animClock = 0;

    const step = (now: number) => {
      const dt = now - last;
      last = now;
      const p = player.current;
      const z = zoneRef.current;

      if (modeRef.current === "walk") {
        if (!p.moving && dirRef.current) {
          const d = dirRef.current;
          p.facing = d;
          const nx = p.tx + (d === "left" ? -1 : d === "right" ? 1 : 0);
          const ny = p.ty + (d === "up" ? -1 : d === "down" ? 1 : 0);
          const tile = z.grid[ny]?.[nx] ?? TILE.TREE;
          const blockedByNpc = z.npcs.some((n) => n.x === nx && n.y === ny);
          const portal = tile === PORTAL ? z.portals.find((pt) => pt.x === nx && pt.y === ny) : undefined;
          if (portal?.locked) {
            // locked gates explain themselves instead of opening
            dirRef.current = null;
            window.dispatchEvent(new CustomEvent("ff:locked", { detail: portal.locked }));
          } else if (walkable(tile) && !blockedByNpc) {
            p.fromX = p.tx;
            p.fromY = p.ty;
            p.tx = nx;
            p.ty = ny;
            p.moving = true;
            p.t = 0;
          }
        }
        if (p.moving) {
          p.t += dt / MOVE_MS;
          if (p.t >= 1) {
            p.t = 1;
            p.moving = false;
            onArrive(p.tx, p.ty);
          }
        }
        animClock += dt;
      }

      const { cols, rows } = viewRef.current;
      if (canvas.width !== cols * TS || canvas.height !== rows * TS) {
        canvas.width = cols * TS;
        canvas.height = rows * TS;
        ctx.imageSmoothingEnabled = false;
      }

      const rx = p.moving ? p.fromX + (p.tx - p.fromX) * p.t : p.tx;
      const ry = p.moving ? p.fromY + (p.ty - p.fromY) * p.t : p.ty;
      // small zones sit centred in an endless forest instead of a void
      const camX =
        z.width <= cols
          ? (z.width - cols) / 2
          : Math.max(0, Math.min(rx - cols / 2 + 0.5, z.width - cols));
      const camY =
        z.height <= rows
          ? (z.height - rows) / 2
          : Math.max(0, Math.min(ry - rows / 2 + 0.5, z.height - rows));

      const f2 = Math.floor(now / 550) % 2; // 2-frame terrain animation
      const f4 = Math.floor(now / 170) % 4; // 4-frame building animation
      const ts = tilesetRef.current![f2];
      const sh = sheetsRef.current;
      const x0 = Math.floor(camX);
      const y0 = Math.floor(camY);
      for (let vy = -1; vy <= rows; vy++) {
        for (let vx = -1; vx <= cols; vx++) {
          const tx = x0 + vx;
          const ty = y0 + vy;
          // outside the map = forest, so the screen is always fully drawn
          const tile = z.grid[ty]?.[tx] ?? TILE.TREE;
          const sx = Math.round((tx - camX) * TS);
          const sy = Math.round((ty - camY) * TS);
          if (sh) {
            drawSheetTile(ctx, sh, z, tile, tx, ty, sx, sy, f2, f4, p.tx, p.ty);
          } else {
            ctx.drawImage(ts[tile] ?? ts[TILE.GRASS], sx, sy);
          }
          if (tile === TILE.DOOR && z.gym && z.gym.x === tx && z.gym.y === ty) {
            ctx.font = "9px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(z.gym.emoji, sx + TS / 2, sy - 1);
          }
        }
      }
      // Guardians roam beside conquered gyms; Clarity keeps the Summit.
      if (sh) {
        const guardianSpot =
          z.gym && clearedRef.current.has(`${z.gym.level}/${z.gym.slug}`)
            ? { name: guardianFor(z.gym.family), x: z.gym.x + 2, y: z.gym.y + 1 }
            : z.id === "summit" && storyRef.current.has("championship")
            ? { name: "clarity" as GuardianName, x: 5, y: 3 }
            : null;
        if (guardianSpot) {
          const gsx = Math.round((guardianSpot.x - camX) * TS);
          const gsy = Math.round((guardianSpot.y - camY) * TS);
          if (gsx > -32 && gsy > -32 && gsx < canvas.width && gsy < canvas.height) {
            drawShadow(ctx, gsx, gsy);
            const gseq = [0, 1, 2, 1] as const;
            const gcell = gseq[Math.floor(now / 300) % 4] as 0 | 1 | 2;
            const [gwx, gwy] = guardianWalkerRect(guardianSpot.name, gcell);
            ctx.drawImage(sh.guardianWalkers, gwx, gwy, 16, 16, gsx, gsy, 16, 16);
          }
        }
      }
      // NPCs, real walker sprites once the sheets are in
      ctx.font = "12px sans-serif";
      ctx.textAlign = "center";
      for (const n of z.npcs) {
        const sx = Math.round((n.x - camX) * TS);
        const sy = Math.round((n.y - camY) * TS);
        if (sx < -TS || sy < -TS * 2 || sx > canvas.width || sy > canvas.height) continue;
        drawShadow(ctx, sx, sy);
        if (sh && n.monster) {
          const mseq = [0, 1, 2, 1] as const;
          const mcell = mseq[Math.floor(now / 320) % 4];
          ctx.drawImage(sh.monsters, monsterBlockX(n.monster) + mcell * 16, 48, 16, 16, sx, sy, 16, 16);
        } else if (sh) {
          drawWalker(ctx, sh.npcs, npcBlockX(n.sprite as NpcSprite), npcFacingRef.current[n.id] ?? "down", 1, sx, sy);
        } else {
          ctx.fillText(n.emoji, sx + TS / 2, sy + TS - 3);
        }
      }
      // ── Gugu, the companion, smooth path-follow, half size ──────────────
      // Record the hero's sub-tile position each frame; draw Gugu at a fixed
      // path-distance behind, interpolated along the trail. This keeps a steady
      // one-step gap that glides around corners instead of snapping tile to
      // tile (which looked like it was being "blocked").
      const trail = trailRef.current;
      const head = trail[trail.length - 1];
      if (!head || Math.abs(head.x - rx) > 0.02 || Math.abs(head.y - ry) > 0.02) {
        trail.push({ x: rx, y: ry, facing: p.facing });
        if (trail.length > 64) trail.shift();
      }
      const GAP = 1.15; // tiles behind the hero
      let gx = trail[0]?.x ?? rx;
      let gy = trail[0]?.y ?? ry;
      let gFacing = guguFacingRef.current;
      {
        let need = GAP;
        for (let i = trail.length - 1; i > 0; i--) {
          const a = trail[i];
          const b = trail[i - 1];
          const seg = Math.hypot(a.x - b.x, a.y - b.y);
          if (seg >= need) {
            const t = seg === 0 ? 0 : need / seg;
            gx = a.x + (b.x - a.x) * t;
            gy = a.y + (b.y - a.y) * t;
            // face the way it's walking (toward the newer point a)
            const dx = a.x - gx;
            const dy = a.y - gy;
            if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01) {
              gFacing = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : dy > 0 ? "down" : "up";
              guguFacingRef.current = gFacing;
            }
            break;
          }
          need -= seg;
        }
      }
      {
        const gx2 = (gx - camX) * TS;
        const gy2 = (gy - camY) * TS;
        drawShadow(ctx, Math.round(gx2 + 4), Math.round(gy2 + 8), 0.5);
        const gseq = [0, 1, 2, 1];
        const moving = trail.length > 1 && (Math.abs(gx - rx) > 0.03 || Math.abs(gy - ry) > 0.03);
        const gwf = moving ? gseq[Math.floor(animClock / 140) % 4] : 1;
        if (sh) {
          // Half scale (50% smaller), centred on the tile with feet on the ground.
          ctx.save();
          ctx.imageSmoothingEnabled = false;
          ctx.translate(Math.round(gx2) + 4, Math.round(gy2) + 8);
          ctx.scale(0.5, 0.5);
          drawWalker(ctx, sh.player, ghostBlockX(ghostVariantRef.current), gFacing, gwf, 0, 0);
          drawAccessories(ctx, sh.accessories, levelRef.current, gFacing, gwf, 0, 0);
          ctx.restore();
        } else {
          ctx.save();
          ctx.translate(Math.round(gx2) + 4, Math.round(gy2) + 4);
          ctx.scale(0.5, 0.5);
          drawGhost(ctx, 0, 0, gFacing, 0, scarfRef.current);
          ctx.restore();
        }
      }

      // the researcher, the student's own hero, leads
      const pfx = Math.round((rx - camX) * TS);
      const pfy = Math.round((ry - camY) * TS);
      drawShadow(ctx, pfx, pfy);
      {
        const seq = [0, 1, 2, 1];
        const wf = p.moving ? seq[Math.floor(animClock / 140) % 4] : 1;
        if (sh) {
          drawWalker(ctx, sh.heroes, heroBlockX(heroRef.current), p.facing, wf, pfx, pfy);
        } else {
          drawHero(ctx, pfx, pfy, p.facing, wf, heroRef.current);
        }
      }

      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    const KEYMAP: Record<string, Dir> = {
      ArrowUp: "up",
      ArrowDown: "down",
      ArrowLeft: "left",
      ArrowRight: "right",
      w: "up",
      s: "down",
      a: "left",
      d: "right",
    };
    const onDown = (e: KeyboardEvent) => {
      const d = KEYMAP[e.key];
      if (d) {
        e.preventDefault();
        dirRef.current = d;
      }
    };
    const onUp = (e: KeyboardEvent) => {
      if (KEYMAP[e.key] === dirRef.current) dirRef.current = null;
    };
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, [onArrive]);

  // locked-gate toasts come from inside the rAF loop via a window event
  useEffect(() => {
    const onLocked = (e: Event) => showToast(`🔒 ${(e as CustomEvent<string>).detail}`);
    window.addEventListener("ff:locked", onLocked);
    return () => window.removeEventListener("ff:locked", onLocked);
  }, [showToast]);

  // action keys (separate effect: depends on UI state handlers)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "e" || e.key === "z") {
        e.preventDefault();
        handleA();
      } else if (e.key === "Escape" || e.key === "x") {
        e.preventDefault();
        handleB();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleA, handleB]);

  const setDir = useCallback((d: Dir) => {
    dirRef.current = d;
  }, []);
  const clearDir = useCallback(() => {
    dirRef.current = null;
  }, []);

  // ── wild battle actions ──────────────────────────────────────────────────
  const chooseStrike = useCallback(
    async (id: StrikeId) => {
      if (!battle || battle.phase !== "strike" || busy) return;
      emitFx({ type: "blip" });
      const boss = battle.boss;
      if (id === "guard") {
        if (battle.guarded) return;
        setBattle({
          ...battle,
          guarded: true,
          breatherBonus: boss?.modifier === "jab_lock" ? true : battle.breatherBonus,
          fogCleared: boss?.modifier === "fog_option" ? true : battle.fogCleared,
          bark: boss ? boss.onBreather : battle.bark,
        });
        showToast("You steady your breathing, the next miss won't touch your hearts.");
        return;
      }
      setBusy(true);
      const q = (await fetchQueue(battle.subject, boss?.modifier === "fog_option")).shift();
      setBusy(false);
      if (!q) {
        setBattle(null);
        showToast("The monster melts into the fog, no questions left here today.");
        return;
      }
      setBattle((b) => (b ? { ...b, phase: "question", strike: id, question: q } : b));
    },
    [battle, busy, fetchQueue, showToast]
  );

  const finishSpecialBattle = useCallback(
    (b: WildBattle) => {
      // persistence + world reaction for the season battles
      if (b.boss) {
        void fetch("/api/account/game/quest", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: `boss:${b.boss.id}` }),
        }).then(async (r) => {
          if (r.ok) emitGame(((await r.json()) as { game: FxGame | null }).game);
        });
        setBeaten((prev) => new Set(prev).add(b.boss!.id));
      } else if (b.isFront) {
        void fetch("/api/account/game/quest", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: "front" }),
        }).then(async (r) => {
          if (r.ok) emitGame(((await r.json()) as { game: FxGame | null }).game);
        });
        setBeaten((prev) => new Set(prev).add("front"));
        showToast(FRONT_CLEARED[Math.floor(Math.random() * FRONT_CLEARED.length)]);
      } else if (b.keystoneKey) {
        void fetch("/api/account/game/quest", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: `under:${b.keystoneKey}` }),
        }).then(async (r) => {
          if (r.ok) emitGame(((await r.json()) as { game: FxGame | null }).game);
        });
        setUnderCleared((prev) => new Set(prev).add(b.keystoneKey!));
        showToast("🔦 An under-beacon glows, the fog on the route above thins.");
      }
      if (b.tileKey) {
        void fetch("/api/account/game/quest", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: `campus:${b.tileKey}` }),
        });
        setCampusCleared((prev) => new Set(prev).add(b.tileKey!));
      }
    },
    [showToast]
  );

  const bumpBattleQuests = useCallback(
    (zoneId: string) => {
      // quest hooks: wild wins count toward Study Buddies / the Fisher's Tide
      setQuestStore((prev) => {
        const next = { ...prev, active: { ...prev.active } };
        if (next.active.buddies !== undefined) next.active.buddies++;
        if (zoneId === "saltwind" && next.active.tide !== undefined) next.active.tide++;
        return next;
      });
    },
    []
  );

  const answerWild = useCallback(
    async (i: number) => {
      if (!battle || !battle.question || !battle.strike || busy) return;
      setBusy(true);
      const res = await gradeAnswer(battle.subject, battle.question.id, String(i), battle.monster);
      setBusy(false);
      if (!res) {
        showToast(COPY.questionFail);
        return;
      }
      const strike = STRIKES.find((s) => s.id === battle.strike)!;
      const boss = battle.boss;
      emitFx({ type: res.correct ? "correct" : "wrong" });
      emitGame(res.game, { x: window.innerWidth / 2, y: window.innerHeight * 0.3 });
      if ((res as { capped?: boolean }).capped && !capToastRef.current) {
        capToastRef.current = true;
        showToast(COPY.capReached);
      }
      const round = battle.round + 1;
      if (res.correct) {
        const dmg = strike.dmg + (battle.breatherBonus ? 1 : 0);
        const hp = battle.hp - dmg;
        const bark = boss ? boss.onCorrect[round % boss.onCorrect.length] : undefined;
        if (hp <= 0) {
          setWins((w) => w + 1);
          bumpBattleQuests(zoneRef.current.id);
          finishSpecialBattle(battle);
          setBattle({
            ...battle,
            hp: 0,
            round,
            phase: "victory",
            result: res,
            captured: Boolean(res.newCapture),
            breatherBonus: false,
            bark: boss ? boss.defeated[1] : undefined,
          });
        } else {
          setBattle({ ...battle, hp, round, phase: "strike", result: res, breatherBonus: false, fogCleared: false, bark });
          showToast(`💥 Hit! ${dmg} damage.`);
        }
      } else {
        const bark = boss ? boss.onWrong[round % boss.onWrong.length] : undefined;
        if (battle.guarded) {
          setBattle({ ...battle, round, phase: "reveal", result: res, guarded: false, fogCleared: false, bark });
          showToast("The breath held, no hearts lost.");
          return;
        }
        const cost = 1 + (battle.keystoneKey ? 1 : 0);
        // a missed heavy feeds the monster
        const healed = battle.strike === "power" ? Math.min(battle.maxHp, battle.hp + 1) : battle.hp;
        const left = hearts - cost;
        setHearts(Math.max(0, left));
        if (left <= 0) {
          setWipeLetter({ stem: battle.question.stem, solution: res.workedSolution });
          blackout();
        } else {
          setBattle({ ...battle, hp: healed, round, phase: "reveal", result: res, fogCleared: false, bark });
        }
      }
    },
    [battle, busy, hearts, gradeAnswer, blackout, showToast, finishSpecialBattle, bumpBattleQuests]
  );

  // ── trainer battle actions ───────────────────────────────────────────────
  const answerTrainer = useCallback(
    async (i: number) => {
      if (!trainer || trainer.phase !== "question" || busy) return;
      const q = trainer.questions[trainer.idx];
      const subject = trainer.bySubject[trainer.idx];
      setBusy(true);
      const res = await gradeAnswer(subject, q.id, String(i));
      setBusy(false);
      if (!res) {
        showToast("Connection hiccup, that one didn't count.");
        return;
      }
      emitFx({ type: res.correct ? "correct" : "wrong" });
      emitGame(res.game, { x: window.innerWidth / 2, y: window.innerHeight * 0.3 });
      const correct = trainer.correct + (res.correct ? 1 : 0);
      setTrainer({ ...trainer, correct, phase: "reveal", result: res });
    },
    [trainer, busy, gradeAnswer, showToast]
  );

  const continueTrainer = useCallback(() => {
    if (!trainer) return;
    emitFx({ type: "blip" });
    const nextIdx = trainer.idx + 1;
    if (nextIdx < trainer.questions.length) {
      setTrainer({ ...trainer, idx: nextIdx, phase: "question", result: undefined });
      return;
    }
    const won = trainer.correct >= trainer.battle.threshold;
    setTrainer({ ...trainer, phase: "end", won });
    if (won) {
      setWins((w) => w + 1);
      setBeatenNpcs((prev) => new Set(prev).add(trainer.npc.id));
      if (trainer.battle.beat) void postBeat(trainer.battle.beat);
      // Grunt Work: the defector counts his squadmates' teas going cold
      if (trainer.npc.id.startsWith("grunt:")) {
        setQuestStore((prev) =>
          prev.active.gruntwork !== undefined
            ? { ...prev, active: { ...prev.active, gruntwork: prev.active.gruntwork + 1 } }
            : prev
        );
      }
    }
  }, [trainer, postBeat]);

  const closeTrainer = useCallback(() => {
    if (!trainer) return;
    const { npc, won } = { npc: trainer.npc, won: trainer.won };
    setTrainer(null);
    if (won && npc.winLines) {
      setDialogue({
        name: npc.name,
        emoji: npc.emoji,
        sprite: npc.sprite,
        emotive: true,
        lines: npc.winLines,
        idx: 0,
      });
    }
  }, [trainer]);

  // ── gym actions (5 questions, graded as a set server-side) ──────────────
  const openGymQuestions = useCallback(async () => {
    if (!gym) return;
    const q = await fetchQueue(gym as WorldSubject);
    setGymState({
      questions: [...q].sort(() => Math.random() - 0.5).slice(0, 5),
      idx: 0,
      answers: {},
      outcome: null,
    });
  }, [gym, fetchQueue]);

  const pickGym = useCallback(
    async (i: number) => {
      if (!gym || !gymState || busy) return;
      const q = gymState.questions[gymState.idx];
      const answers = { ...gymState.answers, [q.id]: String(i) };
      if (gymState.idx < gymState.questions.length - 1) {
        setGymState({ ...gymState, answers, idx: gymState.idx + 1 });
        return;
      }
      setBusy(true);
      try {
        const res = await fetch("/api/account/game/gym", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ level: gym.level, slug: gym.slug, answers }),
        });
        const data = (await res.json()) as {
          correct: number;
          cleared: boolean;
          game: FxGame | null;
        };
        emitFx({ type: data.cleared ? "correct" : "wrong" });
        emitGame(data.game, { x: window.innerWidth / 2, y: window.innerHeight * 0.3 });
        setGymState({ ...gymState, answers, outcome: { correct: data.correct, cleared: data.cleared } });
        if (data.cleared) {
          setCleared((c) => new Set(c).add(`${gym.level}/${gym.slug}`));
          setWins((w) => w + 1);
        }
      } finally {
        setBusy(false);
      }
    },
    [gym, gymState, busy]
  );

  // ── onboarding ───────────────────────────────────────────────────────────
  const pickHero = useCallback(
    async (id: string) => {
      emitFx({ type: "correct" });
      setHeroId(id);
      // fresh onboarding continues to the spirit; returning players are done
      setOnboard((o) => (o === "hero" && story.has("starter") ? null : "pick"));
      await postBeat("hero", id);
    },
    [postBeat, story]
  );

  const pickStarter = useCallback(
    async (id: string) => {
      emitFx({ type: "correct" });
      setStarter(id);
      setOnboard("done");
      await postBeat("starter", id);
      await postBeat("intro");
    },
    [postBeat]
  );

  // ── share card ───────────────────────────────────────────────────────────
  const shareReport = useCallback(async () => {
    const W2 = 640;
    const H2 = 800;
    const cv = document.createElement("canvas");
    cv.width = W2;
    cv.height = H2;
    const c = cv.getContext("2d")!;
    c.imageSmoothingEnabled = false;
    c.fillStyle = "#161c26";
    c.fillRect(0, 0, W2, H2);
    c.fillStyle = "#ffdc00";
    for (let i = 0; i < W2; i += 32) {
      c.fillRect(i, 0, 16, 8);
      c.fillRect(i + 16, H2 - 8, 16, 8);
    }
    c.fillStyle = "#2f3a4d";
    c.fillRect(24, 24, W2 - 48, H2 - 48);
    c.fillStyle = "#161c26";
    c.fillRect(28, 28, W2 - 56, H2 - 56);
    c.save();
    c.translate(W2 / 2 - 64, 90);
    c.scale(8, 8);
    drawGhost(c, 0, 0, "down", 0, starter ? starterById(starter)?.colour : undefined);
    c.restore();
    const center = (txt: string, y: number, font: string, col: string) => {
      c.font = font;
      c.textAlign = "center";
      c.fillStyle = col;
      c.fillText(txt, W2 / 2, y);
    };
    center("FOG FRONTIER", 250, "bold 30px monospace", "#ffdc00");
    center("EXPEDITION REPORT", 282, "bold 18px monospace", "#aeb8c6");
    if (hudState) center(`LV ${hudState.level} · ${hudState.title.toUpperCase()}`, 330, "bold 20px monospace", "#eef2f7");
    center(`⚔️ Battles won today: ${wins}`, 400, "22px monospace", "#eef2f7");
    center(
      `🗓 ${new Date().toLocaleDateString("en-SG", { day: "numeric", month: "short", year: "numeric" })}`,
      440,
      "18px monospace",
      "#aeb8c6"
    );
    center("Every battle is a real exam question.", 560, "16px monospace", "#aeb8c6");
    center("STUDY HQ, studylah.education", 620, "bold 18px monospace", "#ffdc00");
    const blob: Blob | null = await new Promise((resolve) => cv.toBlob(resolve, "image/png"));
    if (!blob) return;
    const file = new File([blob], "studylah-legends-report.png", { type: "image/png" });
    const nav = navigator as Navigator & { canShare?: (d: ShareData) => boolean };
    if (nav.share && nav.canShare?.({ files: [file] })) {
      try {
        await nav.share({ files: [file], title: "StudyLah Legends expedition report" });
        return;
      } catch {
        // cancelled, fall through
      }
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "studylah-legends-report.png";
    a.click();
    URL.revokeObjectURL(url);
  }, [hudState, wins, starter]);

  // ── render ───────────────────────────────────────────────────────────────
  const m = battle ? MONSTERS[battle.monster] ?? MONSTERS.careless : null;

  if (!mounted) return null;
  return createPortal(
    <div className="fixed inset-0 z-[55] bg-night" data-testid="fog-frontier">
      {/* the world */}
      <canvas
        ref={canvasRef}
        width={viewCols * TS}
        height={viewRows * TS}
        className="h-full w-full touch-none object-cover"
        style={{ imageRendering: "pixelated" }}
        aria-label="StudyLah Legends overworld, walk with the D-pad, talk with A, grass hides wild battles"
      />

      {/* atmosphere: drifting fog + vignette (pure CSS, zero assets) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <span className="ff-fog ff-fog-a" />
        <span className="ff-fog ff-fog-b" />
      </div>
      <div className="ff-vignette pointer-events-none absolute inset-0" aria-hidden />

      {/* ── arcade HUD ─────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-1 p-1.5 pt-[max(env(safe-area-inset-top),10px)]">
        {/* SCORE */}
        <div className="min-w-0 space-y-1">
          <div className="rounded-lg border-2 border-mint/80 bg-night/85 px-2 py-1 shadow-[0_0_12px_rgba(61,220,132,0.22)] backdrop-blur">
            <p className="font-pixel text-[7px] tracking-[0.15em] text-mint">SCORE</p>
            <p className="mt-0.5 flex items-center gap-1 font-pixel text-[11px] text-accent">
              <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_6px_var(--color-accent)]" />
              {(hudState?.totalXp ?? 0).toLocaleString()}
            </p>
            <p className="mt-0.5 max-w-[92px] truncate font-pixel text-[6px] tracking-wide text-teal">
              LV {hudState?.level ?? 1} · {(hudState?.title ?? "Rookie").toUpperCase()}
            </p>
          </div>
          <SingaporeMinimap zoneId={zoneId} subjects={subjects} onOpen={() => setMapOpen(true)} />
        </div>

        {/* ROUND / current place */}
        <div className="mt-0.5 min-w-0 flex-shrink rounded-lg border-2 border-accent/70 bg-night/85 px-2 py-1 text-center shadow-[0_0_12px_rgba(255,220,0,0.18)] backdrop-blur">
          <p className="font-pixel text-[9px] leading-tight tracking-[0.1em] text-accent">{zone.name.toUpperCase()}</p>
          <p className="mt-0.5 truncate font-pixel text-[6px] tracking-widest text-teal">
            {districtForZone(zoneId, subjects).toUpperCase()}
          </p>
        </div>

        {/* LIVES + controls */}
        <div className="flex flex-col items-end gap-1">
          <div className="rounded-lg border-2 border-coral/70 bg-night/85 px-2 py-1 text-right shadow-[0_0_12px_rgba(255,107,107,0.22)] backdrop-blur">
            <p className="font-pixel text-[7px] tracking-[0.15em] text-coral">LIVES</p>
            <p className="mt-0.5 flex justify-end">
              <HeartRow current={hearts} max={MAX_HEARTS} scale={1} />
            </p>
          </div>
          <div className="pointer-events-auto flex gap-1">
            <button
              type="button"
              onClick={() => setGuruOpen(true)}
              aria-label="The Academy, study with your subject Gurus"
              className="rounded-lg border border-accent/60 bg-night/70 px-2 py-1 text-xs backdrop-blur active:border-accent"
            >
              🎓
            </button>
            <button
              type="button"
              onClick={() => setQuestLogOpen(true)}
              aria-label="Quest log"
              className="rounded-lg border border-mint/50 bg-night/70 px-2 py-1 text-xs backdrop-blur active:border-mint"
            >
              📜
            </button>
            {wins > 0 && (
              <button
                type="button"
                onClick={() => void shareReport()}
                aria-label="Share expedition report"
                className="rounded-lg border border-mint/50 bg-night/70 px-2 py-1 text-xs backdrop-blur active:border-mint"
              >
                📸
              </button>
            )}
            <button
              type="button"
              onClick={() => router.push("/account")}
              aria-label="Leave StudyLah Legends"
              className="rounded-lg border border-coral/50 bg-night/70 px-2 py-1 font-pixel text-[8px] text-body backdrop-blur active:border-coral"
            >
              EXIT
            </button>
          </div>
        </div>
      </div>

      {/* toast */}
      {toast && (
        <p
          role="status"
          className="absolute left-1/2 top-16 z-[59] w-max max-w-[85vw] -translate-x-1/2 rounded-full border border-accent/50 bg-night/90 px-4 py-2 text-center font-mono text-xs font-bold text-accent backdrop-blur"
        >
          {toast}
        </p>
      )}

      {/* PUBG-style overlay controls */}
      <div className="absolute bottom-0 left-0 touch-none p-4 pb-[max(env(safe-area-inset-bottom),16px)]">
        <div className="grid grid-cols-3 grid-rows-3" style={{ width: 156 }}>
          <span />
          <PadBtn dir="up" onPress={setDir} onRelease={clearDir} />
          <span />
          <PadBtn dir="left" onPress={setDir} onRelease={clearDir} />
          <span className="h-[52px] w-[52px]" />
          <PadBtn dir="right" onPress={setDir} onRelease={clearDir} />
          <span />
          <PadBtn dir="down" onPress={setDir} onRelease={clearDir} />
          <span />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 flex touch-none items-end gap-3 p-5 pb-[max(env(safe-area-inset-bottom),20px)]">
        <button
          type="button"
          aria-label="Cancel"
          onPointerDown={(e) => {
            e.preventDefault();
            handleB();
          }}
          className="h-14 w-14 select-none rounded-full border-[3px] border-coral/80 bg-coral/25 font-pixel text-[12px] text-coral shadow-[0_0_14px_rgba(255,107,107,0.35)] backdrop-blur active:scale-95 active:bg-coral/45"
        >
          B
        </button>
        <button
          type="button"
          aria-label="Interact"
          onPointerDown={(e) => {
            e.preventDefault();
            handleA();
          }}
          className="h-[72px] w-[72px] select-none rounded-full border-[3px] border-accent/90 bg-accent/25 font-pixel text-base text-accent shadow-[0_0_18px_rgba(255,220,0,0.4)] backdrop-blur active:scale-95 active:bg-accent/50"
        >
          A
        </button>
      </div>

      {/* dialogue */}
      {dialogue && (
        <button
          type="button"
          onClick={handleA}
          className="absolute inset-x-3 bottom-28 z-[58] flex items-start gap-3 rounded-2xl border border-violet/40 bg-night/95 p-4 text-left backdrop-blur"
        >
          {dialogue.sprite && (
            <PortraitSprite
              name={dialogue.sprite as PortraitName}
              emotive={dialogue.emotive}
              scale={1.5}
              className="rounded-lg border border-hairline bg-night-2"
            />
          )}
          <span className="min-w-0 flex-1">
            <span className="block font-pixel text-[9px] text-accent">{dialogue.name.toUpperCase()}</span>
            <span className="mt-2 block text-sm leading-relaxed text-ink">{dialogue.lines[dialogue.idx]}</span>
            <span className="mt-2 block text-right font-pixel text-[8px] text-body">
              {dialogue.idx < dialogue.lines.length - 1 ? "▼ A" : "● A"}
            </span>
          </span>
        </button>
      )}

      {/* wild battle */}
      {battle && m && (
        <Panel
          title={
            battle.boss
              ? `🌫 ${battle.boss.name}, ${battle.boss.epithet}`
              : battle.isFront
              ? "🌫 The Fog Front holds this ground"
              : battle.keystoneKey
              ? "🗿 The Keystone stirs"
              : battle.echo
              ? "🌫 A notebook echo takes shape!"
              : battle.shiny
              ? "✨ A SHINY monster appears!"
              : "⚔️ A wild monster appears!"
          }
        >
          <div className="flex items-center gap-3">
            <MonsterSprite
              species={battle.monster}
              shiny={battle.shiny}
              stage={battle.stage}
              scale={2.5}
              className={`fx-hero rounded-xl ${battle.shiny ? "drop-shadow-[0_0_12px_rgba(255,220,0,0.8)]" : ""}`}
              label={m.name}
            />
            <div className="min-w-0 flex-1">
              <p className="font-display font-bold text-ink">
                {battle.shiny && <span className="text-accent">✨ Shiny </span>}
                {m.name}
              </p>
              <p className="text-xs text-body">{battle.subject.name}</p>
            </div>
            <HeartRow current={battle.hp} max={battle.maxHp} scale={1.25} />
          </div>
          {battle.bark && (
            <p className="mt-2 rounded-lg bg-night/60 px-3 py-1.5 text-xs italic text-body">
              {battle.bark}
            </p>
          )}

          {battle.phase === "strike" && (
            <div className="mt-4 space-y-2">
              <p className="font-pixel text-[9px] text-body">
                {battle.boss?.modifier === "jab_lock" && battle.round < 2
                  ? "THE PATH IS WHITE, ONLY THE SMALLEST START IS ALLOWED"
                  : "CHOOSE YOUR STRIKE"}
              </p>
              {battle.keystoneKey && (
                <p className="text-[10px] text-coral">Undercroft rule: a miss here costs 2 ❤</p>
              )}
              {STRIKES.map((s) => {
                const locked =
                  battle.boss?.modifier === "jab_lock" && battle.round < 2 && s.id !== "jab";
                return (
                  <button
                    key={s.id}
                    type="button"
                    disabled={busy || locked || (s.id === "guard" && battle.guarded)}
                    onClick={() => void chooseStrike(s.id)}
                    className={`block w-full rounded-xl border px-4 py-2.5 text-left disabled:opacity-40 ${
                      locked ? "border-hairline/40 bg-night/60" : "border-hairline bg-night hover:border-accent"
                    }`}
                  >
                    <span className="text-sm font-bold text-ink">{s.name}</span>
                    <span className="ml-2 text-xs text-body">{locked ? "frosted over…" : s.desc}</span>
                  </button>
                );
              })}
              {battle.breatherBonus && (
                <p className="text-[10px] text-guarantee">Composure pays: your next hit lands +1.</p>
              )}
              {!battle.boss && !battle.isFront && !battle.keystoneKey && (
                <button type="button" onClick={handleB} className="mt-1 text-xs text-body hover:text-ink">
                  Run away →
                </button>
              )}
            </div>
          )}

          {battle.phase === "question" && battle.question && (
            <div className="mt-4">
              {battle.boss?.modifier === "soft_timer" && (battle.round === 1 || battle.round === 3) && (
                <SoftTimer key={battle.round} onExpire={() => showToast("Tick. (Nothing happens. Panic is not how this works.)")} />
              )}
              <p className="font-mono text-xs text-accent">{battle.question.topic}</p>
              <p className="mt-1 font-medium text-ink">{battle.question.stem}</p>
              <div className="mt-3 space-y-2">
                {(battle.question.options ?? []).map((opt, i) => {
                  const fogged =
                    battle.boss?.modifier === "fog_option" &&
                    !battle.fogCleared &&
                    battle.question?.fogIndex === i;
                  if (fogged) {
                    return (
                      <div
                        key={i}
                        className="block w-full rounded-xl border border-violet/40 bg-night/70 px-4 py-2.5 text-left text-sm italic text-body/50"
                      >
                        <span className="text-violet">～ fog smokes gently over this one ～</span>
                      </div>
                    );
                  }
                  return (
                    <button
                      key={i}
                      type="button"
                      disabled={busy}
                      onClick={() => void answerWild(i)}
                      className="block w-full rounded-xl border border-hairline bg-night px-4 py-2.5 text-left text-sm text-ink hover:border-accent disabled:opacity-50"
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {battle.phase === "reveal" && battle.result && (
            <div className="mt-4 space-y-3">
              <p className="font-display text-lg font-bold text-coral">💥 It strikes back!</p>
              <p className="text-sm text-body">
                Correct answer: <span className="font-medium text-ink">{battle.result.correctAnswer}</span>
              </p>
              <p className="rounded-xl border border-hairline bg-night p-3 text-sm text-body">
                {battle.result.workedSolution}
              </p>
              <button
                type="button"
                onClick={() => setBattle((b) => (b ? { ...b, phase: "strike", result: undefined } : b))}
                className="w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
              >
                Keep fighting
              </button>
            </div>
          )}

          {battle.phase === "victory" && (
            <div className="mt-4 space-y-3">
              <p className="font-display text-lg font-bold text-guarantee">
                {battle.boss
                  ? `🕊 ${battle.boss.defeated[0]}`
                  : battle.isFront
                  ? "🌤 The fog lifts off the landmark!"
                  : battle.tileKey
                  ? "🌤 The memory settles, this ground stays clear."
                  : "🏆 It's defeated!"}
              </p>
              {battle.captured && (
                <p className="fx-hero flex items-center justify-center gap-2 rounded-xl border border-accent/50 bg-accent/10 p-3 text-center font-pixel text-[10px] text-accent">
                  <CaptureSwirl />
                  {m.name.toUpperCase()} REGISTERED TO YOUR DEX
                  <CaptureSwirl />
                </p>
              )}
              {battle.result && (
                <p className="rounded-xl border border-hairline bg-night p-3 text-sm text-body">
                  {battle.result.workedSolution}
                </p>
              )}
              <button
                type="button"
                onClick={() => setBattle(null)}
                className="w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
              >
                Continue the expedition
              </button>
            </div>
          )}
        </Panel>
      )}

      {/* trainer battle */}
      {trainer && (
        <Panel
          title={
            <span className="flex items-center gap-2">
              <PortraitSprite name={trainer.npc.sprite as PortraitName} scale={1} className="rounded border border-hairline" />
              {trainer.npc.name}, {Math.min(trainer.idx + 1, trainer.questions.length)}/{trainer.questions.length}
            </span>
          }
        >
          {trainer.phase === "question" && (
            <div>
              <p className="font-mono text-xs text-accent">
                {trainer.bySubject[trainer.idx]?.name} · {trainer.questions[trainer.idx].topic}
              </p>
              <p className="mt-1 font-medium text-ink">{trainer.questions[trainer.idx].stem}</p>
              <div className="mt-3 space-y-2">
                {(trainer.questions[trainer.idx].options ?? []).map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    disabled={busy}
                    onClick={() => void answerTrainer(i)}
                    className="block w-full rounded-xl border border-hairline bg-night px-4 py-2.5 text-left text-sm text-ink hover:border-accent disabled:opacity-50"
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <p className="mt-3 font-pixel text-[8px] text-body">
                WIN: {trainer.battle.threshold}/{trainer.questions.length} CORRECT · SCORE: {trainer.correct}
              </p>
            </div>
          )}
          {trainer.phase === "reveal" && trainer.result && (
            <div className="space-y-3">
              <p className={`font-display text-lg font-bold ${trainer.result.correct ? "text-guarantee" : "text-coral"}`}>
                {trainer.result.correct ? "✅ Clean hit!" : "❌ Blocked!"}
              </p>
              {!trainer.result.correct && (
                <>
                  <p className="text-sm text-body">
                    Correct answer: <span className="font-medium text-ink">{trainer.result.correctAnswer}</span>
                  </p>
                  <p className="rounded-xl border border-hairline bg-night p-3 text-sm text-body">
                    {trainer.result.workedSolution}
                  </p>
                </>
              )}
              <button
                type="button"
                onClick={continueTrainer}
                className="w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
              >
                {trainer.idx + 1 < trainer.questions.length ? "Next question" : "See the result"}
              </button>
            </div>
          )}
          {trainer.phase === "end" && (
            <div className="space-y-3 text-center">
              {trainer.won && trainer.battle.beat === "championship" && (
                <div className="fx-hero flex items-center justify-center gap-3">
                  <UiSprite name="champion_crest" scale={2} label="Champion crest" />
                  <GuardianSprite name="clarity" scale={2.5} label="The Clarity guardian" />
                  <UiSprite name="champion_crest" scale={2} label="Champion crest" />
                </div>
              )}
              <p className={`fx-hero font-display text-2xl font-black ${trainer.won ? "text-guarantee" : "text-coral"}`}>
                {trainer.won
                  ? trainer.battle.beat === "championship"
                    ? "🏆 REGIONAL CHAMPION!"
                    : "🏆 VICTORY!"
                  : "Defeated…"}
              </p>
              <p className="text-sm text-body">
                {trainer.correct}/{trainer.questions.length} correct, needed {trainer.battle.threshold}.
                {!trainer.won && " Train in the grass and challenge them again."}
              </p>
              <button
                type="button"
                onClick={closeTrainer}
                className="w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
              >
                Continue
              </button>
            </div>
          )}
        </Panel>
      )}

      {/* gym */}
      {gym && (
        <Panel
          title={
            <span className="flex items-center gap-2">
              <UiSprite name={emblemFor(gym.family)} scale={1.5} label={`${gym.name} emblem`} />
              {gym.name} Gym{gymState && !gymState.outcome ? `, ${gymState.idx + 1}/${gymState.questions.length}` : ""}
            </span>
          }
        >
          {!gymState ? (
            <div className="space-y-3">
              <p className="text-sm text-body">
                {cleared.has(`${gym.level}/${gym.slug}`)
                  ? "You hold this gym's emblem already, but the leader always accepts a rematch."
                  : "Five questions. Four correct earns the emblem. Ready?"}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => void openGymQuestions()}
                  className="flex-1 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
                >
                  Challenge!
                </button>
                <button
                  type="button"
                  onClick={() => setGym(null)}
                  className="rounded-lg border border-hairline px-4 py-2.5 text-sm text-body"
                >
                  Leave
                </button>
              </div>
            </div>
          ) : gymState.outcome ? (
            <div className="space-y-3 text-center">
              {gymState.outcome.cleared && (
                <div className="fx-hero flex items-center justify-center gap-3">
                  <UiSprite name={emblemFor(gym.family)} scale={2} label="Gym emblem" />
                  <GuardianSprite name={guardianFor(gym.family)} scale={2.5} label="Province guardian" />
                </div>
              )}
              <p className={`fx-hero font-display text-2xl font-black ${gymState.outcome.cleared ? "text-guarantee" : "text-coral"}`}>
                {gymState.outcome.cleared ? "🔦 Beacon lit!" : "Not this time"}
              </p>
              <p className="text-sm text-body">
                {gymState.outcome.correct}/5 correct.{" "}
                {gymState.outcome.cleared
                  ? "The province guardian stirs from the grass to watch it burn, the Fog retreats, and one more light guards Haven."
                  : "The tall grass is good training, come back stronger. The beacon will wait."}
              </p>
              <button
                type="button"
                onClick={() => {
                  setGym(null);
                  setGymState(null);
                }}
                className="w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
              >
                Leave the gym
              </button>
            </div>
          ) : gymState.questions.length === 0 ? (
            <p className="text-sm text-body">The gym leader is preparing…</p>
          ) : (
            <div>
              <p className="font-mono text-xs text-accent">{gymState.questions[gymState.idx].topic}</p>
              <p className="mt-1 font-medium text-ink">{gymState.questions[gymState.idx].stem}</p>
              <div className="mt-3 space-y-2">
                {(gymState.questions[gymState.idx].options ?? []).map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    disabled={busy}
                    onClick={() => void pickGym(i)}
                    className="block w-full rounded-xl border border-hairline bg-night px-4 py-2.5 text-left text-sm text-ink hover:border-accent disabled:opacity-50"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}
        </Panel>
      )}

      {/* the Duel Hall */}
      {duelHallOpen && <DuelHall subjects={subjects} onClose={() => setDuelHallOpen(false)} />}
      {guruOpen && <SubjectGuru onClose={() => setGuruOpen(false)} />}
      {mapOpen && (
        <SingaporeMapOverlay zoneId={zoneId} subjects={subjects} onClose={() => setMapOpen(false)} />
      )}

      {/* quest log */}
      {questLogOpen && (
        <Panel title="📜 Errands & Quests">
          <div className="space-y-2">
            {QUESTS.filter((q) => questsDone.has(q.id) || questStore.active[q.id] !== undefined).map(
              (q) => {
                const done = questsDone.has(q.id);
                const prog = questStore.active[q.id] ?? 0;
                return (
                  <div
                    key={q.id}
                    className={`rounded-xl border px-3 py-2 ${
                      done ? "border-guarantee/40 opacity-70" : "border-hairline"
                    }`}
                  >
                    <p className="text-sm font-bold text-ink">
                      {done ? "✓ " : ""}
                      {q.name}
                      {q.star && <span className="ml-1 text-accent">★</span>}
                    </p>
                    <p className="mt-0.5 text-xs text-body">
                      {done ? "Done, the world remembers." : `${Math.min(prog, q.target)}/${q.target} · ${q.progress}`}
                    </p>
                  </div>
                );
              }
            )}
            {QUESTS.every((q) => !questsDone.has(q.id) && questStore.active[q.id] === undefined) && (
              <p className="text-sm text-body">
                No errands yet. Talk to the folk of Haven, anyone with a task will say so.
              </p>
            )}
            <p className="text-[10px] text-body">★ = a real study action, in game clothes.</p>
          </div>
          <button
            type="button"
            onClick={() => setQuestLogOpen(false)}
            className="mt-3 w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
          >
            Close
          </button>
        </Panel>
      )}

      {/* wipe letter, the session ends on a plan, not a loss */}
      {wipeLetter && (
        <Panel title="📬 A letter in the mailbox">
          <p className="text-sm text-body">{COPY.wipeLetterIntro}</p>
          <p className="mt-2 rounded-xl border border-hairline bg-night p-3 text-xs text-body">
            {wipeLetter.stem}
          </p>
          <p className="mt-2 rounded-xl border border-hairline bg-night p-3 text-sm text-body">
            {wipeLetter.solution}
          </p>
          <p className="mt-2 text-xs italic text-body">{COPY.wipeLetterOutro}</p>
          <button
            type="button"
            onClick={() => setWipeLetter(null)}
            className="mt-3 w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
          >
            Noted
          </button>
        </Panel>
      )}

      {/* onboarding */}
      {onboard && (
        <div className="absolute inset-0 z-[62] flex flex-col items-center justify-center gap-5 bg-night/97 px-6 text-center backdrop-blur">
          {onboard === "intro" && (
            <>
              <span className="fx-hero" aria-hidden>
                <PortraitSprite name="elder_maple" scale={2} className="rounded-xl border border-hairline bg-night-2" />
              </span>
              <p className="font-pixel text-[10px] tracking-widest text-accent">ELDER MAPLE</p>
              <div className="max-w-sm space-y-3 text-sm leading-relaxed text-ink">
                <p>
                  Years ago, the Fog swallowed the Old Campus beyond the Summit, a whole cohort who
                  stopped believing they could pass. Haven&apos;s beacons have been dark since.
                </p>
                <p>
                  Every wild monster out there is a real exam question wearing a costume, and the Fog
                  Order wants it to stay that way. But a student who faces questions honestly can
                  light beacons the Order can&apos;t snuff.
                </p>
                <p>
                  I believe you&apos;re that student, Lightbearer. Choose who you&apos;ll be out
                  there, and Gugu, the companion spirit, will trail a step behind you, carrying
                  the lantern.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  emitFx({ type: "blip" });
                  setOnboard("hero");
                }}
                className="rounded-lg bg-accent px-6 py-3 text-sm font-bold text-night"
              >
                Begin →
              </button>
            </>
          )}
          {onboard === "hero" && (
            <>
              <p className="font-pixel text-[10px] tracking-widest text-accent">CHOOSE YOUR RESEARCHER</p>
              <div className="w-full max-w-sm space-y-3">
                {HEROES.map((h) => (
                  <button
                    key={h.id}
                    type="button"
                    onClick={() => void pickHero(h.id)}
                    className="block w-full rounded-2xl border border-hairline bg-surface p-4 text-left transition-transform hover:border-accent active:scale-[0.98]"
                  >
                    <p className="flex items-center gap-2">
                      <span className="text-2xl" aria-hidden>
                        {h.emoji}
                      </span>
                      <span className="font-display text-base font-bold text-ink">{h.name}</span>
                      <HeroPreview heroId={h.id} />
                    </p>
                    <p className="mt-1 text-xs text-body">{h.blurb}</p>
                  </button>
                ))}
              </div>
              <p className="max-w-xs text-[11px] text-body">
                Style only, every researcher walks the same roads with the same weapon: your answers.
              </p>
            </>
          )}
          {onboard === "pick" && (
            <>
              <p className="font-pixel text-[10px] tracking-widest text-accent">CHOOSE YOUR COMPANION</p>
              <div className="w-full max-w-sm space-y-3">
                {STARTERS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => void pickStarter(s.id)}
                    className="block w-full rounded-2xl border border-hairline bg-surface p-4 text-left transition-transform hover:border-accent active:scale-[0.98]"
                  >
                    <p className="flex items-center gap-2">
                      <span className="text-2xl" aria-hidden>
                        {s.emoji}
                      </span>
                      <span className="font-display text-base font-bold text-ink">{s.name}</span>
                      <span
                        className="ml-auto inline-block h-3 w-8 rounded-full"
                        style={{ backgroundColor: s.colour }}
                        aria-hidden
                      />
                    </p>
                    <p className="mt-1 text-xs text-body">{s.philosophy}</p>
                  </button>
                ))}
              </div>
              <p className="max-w-xs text-[11px] text-body">
                Style only, every spirit fights with the same weapon: your correct answers.
              </p>
            </>
          )}
          {onboard === "done" && (
            <>
              <span className="fx-hero text-6xl" aria-hidden>
                {starter ? starterById(starter)?.emoji : "👻"}
              </span>
              <p className="font-pixel text-[10px] tracking-widest text-accent">
                {starter ? starterById(starter)?.name.toUpperCase() : ""} JOINS YOU
              </p>
              <div className="max-w-sm space-y-3 text-sm leading-relaxed text-ink">
                <p>
                  Walk with the D-pad. Talk to people with <span className="font-pixel text-[10px] text-accent">A</span>.
                  Tall grass hides wild battles, every strike is a real question.
                </p>
                <p>
                  Each gym you clear lights a beacon over Haven. Light them all and the Summit gate
                  opens, Kai will race you to it, and the Fog Order will try to stop you both.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  emitFx({ type: "correct" });
                  setOnboard(null);
                }}
                className="rounded-lg bg-accent px-6 py-3 text-sm font-bold text-night"
              >
                Begin the expedition
              </button>
            </>
          )}
        </div>
      )}
    </div>,
    document.body
  );
}

// The Hurry's soft timer, visual pressure only, per the accepted fallback:
// expiry never costs hearts, XP, or the answer. It just ticks.
function SoftTimer({ onExpire }: { onExpire: () => void }) {
  const [left, setLeft] = useState(60);
  useEffect(() => {
    const t = window.setInterval(() => {
      setLeft((v) => {
        if (v <= 1) {
          window.clearInterval(t);
          onExpire();
          return 0;
        }
        return v - 1;
      });
    }, 1000);
    return () => window.clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mb-2 flex items-center gap-2" aria-label="soft timer, pressure only, no cost">
      <span className="font-pixel text-[9px] text-coral">⏱ {left}s</span>
      <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-night">
        <span
          className="block h-full rounded-full bg-coral transition-[width] duration-1000"
          style={{ width: `${(left / 60) * 100}%` }}
        />
      </span>
      <span className="font-pixel text-[7px] text-body">NO COST</span>
    </div>
  );
}

// Little live preview of a hero walker for the onboarding cards. Draws from
// the commissioned heroes.png when it has loaded; procedural fallback until.
function HeroPreview({ heroId }: { heroId: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const c = cv.getContext("2d");
    if (!c) return;
    let cancelled = false;
    const paint = () => {
      if (cancelled || !ref.current) return;
      c.imageSmoothingEnabled = false;
      c.clearRect(0, 0, cv.width, cv.height);
      drawHero(c, 0, 8, "down", 1, heroId); // fallback first paint
      void loadSheets().then((sh) => {
        if (cancelled || !sh) return;
        c.clearRect(0, 0, cv.width, cv.height);
        drawWalker(c, sh.heroes, heroBlockX(heroId), "down", 1, 0, 8);
      });
    };
    paint();
    return () => {
      cancelled = true;
    };
  }, [heroId]);
  return (
    <canvas
      ref={ref}
      width={16}
      height={24}
      className="ml-auto"
      style={{ width: 32, height: 48, imageRendering: "pixelated" }}
      aria-hidden
    />
  );
}

function PadBtn({
  dir,
  onPress,
  onRelease,
}: {
  dir: Dir;
  onPress: (d: Dir) => void;
  onRelease: () => void;
}) {
  // A drawn triangle (not an emoji glyph): emoji are selectable text, which on
  // iOS pops the Copy / Look Up / Translate bar on a long-press. An inline SVG
  // has no text node, so nothing is selectable.
  const rot = dir === "up" ? 0 : dir === "right" ? 90 : dir === "down" ? 180 : 270;
  return (
    <button
      type="button"
      aria-label={dir}
      onPointerDown={(e) => {
        e.preventDefault();
        onPress(dir);
      }}
      onPointerUp={onRelease}
      onPointerLeave={onRelease}
      onPointerCancel={onRelease}
      onContextMenu={(e) => e.preventDefault()}
      style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none" }}
      className="flex h-[52px] w-[52px] select-none items-center justify-center rounded-xl border-2 border-mint/50 bg-night/50 text-mint backdrop-blur active:border-accent active:bg-accent/25 active:text-accent"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 16 16"
        aria-hidden="true"
        style={{ transform: `rotate(${rot}deg)`, pointerEvents: "none" }}
      >
        <path d="M8 3 L13 12.5 L3 12.5 Z" fill="currentColor" />
      </svg>
    </button>
  );
}

function Panel({ title, children }: { title: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="absolute inset-0 z-[60] flex items-end justify-center bg-black/60 p-4 pb-[max(env(safe-area-inset-bottom),16px)] sm:items-center">
      <div className="max-h-[80vh] w-full max-w-md overflow-y-auto rounded-2xl border border-accent/40 bg-surface p-5 shadow-2xl">
        <p className="font-display text-lg font-bold text-ink">{title}</p>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}