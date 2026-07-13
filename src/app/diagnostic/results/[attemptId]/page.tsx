import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getSubject, type Level } from "@/lib/catalogue";
import { getQuestionSet } from "@/lib/server/question-bank";
import { realTopCalls } from "@/lib/forecast-tables";
import { STANDARD_DISCLAIMER } from "@/lib/compliance";
import {
  BAND_COPY,
  ctaFor,
  ESTIMATE_CAVEAT,
  gradeEstimateFor,
  type Band,
  type GradedAnswer,
} from "@/lib/server/diagnostic";
import type { DiagnosticProduct } from "@/lib/diagnostic-questions";
import { serverConfig } from "@/lib/server/config";
import { HeatBar, TierPill } from "@/components/heat";
import { GuaranteeBadge } from "@/components/guarantee-badge";
import {
  CtaLink,
  ResendButton,
  ResultsViewedBeacon,
  ShareRow,
} from "@/components/diagnostic-results-actions";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Your readiness results",
};

const BAND_CLS: Record<Band, string> = {
  danger: "text-coral",
  warning: "text-accent",
  pass: "text-guarantee",
};

export default async function DiagnosticResultsPage({
  params,
}: {
  params: Promise<{ attemptId: string }>;
}) {
  const { attemptId } = await params;
  const attempt = await prisma.diagnosticAttempt.findUnique({ where: { id: attemptId } });
  if (!attempt) notFound();
  // The gate is server-enforced: no unlock, no solutions.
  if (!attempt.unlockedAt) redirect(`/diagnostic/${attempt.level}/${attempt.slug}`);

  const set = await getQuestionSet(attempt.level, attempt.slug);
  const subject = getSubject(attempt.level as Level, attempt.slug);
  if (!set || !subject) notFound();

  const graded = JSON.parse(attempt.answersJson) as GradedAnswer[];
  // Loss frame: how many marks slipped on the topics forecast most likely.
  const droppedMarks = graded
    .filter((g) => !g.correct)
    .reduce((sum, g) => sum + g.marks, 0);
  const band = attempt.band as Band;
  const cta = ctaFor(band, (attempt.weakness as DiagnosticProduct | null) ?? null);
  const estimate = gradeEstimateFor(attempt.level, attempt.score, attempt.totalMarks);
  const top = realTopCalls(attempt.level, attempt.slug, 1)[0];

  // Referral line: known buyers get their live link.
  const buyer = await prisma.$queryRaw<Array<{ referralCode: string | null }>>`
    SELECT "referralCode" FROM "Customer" WHERE email = ${attempt.email ?? ""} COLLATE NOCASE LIMIT 1
  `;
  const refCode = buyer[0]?.referralCode ?? null;

  const shareUrl = `${serverConfig.siteUrl}/diagnostic/r/${attempt.id}?utm_source=share&utm_medium=social&utm_campaign=diagnostic${refCode ? `&ref=${refCode}` : ""}`;
  const shareMessage = `My mark check on the most-likely ${subject.name} topics for 2026: ${attempt.score}/${attempt.totalMarks} — ${estimate} territory. What would you score?`;

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <ResultsViewedBeacon attemptId={attempt.id} />

      <p className="font-mono text-xs text-body">
        {subject.name} · {attempt.topic}
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <p className={`font-display text-5xl font-black ${BAND_CLS[band]}`}>
          {attempt.score}/{attempt.totalMarks}
        </p>
        {top && <TierPill tier={top.tier} />}
      </div>
      <h1 className="mt-3 font-display text-3xl font-black text-ink">
        {BAND_COPY[band].title}
      </h1>
      <p className="mt-2 max-w-xl text-body">{BAND_COPY[band].line}</p>
      <p className="mt-4 max-w-xl rounded-xl border border-hairline bg-surface px-4 py-3 text-sm text-ink">
        Indicative grade on these topics:{" "}
        <span className="font-display text-lg font-bold text-accent">{estimate}</span>
        <span className="mt-1 block text-xs text-body/80">{ESTIMATE_CAVEAT}</span>
      </p>

      {/* Per-question breakdown with worked solutions */}
      <div className="mt-8 space-y-3">
        {set.questions.map((q, i) => {
          const g = graded.find((x) => x.questionId === q.id);
          const ok = g?.correct ?? false;
          return (
            <details
              key={q.id}
              open={!ok}
              className="group rounded-2xl border border-hairline bg-surface"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4">
                <span className="text-sm font-medium text-ink">
                  Q{i + 1} · {q.marks} mark{q.marks === 1 ? "" : "s"}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    ok ? "bg-guarantee/15 text-guarantee" : "bg-coral/15 text-coral"
                  }`}
                >
                  {ok ? `${q.marks}/${q.marks}` : `0/${q.marks} — marks dropped`}
                </span>
              </summary>
              <div className="border-t border-hairline px-5 py-4 text-sm">
                <p className="text-ink">{q.stem}</p>
                {!ok && g?.given && (
                  <p className="mt-2 text-body">
                    Your answer:{" "}
                    <span className="text-coral">
                      {q.type === "mcq" && q.options
                        ? (q.options[Number(g.given)] ?? g.given)
                        : g.given}
                    </span>
                  </p>
                )}
                <p className="mt-2 leading-relaxed text-body">
                  <span className="font-medium text-guarantee">Worked solution: </span>
                  {q.workedSolution}
                </p>
              </div>
            </details>
          );
        })}
      </div>

      {/* Free topic heatmap — the giveaway, now delivered with your result */}
      <section className="mt-8 rounded-2xl border border-hairline bg-surface p-6">
        <p className="font-mono text-xs font-medium uppercase tracking-wide text-accent">
          Your free topic heatmap
        </p>
        <h2 className="mt-2 font-display text-lg font-bold text-ink">
          The 5 topics most likely on your 2026 {subject.name} paper
        </h2>
        <div className="mt-4 space-y-3">
          {realTopCalls(attempt.level, attempt.slug, 5).map((row) => (
            <HeatBar key={row.topic} topic={row.topic} tier={row.tier} />
          ))}
        </div>
        <p className="mt-4 border-t border-hairline pt-3 text-xs text-body">
          Every topic — Very High to Watch — is ranked in the full Exam Forecast,
          with a ten-year deep dive on each.
        </p>
      </section>

      {/* Tailored fix plan — the sales close. Leads with the loss frame (what
          these gaps would cost in November), then the exact fix, made risk-free
          by the guarantee and anchored against the price of tuition. */}
      <section className="mt-8 rounded-2xl border border-accent/40 bg-surface p-6">
        <p className="font-mono text-xs font-medium uppercase tracking-wide text-accent">
          Your fix plan
        </p>
        {droppedMarks > 0 && (
          <p className="mt-2 text-sm text-ink">
            On this sample you dropped{" "}
            <span className="font-display text-lg font-bold text-coral">
              {droppedMarks} mark{droppedMarks === 1 ? "" : "s"}
            </span>{" "}
            on topics forecast most likely for your 2026 {subject.name} paper —
            marks that are still recoverable now, not in the exam hall.
          </p>
        )}
        <h2 className="mt-2 font-display text-2xl font-bold text-ink">{cta.headline}</h2>
        <p className="mt-2 text-sm text-body">{cta.body}</p>
        <div className="mt-4">
          <CtaLink
            attemptId={attempt.id}
            product={cta.product}
            href={`/${attempt.level}/${attempt.slug}`}
          >
            See {subject.name} packs →
          </CtaLink>
        </div>
        <GuaranteeBadge variant="card" className="mt-4" />
        <p className="mt-3 text-xs text-body">
          One-time purchase, less than a single tuition session, and it works
          right up to exam day. New here? Use{" "}
          <span className="font-mono font-medium text-accent">STUDYLAH10</span>{" "}
          for 10% off your first pack.
        </p>
      </section>

      {/* Share */}
      <section className="mt-8 rounded-2xl border border-hairline bg-surface p-6">
        <h2 className="font-display text-lg font-bold text-ink">
          Challenge a friend
        </h2>
        <p className="mt-1 text-sm text-body">&ldquo;{shareMessage}&rdquo;</p>
        <div className="mt-4">
          <ShareRow attemptId={attempt.id} shareUrl={shareUrl} message={shareMessage} />
        </div>
      </section>

      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-body">
        <ResendButton attemptId={attempt.id} />
        <Link href={`/diagnostic/${attempt.level}/${attempt.slug}`} className="underline">
          Retake the check
        </Link>
        <Link href="/accuracy" className="underline">
          Our published hits and misses
        </Link>
      </div>

      <p className="mt-3 text-xs text-body">
        Refer a friend — you both get S$15.{" "}
        {refCode ? (
          <>
            Your link:{" "}
            <span className="font-mono text-accent">
              {serverConfig.siteUrl}/?ref={refCode}
            </span>
          </>
        ) : (
          <>
            Your code lives in{" "}
            <Link href="/account/referrals" className="font-medium text-accent underline">
              your account
            </Link>{" "}
            once you&apos;re a customer.
          </>
        )}
      </p>

      <p className="mt-8 border-t border-hairline pt-4 text-xs leading-relaxed text-body/80">
        {STANDARD_DISCLAIMER}
      </p>
    </div>
  );
}
