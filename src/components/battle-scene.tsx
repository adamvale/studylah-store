"use client";

// ── The battle stage: MZ battlebacks + painted battlers + sv-actor hero ────
// Sits at the top of the wild-battle panel. Every strike is still a real
// exam question graded server-side; this file is pure presentation:
//   - battleback pair (floor + backdrop) per biome
//   - the enemy as a painted MZ battler with idle bob / hit shake / collapse
//   - the student's hero as an animated side-view battler (idle/attack/
//     hurt/victory poses from the SV sheets)
//   - floating damage numbers
//   - an Effekseer WebGL overlay for spell impacts (loads lazily, fails
//     silent: no wasm, no effects, battle unaffected)

import { useCallback, useEffect, useRef, useState } from "react";

// ── sv actor sheets: 18 motions x 3 frames of 64px cells (9 x 6 grid) ──────
const SV_MOTION = {
  walk: 0, wait: 1, chant: 2, guard: 3, damage: 4, evade: 5,
  thrust: 6, swing: 7, missile: 8, skill: 9, spell: 10, item: 11,
  escape: 12, victory: 13, dying: 14, abnormal: 15, sleep: 16, dead: 17,
} as const;
type SvMotion = keyof typeof SV_MOTION;

const SV_BY_HERO: Record<string, string> = {
  jun: "SF_Actor1_1",
  mei: "SF_Actor1_2",
  agent: "SF_Actor1_7",
};

function svFrameStyle(sheet: string, motion: SvMotion, frame: number, scale: number): React.CSSProperties {
  const m = SV_MOTION[motion];
  const bx = (Math.floor(m / 6) * 3 + frame) * 64;
  const by = (m % 6) * 64;
  return {
    width: 64 * scale,
    height: 64 * scale,
    backgroundImage: `url(/game/mz/sv_actors/${sheet}.png)`,
    backgroundPosition: `${-bx * scale}px ${-by * scale}px`,
    backgroundSize: `${576 * scale}px ${384 * scale}px`,
    backgroundRepeat: "no-repeat",
    imageRendering: "pixelated",
  };
}

// ── Effekseer runtime (lazy, cached at module level) ────────────────────────
interface EfkContext {
  init: (gl: WebGLRenderingContext, opts?: Record<string, number>) => void;
  loadEffect: (path: string, scale: number, onload?: () => void, onerror?: () => void) => unknown;
  play: (effect: unknown, x: number, y: number, z: number) => unknown;
  setProjectionPerspective: (fov: number, aspect: number, near: number, far: number) => void;
  setCameraLookAt: (ex: number, ey: number, ez: number, tx: number, ty: number, tz: number, ux: number, uy: number, uz: number) => void;
  update: (delta?: number) => void;
  draw: () => void;
}
interface EfkModule {
  createContext: () => EfkContext;
  initRuntime: (wasmPath: string, onload: () => void, onerror: () => void) => void;
}

// Load the script, then initialise the wasm runtime, exactly once. Any
// failure resolves null and battles simply run without particles.
let efkPromise: Promise<EfkModule | null> | null = null;
function loadEffekseer(): Promise<EfkModule | null> {
  if (efkPromise) return efkPromise;
  efkPromise = new Promise((resolve) => {
    const finish = (mod: EfkModule | null) => {
      if (!mod) {
        resolve(null);
        return;
      }
      try {
        mod.initRuntime("/game/fx/effekseer.wasm", () => resolve(mod), () => resolve(null));
      } catch {
        resolve(null);
      }
    };
    const w = window as unknown as { effekseer?: EfkModule };
    if (w.effekseer) {
      finish(w.effekseer);
      return;
    }
    const s = document.createElement("script");
    s.src = "/game/fx/effekseer.min.js";
    s.onload = () => finish((window as unknown as { effekseer?: EfkModule }).effekseer ?? null);
    s.onerror = () => resolve(null);
    document.head.appendChild(s);
  });
  return efkPromise;
}

// A transparent WebGL canvas that plays named .efkefc effects over the stage.
function useEffekseer(active: boolean) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<EfkContext | null>(null);
  const effectsRef = useRef<Map<string, unknown>>(new Map());
  const rafRef = useRef(0);

  useEffect(() => {
    if (!active) return;
    let dead = false;
    void loadEffekseer().then((efk) => {
      if (dead || !efk || !canvasRef.current) return;
      const canvas = canvasRef.current;
      const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: true });
      if (!gl) return;
      try {
        const ctx = efk.createContext();
        ctx.init(gl, { instanceMaxCount: 800, squareMaxCount: 4000 });
        ctx.setProjectionPerspective(30, canvas.width / canvas.height, 1, 300);
        ctx.setCameraLookAt(0, 8, 42, 0, 6, 0, 0, 1, 0);
        ctxRef.current = ctx;
        let last = performance.now();
        const tick = (now: number) => {
          if (dead) return;
          const delta = ((now - last) / 1000) * 60;
          last = now;
          gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
          ctx.update(Math.min(delta, 4));
          ctx.draw();
          rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
      } catch {
        // wasm/GL unavailable: the battle simply has no particle layer
      }
    });
    return () => {
      dead = true;
      cancelAnimationFrame(rafRef.current);
      ctxRef.current = null;
      effectsRef.current.clear();
    };
  }, [active]);

  const play = useCallback((name: string) => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    const cached = effectsRef.current.get(name);
    if (cached) {
      try {
        ctx.play(cached, 0, 5, 0);
      } catch {
        // a failed effect is a silent no-op
      }
      return;
    }
    try {
      const eff = ctx.loadEffect(
        `/game/fx/effects/${name}.efkefc`,
        1,
        () => {
          effectsRef.current.set(name, eff);
          try {
            ctx.play(eff, 0, 5, 0);
          } catch {
            // ignore
          }
        },
        () => {
          // missing effect: remember the failure so we stop retrying
          effectsRef.current.set(name, null);
        }
      );
    } catch {
      // ignore
    }
  }, []);

  return { canvasRef, play };
}

// family → the element that flavours a correct strike
const STRIKE_FX_BY_FAMILY: Record<string, string> = {
  physics: "ThunderOne1",
  chemistry: "WaterOne1",
  biology: "WindOne1",
  emath: "LightOne1",
  amath: "LightOne1",
  poa: "LightOne1",
  geography: "EarthOne1",
  history: "DarknessOne1",
  "social-studies": "DarknessOne1",
  fnn: "WindOne1",
};

export type StageEventKind = "hit" | "power" | "hurt" | "guard" | "victory" | "capture";
export interface StageEvent {
  n: number; // increment to re-trigger
  kind: StageEventKind;
  dmg?: number;
}

export function BattleStage({
  battleback,
  battler,
  shiny,
  family,
  heroId,
  event,
  defeated,
}: {
  battleback: [string, string];
  battler: string;
  shiny?: boolean;
  family?: string;
  heroId: string;
  event: StageEvent | null;
  defeated: boolean;
}) {
  const { canvasRef, play } = useEffekseer(true);
  const [heroMotion, setHeroMotion] = useState<SvMotion>("wait");
  const [svFrame, setSvFrame] = useState(0);
  const [enemyAnim, setEnemyAnim] = useState("");
  const [floats, setFloats] = useState<{ id: number; text: string; good: boolean }[]>([]);
  const lastEvent = useRef(0);

  // sv-actor frame loop (setInterval survives background throttling well)
  useEffect(() => {
    const t = window.setInterval(() => setSvFrame((f) => (f + 1) % 3), 220);
    return () => window.clearInterval(t);
  }, []);

  // event choreography
  useEffect(() => {
    if (!event || event.n === lastEvent.current) return;
    lastEvent.current = event.n;
    const backToIdle = (ms: number) => window.setTimeout(() => setHeroMotion("wait"), ms);
    if (event.kind === "hit" || event.kind === "power") {
      setHeroMotion(event.kind === "power" ? "skill" : "swing");
      play(event.kind === "power" ? "SlashSpecial1" : STRIKE_FX_BY_FAMILY[family ?? ""] ?? "HitSpecial1");
      setEnemyAnim("bs-enemy-hit");
      window.setTimeout(() => setEnemyAnim(""), 500);
      if (event.dmg) {
        const id = Date.now();
        setFloats((f) => [...f, { id, text: `-${event.dmg}`, good: true }]);
        window.setTimeout(() => setFloats((f) => f.filter((x) => x.id !== id)), 1100);
      }
      backToIdle(900);
    } else if (event.kind === "hurt") {
      setHeroMotion("damage");
      play("HitPhysical");
      const id = Date.now();
      setFloats((f) => [...f, { id, text: "miss", good: false }]);
      window.setTimeout(() => setFloats((f) => f.filter((x) => x.id !== id)), 1100);
      backToIdle(900);
    } else if (event.kind === "guard") {
      setHeroMotion("guard");
      play("Powerup1");
      backToIdle(1200);
    } else if (event.kind === "victory") {
      setHeroMotion("victory");
      play("LightPillar1");
    } else if (event.kind === "capture") {
      play("GeneralSpecial1");
    }
  }, [event, family, play]);

  const sv = SV_BY_HERO[heroId] ?? SV_BY_HERO.jun;

  return (
    // Full-bleed to the panel's side padding only; NEVER into the title row
    // above. All positioning is flex layout, all animation is translateY/
    // scale only: Tailwind v4 translate utilities use the CSS `translate`
    // property, so keyframes must not carry their own positioning transform
    // (the two would stack and throw sprites off screen, seen on iOS).
    <div className="relative -mx-5 mb-3 mt-1 h-44 overflow-hidden sm:h-52">
      {/* battleback pair: ground + backdrop */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(/game/mz/battlebacks2/${battleback[1]}.png), url(/game/mz/battlebacks1/${battleback[0]}.png)`,
          backgroundSize: "cover, cover",
          backgroundPosition: "center 30%, center bottom",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-night/30" aria-hidden />

      {/* the enemy, a painted MZ battler, flex-centred (slightly left) */}
      <div className="absolute inset-0 flex items-center justify-center pr-[22%]" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/game/mz/enemies/${battler}.png`}
          alt=""
          className={`max-h-[80%] max-w-[50%] object-contain bs-enemy-idle ${enemyAnim} ${
            defeated ? "bs-enemy-down" : ""
          } ${shiny ? "drop-shadow-[0_0_14px_rgba(255,220,0,0.9)]" : "drop-shadow-[0_6px_10px_rgba(0,0,0,0.45)]"}`}
        />
      </div>

      {/* the hero, side-view battler, bottom-right facing in */}
      <div className="absolute bottom-1 right-3" aria-hidden>
        <span className="block" style={svFrameStyle(sv, heroMotion, svFrame, 1.6)} />
      </div>

      {/* damage floats, centred by the wrapper, animated by translateY only */}
      <div className="pointer-events-none absolute inset-x-0 top-1/4 flex justify-center" aria-hidden>
        {floats.map((f) => (
          <span
            key={f.id}
            className={`bs-float absolute font-pixel text-xl ${f.good ? "text-accent" : "text-coral"}`}
          >
            {f.text}
          </span>
        ))}
      </div>

      {/* Effekseer particle overlay */}
      <canvas ref={canvasRef} width={480} height={280} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden />

      <style>{`
        .bs-enemy-idle { animation: bsBob 2.4s ease-in-out infinite; }
        @keyframes bsBob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .bs-enemy-hit { animation: bsHit 0.45s linear; }
        @keyframes bsHit {
          0%, 100% { filter: none; transform: translateX(0); }
          20% { filter: brightness(2.2); transform: translateX(-7px); }
          40% { transform: translateX(6px); }
          60% { filter: brightness(1.8); transform: translateX(-6px); }
          80% { transform: translateX(3px); }
        }
        .bs-enemy-down { animation: bsDown 0.9s ease-in forwards; }
        @keyframes bsDown { to { opacity: 0; transform: translateY(28px) scale(0.85); filter: saturate(0.2); } }
        .bs-float { animation: bsFloat 1.05s ease-out forwards; }
        @keyframes bsFloat { 0% { opacity: 0; transform: translateY(8px); } 15% { opacity: 1; } 100% { opacity: 0; transform: translateY(-34px); } }
      `}</style>
    </div>
  );
}

// zone → battleback pair (provinces pass their biome's pair instead)
export function battlebackForZone(zoneId: string, biome?: [string, string]): [string, string] {
  if (zoneId.startsWith("prov:") && biome) return biome;
  if (zoneId.startsWith("under:")) return ["DirtCave", "DirtCave"];
  if (zoneId === "cells") return ["RockCave", "RockCave"];
  if (zoneId === "saltwind") return ["Sand", "Port"];
  if (zoneId === "lantern") return ["Clouds", "Clouds"];
  if (zoneId === "summit") return ["Stone1", "Temple"];
  if (zoneId === "campus") return ["Wasteland", "Ruins1"];
  return ["Grassland", "Grassland"];
}

// species/boss → painted battler names
export const BOSS_BATTLERS: Record<string, string> = {
  whisper: "SF_Shadow",
  hurry: "SF_Kamaitachi",
  blank: "Plasma",
};
