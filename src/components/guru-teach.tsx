"use client";

import { useState } from "react";

// "Guru, teach me": a small button beside a revealed answer that expands into
// a step-by-step walkthrough of that exact question, delivered in the Subject
// Guru voice from the game. Fully scripted from the question's own data
// (stem, answer, worked solution, the student's slip), zero API cost.

const GURU_BY_SUBJECT: Array<{ match: RegExp; emoji: string; name: string }> = [
  { match: /chem/i, emoji: "⚗️", name: "Guru Lim" },
  { match: /physic/i, emoji: "⚡", name: "Guru Wei" },
  { match: /bio/i, emoji: "🧬", name: "Guru Siti" },
  { match: /math/i, emoji: "📐", name: "Guru Rajan" },
  { match: /geog/i, emoji: "🌏", name: "Guru Chen" },
  { match: /hist|social/i, emoji: "📜", name: "Guru Mei" },
  { match: /account/i, emoji: "🧾", name: "Guru Faiz" },
  { match: /food|nutrition/i, emoji: "🍎", name: "Guru Devi" },
];

function guruFor(subjectName: string) {
  return (
    GURU_BY_SUBJECT.find((g) => g.match.test(subjectName)) ?? {
      emoji: "🎓",
      name: "The Guru",
    }
  );
}

// Split a worked solution into readable teaching beats (~2 sentences each).
function toBeats(solution: string): string[] {
  const sentences = solution
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  const beats: string[] = [];
  for (let i = 0; i < sentences.length; i += 2) {
    beats.push(sentences.slice(i, i + 2).join(" "));
  }
  return beats.length > 0 ? beats : [solution];
}

export function GuruTeach({
  subjectName,
  topic,
  stem,
  correctAnswer,
  given,
  correct,
  wasSure,
  workedSolution,
}: {
  subjectName: string;
  topic: string;
  stem: string;
  correctAnswer: string;
  given?: string;
  correct: boolean;
  wasSure?: boolean;
  workedSolution: string;
}) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const guru = guruFor(subjectName);

  const steps: string[] = [
    correct
      ? `You got it, but let's make sure it stays got. The question tests one idea from ${topic}: read it again with me. "${stem}"`
      : `No shame here, this is exactly how banking marks works. The question tests one idea from ${topic}: read it again with me. "${stem}"`,
    ...(!correct && given
      ? [
          wasSure
            ? `You answered "${given}" and you were SURE. That makes this a concept gap, not a slip, which is good news: concepts, we can fix today.`
            : `You answered "${given}". Let's see where the reasoning forked.`,
        ]
      : []),
    `The answer is: ${correctAnswer}.`,
    ...toBeats(workedSolution),
    correct
      ? `That's the whole trick. Same idea, different numbers next time, and it's your mark.`
      : `Now close this panel and explain the answer back to yourself in one sentence. If you can't yet, that's tomorrow's first practice question, and that's fine.`,
  ];

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setStep(0);
        }}
        className="inline-flex items-center gap-1.5 rounded-full border border-violet/40 bg-violet/10 px-2.5 py-0.5 text-xs font-medium text-violet transition-colors hover:bg-violet/20"
      >
        {guru.emoji} Guru, teach me
      </button>
    );
  }

  const last = step >= steps.length - 1;
  return (
    <div className="mt-3 w-full rounded-xl border border-violet/40 bg-night p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-bold uppercase tracking-wide text-violet">
          {guru.emoji} {guru.name} · {subjectName}
        </p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close guru"
          className="rounded px-1.5 text-body hover:text-ink"
        >
          ✕
        </button>
      </div>
      <p className="mt-3 min-h-[3rem] text-sm leading-relaxed text-ink">
        {steps[step]}
      </p>
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="font-mono text-[10px] text-body">
          {step + 1}/{steps.length}
        </span>
        <span className="flex gap-2">
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              className="rounded-lg border border-hairline px-3 py-1.5 text-xs font-medium text-body hover:text-ink"
            >
              Back
            </button>
          )}
          <button
            type="button"
            onClick={() => (last ? setOpen(false) : setStep((s) => s + 1))}
            className="rounded-lg bg-violet px-3 py-1.5 text-xs font-bold text-white"
          >
            {last ? "Got it" : "Next"}
          </button>
        </span>
      </div>
    </div>
  );
}
