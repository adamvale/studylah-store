"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import type { Formula as FormulaSpec, LessonStep } from "@/lib/lesson-steps";
import { NamedIcon } from "@/components/icons";
import { Sci } from "@/components/sci-text";
import { ImmersiveShell } from "@/components/immersive-shell";
import { physicsFigureSrc } from "@/lib/teaching";
import { speak, stopSpeaking } from "@/lib/speak";

// Render LaTeX with KaTeX (fonts bundled, no network). Falls back to the raw
// string if the LaTeX is malformed, so bad content never crashes the lesson.
function Katex({ tex, display }: { tex: string; display?: boolean }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(tex, { displayMode: display, throwOnError: false, output: "html" });
    } catch {
      return tex;
    }
  }, [tex, display]);
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

// Safe arithmetic evaluator (shunting-yard, no eval): + - * / , parentheses,
// decimals and a leading minus. Returns "" if the expression is incomplete.
function evalArith(expr: string): string {
  const tokens = expr.match(/(\d+\.?\d*|\.\d+|[+\-*/()])/g);
  if (!tokens) return "";
  const out: string[] = [];
  const ops: string[] = [];
  const prec: Record<string, number> = { "+": 1, "-": 1, "*": 2, "/": 2 };
  let prev: string | null = null;
  for (const t of tokens) {
    if (/^[\d.]/.test(t)) {
      out.push(t);
    } else if (t === "(") {
      ops.push(t);
    } else if (t === ")") {
      while (ops.length && ops[ops.length - 1] !== "(") out.push(ops.pop() as string);
      ops.pop();
    } else {
      // a leading "-" (start, after "(" or after an operator) means 0 - x
      if (t === "-" && (prev === null || prev === "(" || "+-*/".includes(prev))) out.push("0");
      while (ops.length && "+-*/".includes(ops[ops.length - 1]) && prec[ops[ops.length - 1]] >= prec[t]) {
        out.push(ops.pop() as string);
      }
      ops.push(t);
    }
    prev = t;
  }
  while (ops.length) out.push(ops.pop() as string);
  const st: number[] = [];
  for (const t of out) {
    if (/^[\d.]/.test(t)) {
      st.push(parseFloat(t));
    } else {
      const b = st.pop();
      const a = st.pop();
      if (a === undefined || b === undefined) return "";
      st.push(t === "+" ? a + b : t === "-" ? a - b : t === "*" ? a * b : a / b);
    }
  }
  const r = st.pop();
  if (r === undefined || st.length || !Number.isFinite(r)) return "";
  return String(Math.round(r * 1e10) / 1e10);
}

// A calculator the student can pop open during any question. The button lives
// in the top bar; the keypad floats above the footer. Basic four-function with
// parentheses and decimals, which is all O-Level working needs.
function Calculator() {
  const [open, setOpen] = useState(false);
  const [expr, setExpr] = useState("");
  const pretty = (s: string) => s.replace(/\*/g, " × ").replace(/\//g, " ÷ ").replace(/([+\-])/g, " $1 ").trim();
  const press = (t: string) => {
    if (t === "C") return setExpr("");
    if (t === "back") return setExpr((e) => e.slice(0, -1));
    if (t === "=") return setExpr((e) => evalArith(e) || e);
    setExpr((e) => e + t);
  };
  const KEYS: { label: string; t: string; tone?: string }[] = [
    { label: "C", t: "C", tone: "text-signal" }, { label: "(", t: "(" }, { label: ")", t: ")" }, { label: "÷", t: "/", tone: "text-accent" },
    { label: "7", t: "7" }, { label: "8", t: "8" }, { label: "9", t: "9" }, { label: "×", t: "*", tone: "text-accent" },
    { label: "4", t: "4" }, { label: "5", t: "5" }, { label: "6", t: "6" }, { label: "-", t: "-", tone: "text-accent" },
    { label: "1", t: "1" }, { label: "2", t: "2" }, { label: "3", t: "3" }, { label: "+", t: "+", tone: "text-accent" },
    { label: "0", t: "0" }, { label: ".", t: "." }, { label: "⌫", t: "back" }, { label: "=", t: "=", tone: "bg-accent !text-night" },
  ];
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Calculator"
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${open ? "border-accent text-accent" : "border-hairline text-body"}`}
      >
        <NamedIcon name="calculator" size={18} />
      </button>
      {open && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center" onClick={() => setOpen(false)}>
          <div
            className="mb-24 w-[min(20rem,92vw)] rounded-2xl border border-hairline bg-night/95 p-3 shadow-2xl backdrop-blur"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-2 min-h-[2.75rem] rounded-xl bg-white/5 px-3 py-2 text-right">
              <div className="truncate font-mono text-lg text-ink">{pretty(expr) || "0"}</div>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {KEYS.map((k) => (
                <button
                  key={k.label}
                  type="button"
                  onClick={() => press(k.t)}
                  className={`rounded-xl border border-hairline py-3 text-base font-bold text-ink ${k.tone ?? ""}`}
                >
                  {k.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Teaching text with emphasised keywords: authors wrap a key term in *stars*
// and it renders bold and accent-coloured so the eye lands on it. Everything
// still passes through <Sci> for `_`/`^` notation.
function RichText({ children }: { children: string }) {
  const parts = (children ?? "").split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.length > 2 && p.startsWith("*") && p.endsWith("*") ? (
          <strong key={i} className="font-semibold text-accent">
            <Sci>{p.slice(1, -1)}</Sci>
          </strong>
        ) : (
          <Sci key={i}>{p}</Sci>
        ),
      )}
    </>
  );
}

// A formula shown in proper maths on a teaching card: the equation big and
// centred, then a legend naming each symbol and its unit, like an exam formula
// list. The equation scrolls sideways on its own if it is very wide.
function Formula({ latex, where }: FormulaSpec) {
  return (
    <div className="mt-4 rounded-xl border border-hairline bg-white/[0.06] p-4">
      <div className="overflow-x-auto text-center text-ink [&_.katex]:text-[1.5rem]">
        <Katex tex={latex} display />
      </div>
      {where && where.length > 0 && (
        <ul className="mt-3 space-y-1.5 border-t border-white/10 pt-3">
          {where.map((w, wi) => (
            <li key={wi} className="flex items-baseline gap-2 text-sm leading-relaxed">
              <span className="min-w-[1.75rem] shrink-0 text-accent [&_.katex]:text-[0.95rem]">
                <Katex tex={w.sym} />
              </span>
              <span className="flex-1 text-body">
                <Sci>{w.meaning}</Sci>
              </span>
              {w.unit && (
                <span className="shrink-0 font-mono text-xs text-body/80">
                  <Sci>{w.unit}</Sci>
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// A physics diagram shown inside a teaching card or question. The SVGs are drawn
// for a dark background, so we render them bare (no card, no border, no white
// fill) and as large as possible (full width) because their labels are small.
// Renders nothing if the figure name is unknown, so content never shows a break.
function Figure({ name }: { name?: string }) {
  const src = physicsFigureSrc(name);
  if (!src) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      className="mb-3 block h-auto w-full object-contain"
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}

// The interactive lesson player: Brilliant-style, one step at a time, hands-on,
// with Gugu's scripted voice guiding the way. Gugu opens a problem with `ask`,
// gives escalating `hints` on Help, and reads the teaching summary at the end,
// all on-device speech (no AI, no cost). Runs inside the ImmersiveShell.

const PROBLEM_KINDS = ["slider", "order", "match", "tiles", "plot", "circuit", "cloze", "spoterror", "classify", "graphpick"] as const;
function isProblem(kind: LessonStep["kind"]): boolean {
  return (PROBLEM_KINDS as readonly string[]).includes(kind);
}
function isQuestion(kind: LessonStep["kind"]): boolean {
  return kind === "choice" || kind === "open" || isProblem(kind);
}

// Gugu talks like a person, not a script. All her spoken reactions are drawn
// from rotating pools (varied by step index) so she never says the same line
// twice in a row, and she gives NO hint on the opener (a tutor helps when asked).
function pick<T>(pool: T[], n: number): T {
  return pool[((n % pool.length) + pool.length) % pool.length];
}

// A warm, natural lead-in to a question. Rotates so consecutive questions differ.
const OPENER_LEADS = [
  "Alright, let's look at this one.",
  "Okay, how about this one?",
  "Here is another for you.",
  "Let's try this next.",
  "Now, see what you make of this.",
  "Good, on we go. Take a look at this one.",
  "Right then, have a read of this.",
  "This one next. Take your time.",
];
// A short, natural cue for interactions that need direction (choice needs none).
const INTERACTION_CUE: Partial<Record<LessonStep["kind"], string>> = {
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
function openerFor(kind: LessonStep["kind"], n: number): string | undefined {
  if (!isQuestion(kind)) return undefined;
  const lead = pick(OPENER_LEADS, n);
  const cue = INTERACTION_CUE[kind];
  return cue ? `${lead} ${cue}` : lead;
}

// Warm praise when a student answers correctly, and a natural on-you-go nudge.
const CORRECT_PRAISE = [
  "Yes, that is it.",
  "Exactly right, well done.",
  "Good job, that is correct.",
  "Nice, you have got it.",
  "Lovely, spot on.",
  "That is the one, nicely done.",
];
const NEXT_NUDGE = [
  "Let's try the next one.",
  "On to the next.",
  "How about this next one.",
  "Right, let's keep going.",
];
// A gentle lead-in when a pick is wrong, and an encouraging invitation to retry.
const WRONG_LEAD = ["Not quite.", "Hmm, not this time.", "Close, but not that one.", "Not quite that one."];
const RETRY_NUDGE = ["Have another go.", "Give it another try.", "Want to try once more?", "Have another look."];

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

  const praised = useRef(false); // Gugu praises a correct answer once per step

  const step = steps[i];
  const last = i === steps.length - 1;
  const ask = "ask" in step ? step.ask : undefined;
  const hints = ("hints" in step ? step.hints : undefined) ?? [];
  const explain = "explain" in step ? step.explain : undefined;
  const working = "working" in step ? step.working : undefined;
  // Gugu's opening line for a question: a varied, natural lead-in (no hint yet).
  const opener = openerFor(step.kind, i);
  // Help ladder, on demand only: the scripted `ask` guidance first, then hints.
  const helpItems = ask ? [ask, ...hints] : hints;

  // A warm spoken reaction after a correct answer: praise, plus "let's try the
  // next one" only when a question actually follows.
  function praiseLine(): string {
    const base = pick(CORRECT_PRAISE, i);
    const nextIsQuestion = !last && isQuestion(steps[i + 1].kind);
    return nextIsQuestion ? `${base} ${pick(NEXT_NUDGE, i)}` : base;
  }

  // Teaching steps: Gugu speaks `say` (falling back to the body) to teach the
  // idea aloud, and the student must tap "I understand" before continuing.
  const isTeach = step.kind === "concept" || step.kind === "insight";
  const teachSay = isTeach ? (("say" in step && step.say) ? step.say : step.body) : undefined;

  // Every teaching AND question screen now advances on the same gesture: the
  // student taps "I understand". (Reveal is a tap-to-see prompt and unlocks on
  // reveal.) So Gugu can teach/guide by voice and the student stays in control.
  const canContinue =
    step.kind === "reveal"
      ? revealed
      : step.kind === "choice" || step.kind === "open" || isProblem(step.kind) || isTeach
        ? understood
        : true;

  // When a question appears, Gugu opens with a light nudge (read and think),
  // NOT a hint. Keyed on `i` so it re-speaks for each new question. The repeat
  // icon replays it. speak() cancels any prior line.
  useEffect(() => {
    if (opener) speak(opener);
    return () => stopSpeaking();
  }, [opener, i]);

  // On a teaching step, Gugu starts teaching by voice as the card appears.
  useEffect(() => {
    if (teachSay) speak(teachSay);
    return () => stopSpeaking();
  }, [teachSay]);

  // The moment an interactive problem is solved, Gugu reacts like a tutor.
  // (Choice praise is spoken from its own click handler, before the summary.)
  useEffect(() => {
    if (solved && !praised.current && isProblem(step.kind)) {
      praised.current = true;
      speak(praiseLine());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [solved]);

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
    praised.current = false;
  }

  // A choice is "done" only once answered CORRECTLY (solved), so a wrong pick
  // keeps the question open for another try rather than revealing the answer.
  const showSummary =
    (step.kind === "choice" && solved) || (isProblem(step.kind) && (solved || gaveUp));

  return (
    <ImmersiveShell
      onExit={onExit}
      title={title}
      subtitle={subtitle}
      progress={{ current: i + 1, total: steps.length }}
      headerRight={<Calculator />}
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
      {/* Gugu's opening nudge is spoken aloud once as the question appears; no
          repeat control, since each question just moves the student on. */}

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
          {"figure" in step && step.figure && <Figure name={step.figure} />}
          {step.kind === "concept" && step.heading && (
            <p className="font-display text-2xl font-bold text-ink">{step.heading}</p>
          )}
          <p className={`${step.kind === "concept" && step.heading ? "mt-3" : ""} text-lg leading-relaxed text-ink`}>
            <RichText>{step.body}</RichText>
          </p>
          {"formula" in step && step.formula && <Formula {...step.formula} />}
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
          {step.figure && <Figure name={step.figure} />}
          <p className="font-display text-lg font-bold text-ink"><Sci>{step.question}</Sci></p>
          <div className="mt-3 space-y-2">
            {step.options.map((opt, oi) => {
              const chosen = picked === oi;
              const isCorrect = oi === step.correct;
              // Reveal the correct answer only once solved. Before that, a wrong
              // pick shows red and the question stays open for another try.
              const tone = solved
                ? isCorrect
                  ? "border-guarantee bg-guarantee/10"
                  : "border-hairline opacity-60"
                : chosen
                  ? "border-signal bg-signal/10"
                  : "border-hairline";
              return (
                <button
                  key={oi}
                  type="button"
                  disabled={solved}
                  onClick={() => {
                    if (solved) return;
                    setPicked(oi);
                    if (oi === step.correct) {
                      setSolved(true);
                      praised.current = true;
                      speak(praiseLine());
                    } else {
                      // Gugu gives a hint straight away and asks for another go.
                      const hi = Math.min(hintsShown, Math.max(helpItems.length - 1, 0));
                      const hint = helpItems[hi] ?? "Think it through once more.";
                      setHintsShown((n) => Math.min(n + 1, helpItems.length));
                      speak(`${pick(WRONG_LEAD, hintsShown)} ${hint} ${pick(RETRY_NUDGE, hintsShown)}`);
                    }
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm text-ink transition-colors ${tone}`}
                >
                  <span className="flex-1"><Sci>{opt}</Sci></span>
                  {solved && isCorrect && <NamedIcon name="check" size={16} />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {step.kind === "open" && (
        <div>
          {step.figure && <Figure name={step.figure} />}
          <p className="font-display text-lg font-bold text-ink"><Sci>{step.prompt}</Sci></p>
          <textarea
            key={i}
            rows={4}
            placeholder="Jot your answer, then check it against Gugu's model answer."
            className="mt-3 w-full resize-none rounded-xl border border-hairline bg-white/5 p-3 text-sm leading-relaxed text-ink placeholder:text-body/50 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          />
          {!revealed ? (
            <button
              type="button"
              onClick={() => {
                setRevealed(true);
                speak(step.modelAnswer);
              }}
              className="mt-3 w-full rounded-xl bg-accent/15 py-3 text-sm font-bold text-accent"
            >
              Show model answer
            </button>
          ) : (
            <div className="glass mt-3 bg-gradient-to-br from-white/5 to-transparent p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-bold uppercase tracking-wide text-accent">Model answer</p>
                <button
                  type="button"
                  onClick={() => speak(step.modelAnswer)}
                  className="shrink-0 rounded-full border border-hairline px-3 py-1 text-[11px] font-bold text-accent"
                >
                  Hear it
                </button>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-ink"><Sci>{step.modelAnswer}</Sci></p>
              {step.marks && step.marks.length > 0 && (
                <ul className="mt-3 space-y-1.5 border-t border-white/10 pt-3">
                  {step.marks.map((m, mi) => (
                    <li key={mi} className="flex items-start gap-2 text-sm leading-relaxed text-body">
                      <NamedIcon name="check" size={14} className="mt-0.5 shrink-0 text-guarantee" />
                      <span><Sci>{m}</Sci></span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
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

      {/* Help ladder + the understand gate. Escalating scripted hints on demand,
          then a reveal; the "I understand" button stays visible (it is what
          unlocks Continue) and sits beside Help. */}
      {(step.kind === "choice" || step.kind === "open" || isProblem(step.kind)) && (
        <div className="mt-4">
          {hintsShown > 0 && !showSummary && (
            <div className="space-y-2">
              {helpItems.slice(0, hintsShown).map((h, hi) => (
                <div key={hi} className="flex items-start gap-2 rounded-xl border border-accent/30 bg-accent/5 p-3">
                  <NamedIcon name="sparkle" size={13} className="mt-0.5 shrink-0 text-accent" />
                  <p className="flex-1 text-sm leading-relaxed text-body"><Sci>{h}</Sci></p>
                </div>
              ))}
            </div>
          )}
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {!showSummary && hintsShown < helpItems.length && (
              <button
                type="button"
                onClick={() => {
                  const nextHint = helpItems[hintsShown];
                  setHintsShown((n) => n + 1);
                  if (nextHint) speak(nextHint);
                }}
                className="rounded-full border border-hairline px-4 py-1.5 text-xs font-bold text-accent"
              >
                {hintsShown === 0 ? "Help" : `Another hint (${hintsShown}/${helpItems.length})`}
              </button>
            )}
            {!showSummary && isProblem(step.kind) && hintsShown >= helpItems.length && (
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
            <button
              type="button"
              onClick={() => setUnderstood(true)}
              className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold ${
                understood ? "bg-guarantee/20 text-guarantee" : "bg-accent text-night"
              }`}
            >
              {understood && <NamedIcon name="check" size={14} />}
              {understood ? "Got it" : "I understand"}
            </button>
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

      {/* The full worked solution for a calculation: formula, substitute, answer. */}
      {showSummary && working && working.length > 0 && (
        <div className="glass mt-3 bg-gradient-to-br from-white/5 to-transparent p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-accent">Working</p>
          <ol className="mt-3 space-y-3">
            {working.map((w, wi) => (
              <li key={wi} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-[11px] font-bold text-accent">
                  {wi + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-body">{w.label}</p>
                  {w.latex && (
                    <div className="mt-1 overflow-x-auto text-ink [&_.katex]:text-[1.15rem]">
                      <Katex tex={w.latex} />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
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
