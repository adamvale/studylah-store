// The interactive-lesson step contract, Brilliant-style: a lesson is a short
// sequence of steps shown ONE at a time, mixing reading with active recall and
// hands-on manipulation (drag a value, order the steps, match, build from
// tiles, plot a point, wire a circuit) with immediate feedback.
//
// Problem steps also carry Gugu's *scripted* guidance: `ask` is the line she
// opens with ("this is a titration question, what do you think?"), `hints` is
// the escalating help ladder tapped one at a time, and `explain` is the
// teaching summary. Every one of those is the SAME for every student and is
// read aloud on demand with the device's own speech, so it costs nothing to
// run. Pure types, safe on server and client.

// Fields shared by every "problem" step: Gugu's opening line and the help
// ladder. Both optional so plain content still works.
interface Guided {
  ask?: string; // Gugu's opening prompt, spoken/shown when the step opens
  hints?: string[]; // escalating nudges revealed one at a time via "Help"
}

export type LessonStep =
  // Read a beat, then continue.
  | { kind: "concept"; heading?: string; body: string }
  // Multiple choice with immediate feedback; the learner must answer to move on.
  | ({ kind: "choice"; question: string; options: string[]; correct: number; explain: string } & Guided)
  // A prompt the learner thinks about, then taps to reveal the answer.
  | { kind: "reveal"; prompt: string; answer: string }
  // A highlighted takeaway.
  | { kind: "insight"; body: string }
  // Drag a slider to a target band and watch it respond; solved when in range.
  | ({
      kind: "slider";
      prompt: string;
      min: number;
      max: number;
      step?: number;
      unit?: string;
      start: number; // where the handle begins (deliberately off target)
      targetMin: number;
      targetMax: number;
      explain: string;
    } & Guided)
  // Arrange the items into the correct order (given here already in order).
  | ({ kind: "order"; prompt: string; items: string[]; explain: string } & Guided)
  // Tap a left item then its right partner; solved when every pair is matched.
  | ({ kind: "match"; prompt: string; pairs: { left: string; right: string }[]; explain: string } & Guided)
  // Tap tiles from a bank to build the answer in order (tiles may include
  // distractors); solved when the built line equals `answer`.
  | ({ kind: "tiles"; prompt: string; tiles: string[]; answer: string[]; explain: string } & Guided)
  // Tap a grid to plot a point; solved when within `tolerance` of the target.
  | ({
      kind: "plot";
      prompt: string;
      xLabel?: string;
      yLabel?: string;
      xMax: number;
      yMax: number;
      targetX: number;
      targetY: number;
      tolerance?: number; // grid units, default 0 (exact)
      explain: string;
    } & Guided)
  // Toggle switches; solved when exactly the `needed` switches are closed and
  // the lamp lights.
  | ({ kind: "circuit"; prompt: string; switches: { id: string; label: string }[]; needed: string[]; explain: string } & Guided);

// Every human-facing string in a step, for compliance scanning and search.
export function stepText(step: LessonStep): string[] {
  const guided = "ask" in step ? [step.ask ?? "", ...(step.hints ?? [])] : [];
  switch (step.kind) {
    case "concept":
      return [step.heading ?? "", step.body];
    case "insight":
      return [step.body];
    case "reveal":
      return [step.prompt, step.answer];
    case "choice":
      return [step.question, ...step.options, step.explain, ...guided];
    case "slider":
      return [step.prompt, step.unit ?? "", step.explain, ...guided];
    case "order":
      return [step.prompt, ...step.items, step.explain, ...guided];
    case "match":
      return [step.prompt, ...step.pairs.flatMap((p) => [p.left, p.right]), step.explain, ...guided];
    case "tiles":
      return [step.prompt, ...step.tiles, ...step.answer, step.explain, ...guided];
    case "plot":
      return [step.prompt, step.xLabel ?? "", step.yLabel ?? "", step.explain, ...guided];
    case "circuit":
      return [step.prompt, ...step.switches.map((s) => s.label), step.explain, ...guided];
  }
}

export function isInteractive(step: LessonStep): boolean {
  return (
    step.kind === "choice" ||
    step.kind === "reveal" ||
    step.kind === "slider" ||
    step.kind === "order" ||
    step.kind === "match" ||
    step.kind === "tiles" ||
    step.kind === "plot" ||
    step.kind === "circuit"
  );
}
