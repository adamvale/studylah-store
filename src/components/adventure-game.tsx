"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import {
  TILE,
  PORTAL,
  ROOF,
  walkable,
  buildRegion,
  type Zone,
  type Npc,
  type NpcBattle,
  type WorldSubject,
} from "@/lib/game/world2";
import { MONSTERS, STARTERS, starterById } from "@/lib/game";
import { emitGame, emitFx, useHud, type FxGame } from "@/lib/game/fx";

// ── Fog Frontier — the full game ───────────────────────────────────────────
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
// Shorter screen side ≈ 13 tiles, the longer side fills to the same ratio —
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

// ── Strikes: choosing your move = choosing your stakes ─────────────────────
const STRIKES = [
  { id: "jab", name: "Quick Jab", desc: "1 dmg · miss costs 1 ❤", dmg: 1, cost: 1 },
  { id: "power", name: "Power Strike", desc: "2 dmg · miss costs 2 ❤", dmg: 2, cost: 2 },
  { id: "guard", name: "Take a Breath", desc: "heal 1 ❤ · once per battle", dmg: 0, cost: 0 },
] as const;
type StrikeId = (typeof STRIKES)[number]["id"];

// ── Pixel tileset v2 ───────────────────────────────────────────────────────
// Two animation frames (water waves, swaying grass, pulsing portals) of
// hand-drawn original pixels — no external assets, nothing licensed.
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

// Soft shadow disc under every character — depth for free.
function drawShadow(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.fillStyle = "rgba(10, 14, 20, 0.32)";
  ctx.beginPath();
  ctx.ellipse(x + 8, y + 14.5, 5.5, 2, 0, 0, Math.PI * 2);
  ctx.fill();
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
  // dark outline first, then the body inside it — sprites pop off the map
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

type Dir = "up" | "down" | "left" | "right";

interface DialogueState {
  name: string;
  emoji: string;
  lines: string[];
  idx: number;
  onDone?: () => void;
}

interface WildBattle {
  subject: WorldSubject;
  monster: string;
  shiny: boolean;
  hp: number;
  maxHp: number;
  phase: "strike" | "question" | "reveal" | "victory";
  strike?: StrikeId;
  question?: PublicQuestion;
  result?: { correct: boolean; correctAnswer: string; workedSolution: string; newCapture?: boolean };
  guarded: boolean;
  captured: boolean;
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

export function AdventureGame({
  subjects,
  cleared: initialCleared,
  story: initialStory,
  starter: initialStarter,
}: {
  subjects: WorldSubject[];
  cleared: string[];
  story: string[];
  starter: string | null;
}) {
  const router = useRouter();
  const hudState = useHud();
  const mounted = useSyncExternalStore(noopSub, clientTrue, serverFalse);
  const viewStr = useSyncExternalStore(subscribeView, viewSnapshot, viewServer);
  const [viewCols, viewRows] = viewStr.split("x").map(Number);

  const [story, setStory] = useState<Set<string>>(new Set(initialStory));
  const [cleared, setCleared] = useState<Set<string>>(new Set(initialCleared));
  const [starter, setStarter] = useState<string | null>(initialStarter);
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
  const [onboard, setOnboard] = useState<"intro" | "pick" | "done" | null>(
    initialStory.includes("starter") ? null : "intro"
  );

  const region = useMemo(
    () => buildRegion(subjects, cleared, story),
    [subjects, cleared, story]
  );
  const zone = region.zones[zoneId] ?? region.zones[region.startZone];

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const zoneRef = useRef<Zone>(zone);
  const tilesetRef = useRef<Record<number, HTMLCanvasElement>[] | null>(null);
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
  }, [starter]);
  const uiOpen = Boolean(dialogue || battle || trainer || gym || onboard);
  useEffect(() => {
    modeRef.current = uiOpen ? "ui" : "walk";
    if (uiOpen) dirRef.current = null;
  }, [uiOpen]);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 3000);
  }, []);

  // ── question supply ──────────────────────────────────────────────────────
  const fetchQueue = useCallback(
    async (s: WorldSubject): Promise<PublicQuestion[]> => {
      const key = `${s.level}/${s.slug}`;
      if (queues.current[key]?.length) return queues.current[key];
      try {
        const res = await fetch(
          `/api/account/game/questions?level=${s.level}&slug=${s.slug}&count=10`,
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
        // offline — the beat replays next time, idempotent server-side
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
    showToast("💫 You stumble back to Haven Hollow… Nurse Fern patches you up.");
  }, [region, showToast]);

  const openWild = useCallback(
    async (s: WorldSubject) => {
      const q = await fetchQueue(s);
      if (!q.length) return;
      const shiny = Math.random() < 1 / 16;
      emitFx({ type: shiny ? "shiny" : "encounter" });
      setBattle({
        subject: s,
        monster: WILD[Math.floor(Math.random() * WILD.length)],
        shiny,
        hp: 2,
        maxHp: 2,
        phase: "strike",
        guarded: false,
        captured: false,
      });
    },
    [fetchQueue]
  );

  const startTrainer = useCallback(
    async (npc: Npc, b: NpcBattle) => {
      const subject = b.mixed ? null : zoneRef.current.encounter ?? subjects[0] ?? null;
      const { qs, from } = await drawQuestions(b.questions, subject);
      if (qs.length < b.questions) {
        showToast("Not enough fresh questions here right now — try again shortly.");
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
      if (tile === PORTAL) {
        const p = z.portals.find((pt) => pt.x === tx && pt.y === ty);
        if (p && !p.locked) {
          const to = region.zones[p.toZone];
          if (to) {
            setZoneId(p.toZone);
            player.current.tx = p.toX;
            player.current.ty = p.toY;
            player.current.fromX = p.toX;
            player.current.fromY = p.toY;
            player.current.moving = false;
            showToast(`— ${to.name} —`);
            emitFx({ type: "blip" });
          }
        }
        return;
      }
      if (tile === TILE.DOOR && z.gym) {
        if (z.gym.x === tx && z.gym.y === ty) {
          setGym({ level: z.gym.level, slug: z.gym.slug, name: z.gym.name, short: z.gym.short, emoji: z.gym.emoji });
          setGymState(null);
        }
        return;
      }
      if (tile === TILE.TALL && z.encounter && Math.random() < ENCOUNTER) {
        void openWild(z.encounter);
      }
    },
    [region, openWild, showToast]
  );

  const npcAt = useCallback((x: number, y: number): Npc | undefined => {
    return zoneRef.current.npcs.find((n) => n.x === x && n.y === y);
  }, []);

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
    const npc = npcAt(fx, fy);
    if (!npc) return;
    const beatDone = npc.battle?.beat ? story.has(npc.battle.beat) : beatenNpcs.has(npc.id);
    const lines = beatDone && npc.winLines ? npc.winLines : npc.lines;
    const willBattle = npc.battle && !beatDone;
    setDialogue({
      name: npc.name,
      emoji: npc.emoji,
      lines,
      idx: 0,
      onDone: () => {
        if (npc.heal) {
          setHearts(MAX_HEARTS);
          emitFx({ type: "correct" });
          showToast("❤️ Hearts restored!");
        }
        if (willBattle && npc.battle) void startTrainer(npc, npc.battle);
      },
    });
  }, [dialogue, npcAt, story, beatenNpcs, startTrainer, showToast]);

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

      const ts = tilesetRef.current![Math.floor(now / 550) % 2];
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
          ctx.drawImage(ts[tile] ?? ts[TILE.GRASS], sx, sy);
          if (tile === TILE.DOOR && z.gym && z.gym.x === tx && z.gym.y === ty) {
            ctx.font = "9px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(z.gym.emoji, sx + TS / 2, sy - 1);
          }
        }
      }
      // NPCs (shadow disc + emoji sprite)
      ctx.font = "12px sans-serif";
      ctx.textAlign = "center";
      for (const n of z.npcs) {
        const sx = Math.round((n.x - camX) * TS);
        const sy = Math.round((n.y - camY) * TS);
        if (sx < -TS || sy < -TS || sx > canvas.width || sy > canvas.height) continue;
        drawShadow(ctx, sx, sy);
        ctx.fillText(n.emoji, sx + TS / 2, sy + TS - 3);
      }
      // player
      const pfx = Math.round((rx - camX) * TS);
      const pfy = Math.round((ry - camY) * TS);
      const frame = p.moving ? Math.floor(animClock / 130) % 2 : 0;
      drawShadow(ctx, pfx, pfy);
      drawGhost(ctx, pfx, pfy, p.facing, frame, scarfRef.current);

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
      if (id === "guard") {
        if (battle.guarded) return;
        setHearts((h) => Math.min(MAX_HEARTS, h + 1));
        setBattle({ ...battle, guarded: true });
        showToast("You steady your breathing… +1 ❤");
        return;
      }
      setBusy(true);
      const q = (await fetchQueue(battle.subject)).shift();
      setBusy(false);
      if (!q) {
        setBattle(null);
        showToast("The monster melts into the fog — no questions left here today.");
        return;
      }
      setBattle((b) => (b ? { ...b, phase: "question", strike: id, question: q } : b));
    },
    [battle, busy, fetchQueue, showToast]
  );

  const answerWild = useCallback(
    async (i: number) => {
      if (!battle || !battle.question || !battle.strike || busy) return;
      setBusy(true);
      const res = await gradeAnswer(battle.subject, battle.question.id, String(i), battle.monster);
      setBusy(false);
      if (!res) {
        showToast("Connection hiccup — that one didn't count.");
        return;
      }
      const strike = STRIKES.find((s) => s.id === battle.strike)!;
      emitFx({ type: res.correct ? "correct" : "wrong" });
      emitGame(res.game, { x: window.innerWidth / 2, y: window.innerHeight * 0.3 });
      if (res.correct) {
        const hp = battle.hp - strike.dmg;
        if (hp <= 0) {
          setWins((w) => w + 1);
          setBattle({ ...battle, hp: 0, phase: "victory", result: res, captured: Boolean(res.newCapture) });
        } else {
          setBattle({ ...battle, hp, phase: "strike", result: res });
          showToast(`💥 Hit! ${strike.dmg} damage.`);
        }
      } else {
        const left = hearts - strike.cost;
        setHearts(Math.max(0, left));
        if (left <= 0) {
          blackout();
        } else {
          setBattle({ ...battle, phase: "reveal", result: res });
        }
      }
    },
    [battle, busy, hearts, gradeAnswer, blackout, showToast]
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
        showToast("Connection hiccup — that one didn't count.");
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
    }
  }, [trainer, postBeat]);

  const closeTrainer = useCallback(() => {
    if (!trainer) return;
    const { npc, won } = { npc: trainer.npc, won: trainer.won };
    setTrainer(null);
    if (won && npc.winLines) {
      setDialogue({ name: npc.name, emoji: npc.emoji, lines: npc.winLines, idx: 0 });
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
    center("STUDY HQ — studylah.education", 620, "bold 18px monospace", "#ffdc00");
    const blob: Blob | null = await new Promise((resolve) => cv.toBlob(resolve, "image/png"));
    if (!blob) return;
    const file = new File([blob], "fog-frontier-report.png", { type: "image/png" });
    const nav = navigator as Navigator & { canShare?: (d: ShareData) => boolean };
    if (nav.share && nav.canShare?.({ files: [file] })) {
      try {
        await nav.share({ files: [file], title: "Fog Frontier expedition report" });
        return;
      } catch {
        // cancelled — fall through
      }
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "fog-frontier-report.png";
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
        aria-label="Fog Frontier overworld — walk with the D-pad, talk with A, grass hides wild battles"
      />

      {/* atmosphere: drifting fog + vignette (pure CSS, zero assets) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <span className="ff-fog ff-fog-a" />
        <span className="ff-fog ff-fog-b" />
      </div>
      <div className="ff-vignette pointer-events-none absolute inset-0" aria-hidden />

      {/* top bar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-3 pt-[max(env(safe-area-inset-top),12px)]">
        <div className="space-y-1">
          <p className="rounded bg-night/70 px-2 py-1 font-pixel text-[9px] text-ink backdrop-blur">
            {zone.name}
          </p>
          <p className="rounded bg-night/70 px-2 py-1 font-pixel text-[10px] text-coral backdrop-blur" aria-label={`${hearts} hearts`}>
            {"♥".repeat(hearts)}
            <span className="opacity-30">{"♥".repeat(Math.max(0, MAX_HEARTS - hearts))}</span>
          </p>
        </div>
        <div className="pointer-events-auto flex gap-2">
          {wins > 0 && (
            <button
              type="button"
              onClick={() => void shareReport()}
              aria-label="Share expedition report"
              className="rounded-lg bg-night/70 px-2.5 py-1.5 text-sm backdrop-blur"
            >
              📸
            </button>
          )}
          <button
            type="button"
            onClick={() => router.push("/account")}
            aria-label="Leave the Fog Frontier"
            className="rounded-lg bg-night/70 px-2.5 py-1.5 font-pixel text-[9px] text-body backdrop-blur"
          >
            EXIT ↩
          </button>
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
          <PadBtn dir="up" onPress={setDir} onRelease={clearDir} label="▲" />
          <span />
          <PadBtn dir="left" onPress={setDir} onRelease={clearDir} label="◀" />
          <span className="h-[52px] w-[52px]" />
          <PadBtn dir="right" onPress={setDir} onRelease={clearDir} label="▶" />
          <span />
          <PadBtn dir="down" onPress={setDir} onRelease={clearDir} label="▼" />
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
          className="h-12 w-12 select-none rounded-full border border-hairline/60 bg-night/50 font-pixel text-[11px] text-body backdrop-blur active:bg-coral/30"
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
          className="h-16 w-16 select-none rounded-full border border-accent/60 bg-accent/20 font-pixel text-sm text-accent backdrop-blur active:bg-accent/40"
        >
          A
        </button>
      </div>

      {/* dialogue */}
      {dialogue && (
        <button
          type="button"
          onClick={handleA}
          className="absolute inset-x-3 bottom-28 z-[58] rounded-2xl border border-hairline bg-night/95 p-4 text-left backdrop-blur"
        >
          <p className="font-pixel text-[9px] text-accent">
            {dialogue.emoji} {dialogue.name.toUpperCase()}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink">{dialogue.lines[dialogue.idx]}</p>
          <p className="mt-2 text-right font-pixel text-[8px] text-body">
            {dialogue.idx < dialogue.lines.length - 1 ? "▼ A" : "● A"}
          </p>
        </button>
      )}

      {/* wild battle */}
      {battle && m && (
        <Panel title={battle.shiny ? "✨ A SHINY monster appears!" : "⚔️ A wild monster appears!"}>
          <div className="flex items-center gap-3">
            <span
              className={`fx-hero text-4xl ${battle.shiny ? "drop-shadow-[0_0_10px_rgba(255,220,0,0.9)]" : ""}`}
              aria-hidden
            >
              {m.emoji}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display font-bold text-ink">
                {battle.shiny && <span className="text-accent">✨ Shiny </span>}
                {m.name}
              </p>
              <p className="text-xs text-body">{battle.subject.name}</p>
            </div>
            <span className="font-pixel text-[10px] text-coral">
              {"♥".repeat(battle.hp)}
              <span className="opacity-30">{"♥".repeat(battle.maxHp - battle.hp)}</span>
            </span>
          </div>

          {battle.phase === "strike" && (
            <div className="mt-4 space-y-2">
              <p className="font-pixel text-[9px] text-body">CHOOSE YOUR STRIKE</p>
              {STRIKES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  disabled={busy || (s.id === "guard" && battle.guarded)}
                  onClick={() => void chooseStrike(s.id)}
                  className="block w-full rounded-xl border border-hairline bg-night px-4 py-2.5 text-left hover:border-accent disabled:opacity-40"
                >
                  <span className="text-sm font-bold text-ink">{s.name}</span>
                  <span className="ml-2 text-xs text-body">{s.desc}</span>
                </button>
              ))}
              <button type="button" onClick={handleB} className="mt-1 text-xs text-body hover:text-ink">
                Run away →
              </button>
            </div>
          )}

          {battle.phase === "question" && battle.question && (
            <div className="mt-4">
              <p className="font-mono text-xs text-accent">{battle.question.topic}</p>
              <p className="mt-1 font-medium text-ink">{battle.question.stem}</p>
              <div className="mt-3 space-y-2">
                {(battle.question.options ?? []).map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    disabled={busy}
                    onClick={() => void answerWild(i)}
                    className="block w-full rounded-xl border border-hairline bg-night px-4 py-2.5 text-left text-sm text-ink hover:border-accent disabled:opacity-50"
                  >
                    {opt}
                  </button>
                ))}
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
              <p className="font-display text-lg font-bold text-guarantee">🏆 It&apos;s defeated!</p>
              {battle.captured && (
                <p className="fx-hero rounded-xl border border-accent/50 bg-accent/10 p-3 text-center font-pixel text-[10px] text-accent">
                  ✨ {m.name.toUpperCase()} REGISTERED TO YOUR DEX
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
        <Panel title={`${trainer.npc.emoji} ${trainer.npc.name} — ${Math.min(trainer.idx + 1, trainer.questions.length)}/${trainer.questions.length}`}>
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
              <p className={`fx-hero font-display text-2xl font-black ${trainer.won ? "text-guarantee" : "text-coral"}`}>
                {trainer.won ? "🏆 VICTORY!" : "Defeated…"}
              </p>
              <p className="text-sm text-body">
                {trainer.correct}/{trainer.questions.length} correct — needed {trainer.battle.threshold}.
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
        <Panel title={`${gym.emoji} ${gym.name} Gym${gymState && !gymState.outcome ? ` — ${gymState.idx + 1}/${gymState.questions.length}` : ""}`}>
          {!gymState ? (
            <div className="space-y-3">
              <p className="text-sm text-body">
                {cleared.has(`${gym.level}/${gym.slug}`)
                  ? "You hold this gym's emblem already — but the leader always accepts a rematch."
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
              <p className={`fx-hero font-display text-2xl font-black ${gymState.outcome.cleared ? "text-guarantee" : "text-coral"}`}>
                {gymState.outcome.cleared ? "🏅 Emblem earned!" : "Not this time"}
              </p>
              <p className="text-sm text-body">
                {gymState.outcome.correct}/5 correct.{" "}
                {gymState.outcome.cleared
                  ? "The Fog retreats from this province."
                  : "The tall grass is good training — come back stronger."}
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

      {/* onboarding */}
      {onboard && (
        <div className="absolute inset-0 z-[62] flex flex-col items-center justify-center gap-5 bg-night/97 px-6 text-center backdrop-blur">
          {onboard === "intro" && (
            <>
              <span className="fx-hero text-6xl" aria-hidden>
                🧓
              </span>
              <p className="font-pixel text-[10px] tracking-widest text-accent">ELDER MAPLE</p>
              <div className="max-w-sm space-y-3 text-sm leading-relaxed text-ink">
                <p>Welcome to the Fog Frontier, young researcher.</p>
                <p>
                  Out there, every wild monster is a real exam question wearing a costume — and the
                  Fog Order wants you to stay confused.
                </p>
                <p>Before you go: choose the companion spirit who&apos;ll walk beside you.</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  emitFx({ type: "blip" });
                  setOnboard("pick");
                }}
                className="rounded-lg bg-accent px-6 py-3 text-sm font-bold text-night"
              >
                Meet the spirits →
              </button>
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
                Style only — every spirit fights with the same weapon: your correct answers.
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
                  Tall grass hides wild battles.
                </p>
                <p>
                  Clear every province gym to open the Summit gate. Kai will try to beat you to it.
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

function PadBtn({
  dir,
  label,
  onPress,
  onRelease,
}: {
  dir: Dir;
  label: string;
  onPress: (d: Dir) => void;
  onRelease: () => void;
}) {
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
      className="flex h-[52px] w-[52px] select-none items-center justify-center rounded-xl border border-hairline/50 bg-night/40 text-lg text-ink backdrop-blur active:border-accent active:bg-accent/25 active:text-accent"
    >
      {label}
    </button>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="absolute inset-0 z-[60] flex items-end justify-center bg-black/60 p-4 pb-[max(env(safe-area-inset-bottom),16px)] sm:items-center">
      <div className="max-h-[80vh] w-full max-w-md overflow-y-auto rounded-2xl border border-accent/40 bg-surface p-5 shadow-2xl">
        <p className="font-display text-lg font-bold text-ink">{title}</p>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}