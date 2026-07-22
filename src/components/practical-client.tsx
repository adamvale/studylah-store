"use client";

import { useEffect, useState } from "react";
import { NamedIcon, type IconName } from "@/components/icons";
import { LessonPlayer } from "@/components/lesson-player";
import { TutorChat, type TutorStart } from "@/components/tutor-chat";
import type { LessonStep } from "@/lib/lesson-steps";

// Practical Lab: interactive lessons that train the science PRACTICAL paper,
// on the same engine as Life Skills, plus a Guru lab coach for the subjects the
// student owns. Works on web and in the app (no camera or mic needed).

interface Lesson { key: string; title: string; minutes: number; steps: LessonStep[]; talkPrompt: string | null }
interface Subject { slug: string; name: string; icon: IconName; tint: string; lessons: Lesson[] }
interface OwnedSubject { slug: string; level: "o-level" | "na-level"; family: string; name: string }

export function PracticalClient({ owned }: { owned: OwnedSubject[] }) {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [done, setDone] = useState<Set<string>>(new Set());
  const [subject, setSubject] = useState<Subject | null>(null);
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [finished, setFinished] = useState(false);
  const [chat, setChat] = useState<TutorStart | null>(null);

  useEffect(() => {
    fetch("/api/account/game/practical")
      .then((r) => r.json())
      .then((d) => {
        setSubjects(d.subjects ?? []);
        setDone(new Set(d.completed ?? []));
      })
      .catch(() => {});
  }, []);

  async function markDone(l: Lesson) {
    setDone((s) => new Set(s).add(l.key));
    try {
      await fetch("/api/account/game/practical", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonKey: l.key }),
      });
    } catch {
      /* optimistic */
    }
  }

  // The owned subject (if any) whose family matches this practical subject, so
  // Guru can coach the practical of a subject the student actually owns.
  const ownedFor = (slug: string) => owned.find((o) => o.family === slug);

  if (chat) {
    return (
      <div className="mt-4">
        <TutorChat start={chat} onClose={() => setChat(null)} />
      </div>
    );
  }

  if (lesson && subject) {
    const match = ownedFor(subject.slug);
    // Active lesson: hand the whole viewport to the focused player so every
    // step is one screenload with Continue pinned to the bottom.
    if (!finished) {
      return (
        <LessonPlayer
          steps={lesson.steps}
          title={lesson.title}
          subtitle={subject.name}
          onExit={() => setLesson(null)}
          onComplete={() => { void markDone(lesson); setFinished(true); }}
        />
      );
    }
    return (
      <div className="mt-4">
        <button type="button" onClick={() => setLesson(null)} className="text-xs font-bold text-accent">
          ← {subject.name}
        </button>
        <h2 className="mt-2 font-display text-2xl font-black text-ink">{lesson.title}</h2>
        <p className="text-xs text-body">About {lesson.minutes} min</p>
        <div className="mt-6 space-y-4">
            <div className="glass bg-gradient-to-br from-guarantee/15 to-transparent p-5 text-center">
              <span className="icon-orb mx-auto text-guarantee" aria-hidden>
                <NamedIcon name="check" size={22} />
              </span>
              <p className="mt-3 font-display text-lg font-bold text-ink">Lesson complete</p>
              <p className="mt-1 text-sm text-body">That is a real practical mark you can now bank.</p>
            </div>
            <div className="flex gap-2">
              {lesson.talkPrompt && match && (
                <button
                  type="button"
                  onClick={() => setChat({ kind: "subject", topicKey: match.slug, level: match.level, seed: `We are practising the ${subject.name}. ${lesson.talkPrompt}`, title: `${match.name} practical` })}
                  className="flex-1 rounded-xl bg-accent py-3 text-sm font-bold text-night"
                >
                  Ask Guru
                </button>
              )}
              <button
                type="button"
                onClick={() => { setLesson(null); setFinished(false); }}
                className="flex-1 rounded-xl border border-hairline py-3 text-sm font-bold text-ink"
              >
                Back to {subject.name}
              </button>
            </div>
        </div>
      </div>
    );
  }

  if (subject) {
    return (
      <div className="mt-4">
        <button type="button" onClick={() => setSubject(null)} className="text-xs font-bold text-accent">
          ← All Practical Lab
        </button>
        <h2 className="mt-2 font-display text-2xl font-black text-ink">{subject.name}</h2>
        <div className="mt-4 space-y-2">
          {subject.lessons.map((l) => (
            <button
              key={l.key}
              type="button"
              onClick={() => { setLesson(l); setFinished(false); }}
              className="glass flex w-full items-center gap-3 bg-gradient-to-br from-white/5 to-transparent p-3 text-left"
            >
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${done.has(l.key) ? "bg-guarantee/20 text-guarantee" : "bg-white/10 text-body"}`}>
                {done.has(l.key) ? <NamedIcon name="check" size={14} /> : String(l.minutes)}
              </span>
              <span className="text-sm font-medium text-ink">{l.title}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const total = subjects.reduce((n, s) => n + s.lessons.length, 0);
  const completed = subjects.reduce((n, s) => n + s.lessons.filter((l) => done.has(l.key)).length, 0);
  return (
    <div className="mt-5">
      {total > 0 && (
        <p className="mb-3 text-xs text-body">
          {completed} of {total} practical lessons done. The lab paper rewards technique, and technique is trainable.
        </p>
      )}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {subjects.map((s) => {
          const sdone = s.lessons.filter((l) => done.has(l.key)).length;
          return (
            <button
              key={s.slug}
              type="button"
              onClick={() => setSubject(s)}
              className={`glass bg-gradient-to-br p-4 text-left ${s.tint}`}
            >
              <span className="icon-orb text-accent" aria-hidden>
                <NamedIcon name={s.icon} size={20} />
              </span>
              <p className="mt-3 font-display text-base font-bold text-ink">{s.name}</p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-wide text-accent">
                {sdone}/{s.lessons.length} done
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
