"use client";

import { useState } from "react";
import Link from "next/link";
import { GRADE_OPTIONS, meetsTarget } from "@/lib/grades";
import type { Level } from "@/lib/catalogue";

export interface GoalSubject {
  level: Level;
  slug: string;
  name: string;
  levelShort: string;
  target: string; // "" = none set
  estimate: string | null; // latest "Predict your mark" estimate, if any
}

export function SubjectGoals({ initial }: { initial: GoalSubject[] }) {
  const [subjects, setSubjects] = useState<GoalSubject[]>(initial);

  async function setTarget(level: Level, slug: string, target: string) {
    const prev = subjects;
    setSubjects((list) =>
      list.map((s) => (s.level === level && s.slug === slug ? { ...s, target } : s))
    );
    try {
      const res = await fetch("/api/account/goals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ level, slug, targetGrade: target }),
      });
      if (!res.ok) throw new Error();
    } catch {
      setSubjects(prev);
    }
  }

  if (subjects.length === 0) return null;

  return (
    <section className="rounded-2xl border border-hairline bg-surface p-5">
      <h3 className="font-display text-lg font-bold text-ink">Your grade goals</h3>
      <p className="mt-1 text-sm text-body">
        Set a target per subject. Your latest &ldquo;Predict your mark&rdquo;
        estimate shows how far there is to go.
      </p>
      <ul className="mt-4 space-y-3">
        {subjects.map((s) => {
          const onTrack = s.target && s.estimate && meetsTarget(s.level, s.estimate, s.target);
          return (
            <li
              key={`${s.level}/${s.slug}`}
              className="rounded-xl border border-hairline bg-night px-4 py-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm text-ink">
                  {s.name}
                  <span className="ml-2 font-mono text-xs text-body">{s.levelShort}</span>
                </span>
                <label className="flex items-center gap-2 text-xs text-body">
                  Target
                  <select
                    value={s.target}
                    onChange={(e) => void setTarget(s.level, s.slug, e.target.value)}
                    className="rounded-lg border border-hairline bg-surface px-2 py-1 text-sm text-ink outline-none focus:border-accent"
                  >
                    <option value="">—</option>
                    {GRADE_OPTIONS[s.level].map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {s.target && (
                <p className="mt-2 text-xs">
                  {!s.estimate ? (
                    <span className="text-body">
                      Aiming for {s.target}.{" "}
                      <Link href={`/diagnostic/${s.level}/${s.slug}`} className="font-medium text-accent hover:underline">
                        Take a check to see your gap →
                      </Link>
                    </span>
                  ) : onTrack ? (
                    <span className="text-guarantee">
                      On track — estimating {s.estimate}, target {s.target} ✓ Keep it warm.
                    </span>
                  ) : (
                    <span className="text-body">
                      Now estimating <span className="text-ink">{s.estimate}</span>, aiming for{" "}
                      <span className="text-ink">{s.target}</span>. Close it on your VERY HIGH
                      topics — the{" "}
                      <Link href={`/${s.level}/${s.slug}`} className="font-medium text-accent hover:underline">
                        Sure Questions Vault
                      </Link>{" "}
                      drills exactly these.
                    </span>
                  )}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
