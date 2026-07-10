// Shared constants for the mistake notebook (错题本).

// Why a mark was lost. "unset" is the auto-seeded default until the student
// classifies it — the notebook nudges them to pick one of the real four.
export const MISTAKE_REASONS = ["careless", "concept", "method", "time"] as const;
export type MistakeReason = (typeof MISTAKE_REASONS)[number] | "unset";

export const REASON_LABEL: Record<string, string> = {
  unset: "Not classified",
  careless: "Careless slip",
  concept: "Concept gap",
  method: "Method / working",
  time: "Ran out of time",
};

export function isValidReason(r: string): boolean {
  return r === "unset" || (MISTAKE_REASONS as readonly string[]).includes(r);
}
