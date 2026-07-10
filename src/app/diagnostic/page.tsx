import type { Metadata } from "next";
import Link from "next/link";
import { getSubject, LEVELS, type Level } from "@/lib/catalogue";
import { listDiagnosticSets } from "@/lib/diagnostic-questions";
import { realTopCalls } from "@/lib/forecast-tables";
import { TierPill } from "@/components/heat";

export const metadata: Metadata = {
  alternates: { canonical: "/diagnostic" },
  title: "Am I Ready? — the quick exam-readiness check",
  description:
    "Five auto-marked questions mixed across the most-likely topics for your 2026 paper. Instant readiness score, worked solutions, and a fix plan.",
};

export default function DiagnosticIndexPage() {
  const available = listDiagnosticSets()
    .map(({ level, slug, topicLabel }) => ({
      level: level as Level,
      slug,
      topicLabel,
      subject: getSubject(level as Level, slug),
      top: realTopCalls(level, slug, 1)[0],
    }))
    .filter((s) => s.subject);

  return (
    <div className="mx-auto max-w-2xl px-4 py-14">
      <p className="font-mono text-xs font-medium uppercase tracking-wide text-accent">
        Free · quick check · no sign-up to start
      </p>
      <h1 className="mt-2 font-display text-4xl font-black text-ink">
        Am I ready for the topic that&apos;s most likely to show up?
      </h1>
      <p className="mt-3 text-body">
        Our forecast ranks every topic on your 2026 paper. This check mixes five quick questions across your subject&apos;s VERY HIGH calls — marked instantly. You&apos;ll know in minutes whether the most-likely topics are bankers or leaks.
      </p>

      <h2 className="mt-8 font-display text-lg font-bold text-ink">
        Pick your subject
      </h2>
      <div className="mt-3 space-y-2">
        {available.map(({ level, slug, topicLabel, subject, top }) => (
          <Link
            key={`${level}/${slug}`}
            href={`/diagnostic/${level}/${slug}`}
            className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-hairline bg-surface px-5 py-4 transition-colors hover:border-accent"
          >
            <span>
              <span className="font-display font-bold text-ink">{subject!.name}</span>
              <span className="ml-2 font-mono text-xs text-body">
                {LEVELS[level].shortName}
              </span>
              {top && (
                <span className="mt-1 block text-xs text-body">
                  {topicLabel}
                </span>
              )}
            </span>
            <span className="flex items-center gap-2">
              {top && <TierPill tier={top.tier} />}
              <span aria-hidden="true" className="text-accent">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>

    </div>
  );
}
