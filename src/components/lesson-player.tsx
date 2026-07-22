"use client";

import { useEffect, useMemo, useState } from "react";
import type { LessonStep } from "@/lib/lesson-steps";
import { NamedIcon } from "@/components/icons";
import { Sci } from "@/components/sci-text";
import { ImmersiveShell } from "@/components/immersive-shell";

// The interactive lesson player: Brilliant-style, one step at a time, with
// active recall and immediate feedback. Runs inside the shared ImmersiveShell
// (full-screen, Continue pinned to the bottom). Reusable across any StudyLand
// surface: pass a sequence of LessonSteps and a completion handler.

export function LessonPlayer({
  steps,
  onComplete,
  title,
  subtitle,
  onExit,
}: {
  steps: LessonStep[];
  onComplete: () => void;
  title?: string;
  subtitle?: string;
  onExit?: () => void;
}) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  // Interactive steps (slider/order/match) report when they are solved.
  const [solved, setSolved] = useState(false);

  const step = steps[i];
  const last = i === steps.length - 1;
  const canContinue =
    step.kind === "choice"
      ? picked !== null
      : step.kind === "reveal"
        ? revealed
        : step.kind === "slider" || step.kind === "order" || step.kind === "match"
          ? solved
          : true;

  function next() {
    if (last) {
      onComplete();
      return;
    }
    setI((n) => n + 1);
    setPicked(null);
    setRevealed(false);
    setSolved(false);
  }

  return (
    <ImmersiveShell
      onExit={onExit}
      title={title}
      subtitle={subtitle}
      progress={{ current: i + 1, total: steps.length }}
      footer={
        <button
          type="button"
          onClick={next}
          disabled={!canContinue}
          className="w-full rounded-xl bg-accent py-3.5 text-sm font-bold text-night disabled:opacity-40"
        >
          {last ? "Finish lesson" : "Continue"}
        </button>
      }
    >
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

      {step.kind === "slider" && <SliderStep key={i} step={step} onSolved={setSolved} />}
      {step.kind === "order" && <OrderStep key={i} step={step} onSolved={setSolved} />}
      {step.kind === "match" && <MatchStep key={i} step={step} onSolved={setSolved} />}
    </ImmersiveShell>
  );
}

// ── Interactive step renderers ──────────────────────────────────────────────
// Each manages its own state and reports up when the learner has solved it, so
// the player unlocks Continue. Touch-first: real drag (slider) and taps.

type SliderStepT = Extract<LessonStep, { kind: "slider" }>;
function SliderStep({ step, onSolved }: { step: SliderStepT; onSolved: (b: boolean) => void }) {
  const [val, setVal] = useState(step.start);
  const inRange = val >= step.targetMin && val <= step.targetMax;
  useEffect(() => onSolved(inRange), [inRange, onSolved]);

  // Show the reading at the slider's own precision (no float noise).
  const decimals = (String(step.step ?? 1).split(".")[1] ?? "").length;
  const display = val.toFixed(decimals);
  const span = step.max - step.min || 1;
  const pct = (v: number) => ((v - step.min) / span) * 100;
  const zoneLeft = pct(step.targetMin);
  const zoneWidth = pct(step.targetMax) - pct(step.targetMin);

  return (
    <div>
      <p className="font-display text-lg font-bold text-ink"><Sci>{step.prompt}</Sci></p>

      {/* live readout */}
      <p className="mt-4 text-center">
        <span className={`font-mono text-3xl font-black ${inRange ? "text-guarantee" : "text-ink"}`}>
          {display}
        </span>
        {step.unit && <span className="ml-1 text-sm text-body"><Sci>{step.unit}</Sci></span>}
      </p>

      {/* track with the target band highlighted, and the draggable handle below */}
      <div className="mt-3">
        <div className="relative h-2 w-full rounded-full bg-white/10">
          <span
            className="absolute top-0 h-full rounded-full bg-guarantee/40"
            style={{ left: `${zoneLeft}%`, width: `${zoneWidth}%` }}
          />
          <span
            className={`absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full ${inRange ? "bg-guarantee" : "bg-accent"}`}
            style={{ left: `${pct(val)}%` }}
          />
        </div>
        <input
          type="range"
          min={step.min}
          max={step.max}
          step={step.step ?? 1}
          value={val}
          onChange={(e) => setVal(Number(e.target.value))}
          aria-label="Drag to the target"
          className="mt-3 w-full accent-accent"
        />
        <div className="flex justify-between font-mono text-[10px] text-body">
          <span>{step.min}</span>
          <span>Drag the slider</span>
          <span>{step.max}</span>
        </div>
      </div>

      {inRange && (
        <div className="glass mt-4 bg-gradient-to-br from-guarantee/15 to-transparent p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-guarantee">In the band</p>
          <p className="mt-1 text-sm leading-relaxed text-body"><Sci>{step.explain}</Sci></p>
        </div>
      )}
    </div>
  );
}

type OrderStepT = Extract<LessonStep, { kind: "order" }>;
function OrderStep({ step, onSolved }: { step: OrderStepT; onSolved: (b: boolean) => void }) {
  // `order` holds indices into step.items (the correct sequence). Start shuffled.
  const [order, setOrder] = useState<number[]>(() => {
    const idx = step.items.map((_, k) => k);
    for (let k = idx.length - 1; k > 0; k--) {
      const j = Math.floor(Math.random() * (k + 1));
      [idx[k], idx[j]] = [idx[j], idx[k]];
    }
    // Avoid handing them an already-correct list.
    if (idx.every((v, k) => v === k) && idx.length > 1) [idx[0], idx[1]] = [idx[1], idx[0]];
    return idx;
  });
  const correct = order.every((v, k) => v === k);
  useEffect(() => onSolved(correct), [correct, onSolved]);

  function move(pos: number, dir: -1 | 1) {
    const to = pos + dir;
    if (to < 0 || to >= order.length) return;
    setOrder((cur) => {
      const nextOrder = [...cur];
      [nextOrder[pos], nextOrder[to]] = [nextOrder[to], nextOrder[pos]];
      return nextOrder;
    });
  }

  return (
    <div>
      <p className="font-display text-lg font-bold text-ink"><Sci>{step.prompt}</Sci></p>
      <div className="mt-4 space-y-2">
        {order.map((itemIdx, pos) => (
          <div
            key={itemIdx}
            className={`flex items-center gap-3 rounded-xl border-2 px-3 py-3 text-sm text-ink transition-colors ${
              correct ? "border-guarantee bg-guarantee/10" : "border-hairline"
            }`}
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 font-mono text-xs font-bold text-accent">
              {pos + 1}
            </span>
            <span className="flex-1"><Sci>{step.items[itemIdx]}</Sci></span>
            {!correct && (
              <span className="flex shrink-0 flex-col">
                <button
                  type="button"
                  onClick={() => move(pos, -1)}
                  disabled={pos === 0}
                  aria-label="Move up"
                  className="px-2 text-body disabled:opacity-30"
                >
                  ▲
                </button>
                <button
                  type="button"
                  onClick={() => move(pos, 1)}
                  disabled={pos === order.length - 1}
                  aria-label="Move down"
                  className="px-2 text-body disabled:opacity-30"
                >
                  ▼
                </button>
              </span>
            )}
          </div>
        ))}
      </div>
      {correct && (
        <div className="glass mt-4 bg-gradient-to-br from-guarantee/15 to-transparent p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-guarantee">In order</p>
          <p className="mt-1 text-sm leading-relaxed text-body"><Sci>{step.explain}</Sci></p>
        </div>
      )}
    </div>
  );
}

type MatchStepT = Extract<LessonStep, { kind: "match" }>;
function MatchStep({ step, onSolved }: { step: MatchStepT; onSolved: (b: boolean) => void }) {
  // Right column shuffled; each entry remembers which left index it belongs to.
  const rights = useMemo(() => {
    const arr = step.pairs.map((p, k) => ({ text: p.right, correctLeft: k }));
    for (let k = arr.length - 1; k > 0; k--) {
      const j = Math.floor(Math.random() * (k + 1));
      [arr[k], arr[j]] = [arr[j], arr[k]];
    }
    return arr;
  }, [step]);

  const [selLeft, setSelLeft] = useState<number | null>(null);
  const [done, setDone] = useState<Record<number, number>>({}); // leftIndex -> rightPos
  const [wrong, setWrong] = useState<number | null>(null); // rightPos flashing wrong

  const doneLefts = Object.keys(done).length;
  const solved = doneLefts === step.pairs.length;
  useEffect(() => onSolved(solved), [solved, onSolved]);

  const usedRight = new Set(Object.values(done));

  function tapRight(rightPos: number) {
    if (usedRight.has(rightPos) || selLeft === null) return;
    if (rights[rightPos].correctLeft === selLeft) {
      setDone((d) => ({ ...d, [selLeft]: rightPos }));
      setSelLeft(null);
    } else {
      setWrong(rightPos);
      setTimeout(() => setWrong(null), 500);
    }
  }

  return (
    <div>
      <p className="font-display text-lg font-bold text-ink"><Sci>{step.prompt}</Sci></p>
      <p className="mt-1 text-xs text-body">Tap one on the left, then its partner on the right.</p>
      <div className="mt-4 flex gap-3">
        <div className="flex-1 space-y-2">
          {step.pairs.map((p, li) => {
            const isDone = li in done;
            const isSel = selLeft === li;
            return (
              <button
                key={li}
                type="button"
                disabled={isDone}
                onClick={() => setSelLeft(li)}
                className={`flex w-full items-center rounded-xl border-2 px-3 py-3 text-left text-sm text-ink transition-colors ${
                  isDone
                    ? "border-guarantee bg-guarantee/10 opacity-70"
                    : isSel
                      ? "border-accent bg-accent/10"
                      : "border-hairline"
                }`}
              >
                <Sci>{p.left}</Sci>
              </button>
            );
          })}
        </div>
        <div className="flex-1 space-y-2">
          {rights.map((r, ri) => {
            const isDone = usedRight.has(ri);
            const isWrong = wrong === ri;
            return (
              <button
                key={ri}
                type="button"
                disabled={isDone}
                onClick={() => tapRight(ri)}
                className={`flex w-full items-center rounded-xl border-2 px-3 py-3 text-left text-sm text-ink transition-colors ${
                  isDone
                    ? "border-guarantee bg-guarantee/10 opacity-70"
                    : isWrong
                      ? "border-signal bg-signal/10"
                      : "border-hairline"
                }`}
              >
                <Sci>{r.text}</Sci>
              </button>
            );
          })}
        </div>
      </div>
      {solved && (
        <div className="glass mt-4 bg-gradient-to-br from-guarantee/15 to-transparent p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-guarantee">All matched</p>
          <p className="mt-1 text-sm leading-relaxed text-body"><Sci>{step.explain}</Sci></p>
        </div>
      )}
    </div>
  );
}
