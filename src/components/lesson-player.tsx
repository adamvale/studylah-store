"use client";

import { useState } from "react";
import type { LessonStep } from "@/lib/lesson-steps";
import { NamedIcon } from "@/components/icons";
import { Sci } from "@/components/sci-text";

// The interactive lesson player: Brilliant-style, one step at a time, with
// active recall and immediate feedback. Reusable across any StudyLand surface,
// pass a sequence of LessonSteps and a completion handler.

export function LessonPlayer({
  steps,
  onComplete,
}: {
  steps: LessonStep[];
  onComplete: () => void;
}) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const step = steps[i];
  const last = i === steps.length - 1;
  const canContinue =
    step.kind === "choice" ? picked !== null : step.kind === "reveal" ? revealed : true;

  function next() {
    if (last) {
      onComplete();
      return;
    }
    setI((n) => n + 1);
    setPicked(null);
    setRevealed(false);
  }

  return (
    <div className="flex min-h-[60vh] flex-col">
      {/* Progress */}
      <div className="flex items-center gap-2 pb-4">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-night">
          <div
            className="h-full rounded-full bg-accent transition-all"
            style={{ width: `${((i + 1) / steps.length) * 100}%` }}
          />
        </div>
        <span className="font-mono text-[10px] text-body">
          {i + 1}/{steps.length}
        </span>
      </div>

      <div className="flex-1">
        {(step.kind === "concept" || step.kind === "insight") && (
          <div
            className={
              step.kind === "insight"
                ? "glass bg-gradient-to-br from-accent/15 to-transparent p-5"
                : "glass bg-gradient-to-br from-white/5 to-transparent p-5"
            }
          >
            {step.kind === "insight" && (
              <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
                <NamedIcon name="sparkle" size={14} /> Takeaway
              </p>
            )}
            {step.kind === "concept" && step.heading && (
              <p className="font-display text-xl font-bold text-ink">{step.heading}</p>
            )}
            <p className={`${step.kind === "concept" && step.heading ? "mt-2" : ""} text-base leading-relaxed text-ink`}>
              <Sci>{step.body}</Sci>
            </p>
          </div>
        )}

        {step.kind === "reveal" && (
          <div className="glass bg-gradient-to-br from-white/5 to-transparent p-5">
            <p className="font-display text-lg font-bold text-ink"><Sci>{step.prompt}</Sci></p>
            {revealed ? (
              <p className="mt-3 border-t border-white/10 pt-3 text-base leading-relaxed text-ink">
                <Sci>{step.answer}</Sci>
              </p>
            ) : (
              <button
                type="button"
                onClick={() => setRevealed(true)}
                className="mt-4 w-full rounded-xl bg-accent/15 py-3 text-sm font-bold text-accent"
              >
                Show me
              </button>
            )}
          </div>
        )}

        {step.kind === "choice" && (
          <div>
            <p className="font-display text-lg font-bold text-ink"><Sci>{step.question}</Sci></p>
            <div className="mt-3 space-y-2">
              {step.options.map((opt, oi) => {
                const chosen = picked === oi;
                const isCorrect = oi === step.correct;
                const show = picked !== null;
                const tone = !show
                  ? "border-hairline"
                  : isCorrect
                    ? "border-guarantee bg-guarantee/10"
                    : chosen
                      ? "border-signal bg-signal/10"
                      : "border-hairline opacity-60";
                return (
                  <button
                    key={oi}
                    type="button"
                    disabled={show}
                    onClick={() => setPicked(oi)}
                    className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm text-ink transition-colors ${tone}`}
                  >
                    <span className="flex-1"><Sci>{opt}</Sci></span>
                    {show && isCorrect && <NamedIcon name="check" size={16} />}
                  </button>
                );
              })}
            </div>
            {picked !== null && (
              <div className="glass mt-3 bg-gradient-to-br from-white/5 to-transparent p-4">
                <p className={`text-xs font-bold uppercase tracking-wide ${picked === step.correct ? "text-guarantee" : "text-accent"}`}>
                  {picked === step.correct ? "Correct" : "Not quite"}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-body"><Sci>{step.explain}</Sci></p>
              </div>
            )}
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={next}
        disabled={!canContinue}
        className="mt-5 w-full rounded-xl bg-accent py-3.5 text-sm font-bold text-night disabled:opacity-40"
      >
        {last ? "Finish lesson" : "Continue"}
      </button>
    </div>
  );
}
