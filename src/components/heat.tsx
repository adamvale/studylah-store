// The four confidence tiers used across the product — the same labels the
// Forecast PDFs print (VERY HIGH / HIGH / MODERATE / WATCH). The site shows
// these tiers, never a raw percentage, so it reads identically to the PDF.
export type ForecastTier = "very-high" | "high" | "moderate" | "watch";

export function forecastTier(probability: number): ForecastTier {
  if (probability >= 78) return "very-high";
  if (probability >= 62) return "high";
  if (probability >= 46) return "moderate";
  return "watch";
}

export const TIER_LABEL: Record<ForecastTier, string> = {
  "very-high": "Very High",
  high: "High",
  moderate: "Moderate",
  watch: "Watch",
};

// Discrete bar fill per tier — a visual weight, never a precise value.
const TIER_FILL: Record<ForecastTier, number> = {
  "very-high": 92,
  high: 70,
  moderate: 50,
  watch: 32,
};

// The bar fill behind a topic — uses the same tier palette as the pill.
export function tierBg(tier: ForecastTier): string {
  switch (tier) {
    case "very-high":
      return "bg-tier-veryhigh";
    case "high":
      return "bg-tier-high";
    case "moderate":
      return "bg-tier-moderate";
    case "watch":
      return "bg-tier-watch";
  }
}

export function tierText(tier: ForecastTier): string {
  switch (tier) {
    case "very-high":
      return "text-tier-veryhigh";
    case "high":
      return "text-tier-high";
    case "moderate":
      return "text-tier-moderate";
    case "watch":
      return "text-tier-watch";
  }
}

// The tier badge, styled exactly like the Forecast PDFs: a solid rounded pill,
// white bold uppercase label, one colour per tier.
export function TierPill({
  tier,
  className = "",
}: {
  tier: ForecastTier;
  className?: string;
}) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-md ${tierBg(tier)} px-2 py-0.5 text-[11px] font-bold uppercase leading-tight tracking-wide text-white ${className}`}
    >
      {TIER_LABEL[tier]}
    </span>
  );
}

export function HeatBar({
  topic,
  probability,
  tier: tierProp,
  delayMs = 0,
  masked = false,
}: {
  topic: string;
  // Either pass the real tier (from a subject's prediction table) or a
  // probability for the derived one — real data wins when both exist.
  probability?: number;
  tier?: ForecastTier;
  delayMs?: number;
  masked?: boolean;
}) {
  const tier = tierProp ?? forecastTier(probability ?? 0);
  const label = TIER_LABEL[tier];
  // On phones the topic name gets its own line — it IS the information; the
  // bar is decoration. From `sm` up, the classic label · bar · pill row.
  // Masked rows hide BOTH the name and the tier: these are the product's real
  // calls now, so the preview teases their existence, not their content.
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
      <span
        className={`truncate text-sm text-body sm:w-44 sm:shrink-0 ${
          masked ? "select-none blur-[5px]" : ""
        }`}
        title={masked ? undefined : topic}
        aria-hidden={masked}
      >
        {masked ? "Hidden until purchase" : topic}
      </span>
      <div className="flex flex-1 items-center gap-3">
        <div
          className="h-3 flex-1 overflow-hidden rounded-full bg-heat-1"
          role="img"
          aria-label={
            masked
              ? "Forecast call hidden in the preview"
              : `${topic}: ${label} confidence`
          }
        >
          <div
            className={`heat-fill h-full rounded-full ${masked ? "bg-hairline" : tierBg(tier)}`}
            style={{
              width: masked ? "60%" : `${TIER_FILL[tier]}%`,
              animationDelay: `${delayMs}ms`,
            }}
          />
        </div>
        <span className="flex w-24 shrink-0 justify-end" aria-hidden={masked}>
          {masked ? (
            <span className="select-none rounded-md bg-hairline px-2 py-0.5 text-[11px] font-bold uppercase leading-tight tracking-wide text-body/50 blur-[4px]">
              Hidden
            </span>
          ) : (
            <TierPill tier={tier} />
          )}
        </span>
      </div>
    </div>
  );
}

// Small decorative strip of heat tiles, used as a section divider motif.
export function HeatTiles({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-1 ${className}`} aria-hidden="true">
      <span className="h-2 w-6 rounded-sm bg-heat-1" />
      <span className="h-2 w-6 rounded-sm bg-heat-2" />
      <span className="h-2 w-6 rounded-sm bg-heat-3" />
      <span className="h-2 w-6 rounded-sm bg-heat-4" />
      <span className="h-2 w-6 rounded-sm bg-heat-5" />
    </div>
  );
}
