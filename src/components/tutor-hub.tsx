"use client";

import { useEffect, useState } from "react";
import { useNativePlatform } from "@/lib/native";
import { NamedIcon } from "@/components/icons";
import { TutorChat, type TutorStart } from "@/components/tutor-chat";

interface OwnedSubject {
  slug: string;
  name: string;
  level: "o-level" | "na-level";
}
interface Schedule {
  id: string;
  topicKey: string;
  label: string;
  weekday: number;
  hourSg: number;
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function TutorHub({ subjects }: { subjects: OwnedSubject[] }) {
  const native = useNativePlatform();
  const [active, setActive] = useState<TutorStart | null>(null);
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [showSched, setShowSched] = useState(false);
  const [form, setForm] = useState({ slug: subjects[0]?.slug ?? "", weekday: 5, hourSg: 20 });

  // Deep-link from a push reminder: ?start=subject:chemistry-pure:o-level
  useEffect(() => {
    if (native === null) return;
    const raw = new URLSearchParams(window.location.search).get("start");
    if (!raw) return;
    const [kind, topicKey, level] = raw.split(":");
    if (kind === "subject") {
      const s = subjects.find((x) => x.slug === topicKey);
      if (s) setActive({ kind: "subject", topicKey: s.slug, level: s.level, title: s.name });
    }
  }, [native, subjects]);

  useEffect(() => {
    if (native === null) return;
    fetch("/api/account/game/tutor-schedule")
      .then((r) => r.json())
      .then((d) => setSchedules(d.schedules ?? []))
      .catch(() => {});
  }, [native]);

  async function addSchedule() {
    const subject = subjects.find((s) => s.slug === form.slug);
    if (!subject) return;
    const res = await fetch("/api/account/game/tutor-schedule", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "subject",
        topicKey: subject.slug,
        level: subject.level,
        label: subject.name,
        weekday: form.weekday,
        hourSg: form.hourSg,
      }),
    });
    const d = await res.json();
    if (d.schedule) setSchedules((s) => [...s, d.schedule]);
  }

  async function removeSchedule(id: string) {
    await fetch(`/api/account/game/tutor-schedule?id=${id}`, { method: "DELETE" });
    setSchedules((s) => s.filter((x) => x.id !== id));
  }

  if (native === null) {
    return (
      <div className="glass mt-6 bg-gradient-to-br from-sky-500/20 to-violet-600/10 p-6 text-center">
        <span className="icon-orb mx-auto text-accent" aria-hidden>
          <NamedIcon name="chat" size={22} />
        </span>
        <p className="mt-3 font-display text-lg font-bold text-ink">Open the StudyLah app</p>
        <p className="mt-1 text-sm text-body">
          Your Guru tutor lives in the StudyLah app. Open StudyLand there to start a session.
        </p>
      </div>
    );
  }

  if (active) {
    return (
      <div className="mt-4">
        <TutorChat start={active} onClose={() => setActive(null)} />
      </div>
    );
  }

  return (
    <div className="mt-5 space-y-5">
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-body">Start a session</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {subjects.map((s) => (
            <button
              key={`${s.level}/${s.slug}`}
              type="button"
              onClick={() => setActive({ kind: "subject", topicKey: s.slug, level: s.level, title: s.name })}
              className="glass bg-gradient-to-br from-sky-400/15 to-violet-600/10 p-3 text-left"
            >
              <span className="icon-orb text-accent" aria-hidden>
                <NamedIcon name="chat" size={16} />
              </span>
              <p className="mt-2 text-sm font-bold text-ink">{s.name}</p>
              <p className="text-[11px] text-body">Teach, practise, mark my work</p>
            </button>
          ))}
        </div>
        {subjects.length === 0 && (
          <p className="mt-2 text-sm text-body">Enrol in a subject to study with its Guru.</p>
        )}
      </div>

      <div>
        <button
          type="button"
          onClick={() => setShowSched((v) => !v)}
          className="flex w-full items-center justify-between text-xs font-bold uppercase tracking-wide text-body"
        >
          <span>Weekly sessions ({schedules.length})</span>
          <span className="text-accent">{showSched ? "Hide" : "Set up"}</span>
        </button>

        {showSched && (
          <div className="mt-2 space-y-3">
            <p className="text-xs text-body">
              Guru sends a reminder to start a session at the time you pick, like a standing tuition slot.
            </p>
            {schedules.map((s) => (
              <div key={s.id} className="flex items-center justify-between rounded-xl border border-hairline px-3 py-2 text-sm">
                <span className="text-ink">
                  {s.label}, {DAYS[s.weekday]} {String(s.hourSg).padStart(2, "0")}:00
                </span>
                <button type="button" onClick={() => removeSchedule(s.id)} className="text-xs font-bold text-signal">
                  Remove
                </button>
              </div>
            ))}
            {subjects.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 rounded-xl border border-hairline p-3">
                <select
                  value={form.slug}
                  onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
                  className="rounded-lg border border-hairline bg-surface px-2 py-1.5 text-sm text-ink"
                >
                  {subjects.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.name}</option>
                  ))}
                </select>
                <select
                  value={form.weekday}
                  onChange={(e) => setForm((f) => ({ ...f, weekday: Number(e.target.value) }))}
                  className="rounded-lg border border-hairline bg-surface px-2 py-1.5 text-sm text-ink"
                >
                  {DAYS.map((d, i) => (
                    <option key={d} value={i}>{d}</option>
                  ))}
                </select>
                <select
                  value={form.hourSg}
                  onChange={(e) => setForm((f) => ({ ...f, hourSg: Number(e.target.value) }))}
                  className="rounded-lg border border-hairline bg-surface px-2 py-1.5 text-sm text-ink"
                >
                  {Array.from({ length: 16 }, (_, i) => i + 7).map((h) => (
                    <option key={h} value={h}>{String(h).padStart(2, "0")}:00</option>
                  ))}
                </select>
                <button type="button" onClick={addSchedule} className="rounded-lg bg-accent px-3 py-1.5 text-sm font-bold text-night">
                  Add
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
