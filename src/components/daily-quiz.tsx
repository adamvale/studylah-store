"use client";

import { useState } from "react";
import Link from "next/link";
import type { PublicDailyQuestion } from "@/lib/server/study";

interface Result {
  id: string;
  subjectName: string;
  topic: string;
  correct: boolean;
  givenDisplay: string;
  correctAnswer: string;
  workedSolution: string;
}

interface SubmitResponse {
  results: Result[];
  score: number;
  total: number;
  streak: number;
  seededMistakes: number;
}

export function DailyQuiz({
  questions,
  streak,
  doneToday,
  todayScore,
  todayTotal,
}: {
  questions: PublicDailyQuestion[];
  streak: number;
  doneToday: boolean;
  todayScore: number | null;
  todayTotal: number | null;
}) {
  const [open, setOpen] = useState(!doneToday);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const answeredCount = Object.values(answers).filter((v) => v !== "").length;

  async function submit() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/account/daily-quiz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });
      if (!res.ok) throw new Error();
      setResult((await res.json()) as SubmitResponse);
    } catch {
      setError("Couldn't mark that — check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  // --- Results view ---
  if (result) {
    return (
      <div className="space-y-5">
        <div className="rounded-2xl border border-hairline bg-surface p-6 text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-body">
            Today&apos;s three
          </p>
          <p className="mt-1 font-display text-5xl font-black text-ink">
            {result.score}/{result.total}
          </p>
          <p className="mt-2 text-sm text-body">
            🔥 {result.streak}-day streak
            {result.seededMistakes > 0 && (
              <>
                {" · "}
                {result.seededMistakes} saved to your{" "}
                <Link href="/account/mistakes" className="font-medium text-accent underline">
                  mistake notebook
                </Link>
              </>
            )}
          </p>
        </div>

        {result.results.map((r) => (
          <div
            key={r.id}
            className={`rounded-2xl border bg-surface p-5 ${
              r.correct ? "border-guarantee/40" : "border-coral/40"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <p className="font-mono text-xs text-accent">
                {r.subjectName} · {r.topic}
              </p>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                  r.correct ? "bg-guarantee/15 text-guarantee" : "bg-coral/15 text-coral"
                }`}
              >
                {r.correct ? "Correct" : "Review"}
              </span>
            </div>
            {!r.correct && (
              <p className="mt-2 text-sm text-body">
                You answered{" "}
                <span className="text-ink">{r.givenDisplay || "—"}</span>. Correct
                answer: <span className="font-medium text-ink">{r.correctAnswer}</span>.
              </p>
            )}
            <p className="mt-2 text-sm text-body">{r.workedSolution}</p>
          </div>
        ))}

        <p className="text-center text-xs text-body">
          Come back tomorrow for a fresh three — the streak grows every day you
          practise.
        </p>
      </div>
    );
  }

  // --- Already done, collapsed ---
  if (!open) {
    return (
      <div className="rounded-2xl border border-guarantee/40 bg-surface p-6 text-center">
        <p className="font-display text-2xl font-bold text-ink">
          Today&apos;s three: done ✓
        </p>
        {todayScore !== null && todayTotal !== null && (
          <p className="mt-1 text-sm text-body">
            You scored {todayScore}/{todayTotal} · 🔥 {streak}-day streak
          </p>
        )}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-4 rounded-lg border border-hairline px-5 py-2.5 text-sm font-medium text-ink hover:border-accent"
        >
          Practise three more
        </button>
        <p className="mt-3 text-xs text-body/80">
          Extra practice won&apos;t change today&apos;s streak — it&apos;s
          already counted.
        </p>
      </div>
    );
  }

  // --- Active quiz ---
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-body">
          {doneToday ? "Bonus practice" : "3 quick questions · marked instantly"}
        </p>
        <p className="font-mono text-xs text-body">🔥 {streak}-day streak</p>
      </div>

      {questions.map((q, i) => (
        <div key={q.id} className="rounded-2xl border border-hairline bg-surface p-5">
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-xs text-accent">
              {q.subjectName} · {q.topic}
            </p>
            <span className="font-mono text-xs text-body">
              {i + 1} of {questions.length}
            </span>
          </div>
          <p className="mt-2 font-medium text-ink">{q.stem}</p>

          {q.type === "mcq" && q.options ? (
            <div className="mt-3 space-y-2">
              {q.options.map((opt, oi) => {
                const selected = answers[q.id] === String(oi);
                return (
                  <label
                    key={oi}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-2.5 text-sm transition-colors ${
                      selected
                        ? "border-accent bg-night text-ink"
                        : "border-hairline bg-night text-body hover:border-accent/60"
                    }`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      checked={selected}
                      onChange={() => setAnswers((a) => ({ ...a, [q.id]: String(oi) }))}
                      className="accent-accent"
                    />
                    {opt}
                  </label>
                );
              })}
            </div>
          ) : (
            <input
              type="text"
              value={answers[q.id] ?? ""}
              onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
              placeholder="Your answer"
              className="mt-3 w-full rounded-xl border border-hairline bg-night px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
            />
          )}
        </div>
      ))}

      {error && <p className="text-sm text-coral">{error}</p>}

      <button
        type="button"
        onClick={() => void submit()}
        disabled={submitting || answeredCount === 0}
        className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-bold text-night transition-transform hover:-translate-y-0.5 disabled:opacity-50"
      >
        {submitting ? "Marking…" : "Mark my answers"}
      </button>
    </div>
  );
}
