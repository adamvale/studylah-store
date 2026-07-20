"use client";

import { useState } from "react";
import Link from "next/link";
import type { Level } from "@/lib/catalogue";

export interface SubjectCard {
  name: string;
  slug: string;
  category: "Science" | "Humanities" | "Math" | "Others";
  hottest: string;
}

const CATEGORIES = ["Science", "Humanities", "Math", "Others"] as const;

// Category-filtered subject grid. The tab bar sticks to the top on mobile so it
// stays reachable while the list scrolls. VERY HIGH tier pills are gone; each
// card ends in a "See what's included" button into the subject page.
export function SubjectBrowser({
  cards,
  masterPrice,
  savings,
  level,
}: {
  cards: SubjectCard[];
  masterPrice: string;
  savings: string;
  level: Level;
}) {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("Science");
  const shown = cards.filter((c) => c.category === cat);
  return (
    <>
      <div className="sticky top-16 z-20 mt-8 border-b border-hairline bg-night/95 py-3 backdrop-blur sm:static sm:border-0 sm:bg-transparent sm:py-0 sm:backdrop-blur-none">
        <div className="flex gap-2 overflow-x-auto">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                c === cat
                  ? "bg-accent text-night"
                  : "border border-hairline bg-surface text-body hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((s) => (
          <div
            key={s.slug}
            className="flex flex-col rounded-2xl border border-hairline bg-surface p-5"
          >
            <h2 className="font-display text-lg font-bold text-accent">
              {s.name}
            </h2>
            {s.hottest && (
              <p className="mt-2 text-sm text-body">
                Hottest topic:{" "}
                <span className="font-medium text-ink">{s.hottest}</span>
              </p>
            )}
            <p className="mt-3 font-mono text-sm text-ink">
              Ultra {masterPrice}{" "}
              <span className="text-guarantee">· save {savings}</span>
            </p>
            <Link
              href={`/${level}/${s.slug}`}
              className="mt-4 inline-block self-start rounded-full border border-guarantee/60 px-5 py-2 text-sm font-bold text-guarantee transition-colors hover:bg-guarantee/10"
            >
              See what&apos;s included →
            </Link>
          </div>
        ))}
        {shown.length === 0 && (
          <p className="text-body">No subjects in this category yet.</p>
        )}
      </div>
    </>
  );
}
