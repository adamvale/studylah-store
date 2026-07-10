import { realTopCalls } from "@/lib/forecast-tables";
import { HeatBar } from "./heat";

// The hero visual: the REAL top calls from the Chemistry (Pure) Forecast's
// 2026 prediction table — No. 1 in the open, the rest masked until purchase.
export function ForecastCard() {
  const rows = realTopCalls("o-level", "chemistry-pure", 5);
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-5 shadow-sm sm:p-6">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="font-display text-base font-bold text-ink">
            Chemistry (Pure)
          </p>
          <p className="text-xs text-body">O-Level · Paper forecast</p>
        </div>
        <span className="rounded-full bg-trust-soft px-2.5 py-1 font-mono text-xs font-medium text-accent">
          2026 sitting
        </span>
      </div>
      <div className="mt-5 space-y-3">
        {/* Only the No. 1 call ships to the browser — masked rows carry no
            real data (a topic key/prop would leak via the RSC payload). */}
        {rows.map((row, i) =>
          i === 0 ? (
            <HeatBar key={row.topic} topic={row.topic} tier={row.tier} />
          ) : (
            <HeatBar key={`masked-${i}`} topic="" delayMs={i * 120} masked />
          )
        )}
      </div>
      <p className="mt-5 border-t border-hairline pt-3 font-mono text-xs text-body">
        The real 2026 table&apos;s top call — the full PDF tiers every topic
      </p>
    </div>
  );
}
