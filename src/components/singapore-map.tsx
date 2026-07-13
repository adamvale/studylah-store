"use client";

import {
  SG_VIEWBOX,
  SG_OUTLINE,
  SG_ARCADE,
  DISTRICTS,
  LANDMARKS,
  districtForZone,
  districtPos,
  activeDistricts,
  labelFor,
} from "@/lib/game/singapore";
import type { WorldSubject } from "@/lib/game/world2";

// ── Singapore minimap ────────────────────────────────────────────────────────
// A little PUBG-style corner map, shaped like Singapore, in the v3 arcade
// palette: mint coastline, gold province dots, a pink "you are here" blip.
// Tap to open the full labelled map with landmarks.

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
      aria-label={`Map of Singapore, you are in ${here}. Tap to open.`}
      className="pointer-events-auto rounded-lg border-2 p-1.5 backdrop-blur active:scale-95"
      style={{ borderColor: `${SG_ARCADE.mint}80`, background: `${SG_ARCADE.bg}cc` }}
    >
      <svg viewBox={SG_VIEWBOX} className="block h-12 w-24" role="img">
        <path
          d={SG_OUTLINE}
          fill={SG_ARCADE.land}
          stroke={SG_ARCADE.mint}
          strokeWidth={1}
          strokeLinejoin="round"
        />
        {DISTRICTS.filter((d) => active.has(d.name) && d.name !== here).map((d) => (
          <circle key={d.name} cx={d.x} cy={d.y} r={1.6} fill={SG_ARCADE.gold} opacity={0.65} />
        ))}
        {herePos && (
          <g>
            <circle cx={herePos.x} cy={herePos.y} r={4} fill={SG_ARCADE.pink} opacity={0.3}>
              <animate attributeName="r" values="3;6;3" dur="1.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0;0.4" dur="1.6s" repeatCount="indefinite" />
            </circle>
            <circle
              cx={herePos.x}
              cy={herePos.y}
              r={2.4}
              fill={SG_ARCADE.pink}
              stroke={SG_ARCADE.white}
              strokeWidth={0.8}
            />
          </g>
        )}
      </svg>
      <p className="mt-0.5 text-center font-pixel text-[7px] leading-tight" style={{ color: SG_ARCADE.mint }}>
        {here}
      </p>
    </button>
  );
}

// ── Full map overlay ─────────────────────────────────────────────────────────
// The whole island: mint coastline, every real district labelled (your
// provinces glow gold, you pulse pink), plus the 15 famous landmarks as pins.

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
    <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/75 p-4 backdrop-blur">
      <div
        className="w-full max-w-md rounded-2xl border-2 p-5 shadow-2xl"
        style={{ borderColor: `${SG_ARCADE.mint}66`, background: SG_ARCADE.bg }}
      >
        <div className="flex items-baseline justify-between">
          <p className="font-pixel text-[11px]" style={{ color: SG_ARCADE.gold }}>
            SINGAPORE
          </p>
          <p className="font-pixel text-[8px]" style={{ color: SG_ARCADE.pink }}>
            YOU: {here.toUpperCase()}
          </p>
        </div>

        <div
          className="mt-3 overflow-hidden rounded-xl border-2 p-2"
          style={{ borderColor: `${SG_ARCADE.mint}40`, background: SG_ARCADE.sea }}
        >
          <svg viewBox={SG_VIEWBOX} className="block w-full" style={{ aspectRatio: "100 / 48" }} role="img">
            <path
              d={SG_OUTLINE}
              fill={SG_ARCADE.land}
              stroke={SG_ARCADE.mint}
              strokeWidth={0.8}
              strokeLinejoin="round"
            />
            {/* districts */}
            {DISTRICTS.map((d) => {
              const isActive = active.has(d.name);
              const isHere = d.name === here;
              return (
                <g key={d.name}>
                  {isHere && (
                    <circle cx={d.x} cy={d.y} r={3.4} fill={SG_ARCADE.pink} opacity={0.35}>
                      <animate
                        attributeName="opacity"
                        values="0.45;0.05;0.45"
                        dur="1.6s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                  <circle
                    cx={d.x}
                    cy={d.y}
                    r={isHere ? 1.9 : isActive ? 1.5 : 0.9}
                    fill={isHere ? SG_ARCADE.pink : isActive ? SG_ARCADE.gold : SG_ARCADE.mint}
                    opacity={isActive || isHere ? 1 : 0.45}
                  />
                  {(isActive || isHere) &&
                    (() => {
                      const off = labelFor(d.name);
                      return (
                        <text
                          x={d.x + off.dx}
                          y={d.y + off.dy}
                          textAnchor={off.anchor}
                          fontSize={2.5}
                          fill={isHere ? SG_ARCADE.pink : SG_ARCADE.white}
                          fontWeight={700}
                          stroke={SG_ARCADE.bg}
                          strokeWidth={0.4}
                          paintOrder="stroke"
                          style={{ pointerEvents: "none" }}
                        >
                          {d.name}
                        </text>
                      );
                    })()}
                </g>
              );
            })}
            {/* famous landmarks, emoji pins */}
            {LANDMARKS.map((l) => (
              <text
                key={l.name}
                x={l.x}
                y={l.y + 1.3}
                textAnchor="middle"
                fontSize={3.6}
                style={{ pointerEvents: "none" }}
              >
                {l.emoji}
              </text>
            ))}
          </svg>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px]" style={{ color: SG_ARCADE.dim }}>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: SG_ARCADE.pink }} /> You
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: SG_ARCADE.gold }} /> Your provinces
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-xs">🦁</span> Famous landmarks
          </span>
        </div>
        <p className="mt-2 text-xs" style={{ color: SG_ARCADE.dim }}>
          Every subject you own is a real heartland town. Toa Payoh is home, the Summit is Bukit
          Timah, and Marine Parade holds the Saltwind Steps.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full rounded-lg px-5 py-2.5 font-pixel text-[11px]"
          style={{ background: SG_ARCADE.gold, color: SG_ARCADE.bg }}
        >
          BACK TO THE MAP
        </button>
      </div>
    </div>
  );
}
