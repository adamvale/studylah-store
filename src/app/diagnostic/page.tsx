import type { Metadata } from "next";
import Link from "next/link";
import { getSubject, LEVELS, type Level } from "@/lib/catalogue";
import { listDiagnosticSets } from "@/lib/diagnostic-questions";
import { realTopCalls } from "@/lib/forecast-tables";
import { TierPill } from "@/components/heat";

export const metadata: Metadata = {
  alternates: { canonical: "/diagnostic" },
  title: "Am I Ready? — the 60-second exam-readiness check",
  description:
    "Five auto-marked questions on the single most-likely topic for your 2026 paper. Instant readiness score, worked solutions, and a fix plan.",
};

export default function DiagnosticIndexPage() {
  const available = listDiagnosticSets()
    .map(({ level, slug }) => ({
      level: level as Level,
      slug,
      subject: getSubject(level as Level, slug),
      top: realTopCalls(level, slug, 1)[0],
    }))
    .filter((s) => s.subject);

  return (
    <div className="mx-auto max-w-2xl px-4 py-14">
      <p className="font-mono text-xs font-medium uppercase tracking-wide text-accent">
        Free · 60 seconds · no sign-up to start
      </p>
      <h1 className="mt-2 font-display text-4xl font-black text-ink">
        Am I ready for the topic that&apos;s most likely to show up?
      </h1>
      <p className="mt-3 text-body">
        Our forecast ranks every topic on your 2026 paper. This check takes the
        single highest-confidence call for your subject and asks you five quick
        questions on it — marked instantly. You&apos;ll know in a minute whether
        the most-likely topic is a banker or a leak.
      </p>

      <h2 className="mt-8 font-display text-lg font-bold text-ink">
        Pick your subject
      </h2>
      <div className="mt-3 space-y-2">
        {available.map(({ level, slug, subject, top }) => (
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
                  Tests: {top.topic}
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

      <p className="mt-6 rounded-xl border border-hairline bg-surface px-4 py-3 text-sm text-body">
        More subjects are being added — each check is built on that
        subject&apos;s own 2026 prediction table. Want yours next? Tell us:{" "}
        <a
          href="mailto:hello@studylah.education"
          className="font-medium text-accent underline"
        >
          hello@studylah.education
        </a>
      </p>
    </div>
  );
}
