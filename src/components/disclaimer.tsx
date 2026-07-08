import { STANDARD_DISCLAIMER } from "@/lib/compliance";

/**
 * The mandated disclaimer. Appears on every product page, verbatim — see
 * `src/lib/compliance.ts`. Do not reword the text.
 */
export function DisclaimerBox() {
  return (
    <div className="rounded-xl border border-trust/15 bg-trust-soft/60 px-4 py-3 text-xs leading-relaxed text-trust">
      <p className="font-medium">Honesty first</p>
      <p className="mt-1">{STANDARD_DISCLAIMER}</p>
    </div>
  );
}

export function PlaceholderBanner({ label }: { label: string }) {
  return (
    <p className="rounded-lg border border-heat-3 bg-heat-3/20 px-4 py-2.5 text-sm font-medium text-ink">
      {label}
    </p>
  );
}
