import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSubject, LEVELS, PUBLISHED_LEVELS, type Level } from "@/lib/catalogue";
import { sanitizeSet } from "@/lib/diagnostic-questions";
import { getQuestionSet } from "@/lib/server/question-bank";
import { realTopCalls } from "@/lib/forecast-tables";
import { DiagnosticQuiz } from "@/components/diagnostic-quiz";
import { TierPill } from "@/components/heat";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ level: string; slug: string }>;
}): Promise<Metadata> {
  const { level, slug } = await params;
  const subject = getSubject(level as Level, slug);
  if (!subject) return {};
  return {
    title: `${subject.name} — predict your mark`,
    description: `Ten auto-marked questions across the most-likely ${subject.name} topics for 2026. Instant score and an indicative grade band; worked solutions after.`,
    alternates: { canonical: `/diagnostic/${level}/${slug}` },
  };
}

export default async function DiagnosticSubjectPage({
  params,
}: {
  params: Promise<{ level: string; slug: string }>;
}) {
  const { level, slug } = await params;
  if (!PUBLISHED_LEVELS.includes(level as Level)) notFound();
  const subject = getSubject(level as Level, slug);
  if (!subject) notFound();

  const set = await getQuestionSet(level, slug);
  const top = realTopCalls(level, slug, 1)[0];

  // Subjects without a question set yet degrade gracefully.
  if (!set) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <h1 className="font-display text-2xl font-bold text-ink">
          The {subject.name} check is on its way
        </h1>
        <p className="mt-3 text-sm text-body">
          We&apos;re writing this subject&apos;s five questions on its top
          forecast call{top ? ` — ${top.topic}` : ""}. Meanwhile, grab the free
          heatmap for {subject.name} or try another subject&apos;s check.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/free-heatmap"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
          >
            Free heatmap
          </Link>
          <Link
            href="/diagnostic"
            className="rounded-lg border border-hairline px-5 py-2.5 text-sm font-medium text-ink hover:border-accent"
          >
            Other subjects
          </Link>
        </div>
      </div>
    );
  }

  const pub = sanitizeSet(set);

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <div className="mb-8 text-center">
        <p className="font-mono text-xs text-body">
          {subject.name} · {LEVELS[level as Level].shortName} · 2026
        </p>
        <h1 className="mt-1 font-display text-2xl font-black text-ink">
          Predict your mark
        </h1>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-2 text-sm text-body">
          Testing: <span className="text-ink">{pub.topicLabel}</span>
          {top && <TierPill tier={top.tier} />}
        </p>
      </div>
      <DiagnosticQuiz
        level={level}
        slug={slug}
        subjectName={subject.name}
        topicLabel={pub.topicLabel}
        questions={pub.questions}
      />
      <p className="mx-auto mt-10 max-w-md text-center text-xs text-body/80">
        The grade shown is an estimate from a 10-question sample on the
        most-likely topics — not a promise of your actual result. Questions are
        original StudyLah practice content built from public past-paper
        patterns.
      </p>
    </div>
  );
}
