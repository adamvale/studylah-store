import { sgd } from "@/lib/catalogue";

// Shared price-display primitives so the /pricing page and the subject-page
// tier selector always look identical. Pure presentational, no hooks, safe in
// both server and client components.

// The Higgsfield-style discount chip that sits beside a tier name.
export function PctChip({ price, value }: { price: number; value: number }) {
  const pct = Math.round((1 - price / value) * 100);
  if (pct <= 0) return null;
  return (
    <span className="shrink-0 rounded-full bg-coral px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wide text-night sm:px-2.5 sm:text-[11px]">
      {pct}% off
    </span>
  );
}

// The per-card top-lit gradient washes: neutral for STARTER, lime for PLUS,
// crimson for ULTRA (bundles reuse them in order).
export const CARD_TINTS = {
  grey: "linear-gradient(165deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0) 75%)",
  lime: "linear-gradient(165deg, rgba(190,242,0,0.20) 0%, rgba(190,242,0,0.05) 40%, rgba(190,242,0,0) 75%)",
  crimson: "linear-gradient(165deg, rgba(255,32,86,0.26) 0%, rgba(255,32,86,0.07) 40%, rgba(255,32,86,0) 75%)",
} as const;

export function cardStyle(tint: keyof typeof CARD_TINTS) {
  return { backgroundImage: CARD_TINTS[tint], backgroundColor: "#1d1545" };
}

// The three tiers in order map to these tints.
export const TIER_TINT: Record<
  "essential" | "strategic" | "master",
  keyof typeof CARD_TINTS
> = { essential: "grey", strategic: "lime", master: "crimson" };

// Reference-style price row: struck original in bold neon red (thick strike),
// the actual price slightly bigger in white, then a small bold grey save line.
export function PriceRow({
  price,
  value,
  className = "",
}: {
  price: number;
  value?: number;
  className?: string;
}) {
  const discounted = value !== undefined && value > price;
  return (
    <div className={className}>
      <p className="flex flex-wrap items-baseline gap-1.5 sm:gap-2">
        {discounted && (
          <span className="font-display text-sm font-black text-[#ff2056] line-through decoration-[3px] sm:text-2xl">
            {sgd(value)}
          </span>
        )}
        <span className="font-display text-lg font-black text-white sm:text-3xl">
          {sgd(price)}
        </span>
      </p>
      {discounted && (
        <p className="mt-1 text-[10px] font-bold text-body sm:text-xs">
          Save {sgd(value - price)}
        </p>
      )}
    </div>
  );
}
