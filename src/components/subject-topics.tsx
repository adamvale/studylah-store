"use client";

import { useState } from "react";
import Link from "next/link";
import { Sci } from "@/components/sci-text";
import { NamedIcon } from "@/components/icons";
import { LessonPlayer } from "@/components/lesson-player";
import { MisconceptionQuiz } from "@/components/misconception-quiz";
import { teachingPackFor, type TeachingPack } from "@/lib/teaching";
import { subconceptsFor } from "@/lib/teaching/subconcepts";
import type { LessonStep } from "@/lib/lesson-steps";

// A subject's page: the full topic list. Tapping a topic opens its bite-sized
// subconcept lessons (teach a bit, then a question) where they exist; otherwise
// the misconception-aware practice, or a plain lesson.

export interface TopicRow {
  topic: string;
  key: string;
  lesson: { key: string; title: string; steps: LessonStep[] } | null;
}

type ActiveLesson = { key: string; title: string; steps: LessonStep[] };

export function SubjectTopics({
  subjectName,
  code,
  rows,
}: {
  subjectName: string;
  code: string | null;
  rows: TopicRow[];
}) {
  const [active, setActive] = useState<ActiveLesson | null>(null);
  const [teach, setTeach] = useState<TeachingPack | null>(null);
  const [topic, setTopic] = useState<{ key: string; name: string } | null>(null);
  const [done, setDone] = useState<Set<string>>(new Set());

  // A single lesson (a subconcept or a plain topic lesson).
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

  // The misconception-aware question practice.
  if (teach) {
    return (
      <MisconceptionQuiz
        pack={teach}
        title={subjectName}
        subtitle="Practise with Gugu"
        onExit={() => setTeach(null)}
        onComplete={() => {
          setDone((s) => new Set(s).add(teach.topicKey));
          setTeach(null);
        }}
      />
    );
  }

  // A topic opened to its subconcept lessons.
  if (topic) {
    const subs = subconceptsFor(topic.key) ?? [];
    const pack = teachingPackFor(topic.key);
    return (
      <div>
        <button type="button" onClick={() => setTopic(null)} className="text-xs font-bold text-accent">
          ← {subjectName}
        </button>
        <h1 className="mt-2 font-display text-2xl font-black text-ink">
          <Sci>{topic.name}</Sci>
        </h1>
        <p className="mt-1 text-xs text-body">Learn it in small steps, then test yourself.</p>

        <div className="mt-4 space-y-2">
          {subs.map((s) => {
            const isDone = done.has(s.id);
            const kind = s.kind ?? "lesson";
            const tint =
              kind === "quiz"
                ? "from-guarantee/10"
                : kind === "revision"
                  ? "from-accent/10"
                  : "from-white/5";
            const badgeTone = isDone
              ? "bg-guarantee/20 text-guarantee"
              : kind === "quiz"
                ? "bg-guarantee/15 text-guarantee"
                : "bg-accent/15 text-accent";
            const label = kind === "quiz" ? "Topical quiz" : kind === "revision" ? "Checkpoint" : null;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive({ key: s.id, title: `${s.code} ${s.title}`, steps: s.steps })}
                className={`glass flex w-full items-center gap-3 bg-gradient-to-br ${tint} to-transparent p-4 text-left transition-transform hover:-translate-y-0.5`}
              >
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${badgeTone}`}>
                  {isDone ? (
                    <NamedIcon name="check" size={15} />
                  ) : kind === "quiz" ? (
                    <NamedIcon name="trophy" size={15} />
                  ) : kind === "revision" ? (
                    <NamedIcon name="target" size={15} />
                  ) : (
                    s.code.replace(/^T/, "")
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  {label && (
                    <span className="block text-[10px] font-bold uppercase tracking-wide text-accent">{label}</span>
                  )}
                  <span className="block font-display text-sm font-bold text-ink">
                    <Sci>{s.title}</Sci>
                  </span>
                  <span className="block text-xs text-body">
                    <Sci>{s.blurb}</Sci>
                  </span>
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="shrink-0 text-accent">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            );
          })}
        </div>

        {pack && (
          <button
            type="button"
            onClick={() => setTeach(pack)}
            className="mt-4 w-full rounded-xl border border-hairline py-3 text-sm font-bold text-ink"
          >
            Practise questions
          </button>
        )}
      </div>
    );
  }

  // Which topics can a student open? A topic is openable if it has subconcept
  // lessons, an interactive lesson, or a teaching pack. Subconcepts lead.
  const openable = (r: TopicRow) => Boolean(subconceptsFor(r.key)) || Boolean(r.lesson) || Boolean(teachingPackFor(r.key));
  const openCount = rows.filter(openable).length;

  function openTopic(r: TopicRow) {
    if (subconceptsFor(r.key)) setTopic({ key: r.key, name: r.topic });
    else if (teachingPackFor(r.key)) setTeach(teachingPackFor(r.key)!);
    else if (r.lesson) setActive(r.lesson);
  }

  return (
    <div>
      <Link href="/account/learn/tuition" className="text-xs font-bold text-accent">
        ← Tuition
      </Link>
      <h1 className="mt-2 font-display text-2xl font-black text-ink">
        <Sci>{subjectName}</Sci>
      </h1>
      <p className="mt-1 text-xs text-body">
        {rows.length} topic{rows.length === 1 ? "" : "s"}
        {code ? ` · ${code}` : ""}
        {openCount > 0 ? ` · ${openCount} ready` : ""}
      </p>

      <div className="mt-4 glass-deep divide-y divide-white/10 overflow-hidden p-0">
        {rows.map((r, i) => {
          const hasSubs = Boolean(subconceptsFor(r.key));
          const canOpen = openable(r);
          const label = hasSubs ? "Learn" : teachingPackFor(r.key) ? "Practise" : canOpen ? "Practise" : null;
          return (
            <button
              key={r.key}
              type="button"
              disabled={!canOpen}
              onClick={() => openTopic(r)}
              className={`flex w-full items-center gap-3 px-4 py-3 text-left ${canOpen ? "" : "opacity-60"}`}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] font-bold text-body">
                {i + 1}
              </span>
              <span className="min-w-0 flex-1 text-sm text-ink">
                <Sci>{r.topic}</Sci>
              </span>
              {label ? (
                <span className={`flex shrink-0 items-center gap-1 text-xs font-bold ${hasSubs ? "text-accent" : "text-guarantee"}`}>
                  {label}
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
