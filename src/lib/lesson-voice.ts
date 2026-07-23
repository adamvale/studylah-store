import type { LessonStep } from "@/lib/lesson-steps";

// Gugu's spoken personality for lessons, shared by the player (which speaks
// these live) and scripts/gugu-tts.ts (which pre-generates premium audio for
// every FIXED line). Keeping them here means the two never drift.

export const PROBLEM_KINDS = ["slider", "order", "match", "tiles", "plot", "circuit", "cloze", "spoterror", "classify", "graphpick"] as const;
export function isProblem(kind: LessonStep["kind"]): boolean {
  return (PROBLEM_KINDS as readonly string[]).includes(kind);
}
export function isQuestion(kind: LessonStep["kind"]): boolean {
  return kind === "choice" || kind === "open" || isProblem(kind);
}

// Deterministic rotation so consecutive lines differ but stay stable per step.
export function pick<T>(pool: T[], n: number): T {
  return pool[((n % pool.length) + pool.length) % pool.length];
}

// A warm, natural lead-in when a question appears (no hint; a tutor helps when asked).
export const OPENER_LEADS = [
  "Alright, let's look at this one.",
  "Okay, how about this one?",
  "Here is another for you.",
  "Let's try this next.",
  "Now, see what you make of this.",
  "Good, on we go. Take a look at this one.",
  "Right then, have a read of this.",
  "This one next. Take your time.",
];
// A short cue for interactions that need direction (choice needs none).
export const INTERACTION_CUE: Partial<Record<LessonStep["kind"], string>> = {
  slider: "Slide across to the value you think is right.",
  order: "Put these in the right order.",
  match: "Match up each one to its pair.",
  tiles: "Build the answer from the pieces.",
  plot: "Tap the spot on the grid.",
  circuit: "Close the switches you need.",
  cloze: "Fill in each blank.",
  spoterror: "See if you can spot the slip.",
  classify: "Sort each one into its group.",
  graphpick: "Pick the graph that fits.",
  open: "Have a go at writing your answer.",
};
export function openerFor(kind: LessonStep["kind"], n: number): string | undefined {
  if (!isQuestion(kind)) return undefined;
  const lead = pick(OPENER_LEADS, n);
  const cue = INTERACTION_CUE[kind];
  return cue ? `${lead} ${cue}` : lead;
}

// Warm praise on a correct answer, and a natural on-you-go nudge.
export const CORRECT_PRAISE = [
  "Yes, that is it.",
  "Exactly right, well done.",
  "Good job, that is correct.",
  "Nice, you have got it.",
  "Lovely, spot on.",
  "That is the one, nicely done.",
];
export const NEXT_NUDGE = [
  "Let's try the next one.",
  "On to the next.",
  "How about this next one.",
  "Right, let's keep going.",
];
// Lead-in + invitation when a pick is wrong. (The full line embeds the hint, so
// it is dynamic and cannot be pre-generated; those play in the device voice.)
export const WRONG_LEAD = ["Not quite.", "Hmm, not this time.", "Close, but not that one.", "Not quite that one."];
export const RETRY_NUDGE = ["Have another go.", "Give it another try.", "Want to try once more?", "Have another look."];

// Every FIXED spoken line the engine can produce for a question opener or a
// correct-answer reaction, so premium TTS can be generated for them. The
// wrong-answer line is omitted (it embeds a dynamic hint).
export function fixedVoiceLines(): string[] {
  const out = new Set<string>();
  for (const lead of OPENER_LEADS) {
    out.add(lead);
    for (const cue of Object.values(INTERACTION_CUE)) out.add(`${lead} ${cue}`);
  }
  for (const base of CORRECT_PRAISE) {
    out.add(base);
    for (const nudge of NEXT_NUDGE) out.add(`${base} ${nudge}`);
  }
  return [...out];
}
