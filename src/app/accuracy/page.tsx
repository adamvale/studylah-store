import type { Metadata } from "next";
import Link from "next/link";
import { averageHitRate, scorecardFor } from "@/lib/accuracy";
import { LEVELS, PUBLISHED_LEVELS, subjectsForLevel } from "@/lib/catalogue";
import { PlaceholderBanner } from "@/components/disclaimer";
import { heatText } from "@/components/heat";

export const metadata: Metadata = {
  title: "Accuracy scorecard",
  description:
    "What StudyLah forecast versus what actually appeared, per subject, published after every sitting — hits and misses included.",
};

export default function AccuracyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-bold text-ink">
        Accuracy scorecard
      </h1>
      <p className="mt-2 max-w-2xl text-body">
        After every sitting, we publish what we forecast against what actually
        appeared — per subject, hits and misses included. A forecast you
        can&apos;t check is just marketing.
      </p>
      <div className="mt-6">
        <PlaceholderBanner label="Placeholder data for design review — real scorecards publish after each sitting. FOR CONTENT REVIEW." />
      </div>

      {PUBLISHED_LEVELS.map((level) => (
        <section key={level} aria-labelledby={`accuracy-${level}`} className="mt-12">
          <h2 id={`accuracy-${level}`} className="font-display text-2xl font-bold text-ink">
            {LEVELS[level].name}
          </h2>
          <p className="mt-1 text-sm text-body">
            Average hit rate across subjects, 2025: {averageHitRate(level)}%
          </p>
          <div className="mt-4 space-y-3">
            {subjectsForLevel(level).map((subject) => {
              const years = scorecardFor(subject);
              return (
                <details
                  key={subject.slug}
                  className="group rounded-2xl border border-hairline bg-surface"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4">
                    <span className="font-display font-bold text-ink">
                      {subject.name}
                    </span>
                    <span className="flex items-center gap-4">
                      {years.map((y) => (
                        <span key={y.year} className="text-sm text-body">
                          {y.year}:{" "}
                          <span className={`font-mono font-medium ${heatText(y.hitRate)}`}>
                            {y.hitRate}%
                          </span>
                        </span>
                      ))}
                      <span
                        aria-hidden="true"
                        className="text-body transition-transform group-open:rotate-180"
                      >
                        ▾
                      </span>
                    </span>
                  </summary>
                  <div className="grid gap-6 border-t border-hairline px-5 py-4 md:grid-cols-2">
                    {years.map((y) => (
                      <div key={y.year}>
                        <p className="font-mono text-sm font-medium text-trust">
                          {y.year} sitting · top-5 forecast
                        </p>
                        <table className="mt-2 w-full text-sm">
                          <thead>
                            <tr className="text-left text-xs text-body">
                              <th scope="col" className="py-1.5 pr-2 font-medium">
                                Forecast topic
                              </th>
                              <th scope="col" className="py-1.5 pr-2 font-medium">
                                We said
                              </th>
                              <th scope="col" className="py-1.5 font-medium">
                                Appeared
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {y.rows.map((row) => (
                              <tr key={row.topic} className="border-t border-hairline">
                                <td className="py-1.5 pr-2 text-body">{row.topic}</td>
                                <td className={`py-1.5 pr-2 font-mono ${heatText(row.forecastProbability)}`}>
                                  {row.forecastProbability}%
                                </td>
                                <td className="py-1.5">
                                  {row.appeared ? (
                                    <span className="font-medium text-guarantee">Yes</span>
                                  ) : (
                                    <span className="font-medium text-heat-5">No</span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        </section>
      ))}

      <p className="mt-10 max-w-2xl text-sm text-body">
        Missed forecasts are covered by the{" "}
        <Link href="/faq" className="font-medium text-trust underline">
          money-back guarantee
        </Link>
        . Forecasts are probabilities, not certainties — that&apos;s exactly why
        this page exists.
      </p>
    </div>
  );
}
