"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { TILE, isWalkable, buildWorld, type World, type WorldSubject } from "@/lib/game/world";
import { MONSTERS } from "@/lib/game";

// ── Game-Boy-style overworld ───────────────────────────────────────────────
// Canvas tile engine: walk the town, cross tall grass for random battles,
// step into a subject's gym for a five-question challenge. All grading is
// server-side (answers never ship to the client); the canvas is just the map.

interface PublicQuestion {
  id: string;
  type: "mcq" | "short";
  topic: string;
  stem: string;
  options?: string[];
  marks: number;
}
interface GameResult {
  xpGained: number;
  leveledUp: boolean;
  level: number;
  title: string;
}

const TS = 16; // logical tile size (px)
const VW = 13; // viewport width in tiles
const VH = 11;
const MOVE_MS = 150;
const ENCOUNTER = 0.16;
const WILD = ["careless", "concept", "method", "time"] as const;

// ── Pixel tileset (drawn once to offscreen canvases) ───────────────────────
function makeTileset(): Record<number, HTMLCanvasElement> {
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
    rect(c, 0, 0, TS, TS, "#4a9d52");
    rect(c, 3, 4, 2, 1, "#3f8a47");
    rect(c, 10, 9, 2, 1, "#3f8a47");
    rect(c, 6, 12, 2, 1, "#57ad5f");
  };
  out[TILE.GRASS] = mk(grass);
  out[TILE.TALL] = mk((c) => {
    grass(c);
    c.fillStyle = "#2f6d38";
    for (const x of [1, 5, 9, 13]) {
      c.fillRect(x, 8, 2, 6);
      c.fillRect(x + 1, 6, 1, 3);
    }
    rect(c, 2, 6, 1, 1, "#6fca6a");
    rect(c, 10, 6, 1, 1, "#6fca6a");
  });
  out[TILE.TREE] = mk((c) => {
    grass(c);
    rect(c, 7, 11, 2, 4, "#7a4b28");
    c.fillStyle = "#256b30";
    c.beginPath();
    c.arc(8, 7, 6, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = "#2f7d3a";
    c.beginPath();
    c.arc(6, 6, 4, 0, Math.PI * 2);
    c.fill();
  });
  out[TILE.WATER] = mk((c) => {
    rect(c, 0, 0, TS, TS, "#3b7dd8");
    rect(c, 2, 4, 5, 1, "#6aa6f0");
    rect(c, 9, 9, 5, 1, "#6aa6f0");
  });
  out[TILE.PATH] = mk((c) => {
    rect(c, 0, 0, TS, TS, "#d9c48a");
    rect(c, 3, 3, 1, 1, "#c9b070");
    rect(c, 11, 7, 1, 1, "#c9b070");
    rect(c, 6, 12, 1, 1, "#c9b070");
  });
  out[TILE.WALL] = mk((c) => {
    rect(c, 0, 0, TS, TS, "#9aa3af");
    c.fillStyle = "#7c8593";
    c.fillRect(0, 5, TS, 1);
    c.fillRect(0, 11, TS, 1);
    c.fillRect(5, 0, 1, 5);
    c.fillRect(10, 6, 1, 5);
  });
  out[TILE.DOOR] = mk((c) => {
    rect(c, 0, 0, TS, TS, "#9aa3af");
    rect(c, 0, 0, TS, 3, "#ffdc00");
    rect(c, 3, 4, 10, 12, "#3a2f4a");
    rect(c, 5, 7, 6, 9, "#221b2e");
  });
  out[TILE.FLOWER] = mk((c) => {
    grass(c);
    rect(c, 4, 5, 2, 2, "#ff7ab0");
    rect(c, 10, 9, 2, 2, "#ffdc00");
  });
  out[TILE.SIGN] = mk((c) => {
    grass(c);
    rect(c, 7, 8, 2, 6, "#7a4b28");
    rect(c, 3, 3, 10, 6, "#b98a4e");
  });
  return out;
}

function drawGhost(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  facing: "up" | "down" | "left" | "right",
  frame: number
) {
  const bob = frame ? 1 : 0;
  const px = (dx: number, dy: number, w: number, h: number, col: string) => {
    ctx.fillStyle = col;
    ctx.fillRect(x + dx, y + dy + bob, w, h);
  };
  px(3, 2, 10, 9, "#ffffff"); // dome
  px(3, 10, 10, 4, "#ffffff"); // body
  // three feet, wiggling with the frame
  px(3, 13, 3, 2, frame ? "#ffffff" : "#e7ecf2");
  px(7, 13, 2, 2, "#ffffff");
  px(10, 13, 3, 2, frame ? "#e7ecf2" : "#ffffff");
  // eyes shift with facing
  const ex = facing === "left" ? -1 : facing === "right" ? 1 : 0;
  const ey = facing === "up" ? -1 : 0;
  px(5 + ex, 6 + ey, 2, 2, "#161c26");
  px(9 + ex, 6 + ey, 2, 2, "#161c26");
}

export function Adventure({ subjects, cleared: initialCleared }: { subjects: WorldSubject[]; cleared: string[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Deterministic from props → a memoized value the render can read, mirrored
  // into a ref for the animation loop (which runs outside render).
  const world = useMemo<World>(() => buildWorld(subjects), [subjects]);
  const worldRef = useRef<World>(world);
  const tilesetRef = useRef<Record<number, HTMLCanvasElement> | null>(null);
  const modeRef = useRef<"walk" | "menu">("walk");

  // player movement state (refs so the RAF loop reads fresh values)
  const player = useRef({
    tx: world.start.x,
    ty: world.start.y,
    fromX: world.start.x,
    fromY: world.start.y,
    facing: "down" as "up" | "down" | "left" | "right",
    moving: false,
    t: 0,
  });
  const dirRef = useRef<"up" | "down" | "left" | "right" | null>(null);
  const queues = useRef<Record<string, PublicQuestion[]>>({});

  const [cleared, setCleared] = useState<Set<string>>(new Set(initialCleared));
  const [toast, setToast] = useState<string | null>(null);
  const [battle, setBattle] = useState<{ subject: WorldSubject; question: PublicQuestion; monster: string } | null>(null);
  const [gym, setGym] = useState<WorldSubject | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 3000);
  }, []);

  const applyGame = useCallback(
    (game: GameResult | null, prefix: string) => {
      if (game && game.xpGained > 0) {
        showToast(game.leveledUp ? `${prefix} +${game.xpGained} XP · ⬆️ Level ${game.level}!` : `${prefix} +${game.xpGained} XP`);
      } else if (prefix) {
        showToast(prefix);
      }
    },
    [showToast]
  );

  const nearestSubject = useCallback((tx: number, ty: number): WorldSubject => {
    const gyms = worldRef.current.gyms;
    let best = gyms[0];
    let bestD = Infinity;
    for (const g of gyms) {
      const d = Math.abs(g.x - tx) + Math.abs(g.y - ty);
      if (d < bestD) {
        bestD = d;
        best = g;
      }
    }
    return best;
  }, []);

  const fetchQueue = useCallback(async (s: WorldSubject): Promise<PublicQuestion[]> => {
    const key = `${s.level}/${s.slug}`;
    if (queues.current[key]?.length) return queues.current[key];
    try {
      const res = await fetch(`/api/account/game/questions?level=${s.level}&slug=${s.slug}&count=10`, {
        credentials: "include",
      });
      if (!res.ok) return [];
      const data = (await res.json()) as { questions: PublicQuestion[] };
      queues.current[key] = data.questions;
      return data.questions;
    } catch {
      return [];
    }
  }, []);

  const openBattle = useCallback(
    async (s: WorldSubject) => {
      const q = await fetchQueue(s);
      const question = q.shift();
      if (!question) {
        modeRef.current = "walk";
        return;
      }
      setBattle({ subject: s, question, monster: WILD[Math.floor(Math.random() * WILD.length)] });
    },
    [fetchQueue]
  );

  const onArrive = useCallback(
    (tx: number, ty: number) => {
      const tile = worldRef.current.grid[ty]?.[tx];
      if (tile === TILE.DOOR) {
        const g = worldRef.current.gyms.find((gm) => gm.x === tx && gm.y === ty);
        if (g) {
          modeRef.current = "menu";
          setGym(g);
        }
      } else if (tile === TILE.TALL && Math.random() < ENCOUNTER) {
        modeRef.current = "menu";
        void openBattle(nearestSubject(tx, ty));
      }
    },
    [openBattle, nearestSubject]
  );

  useEffect(() => {
    worldRef.current = world;
  }, [world]);

  // main loop
  useEffect(() => {
    tilesetRef.current = makeTileset();
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
      const world = worldRef.current;

      if (modeRef.current === "walk") {
        if (!p.moving && dirRef.current) {
          const d = dirRef.current;
          p.facing = d;
          const nx = p.tx + (d === "left" ? -1 : d === "right" ? 1 : 0);
          const ny = p.ty + (d === "up" ? -1 : d === "down" ? 1 : 0);
          if (isWalkable(world.grid[ny]?.[nx] ?? TILE.TREE)) {
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

      // interpolated position
      const rx = p.moving ? p.fromX + (p.tx - p.fromX) * p.t : p.tx;
      const ry = p.moving ? p.fromY + (p.ty - p.fromY) * p.t : p.ty;
      const camX = Math.max(0, Math.min(rx - VW / 2 + 0.5, world.width - VW));
      const camY = Math.max(0, Math.min(ry - VH / 2 + 0.5, world.height - VH));

      ctx.fillStyle = "#161c26";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const ts = tilesetRef.current!;
      const x0 = Math.floor(camX);
      const y0 = Math.floor(camY);
      for (let vy = -1; vy <= VH; vy++) {
        for (let vx = -1; vx <= VW; vx++) {
          const tx = x0 + vx;
          const ty = y0 + vy;
          const tile = world.grid[ty]?.[tx];
          if (tile === undefined) continue;
          const sx = Math.round((tx - camX) * TS);
          const sy = Math.round((ty - camY) * TS);
          ctx.drawImage(ts[tile] ?? ts[TILE.GRASS], sx, sy);
          // gym emoji on the door
          if (tile === TILE.DOOR) {
            const g = world.gyms.find((gm) => gm.x === tx && gm.y === ty);
            if (g) {
              ctx.font = "9px sans-serif";
              ctx.textAlign = "center";
              ctx.fillText(g.emoji, sx + TS / 2, sy - 1);
            }
          }
        }
      }
      // player
      const pfx = Math.round((rx - camX) * TS);
      const pfy = Math.round((ry - camY) * TS);
      const frame = p.moving ? (Math.floor(animClock / 130) % 2) : 0;
      drawGhost(ctx, pfx, pfy, p.facing, frame);

      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    const KEYMAP: Record<string, "up" | "down" | "left" | "right"> = {
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

  const setDir = useCallback((d: "up" | "down" | "left" | "right") => {
    dirRef.current = d;
  }, []);
  const clearDir = useCallback(() => {
    dirRef.current = null;
  }, []);

  const closeMenu = useCallback(() => {
    modeRef.current = "walk";
    setBattle(null);
    setGym(null);
    dirRef.current = null;
  }, []);

  return (
    <div className="space-y-4">
      {toast && (
        <p role="status" className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-accent/50 bg-night px-5 py-2.5 font-mono text-sm font-bold text-accent shadow-lg">
          {toast}
        </p>
      )}

      <div className="mx-auto max-w-md">
        <canvas
          ref={canvasRef}
          width={VW * TS}
          height={VH * TS}
          className="w-full rounded-xl border border-hairline bg-night"
          style={{ imageRendering: "pixelated", aspectRatio: `${VW} / ${VH}` }}
          aria-label="Adventure map — walk with the arrows, cross tall grass to battle, enter a gym to challenge it"
        />

        {/* On-screen controls (also works with keyboard/WASD) */}
        <div className="mt-3 flex items-center justify-between">
          <div className="grid grid-cols-3 grid-rows-3 gap-1" style={{ width: 132 }}>
            <span />
            <DPad dir="up" label="▲" onPress={setDir} onRelease={clearDir} />
            <span />
            <DPad dir="left" label="◀" onPress={setDir} onRelease={clearDir} />
            <span className="rounded-lg bg-night" />
            <DPad dir="right" label="▶" onPress={setDir} onRelease={clearDir} />
            <span />
            <DPad dir="down" label="▼" onPress={setDir} onRelease={clearDir} />
            <span />
          </div>
          <p className="max-w-[9rem] text-right text-xs text-body">
            Arrows / WASD to walk. Grass = wild battles. Doors = gym challenges.
          </p>
        </div>
      </div>

      {/* Gym roster */}
      <div className="flex flex-wrap gap-2">
        {world.gyms.map((g) => {
          const done = cleared.has(`${g.level}/${g.slug}`);
          return (
            <span
              key={`${g.level}/${g.slug}`}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs ${
                done ? "border-guarantee/50 text-guarantee" : "border-hairline text-body"
              }`}
            >
              <span aria-hidden="true">{g.emoji}</span>
              {g.name}
              {done && " ✓"}
            </span>
          );
        })}
      </div>

      {battle && (
        <BattleOverlay
          subject={battle.subject}
          question={battle.question}
          monster={battle.monster}
          onDone={applyGame}
          onClose={closeMenu}
        />
      )}
      {gym && (
        <GymOverlay
          subject={gym}
          fetchQuestions={fetchQueue}
          onCleared={(key) => setCleared((c) => new Set(c).add(key))}
          onDone={applyGame}
          onClose={closeMenu}
        />
      )}
    </div>
  );
}

function DPad({
  dir,
  label,
  onPress,
  onRelease,
}: {
  dir: "up" | "down" | "left" | "right";
  label: string;
  onPress: (d: "up" | "down" | "left" | "right") => void;
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
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-hairline bg-surface text-ink active:border-accent active:text-accent"
    >
      {label}
    </button>
  );
}

// ── Wild battle: one question ──────────────────────────────────────────────
function BattleOverlay({
  subject,
  question,
  monster,
  onDone,
  onClose,
}: {
  subject: WorldSubject;
  question: PublicQuestion;
  monster: string;
  onDone: (game: GameResult | null, prefix: string) => void;
  onClose: () => void;
}) {
  const m = MONSTERS[monster] ?? MONSTERS.careless;
  const [phase, setPhase] = useState<"ask" | "result">("ask");
  const [result, setResult] = useState<{ correct: boolean; correctAnswer: string; workedSolution: string } | null>(null);
  const [busy, setBusy] = useState(false);

  async function answer(i: number) {
    if (busy) return;
    setBusy(true);
    try {
      const res = await fetch("/api/account/game/answer", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ level: subject.level, slug: subject.slug, questionId: question.id, answer: String(i) }),
      });
      const data = (await res.json()) as { correct: boolean; correctAnswer: string; workedSolution: string; game: GameResult | null };
      setResult(data);
      setPhase("result");
      onDone(data.game, data.correct ? `⚔️ ${m.name} defeated!` : "");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Overlay title="⚔️ A wild monster appears!">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="text-4xl">{m.emoji}</span>
        <div>
          <p className="font-display font-bold text-ink">{m.name}</p>
          <p className="text-xs text-body">{subject.name} · {question.topic}</p>
        </div>
      </div>
      <p className="mt-4 font-medium text-ink">{question.stem}</p>

      {phase === "ask" ? (
        <div className="mt-3 space-y-2">
          {(question.options ?? []).map((opt, i) => (
            <button
              key={i}
              type="button"
              disabled={busy}
              onClick={() => void answer(i)}
              className="block w-full rounded-xl border border-hairline bg-night px-4 py-2.5 text-left text-sm text-ink hover:border-accent disabled:opacity-50"
            >
              {opt}
            </button>
          ))}
          <button type="button" onClick={onClose} className="mt-1 text-xs text-body hover:text-ink">
            Run away →
          </button>
        </div>
      ) : (
        <div className="mt-4 space-y-3">
          <p className={`font-display text-lg font-bold ${result?.correct ? "text-guarantee" : "text-coral"}`}>
            {result?.correct ? "🏆 It's defeated!" : "💥 It got away…"}
          </p>
          {!result?.correct && (
            <p className="text-sm text-body">
              Correct answer: <span className="font-medium text-ink">{result?.correctAnswer}</span>
            </p>
          )}
          <p className="rounded-xl border border-hairline bg-night p-3 text-sm text-body">{result?.workedSolution}</p>
          <button type="button" onClick={onClose} className="w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night">
            Continue the adventure
          </button>
        </div>
      )}
    </Overlay>
  );
}

// ── Gym challenge: five questions ──────────────────────────────────────────
function GymOverlay({
  subject,
  fetchQuestions,
  onCleared,
  onDone,
  onClose,
}: {
  subject: WorldSubject;
  fetchQuestions: (s: WorldSubject) => Promise<PublicQuestion[]>;
  onCleared: (key: string) => void;
  onDone: (game: GameResult | null, prefix: string) => void;
  onClose: () => void;
}) {
  const [questions, setQuestions] = useState<PublicQuestion[] | null>(null);
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [outcome, setOutcome] = useState<{ correct: number; cleared: boolean } | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    void (async () => {
      const q = await fetchQuestions(subject);
      // Draw a fresh five (don't drain the wild queue permanently).
      setQuestions([...q].sort(() => Math.random() - 0.5).slice(0, 5));
    })();
  }, [subject, fetchQuestions]);

  async function pick(i: number) {
    if (!questions) return;
    const q = questions[idx];
    const next = { ...answers, [q.id]: String(i) };
    setAnswers(next);
    if (idx < questions.length - 1) {
      setIdx(idx + 1);
      return;
    }
    // last one → submit
    setBusy(true);
    try {
      const res = await fetch("/api/account/game/gym", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ level: subject.level, slug: subject.slug, answers: next }),
      });
      const data = (await res.json()) as { correct: number; cleared: boolean; firstClear: boolean; game: GameResult | null };
      setOutcome({ correct: data.correct, cleared: data.cleared });
      if (data.cleared) onCleared(`${subject.level}/${subject.slug}`);
      onDone(data.game, data.cleared ? `🏅 ${subject.name} gym cleared!` : "");
    } finally {
      setBusy(false);
    }
  }

  if (!questions) {
    return <Overlay title={`🏛️ ${subject.name} Gym`}><p className="text-sm text-body">The gym leader is preparing…</p></Overlay>;
  }

  if (outcome) {
    return (
      <Overlay title={`🏛️ ${subject.name} Gym`}>
        <p className={`font-display text-2xl font-black ${outcome.cleared ? "text-guarantee" : "text-coral"}`}>
          {outcome.cleared ? "🏅 Gym cleared!" : "Not this time"}
        </p>
        <p className="mt-2 text-sm text-body">
          You answered {outcome.correct}/5 correctly. {outcome.cleared ? "The badge is yours." : "Beat 4 of 5 to earn the badge — the tall grass is good training."}
        </p>
        <button type="button" onClick={onClose} className="mt-4 w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night">
          Leave the gym
        </button>
      </Overlay>
    );
  }

  const q = questions[idx];
  return (
    <Overlay title={`🏛️ ${subject.name} Gym — ${idx + 1}/5`}>
      <p className="font-mono text-xs text-accent">{q.topic}</p>
      <p className="mt-1 font-medium text-ink">{q.stem}</p>
      <div className="mt-3 space-y-2">
        {(q.options ?? []).map((opt, i) => (
          <button
            key={i}
            type="button"
            disabled={busy}
            onClick={() => void pick(i)}
            className="block w-full rounded-xl border border-hairline bg-night px-4 py-2.5 text-left text-sm text-ink hover:border-accent disabled:opacity-50"
          >
            {opt}
          </button>
        ))}
      </div>
      <button type="button" onClick={onClose} className="mt-3 text-xs text-body hover:text-ink">
        Forfeit and leave →
      </button>
    </Overlay>
  );
}

function Overlay({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center bg-black/60 p-4 sm:items-center">
      <div className="w-full max-w-md rounded-2xl border border-accent/40 bg-surface p-5 shadow-2xl">
        <p className="font-display text-lg font-bold text-ink">{title}</p>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}
