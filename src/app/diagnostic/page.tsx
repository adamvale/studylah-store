import type { Metadata } from "next";
import Link from "next/link";
import { LEVELS, PUBLISHED_LEVELS, subjectsForLevel, type Level } from "@/lib/catalogue";
import { listDiagnosticSets } from "@/lib/diagnostic-questions";
import { realTopCalls } from "@/lib/forecast-tables";
import { TierPill } from "@/components/heat";

export const metadata: Metadata = {
  alternates: { canonical: "/diagnostic" },
  title: "Predict your mark — the exam-readiness check",
  description:
    "Ten auto-marked questions across the most-likely topics for your 2026 paper. Instant score, an indicative grade band, worked solutions, and a fix plan.",
};

export default function DiagnosticIndexPage() {
  const hasSet = new Set(listDiagnosticSets().map((s) => `${s.level}/${s.slug}`));

  // Group by level, in catalogue order — one dropdown per level.
  const groups = PUBLISHED_LEVELS.map((level) => ({
    level,
    subjects: subjectsForLevel(level)
      .filter((s) => hasSet.has(`${level}/${s.slug}`))
      .map((s) => ({
        slug: s.slug,
        name: s.name,
        top: realTopCalls(level, s.slug, 1)[0],
      })),
  })).filter((g) => g.subjects.length > 0);

  return (
    <div className="mx-auto max-w-2xl px-4 py-14">
      <p className="font-mono text-xs font-medium uppercase tracking-wide text-accent">
        Free · 10 questions · 7:00 on the clock
      </p>
      <h1 className="mt-2 font-display text-4xl font-black text-ink">
        Predict your mark on the topics most likely to show up
      </h1>
      <p className="mt-3 text-body">
        Our forecast ranks every topic on your 2026 paper. This check mixes ten
        quick questions across your subject&apos;s VERY HIGH and HIGH calls —
        marked instantly, with an indicative grade band for those topics and
        worked solutions after.
      </p>

      <h2 className="mt-8 font-display text-lg font-bold text-ink">
        Pick your subject
      </h2>
      <div className="mt-3 space-y-3">
        {groups.map(({ level, subjects }) => (
          <details
            key={level}
            open={level === "o-level" || undefined}
            className="group rounded-2xl border border-hairline bg-surface"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4">
              <span className="font-display text-lg font-bold text-ink">
                {LEVELS[level as Level].name}
              </span>
              <span className="flex items-center gap-3 text-xs text-body">
                {subjects.length} subjects
                <span
                  aria-hidden="true"
                  className="transition-transform group-open:rotate-180"
                >
                  ▾
                </span>
              </span>
            </summary>
            <div className="space-y-2 border-t border-hairline px-4 py-4">
              {subjects.map(({ slug, name, top }) => (
                <Link
                  key={slug}
                  href={`/diagnostic/${level}/${slug}`}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-hairline bg-night px-4 py-3 transition-colors hover:border-accent"
                >
                  <span className="font-medium text-ink">{name}</span>
                  <span className="flex items-center gap-2">
                    {top && <TierPill tier={top.tier} />}
                    <span aria-hidden="true" className="text-accent">
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </details>
        ))}
      </div>

      <p className="mt-6 text-xs text-body/80">
        The grade shown is an estimate from a 10-question sample on the
        most-likely topics — not a promise of your actual result.
      </p>
    </div>
  );
}
