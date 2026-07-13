"use client";

import type { ForecastTier } from "@/components/heat";

// The fog-of-war campaign map. Each topic is a hex territory; VERY HIGH
// topics sit at the centre of the region (they're worth the most marks) and
// the fog burns off as the study-plan status advances. Tapping a hex advances
// it, the map IS the checklist, drawn as terrain.
//
// Layout is a deterministic hex spiral (no physics, no randomness): the same
// subject always draws the same map.

export interface MapTopic {
  topic: string;
  tier: ForecastTier;
}

const SQRT3 = Math.sqrt(3);
const HEX = 24; // hex radius in viewBox units

const TIER_COLOR: Record<ForecastTier, string> = {
  "very-high": "#db222a",
  high: "#8224e3",
  moderate: "#dd9933",
  watch: "#64748b",
};

const TIER_LABEL: Record<ForecastTier, string> = {
  "very-high": "VERY HIGH",
  high: "HIGH",
  moderate: "MODERATE",
  watch: "WATCH",
};

const STATUS_LABEL = ["Fogged", "Revised", "Practised", "Cleared"] as const;

function tierRank(t: ForecastTier): number {
  return t === "very-high" ? 3 : t === "high" ? 2 : t === "moderate" ? 1 : 0;
}

// Axial-coordinate spiral: centre, then rings outward.
function spiralPositions(count: number): { q: number; r: number }[] {
  const out: { q: number; r: number }[] = [{ q: 0, r: 0 }];
  const dirs = [
    { q: 1, r: 0 },
    { q: 1, r: -1 },
    { q: 0, r: -1 },
    { q: -1, r: 0 },
    { q: -1, r: 1 },
    { q: 0, r: 1 },
  ];
  let ring = 1;
  while (out.length < count) {
    let q = -ring; // start each ring west of centre
    let r = ring;
    for (const dir of dirs) {
      for (let step = 0; step < ring; step++) {
        out.push({ q, r });
        q += dir.q;
        r += dir.r;
        if (out.length >= count + 6 * ring) break; // safety
      }
    }
    ring++;
  }
  return out.slice(0, count);
}

function hexPoints(cx: number, cy: number, s: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (60 * i - 30);
    pts.push(`${(cx + s * Math.cos(a)).toFixed(1)},${(cy + s * Math.sin(a)).toFixed(1)}`);
  }
  return pts.join(" ");
}

export function CampaignMap({
  topics,
  statusFor,
  onSelect,
}: {
  topics: MapTopic[];
  statusFor: (topic: string) => number;
  onSelect: (topic: string) => void;
}) {
  // VERY HIGH claims the centre; original order breaks ties.
  const ordered = [...topics].sort((a, b) => tierRank(b.tier) - tierRank(a.tier));
  const pos = spiralPositions(ordered.length);

  const cells = ordered.map((t, i) => {
    const { q, r } = pos[i];
    return {
      ...t,
      x: HEX * SQRT3 * (q + r / 2),
      y: HEX * 1.5 * r,
    };
  });

  const xs = cells.map((c) => c.x);
  const ys = cells.map((c) => c.y);
  const pad = HEX + 6;
  const minX = Math.min(...xs) - pad;
  const minY = Math.min(...ys) - pad;
  const w = Math.max(...xs) - minX + pad;
  const h = Math.max(...ys) - minY + pad;

  return (
    <div>
      <svg
        viewBox={`${minX.toFixed(0)} ${minY.toFixed(0)} ${w.toFixed(0)} ${h.toFixed(0)}`}
        className="mx-auto block w-full max-w-md"
        role="group"
        aria-label="Campaign map, one territory per topic"
      >
        {cells.map((c) => {
          const status = statusFor(c.topic);
          const tier = TIER_COLOR[c.tier];
          const cleared = status >= 3;
          const fill = cleared
            ? "rgba(61,220,132,0.22)"
            : status === 2
            ? "rgba(255,220,0,0.20)"
            : status === 1
            ? "rgba(255,220,0,0.08)"
            : "#141a24";
          const stroke = cleared ? "#3ddc84" : tier;
          const strokeOpacity = status === 0 ? 0.35 : 0.9;
          return (
            <g
              key={c.topic}
              role="button"
              tabIndex={0}
              aria-label={`${c.topic}, ${TIER_LABEL[c.tier]}, ${STATUS_LABEL[status] ?? "Fogged"}. Activate to advance.`}
              className="cursor-pointer outline-none focus:opacity-80"
              onClick={() => onSelect(c.topic)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(c.topic);
                }
              }}
            >
              <title>{`${c.topic} · ${TIER_LABEL[c.tier]} · ${STATUS_LABEL[status] ?? "Fogged"}`}</title>
              <polygon
                points={hexPoints(c.x, c.y, HEX - 1.5)}
                fill={fill}
                stroke={stroke}
                strokeOpacity={strokeOpacity}
                strokeWidth="2"
              />
              {cleared && (
                <text
                  x={c.x}
                  y={c.y + 5.5}
                  textAnchor="middle"
                  fontSize="15"
                  fill="#3ddc84"
                  aria-hidden="true"
                >
                  ✓
                </text>
              )}
              {status === 0 && (
                // drawn fog puffs, no emoji-font dependency
                <g aria-hidden="true" opacity="0.45">
                  <circle cx={c.x - 6} cy={c.y + 2} r="4.5" fill="#8894a3" />
                  <circle cx={c.x + 1} cy={c.y - 2.5} r="5.5" fill="#aeb8c6" />
                  <circle cx={c.x + 7.5} cy={c.y + 2.5} r="4" fill="#8894a3" />
                </g>
              )}
              {!cleared && status > 0 && (
                <circle cx={c.x} cy={c.y} r={status === 2 ? 5 : 3} fill={tier} opacity="0.9" />
              )}
            </g>
          );
        })}
      </svg>
      <p className="mt-2 text-center text-[11px] text-body/80">
        <span className="text-body/50">●</span> fogged ·{" "}
        <span className="text-accent">●</span> revised/practised ·{" "}
        <span className="text-guarantee">✓</span> cleared, tap a territory to
        advance it. Border colour = forecast tier.
      </p>
    </div>
  );
}
