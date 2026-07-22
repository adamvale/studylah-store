"use client";

import { useState } from "react";
import Link from "next/link";
import { Sci } from "@/components/sci-text";
import { NamedIcon } from "@/components/icons";
import { LessonPlayer } from "@/components/lesson-player";
import { MisconceptionQuiz } from "@/components/misconception-quiz";
import { teachingPackFor, type TeachingPack } from "@/lib/teaching";
import type { LessonStep } from "@/lib/lesson-steps";

// A subject's page: the full topic list. Topics with an interactive lesson are
// tappable and open the practice for that topic (the Playground lesson player);
// topics without one yet show a quiet "soon" tag.

export interface TopicRow {
  topic: string;
  key: string;
  lesson: { key: string; title: string; steps: LessonStep[] } | null;
}

export function SubjectTopics({
  subjectName,
  code,
  rows,
}: {
  subjectName: string;
  code: string | null;
  rows: TopicRow[];
}) {
  const [active, setActive] = useState<TopicRow["lesson"]>(null);
  const [teach, setTeach] = useState<TeachingPack | null>(null);
  const [done, setDone] = useState<Set<string>>(new Set());

  if (teach) {
    return (
      <MisconceptionQuiz
        pack={teach}
        title={subjectName}
        subtitle="Teach me with Gugu"
        onExit={() => setTeach(null)}
        onComplete={() => {
          setDone((s) => new Set(s).add(teach.topicKey));
          setTeach(null);
        }}
      />
    );
  }

  if (active) {
    return (
      <LessonPlayer
        steps={active.steps}
        title={active.title}
        subtitle={subjectName}
        onExit={() => setActive(null)}
        onComplete={() => {
          setDone((s) => new Set(s).add(active.key));
          setActive(null);
        }}
      />
    );
  }

  // A topic is practisable if it has an interactive lesson or a teaching pack
  // (the misconception-aware tutor). The teaching pack takes priority.
  const practisable = rows.filter((r) => r.lesson || teachingPackFor(r.key)).length;

  return (
    <div>
      <Link href="/account" className="text-xs font-bold text-accent">
        ← Today
      </Link>
      <h1 className="mt-2 font-display text-2xl font-black text-ink">
        <Sci>{subjectName}</Sci>
      </h1>
      <p className="mt-1 text-xs text-body">
        {rows.length} topic{rows.length === 1 ? "" : "s"}
        {code ? ` · ${code}` : ""}
        {practisable > 0 ? ` · ${practisable} ready to practise` : ""}
      </p>

      <div className="mt-4 glass-deep divide-y divide-white/10 overflow-hidden p-0">
        {rows.map((r, i) => {
          const pack = teachingPackFor(r.key);
          const playable = Boolean(r.lesson) || Boolean(pack);
          const isDone = pack ? done.has(pack.topicKey) : r.lesson ? done.has(r.lesson.key) : false;
          return (
            <button
              key={r.key}
              type="button"
              disabled={!playable}
              onClick={() => (pack ? setTeach(pack) : r.lesson ? setActive(r.lesson) : undefined)}
              className={`flex w-full items-center gap-3 px-4 py-3 text-left ${playable ? "" : "opacity-60"}`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                  isDone ? "bg-guarantee/20 text-guarantee" : "bg-white/10 text-body"
                }`}
              >
                {isDone ? <NamedIcon name="check" size={13} /> : i + 1}
              </span>
              <span className="min-w-0 flex-1 text-sm text-ink">
                <Sci>{r.topic}</Sci>
              </span>
              {playable ? (
                <span className={`flex shrink-0 items-center gap-1 text-xs font-bold ${pack ? "text-guarantee" : "text-accent"}`}>
                  {pack ? "Teach me" : "Practise"}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </span>
              ) : (
                <span className="shrink-0 text-[10px] font-bold uppercase tracking-wide text-body/70">Soon</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
