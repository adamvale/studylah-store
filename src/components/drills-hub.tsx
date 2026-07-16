"use client";

import { useCallback, useEffect, useState } from "react";

// The Drills hub: four micro-trainers on one page.
//   Definitions - spaced-repetition flashcards from the definition bank
//   Formulas    - spaced-repetition recall of the formula bank
//   Explain     - teach-it-back, graded by the AI coach
//   Structured  - mark-scheme feedback on written answers (precision cards)

export interface SubjectTopics {
  level: string;
  slug: string;
  name: string;
  topics: string[];
}

export interface StructuredCard {
  id: string;
  subjectName: string;
  topic: string;
  prompt: string;
  model: string;
}

interface DrillCard {
  itemKey: string;
  level: string;
  slug: string;
  subjectName: string;
  topic: string;
  front: string;
  back: string;
  note?: string;
  due: boolean;
}

interface DrillStats {
  total: number;
  due: number;
  banked: number;
}

const TABS = [
  { id: "definition", label: "📖 Definitions" },
  { id: "formula", label: "📐 Formulas" },
  { id: "explain", label: "🗣 Explain it back" },
  { id: "structured", label: "✍️ Structured answers" },
] as const;
type TabId = (typeof TABS)[number]["id"];

export function DrillsHub({
  subjects,
  structured,
  hasFormulas,
}: {
  subjects: SubjectTopics[];
  structured: StructuredCard[];
  hasFormulas: boolean;
}) {
  const [tab, setTab] = useState<TabId>("definition");

  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-ink">Drills</h2>
      <p className="mt-1 max-w-2xl text-sm text-body">
        Five focused minutes a day. Cards you know come back on a schedule
        (1, 3, 7, 21, 60 days), cards you miss come back tomorrow. Precise
        wording wins marks, that is the whole game here.
      </p>

      <div className="mt-5 flex flex-wrap gap-1 border-b border-hairline">
        {TABS.filter((t) => t.id !== "formula" || hasFormulas).map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`-mb-px border-b-2 px-3 py-2 text-sm font-medium transition-colors ${
              tab === t.id
                ? "border-accent text-ink"
                : "border-transparent text-body hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-5">
        {(tab === "definition" || tab === "formula") && (
          <CardDrill key={tab} kind={tab} />
        )}
        {tab === "explain" && <ExplainBack subjects={subjects} />}
        {tab === "structured" && <StructuredTrainer cards={structured} />}
      </div>
    </div>
  );
}

// ── Flashcard drill (definitions + formulas) ────────────────────────────────

function CardDrill({ kind }: { kind: "definition" | "formula" }) {
  const [cards, setCards] = useState<DrillCard[] | null>(null);
  const [stats, setStats] = useState<DrillStats | null>(null);
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState({ knew: 0, missed: 0 });

  const load = useCallback(async () => {
    setCards(null);
    setIdx(0);
    setRevealed(false);
    setDone({ knew: 0, missed: 0 });
    try {
      const res = await fetch(`/api/account/drill?kind=${kind}`, {
        credentials: "include",
      });
      const data = (await res.json()) as { cards: DrillCard[]; stats: DrillStats };
      setCards(data.cards ?? []);
      setStats(data.stats ?? null);
    } catch {
      setCards([]);
    }
  }, [kind]);

  useEffect(() => {
    void load();
  }, [load]);

  async function grade(correct: boolean) {
    const card = cards?.[idx];
    if (!card) return;
    setDone((d) => ({
      knew: d.knew + (correct ? 1 : 0),
      missed: d.missed + (correct ? 0 : 1),
    }));
    setRevealed(false);
    setIdx((i) => i + 1);
    void fetch("/api/account/drill", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        kind,
        itemKey: card.itemKey,
        level: card.level,
        slug: card.slug,
        correct,
      }),
    });
  }

  if (cards === null) {
    return <p className="text-sm text-body">Dealing today&apos;s cards…</p>;
  }
  if (cards.length === 0) {
    return (
      <div className="rounded-2xl border border-hairline bg-surface p-6 text-sm text-body">
        Nothing to review right now. Come back tomorrow, the schedule never
        sleeps.
      </div>
    );
  }

  const card = cards[idx];
  if (!card) {
    return (
      <div className="rounded-2xl border border-guarantee/40 bg-surface p-6 text-center">
        <p className="text-3xl">🏁</p>
        <p className="mt-2 font-display text-lg font-bold text-ink">
          Session done: {done.knew} known, {done.missed} to resee
        </p>
        <p className="mt-1 text-sm text-body">
          Missed cards come back tomorrow. Known cards return
          on the spacing ladder.
        </p>
        <button
          type="button"
          onClick={() => void load()}
          className="mt-4 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
        >
          Deal another session
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-body">
        <span>
          Card {idx + 1} of {cards.length}
          {card.due && (
            <span className="ml-2 rounded-full bg-teal/15 px-2 py-0.5 font-medium text-teal">
              🔁 scheduled review
            </span>
          )}
        </span>
        {stats && (
          <span>
            {stats.due} due · {stats.banked} banked · {stats.total} in rotation
          </span>
        )}
      </div>

      <div className="mt-3 rounded-2xl border border-hairline bg-surface p-6">
        <p className="font-mono text-xs text-accent">
          {card.subjectName}
          {card.topic ? ` · ${card.topic}` : ""}
        </p>
        <p className="mt-3 font-display text-xl font-bold text-ink">
          {card.front}
        </p>

        {!revealed ? (
          <button
            type="button"
            onClick={() => setRevealed(true)}
            className="mt-6 w-full rounded-lg bg-accent px-5 py-3 text-sm font-bold text-night"
          >
            {kind === "definition"
              ? "Say it out loud, then reveal"
              : "Write it down, then reveal"}
          </button>
        ) : (
          <>
            <div className="mt-4 rounded-xl border border-guarantee/30 bg-night p-4">
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-ink">
                {card.back}
              </p>
              {card.note && (
                <p className="mt-2 text-xs text-body">{card.note}</p>
              )}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => void grade(false)}
                className="rounded-lg border border-coral/50 px-4 py-3 text-sm font-bold text-coral"
              >
                Not yet (tomorrow)
              </button>
              <button
                type="button"
                onClick={() => void grade(true)}
                className="rounded-lg bg-guarantee px-4 py-3 text-sm font-bold text-night"
              >
                Knew it
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ── Explain it back ─────────────────────────────────────────────────────────

function ExplainBack({ subjects }: { subjects: SubjectTopics[] }) {
  const withTopics = subjects.filter((s) => s.topics.length > 0);
  const [subjKey, setSubjKey] = useState(
    withTopics[0] ? `${withTopics[0].level}/${withTopics[0].slug}` : ""
  );
  const subj = withTopics.find((s) => `${s.level}/${s.slug}` === subjKey);
  const [topic, setTopic] = useState(subj?.topics[0] ?? "");
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    setTopic(subj?.topics[0] ?? "");
  }, [subjKey, subj]);

  if (withTopics.length === 0) {
    return (
      <p className="text-sm text-body">
        No topics available yet for your subjects.
      </p>
    );
  }

  async function submit() {
    if (busy || text.trim().length < 20 || !subj) return;
    setBusy(true);
    setFeedback(null);
    try {
      const res = await fetch("/api/account/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          mode: "explain",
          subjectName: subj.name,
          topic,
          text,
        }),
      });
      const data = (await res.json()) as { reply?: string; fallback?: string };
      setFeedback(data.reply ?? data.fallback ?? "No feedback came back, try again.");
    } catch {
      setFeedback("That didn't send, give it another go.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="rounded-2xl border border-hairline bg-surface p-6">
      <p className="text-sm text-body">
        Teaching a topic back in your own words is the strongest memory
        technique there is. Write 2 to 5 sentences as if explaining to a
        classmate, the coach checks it against the syllabus.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium text-body">Subject</span>
          <select
            value={subjKey}
            onChange={(e) => setSubjKey(e.target.value)}
            className="mt-1 w-full rounded-lg border border-hairline bg-night-2 px-3 py-2 text-sm text-ink outline-none focus:border-accent"
          >
            {withTopics.map((s) => (
              <option key={`${s.level}/${s.slug}`} value={`${s.level}/${s.slug}`}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-xs font-medium text-body">Topic</span>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="mt-1 w-full rounded-lg border border-hairline bg-night-2 px-3 py-2 text-sm text-ink outline-none focus:border-accent"
          >
            {(subj?.topics ?? []).map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={5}
        maxLength={1500}
        placeholder="Explain the topic in your own words…"
        className="mt-3 w-full rounded-lg border border-hairline bg-night-2 px-3 py-2 text-sm text-ink outline-none focus:border-accent"
      />
      <button
        type="button"
        onClick={() => void submit()}
        disabled={busy || text.trim().length < 20}
        className="mt-3 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night disabled:opacity-50"
      >
        {busy ? "Coach is reading…" : "Check my explanation"}
      </button>
      {feedback && (
        <div className="mt-4 rounded-xl border border-violet/40 bg-night p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-violet">
            Coach's feedback
          </p>
          <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-ink">
            {feedback}
          </p>
          <p className="mt-2 text-[10px] text-body">
            AI coach feedback, always cross-check against your notes and
            syllabus.
          </p>
        </div>
      )}
    </div>
  );
}

// ── Structured answer trainer ───────────────────────────────────────────────

function StructuredTrainer({ cards }: { cards: StructuredCard[] }) {
  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState("");
  const [busy, setBusy] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showModel, setShowModel] = useState(false);

  const card = cards[idx];
  if (!card) {
    return (
      <p className="text-sm text-body">
        No structured questions available for your subjects yet.
      </p>
    );
  }

  async function submit() {
    if (busy || answer.trim().length < 10) return;
    setBusy(true);
    setFeedback(null);
    try {
      const res = await fetch("/api/account/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          mode: "structured",
          prompt: card.prompt,
          model: card.model,
          answer,
        }),
      });
      const data = (await res.json()) as { reply?: string; fallback?: string };
      setFeedback(data.reply ?? data.fallback ?? "No feedback came back, try again.");
      setShowModel(true);
    } catch {
      setFeedback("That didn't send, give it another go.");
    } finally {
      setBusy(false);
    }
  }

  function next() {
    setIdx((i) => (i + 1) % cards.length);
    setAnswer("");
    setFeedback(null);
    setShowModel(false);
  }

  return (
    <div className="rounded-2xl border border-hairline bg-surface p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-xs text-accent">
          {card.subjectName}
          {card.topic ? ` · ${card.topic}` : ""}
        </p>
        <span className="text-xs text-body">
          {idx + 1} of {cards.length} today
        </span>
      </div>
      <p className="mt-3 font-medium text-ink">{card.prompt}</p>
      <p className="mt-1 text-xs text-body">
        Answer in full sentences the way you would in the paper. Marks live in
        precise phrasing.
      </p>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        rows={6}
        maxLength={1500}
        placeholder="Write your full answer…"
        className="mt-3 w-full rounded-lg border border-hairline bg-night-2 px-3 py-2 text-sm text-ink outline-none focus:border-accent"
      />
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => void submit()}
          disabled={busy || answer.trim().length < 10}
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night disabled:opacity-50"
        >
          {busy ? "Marking…" : "Mark my answer"}
        </button>
        <button
          type="button"
          onClick={next}
          className="rounded-lg border border-hairline px-5 py-2.5 text-sm font-medium text-body hover:text-ink"
        >
          Next question
        </button>
      </div>
      {feedback && (
        <div className="mt-4 rounded-xl border border-violet/40 bg-night p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-violet">
            Marker's feedback
          </p>
          <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-ink">
            {feedback}
          </p>
        </div>
      )}
      {showModel && (
        <div className="mt-3 rounded-xl border border-guarantee/30 bg-night p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-guarantee">
            Model answer (crediting phrases in caps)
          </p>
          <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-ink">
            {card.model}
          </p>
        </div>
      )}
    </div>
  );
}
