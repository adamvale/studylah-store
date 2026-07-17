import Link from "next/link";
import type { SubjectRisk } from "@/lib/server/risk";
import { RISK_CAVEAT } from "@/lib/server/risk";
import type { CalibrationBucket } from "@/lib/server/study";

// Server-rendered. The meter is a ranking device: it must always suggest the
// next action that shrinks it.

// Ring gauge for one subject; the number and colour do the talking.
function RiskRing({ pct }: { pct: number }) {
  const tone = pct >= 60 ? "#ff6b6b" : pct >= 30 ? "#ffdc00" : "#3ddc84";
  const C = 2 * Math.PI * 24;
  return (
    <svg viewBox="0 0 56 56" className="h-16 w-16 shrink-0" aria-hidden>
      <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="5" />
      <circle
        cx="28" cy="28" r="24" fill="none" stroke={tone} strokeWidth="5"
        strokeLinecap="round" strokeDasharray={`${(pct / 100) * C} ${C}`}
        transform="rotate(-90 28 28)"
      />
      <text x="28" y="33" textAnchor="middle" fontSize="14" fontWeight="800" fill="#f3f1ff">
        {pct}
      </text>
    </svg>
  );
}

export function RiskMeterSection({ risks }: { risks: SubjectRisk[] }) {
  if (risks.length === 0) return null;

  // Sorted worst-first so the eye lands on the real problem, not the list.
  const sorted = [...risks].sort((a, b) => b.marksAtRisk - a.marksAtRisk);

  return (
    <section>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-lg font-extrabold text-ink">Marks at risk</h3>
        <Link
          href="/account/rescue"
          className="text-xs font-bold text-accent hover:underline"
        >
          Behind? Build my rescue plan →
        </Link>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {sorted.map((r) => {
          const pct = Math.min(r.marksAtRisk, 100);
          // ONE next action per subject, the biggest leak first.
          const action =
            r.fromVeryHigh > 0
              ? {
                  text: `~${r.fromVeryHigh} on VERY HIGH topics${
                    r.untouchedVeryHigh.length > 0 ? ` (${r.untouchedVeryHigh.length} untouched)` : ""
                  }`,
                  href: "/account/study",
                  cta: "Work the plan",
                }
              : r.fromMistakes > 0
                ? {
                    text: `~${r.fromMistakes} from ${r.unresolvedMistakes} unresolved mistake${
                      r.unresolvedMistakes === 1 ? "" : "s"
                    }`,
                    href: "/account/mistakes",
                    cta: "Clear them",
                  }
                : {
                    text: "Fully worked, keep it warm with the daily three",
                    href: "/account",
                    cta: "Daily three",
                  };
          return (
            <div key={`${r.level}/${r.slug}`} className="glass flex items-center gap-4 p-4">
              <RiskRing pct={pct} />
              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-sm font-bold text-ink" title={r.name}>
                  {r.name}
                  <span className="ml-1.5 text-[11px] font-medium text-body">{r.levelShort}</span>
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-body">{action.text}</p>
                <Link href={action.href} className="mt-1 inline-block text-xs font-bold text-accent hover:underline">
                  {action.cta} →
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-3 text-xs text-body/70">{RISK_CAVEAT}</p>
    </section>
  );
}

// ── Calibration card ─────────────────────────────────────────────────────

const BUCKET_LABEL: Record<string, string> = {
  sure: "Sure",
  unsure: "Think so",
  guess: "Guessing",
};

export function CalibrationCard({
  taps,
  buckets,
}: {
  taps: number;
  buckets: CalibrationBucket[];
}) {
  if (taps < 6) return null; // not enough data to say anything useful

  const sure = buckets.find((b) => b.level === "sure");

  return (
    <section className="rounded-2xl border border-hairline bg-surface p-5">
      <h3 className="font-display text-lg font-bold text-ink">
        How good is your &ldquo;sure&rdquo;?
      </h3>
      <p className="mt-1 text-xs text-body">
        Based on {taps} confidence taps in your daily practice.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {buckets.map((b) => (
          <div key={b.level} className="rounded-xl border border-hairline bg-night px-4 py-3">
            <p className="text-xs text-body">{BUCKET_LABEL[b.level]}</p>
            <p className="mt-1 font-display text-2xl font-black text-ink">
              {b.pctRight}%
              <span className="ml-1 text-xs font-normal text-body">right · {b.n}</span>
            </p>
          </div>
        ))}
      </div>
      {sure && sure.n >= 5 && sure.pctRight < 80 && (
        <p className="mt-3 text-sm text-body">
          When you say <span className="font-medium text-ink">Sure</span>, you&apos;re
          right {sure.pctRight}% of the time. A wrong &ldquo;sure&rdquo; is almost never
          carelessness, file those as{" "}
          <span className="font-medium text-coral">concept gaps</span> in your notebook
          and re-learn the idea, not just the question.
        </p>
      )}
      {sure && sure.n >= 5 && sure.pctRight >= 90 && (
        <p className="mt-3 text-sm text-guarantee">
          Well calibrated, when you say sure, you deliver. Trust that instinct in the
          paper and bank those marks fast.
        </p>
      )}
    </section>
  );
}
