"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { PublicQuestion } from "@/lib/diagnostic-questions";
import { TierPill, type ForecastTier } from "@/components/heat";

interface SubmitResult {
  attemptId: string;
  score: number;
  totalMarks: number;
  band: "storm" | "cloudy" | "clear";
  topicTier: ForecastTier;
}

const BAND_UI: Record<SubmitResult["band"], { title: string; line: string; cls: string }> = {
  storm: {
    title: "Storm warning on this topic",
    line: "This topic is forecast VERY HIGH for 2026 — and right now it would cost you marks. The full breakdown shows exactly which ones, and how to get them back.",
    cls: "text-coral",
  },
  cloudy: {
    title: "Partly cloudy — close, but marks are leaking",
    line: "You know this topic — but a few marks slipped. The breakdown shows precisely where, with worked solutions.",
    cls: "text-accent",
  },
  clear: {
    title: "Clear skies here — keep it sharp",
    line: "Strong showing on the most-likely topic. See the worked solutions and how to keep the edge.",
    cls: "text-guarantee",
  },
};

function beacon(type: string, attemptId?: string, meta?: string) {
  void fetch("/api/diagnostic/event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, attemptId, meta }),
    keepalive: true,
  }).catch(() => {});
}

export function DiagnosticQuiz({
  level,
  slug,
  subjectName,
  topicLabel,
  questions,
}: {
  level: string;
  slug: string;
  subjectName: string;
  topicLabel: string;
  questions: PublicQuestion[];
}) {
  const router = useRouter();
  const [step, setStep] = useState(0); // question index; questions.length = band; +1 = gate
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isParent, setIsParent] = useState(false);
  const started = useRef(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!started.current) {
      started.current = true;
      beacon("diagnostic_start", undefined, `${level}/${slug}`);
    }
  }, [level, slug]);

  // Move focus to the step heading on change — keeps screen readers oriented.
  useEffect(() => {
    headingRef.current?.focus();
  }, [step]);

  const q = questions[step];
  const progressPct = Math.round((Math.min(step, questions.length) / questions.length) * 100);

  function answer(qid: string, value: string) {
    setAnswers((a) => ({ ...a, [qid]: value }));
  }

  async function next() {
    if (!q) return;
    if (!(answers[q.id] ?? "").trim()) {
      setError("Give it a shot — even a guess tells you something.");
      return;
    }
    setError("");
    beacon("question_answered", result?.attemptId, `${slug} q${step + 1}`);
    if (step < questions.length - 1) {
      setStep(step + 1);
      return;
    }
    // Last question → grade server-side.
    setBusy(true);
    try {
      const params = new URLSearchParams(window.location.search);
      const ref = document.cookie
        .split("; ")
        .find((c) => c.startsWith("studylah_ref="))
        ?.split("=")[1];
      const res = await fetch("/api/diagnostic/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          level,
          slug,
          answers,
          utm: params.toString() || undefined,
          ref: ref ? decodeURIComponent(ref) : undefined,
        }),
      });
      const body = (await res.json()) as SubmitResult & { error?: string };
      if (!res.ok) throw new Error(body.error ?? "Something went wrong — try again.");
      setResult(body);
      setStep(questions.length);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong — try again.");
    } finally {
      setBusy(false);
    }
  }

  async function unlock(e: FormEvent) {
    e.preventDefault();
    if (!result) return;
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/diagnostic/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attemptId: result.attemptId, email, consent, isParent }),
      });
      const body = (await res.json()) as { resultsUrl?: string; error?: string };
      if (!res.ok || !body.resultsUrl) {
        throw new Error(body.error ?? "Something went wrong — try again.");
      }
      router.push(body.resultsUrl);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong — try again.");
      setBusy(false);
    }
  }

  // ---- Step: instant band (ungated hook) ----
  if (result && step >= questions.length) {
    const ui = BAND_UI[result.band];
    return (
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-hairline bg-surface p-6 text-center">
          <p className="font-mono text-xs text-body">
            {subjectName} · {topicLabel}
          </p>
          <p className={`mt-4 font-display text-5xl font-black ${ui.cls}`}>
            {result.score}/{result.totalMarks}
          </p>
          <div className="mt-2 flex justify-center">
            <TierPill tier={result.topicTier} />
          </div>
          <h2
            ref={headingRef}
            tabIndex={-1}
            className="mt-4 font-display text-2xl font-bold text-ink outline-none"
          >
            {ui.title}
          </h2>
          <p className="mt-2 text-sm text-body">{ui.line}</p>
        </div>

        <form
          onSubmit={unlock}
          className="mt-4 rounded-2xl border border-accent/40 bg-surface p-6"
        >
          <h3 className="font-display text-lg font-bold text-ink">
            Get your full breakdown — free
          </h3>
          <p className="mt-1 text-sm text-body">
            Which marks you dropped, the worked solutions, and a fix plan
            matched to where you lost them.
          </p>
          <label htmlFor="diag-email" className="mt-4 block text-xs font-medium text-body">
            Email for your results
          </label>
          <input
            id="diag-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-1 w-full rounded-lg border border-hairline bg-night px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
          />
          <label className="mt-3 flex items-start gap-2 text-xs text-body">
            <input
              type="checkbox"
              checked={isParent}
              onChange={(e) => setIsParent(e.target.checked)}
              className="mt-0.5"
            />
            <span>I&apos;m a parent checking for my child</span>
          </label>
          <label className="mt-2 flex items-start gap-2 text-xs text-body">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5"
            />
            <span>
              I agree to StudyLah emailing me these results and occasional
              exam-prep tips. Withdraw anytime (PDPA).
            </span>
          </label>
          <button
            type="submit"
            disabled={busy}
            className="mt-4 w-full rounded-lg bg-accent px-5 py-3 text-sm font-bold text-night transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {busy ? "Unlocking…" : "Unlock my breakdown"}
          </button>
          {error && (
            <p className="mt-2 text-sm text-coral" role="alert">
              {error}
            </p>
          )}
        </form>
      </div>
    );
  }

  // ---- Step: one question per screen ----
  return (
    <div className="mx-auto max-w-md">
      <div
        role="progressbar"
        aria-valuenow={progressPct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Quiz progress"
        className="h-2 overflow-hidden rounded-full bg-surface"
      >
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-300"
          style={{ width: `${Math.max(6, progressPct)}%` }}
        />
      </div>
      <p className="mt-2 font-mono text-xs text-body">
        Question {step + 1} of {questions.length} · {q.marks} mark
        {q.marks === 1 ? "" : "s"}
      </p>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="mt-3 font-display text-xl font-bold leading-snug text-ink outline-none"
      >
        {q.stem}
      </h2>

      {q.type === "mcq" && q.options ? (
        <div role="radiogroup" aria-label="Answer options" className="mt-5 space-y-2">
          {q.options.map((opt, i) => {
            const chosen = answers[q.id] === String(i);
            return (
              <label
                key={opt}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${
                  chosen
                    ? "border-accent bg-surface text-ink"
                    : "border-hairline bg-surface text-body hover:border-accent/50"
                }`}
              >
                <input
                  type="radio"
                  name={q.id}
                  value={String(i)}
                  checked={chosen}
                  onChange={() => answer(q.id, String(i))}
                  className="accent-[#ffdc00]"
                />
                {opt}
              </label>
            );
          })}
        </div>
      ) : (
        <div className="mt-5">
          <label htmlFor={`ans-${q.id}`} className="sr-only">
            Your answer
          </label>
          <input
            id={`ans-${q.id}`}
            type="text"
            inputMode="decimal"
            value={answers[q.id] ?? ""}
            onChange={(e) => answer(q.id, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") void next();
            }}
            placeholder="Type your answer"
            className="w-full rounded-xl border border-hairline bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-accent"
          />
        </div>
      )}

      <button
        type="button"
        onClick={() => void next()}
        disabled={busy}
        className="mt-6 w-full rounded-lg bg-accent px-5 py-3 text-sm font-bold text-night transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {busy ? "Marking…" : step === questions.length - 1 ? "Mark my answers" : "Next"}
      </button>
      {error && (
        <p className="mt-2 text-sm text-coral" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
