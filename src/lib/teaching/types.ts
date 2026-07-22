// Shared shapes for the teaching packs (the tutor's diagnostic brain). One pack
// per topic: a misconception library plus a question bank whose every wrong
// option is tagged with the misconception it reveals. Authored by Coddy,
// grounded in the subject study notes.

export interface Misconception {
  id: string; // unique, topic-prefixed, e.g. "dyn-newton1-1"
  topicKey: string; // the app topicKey, e.g. "t3-dynamics"
  subtopic: string; // e.g. "newtons-first-law"
  label: string; // short name of the mistake (shown)
  belief: string; // the wrong belief in one sentence (shown)
  tell: string; // how a student reveals it (spoken)
  whyItHappens: string; // the honest cause (spoken)
  reteach: string; // Gugu's spoken re-explanation, warm and plain
  microExample: string; // a tiny worked example that exposes it (shown, _/^ notation)
  figure: string | null; // an svg filename from the notes, or null
  check: { question: string; answer: string }; // a quick confirm (spoken)
}

export interface TeachQuestion {
  id: string;
  topicKey: string;
  subtopic: string;
  stem: string; // the question (shown, _/^ notation)
  figure: string | null; // an svg filename from the notes, or null
  options: string[];
  correct: number; // 0-based index of the right option
  distractorMisconceptions: Record<number, string>; // optionIndex -> misconception id, for every wrong option
  walkthrough: string[]; // 3 to 6 spoken lines that teach the solution
  explain: string; // the spoken teaching summary
}
