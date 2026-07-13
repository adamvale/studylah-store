"use client";

import { useState } from "react";
import {
  SBQ_LADDER,
  COMMAND_WORDS,
  PEEL_TEMPLATE,
  POA_TEMPLATES,
  type PrecisionCard,
  type DefinitionCard,
  type QaDrill,
  type CarelessItem,
  type PracticeTool,
} from "@/lib/study/practice-content";

const TOOL_LABEL: Record<PracticeTool, string> = {
  precision: "Keyword precision",
  definitions: "Definitions",
  qa: "QA driller",
  careless: "Careless checklist",
  sbq: "Source skills",
  poa: "POA formats",
};

export interface PracticeData {
  tools: PracticeTool[];
  precision: PrecisionCard[];
  definitions: DefinitionCard[];
  qa: QaDrill[];
  careless: CarelessItem[];
}

export function PracticeTools({ data }: { data: PracticeData }) {
  const [active, setActive] = useState<PracticeTool>(data.tools[0]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-1">
        {data.tools.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setActive(t)}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              active === t
                ? "border-accent text-accent"
                : "border-hairline text-body hover:text-ink"
            }`}
          >
            {TOOL_LABEL[t]}
          </button>
        ))}
      </div>

      {active === "precision" && <Precision cards={data.precision} />}
      {active === "definitions" && <Flashcards cards={data.definitions} />}
      {active === "qa" && <QaDriller drills={data.qa} />}
      {active === "careless" && <Careless items={data.careless} />}
      {active === "sbq" && <SourceSkills />}
      {active === "poa" && <PoaFormats />}
    </div>
  );
}

// ── Keyword precision: type an answer, see which marker words you hit ────────
function Precision({ cards }: { cards: PrecisionCard[] }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-body">
        Marks in science are phrase-exact. Write your answer, then reveal the
        marker words a marker actually looks for.
      </p>
      {cards.map((c, i) => (
        <PrecisionRow key={i} card={c} />
      ))}
    </div>
  );
}

function PrecisionRow({ card }: { card: PrecisionCard }) {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const hit = (k: string) => text.toLowerCase().includes(k.toLowerCase());

  return (
    <div className="rounded-2xl border border-hairline bg-surface p-5">
      <p className="font-mono text-xs text-accent">{card.topic}</p>
      <p className="mt-1 font-medium text-ink">{card.prompt}</p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={2}
        placeholder="Write your answer in full…"
        className="mt-3 w-full rounded-xl border border-hairline bg-night px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
      />
      <button
        type="button"
        onClick={() => setChecked(true)}
        className="mt-3 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-night"
      >
        Check my phrasing
      </button>
      {checked && (
        <div className="mt-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            {card.keywords.map((k) => (
              <span
                key={k}
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                  hit(k) ? "bg-guarantee/15 text-guarantee" : "bg-coral/15 text-coral"
                }`}
              >
                {hit(k) ? "✓ " : "✗ "}
                {k}
              </span>
            ))}
          </div>
          <p className="rounded-xl border border-hairline bg-night p-3 text-sm text-body">
            <span className="font-medium text-ink">Model answer: </span>
            {card.modelAnswer}
          </p>
        </div>
      )}
    </div>
  );
}

// ── Definitions & QA: flip-card decks ───────────────────────────────────────
function Flashcards({ cards }: { cards: DefinitionCard[] }) {
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  if (cards.length === 0) return null;
  const card = cards[i];

  function go(delta: number) {
    setFlipped(false);
    setI((n) => (n + delta + cards.length) % cards.length);
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-body">
        The definitions markers pay for, word for word. Recall it, then flip to
        check.
      </p>
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className="flex min-h-44 w-full flex-col items-center justify-center rounded-2xl border border-hairline bg-surface p-8 text-center"
      >
        <span className="font-mono text-xs text-accent">{card.topic}</span>
        {!flipped ? (
          <span className="mt-3 font-display text-2xl font-bold text-ink">{card.term}</span>
        ) : (
          <span className="mt-3 text-base text-ink">{card.definition}</span>
        )}
        <span className="mt-4 text-xs text-body">
          {flipped ? "Tap to hide" : "Tap to reveal the definition"}
        </span>
      </button>
      <div className="flex items-center justify-between">
        <button type="button" onClick={() => go(-1)} className="text-sm font-medium text-body hover:text-ink">
          ← Previous
        </button>
        <span className="font-mono text-xs text-body">
          {i + 1} / {cards.length}
        </span>
        <button type="button" onClick={() => go(1)} className="text-sm font-medium text-accent hover:underline">
          Next →
        </button>
      </div>
    </div>
  );
}

function QaDriller({ drills }: { drills: QaDrill[] }) {
  const [i, setI] = useState(0);
  const [revealed, setRevealed] = useState(false);
  if (drills.length === 0) return null;
  const d = drills[i];

  function go(delta: number) {
    setRevealed(false);
    setI((n) => (n + delta + drills.length) % drills.length);
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-body">
        Qualitative analysis is pure pattern recognition. Read the test and
        observation, name the ion or gas, then reveal.
      </p>
      <div className="rounded-2xl border border-hairline bg-surface p-6">
        <p className="font-mono text-xs text-accent">Test</p>
        <p className="mt-1 text-ink">{d.test}</p>
        <p className="mt-3 font-mono text-xs text-accent">Observation</p>
        <p className="mt-1 text-ink">{d.observation}</p>
        {revealed ? (
          <p className="mt-4 rounded-xl border border-guarantee/40 bg-night p-3 text-ink">
            <span className="font-medium text-guarantee">Conclusion: </span>
            {d.conclusion}
          </p>
        ) : (
          <button
            type="button"
            onClick={() => setRevealed(true)}
            className="mt-4 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-night"
          >
            Reveal conclusion
          </button>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button type="button" onClick={() => go(-1)} className="text-sm font-medium text-body hover:text-ink">
          ← Previous
        </button>
        <span className="font-mono text-xs text-body">
          {i + 1} / {drills.length}
        </span>
        <button type="button" onClick={() => go(1)} className="text-sm font-medium text-accent hover:underline">
          Next →
        </button>
      </div>
    </div>
  );
}

// ── Careless checklist: accordion per topic ─────────────────────────────────
function Careless({ items }: { items: CarelessItem[] }) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-body">
        The marks that leak on method, not knowledge. Run the relevant list
        before you move on from a question.
      </p>
      {items.map((item) => (
        <details key={item.topic} className="group rounded-2xl border border-hairline bg-surface">
          <summary className="flex cursor-pointer items-center justify-between px-5 py-4">
            <span className="font-display font-bold text-ink">{item.topic}</span>
            <span aria-hidden="true" className="text-body transition-transform group-open:rotate-180">
              ▾
            </span>
          </summary>
          <ul className="space-y-2 border-t border-hairline px-5 py-4">
            {item.checks.map((c, i) => (
              <li key={i} className="flex gap-2 text-sm text-body">
                <span className="text-accent">□</span>
                {c}
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}

// ── Source skills (humanities): ladder + command words + PEEL ───────────────
function SourceSkills() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-display font-bold text-ink">The source-question ladder</h4>
        <p className="mt-1 text-sm text-body">Each rung is a different skill. Know which one the question is testing.</p>
        <ol className="mt-3 space-y-2">
          {SBQ_LADDER.map((r, i) => (
            <li key={i} className="rounded-2xl border border-hairline bg-surface p-4">
              <p className="font-display font-bold text-ink">
                {i + 1}. {r.rung}
              </p>
              <p className="mt-1 text-sm text-body">{r.what}</p>
              <p className="mt-1 text-sm text-accent">{r.how}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <h4 className="font-display font-bold text-ink">Command words</h4>
          <ul className="mt-3 space-y-2">
            {COMMAND_WORDS.map((c) => (
              <li key={c.word} className="rounded-xl border border-hairline bg-surface px-4 py-2.5 text-sm">
                <span className="font-medium text-ink">{c.word}</span>
                <span className="text-body">, {c.means}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-ink">PEEL paragraph</h4>
          <ul className="mt-3 space-y-2">
            {PEEL_TEMPLATE.map((p, i) => (
              <li key={i} className="rounded-xl border border-hairline bg-surface px-4 py-2.5 text-sm">
                <span className="font-display font-bold text-accent">{p.letter}</span>{" "}
                <span className="font-medium text-ink">{p.label}</span>
                <span className="text-body">, {p.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ── POA statement formats ───────────────────────────────────────────────────
function PoaFormats() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-body">
        Format marks are free marks. Rehearse the skeleton until the headings
        and order are automatic.
      </p>
      {POA_TEMPLATES.map((t) => (
        <div key={t.name} className="rounded-2xl border border-hairline bg-surface p-5">
          <h4 className="font-display font-bold text-ink">{t.name}</h4>
          <ul className="mt-3 space-y-1">
            {t.lines.map((line, i) => (
              <li key={i} className="border-l-2 border-hairline pl-3 font-mono text-sm text-body">
                {line}
              </li>
            ))}
          </ul>
          {t.note && <p className="mt-3 text-xs text-accent">{t.note}</p>}
        </div>
      ))}
    </div>
  );
}
