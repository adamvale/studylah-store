import type { Metadata } from "next";
import Link from "next/link";
import { LEVELS, PUBLISHED_LEVELS, subjectsForLevel, type Level } from "@/lib/catalogue";
import { LevelCatalogue } from "@/components/level-catalogue";

export const metadata: Metadata = {
  alternates: { canonical: "/subjects" },
  title: "O Level & N Level Subjects 2026: Chemistry, Physics, Biology & More",
  description:
    "2026 exam preparation for every Singapore-Cambridge O-Level (G3) and N(A)-Level (G2) subject: Chemistry, Physics, Biology, Maths, humanities and POA. Topic predictions, practice questions and timed mock papers.",
  keywords: [
    "O Level subjects Singapore",
    "N Level subjects Singapore",
    "O Level Chemistry 2026",
    "O Level Physics 2026",
    "O Level Biology 2026",
    "N Level Chemistry",
    "N Level Physics",
    "N Level Biology",
    "O Level revision Singapore",
    "predicted topics 2026",
  ],
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

  // Every subject page as an ItemList so search engines see the full
  // catalogue from the hub in one hop.
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "StudyLah 2026 exam preparation subjects",
    itemListElement: PUBLISHED_LEVELS.flatMap((level) =>
      subjectsForLevel(level).map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${LEVELS[level].shortName} ${s.name}`,
        url: `https://www.studylah.education/${level}/${s.slug}`,
      }))
    ).map((item, i) => ({ ...item, position: i + 1 })),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <h1 className="font-display text-4xl font-bold text-ink">
        O-Level &amp; N(A)-Level subjects, 2026
      </h1>

      {/* Level switcher, O-Level (G3) | N(A)-Level (G2), default O-Level */}
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
