"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { MISTAKE_REASONS, REASON_LABEL } from "@/lib/server/mistakes";
import { MONSTERS, MONSTER_HP } from "@/lib/game";

export interface MistakeItem {
  id: string;
  level: string;
  slug: string;
  subjectName: string;
  topic: string;
  stem: string;
  correctAnswer: string | null;
  myAnswer: string | null;
  reason: string;
  source: string;
  note: string | null;
  resolved: boolean;
  clearStreak: number;
  nextResurfaceAt: string | null;
  canRetest: boolean;
  createdAt: string;
}

interface OwnedSubject {
  level: string;
  slug: string;
  name: string;
}

type Filter = "review" | "unclassified" | "all";

export function MistakeNotebook({
  initial,
  subjects,
  topicsBySubject,
}: {
  initial: MistakeItem[];
  subjects: OwnedSubject[];
  topicsBySubject: Record<string, string[]>;
}) {
  const [items, setItems] = useState<MistakeItem[]>(initial);
  const [filter, setFilter] = useState<Filter>("review");
  const [showAdd, setShowAdd] = useState(false);
  const [xpToast, setXpToast] = useState<string | null>(null);

  const counts = useMemo(
    () => ({
      review: items.filter((i) => !i.resolved).length,
      unclassified: items.filter((i) => !i.resolved && i.reason === "unset").length,
      all: items.length,
    }),
    [items]
  );

  const visible = items.filter((i) => {
    if (filter === "all") return true;
    if (filter === "review") return !i.resolved;
    return !i.resolved && i.reason === "unset";
  });

  async function patch(id: string, body: Record<string, unknown>) {
    const prev = items;
    setItems((list) => list.map((i) => (i.id === id ? { ...i, ...body } : i)));
    try {
      const res = await fetch(`/api/account/mistakes/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error();
      const data = (await res.json()) as {
        game?: { xpGained: number; leveledUp: boolean; level: number } | null;
      };
      if (data.game && data.game.xpGained > 0) {
        setXpToast(
          data.game.leveledUp
            ? `+${data.game.xpGained} XP · ⬆️ Level ${data.game.level}!`
            : `+${data.game.xpGained} XP, monster identified`
        );
        setTimeout(() => setXpToast(null), 3000);
      }
    } catch {
      setItems(prev); // roll back
    }
  }

  async function remove(id: string) {
    const prev = items;
    setItems((list) => list.filter((i) => i.id !== id));
    try {
      const res = await fetch(`/api/account/mistakes/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
    } catch {
      setItems(prev);
    }
  }

  return (
    <div className="space-y-6">
      {xpToast && (
        <p
          role="status"
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-accent/50 bg-night px-5 py-2.5 font-mono text-sm font-bold text-accent shadow-lg"
        >
          {xpToast}
        </p>
      )}
      <Diagnosis items={items} />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1">
          {(
            [
              ["review", `To review (${counts.review})`],
              ["unclassified", `Unclassified (${counts.unclassified})`],
              ["all", `All (${counts.all})`],
            ] as [Filter, string][]
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                filter === key
                  ? "border-accent text-accent"
                  : "border-hairline text-body hover:text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setShowAdd((s) => !s)}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-bold text-night"
        >
          {showAdd ? "Close" : "+ Add a mistake"}
        </button>
      </div>

      {showAdd && (
        <AddMistakeForm
          subjects={subjects}
          topicsBySubject={topicsBySubject}
          onAdded={(item) => {
            setItems((list) => [item, ...list]);
            setShowAdd(false);
          }}
        />
      )}

      {visible.length === 0 ? (
        <div className="rounded-2xl border border-hairline bg-surface p-8 text-center">
          <p className="font-display text-lg font-bold text-ink">
            {filter === "all" ? "No mistakes logged yet" : "Nothing to review, nice"}
          </p>
          <p className="mt-2 text-sm text-body">
            Questions you miss in the daily three land here automatically. Add
            your own from school papers with the button above, the top scorers
            all keep a wrong-answer book.
          </p>
        </div>
      ) : (
        <ul className="space-y-4">
          {visible.map((item) => (
            <li
              key={item.id}
              className={`rounded-2xl border bg-surface p-5 ${
                item.resolved ? "border-hairline opacity-70" : "border-hairline"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-mono text-xs text-accent">
                  {item.subjectName} · {item.topic}
                </p>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-wide text-body">
                  {item.source === "daily"
                    ? "from daily"
                    : item.source === "diagnostic"
                    ? "from check"
                    : "added"}
                </span>
              </div>
              {(() => {
                const monster = MONSTERS[item.reason] ?? MONSTERS.unset;
                const hpLeft = Math.max(MONSTER_HP - item.clearStreak, 0);
                const respawn = item.nextResurfaceAt
                  ? Math.ceil(
                      (new Date(item.nextResurfaceAt).getTime() - Date.now()) /
                        (24 * 60 * 60 * 1000)
                    )
                  : null;
                return (
                  <div className="mt-3 flex flex-wrap items-center gap-3 rounded-xl border border-hairline bg-night px-4 py-2.5">
                    <span aria-hidden="true" className="text-2xl">
                      {item.resolved ? "🏆" : monster.emoji}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-ink">
                        {item.resolved ? `${monster.name}, banished` : monster.name}
                      </span>
                      <span className="block text-xs text-body">
                        {item.resolved ? "Beaten twice. It doesn't come back." : monster.tag}
                      </span>
                    </span>
                    {!item.resolved && item.canRetest && (
                      <span className="shrink-0 text-right">
                        <span aria-label={`${hpLeft} of ${MONSTER_HP} HP left`} className="block text-sm">
                          {"❤️".repeat(hpLeft)}
                          {"🖤".repeat(MONSTER_HP - hpLeft)}
                        </span>
                        <span className="block text-[10px] text-body">
                          {respawn !== null && respawn <= 0
                            ? "prowling your daily three"
                            : respawn !== null
                            ? `returns in ~${respawn} day${respawn === 1 ? "" : "s"}`
                            : "waiting"}
                        </span>
                      </span>
                    )}
                  </div>
                );
              })()}
              <p className="mt-2 text-sm text-ink">{item.stem}</p>

              {(item.myAnswer || item.correctAnswer) && (
                <div className="mt-2 space-y-0.5 text-sm">
                  {item.myAnswer && (
                    <p className="text-body">
                      You: <span className="text-coral">{item.myAnswer}</span>
                    </p>
                  )}
                  {item.correctAnswer && (
                    <p className="text-body">
                      Correct:{" "}
                      <span className="font-medium text-guarantee">{item.correctAnswer}</span>
                    </p>
                  )}
                </div>
              )}

              {item.note && <p className="mt-2 text-sm italic text-body">{item.note}</p>}

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {item.reason === "unset" && !item.resolved && (
                  <span className="text-xs font-medium text-ink">Identify it:</span>
                )}
                {MISTAKE_REASONS.map((r) => (
                  <button
                    key={r}
                    type="button"
                    title={REASON_LABEL[r]}
                    onClick={() => void patch(item.id, { reason: r })}
                    className={`rounded-full border px-2.5 py-1 text-xs transition-colors ${
                      item.reason === r
                        ? "border-accent text-accent"
                        : "border-hairline text-body hover:text-ink"
                    }`}
                  >
                    {MONSTERS[r].emoji} {MONSTERS[r].name}
                  </button>
                ))}
                <span className="ml-auto flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => void patch(item.id, { resolved: !item.resolved })}
                    className="text-xs font-medium text-accent hover:underline"
                  >
                    {item.resolved ? "Revive it" : "Banish by hand"}
                  </button>
                  <button
                    type="button"
                    onClick={() => void remove(item.id)}
                    aria-label="Delete mistake"
                    className="text-xs text-body hover:text-coral"
                  >
                    Delete
                  </button>
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function AddMistakeForm({
  subjects,
  topicsBySubject,
  onAdded,
}: {
  subjects: OwnedSubject[];
  topicsBySubject: Record<string, string[]>;
  onAdded: (item: MistakeItem) => void;
}) {
  const [subjectKey, setSubjectKey] = useState(
    subjects[0] ? `${subjects[0].level}/${subjects[0].slug}` : ""
  );
  const [topic, setTopic] = useState("");
  const [stem, setStem] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [myAnswer, setMyAnswer] = useState("");
  const [reason, setReason] = useState<string>("unset");
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subject = subjects.find((s) => `${s.level}/${s.slug}` === subjectKey);
  const topics = topicsBySubject[subjectKey] ?? [];

  async function submit() {
    if (!subject || !topic.trim() || !stem.trim()) {
      setError("Pick a subject and topic, and paste the question.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/account/mistakes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          level: subject.level,
          slug: subject.slug,
          topic,
          stem,
          correctAnswer,
          myAnswer,
          reason,
          note,
        }),
      });
      if (!res.ok) throw new Error();
      const { id } = (await res.json()) as { id: string };
      onAdded({
        id,
        level: subject.level,
        slug: subject.slug,
        subjectName: subject.name,
        topic: topic.trim(),
        stem: stem.trim(),
        correctAnswer: correctAnswer.trim() || null,
        myAnswer: myAnswer.trim() || null,
        reason,
        source: "manual",
        note: note.trim() || null,
        resolved: false,
        clearStreak: 0,
        nextResurfaceAt: null,
        canRetest: false,
        createdAt: new Date().toISOString(),
      });
    } catch {
      setError("Couldn't save that, try again.");
    } finally {
      setBusy(false);
    }
  }

  const field = "w-full rounded-lg border border-hairline bg-night px-3 py-2 text-sm text-ink outline-none focus:border-accent";

  return (
    <div className="rounded-2xl border border-accent/40 bg-surface p-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-xs font-medium text-body">
          Subject
          <select
            value={subjectKey}
            onChange={(e) => setSubjectKey(e.target.value)}
            className={`mt-1 ${field}`}
          >
            {subjects.map((s) => (
              <option key={`${s.level}/${s.slug}`} value={`${s.level}/${s.slug}`}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <label className="text-xs font-medium text-body">
          Topic
          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            list="mistake-topics"
            placeholder="e.g. Mole concept"
            className={`mt-1 ${field}`}
          />
          <datalist id="mistake-topics">
            {topics.map((t) => (
              <option key={t} value={t} />
            ))}
          </datalist>
        </label>
      </div>
      <label className="mt-3 block text-xs font-medium text-body">
        The question (or what tripped you up)
        <textarea
          value={stem}
          onChange={(e) => setStem(e.target.value)}
          rows={2}
          className={`mt-1 ${field}`}
        />
      </label>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="text-xs font-medium text-body">
          Your answer (optional)
          <input value={myAnswer} onChange={(e) => setMyAnswer(e.target.value)} className={`mt-1 ${field}`} />
        </label>
        <label className="text-xs font-medium text-body">
          Correct answer (optional)
          <input
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            className={`mt-1 ${field}`}
          />
        </label>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="text-xs font-medium text-body">
          Why did you miss it?
          <select value={reason} onChange={(e) => setReason(e.target.value)} className={`mt-1 ${field}`}>
            <option value="unset">Classify later</option>
            {MISTAKE_REASONS.map((r) => (
              <option key={r} value={r}>
                {REASON_LABEL[r]}
              </option>
            ))}
          </select>
        </label>
        <label className="text-xs font-medium text-body">
          Note to self (optional)
          <input value={note} onChange={(e) => setNote(e.target.value)} className={`mt-1 ${field}`} />
        </label>
      </div>
      {error && <p className="mt-3 text-sm text-coral">{error}</p>}
      <button
        type="button"
        onClick={() => void submit()}
        disabled={busy}
        className="mt-4 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night disabled:opacity-50"
      >
        {busy ? "Saving…" : "Save to notebook"}
      </button>
    </div>
  );
}

// ── Diagnosis ────────────────────────────────────────────────────────────────
// The notebook shouldn't just record mistakes, it should read them. Clusters
// unresolved entries by cause and by topic and says what to do about it.

const REASON_RX: Record<string, string> = {
  careless:
    "Slips, not gaps. Slow down on the final line: reread the question, check units and signs before moving on.",
  concept:
    "Concept gaps. These need a learning session with the Forecast notes, not more questions. Book one real session.",
  method:
    "Method breakdowns. You know the idea but the working collapses. Redo each of these writing EVERY line, no shortcuts.",
  time:
    "Time pressure. Practise these topics under the timer, speed is a skill you train separately from accuracy.",
};

function Diagnosis({ items }: { items: MistakeItem[] }) {
  const open = items.filter((i) => !i.resolved);
  if (open.length < 3) return null;

  const byReason = new Map<string, number>();
  const byTopic = new Map<string, { count: number; subjectName: string }>();
  for (const m of open) {
    byReason.set(m.reason, (byReason.get(m.reason) ?? 0) + 1);
    const key = m.topic;
    const t = byTopic.get(key) ?? { count: 0, subjectName: m.subjectName };
    t.count += 1;
    byTopic.set(key, t);
  }
  const classified = [...byReason.entries()].filter(([r]) => r !== "unset");
  classified.sort((a, b) => b[1] - a[1]);
  const topReason = classified[0];

  // FastTrack nudge: concept + method mistakes in Chem/Phys/Bio are usually
  // WRITING leaks (missing keywords, wrong format), the exact thing FastTrack
  // trains. Only surface it when those causes cluster in a FastTrack subject.
  const isFastTrackSubject = (slug: string) => /^(chemistry|physics|biology)/.test(slug);
  const writingLeaks = open.filter(
    (m) => (m.reason === "concept" || m.reason === "method") && isFastTrackSubject(m.slug)
  ).length;
  const showFastTrack = writingLeaks >= 2;
  const unclassified = byReason.get("unset") ?? 0;
  const topTopics = [...byTopic.entries()]
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 3)
    .filter(([, t]) => t.count >= 2);

  return (
    <section className="rounded-2xl border border-violet/40 bg-surface p-5">
      <h3 className="font-display text-lg font-bold text-ink">🩺 Diagnosis</h3>
      <div className="mt-2 space-y-2 text-sm text-body">
        {topReason && topReason[1] >= 2 && (
          <p>
            <span className="font-medium text-ink">
              {topReason[1]} of your {open.length} open mistakes are{" "}
              {(REASON_LABEL[topReason[0]] ?? topReason[0]).toLowerCase()}s.
            </span>{" "}
            {REASON_RX[topReason[0]] ?? ""}
          </p>
        )}
        {topTopics.length > 0 && (
          <p>
            <span className="font-medium text-ink">Repeat offenders:</span>{" "}
            {topTopics
              .map(([topic, t]) => `${topic} (${t.count}x, ${t.subjectName})`)
              .join(" · ")}
            . Same topic twice is a pattern, not bad luck, that topic wants a
            proper session.
          </p>
        )}
        {unclassified >= 2 && (
          <p>
            {unclassified} entr{unclassified === 1 ? "y" : "ies"} still
            unclassified. Tag the cause on each (one tap below), the diagnosis
            gets sharper with every tag.
          </p>
        )}
        {showFastTrack && (
          <p>
            <span className="font-medium text-ink">
              {writingLeaks} of these are Chemistry, Physics or Biology answers
              losing marks on wording, not on knowing.
            </span>{" "}
            That is trainable.{" "}
            <Link href="/account/fasttrack" className="font-medium text-accent hover:underline">
              FastTrack the answer types →
            </Link>
          </p>
        )}
        <p className="text-xs">
          Want these turned into a day-by-day plan?{" "}
          <Link
            href="/account/rescue"
            className="font-medium text-accent hover:underline"
          >
            Rescue plan →
          </Link>
        </p>
      </div>
    </section>
  );
}
