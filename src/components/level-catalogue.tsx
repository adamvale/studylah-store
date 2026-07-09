import Link from "next/link";
import {
  LEVELS,
  sgd,
  subjectsForLevel,
  type Level,
} from "@/lib/catalogue";
import { getPricing } from "@/lib/server/pricing-store";
import { topForecast } from "@/lib/topics";
import { forecastTier, TierPill } from "./heat";

export async function LevelCatalogue({ level }: { level: Level }) {
  const subjects = subjectsForLevel(level);
  const other: Level = level === "o-level" ? "na-level" : "o-level";
  const { earlyBird, tierPrice, tierSavings, tierValue } = await getPricing();
  const masterPrice = tierPrice(level, "master");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="font-mono text-xs font-medium text-body">{LEVELS[level].code}</p>
      <h1 className="mt-1 font-display text-4xl font-bold text-ink">
        {LEVELS[level].name}
      </h1>
      <p className="mt-2 max-w-xl text-body">
        {subjects.length} subjects, three PDFs each. Master tier gets you all
        three for {sgd(masterPrice)} — a saving of{" "}
        {sgd(tierValue(level, "master") - masterPrice)} per subject.
        {earlyBird && " Early-bird pricing is on."}
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => {
          const hottest = topForecast(subject.family, `${level}/${subject.slug}`)[0];
          return (
            <Link
              key={subject.slug}
              href={`/${level}/${subject.slug}`}
              className="group rounded-2xl border border-hairline bg-surface p-5 transition-shadow hover:shadow-md"
            >
              <h2 className="font-display text-lg font-bold text-accent group-hover:underline">
                {subject.name}
              </h2>
              <p className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-body">
                Hottest topic: {hottest.topic}{" "}
                <TierPill tier={forecastTier(hottest.probability)} />
              </p>
              <p className="mt-3 font-mono text-sm text-ink">
                Master {sgd(masterPrice)}{" "}
                <span className="text-guarantee">
                  · save {sgd(tierSavings(level, "master"))}
                </span>
              </p>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 flex flex-col gap-4 rounded-2xl bg-trust p-6 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl font-bold">
            Taking three or more subjects?
          </p>
          <p className="mt-1 text-sm text-white/80">
            Mega-Bundle and All-In pricing can save you up to S$140.
          </p>
        </div>
        <Link
          href="/bundles"
          className="shrink-0 rounded-lg bg-signal px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-signal-deep"
        >
          Build your bundle
        </Link>
      </div>
      <p className="mt-8 text-sm text-body">
        Sitting the {LEVELS[other].shortName} instead?{" "}
        <Link href={`/${other}`} className="font-medium text-accent underline">
          Browse {LEVELS[other].name} subjects
        </Link>
      </p>
    </div>
  );
}
