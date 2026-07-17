"use client";

import { useCallback, useEffect, useState } from "react";
import { emitGame, emitFx, type FxGame } from "@/lib/game/fx";
import { NamedIcon, type IconName } from "@/components/icons";

// ── The Academy: Subject Gurus ───────────────────────────────────────────────
// One Guru per subject the student is ENROLLED in. A Guru teaches a short,
// level-appropriate lesson from the original in-house teaching library, then
// sets one check-question from that subject's own bank. Strictly gated by
// ownership: a student is only ever taught and tested on the exact subjects
// and level/tier they own, O-Level Pure, O-Level Science and N(A)-Level each
// stay at their own depth. Effort XP, daily-capped, answer keys stay server-
// side until after the check is graded.

interface GuruRow {
  level: string;
  slug: string;
  name: string;
  family: string;
  canCheck: boolean;
}

interface LessonBeat {
  tag: string;
  title: string;
  body: string;
}

interface CheckQuestion {
  id: string;
  topic: string;
  stem: string;
  options?: string[];
}

type Screen =
  | { kind: "menu" }
  | {
      kind: "lesson";
      subject: { level: string; slug: string; name: string };
      beats: LessonBeat[];
      idx: number;
      question: CheckQuestion | null;
    }
  | {
      kind: "check";
      subject: { level: string; slug: string; name: string };
      question: CheckQuestion;
    }
  | {
      kind: "result";
      subject: { level: string; slug: string; name: string };
      correct: boolean;
      correctAnswer: string;
      workedSolution: string;
    };

const EMOJI: Record<string, string> = {
  chemistry: "flask",
  physics: "bolt",
  biology: "leaf",
  geography: "compass",
  history: "scroll",
  "social-studies": "castle",
  poa: "chart",
  emath: "calculator",
  amath: "pencil",
  fnn: "heart",
};

export function SubjectGuru({ onClose }: { onClose: () => void }) {
  const [screen, setScreen] = useState<Screen>({ kind: "menu" });
  const [gurus, setGurus] = useState<GuruRow[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  useEffect(() => {
    if (!note) return;
    const t = window.setTimeout(() => setNote(null), 3500);
    return () => window.clearTimeout(t);
  }, [note]);

  // Load the student's Gurus once (server decides what they own).
  useEffect(() => {
    let cancelled = false;
    void fetch("/api/account/game/guru", { credentials: "include" })
      .then((r) => r.json())
      .then((d: { gurus?: GuruRow[] }) => {
        if (!cancelled) setGurus(d.gurus ?? []);
      })
      .catch(() => {
        if (!cancelled) setGurus([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const startLesson = useCallback(async (g: { level: string; slug: string }) => {
    setBusy(true);
    try {
      const res = await fetch("/api/account/game/guru", {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ level: g.level, slug: g.slug }),
      });
      const data = (await res.json()) as {
        error?: string;
        subject?: { level: string; slug: string; name: string };
        lesson?: LessonBeat[];
        question?: CheckQuestion | null;
      };
      if (!res.ok || !data.subject || !data.lesson) {
        setNote(data.error ?? "The Guru is meditating, try again in a moment.");
        return;
      }
      emitFx({ type: "blip" });
      setScreen({
        kind: "lesson",
        subject: data.subject,
        beats: data.lesson,
        idx: 0,
        question: data.question ?? null,
      });
    } catch {
      setNote("The Academy's quiet right now. Try again in a bit.");
    } finally {
      setBusy(false);
    }
  }, []);

  const submitCheck = useCallback(
    async (
      subject: { level: string; slug: string; name: string },
      question: CheckQuestion,
      answerIndex: number
    ) => {
      setBusy(true);
      try {
        const res = await fetch("/api/account/game/guru", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            level: subject.level,
            slug: subject.slug,
            questionId: question.id,
            answer: String(answerIndex),
          }),
        });
        const data = (await res.json()) as {
          error?: string;
          correct?: boolean;
          correctAnswer?: string;
          workedSolution?: string;
          game?: FxGame | null;
        };
        if (!res.ok) {
          setNote(data.error ?? "That didn't land, try again.");
          return;
        }
        emitFx({ type: data.correct ? "correct" : "wrong" });
        emitGame(data.game ?? null, { x: window.innerWidth / 2, y: window.innerHeight * 0.3 });
        setScreen({
          kind: "result",
          subject,
          correct: Boolean(data.correct),
          correctAnswer: data.correctAnswer ?? "",
          workedSolution: data.workedSolution ?? "",
        });
      } catch {
        setNote("The Academy's quiet right now. Try again in a bit.");
      } finally {
        setBusy(false);
      }
    },
    []
  );

  const menuList = gurus ?? [];

  return (
    <div className="absolute inset-0 z-[60] flex items-end justify-center bg-black/60 p-4 pb-[max(env(safe-area-inset-bottom),16px)] sm:items-center">
      <div className="max-h-[85vh] w-full max-w-md overflow-y-auto rounded-2xl border border-accent/40 bg-surface p-5 shadow-2xl">
        <p className="font-display text-lg font-bold text-ink">The Academy</p>
        {note && <p className="mt-2 rounded-lg bg-night/70 px-3 py-1.5 text-xs text-accent">{note}</p>}

        {screen.kind === "menu" && (
          <div className="mt-3 space-y-2">
            <p className="text-xs text-body">
              Every subject you&apos;re enrolled in has a Guru here. Sit with one to learn a
              little, then face a check-question to make it stick.
            </p>
            {gurus === null && <p className="text-sm text-body">Waking the Gurus…</p>}
            {gurus !== null && menuList.length === 0 && (
              <p className="text-sm text-body">
                No Gurus yet, enrol in a subject and its Guru will appear here.
              </p>
            )}
            {menuList.map((g) => (
              <button
                key={`${g.level}/${g.slug}`}
                type="button"
                disabled={busy}
                onClick={() => void startLesson(g)}
                className="block w-full rounded-xl border border-hairline bg-night px-4 py-3 text-left text-sm font-bold text-ink hover:border-accent disabled:opacity-50"
              >
                <span className="flex items-center justify-between">
                  <span>
                    <NamedIcon name={(EMOJI[g.family] ?? "book") as IconName} size={14} className="inline text-accent" /> {g.name}
                  </span>
                  <span className="font-pixel text-[8px] text-body">
                    {g.level === "o-level" ? "O-LEVEL" : "N(A)-LEVEL"}
                  </span>
                </span>
                <span className="mt-0.5 block text-xs font-normal text-body">
                  Learn a concept, then a check-question
                </span>
              </button>
            ))}
            <p className="text-[10px] text-body">
              You only ever study the subjects you own, at your own level, XP rewards the
              effort of showing up to learn, never a grade.
            </p>
          </div>
        )}

        {screen.kind === "lesson" && (
          <div className="mt-3 space-y-3">
            <p className="flex items-baseline justify-between">
              <span className="font-pixel text-[9px] text-accent">{screen.subject.name}</span>
              <span className="font-pixel text-[9px] text-body">
                LESSON {screen.idx + 1}/{screen.beats.length}
              </span>
            </p>
            <div className="rounded-xl border border-hairline bg-night p-4">
              <p className="font-pixel text-[8px] tracking-widest text-accent">
                {screen.beats[screen.idx].tag}
              </p>
              <p className="mt-2 font-bold text-ink">{screen.beats[screen.idx].title}</p>
              <p className="mt-1 whitespace-pre-line text-sm text-body">
                {screen.beats[screen.idx].body}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                emitFx({ type: "blip" });
                if (screen.idx + 1 < screen.beats.length) {
                  setScreen({ ...screen, idx: screen.idx + 1 });
                } else if (screen.question) {
                  setScreen({ kind: "check", subject: screen.subject, question: screen.question });
                } else {
                  setScreen({
                    kind: "result",
                    subject: screen.subject,
                    correct: true,
                    correctAnswer: "",
                    workedSolution: "Lesson complete. Come back any time, the Guru always has more.",
                  });
                }
              }}
              className="w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
            >
              {screen.idx + 1 < screen.beats.length
                ? "Next →"
                : screen.question
                ? "I'm ready, check me"
                : "Done"}
            </button>
          </div>
        )}

        {screen.kind === "check" && (
          <div className="mt-3">
            <p className="font-pixel text-[9px] text-accent">{screen.subject.name} · CHECK</p>
            <p className="mt-1 font-mono text-xs text-accent">{screen.question.topic}</p>
            <p className="mt-1 font-medium text-ink">{screen.question.stem}</p>
            <div className="mt-3 space-y-2">
              {(screen.question.options ?? []).map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  disabled={busy}
                  onClick={() => void submitCheck(screen.subject, screen.question, i)}
                  className="block w-full rounded-xl border border-hairline bg-night px-4 py-2.5 text-left text-sm text-ink hover:border-accent disabled:opacity-50"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {screen.kind === "result" && (
          <div className="mt-3 space-y-3">
            <div
              className={`rounded-xl border p-4 text-center ${
                screen.correct ? "border-guarantee/40" : "border-coral/40"
              }`}
            >
              <p className="font-display text-lg font-bold text-ink">
                {screen.correctAnswer === ""
                  ? "Lesson complete"
                  : screen.correct
                  ? "Spot on!"
                  : "Not quite, now you'll remember it"}
              </p>
              {screen.correctAnswer !== "" && !screen.correct && (
                <p className="mt-1 text-sm text-body">Answer: {screen.correctAnswer}</p>
              )}
              {screen.workedSolution && (
                <p className="mt-2 whitespace-pre-line text-left text-xs text-body">
                  {screen.workedSolution}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => setScreen({ kind: "menu" })}
              className="w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
            >
              Study another
            </button>
          </div>
        )}

        {screen.kind !== "check" && (
          <button
            type="button"
            onClick={onClose}
            className="mt-3 w-full rounded-lg border border-hairline px-4 py-2.5 text-sm text-body hover:text-ink"
          >
            Leave the Academy
          </button>
        )}
      </div>
    </div>
  );
}
