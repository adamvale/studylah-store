"use client";

import { useState } from "react";
import Link from "next/link";
import type { PublicDailyQuestion } from "@/lib/server/study";
import { emitGame, emitFx } from "@/lib/game/fx";
import { GuruTeach } from "./guru-teach";
import { NamedIcon, IconFlame, type IconName } from "@/components/icons";
import { TeachText } from "@/components/teach-text";

type Confidence = "sure" | "unsure" | "guess";

// Start-screen lines, rotated by day. Original, honest, no grade promises.
const QUOTES = [
  "Ten focused minutes today beat three panicked hours in October.",
  "The paper rewards the topics you practised, not the hours you worried.",
  "Small daily reps are how strangers become easy marks.",
  "You do not rise to the exam, you fall to your practice. Build the floor.",
  "Every question you fix today is a mark you keep in November.",
  "Consistency is quiet. So is confidence on exam day.",
  "One page a day turns into a syllabus by September.",
];

const CONFIDENCE_UI: { key: Confidence; label: string }[] = [
  { key: "sure", label: "Sure" },
  { key: "unsure", label: "Think so" },
  { key: "guess", label: "Guessing" },
];

interface Result {
  id: string;
  subjectName: string;
  topic: string;
  correct: boolean;
  givenDisplay: string;
  correctAnswer: string;
  workedSolution: string;
  confidence: Confidence | null;
  resurrected: boolean;
  review?: boolean;
  clearedNow: boolean;
}

interface GameResult {
  xpGained: number;
  totalXp: number;
  level: number;
  title: string;
  leveledUp: boolean;
  progressPct: number;
  newBadges: { id: string; name: string; emoji: string }[];
}

interface SubmitResponse {
  results: Result[];
  score: number;
  total: number;
  streak: number;
  seededMistakes: number;
  clearedMistakes: number;
  shields?: number;
  shieldEarned?: boolean;
  game: GameResult | null;
}

// Where to send the student after marking, the session chains instead of
// dead-ending. Computed server-side on the Today page.
export interface NextUpItem {
  label: string;
  detail: string;
  href: string;
}

export function DailyQuiz({
  questions,
  streak,
  doneToday,
  todayScore,
  todayTotal,
  nextUp = [],
}: {
  questions: PublicDailyQuestion[];
  streak: number;
  doneToday: boolean;
  todayScore: number | null;
  todayTotal: number | null;
  nextUp?: NextUpItem[];
}) {
  const [open, setOpen] = useState(!doneToday);
  // Wizard: "start" screen (the day's quote), then one question per screen.
  const [stage, setStage] = useState<"start" | number>("start");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [confidence, setConfidence] = useState<Record<string, Confidence>>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const answeredIds = Object.entries(answers)
    .filter(([, v]) => v !== "")
    .map(([k]) => k);
  const answeredCount = answeredIds.length;
  // The calibration tap is part of the answer: every answered question needs
  // a confidence pick before marking.
  const missingConfidence = answeredIds.filter((id) => !confidence[id]).length;

  async function submit() {
    setSubmitting(true);
    setError(null);
    try {
      // Up to 3 attempts, 4s apart: a submit that lands during the ~1 minute
      // Railway deploy swap succeeds on retry instead of losing the quiz.
      let res: Response | null = null;
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          res = await fetch("/api/account/daily-quiz/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ answers, confidence }),
          });
          if (res.ok || (res.status < 500 && res.status !== 0)) break;
        } catch {
          res = null; // network refused: server mid-restart, wait and retry
        }
        if (attempt < 2) await new Promise((r) => setTimeout(r, 4000));
      }
      if (!res || !res.ok) throw new Error();
      const data = (await res.json()) as SubmitResponse;
      setResult(data);
      // The juice: fly-up + HUD bar + ceremonies + sounds (native shell).
      emitFx({ type: data.score === data.total ? "correct" : data.score > 0 ? "blip" : "wrong" });
      emitGame(data.game ?? null, { x: window.innerWidth / 2, y: window.innerHeight * 0.35 });
    } catch {
      setError("Couldn't mark that, check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  // --- Results view ---
  if (result) {
    return (
      <div className="space-y-5">
        <div
          className={`rounded-2xl border bg-surface p-6 text-center ${
            result.score === result.total ? "border-guarantee/50" : "border-hairline"
          }`}
        >
          <p className="font-mono text-xs uppercase tracking-wide text-body">
            Today&apos;s three
          </p>
          <p className="mt-1 font-display text-5xl font-black text-ink">
            
            {result.score}/{result.total}
          </p>
          {result.score === result.total && (
            <p className="fx-hero mt-2 font-pixel text-xs tracking-widest text-guarantee">
              PERFECT!
            </p>
          )}
          <p className="mt-2 text-sm text-body">
            <IconFlame size={14} className="inline text-accent" /> {result.streak}-day streak
            {result.seededMistakes > 0 && (
              <>
                {" · "}
                {result.seededMistakes} new monster{result.seededMistakes === 1 ? "" : "s"} in your{" "}
                <Link href="/account/mistakes" className="font-medium text-accent underline">
                  bestiary
                </Link>
              </>
            )}
            {result.clearedMistakes > 0 && (
              <>
                {" · "}
                <span className="font-medium text-guarantee">
                  {result.clearedMistakes} monster{result.clearedMistakes === 1 ? "" : "s"} banished
                </span>
              </>
            )}
          </p>
          {result.shieldEarned && (
            <p className="mt-3 text-sm font-medium text-trust">
              Streak shield earned, one missed day is now covered, automatically.
            </p>
          )}
          {result.game && result.game.xpGained > 0 && (
            <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 font-mono text-sm font-bold text-accent">
              +{result.game.xpGained} XP
            </p>
          )}
        </div>

        {result.game?.leveledUp && (
          <div className="rounded-2xl border border-accent bg-surface p-5 text-center">
            <p className="font-display text-2xl font-black text-accent">
              Level {result.game.level}
            </p>
            <p className="mt-1 font-display text-lg font-bold text-ink">
              {result.game.title}
            </p>
            <p className="mt-1 text-xs text-body">
              Your companion grew a little. Check the header.
            </p>
          </div>
        )}

        {result.game && result.game.newBadges.length > 0 && (
          <div className="rounded-2xl border border-hairline bg-surface p-5">
            <p className="font-display font-bold text-ink">Badge{result.game.newBadges.length === 1 ? "" : "s"} unlocked</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {result.game.newBadges.map((b) => (
                <span
                  key={b.id}
                  className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-night px-3.5 py-1.5 text-sm text-ink"
                >
                  <NamedIcon name={b.emoji as IconName} size={15} className="text-accent" /> {b.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {result.results.map((r) => (
          <div
            key={r.id}
            className={`rounded-2xl border bg-surface p-5 ${
              r.correct ? "border-guarantee/40" : "border-coral/40"
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-mono text-xs text-accent">
                {r.subjectName} · {r.topic}
              </p>
              <span className="flex items-center gap-2">
                {r.resurrected && (
                  <span className="rounded-full bg-violet/15 px-2 py-0.5 text-xs font-medium text-violet">
                    monster attack
                  </span>
                )}
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                    r.correct ? "bg-guarantee/15 text-guarantee" : "bg-coral/15 text-coral"
                  }`}
                >
                  {r.correct ? "Correct" : "Review"}
                </span>
              </span>
              <GuruTeach
                subjectName={r.subjectName}
                topic={r.topic}
                stem={questions.find((q) => q.id === r.id)?.stem ?? ""}
                correctAnswer={r.correctAnswer}
                given={r.givenDisplay}
                correct={r.correct}
                wasSure={r.confidence === "sure"}
                workedSolution={r.workedSolution}
                options={questions.find((q) => q.id === r.id)?.options}
              />
            </div>
            {r.clearedNow && (
              <p className="mt-2 text-sm font-medium text-guarantee">
                Banished, beaten twice. It doesn&apos;t come back.
              </p>
            )}
            {r.resurrected && r.correct && !r.clearedNow && (
              <p className="mt-2 text-sm text-body">
                Wounded! One more correct hit and it&apos;s banished for good.
              </p>
            )}
            {!r.correct && (
              <p className="mt-2 text-sm text-body">
                You answered{" "}
                <span className="text-ink">{r.givenDisplay || ", "}</span>. Correct
                answer: <span className="font-medium text-ink">{r.correctAnswer}</span>.
                {r.confidence === "sure" && (
                  <span className="text-coral">
                    {" "}
                    You were sure about this one, treat it as a concept gap, not a slip.
                  </span>
                )}
              </p>
            )}
            <TeachText text={r.workedSolution} className="mt-2 text-sm text-body" />
          </div>
        ))}

        {nextUp.length > 0 && (
          <div className="rounded-2xl border border-accent/40 bg-surface p-5">
            <p className="font-display font-bold text-ink">
              Keep the session going
            </p>
            <ul className="mt-3 space-y-2">
              {nextUp.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-hairline bg-night px-4 py-3 transition-colors hover:border-accent"
                  >
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-ink">{item.label}</span>
                      <span className="text-xs text-body">{item.detail}</span>
                    </span>
                    <span aria-hidden="true" className="text-accent">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="text-center text-xs text-body">
          Come back tomorrow for a fresh three, the streak grows every day you
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
          Extra practice won&apos;t change today&apos;s streak, it&apos;s
          already counted.
        </p>
      </div>
    );
  }

  // --- Active quiz, one screen at a time ---
  const quote = QUOTES[new Date().getDate() % QUOTES.length];
  const mcqCount = questions.filter((q) => q.type === "mcq").length;
  const writtenCount = questions.length - mcqCount;

  if (stage === "start") {
    return (
      <div className="glass-deep p-6 text-center sm:p-8">
        <p className="flex items-center justify-center gap-2 font-mono text-xs text-body">
          <IconFlame size={13} className="text-accent" /> {streak}-day streak
        </p>
        <p className="mx-auto mt-4 max-w-md font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
          &ldquo;{quote}&rdquo;
        </p>
        <p className="mt-4 text-sm text-body">
          Today&apos;s three: {mcqCount} multiple choice
          {writtenCount > 0 ? ` and ${writtenCount} written` : ""}, marked
          instantly. About two minutes.
        </p>
        <button
          type="button"
          onClick={() => setStage(0)}
          className="sl-btn mt-5 px-8"
        >
          Start
        </button>
      </div>
    );
  }

  const qi = Math.min(stage, questions.length - 1);
  const q = questions[qi];
  const qAnswered = (answers[q.id] ?? "") !== "" && Boolean(confidence[q.id]);
  const isLast = qi === questions.length - 1;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-body">
          {doneToday ? "Bonus practice" : "3 quick questions · marked instantly"}
        </p>
        <p className="flex items-center gap-1 font-mono text-xs text-body">
          <IconFlame size={13} className="text-accent" /> {streak}-day streak
        </p>
      </div>

      {/* progress segments */}
      <div className="flex gap-1.5" aria-hidden>
        {questions.map((qq, i) => (
          <span
            key={qq.id}
            className={`h-1.5 flex-1 rounded-full ${
              i < qi
                ? "bg-accent"
                : i === qi
                  ? "bg-accent/70"
                  : "bg-white/10"
            }`}
          />
        ))}
      </div>

      <div
        key={q.id}
        className={`rounded-2xl border bg-surface p-5 ${
          q.resurrected ? "border-violet/50" : "border-hairline"
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-mono text-xs text-accent">
            {q.subjectName} · {q.topic}
          </p>
          <span className="flex items-center gap-2">
            {q.resurrected && (
              <span className="rounded-full bg-violet/15 px-2 py-0.5 text-xs font-medium text-violet">
                a monster returns
              </span>
            )}
            {q.review && (
              <span className="rounded-full bg-teal/15 px-2 py-0.5 text-xs font-medium text-teal">
                memory check
              </span>
            )}
            <span className="font-mono text-xs text-body">
              {qi + 1} of {questions.length}
            </span>
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
          <>
            <p className="mt-2 text-xs text-body">
              Written answer, type it the way you would on the paper.
            </p>
            <input
              type="text"
              value={answers[q.id] ?? ""}
              onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
              placeholder="Your answer"
              className="mt-2 w-full rounded-xl border border-hairline bg-night px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
            />
          </>
        )}

        {/* Calibration tap, how sure are you? */}
        {(answers[q.id] ?? "") !== "" && (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-xs text-body">How sure?</span>
            {CONFIDENCE_UI.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => setConfidence((c) => ({ ...c, [q.id]: key }))}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                  confidence[q.id] === key
                    ? "border-accent text-accent"
                    : "border-hairline text-body hover:text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      {error && <p className="text-sm text-coral">{error}</p>}

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setStage(qi === 0 ? "start" : qi - 1)}
          className="chip hover:border-accent/60"
        >
          Back
        </button>
        {isLast ? (
          <button
            type="button"
            onClick={() => void submit()}
            disabled={submitting || answeredCount === 0 || missingConfidence > 0}
            className="sl-btn flex-1 disabled:opacity-50"
          >
            {submitting
              ? "Marking…"
              : missingConfidence > 0
                ? `Tap "How sure?" first`
                : "Mark my answers"}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setStage(qi + 1)}
            disabled={!qAnswered}
            className="sl-btn flex-1 disabled:opacity-50"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
