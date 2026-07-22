// A lightweight SVG radar (spider) chart. No dependencies. Pure presentational,
// so it renders on the server. Each axis is a 0 to 100 score, higher is better.
// The filled gold shape is "you now"; an optional `target` draws a reference
// ring you are aiming to fill.

export interface RadarAxis {
  label: string;
  value: number; // 0 to 100
}

function polar(cx: number, cy: number, r: number, angleDeg: number): [number, number] {
  const a = (angleDeg * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

export function RadarChart({
  axes,
  target,
}: {
  axes: RadarAxis[];
  target?: number; // constant reference value (0 to 100) drawn as a second ring
}) {
  const W = 400;
  const H = 300;
  const cx = W / 2;
  const cy = H / 2 + 6;
  const R = 92;
  const labelR = R + 22;
  const n = axes.length;
  // Start at the top (-90) and go clockwise.
  const angleAt = (i: number) => -90 + (i * 360) / n;
  const clamp = (v: number) => Math.max(0, Math.min(100, v));

  const rings = [0.25, 0.5, 0.75, 1];

  const pointsFor = (values: number[]) =>
    values
      .map((v, i) => {
        const [x, y] = polar(cx, cy, (R * clamp(v)) / 100, angleAt(i));
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");

  const youPoints = pointsFor(axes.map((a) => a.value));
  const targetPoints =
    target != null ? pointsFor(axes.map(() => target)) : null;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Learning profile radar chart">
      {/* concentric reference rings (dotted) */}
      {rings.map((lvl) => (
        <circle
          key={lvl}
          cx={cx}
          cy={cy}
          r={R * lvl}
          fill="none"
          stroke="rgba(196,181,253,0.28)"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
      ))}

      {/* spokes */}
      {axes.map((_, i) => {
        const [x, y] = polar(cx, cy, R, angleAt(i));
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={x}
            y2={y}
            stroke="rgba(196,181,253,0.22)"
            strokeWidth="1"
          />
        );
      })}

      {/* target ring (aim for this) */}
      {targetPoints && (
        <polygon
          points={targetPoints}
          fill="rgba(110,160,255,0.12)"
          stroke="rgba(110,160,255,0.7)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
      )}

      {/* you, now */}
      <polygon
        points={youPoints}
        fill="rgba(255,220,0,0.22)"
        stroke="#ffdc00"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {axes.map((a, i) => {
        const [x, y] = polar(cx, cy, (R * clamp(a.value)) / 100, angleAt(i));
        return <circle key={i} cx={x} cy={y} r="2.6" fill="#ffdc00" />;
      })}

      {/* axis labels */}
      <g className="text-body" fill="currentColor" fontSize="11" fontWeight="600">
        {axes.map((a, i) => {
          const deg = angleAt(i);
          const [x, y] = polar(cx, cy, labelR, deg);
          const cos = Math.cos((deg * Math.PI) / 180);
          const anchor = cos > 0.3 ? "start" : cos < -0.3 ? "end" : "middle";
          return (
            <text key={i} x={x.toFixed(1)} y={(y + 3.5).toFixed(1)} textAnchor={anchor}>
              {a.label}
            </text>
          );
        })}
      </g>
    </svg>
  );
}
