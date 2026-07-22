// The interactive-lesson step contract, Brilliant-style: a lesson is a short
// sequence of steps shown ONE at a time, mixing reading with active recall and
// hands-on manipulation (drag a value, order the steps, match the pairs) with
// immediate feedback. Shared so any StudyLand surface can render a lesson
// through the same player. Pure types, safe on server and client.

export type LessonStep =
  // Read a beat, then continue.
  | { kind: "concept"; heading?: string; body: string }
  // Multiple choice with immediate feedback; the learner must answer to move on.
  | { kind: "choice"; question: string; options: string[]; correct: number; explain: string }
  // A prompt the learner thinks about, then taps to reveal the answer.
  | { kind: "reveal"; prompt: string; answer: string }
  // A highlighted takeaway.
  | { kind: "insight"; body: string }
  // Drag a slider to a target band and watch it respond; solved when in range.
  | {
      kind: "slider";
      prompt: string;
      min: number;
      max: number;
      step?: number;
      unit?: string;
      start: number; // where the handle begins (deliberately off target)
      targetMin: number;
      targetMax: number;
      explain: string; // shown once the value lands in the band
    }
  // Arrange the items into the correct order (given here already in order).
  | { kind: "order"; prompt: string; items: string[]; explain: string }
  // Tap a left item then its right partner; solved when every pair is matched.
  | { kind: "match"; prompt: string; pairs: { left: string; right: string }[]; explain: string };

// Every human-facing string in a step, for compliance scanning and search.
export function stepText(step: LessonStep): string[] {
  switch (step.kind) {
    case "concept":
      return [step.heading ?? "", step.body];
    case "insight":
      return [step.body];
    case "reveal":
      return [step.prompt, step.answer];
    case "choice":
      return [step.question, ...step.options, step.explain];
    case "slider":
      return [step.prompt, step.unit ?? "", step.explain];
    case "order":
      return [step.prompt, ...step.items, step.explain];
    case "match":
      return [step.prompt, ...step.pairs.flatMap((p) => [p.left, p.right]), step.explain];
  }
}

export function isInteractive(step: LessonStep): boolean {
  return (
    step.kind === "choice" ||
    step.kind === "reveal" ||
    step.kind === "slider" ||
    step.kind === "order" ||
    step.kind === "match"
  );
}
