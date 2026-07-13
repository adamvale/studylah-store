import Link from "next/link";
import type { SubjectRisk } from "@/lib/server/risk";
import { RISK_CAVEAT } from "@/lib/server/risk";
import type { CalibrationBucket } from "@/lib/server/study";

// Server-rendered. The meter is a ranking device: it must always suggest the
// next action that shrinks it.

function meterColour(marks: number): string {
  if (marks >= 60) return "bg-coral";
  if (marks >= 30) return "bg-accent";
  return "bg-guarantee";
}

export function RiskMeterSection({ risks }: { risks: SubjectRisk[] }) {
  if (risks.length === 0) return null;

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-lg font-bold text-ink">Marks at risk</h3>
        <Link
          href="/account/rescue"
          className="text-xs font-medium text-accent hover:underline"
        >
          Behind? Build my rescue plan →
        </Link>
      </div>

      {risks.map((r) => (
        <div
          key={`${r.level}/${r.slug}`}
          className="rounded-2xl border border-hairline bg-surface p-5"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-display font-bold text-ink">
              {r.name}
              <span className="ml-2 font-mono text-xs font-normal text-body">
                {r.levelShort}
              </span>
            </p>
            <p className="font-display text-2xl font-black text-ink">
              ~{r.marksAtRisk}
              <span className="text-sm font-bold text-body"> / 100 at risk</span>
            </p>
          </div>

          <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-night">
            <div
              className={`h-full rounded-full ${meterColour(r.marksAtRisk)}`}
              style={{ width: `${Math.min(r.marksAtRisk, 100)}%` }}
            />
          </div>

          <ul className="mt-3 space-y-1 text-xs text-body">
            {r.fromVeryHigh > 0 && (
              <li>
                • ~{r.fromVeryHigh} on{" "}
                <span className="font-medium text-tier-veryhigh">VERY HIGH</span> topics
                not yet confident
                {r.untouchedVeryHigh.length > 0 && (
                  <> ({r.untouchedVeryHigh.length} not even started)</>
                )}{" "}
, {" "}
                <Link href="/account/study" className="font-medium text-accent hover:underline">
                  work the plan →
                </Link>
              </li>
            )}
            {r.fromHigh > 0 && (
              <li>
                • ~{r.fromHigh} on <span className="font-medium text-tier-high">HIGH</span>{" "}
                topics not yet confident
              </li>
            )}
            {r.fromMistakes > 0 && (
              <li>
                • ~{r.fromMistakes} added by {r.unresolvedMistakes} unresolved mistake
                {r.unresolvedMistakes === 1 ? "" : "s"}, {" "}
                <Link href="/account/mistakes" className="font-medium text-accent hover:underline">
                  clear them →
                </Link>
              </li>
            )}
            {r.marksAtRisk <= 12 && (
              <li className="text-guarantee">
                • Fully worked, the residual is retention: keep topics warm with the
                daily three and a timed Rehearsal.
              </li>
            )}
          </ul>
        </div>
      ))}

      <p className="text-xs text-body/70">{RISK_CAVEAT}</p>
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
