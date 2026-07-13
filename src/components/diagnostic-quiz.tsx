"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { PublicQuestion } from "@/lib/diagnostic-questions";
import { type ForecastTier } from "@/components/heat";
import { QuizCalculator } from "@/components/quiz-calculator";
import { guguSay } from "@/lib/gugu-bus";

// Gugu's floating-bubble reactions to the quiz. Compliant: encouragement about
// effort and next steps, never a grade promise. On finish Gugu stays NEUTRAL
// (the score is email-gated); the performance-based line fires later, on the
// results page after the student reveals it (see GuguResultCheer).
const GUGU_START = "Shh… focus mode, you've got this.";
const GUGU_QUIT =
  "Don't quit, I believe in you! 💪 Come back any time and we'll close the gap together.";
const GUGU_FINISH = "All done! 🎉 Pop your email in to see how you did.";

interface SubmitResult {
  attemptId: string;
  score: number;
  totalMarks: number;
  band: "danger" | "warning" | "pass";
  gradeEstimate: string;
  topicTier: ForecastTier;
}

// The exam clock: generous ceiling for a quick check, nobody should lose to
// the timer, but it keeps the "sit it like the real thing" pressure honest.
const QUIZ_SECONDS = 7 * 60;

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
  const [phase, setPhase] = useState<"intro" | "quiz">("intro");
  const [step, setStep] = useState(0); // question index; questions.length = band; +1 = gate
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isParent, setIsParent] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(QUIZ_SECONDS);
  const [timeExpired, setTimeExpired] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  // Latest answers for the timer's auto-submit (interval closures go stale).
  const answersRef = useRef(answers);
  answersRef.current = answers;
  const submittedRef = useRef(false);
  // Gugu-bubble reactions: did they start, and did they finish (vs. bail).
  const startedRef = useRef(false);
  const completedRef = useRef(false);

  // On each question, move focus to the heading (WITHOUT scrolling — a scrolling
  // focus buried the progress bar and timer under the sticky header) and bring
  // the top of the card (progress bar) into view just below the header.
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
    if (phase === "quiz" && !result) {
      topRef.current?.scrollIntoView({ block: "start" });
    }
  }, [step, phase, result]);

  // The moment the check is marked, Gugu nudges toward the email gate, NEUTRAL,
  // so the score isn't spoiled before the student unlocks it. Also scroll to the
  // top so the gate opens from its heading (not scrolled down from the last
  // question, which was clipping the lock icon under the header).
  useEffect(() => {
    if (!result) return;
    completedRef.current = true;
    window.scrollTo({ top: 0 });
    guguSay(GUGU_FINISH, { hold: false });
  }, [result]);

  // If they navigate away mid-check (started but never finished), Gugu urges
  // them not to give up, then its usual messages resume.
  useEffect(() => {
    return () => {
      if (startedRef.current && !completedRef.current) {
        guguSay(GUGU_QUIT, { hold: false });
      }
    };
  }, []);

  // The exam clock: runs from Start until submission; at zero, whatever has
  // been answered is marked (unanswered questions score 0).
  useEffect(() => {
    if (phase !== "quiz" || result) return;
    const t = setInterval(() => {
      setSecondsLeft((s) => {
        const nextS = Math.max(0, s - 1);
        if (nextS === 0) void submitNow(answersRef.current, true);
        return nextS;
      });
    }, 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, result]);

  const q = questions[step];
  const progressPct = Math.round((Math.min(step, questions.length) / questions.length) * 100);
  const clock = `${Math.floor(secondsLeft / 60)}:${String(secondsLeft % 60).padStart(2, "0")}`;

  function start() {
    beacon("diagnostic_start", undefined, `${level}/${slug}`);
    setSecondsLeft(QUIZ_SECONDS);
    setPhase("quiz");
    startedRef.current = true;
    guguSay(GUGU_START, { hold: true });
  }

  function answer(qid: string, value: string) {
    setAnswers((a) => ({ ...a, [qid]: value }));
  }

  async function submitNow(current: Record<string, string>, expired: boolean) {
    if (submittedRef.current) return;
    submittedRef.current = true;
    if (expired) setTimeExpired(true);
    setBusy(true);
    setError("");
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
          answers: current,
          utm: params.toString() || undefined,
          ref: ref ? decodeURIComponent(ref) : undefined,
        }),
      });
      const body = (await res.json()) as SubmitResult & { error?: string };
      if (!res.ok) throw new Error(body.error ?? "Something went wrong, try again.");
      setResult(body);
      setStep(questions.length);
    } catch (e) {
      submittedRef.current = false; // allow a retry after a network hiccup
      setError(e instanceof Error ? e.message : "Something went wrong, try again.");
    } finally {
      setBusy(false);
    }
  }

  async function next() {
    if (!q) return;
    if (!(answers[q.id] ?? "").trim()) {
      setError("Give it a shot, even a guess tells you something.");
      return;
    }
    setError("");
    beacon("question_answered", result?.attemptId, `${slug} q${step + 1}`);
    if (step < questions.length - 1) {
      setStep(step + 1);
      return;
    }
    await submitNow(answers, false);
  }

  async function unlock(e: FormEvent) {
    e.preventDefault();
    if (!result) return;
    // The full diagnosis is emailed, and the result unlocks here, so a real,
    // valid address matters. Check before spending the request.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email, your full diagnosis is sent there, so double-check it.");
      return;
    }
    if (!consent) {
      setError("Please tick the consent box so we can email your results.");
      return;
    }
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
        throw new Error(body.error ?? "Something went wrong, try again.");
      }
      router.push(body.resultsUrl);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong, try again.");
      setBusy(false);
    }
  }

  // ---- Step: email gate, the result stays LOCKED until a valid email is in ----
  if (result && step >= questions.length) {
    return (
      <div className="mx-auto max-w-md">
        <form
          onSubmit={unlock}
          className="rounded-2xl border border-accent/40 bg-surface p-6"
        >
          <p className="text-center font-mono text-xs text-body">
            {subjectName} · {topicLabel}
          </p>
          <div className="mt-4 flex justify-center" aria-hidden="true">
            <span className="grid h-16 w-16 place-items-center rounded-full border-2 border-accent/50 bg-night text-3xl">
              🔒
            </span>
          </div>
          <h2
            ref={headingRef}
            tabIndex={-1}
            className="mt-4 text-center font-display text-2xl font-black text-ink outline-none"
          >
            Enter email to reveal result
          </h2>
          <label htmlFor="diag-email" className="sr-only">
            Email for your results
          </label>
          <input
            id="diag-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-4 w-full rounded-lg border border-hairline bg-night px-4 py-3 text-base text-ink outline-none focus:border-accent"
          />
          <p className="mt-3 text-sm text-body">
            Your full worked solutions and diagnosis will be sent to your email.
          </p>
          {timeExpired && (
            <p className="mt-3 rounded-lg bg-coral/15 px-3 py-2 text-xs text-ink">
              Time&apos;s up, we marked what you&apos;d answered. Unanswered
              questions scored 0.
            </p>
          )}
          <label className="mt-4 flex items-start gap-2 text-xs text-body">
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
            {busy ? "Revealing…" : "Reveal my result"}
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

  // ---- Step: start screen (the clock begins on click) ----
  if (phase === "intro") {
    return (
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-hairline bg-surface p-6 text-center">
          <h2
            ref={headingRef}
            tabIndex={-1}
            className="font-display text-2xl font-bold text-ink outline-none"
          >
            Ready when you are
          </h2>
          <p className="mt-2 text-sm text-body">
            {questions.length} quick questions mixed across {subjectName}&apos;s
            VERY HIGH and HIGH topics for 2026. Marked instantly, with an
            indicative grade band.
          </p>
          <p className="mt-4 font-mono text-4xl font-bold text-ink">
            {Math.floor(QUIZ_SECONDS / 60)}:{String(QUIZ_SECONDS % 60).padStart(2, "0")}
          </p>
          <p className="mt-1 text-xs text-body">
            on the clock, most finish well inside it
          </p>
          <button
            type="button"
            onClick={start}
            className="mt-6 w-full rounded-lg bg-accent px-5 py-3 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
          >
            Start the check
          </button>
          <p className="mt-3 text-xs text-body/80">
            When the clock hits zero, whatever you&apos;ve answered gets marked.
          </p>
        </div>
      </div>
    );
  }

  // ---- Step: one question per screen ----
  return (
    <div className="mx-auto max-w-md">
      <div
        ref={topRef}
        role="progressbar"
        aria-valuenow={progressPct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Quiz progress"
        className="h-2 scroll-mt-24 overflow-hidden rounded-full bg-surface"
      >
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-300"
          style={{ width: `${Math.max(6, progressPct)}%` }}
        />
      </div>
      <p className="mt-2 flex items-center justify-between font-mono text-xs text-body">
        <span>
          Question {step + 1} of {questions.length} · {q.marks} mark
          {q.marks === 1 ? "" : "s"}
        </span>
        <span
          role="timer"
          aria-label={`Time left: ${clock}`}
          className={`rounded-full border px-2.5 py-0.5 font-medium ${
            secondsLeft <= 60
              ? "border-coral/60 text-coral"
              : "border-hairline text-body"
          }`}
        >
          {clock}
        </span>
      </p>
      <p className="mt-3 font-mono text-xs font-medium text-accent">{q.topic}</p>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="mt-1 font-display text-xl font-bold leading-snug text-ink outline-none"
      >
        {q.stem}
      </h2>

      {/* Small yellow Calculator button, right-aligned under the question so it
          never overlaps the timer. */}
      <div className="mt-3 flex justify-end">
        <QuizCalculator />
      </div>

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
            // Full keyboard (not the numeric pad): answers can be words, units
            // or full phrases, not only numbers.
            inputMode="text"
            value={answers[q.id] ?? ""}
            onChange={(e) => answer(q.id, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") void next();
            }}
            placeholder="Type your answer"
            // text-base (16px) stops iOS Safari auto-zooming on focus.
            className="w-full rounded-xl border border-hairline bg-surface px-4 py-3 text-base text-ink outline-none focus:border-accent"
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
