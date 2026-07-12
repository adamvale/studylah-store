"use client";

import { useCallback, useEffect, useState } from "react";
import { emitGame, emitFx, type FxGame } from "@/lib/game/fx";
import type { WorldSubject } from "@/lib/game/world2";

// ── The Duel Hall ──────────────────────────────────────────────────────────
// Asynchronous friend-vs-friend duels: a sealed, server-dealt set of 5
// questions behind a share code. No matchmaking, no chat, no leaderboards —
// codes travel outside the app between friends. Both sides earn the same
// effort XP for completing; the laurel on the result screen is cosmetic
// and is the entire prize.

interface DuelQuestion {
  id: string;
  topic: string;
  stem: string;
  options?: string[];
}

interface DuelResultRow {
  id: string;
  correct: boolean;
  correctAnswer: string;
  workedSolution: string;
}

interface DuelListRow {
  code: string;
  level: string;
  slug: string;
  role: "creator" | "challenger";
  myScore: number | null;
  rivalScore: number | null;
  total: number;
  complete: boolean;
}

type Screen =
  | { kind: "menu" }
  | { kind: "pickSubject" }
  | { kind: "enterCode" }
  | { kind: "answering"; code: string; questions: DuelQuestion[]; idx: number; answers: Record<string, string> }
  | {
      kind: "result";
      code: string;
      score: number;
      rivalScore: number | null;
      total: number;
      results: DuelResultRow[];
      showSolutions: boolean;
    }
  | { kind: "list"; duels: DuelListRow[] };

export function DuelHall({
  subjects,
  onClose,
}: {
  subjects: WorldSubject[];
  onClose: () => void;
}) {
  const [screen, setScreen] = useState<Screen>({ kind: "menu" });
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const [codeInput, setCodeInput] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!note) return;
    const t = window.setTimeout(() => setNote(null), 3500);
    return () => window.clearTimeout(t);
  }, [note]);

  const createDuel = useCallback(async (s: WorldSubject) => {
    setBusy(true);
    try {
      const res = await fetch("/api/account/game/duel", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ level: s.level, slug: s.slug }),
      });
      const data = (await res.json()) as { error?: string; code?: string; questions?: DuelQuestion[] };
      if (!res.ok || !data.code || !data.questions) {
        setNote(data.error ?? "The hall is busy — try again in a moment.");
        return;
      }
      setScreen({ kind: "answering", code: data.code, questions: data.questions, idx: 0, answers: {} });
    } catch {
      setNote("The archive's dozing. Your progress is safe; try again in a bit.");
    } finally {
      setBusy(false);
    }
  }, []);

  const fetchByCode = useCallback(async (code: string) => {
    setBusy(true);
    try {
      const res = await fetch("/api/account/game/duel/take", {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = (await res.json()) as {
        error?: string;
        code?: string;
        alreadyAnswered?: boolean;
        myScore?: number | null;
        rivalScore?: number | null;
        total?: number;
        questions?: DuelQuestion[];
      };
      if (!res.ok || !data.code) {
        setNote(data.error ?? "No duel answers to that code.");
        return;
      }
      if (data.alreadyAnswered) {
        setScreen({
          kind: "result",
          code: data.code,
          score: data.myScore ?? 0,
          rivalScore: data.rivalScore ?? null,
          total: data.total ?? 5,
          results: [],
          showSolutions: false,
        });
        return;
      }
      setScreen({ kind: "answering", code: data.code, questions: data.questions ?? [], idx: 0, answers: {} });
    } catch {
      setNote("The archive's dozing. Your progress is safe; try again in a bit.");
    } finally {
      setBusy(false);
    }
  }, []);

  const submit = useCallback(
    async (code: string, answers: Record<string, string>) => {
      setBusy(true);
      try {
        const res = await fetch("/api/account/game/duel/take", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code, answers }),
        });
        const data = (await res.json()) as {
          error?: string;
          score?: number;
          rivalScore?: number | null;
          total?: number;
          results?: DuelResultRow[];
          game?: FxGame | null;
        };
        if (!res.ok) {
          setNote(data.error ?? "That didn't land — try again.");
          return;
        }
        emitFx({ type: "correct" });
        emitGame(data.game ?? null, { x: window.innerWidth / 2, y: window.innerHeight * 0.3 });
        setScreen({
          kind: "result",
          code,
          score: data.score ?? 0,
          rivalScore: data.rivalScore ?? null,
          total: data.total ?? 5,
          results: data.results ?? [],
          showSolutions: false,
        });
      } catch {
        setNote("The archive's dozing. Your progress is safe; try again in a bit.");
      } finally {
        setBusy(false);
      }
    },
    []
  );

  const loadList = useCallback(async () => {
    setBusy(true);
    try {
      const res = await fetch("/api/account/game/duel", { credentials: "include" });
      const data = (await res.json()) as { duels?: DuelListRow[] };
      setScreen({ kind: "list", duels: data.duels ?? [] });
    } finally {
      setBusy(false);
    }
  }, []);

  const copyCode = useCallback(async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setNote(`Code: ${code} — jot it down!`);
    }
  }, []);

  const subjectName = (level: string, slug: string) =>
    subjects.find((s) => s.level === level && s.slug === slug)?.name ?? slug;

  return (
    <div className="absolute inset-0 z-[60] flex items-end justify-center bg-black/60 p-4 pb-[max(env(safe-area-inset-bottom),16px)] sm:items-center">
      <div className="max-h-[85vh] w-full max-w-md overflow-y-auto rounded-2xl border border-accent/40 bg-surface p-5 shadow-2xl">
        <p className="font-display text-lg font-bold text-ink">⚔️ The Duel Hall</p>
        {note && <p className="mt-2 rounded-lg bg-night/70 px-3 py-1.5 text-xs text-accent">{note}</p>}

        {screen.kind === "menu" && (
          <div className="mt-3 space-y-2">
            <p className="text-xs text-body">
              One sealed set of questions, two researchers, no audience. Codes travel by
              you — hand one to a friend, or bring one here.
            </p>
            <button
              type="button"
              disabled={busy}
              onClick={() => setScreen({ kind: "pickSubject" })}
              className="block w-full rounded-xl border border-hairline bg-night px-4 py-3 text-left text-sm font-bold text-ink hover:border-accent"
            >
              🗡 Start a duel <span className="block text-xs font-normal text-body">Answer your side, get a code to share</span>
            </button>
            <button
              type="button"
              disabled={busy}
              onClick={() => setScreen({ kind: "enterCode" })}
              className="block w-full rounded-xl border border-hairline bg-night px-4 py-3 text-left text-sm font-bold text-ink hover:border-accent"
            >
              🎟 Enter a code <span className="block text-xs font-normal text-body">Answer a friend&apos;s challenge</span>
            </button>
            <button
              type="button"
              disabled={busy}
              onClick={() => void loadList()}
              className="block w-full rounded-xl border border-hairline bg-night px-4 py-3 text-left text-sm font-bold text-ink hover:border-accent"
            >
              📜 My duels <span className="block text-xs font-normal text-body">Recent challenges and results</span>
            </button>
            <p className="text-[10px] text-body">
              Both sides earn the same XP for finishing, win or lose. The laurel is for
              bragging rights only — nothing is ranked, nothing is public.
            </p>
          </div>
        )}

        {screen.kind === "pickSubject" && (
          <div className="mt-3 space-y-2">
            <p className="text-xs text-body">Pick the battleground — your friend needs this subject too.</p>
            {subjects.map((s) => (
              <button
                key={`${s.level}/${s.slug}`}
                type="button"
                disabled={busy}
                onClick={() => void createDuel(s)}
                className="block w-full rounded-xl border border-hairline bg-night px-4 py-2.5 text-left text-sm text-ink hover:border-accent disabled:opacity-50"
              >
                {s.emoji} {s.name}
              </button>
            ))}
          </div>
        )}

        {screen.kind === "enterCode" && (
          <div className="mt-3 space-y-3">
            <p className="text-xs text-body">Type the code exactly as your friend gave it.</p>
            <input
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value.toUpperCase())}
              placeholder="ABCD-1234"
              autoCapitalize="characters"
              autoCorrect="off"
              spellCheck={false}
              className="w-full rounded-xl border border-hairline bg-night px-4 py-3 text-center font-pixel text-sm tracking-widest text-accent outline-none focus:border-accent"
              style={{ userSelect: "text", WebkitUserSelect: "text" }}
            />
            <button
              type="button"
              disabled={busy || codeInput.trim().length < 8}
              onClick={() => void fetchByCode(codeInput.trim())}
              className="w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night disabled:opacity-50"
            >
              Find the duel
            </button>
          </div>
        )}

        {screen.kind === "answering" && (
          <div className="mt-3">
            <p className="flex items-baseline justify-between">
              <span className="font-pixel text-[9px] text-body">
                QUESTION {screen.idx + 1}/{screen.questions.length}
              </span>
              <span className="font-pixel text-[9px] text-accent">{screen.code}</span>
            </p>
            <p className="mt-1 font-mono text-xs text-accent">{screen.questions[screen.idx].topic}</p>
            <p className="mt-1 font-medium text-ink">{screen.questions[screen.idx].stem}</p>
            <div className="mt-3 space-y-2">
              {(screen.questions[screen.idx].options ?? []).map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  disabled={busy}
                  onClick={() => {
                    const q = screen.questions[screen.idx];
                    const answers = { ...screen.answers, [q.id]: String(i) };
                    if (screen.idx + 1 < screen.questions.length) {
                      setScreen({ ...screen, idx: screen.idx + 1, answers });
                    } else {
                      void submit(screen.code, answers);
                    }
                  }}
                  className="block w-full rounded-xl border border-hairline bg-night px-4 py-2.5 text-left text-sm text-ink hover:border-accent disabled:opacity-50"
                >
                  {opt}
                </button>
              ))}
            </div>
            <p className="mt-2 text-[10px] text-body">
              Answers seal when you finish — no backsies, same as your friend.
            </p>
          </div>
        )}

        {screen.kind === "result" && (
          <div className="mt-3 space-y-3">
            <div className="rounded-xl border border-hairline bg-night p-4 text-center">
              <p className="font-pixel text-[9px] tracking-widest text-body">DUEL {screen.code}</p>
              <p className="mt-2 font-display text-3xl font-black text-ink">
                {screen.score}/{screen.total}
                <span className="mx-3 text-body">·</span>
                {screen.rivalScore !== null ? `${screen.rivalScore}/${screen.total}` : "—"}
              </p>
              <p className="mt-1 text-xs text-body">
                you
                <span className="mx-6">rival</span>
              </p>
              {screen.rivalScore === null ? (
                <p className="mt-2 text-sm text-body">
                  Your side is sealed. Hand the code over — the duel completes when they answer.
                </p>
              ) : screen.score > screen.rivalScore ? (
                <p className="fx-hero mt-2 font-pixel text-[10px] text-accent">🏵 THE LAUREL IS YOURS</p>
              ) : screen.score < screen.rivalScore ? (
                <p className="mt-2 text-sm text-body">
                  The laurel travels — and the worked solutions below are how it comes back.
                </p>
              ) : (
                <p className="mt-2 text-sm text-body">Dead even. The rematch decides it.</p>
              )}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => void copyCode(screen.code)}
                className="flex-1 rounded-lg border border-hairline px-4 py-2.5 text-sm font-medium text-body hover:text-ink"
              >
                {copied ? "✓ Copied" : "📋 Copy code"}
              </button>
              {screen.results.length > 0 && (
                <button
                  type="button"
                  onClick={() => setScreen({ ...screen, showSolutions: !screen.showSolutions })}
                  className="flex-1 rounded-lg border border-hairline px-4 py-2.5 text-sm font-medium text-body hover:text-ink"
                >
                  {screen.showSolutions ? "Hide solutions" : "Worked solutions"}
                </button>
              )}
            </div>
            {screen.showSolutions &&
              screen.results.map((r, i) => (
                <div
                  key={r.id}
                  className={`rounded-xl border p-3 text-xs ${r.correct ? "border-guarantee/40" : "border-coral/40"}`}
                >
                  <p className="font-bold text-ink">
                    Q{i + 1} — {r.correct ? "✅ yours" : `❌ answer: ${r.correctAnswer}`}
                  </p>
                  <p className="mt-1 text-body">{r.workedSolution}</p>
                </div>
              ))}
            <button
              type="button"
              onClick={() => setScreen({ kind: "menu" })}
              className="w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
            >
              Back to the hall
            </button>
          </div>
        )}

        {screen.kind === "list" && (
          <div className="mt-3 space-y-2">
            {screen.duels.length === 0 && (
              <p className="text-sm text-body">No duels yet. Start one — Rin will hold the code.</p>
            )}
            {screen.duels.map((d) => (
              <button
                key={d.code}
                type="button"
                onClick={() => void fetchByCode(d.code)}
                className="block w-full rounded-xl border border-hairline bg-night px-4 py-2.5 text-left hover:border-accent"
              >
                <p className="flex items-baseline justify-between text-sm text-ink">
                  <span className="font-bold">{subjectName(d.level, d.slug)}</span>
                  <span className="font-pixel text-[9px] text-accent">{d.code}</span>
                </p>
                <p className="text-xs text-body">
                  {d.complete
                    ? `done — you ${d.myScore}/${d.total} · rival ${d.rivalScore}/${d.total}`
                    : d.myScore !== null
                    ? "waiting on your rival…"
                    : "your side still open"}
                </p>
              </button>
            ))}
            <button
              type="button"
              onClick={() => setScreen({ kind: "menu" })}
              className="w-full rounded-lg border border-hairline px-4 py-2.5 text-sm text-body"
            >
              Back
            </button>
          </div>
        )}

        {screen.kind !== "answering" && (
          <button
            type="button"
            onClick={onClose}
            className="mt-3 w-full rounded-lg border border-hairline px-4 py-2.5 text-sm text-body hover:text-ink"
          >
            Leave the hall
          </button>
        )}
      </div>
    </div>
  );
}
