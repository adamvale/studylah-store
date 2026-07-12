"use client";

import {
  SG_VIEWBOX,
  SG_OUTLINE,
  DISTRICTS,
  districtForZone,
  districtPos,
  activeDistricts,
} from "@/lib/game/singapore";
import type { WorldSubject } from "@/lib/game/world2";

// ── Singapore minimap ────────────────────────────────────────────────────────
// A little PUBG-style corner map, shaped like Singapore. The silhouette, the
// in-play districts as dots, and a pulsing marker on the one you're standing
// in. Tap to open the full labelled map.

export function SingaporeMinimap({
  zoneId,
  subjects,
  onOpen,
}: {
  zoneId: string;
  subjects: WorldSubject[];
  onOpen: () => void;
}) {
  const here = districtForZone(zoneId, subjects);
  const active = activeDistricts(subjects);
  const herePos = districtPos(here);

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Map of Singapore — you are in ${here}. Tap to open.`}
      className="pointer-events-auto rounded-lg border border-hairline bg-night/70 p-1.5 backdrop-blur active:scale-95"
    >
      <svg viewBox={SG_VIEWBOX} className="block h-16 w-28" role="img">
        <path d={SG_OUTLINE} fill="#212b3a" stroke="#45c8cf" strokeWidth={1} strokeLinejoin="round" />
        {DISTRICTS.filter((d) => active.has(d.name) && d.name !== here).map((d) => (
          <circle key={d.name} cx={d.x} cy={d.y} r={1.6} fill="#ffdc00" opacity={0.6} />
        ))}
        {herePos && (
          <g>
            <circle cx={herePos.x} cy={herePos.y} r={4} fill="#ffdc00" opacity={0.25}>
              <animate attributeName="r" values="3;6;3" dur="1.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.35;0;0.35" dur="1.6s" repeatCount="indefinite" />
            </circle>
            <circle cx={herePos.x} cy={herePos.y} r={2.4} fill="#ffdc00" stroke="#161c26" strokeWidth={0.8} />
          </g>
        )}
      </svg>
      <p className="mt-0.5 text-center font-pixel text-[7px] leading-tight text-accent">{here}</p>
    </button>
  );
}

// ── Full map overlay ─────────────────────────────────────────────────────────
// The whole island with every real district labelled; the ones that are game
// zones this run glow, and where you stand pulses.

export function SingaporeMapOverlay({
  zoneId,
  subjects,
  onClose,
}: {
  zoneId: string;
  subjects: WorldSubject[];
  onClose: () => void;
}) {
  const here = districtForZone(zoneId, subjects);
  const active = activeDistricts(subjects);

  return (
    <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur">
      <div className="w-full max-w-md rounded-2xl border border-accent/40 bg-surface p-5 shadow-2xl">
        <div className="flex items-baseline justify-between">
          <p className="font-display text-lg font-bold text-ink">🗺 Fog Frontier · Singapore</p>
          <p className="font-pixel text-[8px] text-accent">YOU: {here.toUpperCase()}</p>
        </div>

        <div className="mt-3 overflow-hidden rounded-xl border border-hairline bg-night p-2">
          <svg viewBox={SG_VIEWBOX} className="block w-full" style={{ aspectRatio: "100 / 54" }} role="img">
            <path
              d={SG_OUTLINE}
              fill="#1b2330"
              stroke="#45c8cf"
              strokeWidth={0.8}
              strokeLinejoin="round"
            />
            {DISTRICTS.map((d) => {
              const isActive = active.has(d.name);
              const isHere = d.name === here;
              return (
                <g key={d.name}>
                  {isHere && (
                    <circle cx={d.x} cy={d.y} r={3.4} fill="#ffdc00" opacity={0.3}>
                      <animate attributeName="opacity" values="0.4;0.05;0.4" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle
                    cx={d.x}
                    cy={d.y}
                    r={isHere ? 1.9 : isActive ? 1.5 : 0.9}
                    fill={isHere ? "#ffdc00" : isActive ? "#ffdc00" : "#45c8cf"}
                    opacity={isActive || isHere ? 1 : 0.5}
                  />
                  <text
                    x={d.x}
                    y={d.y - 2.4}
                    textAnchor="middle"
                    fontSize={2.5}
                    fill={isHere ? "#ffdc00" : isActive ? "#e2d9c8" : "#8b98ab"}
                    fontWeight={isHere || isActive ? 700 : 400}
                    style={{ pointerEvents: "none" }}
                  >
                    {d.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-body">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" /> Your provinces
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-teal/70" /> Rest of the island
          </span>
        </div>
        <p className="mt-2 text-xs text-body">
          Every subject you own is a real heartland town. Toa Payoh is home, the Summit is Bukit
          Timah, and the coast at Marine Parade holds the Saltwind Steps.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
        >
          Back to the map
        </button>
      </div>
    </div>
  );
}
