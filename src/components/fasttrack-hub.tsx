"use client";

import { useCallback, useMemo, useState } from "react";
import {
  PLAYBOOKS,
  FAMILY_META,
  LEAKS,
  playsForFamily,
  type Family,
  type Play,
} from "@/lib/fasttrack";
import type { FamilyProgress, PlayState } from "@/lib/server/fasttrack";
import { NamedIcon, type IconName } from "@/components/icons";

// ── FastTrack hub ────────────────────────────────────────────────────────────
// StudyLand's "answer like the examiner" trainer. A tab per subject family,
// each showing its Plays (question archetypes) with mastery state. Opening a
// Play shows the 5 parts (recognise / skeleton / keywords / model / drill),
// and the drill is marked by the same server-side AI marker the drills page
// uses ("Score: X/Y" with per-point ✓/✗). A 5-second Classifier game trains
// the "know what it's testing in the first 5-10 seconds" skill.

type View = { family: Family; playId?: string; classifier?: boolean };

export function FastTrackHub({ progress }: { progress: FamilyProgress[] }) {
  const [states, setStates] = useState<Record<string, PlayState>>(() => {
    const m: Record<string, PlayState> = {};
    for (const fam of progress) Object.assign(m, fam.states);
    return m;
  });
  const [view, setView] = useState<View>({ family: progress[0]?.family ?? "chemistry" });

  const updateState = useCallback((s: PlayState) => {
    setStates((prev) => ({ ...prev, [s.id]: s }));
  }, []);

  const famProgress = useMemo(() => {
    const m: Record<Family, { mastered: number; total: number }> = {
      chemistry: { mastered: 0, total: 0 },
      physics: { mastered: 0, total: 0 },
      biology: { mastered: 0, total: 0 },
    };
    for (const fam of progress) {
      const plays = playsForFamily(fam.family);
      m[fam.family] = {
        total: plays.length,
        mastered: plays.filter((p) => states[p.id]?.mastered).length,
      };
    }
    return m;
  }, [progress, states]);

  const activePlay = view.playId
    ? PLAYBOOKS[view.family].find((p) => p.id === view.playId)
    : undefined;

  return (
    <div className="mx-auto max-w-3xl">
      {/* header */}
      <div className="rounded-2xl border border-accent/40 bg-surface p-6">
        <p className="font-mono text-xs font-bold uppercase tracking-wide text-accent">
          FastTrack
        </p>
        <h1 className="mt-1 font-display text-2xl font-black text-ink">
          Answer the way examiners award marks
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-body">
          Marks are not given for understanding. They are given for answers that
          match the mark scheme. Most marks slip through four gaps, FastTrack
          closes each one, per question type.
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {LEAKS.map((l) => (
            <div key={l.id} className="rounded-xl border border-hairline bg-night p-3">
              <p className="text-sm font-bold text-coral line-through decoration-coral/50">
                {l.label}
              </p>
              <p className="mt-0.5 text-sm text-guarantee">→ {l.fix}</p>
            </div>
          ))}
        </div>
      </div>

      {/* family tabs, always one row of three (compact on phones) */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {progress.map((fam) => {
          const meta = FAMILY_META[fam.family];
          const p = famProgress[fam.family];
          const active = view.family === fam.family && !activePlay && !view.classifier;
          return (
            <button
              key={fam.family}
              type="button"
              onClick={() => setView({ family: fam.family })}
              className={`rounded-xl border px-2 py-2 text-left transition-colors sm:px-4 ${
                active ? "border-accent bg-accent/10" : "border-hairline bg-surface hover:border-accent/50"
              }`}
            >
              <span className="flex items-center gap-1.5 font-display text-xs font-bold text-ink sm:gap-2 sm:text-sm">
                <NamedIcon name={meta.emoji as IconName} size={14} className="inline shrink-0 text-accent" /> {meta.label}
              </span>
              <span className="mt-0.5 block font-mono text-[10px] text-body sm:text-[11px]">
                {p.mastered}/{p.total}
                <span className="hidden sm:inline"> plays mastered</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* body */}
      {activePlay ? (
        <PlayDetail
          play={activePlay}
          state={states[activePlay.id]}
          onBack={() => setView({ family: view.family })}
          onDrillGraded={updateState}
        />
      ) : view.classifier ? (
        <ClassifierGame
          family={view.family}
          onBack={() => setView({ family: view.family })}
        />
      ) : (
        <PlayList
          family={view.family}
          states={states}
          onOpen={(playId) => setView({ family: view.family, playId })}
          onClassifier={() => setView({ family: view.family, classifier: true })}
        />
      )}
    </div>
  );
}

// ── the list of plays for a family ──────────────────────────────────────────
function PlayList({
  family,
  states,
  onOpen,
  onClassifier,
}: {
  family: Family;
  states: Record<string, PlayState>;
  onOpen: (playId: string) => void;
  onClassifier: () => void;
}) {
  const plays = playsForFamily(family);
  return (
    <div className="mt-4 space-y-2">
      <button
        type="button"
        onClick={onClassifier}
        className="flex w-full items-center justify-between rounded-2xl border border-violet/50 bg-violet/10 p-4 text-left transition-transform hover:-translate-y-0.5"
      >
        <span>
          <span className="font-display text-base font-bold text-ink">
            The 5-second read
          </span>
          <span className="mt-0.5 block text-sm text-body">
            Flash-read real stems and name what each is testing, before the clock
            runs. This is the skill that unlocks the rest.
          </span>
        </span>
        <span className="font-pixel text-[9px] text-violet">PLAY →</span>
      </button>

      {plays.map((p) => {
        const st = states[p.id];
        const mastered = st?.mastered;
        return (
          <button
            key={p.id}
            type="button"
            onClick={() => onOpen(p.id)}
            className={`flex w-full items-center justify-between gap-3 rounded-2xl border p-4 text-left transition-transform hover:-translate-y-0.5 ${
              mastered ? "border-guarantee/40 bg-guarantee/5" : "border-hairline bg-surface hover:border-accent/50"
            }`}
          >
            <span className="min-w-0">
              <span className="font-display text-base font-bold text-ink">
                {mastered ? "✓ " : ""}
                {p.name}
              </span>
              <span className="mt-0.5 block text-sm text-body">{p.cue}</span>
            </span>
            <MasteryPip state={st} />
          </button>
        );
      })}
    </div>
  );
}

// A small mastery indicator: dots for the SRS box (scored well twice = mastered).
function MasteryPip({ state }: { state?: PlayState }) {
  const box = state?.box ?? 0;
  if (box >= 3) {
    return <span className="shrink-0 font-pixel text-[9px] text-guarantee">MASTERED</span>;
  }
  return (
    <span className="flex shrink-0 items-center gap-1" aria-label={`progress ${box} of 2`}>
      {[1, 2].map((n) => (
        <span
          key={n}
          className={`h-2 w-2 rounded-full ${box >= n + 1 ? "bg-accent" : "bg-hairline"}`}
        />
      ))}
    </span>
  );
}

// ── a single Play as a STEP WIZARD ──────────────────────────────────────────
// One part per screen, Duolingo-style: Recognise → Shape → Keywords → Model →
// Drill. Bite-sized on a phone; Next/Back at the thumb, progress dots on top.
const STEP_TITLES = [
  "Recognise it in 5 seconds",
  "The answer shape",
  "Say it the examiner's way",
  "A full-mark answer",
  "Now you write one",
];

function PlayDetail({
  play,
  state,
  onBack,
  onDrillGraded,
}: {
  play: Play;
  state?: PlayState;
  onBack: () => void;
  onDrillGraded: (s: PlayState) => void;
}) {
  const [step, setStep] = useState(0);
  const [showModel, setShowModel] = useState(false);
  const last = STEP_TITLES.length - 1;

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between gap-3">
        <button type="button" onClick={onBack} className="chip">
          ← All plays
        </button>
        <MasteryPip state={state} />
      </div>

      <div className="mt-3 rounded-3xl glass p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-accent">
          Play · {play.name}
        </p>

        {/* progress dots */}
        <div className="mt-3 flex items-center gap-1.5" aria-label={`Step ${step + 1} of ${STEP_TITLES.length}`}>
          {STEP_TITLES.map((t, i) => (
            <button
              key={t}
              type="button"
              onClick={() => setStep(i)}
              aria-label={`Step ${i + 1}: ${t}`}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i < step ? "bg-guarantee/70" : i === step ? "bg-accent" : "bg-white/12"
              }`}
            />
          ))}
        </div>

        <h2 className="mt-4 font-display text-xl font-extrabold text-ink">
          <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 font-mono text-sm font-black text-accent">
            {step + 1}
          </span>
          {STEP_TITLES[step]}
        </h2>

        <div className="mt-4 min-h-[16rem]">
          {step === 0 && (
            <div>
              <p className="text-sm text-body">
                <span className="font-semibold text-ink">Trigger words:</span>{" "}
                {play.triggers.map((t, i) => (
                  <span key={t}>
                    {i > 0 && " "}
                    <span className="chip !px-2 !py-0.5 font-mono text-xs !text-accent">{t}</span>
                  </span>
                ))}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-body">
                <span className="font-semibold text-ink">What it tests:</span> {play.tests}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-body">
                <span className="font-semibold text-ink">Marks to points:</span> {play.marksHint}
              </p>
            </div>
          )}

          {step === 1 && (
            <ol className="space-y-3">
              {play.skeleton.map((st, i) => (
                <li key={i} className="flex gap-3 rounded-2xl bg-white/5 p-3 text-sm text-ink">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 font-mono text-xs font-bold text-accent">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{st}</span>
                </li>
              ))}
            </ol>
          )}

          {step === 2 && (
            <div className="space-y-2.5">
              {play.keywords.map((k, i) => (
                <div key={i} className="rounded-2xl bg-white/5 p-3.5">
                  <p className="text-sm text-coral line-through decoration-coral/40">{k.vague}</p>
                  <p className="mt-1 text-sm font-semibold text-guarantee">→ {k.exact}</p>
                </div>
              ))}
            </div>
          )}

          {step === 3 && (
            <div>
              <p className="rounded-2xl bg-white/5 px-3.5 py-2.5 text-sm font-medium text-ink">
                {play.model.prompt}
              </p>
              {!showModel ? (
                <button type="button" onClick={() => setShowModel(true)} className="sl-btn mt-4 w-full">
                  Reveal the model answer
                </button>
              ) : (
                <div className="mt-3 space-y-3">
                  <p className="rounded-2xl border border-guarantee/30 bg-guarantee/10 p-3.5 text-sm leading-relaxed text-ink">
                    {play.model.answer}
                  </p>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-body">
                      Crediting points ({play.model.marks} marks)
                    </p>
                    <ul className="mt-1 space-y-1">
                      {play.model.credit.map((c, i) => (
                        <li key={i} className="text-sm text-guarantee">✓ {c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 4 && <DrillBox play={play} onGraded={onDrillGraded} />}
        </div>

        {/* wizard controls */}
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-hairline pt-4">
          <button
            type="button"
            onClick={() => (step === 0 ? onBack() : setStep(step - 1))}
            className="chip"
          >
            ← {step === 0 ? "Plays" : "Back"}
          </button>
          <span className="text-xs font-semibold text-body">
            {step + 1} / {STEP_TITLES.length}
          </span>
          {step < last ? (
            <button type="button" onClick={() => setStep(step + 1)} className="sl-btn !px-6 !py-2.5">
              Next →
            </button>
          ) : (
            <button type="button" onClick={onBack} className="chip">
              Done, all plays →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── the drill: student writes an answer, the AI marker scores it ────────────
function DrillBox({ play, onGraded }: { play: Play; onGraded: (s: PlayState) => void }) {
  const [answer, setAnswer] = useState("");
  const [busy, setBusy] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [result, setResult] = useState<{ earned: number; total: number; xp?: number } | null>(null);

  async function submit() {
    if (busy || answer.trim().length < 10) return;
    setBusy(true);
    setFeedback(null);
    setResult(null);
    try {
      // 1) server-side marking (same marker the drills page uses)
      const markRes = await fetch("/api/account/tutor", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "structured",
          prompt: play.drill.prompt,
          model: play.drill.model,
          answer,
        }),
      });
      const markData = (await markRes.json()) as { reply?: string; fallback?: string };
      const text = markData.reply ?? markData.fallback ?? "";
      setFeedback(text);

      // 2) parse the "Score: X/Y" the marker returns
      const m = text.match(/Score:\s*(\d+)\s*\/\s*(\d+)/i);
      if (m) {
        const earned = Number(m[1]);
        const total = Number(m[2]);
        const pct = total > 0 ? earned / total : 0;
        // 3) record it against FastTrack progress (advances mastery + XP)
        const recRes = await fetch("/api/account/fasttrack", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ playId: play.id, pct }),
        });
        const recData = (await recRes.json()) as { ok?: boolean; state?: PlayState; xp?: number };
        setResult({ earned, total, xp: recData.xp });
        if (recData.ok && recData.state) onGraded(recData.state);
      }
    } catch {
      setFeedback("The marker is having a moment. Compare against the crediting points and try again shortly.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <p className="rounded-lg bg-night px-3 py-2 text-sm font-medium text-ink">
        {play.drill.prompt}
      </p>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        rows={5}
        maxLength={1500}
        placeholder="Write your answer using the skeleton and the examiner keywords above..."
        className="mt-3 w-full rounded-xl border border-hairline bg-night px-3 py-2 text-sm text-ink outline-none focus:border-accent"
      />
      <div className="mt-2 flex items-center gap-3">
        <button
          type="button"
          onClick={() => void submit()}
          disabled={busy || answer.trim().length < 10}
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night disabled:opacity-50"
        >
          {busy ? "Marking..." : "Mark my answer"}
        </button>
        {result && (
          <span
            className={`rounded-lg px-3 py-1 font-display text-lg font-black ${
              result.earned >= result.total * 0.6
                ? "bg-guarantee/15 text-guarantee"
                : "bg-coral/15 text-coral"
            }`}
          >
            {result.earned}/{result.total}
          </span>
        )}
        {result?.xp ? (
          <span className="font-mono text-xs text-accent">+{result.xp} XP</span>
        ) : null}
      </div>
      {feedback && <MarkerFeedback text={feedback} />}
    </div>
  );
}

// Renders the marker's "Score / ✓ / ✗ / tip" output (mirrors the drills page).
function MarkerFeedback({ text }: { text: string }) {
  const lines = text.split("\n").filter((l) => l.trim() !== "");
  const scoreMatch = lines[0]?.match(/^Score:\s*(\d+)\s*\/\s*(\d+)/i);
  const body = scoreMatch ? lines.slice(1) : lines;
  return (
    <div className="mt-4 rounded-xl border border-violet/40 bg-night p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-violet">Marker&apos;s feedback</p>
      <div className="mt-2 space-y-1.5">
        {body.map((line, i) => {
          const t = line.trim();
          const cls = t.startsWith("✓")
            ? "text-guarantee"
            : t.startsWith("✗")
              ? "text-coral"
              : t.toLowerCase().startsWith("marker's tip")
                ? "mt-2 text-ink"
                : "text-cloud";
          return (
            <p key={i} className={`text-sm leading-relaxed ${cls}`}>
              {t}
            </p>
          );
        })}
      </div>
    </div>
  );
}

// ── the 5-second Classifier game ────────────────────────────────────────────
// Flash a real exam stem, the student taps which Play it is. Recognition under
// time pressure is exactly the "know what it's testing in 5-10 seconds" skill.
interface ClassifierRound {
  stem: string;
  answerId: string;
  options: { id: string; name: string }[];
}

function buildRounds(family: Family): ClassifierRound[] {
  const plays = playsForFamily(family);
  const rounds: ClassifierRound[] = [];
  for (const p of plays) {
    for (const stem of p.classifierStems) {
      // three distractor plays + the answer, shuffled
      const others = plays.filter((o) => o.id !== p.id);
      const distractors = shuffle(others).slice(0, 3);
      const options = shuffle([p, ...distractors]).map((o) => ({ id: o.id, name: o.name }));
      rounds.push({ stem, answerId: p.id, options });
    }
  }
  return shuffle(rounds).slice(0, 10);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function ClassifierGame({ family, onBack }: { family: Family; onBack: () => void }) {
  const [rounds] = useState(() => buildRounds(family));
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const round = rounds[idx];
  const done = idx >= rounds.length;

  function pick(id: string) {
    if (picked) return;
    setPicked(id);
    if (id === round.answerId) setScore((s) => s + 1);
  }
  function next() {
    setPicked(null);
    setIdx((i) => i + 1);
  }

  if (done) {
    return (
      <div className="mt-4 rounded-2xl border border-hairline bg-surface p-6 text-center">
        <p className="font-display text-2xl font-black text-ink">
          {score}/{rounds.length} recognised
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm text-body">
          {score >= rounds.length * 0.8
            ? "Sharp. You are reading the question before the clock does, that is where marks are won."
            : "Keep drilling this. The faster you name the question type, the more time you have to answer it well."}
        </p>
        <div className="mt-4 flex justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              setIdx(0);
              setScore(0);
              setPicked(null);
            }}
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
          >
            Go again
          </button>
          <button
            type="button"
            onClick={onBack}
            className="rounded-lg border border-hairline px-5 py-2.5 text-sm text-body"
          >
            Back to plays
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-4">
      <button type="button" onClick={onBack} className="text-sm text-body hover:text-ink">
        ← All plays
      </button>
      <div className="rounded-2xl border border-violet/40 bg-surface p-5">
        <div className="flex items-center justify-between">
          <p className="font-pixel text-[9px] tracking-widest text-violet">
            THE 5-SECOND READ · {idx + 1}/{rounds.length}
          </p>
          <p className="font-mono text-xs text-body">Score {score}</p>
        </div>
        <p className="mt-3 text-lg font-medium leading-relaxed text-ink">{round.stem}</p>
        <p className="mt-2 text-sm text-body">Which question type is this?</p>
        <div className="mt-3 space-y-2">
          {round.options.map((o) => {
            const isAnswer = o.id === round.answerId;
            const isPicked = o.id === picked;
            const cls = !picked
              ? "border-hairline bg-night hover:border-accent"
              : isAnswer
                ? "border-guarantee bg-guarantee/10 text-ink"
                : isPicked
                  ? "border-coral bg-coral/10 text-ink"
                  : "border-hairline bg-night opacity-60";
            return (
              <button
                key={o.id}
                type="button"
                disabled={Boolean(picked)}
                onClick={() => pick(o.id)}
                className={`block w-full rounded-xl border px-4 py-2.5 text-left text-sm text-ink transition-colors ${cls}`}
              >
                {picked && isAnswer ? "✓ " : picked && isPicked ? "✗ " : ""}
                {o.name}
              </button>
            );
          })}
        </div>
        {picked && (
          <button
            type="button"
            onClick={next}
            className="mt-3 w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
          >
            {idx + 1 < rounds.length ? "Next" : "See the result"}
          </button>
        )}
      </div>
    </div>
  );
}
