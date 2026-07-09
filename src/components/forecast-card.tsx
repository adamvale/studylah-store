import { topForecast } from "@/lib/topics";
import { HeatBar } from "./heat";

// The hero visual: a sample of the actual product — a tiered topic forecast
// for one subject (Very High / High / Moderate / Watch, as in the PDF).
export function ForecastCard() {
  const rows = topForecast("chemistry", "o-level/chemistry-pure/hero");
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-5 shadow-sm sm:p-6">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="font-display text-base font-bold text-ink">
            Chemistry (Pure)
          </p>
          <p className="text-xs text-body">O-Level · Paper forecast</p>
        </div>
        <span className="rounded-full bg-trust-soft px-2.5 py-1 font-mono text-xs font-medium text-trust">
          2026 sitting
        </span>
      </div>
      <div className="mt-5 space-y-3">
        {rows.map((row, i) => (
          <HeatBar
            key={row.topic}
            topic={row.topic}
            probability={row.probability}
            delayMs={i * 120}
          />
        ))}
      </div>
      <p className="mt-5 border-t border-hairline pt-3 font-mono text-xs text-body">
        Sample forecast · full PDF covers every topic
      </p>
    </div>
  );
}
