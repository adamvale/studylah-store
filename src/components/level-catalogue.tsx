import Link from "next/link";
import {
  LEVELS,
  sgd,
  subjectsForLevel,
  type Level,
} from "@/lib/catalogue";
import { getPricing } from "@/lib/server/pricing-store";
import { realTopCalls } from "@/lib/forecast-tables";
import { SubjectBrowser, type SubjectCard } from "./subject-browser";

function categoryFor(family: string): SubjectCard["category"] {
  if (["chemistry", "physics", "biology"].includes(family)) return "Science";
  if (["emath", "amath"].includes(family)) return "Math";
  if (["geography", "history", "social-studies"].includes(family))
    return "Humanities";
  return "Others";
}

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
  const { earlyBird, tierPrice, tierSavings } = await getPricing();
  const masterPrice = tierPrice(level, "master");
  const savings = tierSavings(level, "master");

  const cards: SubjectCard[] = subjects.map((subject) => ({
    name: subject.name,
    slug: subject.slug,
    category: categoryFor(subject.family),
    hottest: realTopCalls(level, subject.slug, 1)[0]?.topic ?? "",
  }));

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
      <p className="max-w-2xl text-body">
        Every subject is <span className="font-semibold text-ink">4 PDFs</span>:
        40+ pages of exam intelligence, 100s of original high-probability
        practice questions, full worked answers and a timed rehearsal. The{" "}
        <span className="font-semibold text-ink">Master</span> tier bundles all
        four for {sgd(masterPrice)},{" "}
        <span className="text-guarantee">{sgd(savings)} less</span> than buying
        them apart.
        {earlyBird && " Early-bird pricing is on."}
      </p>

      <SubjectBrowser
        cards={cards}
        masterPrice={sgd(masterPrice)}
        savings={sgd(savings)}
        level={level}
      />
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
