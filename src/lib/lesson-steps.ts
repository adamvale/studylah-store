// The interactive-lesson step contract, Brilliant-style: a lesson is a short
// sequence of steps shown ONE at a time, mixing reading with active recall
// (tap to reveal, answer a question, see immediate feedback). Shared so any
// StudyLand surface can render a lesson through the same player, not just Life
// Skills. Pure types, safe on server and client.

export type LessonStep =
  // Read a beat, then continue.
  | { kind: "concept"; heading?: string; body: string }
  // Multiple choice with immediate feedback; the learner must answer to move on.
  | { kind: "choice"; question: string; options: string[]; correct: number; explain: string }
  // A prompt the learner thinks about, then taps to reveal the answer.
  | { kind: "reveal"; prompt: string; answer: string }
  // A highlighted takeaway.
  | { kind: "insight"; body: string };

export function isInteractive(step: LessonStep): boolean {
  return step.kind === "choice" || step.kind === "reveal";
}
