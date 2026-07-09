export function heatBg(probability: number): string {
  if (probability >= 80) return "bg-heat-5";
  if (probability >= 65) return "bg-heat-4";
  if (probability >= 50) return "bg-heat-3";
  if (probability >= 35) return "bg-heat-2";
  return "bg-heat-1";
}

export function heatText(probability: number): string {
  // The ≥80 bars are brand yellow; yellow text is unreadable on white, so the
  // near-certain figures use the deep-amber ink from the same family instead.
  if (probability >= 80) return "text-accent-deep";
  return "text-accent";
}

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
  delayMs = 0,
  masked = false,
}: {
  topic: string;
  probability: number;
  delayMs?: number;
  masked?: boolean;
}) {
  const tier = forecastTier(probability);
  const label = TIER_LABEL[tier];
  return (
    <div className="flex items-center gap-3">
      <span className="w-36 shrink-0 truncate text-sm text-body sm:w-44" title={topic}>
        {topic}
      </span>
      <div
        className="h-3 flex-1 overflow-hidden rounded-full bg-heat-1"
        role="img"
        aria-label={
          masked
            ? `${topic}: confidence tier hidden in preview`
            : `${topic}: ${label} confidence`
        }
      >
        <div
          className={`heat-fill h-full rounded-full ${tierBg(tier)}`}
          style={{ width: `${TIER_FILL[tier]}%`, animationDelay: `${delayMs}ms` }}
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
