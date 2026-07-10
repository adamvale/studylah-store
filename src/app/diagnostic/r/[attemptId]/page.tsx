import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { getSubject, LEVELS, type Level } from "@/lib/catalogue";
import { realTopCalls } from "@/lib/forecast-tables";
import { BAND_COPY, type Band } from "@/lib/server/diagnostic";
import { TierPill } from "@/components/heat";

// Public share landing: the band + score + a challenge CTA. No breakdown, no
// solutions — this page exists to be shared and to start new attempts.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ attemptId: string }>;
}): Promise<Metadata> {
  const { attemptId } = await params;
  const attempt = await prisma.diagnosticAttempt.findUnique({ where: { id: attemptId } });
  if (!attempt) return {};
  const subject = getSubject(attempt.level as Level, attempt.slug);
  return {
    title: `${attempt.score}/${attempt.totalMarks} on the most-likely ${subject?.name ?? ""} topic`,
    description:
      "The quick readiness check: five auto-marked questions across the highest-confidence forecast calls for the 2026 paper. What's your forecast?",
  };
}

export default async function ShareLandingPage({
  params,
}: {
  params: Promise<{ attemptId: string }>;
}) {
  const { attemptId } = await params;
  const attempt = await prisma.diagnosticAttempt.findUnique({ where: { id: attemptId } });
  if (!attempt) notFound();
  const subject = getSubject(attempt.level as Level, attempt.slug);
  if (!subject) notFound();
  const band = attempt.band as Band;
  const top = realTopCalls(attempt.level, attempt.slug, 1)[0];

  return (
    <div className="mx-auto max-w-md px-4 py-16 text-center">
      <p className="font-mono text-xs text-body">
        {subject.name} · {LEVELS[attempt.level as Level].shortName} · most-likely topics
      </p>
      <p className="mt-4 font-display text-6xl font-black text-accent">
        {attempt.score}/{attempt.totalMarks}
      </p>
      <div className="mt-2 flex justify-center">{top && <TierPill tier={top.tier} />}</div>
      <h1 className="mt-4 font-display text-2xl font-bold text-ink">
        {BAND_COPY[band].title}
      </h1>
      <p className="mt-2 text-sm text-body">
        Someone just checked their readiness on {subject.name}&apos;s
        highest-confidence 2026 forecast call. Reckon you&apos;d score higher?
      </p>
      <div className="mt-8">
        <Link
          href={`/diagnostic/${attempt.level}/${attempt.slug}`}
          className="rounded-lg bg-accent px-6 py-3 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
        >
          Take the quick check
        </Link>
      </div>
      <p className="mt-6 text-xs text-body">
        Free · instant marking · readiness on these topics only, not a grade
        prediction
      </p>
    </div>
  );
}
