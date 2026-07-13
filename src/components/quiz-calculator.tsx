"use client";

import { useState } from "react";

// A simple pop-up calculator for the diagnostic quiz — enough for the arithmetic
// a mark check needs (moles, masses, percentages), no scientific functions. It
// keeps its own open state and renders a floating toggle, so the quiz only has
// to drop <QuizCalculator /> in once. Pure state machine, no eval.

type Op = "+" | "−" | "×" | "÷";

function fmt(n: number): string {
  if (!Number.isFinite(n)) return "Error";
  // Trim floating-point noise without forcing decimals on whole numbers.
  return String(Math.round(n * 1e10) / 1e10);
}

function apply(a: number, b: number, op: Op): number {
  switch (op) {
    case "+": return a + b;
    case "−": return a - b;
    case "×": return a * b;
    case "÷": return b === 0 ? NaN : a / b;
  }
}

export function QuizCalculator() {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState("0");
  const [acc, setAcc] = useState<number | null>(null);
  const [op, setOp] = useState<Op | null>(null);
  const [overwrite, setOverwrite] = useState(true);

  function inputDigit(d: string) {
    setDisplay((prev) => (overwrite || prev === "0" ? d : prev + d));
    setOverwrite(false);
  }
  function inputDot() {
    if (overwrite) {
      setDisplay("0.");
      setOverwrite(false);
      return;
    }
    setDisplay((prev) => (prev.includes(".") ? prev : prev + "."));
  }
  function chooseOp(next: Op) {
    const cur = parseFloat(display);
    if (acc === null) {
      setAcc(cur);
    } else if (op && !overwrite) {
      const r = apply(acc, cur, op);
      setAcc(r);
      setDisplay(fmt(r));
    }
    setOp(next);
    setOverwrite(true);
  }
  function equals() {
    if (op === null || acc === null) return;
    const r = apply(acc, parseFloat(display), op);
    setDisplay(fmt(r));
    setAcc(null);
    setOp(null);
    setOverwrite(true);
  }
  function clearAll() {
    setDisplay("0");
    setAcc(null);
    setOp(null);
    setOverwrite(true);
  }
  function backspace() {
    if (overwrite) return;
    setDisplay((d) =>
      d.length <= 1 || (d.length === 2 && d.startsWith("-")) ? "0" : d.slice(0, -1)
    );
  }
  function percent() {
    setDisplay((d) => fmt(parseFloat(d) / 100));
    setOverwrite(true);
  }
  function toggleSign() {
    setDisplay((d) => (d.startsWith("-") ? d.slice(1) : d === "0" ? d : "-" + d));
  }

  const Btn = ({
    label,
    onClick,
    variant = "num",
    wide = false,
  }: {
    label: string;
    onClick: () => void;
    variant?: "num" | "op" | "fn" | "eq";
    wide?: boolean;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg py-2.5 text-sm font-bold transition-colors ${
        wide ? "col-span-2" : ""
      } ${
        variant === "op"
          ? "bg-night-2 text-accent hover:bg-hairline"
          : variant === "fn"
            ? "bg-night-2 text-body hover:bg-hairline"
            : variant === "eq"
              ? "bg-accent text-night hover:opacity-90"
              : "bg-surface text-ink hover:bg-hairline"
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      {/* Floating toggle — bottom-right (Gugu lives bottom-left). */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close calculator" : "Open calculator"}
        className="fixed bottom-6 right-4 z-40 flex items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2.5 text-sm font-bold text-ink shadow-lg transition-colors hover:border-accent print:hidden"
      >
        <span aria-hidden="true">🧮</span>
        {open ? "Close" : "Calculator"}
      </button>

      {open && (
        <div className="fixed bottom-20 right-4 z-40 w-60 rounded-2xl border border-hairline bg-night p-3 shadow-2xl print:hidden">
          <div
            className="mb-2 truncate rounded-lg bg-surface px-3 py-2.5 text-right font-mono text-2xl font-bold text-ink"
            aria-live="polite"
          >
            {display}
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            <Btn label="C" variant="fn" onClick={clearAll} />
            <Btn label="±" variant="fn" onClick={toggleSign} />
            <Btn label="%" variant="fn" onClick={percent} />
            <Btn label="÷" variant="op" onClick={() => chooseOp("÷")} />

            <Btn label="7" onClick={() => inputDigit("7")} />
            <Btn label="8" onClick={() => inputDigit("8")} />
            <Btn label="9" onClick={() => inputDigit("9")} />
            <Btn label="×" variant="op" onClick={() => chooseOp("×")} />

            <Btn label="4" onClick={() => inputDigit("4")} />
            <Btn label="5" onClick={() => inputDigit("5")} />
            <Btn label="6" onClick={() => inputDigit("6")} />
            <Btn label="−" variant="op" onClick={() => chooseOp("−")} />

            <Btn label="1" onClick={() => inputDigit("1")} />
            <Btn label="2" onClick={() => inputDigit("2")} />
            <Btn label="3" onClick={() => inputDigit("3")} />
            <Btn label="+" variant="op" onClick={() => chooseOp("+")} />

            <Btn label="0" wide onClick={() => inputDigit("0")} />
            <Btn label="." onClick={inputDot} />
            <Btn label="=" variant="eq" onClick={equals} />
          </div>
          <button
            type="button"
            onClick={backspace}
            className="mt-1.5 w-full rounded-lg bg-night-2 py-2 text-xs font-medium text-body hover:bg-hairline"
          >
            ⌫ Backspace
          </button>
        </div>
      )}
    </>
  );
}
