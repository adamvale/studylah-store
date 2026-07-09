import type { Metadata } from "next";
import { EmailCaptureForm } from "@/components/email-capture";
import { HeatBar } from "@/components/heat";
import { topForecast } from "@/lib/topics";

export const metadata: Metadata = {
  title: "Free Top 5 heatmap",
  description:
    "The five most likely topics for your subject, free. See how StudyLah forecasts work before you buy.",
};

export default function FreeHeatmapPage() {
  const teaser = topForecast("physics", "free-heatmap/teaser");
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
        </div>
        <div className="rounded-2xl border border-hairline bg-surface p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <p className="font-display text-base font-bold text-ink">
              What you&apos;ll get
            </p>
            <span className="rounded-full bg-trust-soft px-2.5 py-1 font-mono text-xs font-medium text-trust">
              Sample
            </span>
          </div>
          <div className="mt-5 space-y-3">
            {teaser.map((row, i) => (
              <HeatBar
                key={row.topic}
                topic={row.topic}
                probability={row.probability}
                delayMs={i * 120}
                masked={i > 0}
              />
            ))}
          </div>
          <p className="mt-5 border-t border-hairline pt-3 font-mono text-xs text-body">
            Your PDF shows all five tiers, unmasked
          </p>
        </div>
      </div>
    </div>
  );
}
