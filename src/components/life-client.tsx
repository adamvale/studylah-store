"use client";

import { useEffect, useState } from "react";
import { useNativePlatform } from "@/lib/native";
import { NamedIcon, type IconName } from "@/components/icons";
import { TutorChat, type TutorStart } from "@/components/tutor-chat";
import { LessonPlayer } from "@/components/lesson-player";
import { PageHeading } from "@/components/page-heading";
import type { LessonStep } from "@/lib/lesson-steps";

// The Life Skills wing: ten tracks on one lesson player. Cards to read, a
// "mark done" that earns XP, and "talk it through" that opens a Guru role-play
// chat seeded with the lesson. Native app only.

interface Lesson { key: string; title: string; minutes: number; steps: LessonStep[]; talkPrompt: string | null }
interface Track { key: string; name: string; blurb: string; icon: IconName; tint: string; lessons: Lesson[] }

export function LifeClient() {
  const native = useNativePlatform();
  const [tracks, setTracks] = useState<Track[]>([]);
  const [done, setDone] = useState<Set<string>>(new Set());
  const [track, setTrack] = useState<Track | null>(null);
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [finished, setFinished] = useState(false);
  const [chat, setChat] = useState<TutorStart | null>(null);

  useEffect(() => {
    if (native === null) return;
    fetch("/api/account/game/life")
      .then((r) => r.json())
      .then((d) => {
        setTracks(d.tracks ?? []);
        setDone(new Set(d.completed ?? []));
      })
      .catch(() => {});
  }, [native]);

  async function markDone(l: Lesson) {
    setDone((s) => new Set(s).add(l.key));
    try {
      await fetch("/api/account/game/life", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonKey: l.key }),
      });
    } catch {
      /* optimistic; ignore */
    }
  }

  if (native === null) {
    return (
      <div className="glass mt-6 bg-gradient-to-br from-emerald-500/20 to-violet-600/10 p-6 text-center">
        <span className="icon-orb mx-auto text-accent" aria-hidden>
          <NamedIcon name="sparkle" size={22} />
        </span>
        <p className="mt-3 font-display text-lg font-bold text-ink">Open the StudyLah app</p>
        <p className="mt-1 text-sm text-body">Life Skills lives in the StudyLah app. Open StudyLand there.</p>
      </div>
    );
  }

  if (chat) {
    return (
      <div className="mt-4">
        <TutorChat start={chat} onClose={() => setChat(null)} />
      </div>
    );
  }

  // Interactive lesson player
  if (lesson && track) {
    // Active lesson: focused full-viewport player, Continue pinned to the
    // bottom so every step is a single screenload.
    if (!finished) {
      return (
        <LessonPlayer
          steps={lesson.steps}
          title={lesson.title}
          subtitle={track.name}
          onExit={() => setLesson(null)}
          onComplete={() => { void markDone(lesson); setFinished(true); }}
        />
      );
    }
    return (
      <div className="mt-4">
        <button type="button" onClick={() => setLesson(null)} className="text-xs font-bold text-accent">
          ← {track.name}
        </button>
        <h2 className="mt-2 font-display text-2xl font-black text-ink">{lesson.title}</h2>
        <p className="text-xs text-body">About {lesson.minutes} min</p>
        <div className="mt-6 space-y-4">
            <div className="glass bg-gradient-to-br from-guarantee/15 to-transparent p-5 text-center">
              <span className="icon-orb mx-auto text-guarantee" aria-hidden>
                <NamedIcon name="check" size={22} />
              </span>
              <p className="mt-3 font-display text-lg font-bold text-ink">Lesson complete</p>
              <p className="mt-1 text-sm text-body">Nice work. Want to take it further with Guru?</p>
            </div>
            <div className="flex gap-2">
              {lesson.talkPrompt && (
                <button
                  type="button"
                  onClick={() => setChat({ kind: "life", topicKey: track.key, seed: lesson.talkPrompt!, title: track.name })}
                  className="flex-1 rounded-xl bg-accent py-3 text-sm font-bold text-night"
                >
                  Talk it through with Guru
                </button>
              )}
              <button
                type="button"
                onClick={() => { setLesson(null); setFinished(false); }}
                className="flex-1 rounded-xl border border-hairline py-3 text-sm font-bold text-ink"
              >
                Back to {track.name}
              </button>
            </div>
        </div>
      </div>
    );
  }

  // Track view
  if (track) {
    return (
      <div className="mt-4">
        <button type="button" onClick={() => setTrack(null)} className="text-xs font-bold text-accent">
          ← All Life Skills
        </button>
        <div className="mt-2">
          <PageHeading size="sm" description={track.blurb}>{track.name}</PageHeading>
        </div>
        <div className="mt-4 space-y-2">
          {track.lessons.map((l) => (
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

  // Hub
  const total = tracks.reduce((n, t) => n + t.lessons.length, 0);
  const completed = tracks.reduce((n, t) => n + t.lessons.filter((l) => done.has(l.key)).length, 0);
  return (
    <div className="mt-5">
      {total > 0 && (
        <p className="mb-3 text-xs text-body">
          {completed} of {total} lessons done. School teaches subjects, this builds you.
        </p>
      )}
      <div className="grid grid-cols-2 gap-3">
        {tracks.map((t) => {
          const tdone = t.lessons.filter((l) => done.has(l.key)).length;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setTrack(t)}
              className={`glass relative overflow-hidden bg-gradient-to-br p-4 text-left ${t.tint}`}
            >
              <span className="icon-orb text-accent" aria-hidden>
                <NamedIcon name={t.icon} size={20} />
              </span>
              <p className="mt-3 font-display text-base font-bold text-ink">{t.name}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-body">{t.blurb}</p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-wide text-accent">
                {tdone}/{t.lessons.length} done
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
