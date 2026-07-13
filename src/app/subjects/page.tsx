import type { Metadata } from "next";
import Link from "next/link";
import { LEVELS, PUBLISHED_LEVELS, type Level } from "@/lib/catalogue";
import { LevelCatalogue } from "@/components/level-catalogue";

export const metadata: Metadata = {
  alternates: { canonical: "/subjects" },
  title: "Subjects — O-Level (G3) & N(A)-Level (G2)",
  description:
    "AI exam forecasts, original practice questions, and timed rehearsals. Switch between O-Level (G3) and N(A)-Level (G2) subjects.",
};

export default async function SubjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ level?: string }>;
}) {
  const { level: requested } = await searchParams;
  const active: Level =
    requested && PUBLISHED_LEVELS.includes(requested as Level)
      ? (requested as Level)
      : "o-level";

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-bold text-ink">Subjects</h1>

      {/* Level switcher — O-Level (G3) | N(A)-Level (G2), default O-Level */}
      <div
        role="tablist"
        aria-label="Choose a level"
        className="mt-5 inline-flex gap-1 rounded-xl border border-hairline bg-surface p-1"
      >
        {PUBLISHED_LEVELS.map((level) => {
          const isActive = level === active;
          const href = level === "o-level" ? "/subjects" : `/subjects?level=${level}`;
          return (
            <Link
              key={level}
              href={href}
              role="tab"
              aria-selected={isActive}
              scroll={false}
              className={`rounded-lg px-4 py-2 text-center text-sm font-bold transition-colors ${
                isActive
                  ? "bg-accent text-night"
                  : "text-cloud hover:bg-night-2 hover:text-white"
              }`}
            >
              <span className="block font-mono text-[10px] font-medium tracking-wide opacity-70">
                {LEVELS[level].code}
              </span>
              {LEVELS[level].name}
            </Link>
          );
        })}
      </div>

      <div className="mt-8">
        <LevelCatalogue level={active} embedded />
      </div>
    </div>
  );
}
