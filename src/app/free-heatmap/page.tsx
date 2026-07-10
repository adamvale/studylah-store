import type { Metadata } from "next";
import Link from "next/link";
import { EmailCaptureForm } from "@/components/email-capture";
import { HeatBar } from "@/components/heat";
import { realTopCalls } from "@/lib/forecast-tables";

export const metadata: Metadata = {
  alternates: { canonical: "/free-heatmap" },
  title: "Free Top 5 heatmap",
  description:
    "The five most likely topics for your subject, free. See how StudyLah forecasts work before you buy.",
};

export default function FreeHeatmapPage() {
  const teaser = realTopCalls("o-level", "physics-pure", 5);
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div>
          <p className="inline-block rounded-full bg-guarantee/10 px-3 py-1 font-mono text-xs font-medium text-guarantee">
            Free · no card needed
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-ink">
            The 5 topics most likely on your 2026 paper — free
          </h1>
          <p className="mt-3 max-w-lg text-body">
            Pick your subject. We&apos;ll email you the five topics our model
            rates most likely for 2026, ranked — the same ten-year analysis
            behind the full Exam Forecast. No card, no catch. See exactly how
            good the forecast is before you spend a cent.
          </p>
          <div className="mt-7">
            <EmailCaptureForm source="free-heatmap" showSubjectSelect />
          </div>
          <p className="mt-5 text-xs text-body">
            One email with your PDF, plus occasional revision tips. Unsubscribe
            anytime. We store your consent timestamp as PDPA requires.
          </p>

          <div className="mt-6 rounded-2xl border border-accent/40 bg-surface p-5">
            <p className="font-display text-base font-bold text-ink">
              You know it&apos;s likely — but can you score it?
            </p>
            <p className="mt-1 text-xs text-body">
              The 60-second check: five auto-marked questions on your
              subject&apos;s top forecast call, instant readiness score.
            </p>
            <Link
              href="/diagnostic"
              className="mt-3 inline-block rounded-lg bg-accent px-4 py-2 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
            >
              Take the 60-second check →
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-hairline bg-surface p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <p className="font-display text-base font-bold text-ink">
              What you&apos;ll get
            </p>
            <span className="rounded-full bg-trust-soft px-2.5 py-1 font-mono text-xs font-medium text-accent">
              Sample
            </span>
          </div>
          <div className="mt-5 space-y-3">
            {/* Only the No. 1 call ships to the browser — masked rows carry
                no real data (a topic key/prop would leak via RSC payload). */}
            {teaser.map((row, i) =>
              i === 0 ? (
                <HeatBar key={row.topic} topic={row.topic} tier={row.tier} />
              ) : (
                <HeatBar key={`masked-${i}`} topic="" delayMs={i * 120} masked />
              )
            )}
          </div>
          <p className="mt-5 border-t border-hairline pt-3 font-mono text-xs text-body">
            Your PDF shows all five tiers, unmasked
          </p>
        </div>
      </div>
    </div>
  );
}
