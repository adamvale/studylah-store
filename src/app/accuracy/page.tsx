import type { Metadata } from "next";
import Link from "next/link";
import { getSubject, LEVELS, type Level } from "@/lib/catalogue";
import { SUBJECT_MARKS, highOrAbove } from "@/lib/accuracy-data";
import { TierPill } from "@/components/heat";

export const metadata: Metadata = {
  title: "Accuracy scorecard",
  description:
    "The five highest-mark topics in each real O-Level and N(A)-Level paper — and the confidence tier StudyLah forecast for each. Hits and misses, per subject.",
};

export default function AccuracyPage() {
  const entries = Object.entries(SUBJECT_MARKS)
    .map(([key, data]) => {
      const [level, slug] = key.split("/") as [Level, string];
      return { key, level, slug, subject: getSubject(level, slug), data };
    })
    .filter((e) => e.subject);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-display text-4xl font-bold text-ink">
        Accuracy scorecard
      </h1>
      <p className="mt-3 max-w-2xl text-body">
        After every sitting we line up the five biggest-mark topics on the paper
        with the confidence tier we forecast for each. Hits and misses, in the
        open. A forecast you can&apos;t check is just marketing.
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-body">
        <span className="font-medium text-ink">Confidence tiers:</span>
        <TierPill tier="very-high" />
        <TierPill tier="high" />
        <TierPill tier="moderate" />
        <TierPill tier="watch" />
      </div>

      <div className="mt-10 space-y-3">
        {entries.map(({ key, level, subject, data }) => (
          <details
            key={key}
            className="group rounded-2xl border border-hairline bg-surface"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4">
              <span className="font-display font-bold text-ink">
                {subject!.name}
                <span className="ml-2 font-mono text-xs font-normal text-body">
                  {LEVELS[level].shortName}
                </span>
              </span>
              <span className="flex items-center gap-4">
                {data.years.map((y) => {
                  const pct = Math.round(
                    (highOrAbove(y.topics) / y.topics.length) * 100
                  );
                  return (
                    <span key={y.year} className="text-sm text-body">
                      {y.year}:{" "}
                      <span
                        className={`font-mono font-medium ${
                          pct >= 80 ? "text-accent-deep" : "text-accent"
                        }`}
                      >
                        {pct}%
                      </span>
                    </span>
                  );
                })}
                <span
                  aria-hidden="true"
                  className="text-body transition-transform group-open:rotate-180"
                >
                  ▾
                </span>
              </span>
            </summary>

            <div className="grid gap-6 border-t border-hairline px-5 py-4 md:grid-cols-2">
              {data.years.map((y) => {
                const hp = highOrAbove(y.topics);
                return (
                  <div key={y.year}>
                    <p className="font-mono text-sm font-medium text-accent">
                      {y.year} sitting · top 5 by mark allocation
                    </p>
                    <table className="mt-2 w-full text-sm">
                      <thead>
                        <tr className="text-left text-xs text-body">
                          <th scope="col" className="py-1.5 pr-3 font-medium">
                            Top 5 Mark Allocation
                          </th>
                          <th scope="col" className="py-1.5 pr-2 font-medium">
                            Topic
                          </th>
                          <th
                            scope="col"
                            className="py-1.5 text-right font-medium"
                          >
                            We forecast
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {y.topics.map((t, i) => (
                          <tr key={t.topic} className="border-t border-hairline">
                            <td className="whitespace-nowrap py-2 pr-3 font-mono text-sm font-medium text-ink">
                              No. {i + 1}
                            </td>
                            <td className="py-2 pr-2 text-body">{t.topic}</td>
                            <td className="py-2 text-right">
                              <TierPill tier={t.tier} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="mt-3 border-t border-hairline pt-3 text-xs text-body">
                      We forecast{" "}
                      <span className="font-semibold text-ink">{hp} of 5</span>{" "}
                      High or above.
                    </p>
                  </div>
                );
              })}
            </div>
          </details>
        ))}
      </div>

      <p className="mt-12 max-w-2xl text-sm text-body">
        More subjects publish here as each 2025 and 2024 paper is scored.
        Forecasts are probabilities, not certainties — where a high-mark topic
        was tiered only Moderate or Watch, it shows above, and it&apos;s covered
        by the{" "}
        <Link href="/faq" className="font-medium text-accent underline">
          money-back guarantee
        </Link>
        .
      </p>
    </div>
  );
}
