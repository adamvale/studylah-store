import { STANDARD_DISCLAIMER } from "@/lib/compliance";

/**
 * The mandated disclaimer. Appears on every product page, verbatim, see
 * `src/lib/compliance.ts`. Do not reword the text.
 */
export function DisclaimerBox() {
  return (
    <div className="rounded-xl border border-hairline bg-trust-soft/60 px-4 py-3 text-xs leading-relaxed text-trust">
      <p className="font-medium">Honesty first</p>
      <p className="mt-1">{STANDARD_DISCLAIMER}</p>
    </div>
  );
}
