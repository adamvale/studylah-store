import Link from "next/link";

// The risk-reversal, in one reusable badge. The money-back guarantee is a real
// on-site feature (src/lib/compliance.ts allows the NOUN "guarantee") — putting
// it beside every buy decision is what makes trying feel risk-free. Keep the
// wording honest: it states the exact refund condition, never a grade promise.
//
// `variant`:
//   "pill"   — compact inline chip, for sticky bars and buttons rows.
//   "line"   — one plain sentence, for microcopy under a CTA.
//   "card"   — bordered block with the full condition + FAQ link, for buy boxes.

const SHORT = "Money-back guarantee";
const CONDITION =
  "Full refund if fewer than 3 of our top-5 forecast topics appear in the paper — email your order ID within 14 days of the exam.";

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M8 1.5l5 2v4c0 3-2.1 5.2-5 6.5C5.1 12.7 3 10.5 3 7.5v-4l5-2z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M5.8 8l1.6 1.6L10.4 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GuaranteeBadge({
  variant = "pill",
  className = "",
}: {
  variant?: "pill" | "line" | "card";
  className?: string;
}) {
  if (variant === "line") {
    return (
      <span className={`inline-flex items-center gap-1.5 text-xs text-guarantee ${className}`}>
        <ShieldIcon />
        <span>{SHORT} — {CONDITION}</span>
      </span>
    );
  }

  if (variant === "card") {
    return (
      <div
        className={`flex items-start gap-3 rounded-xl border border-guarantee/40 bg-guarantee/10 px-4 py-3 ${className}`}
      >
        <span className="mt-0.5 shrink-0 text-guarantee">
          <ShieldIcon className="h-4 w-4" />
        </span>
        <p className="text-sm text-ink">
          <span className="font-bold text-guarantee">{SHORT}.</span> {CONDITION}{" "}
          <Link href="/faq" className="font-medium text-guarantee underline">
            How it works
          </Link>
        </p>
      </div>
    );
  }

  // pill
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-guarantee/40 bg-guarantee/10 px-2.5 py-1 text-xs font-medium text-guarantee ${className}`}
    >
      <ShieldIcon />
      {SHORT}
    </span>
  );
}
