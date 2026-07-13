"use client";

import { useMemo, useState } from "react";

// A scientific calculator for the diagnostic quiz, enough for O-/N-Level
// Mathematics: the four operations, powers & roots, trig (deg/rad), log & ln,
// factorial, π and e, parentheses and scientific notation. It evaluates a typed
// expression with a small recursive-descent parser, NO eval, so it's safe and
// CSP-clean. Keeps its own open state; the quiz just drops <QuizCalculator/> in.

// ── Expression evaluator ─────────────────────────────────────────────────────

type Tok =
  | { t: "num"; v: number }
  | { t: "const"; v: number }
  | { t: "op"; v: string }
  | { t: "fn"; v: string }
  | { t: "lp" }
  | { t: "rp" }
  | { t: "fact" };

const FUNCS = new Set(["asin", "acos", "atan", "sin", "cos", "tan", "ln", "log", "sqrt", "exp", "abs"]);

function tokenize(s: string): Tok[] {
  const toks: Tok[] = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (c === " ") { i++; continue; }
    if ((c >= "0" && c <= "9") || c === ".") {
      let j = i;
      while (j < s.length && /[0-9.]/.test(s[j])) j++;
      const v = parseFloat(s.slice(i, j));
      if (Number.isNaN(v)) throw new Error("num");
      toks.push({ t: "num", v });
      i = j;
      continue;
    }
    if (/[a-z]/i.test(c)) {
      let j = i;
      while (j < s.length && /[a-z]/i.test(s[j])) j++;
      const w = s.slice(i, j).toLowerCase();
      i = j;
      if (w === "e") toks.push({ t: "const", v: Math.E });
      else if (w === "pi") toks.push({ t: "const", v: Math.PI });
      else if (FUNCS.has(w)) toks.push({ t: "fn", v: w });
      else throw new Error("ident");
      continue;
    }
    if (c === "π") { toks.push({ t: "const", v: Math.PI }); i++; continue; }
    if (c === "×") { toks.push({ t: "op", v: "*" }); i++; continue; }
    if (c === "÷") { toks.push({ t: "op", v: "/" }); i++; continue; }
    if (c === "−") { toks.push({ t: "op", v: "-" }); i++; continue; }
    if ("+-*/^".includes(c)) { toks.push({ t: "op", v: c }); i++; continue; }
    if (c === "(") { toks.push({ t: "lp" }); i++; continue; }
    if (c === ")") { toks.push({ t: "rp" }); i++; continue; }
    if (c === "!") { toks.push({ t: "fact" }); i++; continue; }
    throw new Error("char");
  }
  return toks;
}

function factorial(n: number): number {
  if (n < 0 || !Number.isInteger(n)) throw new Error("fact");
  let r = 1;
  for (let k = 2; k <= n; k++) r *= k;
  return r;
}

function evaluate(expr: string, deg: boolean): number {
  const toks = tokenize(expr);
  if (toks.length === 0) throw new Error("empty");
  let p = 0;
  const peek = () => toks[p];
  const d2r = Math.PI / 180;
  const r2d = 180 / Math.PI;

  const applyFn = (name: string, x: number): number => {
    switch (name) {
      case "sin": return Math.sin(deg ? x * d2r : x);
      case "cos": return Math.cos(deg ? x * d2r : x);
      case "tan": return Math.tan(deg ? x * d2r : x);
      case "asin": return deg ? Math.asin(x) * r2d : Math.asin(x);
      case "acos": return deg ? Math.acos(x) * r2d : Math.acos(x);
      case "atan": return deg ? Math.atan(x) * r2d : Math.atan(x);
      case "ln": return Math.log(x);
      case "log": return Math.log10(x);
      case "sqrt": return Math.sqrt(x);
      case "exp": return Math.exp(x);
      case "abs": return Math.abs(x);
      default: throw new Error("fn");
    }
  };

  const isFactorStart = (tk: Tok | undefined) =>
    !!tk && (tk.t === "num" || tk.t === "const" || tk.t === "lp" || tk.t === "fn");

  function parseAtom(): number {
    const tk = peek();
    if (!tk) throw new Error("eof");
    if (tk.t === "num" || tk.t === "const") { p++; return tk.v; }
    if (tk.t === "lp") {
      p++;
      const v = parseExpr();
      if (peek()?.t !== "rp") throw new Error(")");
      p++;
      return v;
    }
    if (tk.t === "fn") {
      p++;
      if (peek()?.t !== "lp") throw new Error("(");
      p++;
      const v = parseExpr();
      if (peek()?.t !== "rp") throw new Error(")");
      p++;
      return applyFn(tk.v, v);
    }
    throw new Error("atom");
  }
  function parsePostfix(): number {
    let v = parseAtom();
    while (peek()?.t === "fact") { p++; v = factorial(v); }
    return v;
  }
  function parsePower(): number {
    const base = parsePostfix();
    if (peek()?.t === "op" && (peek() as { v: string }).v === "^") {
      p++;
      return Math.pow(base, parseUnary());
    }
    return base;
  }
  function parseUnary(): number {
    const tk = peek();
    if (tk?.t === "op" && (tk.v === "-" || tk.v === "+")) {
      p++;
      const v = parseUnary();
      return tk.v === "-" ? -v : v;
    }
    return parsePower();
  }
  function parseTerm(): number {
    let v = parseUnary();
    for (;;) {
      const tk = peek();
      if (tk?.t === "op" && (tk.v === "*" || tk.v === "/")) {
        p++;
        const r = parseUnary();
        v = tk.v === "*" ? v * r : v / r;
      } else if (isFactorStart(tk)) {
        v = v * parseUnary(); // implicit multiplication: 2π, 3(4), 2sin(x)
      } else break;
    }
    return v;
  }
  function parseExpr(): number {
    let v = parseTerm();
    while (peek()?.t === "op" && ((peek() as { v: string }).v === "+" || (peek() as { v: string }).v === "-")) {
      const op = (peek() as { v: string }).v;
      p++;
      const r = parseTerm();
      v = op === "+" ? v + r : v - r;
    }
    return v;
  }

  const val = parseExpr();
  if (p !== toks.length) throw new Error("trailing");
  return val;
}

function fmt(n: number): string {
  if (!Number.isFinite(n)) return "Error";
  let r = Math.round(n * 1e10) / 1e10;
  if (Object.is(r, -0)) r = 0;
  const abs = Math.abs(r);
  if (abs !== 0 && (abs < 1e-6 || abs >= 1e12)) {
    return r.toExponential(6).replace(/\.?0+e/, "e");
  }
  return String(r);
}

// ── Component ────────────────────────────────────────────────────────────────

export function QuizCalculator() {
  const [open, setOpen] = useState(false);
  const [expr, setExpr] = useState("");
  const [deg, setDeg] = useState(true);
  const [inv, setInv] = useState(false);
  const [justEvaluated, setJustEvaluated] = useState(false);

  const preview = useMemo(() => {
    if (!expr || expr === "Error") return "";
    try {
      const v = evaluate(expr, deg);
      return Number.isFinite(v) ? fmt(v) : "";
    } catch {
      return "";
    }
  }, [expr, deg]);

  function ins(tok: string) {
    setExpr((prev) => {
      if (justEvaluated || prev === "Error") {
        // After "=", an operator continues from the result; anything else starts fresh.
        return /^[+\-*/^!×÷−]/.test(tok) ? prev + tok : tok;
      }
      return prev + tok;
    });
    setJustEvaluated(false);
  }
  function equals() {
    try {
      setExpr(fmt(evaluate(expr, deg)));
    } catch {
      setExpr("Error");
    }
    setJustEvaluated(true);
  }
  const clearAll = () => { setExpr(""); setJustEvaluated(false); };
  const back = () => { setExpr((e) => (e === "Error" ? "" : e.slice(0, -1))); setJustEvaluated(false); };

  type Variant = "num" | "op" | "fn" | "eq" | "acc";
  const Btn = ({
    label,
    onPress,
    variant = "num",
    span = 1,
    active = false,
  }: {
    label: React.ReactNode;
    onPress: () => void;
    variant?: Variant;
    span?: number;
    active?: boolean;
  }) => (
    <button
      type="button"
      onClick={onPress}
      className={`rounded-lg py-2.5 text-center font-bold transition-colors ${
        span === 3 ? "col-span-3" : span === 2 ? "col-span-2" : ""
      } ${
        variant === "fn"
          ? "bg-night-2 text-[11px] text-teal hover:bg-hairline"
          : variant === "op"
            ? "bg-night-2 text-sm text-accent hover:bg-hairline"
            : variant === "eq"
              ? "bg-accent text-sm text-night hover:opacity-90"
              : variant === "acc"
                ? `text-[11px] ${active ? "bg-accent text-night" : "bg-night-2 text-body hover:bg-hairline"}`
                : "bg-surface text-sm text-ink hover:bg-hairline"
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      {/* Small yellow labelled button, rendered inline by the quiz (so it never
          overlaps the timer). Tapping it blurs the answer field, dismissing the
          keyboard, so the panel below has the full screen. */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="rounded-lg bg-accent px-3 py-1.5 text-xs font-bold text-night shadow transition-opacity hover:opacity-90 print:hidden"
      >
        {open ? "Close" : "Calculator"}
      </button>

      {open && (
        <div className="fixed left-1/2 top-16 z-40 w-[min(20rem,92vw)] -translate-x-1/2 rounded-2xl border border-hairline bg-night p-3 shadow-2xl print:hidden">
          {/* Display: the expression, with a live result preview underneath. */}
          <div className="mb-2 rounded-lg bg-surface px-3 py-2">
            <div className="min-h-[1.6rem] overflow-x-auto whitespace-nowrap text-right font-mono text-lg font-bold text-ink">
              {expr || "0"}
            </div>
            <div className="h-4 overflow-x-auto whitespace-nowrap text-right font-mono text-xs text-body" aria-live="polite">
              {preview ? `= ${preview}` : ""}
            </div>
          </div>

          <div className="grid grid-cols-5 gap-1.5">
            <Btn label="INV" variant="acc" active={inv} onPress={() => setInv((v) => !v)} />
            <Btn label={deg ? "DEG" : "RAD"} variant="acc" onPress={() => setDeg((v) => !v)} />
            <Btn label="C" variant="acc" onPress={clearAll} />
            <Btn label="⌫" variant="acc" onPress={back} />
            <Btn label="(" variant="op" onPress={() => ins("(")} />

            <Btn label={inv ? "sin⁻¹" : "sin"} variant="fn" onPress={() => ins(inv ? "asin(" : "sin(")} />
            <Btn label={inv ? "cos⁻¹" : "cos"} variant="fn" onPress={() => ins(inv ? "acos(" : "cos(")} />
            <Btn label={inv ? "tan⁻¹" : "tan"} variant="fn" onPress={() => ins(inv ? "atan(" : "tan(")} />
            <Btn label=")" variant="op" onPress={() => ins(")")} />
            <Btn label="÷" variant="op" onPress={() => ins("÷")} />

            <Btn label={inv ? "eˣ" : "ln"} variant="fn" onPress={() => ins(inv ? "exp(" : "ln(")} />
            <Btn label={inv ? "10ˣ" : "log"} variant="fn" onPress={() => ins(inv ? "10^(" : "log(")} />
            <Btn label={inv ? "x²" : "√"} variant="fn" onPress={() => ins(inv ? "^2" : "sqrt(")} />
            <Btn label="^" variant="op" onPress={() => ins("^")} />
            <Btn label="×" variant="op" onPress={() => ins("×")} />

            <Btn label="7" onPress={() => ins("7")} />
            <Btn label="8" onPress={() => ins("8")} />
            <Btn label="9" onPress={() => ins("9")} />
            <Btn label="π" variant="fn" onPress={() => ins("π")} />
            <Btn label="−" variant="op" onPress={() => ins("−")} />

            <Btn label="4" onPress={() => ins("4")} />
            <Btn label="5" onPress={() => ins("5")} />
            <Btn label="6" onPress={() => ins("6")} />
            <Btn label="e" variant="fn" onPress={() => ins("e")} />
            <Btn label="+" variant="op" onPress={() => ins("+")} />

            <Btn label="1" onPress={() => ins("1")} />
            <Btn label="2" onPress={() => ins("2")} />
            <Btn label="3" onPress={() => ins("3")} />
            <Btn label="!" variant="fn" onPress={() => ins("!")} />
            <Btn label="EXP" variant="fn" onPress={() => ins("×10^")} />

            <Btn label="0" onPress={() => ins("0")} />
            <Btn label="." onPress={() => ins(".")} />
            <Btn label="=" variant="eq" span={3} onPress={equals} />
          </div>
        </div>
      )}
    </>
  );
}
