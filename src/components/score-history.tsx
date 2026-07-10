import Link from "next/link";

export interface ProgressCard {
  level: string;
  slug: string;
  subjectName: string;
  latestScore: number;
  latestTotal: number;
  latestPct: number;
  latestEstimate: string;
  band: string;
  prevPct: number | null;
  points: number[]; // pct per attempt, oldest → newest
  cohortBeats: number | null;
  weeksSince: number;
}

const BAND_CLS: Record<string, string> = {
  danger: "text-coral",
  warning: "text-accent",
  pass: "text-guarantee",
};

function Sparkline({ points }: { points: number[] }) {
  if (points.length < 2) return null;
  const W = 96;
  const H = 28;
  const max = 100;
  const step = W / (points.length - 1);
  const coords = points.map((p, i) => `${(i * step).toFixed(1)},${(H - (p / max) * H).toFixed(1)}`);
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true" className="overflow-visible">
      <polyline
        points={coords.join(" ")}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent"
      />
      <circle
        cx={(W).toFixed(1)}
        cy={(H - (points[points.length - 1] / max) * H).toFixed(1)}
        r="2.5"
        className="fill-accent"
      />
    </svg>
  );
}

export function ScoreHistorySection({ cards }: { cards: ProgressCard[] }) {
  if (cards.length === 0) {
    return (
      <div className="rounded-2xl border border-hairline bg-surface p-6">
        <h3 className="font-display text-lg font-bold text-ink">Your progress</h3>
        <p className="mt-2 text-sm text-body">
          Take a &ldquo;Predict your mark&rdquo; check and your score history
          shows up here — every retake charts how much you&apos;ve moved.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="font-display text-lg font-bold text-ink">Your progress</h3>
      {cards.map((c) => {
        const trend =
          c.prevPct === null ? null : c.latestPct === c.prevPct ? "flat" : c.latestPct > c.prevPct ? "up" : "down";
        return (
          <div
            key={`${c.level}/${c.slug}`}
            className="rounded-2xl border border-hairline bg-surface p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-display font-bold text-ink">{c.subjectName}</p>
                <p className="mt-0.5 text-sm text-body">
                  Latest:{" "}
                  <span className="text-ink">
                    {c.latestScore}/{c.latestTotal}
                  </span>{" "}
                  ·{" "}
                  <span className={`font-medium ${BAND_CLS[c.band] ?? "text-accent"}`}>
                    {c.latestEstimate}
                  </span>
                  {trend === "up" && <span className="ml-1 text-guarantee">▲ improving</span>}
                  {trend === "down" && <span className="ml-1 text-coral">▼ slipped</span>}
                </p>
              </div>
              <div className="text-accent">
                <Sparkline points={c.points} />
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="text-body">
                {c.cohortBeats !== null ? (
                  <>Beats <span className="font-medium text-ink">{c.cohortBeats}%</span> of {c.subjectName} takers</>
                ) : (
                  <>{c.points.length} attempt{c.points.length === 1 ? "" : "s"} logged</>
                )}
              </span>
              <Link
                href={`/diagnostic/${c.level}/${c.slug}`}
                className="font-medium text-accent hover:underline"
              >
                {c.weeksSince >= 2
                  ? `Retake — it's been ${c.weeksSince} weeks →`
                  : "Retake the check →"}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
