"use client";

import { useState } from "react";
import Link from "next/link";
import { Sci } from "@/components/sci-text";
import { IconBook } from "@/components/icons";

// "My Subjects" on the Today dashboard: every owned subject as a tappable row.
// Tap a subject and its full topic list unfolds, so the student can see the
// whole map of what a paper covers at a glance. Topics are read-only here; the
// deeper study tools live one tap further in (the subject's study checklist).

export interface MySubject {
  level: string;
  slug: string;
  name: string;
  code: string | null;
  topics: string[];
}

export function MySubjects({ subjects }: { subjects: MySubject[] }) {
  const [open, setOpen] = useState<string | null>(null);
  if (subjects.length === 0) return null;

  return (
    <section className="mt-4">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-display text-sm font-bold text-ink">My Subjects</h3>
        <span className="text-xs text-body">{subjects.length} in your plan</span>
      </div>
      <div className="glass-deep divide-y divide-white/10 overflow-hidden p-0">
        {subjects.map((s) => {
          const key = `${s.level}/${s.slug}`;
          const isOpen = open === key;
          return (
            <div key={key}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : key)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-3 px-4 py-3 text-left"
              >
                <span className="icon-orb shrink-0 text-accent" aria-hidden>
                  <IconBook size={18} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-display text-sm font-bold text-ink">
                    {s.name}
                  </span>
                  <span className="block text-xs text-body">
                    {s.topics.length} topic{s.topics.length === 1 ? "" : "s"}
                    {s.code ? ` · ${s.code}` : ""}
                  </span>
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className={`shrink-0 text-body transition-transform ${isOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {isOpen && (
                <div className="px-4 pb-4">
                  {s.topics.length === 0 ? (
                    <p className="text-xs text-body">Topics for this subject are being added.</p>
                  ) : (
                    <ol className="space-y-1.5">
                      {s.topics.map((t, i) => (
                        <li key={i} className="flex gap-2 text-sm text-body">
                          <span className="w-5 shrink-0 text-right font-display text-xs font-bold text-accent">
                            {i + 1}
                          </span>
                          <span className="text-ink">
                            <Sci>{t}</Sci>
                          </span>
                        </li>
                      ))}
                    </ol>
                  )}
                  <Link
                    href="/account/study"
                    className="mt-3 inline-block text-xs font-bold text-accent hover:underline"
                  >
                    Open study checklist →
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
