"use client";

import { useEffect, useMemo, useState } from "react";
import { ImmersiveShell } from "@/components/immersive-shell";
import { Sci } from "@/components/sci-text";
import { NamedIcon } from "@/components/icons";
import { speak, stopSpeaking } from "@/lib/speak";
import { physicsFigureSrc, type TeachingPack } from "@/lib/teaching";
import { AnimatedFigure } from "@/components/animated-figure";

// The teaching-moment player. Runs a topic's question bank; when a student picks
// a wrong option, it looks up the misconception that answer reveals and has Gugu
// re-teach exactly that, with the diagram, a micro-example and a quick check,
// the way a human tutor responds to your specific mistake. On a correct answer
// she confirms and can walk through the working. Scripted voice, no AI, no cost.

function Figure({ figure }: { figure: string | null | undefined }) {
  const src = physicsFigureSrc(figure);
  if (!src) return null;
  return (
    <div className="mt-3 overflow-hidden rounded-xl border border-hairline bg-white/5 p-2">
      <AnimatedFigure src={src} />
    </div>
  );
}

// Shuffle 0..n-1 so options never sit in a fixed position (some packs author
// the correct answer as A every time; this defends against that bias).
function shuffleOrder(n: number): number[] {
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function MisconceptionQuiz({
  pack,
  title,
  subtitle,
  onExit,
  onComplete,
}: {
  pack: TeachingPack;
  title?: string;
  subtitle?: string;
  onExit?: () => void;
  onComplete?: () => void;
}) {
  const [qi, setQi] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [showWalk, setShowWalk] = useState(false);
  const [checkOpen, setCheckOpen] = useState(false);

  const q = pack.questions[qi];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const order = useMemo(() => shuffleOrder(q.options.length), [qi]);
  const last = qi === pack.questions.length - 1;
  const isCorrect = picked === q.correct;
  const wrongMis =
    picked != null && picked !== q.correct ? pack.byId[q.distractorMisconceptions[picked]] : undefined;

  // Gugu re-teaches the misconception on a wrong pick, or confirms on a right one.
  useEffect(() => {
    if (wrongMis) speak(wrongMis.reteach);
    else if (isCorrect) speak(q.explain);
    return () => stopSpeaking();
  }, [wrongMis, isCorrect, q.explain]);

  function pick(i: number) {
    if (isCorrect) return;
    setCheckOpen(false);
    setPicked(i);
  }
  function tryAgain() {
    stopSpeaking();
    setPicked(null);
    setCheckOpen(false);
  }
  function next() {
    stopSpeaking();
    if (last) {
      onComplete?.();
      return;
    }
    setQi((n) => n + 1);
    setPicked(null);
    setShowWalk(false);
    setCheckOpen(false);
  }

  return (
    <ImmersiveShell
      onExit={onExit}
      title={title}
      subtitle={subtitle}
      progress={{ current: qi + 1, total: pack.questions.length }}
      footer={
        <button
          type="button"
          onClick={next}
          disabled={!isCorrect}
          className="w-full rounded-xl bg-accent py-3.5 text-sm font-bold text-night disabled:opacity-40"
        >
          {last ? "Finish" : "Next question"}
        </button>
      }
    >
      <p className="font-display text-lg font-bold text-ink"><Sci>{q.stem}</Sci></p>
      <Figure figure={q.figure} />

      <div className="mt-4 space-y-2">
        {order.map((oi, pos) => {
          const opt = q.options[oi];
          const chosen = picked === oi;
          const showRight = isCorrect && oi === q.correct;
          const showWrong = chosen && oi !== q.correct;
          const tone = showRight
            ? "border-guarantee bg-guarantee/10"
            : showWrong
              ? "border-signal bg-signal/10"
              : isCorrect
                ? "border-hairline opacity-50"
                : "border-hairline";
          return (
            <button
              key={oi}
              type="button"
              disabled={isCorrect}
              onClick={() => pick(oi)}
              className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm text-ink transition-colors ${tone}`}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 font-mono text-xs font-bold text-body">
                {String.fromCharCode(65 + pos)}
              </span>
              <span className="flex-1"><Sci>{opt}</Sci></span>
              {showRight && <NamedIcon name="check" size={16} className="text-guarantee" />}
            </button>
          );
        })}
      </div>

      {/* The teaching moment: Gugu responds to the exact misconception. */}
      {wrongMis && (
        <div className="mt-4 glass bg-gradient-to-br from-accent/15 to-transparent p-4">
          <div className="flex items-start gap-3">
            <span className="icon-orb shrink-0 !h-9 !w-9 text-accent" aria-hidden>
              <NamedIcon name="ghost" size={18} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display text-sm font-bold text-ink"><Sci>{wrongMis.label}</Sci></p>
              <p className="mt-1 text-sm leading-relaxed text-body"><Sci>{wrongMis.reteach}</Sci></p>
            </div>
            <button
              type="button"
              onClick={() => speak(wrongMis.reteach)}
              className="shrink-0 rounded-full border border-hairline px-3 py-1 text-[11px] font-bold text-accent"
            >
              Hear it
            </button>
          </div>

          {wrongMis.microExample && (
            <p className="mt-3 rounded-lg border border-hairline bg-night/40 px-3 py-2 font-mono text-sm text-ink">
              <Sci>{wrongMis.microExample}</Sci>
            </p>
          )}
          <Figure figure={wrongMis.figure} />

          {wrongMis.check && (
            <div className="mt-3 border-t border-white/10 pt-3">
              <p className="text-sm font-medium text-ink"><Sci>{wrongMis.check.question}</Sci></p>
              {checkOpen ? (
                <p className="mt-1 text-sm text-guarantee"><Sci>{wrongMis.check.answer}</Sci></p>
              ) : (
                <button type="button" onClick={() => setCheckOpen(true)} className="mt-1 text-xs font-bold text-accent">
                  Show answer
                </button>
              )}
            </div>
          )}

          <button
            type="button"
            onClick={tryAgain}
            className="mt-4 w-full rounded-xl bg-accent/15 py-2.5 text-sm font-bold text-accent"
          >
            Try again
          </button>
        </div>
      )}

      {/* Correct: confirm and offer the full worked walkthrough. */}
      {isCorrect && (
        <div className="mt-4 glass bg-gradient-to-br from-guarantee/15 to-transparent p-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-bold uppercase tracking-wide text-guarantee">Correct</p>
            <button
              type="button"
              onClick={() => speak(q.explain)}
              className="shrink-0 rounded-full border border-hairline px-3 py-1 text-[11px] font-bold text-accent"
            >
              Hear it
            </button>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-body"><Sci>{q.explain}</Sci></p>
          {q.walkthrough && q.walkthrough.length > 0 && (
            <div className="mt-3">
              {showWalk ? (
                <ol className="space-y-1.5">
                  {q.walkthrough.map((line, k) => (
                    <li key={k} className="flex gap-2 text-sm text-body">
                      <span className="w-5 shrink-0 text-right font-mono text-xs font-bold text-accent">{k + 1}</span>
                      <span className="text-ink"><Sci>{line}</Sci></span>
                    </li>
                  ))}
                </ol>
              ) : (
                <button
                  type="button"
                  onClick={() => { setShowWalk(true); speak(q.walkthrough.join(". ")); }}
                  className="text-xs font-bold text-accent"
                >
                  Walk me through it
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </ImmersiveShell>
  );
}
