import Link from "next/link";
import {
  LEVELS,
  sgd,
  subjectsForLevel,
  type Level,
} from "@/lib/catalogue";
import { getPricing } from "@/lib/server/pricing-store";
import { realTopCalls } from "@/lib/forecast-tables";
import { TierPill } from "./heat";

export async function LevelCatalogue({
  level,
  embedded = false,
}: {
  level: Level;
  // When rendered under the /subjects tab switcher, drop this component's own
  // level heading and the "browse the other level" footer, the tabs own both.
  embedded?: boolean;
}) {
  const subjects = subjectsForLevel(level);
  const other: Level = level === "o-level" ? "na-level" : "o-level";
  const { earlyBird, tierPrice, tierSavings, tierValue } = await getPricing();
  const masterPrice = tierPrice(level, "master");

  return (
    <div className={embedded ? "" : "mx-auto max-w-6xl px-4 py-12"}>
      {!embedded && (
        <>
          <p className="font-mono text-xs font-medium text-body">{LEVELS[level].code}</p>
          <h1 className="mt-1 font-display text-4xl font-bold text-ink">
            {LEVELS[level].name}
          </h1>
        </>
      )}
      <p className="max-w-xl text-body">
        {subjects.length} subjects, three PDFs each. Master tier gets you all
        three for {sgd(masterPrice)}, a saving of{" "}
        {sgd(tierValue(level, "master") - masterPrice)} per subject.
        {earlyBird && " Early-bird pricing is on."}
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => {
          const hottest = realTopCalls(level, subject.slug, 1)[0];
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
                <TierPill tier={hottest.tier} />
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
            The more subjects, the less each one costs.
          </p>
          <p className="mt-1 text-sm text-white/80">
            Bundle 3+ and the per-subject price drops automatically, Mega-Bundle
            and All-In pricing save up to S$188.
          </p>
        </div>
        <Link
          href="/bundles"
          className="shrink-0 rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-bold text-night transition-opacity hover:opacity-90"
        >
          Build your bundle →
        </Link>
      </div>
      {!embedded && (
        <p className="mt-8 text-sm text-body">
          Sitting the {LEVELS[other].shortName} instead?{" "}
          <Link href={`/${other}`} className="font-medium text-accent underline">
            Browse {LEVELS[other].name} subjects
          </Link>
        </p>
      )}
    </div>
  );
}
