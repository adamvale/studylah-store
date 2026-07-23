"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { LessonStep } from "@/lib/lesson-steps";
import { NamedIcon } from "@/components/icons";
import { Sci } from "@/components/sci-text";
import { ImmersiveShell } from "@/components/immersive-shell";
import { speak, stopSpeaking } from "@/lib/speak";

// The interactive lesson player: Brilliant-style, one step at a time, hands-on,
// with Gugu's scripted voice guiding the way. Gugu opens a problem with `ask`,
// gives escalating `hints` on Help, and reads the teaching summary at the end,
// all on-device speech (no AI, no cost). Runs inside the ImmersiveShell.

const PROBLEM_KINDS = ["slider", "order", "match", "tiles", "plot", "circuit", "cloze", "spoterror", "classify", "graphpick"] as const;
function isProblem(kind: LessonStep["kind"]): boolean {
  return (PROBLEM_KINDS as readonly string[]).includes(kind);
}

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
  const [revealed, setRevealed] = useState(false); // "reveal" kind
  const [solved, setSolved] = useState(false); // interactive widgets report up
  const [hintsShown, setHintsShown] = useState(0);
  const [gaveUp, setGaveUp] = useState(false); // "reveal the answer" on a problem
  const [understood, setUnderstood] = useState(false); // "I understand" on a teach step

  const step = steps[i];
  const last = i === steps.length - 1;
  const ask = "ask" in step ? step.ask : undefined;
  const hints = ("hints" in step ? step.hints : undefined) ?? [];
  const explain = "explain" in step ? step.explain : undefined;

  // Teaching steps: Gugu speaks `say` (falling back to the body) to teach the
  // idea aloud, and the student must tap "I understand" before continuing.
  const isTeach = step.kind === "concept" || step.kind === "insight";
  const teachSay = isTeach ? (("say" in step && step.say) ? step.say : step.body) : undefined;

  const canContinue =
    step.kind === "choice"
      ? picked !== null
      : step.kind === "reveal"
        ? revealed
        : isProblem(step.kind)
          ? solved || gaveUp
          : isTeach
            ? understood
            : true;

  // Gugu greets each problem out loud (best-effort; the "Hear it"/"Please
  // repeat" buttons always replay). speak() cancels any prior line.
  useEffect(() => {
    if (ask) speak(ask);
    return () => stopSpeaking();
  }, [ask]);

  // On a teaching step, Gugu starts teaching by voice as the card appears.
  useEffect(() => {
    if (teachSay) speak(teachSay);
    return () => stopSpeaking();
  }, [teachSay]);

  function next() {
    stopSpeaking();
    if (last) {
      onComplete();
      return;
    }
    setI((n) => n + 1);
    setPicked(null);
    setRevealed(false);
    setSolved(false);
    setHintsShown(0);
    setGaveUp(false);
    setUnderstood(false);
  }

  const showSummary =
    (step.kind === "choice" && picked !== null) || (isProblem(step.kind) && (solved || gaveUp));

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
      {/* Gugu's opening line, with a tap-to-hear replay. */}
      {ask && (
        <div className="mb-4 flex items-start gap-3 rounded-2xl border border-hairline bg-white/5 p-3">
          <span className="icon-orb shrink-0 !h-9 !w-9 text-accent" aria-hidden>
            <NamedIcon name="ghost" size={18} />
          </span>
          <p className="flex-1 text-sm leading-relaxed text-ink"><Sci>{ask}</Sci></p>
          <button
            type="button"
            onClick={() => speak(ask)}
            className="shrink-0 rounded-full border border-hairline px-3 py-1 text-xs font-bold text-accent"
          >
            Hear it
          </button>
        </div>
      )}

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
            <p className="font-display text-2xl font-bold text-ink">{step.heading}</p>
          )}
          <p className={`${step.kind === "concept" && step.heading ? "mt-3" : ""} text-lg leading-relaxed text-ink`}>
            <Sci>{step.body}</Sci>
          </p>
        </div>
      )}

      {/* Teaching steps: Gugu teaches by voice; confirm understanding to move on,
          or ask her to repeat. */}
      {isTeach && (
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => setUnderstood(true)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold ${
              understood ? "bg-guarantee/20 text-guarantee" : "bg-accent text-night"
            }`}
          >
            {understood && <NamedIcon name="check" size={16} />}
            {understood ? "Got it" : "I understand"}
          </button>
          <button
            type="button"
            onClick={() => teachSay && speak(teachSay)}
            className="flex items-center gap-2 rounded-xl border border-hairline px-4 py-3.5 text-sm font-bold text-accent"
          >
            <NamedIcon name="ghost" size={15} />
            Please repeat
          </button>
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
        </div>
      )}

      {step.kind === "slider" && <SliderStep key={i} step={step} onSolved={setSolved} reveal={gaveUp} />}
      {step.kind === "order" && <OrderStep key={i} step={step} onSolved={setSolved} reveal={gaveUp} />}
      {step.kind === "match" && <MatchStep key={i} step={step} onSolved={setSolved} reveal={gaveUp} />}
      {step.kind === "tiles" && <TilesStep key={i} step={step} onSolved={setSolved} reveal={gaveUp} />}
      {step.kind === "plot" && <PlotStep key={i} step={step} onSolved={setSolved} reveal={gaveUp} />}
      {step.kind === "circuit" && <CircuitStep key={i} step={step} onSolved={setSolved} reveal={gaveUp} />}
      {step.kind === "cloze" && <ClozeStep key={i} step={step} onSolved={setSolved} reveal={gaveUp} />}
      {step.kind === "spoterror" && <SpotErrorStep key={i} step={step} onSolved={setSolved} reveal={gaveUp} />}
      {step.kind === "classify" && <ClassifyStep key={i} step={step} onSolved={setSolved} reveal={gaveUp} />}
      {step.kind === "graphpick" && <GraphPickStep key={i} step={step} onSolved={setSolved} reveal={gaveUp} />}

      {/* Help ladder: escalating scripted hints, then reveal the answer. */}
      {(step.kind === "choice" || isProblem(step.kind)) && !showSummary && (
        <div className="mt-4">
          {hintsShown > 0 && (
            <div className="space-y-2">
              {hints.slice(0, hintsShown).map((h, hi) => (
                <div key={hi} className="flex items-start gap-2 rounded-xl border border-accent/30 bg-accent/5 p-3">
                  <NamedIcon name="sparkle" size={13} className="mt-0.5 shrink-0 text-accent" />
                  <p className="flex-1 text-sm leading-relaxed text-body"><Sci>{h}</Sci></p>
                </div>
              ))}
            </div>
          )}
          <div className="mt-2 flex gap-2">
            {hintsShown < hints.length && (
              <button
                type="button"
                onClick={() => {
                  const nextHint = hints[hintsShown];
                  setHintsShown((n) => n + 1);
                  if (nextHint) speak(nextHint);
                }}
                className="rounded-full border border-hairline px-4 py-1.5 text-xs font-bold text-accent"
              >
                {hintsShown === 0 ? "Help" : `Another hint (${hintsShown}/${hints.length})`}
              </button>
            )}
            {isProblem(step.kind) && hintsShown >= hints.length && (
              <button
                type="button"
                onClick={() => {
                  setGaveUp(true);
                  if (explain) speak(explain);
                }}
                className="rounded-full border border-hairline px-4 py-1.5 text-xs font-bold text-body"
              >
                Reveal the answer
              </button>
            )}
          </div>
        </div>
      )}

      {/* Teaching summary, shown once solved, answered, or revealed. Speakable. */}
      {showSummary && explain && (
        <div className="glass mt-4 bg-gradient-to-br from-white/5 to-transparent p-4">
          <div className="flex items-center justify-between gap-2">
            <p
              className={`text-xs font-bold uppercase tracking-wide ${
                step.kind === "choice"
                  ? picked === step.correct
                    ? "text-guarantee"
                    : "text-accent"
                  : gaveUp
                    ? "text-accent"
                    : "text-guarantee"
              }`}
            >
              {step.kind === "choice"
                ? picked === step.correct
                  ? "Correct"
                  : "Not quite"
                : gaveUp
                  ? "The answer"
                  : "Nice work"}
            </p>
            <button
              type="button"
              onClick={() => explain && speak(explain)}
              className="shrink-0 rounded-full border border-hairline px-3 py-1 text-[11px] font-bold text-accent"
            >
              Hear it
            </button>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-body"><Sci>{explain}</Sci></p>
        </div>
      )}
    </ImmersiveShell>
  );
}

// ── Interactive widgets ─────────────────────────────────────────────────────
// Each manages its own state, reports "solved" up (which unlocks Continue), and
// snaps to the correct answer when `reveal` turns true. Touch-first.

function shuffleIdx(n: number): number[] {
  const idx = Array.from({ length: n }, (_, k) => k);
  for (let k = idx.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * (k + 1));
    [idx[k], idx[j]] = [idx[j], idx[k]];
  }
  return idx;
}

type SliderStepT = Extract<LessonStep, { kind: "slider" }>;
function SliderStep({ step, onSolved, reveal }: { step: SliderStepT; onSolved: (b: boolean) => void; reveal: boolean }) {
  const [val, setVal] = useState(step.start);
  useEffect(() => {
    if (reveal) setVal(Math.round(((step.targetMin + step.targetMax) / 2) / (step.step ?? 1)) * (step.step ?? 1));
  }, [reveal, step]);
  const inRange = val >= step.targetMin && val <= step.targetMax;
  useEffect(() => onSolved(inRange), [inRange, onSolved]);

  const decimals = (String(step.step ?? 1).split(".")[1] ?? "").length;
  const display = val.toFixed(decimals);
  const span = step.max - step.min || 1;
  const pct = (v: number) => ((v - step.min) / span) * 100;

  return (
    <div>
      <p className="font-display text-lg font-bold text-ink"><Sci>{step.prompt}</Sci></p>
      <p className="mt-4 text-center">
        <span className={`font-mono text-3xl font-black ${inRange ? "text-guarantee" : "text-ink"}`}>{display}</span>
        {step.unit && <span className="ml-1 text-sm text-body"><Sci>{step.unit}</Sci></span>}
      </p>
      <div className="mt-3">
        <div className="relative h-2 w-full rounded-full bg-white/10">
          <span
            className="absolute top-0 h-full rounded-full bg-guarantee/40"
            style={{ left: `${pct(step.targetMin)}%`, width: `${pct(step.targetMax) - pct(step.targetMin)}%` }}
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
    </div>
  );
}

type OrderStepT = Extract<LessonStep, { kind: "order" }>;
function OrderStep({ step, onSolved, reveal }: { step: OrderStepT; onSolved: (b: boolean) => void; reveal: boolean }) {
  const [order, setOrder] = useState<number[]>(() => {
    const idx = shuffleIdx(step.items.length);
    if (idx.every((v, k) => v === k) && idx.length > 1) [idx[0], idx[1]] = [idx[1], idx[0]];
    return idx;
  });
  useEffect(() => {
    if (reveal) setOrder(step.items.map((_, k) => k));
  }, [reveal, step]);
  const correct = order.every((v, k) => v === k);
  useEffect(() => onSolved(correct), [correct, onSolved]);

  function move(pos: number, dir: -1 | 1) {
    const to = pos + dir;
    if (to < 0 || to >= order.length) return;
    setOrder((cur) => {
      const nx = [...cur];
      [nx[pos], nx[to]] = [nx[to], nx[pos]];
      return nx;
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
                <button type="button" onClick={() => move(pos, -1)} disabled={pos === 0} aria-label="Move up" className="px-2 text-body disabled:opacity-30">▲</button>
                <button type="button" onClick={() => move(pos, 1)} disabled={pos === order.length - 1} aria-label="Move down" className="px-2 text-body disabled:opacity-30">▼</button>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

type MatchStepT = Extract<LessonStep, { kind: "match" }>;
function MatchStep({ step, onSolved, reveal }: { step: MatchStepT; onSolved: (b: boolean) => void; reveal: boolean }) {
  const rights = useMemo(() => {
    const arr = step.pairs.map((p, k) => ({ text: p.right, correctLeft: k }));
    const order = shuffleIdx(arr.length);
    return order.map((k) => arr[k]);
  }, [step]);
  const [selLeft, setSelLeft] = useState<number | null>(null);
  const [done, setDone] = useState<Record<number, number>>({});
  const [wrong, setWrong] = useState<number | null>(null);
  useEffect(() => {
    if (reveal) {
      const all: Record<number, number> = {};
      rights.forEach((r, ri) => (all[r.correctLeft] = ri));
      setDone(all);
    }
  }, [reveal, rights]);

  const solved = Object.keys(done).length === step.pairs.length;
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
                  isDone ? "border-guarantee bg-guarantee/10 opacity-70" : isSel ? "border-accent bg-accent/10" : "border-hairline"
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
                  isDone ? "border-guarantee bg-guarantee/10 opacity-70" : isWrong ? "border-signal bg-signal/10" : "border-hairline"
                }`}
              >
                <Sci>{r.text}</Sci>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

type TilesStepT = Extract<LessonStep, { kind: "tiles" }>;
function TilesStep({ step, onSolved, reveal }: { step: TilesStepT; onSolved: (b: boolean) => void; reveal: boolean }) {
  // The bank is the tiles, shuffled once. `built` holds bank indices in order.
  const bank = useMemo(() => shuffleIdx(step.tiles.length).map((k) => ({ idx: k, text: step.tiles[k] })), [step]);
  const [built, setBuilt] = useState<number[]>([]); // indices into bank

  useEffect(() => {
    if (!reveal) return;
    // Choose bank tiles whose text spells out the answer, in order.
    const used = new Set<number>();
    const seq: number[] = [];
    for (const word of step.answer) {
      const found = bank.findIndex((b, bi) => b.text === word && !used.has(bi));
      if (found >= 0) {
        used.add(found);
        seq.push(found);
      }
    }
    setBuilt(seq);
  }, [reveal, bank, step.answer]);

  const builtWords = built.map((bi) => bank[bi].text);
  const correct = builtWords.length === step.answer.length && builtWords.every((w, k) => w === step.answer[k]);
  useEffect(() => onSolved(correct), [correct, onSolved]);
  const usedBank = new Set(built);

  return (
    <div>
      <p className="font-display text-lg font-bold text-ink"><Sci>{step.prompt}</Sci></p>

      {/* the line being built */}
      <div
        className={`mt-4 flex min-h-[3rem] flex-wrap items-center gap-2 rounded-xl border-2 border-dashed p-3 ${
          correct ? "border-guarantee bg-guarantee/10" : "border-hairline"
        }`}
      >
        {built.length === 0 && <span className="text-xs text-body">Tap tiles below to build your answer</span>}
        {built.map((bi, pos) => (
          <button
            key={pos}
            type="button"
            onClick={() => setBuilt((cur) => cur.filter((_, k) => k !== pos))}
            className="rounded-lg border border-accent/50 bg-accent/15 px-3 py-1.5 text-sm font-medium text-ink"
          >
            <Sci>{bank[bi].text}</Sci>
          </button>
        ))}
      </div>

      {/* the bank */}
      <div className="mt-3 flex flex-wrap gap-2">
        {bank.map((b, bi) =>
          usedBank.has(bi) ? null : (
            <button
              key={bi}
              type="button"
              onClick={() => setBuilt((cur) => [...cur, bi])}
              className="rounded-lg border border-hairline bg-surface px-3 py-1.5 text-sm text-ink"
            >
              <Sci>{b.text}</Sci>
            </button>
          )
        )}
      </div>
    </div>
  );
}

type PlotStepT = Extract<LessonStep, { kind: "plot" }>;
function PlotStep({ step, onSolved, reveal }: { step: PlotStepT; onSolved: (b: boolean) => void; reveal: boolean }) {
  const [pt, setPt] = useState<{ x: number; y: number } | null>(null);
  useEffect(() => {
    if (reveal) setPt({ x: step.targetX, y: step.targetY });
  }, [reveal, step.targetX, step.targetY]);
  const tol = step.tolerance ?? 0;
  const correct = pt != null && Math.abs(pt.x - step.targetX) <= tol && Math.abs(pt.y - step.targetY) <= tol;
  useEffect(() => onSolved(correct), [correct, onSolved]);

  const svgRef = useRef<SVGSVGElement | null>(null);
  const W = 280, H = 220, padL = 34, padB = 30, padT = 10, padR = 12;
  const plotW = W - padL - padR, plotH = H - padT - padB, originY = H - padB;
  const sx = (x: number) => padL + (x / step.xMax) * plotW;
  const sy = (y: number) => originY - (y / step.yMax) * plotH;

  function place(e: React.MouseEvent<SVGSVGElement>) {
    const svg = svgRef.current;
    if (!svg) return;
    const r = svg.getBoundingClientRect();
    const relX = ((e.clientX - r.left) / r.width) * W;
    const relY = ((e.clientY - r.top) / r.height) * H;
    const dx = Math.round(((relX - padL) / plotW) * step.xMax);
    const dy = Math.round(((originY - relY) / plotH) * step.yMax);
    setPt({ x: Math.max(0, Math.min(step.xMax, dx)), y: Math.max(0, Math.min(step.yMax, dy)) });
  }

  const gridX = Array.from({ length: step.xMax + 1 }, (_, k) => k);
  const gridY = Array.from({ length: step.yMax + 1 }, (_, k) => k);

  return (
    <div>
      <p className="font-display text-lg font-bold text-ink"><Sci>{step.prompt}</Sci></p>
      <p className="mt-1 text-xs text-body">Tap the grid to place your point.</p>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="mt-3 w-full touch-none select-none"
        onClick={place}
        role="img"
        aria-label="Coordinate grid"
      >
        {gridX.map((x) => (
          <line key={`gx${x}`} x1={sx(x)} y1={sy(0)} x2={sx(x)} y2={sy(step.yMax)} stroke="rgba(196,181,253,0.14)" strokeWidth="1" />
        ))}
        {gridY.map((y) => (
          <line key={`gy${y}`} x1={sx(0)} y1={sy(y)} x2={sx(step.xMax)} y2={sy(y)} stroke="rgba(196,181,253,0.14)" strokeWidth="1" />
        ))}
        {/* axes */}
        <line x1={sx(0)} y1={sy(0)} x2={sx(step.xMax)} y2={sy(0)} stroke="rgba(196,181,253,0.5)" strokeWidth="1.5" />
        <line x1={sx(0)} y1={sy(0)} x2={sx(0)} y2={sy(step.yMax)} stroke="rgba(196,181,253,0.5)" strokeWidth="1.5" />
        {step.xLabel && <text x={sx(step.xMax)} y={originY + 20} textAnchor="end" className="fill-current text-body" fontSize="9">{step.xLabel}</text>}
        {step.yLabel && <text x={4} y={sy(step.yMax) + 2} className="fill-current text-body" fontSize="9">{step.yLabel}</text>}
        {reveal && <circle cx={sx(step.targetX)} cy={sy(step.targetY)} r="5" fill="none" stroke="#6ea0ff" strokeWidth="2" strokeDasharray="3 2" />}
        {pt && <circle cx={sx(pt.x)} cy={sy(pt.y)} r="5" fill={correct ? "var(--color-guarantee)" : "#ffdc00"} />}
      </svg>
      {pt && (
        <p className="text-center font-mono text-xs text-body">
          ({pt.x}, {pt.y})
        </p>
      )}
    </div>
  );
}

type CircuitStepT = Extract<LessonStep, { kind: "circuit" }>;
function CircuitStep({ step, onSolved, reveal }: { step: CircuitStepT; onSolved: (b: boolean) => void; reveal: boolean }) {
  const [closed, setClosed] = useState<Record<string, boolean>>({});
  useEffect(() => {
    if (reveal) {
      const on: Record<string, boolean> = {};
      step.needed.forEach((id) => (on[id] = true));
      setClosed(on);
    }
  }, [reveal, step.needed]);
  const need = new Set(step.needed);
  const lit = step.switches.every((s) => Boolean(closed[s.id]) === need.has(s.id));
  useEffect(() => onSolved(lit), [lit, onSolved]);

  const toggle = (id: string) => setClosed((c) => ({ ...c, [id]: !c[id] }));
  const letter = (id: string) => String.fromCharCode(65 + step.switches.findIndex((s) => s.id === id));

  // ── Schematic geometry (viewBox 320 x 196) ──
  const L = 34, Rt = 286, T = 50, Bm = 150;
  const midY = (T + Bm) / 2, lampR = 15;
  const wire = lit ? "#ffdc00" : "rgba(214,202,255,0.55)";
  const GAP = 14;
  const series = step.switches.filter((s) => !s.shortsLamp);
  const shorts = step.switches.filter((s) => s.shortsLamp);
  const seriesX = series.map((_, i) => L + ((i + 1) * (Rt - L)) / (series.length + 1));
  const shortX = Rt - 48;

  // Top wire drawn as segments, leaving a gap at each series switch.
  const cuts = seriesX.map((x) => [x - GAP, x + GAP] as [number, number]).sort((a, b) => a[0] - b[0]);
  const topSegs: [number, number][] = [];
  let cur = L;
  for (const [a, b] of cuts) {
    if (a > cur) topSegs.push([cur, a]);
    cur = Math.max(cur, b);
  }
  if (cur < Rt) topSegs.push([cur, Rt]);

  return (
    <div>
      <p className="font-display text-lg font-bold text-ink"><Sci>{step.prompt}</Sci></p>

      {/* the circuit schematic */}
      <svg viewBox="0 0 320 196" className="mx-auto mt-4 w-full max-w-[320px] touch-none select-none" role="img" aria-label="Circuit diagram">
        {/* left, bottom, right (with a gap for the lamp) wires */}
        <line x1={L} y1={T} x2={L} y2={midY - 9} stroke={wire} strokeWidth="2" />
        <line x1={L} y1={midY + 9} x2={L} y2={Bm} stroke={wire} strokeWidth="2" />
        <line x1={L} y1={Bm} x2={Rt} y2={Bm} stroke={wire} strokeWidth="2" />
        <line x1={Rt} y1={T} x2={Rt} y2={midY - lampR} stroke={wire} strokeWidth="2" />
        <line x1={Rt} y1={midY + lampR} x2={Rt} y2={Bm} stroke={wire} strokeWidth="2" />
        {topSegs.map(([a, b], k) => (
          <line key={k} x1={a} y1={T} x2={b} y2={T} stroke={wire} strokeWidth="2" />
        ))}

        {/* cell (battery) on the left wire */}
        <line x1={L - 11} y1={midY - 6} x2={L + 11} y2={midY - 6} stroke={wire} strokeWidth="2" />
        <line x1={L - 6} y1={midY + 6} x2={L + 6} y2={midY + 6} stroke={wire} strokeWidth="4" />

        {/* the lamp (circle with a cross), glowing when lit */}
        {lit && <circle cx={Rt} cy={midY} r={lampR + 8} fill="rgba(255,220,0,0.35)" />}
        <circle cx={Rt} cy={midY} r={lampR} fill="none" stroke={wire} strokeWidth="2" />
        <line x1={Rt - 10} y1={midY - 10} x2={Rt + 10} y2={midY + 10} stroke={wire} strokeWidth="2" />
        <line x1={Rt - 10} y1={midY + 10} x2={Rt + 10} y2={midY - 10} stroke={wire} strokeWidth="2" />

        {/* series switches, on the top wire */}
        {series.map((s) => {
          const x = seriesX[series.indexOf(s)];
          const on = Boolean(closed[s.id]);
          return (
            <g key={s.id} onClick={() => toggle(s.id)} className="cursor-pointer">
              <circle cx={x - GAP} cy={T} r="3" fill={wire} />
              <circle cx={x + GAP} cy={T} r="3" fill={wire} />
              <line x1={x - GAP} y1={T} x2={on ? x + GAP : x + GAP - 4} y2={on ? T : T - 14} stroke={on ? "#ffdc00" : "rgba(214,202,255,0.85)"} strokeWidth="2.5" strokeLinecap="round" />
              <text x={x} y={T - 20} textAnchor="middle" className="fill-current text-body" fontSize="11" fontWeight="700">{letter(s.id)}</text>
              <rect x={x - GAP - 6} y={T - 26} width={GAP * 2 + 12} height="34" fill="transparent" />
            </g>
          );
        })}

        {/* short switch, a branch in parallel across the lamp */}
        {shorts.map((s) => {
          const on = Boolean(closed[s.id]);
          return (
            <g key={s.id} onClick={() => toggle(s.id)} className="cursor-pointer">
              <line x1={shortX} y1={T} x2={shortX} y2={midY - GAP} stroke={wire} strokeWidth="2" />
              <line x1={shortX} y1={midY + GAP} x2={shortX} y2={Bm} stroke={wire} strokeWidth="2" />
              <circle cx={shortX} cy={T} r="3" fill={wire} />
              <circle cx={shortX} cy={Bm} r="3" fill={wire} />
              <circle cx={shortX} cy={midY - GAP} r="3" fill={wire} />
              <circle cx={shortX} cy={midY + GAP} r="3" fill={wire} />
              <line x1={shortX} y1={midY - GAP} x2={on ? shortX : shortX + 13} y2={on ? midY + GAP : midY - GAP + 5} stroke={on ? "#ffdc00" : "rgba(214,202,255,0.85)"} strokeWidth="2.5" strokeLinecap="round" />
              <text x={shortX + 12} y={midY + 4} className="fill-current text-body" fontSize="11" fontWeight="700">{letter(s.id)}</text>
              <rect x={shortX - 8} y={midY - GAP - 6} width="28" height={GAP * 2 + 12} fill="transparent" />
            </g>
          );
        })}
      </svg>
      <p className={`text-center text-xs font-bold ${lit ? "text-accent" : "text-body"}`}>{lit ? "Lamp lit" : "Lamp off"}</p>

      {/* switch toggles */}
      <div className="mt-4 space-y-2">
        {step.switches.map((s) => {
          const on = Boolean(closed[s.id]);
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => toggle(s.id)}
              className={`flex w-full items-center justify-between rounded-xl border-2 px-4 py-3 text-sm text-ink transition-colors ${
                on ? "border-accent bg-accent/10" : "border-hairline"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 font-mono text-xs font-bold text-accent">{letter(s.id)}</span>
                <Sci>{s.label}</Sci>
              </span>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${on ? "bg-accent/20 text-accent" : "bg-white/10 text-body"}`}>
                {on ? "CLOSED" : "OPEN"}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

type ClozeStepT = Extract<LessonStep, { kind: "cloze" }>;
function ClozeStep({ step, onSolved, reveal }: { step: ClozeStepT; onSolved: (b: boolean) => void; reveal: boolean }) {
  const blanks = Math.max(0, step.segments.length - 1);
  const bank = useMemo(() => shuffleIdx(step.bank.length).map((k) => ({ idx: k, text: step.bank[k] })), [step]);
  const [filled, setFilled] = useState<(number | null)[]>(() => Array(blanks).fill(null));

  useEffect(() => {
    if (!reveal) return;
    const used = new Set<number>();
    const next: (number | null)[] = [];
    for (const word of step.answer) {
      const bi = bank.findIndex((b, k) => b.text === word && !used.has(k));
      if (bi >= 0) used.add(bi);
      next.push(bi >= 0 ? bi : null);
    }
    setFilled(next);
  }, [reveal, bank, step.answer]);

  const correct = filled.length === blanks && filled.every((bi, k) => bi != null && bank[bi].text === step.answer[k]);
  useEffect(() => onSolved(correct), [correct, onSolved]);
  const usedBank = new Set(filled.filter((v): v is number => v != null));

  function placeWord(bi: number) {
    const pos = filled.findIndex((v) => v == null);
    if (pos < 0) return;
    setFilled((cur) => cur.map((v, k) => (k === pos ? bi : v)));
  }
  const clearBlank = (pos: number) => setFilled((cur) => cur.map((v, k) => (k === pos ? null : v)));

  return (
    <div>
      <p className="font-display text-lg font-bold text-ink"><Sci>{step.prompt}</Sci></p>
      <div className={`mt-4 rounded-xl border-2 p-4 text-base leading-loose text-ink ${correct ? "border-guarantee bg-guarantee/10" : "border-hairline"}`}>
        {step.segments.map((seg, k) => (
          <span key={k}>
            <Sci>{seg}</Sci>
            {k < blanks && (
              <button
                type="button"
                onClick={() => filled[k] != null && clearBlank(k)}
                className={`mx-1 inline-flex min-w-[3.5rem] items-center justify-center rounded-md border-2 px-2 py-0.5 align-middle text-sm font-bold ${
                  filled[k] != null ? "border-accent/60 bg-accent/15 text-ink" : "border-dashed border-hairline text-body"
                }`}
              >
                {filled[k] != null ? <Sci>{bank[filled[k] as number].text}</Sci> : "   "}
              </button>
            )}
          </span>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {bank.map((b, bi) =>
          usedBank.has(bi) ? null : (
            <button
              key={bi}
              type="button"
              onClick={() => placeWord(bi)}
              className="rounded-lg border border-hairline bg-surface px-3 py-1.5 text-sm text-ink"
            >
              <Sci>{b.text}</Sci>
            </button>
          )
        )}
      </div>
    </div>
  );
}

type SpotErrorStepT = Extract<LessonStep, { kind: "spoterror" }>;
function SpotErrorStep({ step, onSolved, reveal }: { step: SpotErrorStepT; onSolved: (b: boolean) => void; reveal: boolean }) {
  const [tapped, setTapped] = useState<number | null>(null);
  const [wrong, setWrong] = useState<number | null>(null);
  useEffect(() => {
    if (reveal) setTapped(step.errorLine);
  }, [reveal, step.errorLine]);
  const correct = tapped === step.errorLine;
  useEffect(() => onSolved(correct), [correct, onSolved]);

  function tap(k: number) {
    if (correct) return;
    if (k === step.errorLine) {
      setTapped(k);
    } else {
      setTapped(k);
      setWrong(k);
      setTimeout(() => setWrong(null), 500);
    }
  }

  return (
    <div>
      <p className="font-display text-lg font-bold text-ink"><Sci>{step.prompt}</Sci></p>
      <p className="mt-1 text-xs text-body">Tap the line where the mistake is.</p>
      <div className="mt-3 space-y-1.5">
        {step.lines.map((line, k) => {
          const isError = k === step.errorLine;
          const tone = correct && isError
            ? "border-signal bg-signal/10"
            : wrong === k
              ? "border-signal bg-signal/10"
              : tapped === k
                ? "border-accent bg-accent/10"
                : "border-hairline";
          return (
            <button
              key={k}
              type="button"
              onClick={() => tap(k)}
              className={`flex w-full items-start gap-3 rounded-xl border-2 px-3 py-2.5 text-left font-mono text-sm text-ink transition-colors ${tone}`}
            >
              <span className="shrink-0 text-xs font-bold text-body">{k + 1}</span>
              <span className="flex-1"><Sci>{line}</Sci></span>
              {correct && isError && <NamedIcon name="check" size={15} className="shrink-0 text-signal" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

type ClassifyStepT = Extract<LessonStep, { kind: "classify" }>;
function ClassifyStep({ step, onSolved, reveal }: { step: ClassifyStepT; onSolved: (b: boolean) => void; reveal: boolean }) {
  const order = useMemo(() => shuffleIdx(step.items.length), [step]);
  const [placed, setPlaced] = useState<(number | null)[]>(() => Array(step.items.length).fill(null));
  const [sel, setSel] = useState<number | null>(null);
  useEffect(() => {
    if (reveal) setPlaced(step.items.map((it) => it.bin));
  }, [reveal, step.items]);
  const done = placed.every((b, k) => b === step.items[k].bin);
  useEffect(() => onSolved(done), [done, onSolved]);

  function placeInBin(bin: number) {
    if (sel == null) return;
    setPlaced((cur) => cur.map((v, k) => (k === sel ? bin : v)));
    setSel(null);
  }
  const toTray = (k: number) => setPlaced((cur) => cur.map((v, j) => (j === k ? null : v)));

  return (
    <div>
      <p className="font-display text-lg font-bold text-ink"><Sci>{step.prompt}</Sci></p>
      <p className="mt-1 text-xs text-body">Tap an item, then the bin it belongs in.</p>
      <div className="mt-3 grid gap-2" style={{ gridTemplateColumns: `repeat(${step.bins.length}, minmax(0, 1fr))` }}>
        {step.bins.map((binLabel, bi) => (
          <button
            key={bi}
            type="button"
            onClick={() => placeInBin(bi)}
            className={`min-h-[5.5rem] rounded-xl border-2 p-2 text-left align-top transition-colors ${
              sel != null ? "border-accent bg-accent/10" : done ? "border-guarantee bg-guarantee/5" : "border-hairline"
            }`}
          >
            <span className="block text-xs font-bold uppercase tracking-wide text-accent"><Sci>{binLabel}</Sci></span>
            <span className="mt-1 flex flex-wrap gap-1">
              {placed.map((b, k) =>
                b === bi ? (
                  <span
                    key={k}
                    role="button"
                    onClick={(e) => { e.stopPropagation(); toTray(k); }}
                    className={`rounded-md border px-2 py-0.5 text-xs text-ink ${
                      done ? "border-guarantee/60 bg-guarantee/10" : "border-accent/50 bg-accent/15"
                    }`}
                  >
                    <Sci>{step.items[k].text}</Sci>
                  </span>
                ) : null
              )}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-3 flex min-h-[2.5rem] flex-wrap gap-2 rounded-xl border border-dashed border-hairline p-2">
        {order.every((k) => placed[k] != null) && <span className="text-xs text-body">All sorted. Tap a bin item to move it back.</span>}
        {order.map((k) =>
          placed[k] == null ? (
            <button
              key={k}
              type="button"
              onClick={() => setSel(sel === k ? null : k)}
              className={`rounded-lg border-2 px-3 py-1.5 text-sm text-ink ${sel === k ? "border-accent bg-accent/15" : "border-hairline bg-surface"}`}
            >
              <Sci>{step.items[k].text}</Sci>
            </button>
          ) : null
        )}
      </div>
    </div>
  );
}

type GraphPickStepT = Extract<LessonStep, { kind: "graphpick" }>;
function GraphPickStep({ step, onSolved, reveal }: { step: GraphPickStepT; onSolved: (b: boolean) => void; reveal: boolean }) {
  const [picked, setPicked] = useState<number | null>(null);
  useEffect(() => {
    if (reveal) setPicked(step.correct);
  }, [reveal, step.correct]);
  const correct = picked === step.correct;
  useEffect(() => onSolved(correct), [correct, onSolved]);

  const maxX = Math.max(1, ...step.options.flatMap((o) => o.points.map((p) => p[0])));
  const maxY = Math.max(1, ...step.options.flatMap((o) => o.points.map((p) => p[1])));
  const W = 150, H = 110, pad = 16;
  const sx = (x: number) => pad + (x / maxX) * (W - pad - 6);
  const sy = (y: number) => H - pad - (y / maxY) * (H - pad - 6);

  const show = picked !== null;
  return (
    <div>
      <p className="font-display text-lg font-bold text-ink"><Sci>{step.prompt}</Sci></p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {step.options.map((opt, oi) => {
          const isCorrect = oi === step.correct;
          const chosen = picked === oi;
          const tone = !show
            ? "border-hairline"
            : isCorrect
              ? "border-guarantee bg-guarantee/10"
              : chosen
                ? "border-signal bg-signal/10"
                : "border-hairline opacity-50";
          const pts = opt.points.map((p) => `${sx(p[0])},${sy(p[1])}`).join(" ");
          return (
            <button key={oi} type="button" disabled={show} onClick={() => setPicked(oi)} className={`rounded-xl border-2 p-2 transition-colors ${tone}`}>
              <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={opt.caption ?? `Graph ${oi + 1}`}>
                <line x1={pad} y1={H - pad} x2={W - 4} y2={H - pad} stroke="rgba(196,181,253,0.5)" strokeWidth="1.5" />
                <line x1={pad} y1={H - pad} x2={pad} y2={4} stroke="rgba(196,181,253,0.5)" strokeWidth="1.5" />
                <polyline points={pts} fill="none" stroke={show && isCorrect ? "var(--color-guarantee)" : "#c4b5fd"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="mt-1 flex items-center justify-between px-1">
                <span className="text-xs font-bold text-body">{String.fromCharCode(65 + oi)}</span>
                {opt.caption && <span className="text-[10px] text-body"><Sci>{opt.caption}</Sci></span>}
                {show && isCorrect && <NamedIcon name="check" size={13} className="text-guarantee" />}
              </div>
            </button>
          );
        })}
      </div>
      {(step.xLabel || step.yLabel) && (
        <p className="mt-1 text-center text-[10px] text-body">
          {step.yLabel && <><Sci>{step.yLabel}</Sci> against </>}{step.xLabel && <Sci>{step.xLabel}</Sci>}
        </p>
      )}
    </div>
  );
}
