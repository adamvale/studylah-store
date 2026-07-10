import Link from "next/link";
import {
  LEVELS,
  PRODUCTS,
  productBlurbFor,
  productFilesFor,
  productNameFor,
  productTaglineFor,
  productsForSubject,
  sgd,
  type Subject,
} from "@/lib/catalogue";
import { getPricing } from "@/lib/server/pricing-store";
import { subjectCopy } from "@/lib/subject-copy";
import { realTopCalls } from "@/lib/forecast-tables";
import { getDiagnosticSet } from "@/lib/diagnostic-questions";
import { DisclaimerBox } from "./disclaimer";
import { ExamCountdown } from "./exam-countdown";
import { HeatBar } from "./heat";
import { SubjectStickyCta } from "./subject-sticky-cta";
import { TierSelector } from "./tier-selector";

export async function SubjectView({ subject }: { subject: Subject }) {
  // The preview shows the subject's REAL top calls from its Forecast PDF's
  // 2026 prediction table — No. 1 in the open, the rest masked.
  const forecast = realTopCalls(subject.level, subject.slug, 4);
  const pricing = await getPricing();
  const { alacartePrice } = pricing;
  const copy = subjectCopy(subject.level, subject.slug);
  const products = productsForSubject(subject);

  const title = copy
    ? `${subject.name} ${copy.syllabusCode}`
    : subject.name;

  // Product rich-result markup: puts the price in Google's snippet.
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${subject.name} — 2026 Exam Forecast pack (${LEVELS[subject.level].shortName})`,
    description:
      "Data-driven 2026 exam forecast, original practice questions and a full timed rehearsal. Independent publisher — not affiliated with SEAB, MOE, or Cambridge.",
    brand: { "@type": "Brand", name: "StudyLah" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "SGD",
      lowPrice: pricing.tierPrice(subject.level, "essential"),
      highPrice: pricing.tierPrice(subject.level, "master"),
      availability: "https://schema.org/InStock",
      url: `https://www.studylah.education/${subject.level}/${subject.slug}`,
    },
  };
  const accuracyAnchor = `${subject.level}-${subject.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "StudyLah",
        item: "https://www.studylah.education/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: LEVELS[subject.level].name,
        item: `https://www.studylah.education/${subject.level}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: subject.name,
        item: `https://www.studylah.education/${subject.level}/${subject.slug}`,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-body">
        <Link href={`/${subject.level}`} className="hover:underline">
          {LEVELS[subject.level].name}
        </Link>{" "}
        <span aria-hidden="true">/</span>{" "}
        <span className="text-ink">{subject.name}</span>
      </nav>
      <h1 className="mt-2 font-display text-4xl font-black tracking-tight text-ink">
        {title}
      </h1>
      <ExamCountdown className="mt-3" />

      {/* One quantified claim leads the page. A single claim reads as analysis;
          stacked claims read as advertising. */}
      {copy ? (
        <blockquote className="mt-4 max-w-2xl border-l-4 border-accent pl-4 font-display text-xl font-bold leading-snug text-ink">
          &ldquo;{copy.heroHook}&rdquo;
        </blockquote>
      ) : (
        <p className="mt-2 max-w-xl text-body">
          Forecast, practice, and rehearsal for the {LEVELS[subject.level].name}{" "}
          {subject.name} paper — the 2026 sitting.
        </p>
      )}

      {copy && (
        <p className="mt-3 max-w-2xl rounded-lg bg-trust-soft px-4 py-2.5 text-sm text-trust">
          {copy.syllabusChecker}
        </p>
      )}

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-hairline bg-surface p-5">
            <div className="flex items-center justify-between">
              <p className="font-display text-base font-bold text-ink">
                Forecast preview
              </p>
              <span className="rounded-full bg-trust-soft px-2.5 py-1 font-mono text-xs font-medium text-accent">
                2026
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {forecast.slice(0, 1).map((row) => (
                <HeatBar key={row.topic} topic={row.topic} tier={row.tier} />
              ))}
              {/* Masked rows carry NO real data — a topic key or prop would
                  leak the call into the serialized RSC payload. */}
              {forecast.slice(1, 4).map((_row, i) => (
                <HeatBar
                  key={`masked-${i}`}
                  topic=""
                  delayMs={(i + 1) * 120}
                  masked
                />
              ))}
            </div>
            <p className="mt-4 border-t border-hairline pt-3 font-mono text-xs text-body">
              Every topic tiered — Very High to Watch — in the Forecast PDF
            </p>
            <Link
              href={`/accuracy?open=${accuracyAnchor}#${accuracyAnchor}`}
              className="mt-2 inline-block text-xs font-medium text-accent hover:underline"
            >
              See how we scored on {subject.name} in 2025 →
            </Link>
          </div>

          {getDiagnosticSet(subject.level, subject.slug) && (
            <div className="mt-4 rounded-2xl border border-accent/40 bg-surface p-5">
              <p className="font-display text-base font-bold text-ink">
                You know it&apos;s likely — but can you score it?
              </p>
              <p className="mt-1 text-xs text-body">
                Ten auto-marked questions across the top forecast calls —
                instant score and an indicative grade band.
              </p>
              <Link
                href={`/diagnostic/${subject.level}/${subject.slug}`}
                className="mt-3 inline-block rounded-lg bg-accent px-4 py-2 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
              >
                Predict your mark →
              </Link>
            </div>
          )}

          {copy && copy.headlineCalls.length > 0 && (
            <div className="mt-4 rounded-2xl border border-hairline bg-surface p-5">
              <h2 className="font-display text-base font-bold text-ink">
                What the model is calling for 2026
              </h2>
              <p className="mt-0.5 text-xs text-body">
                Forecasts, not fixtures. Every claim is charted inside the Exam
                Forecast.
              </p>
              <ul className="mt-3 space-y-3">
                {copy.headlineCalls.map((call) => (
                  <li key={call.title}>
                    <p className="text-sm font-medium text-ink">{call.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-body">
                      {call.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-4">
            <DisclaimerBox />
          </div>
        </div>

        <div className="space-y-4 lg:col-span-3">
          {products.map((key) => {
            const product = PRODUCTS[key];
            const pc = copy?.products[key];
            const fileCount = productFilesFor(subject, key).length;
            return (
              <div
                key={key}
                className="rounded-2xl border border-hairline bg-surface p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs font-medium text-teal">
                      {product.day}
                      {fileCount > 1 && ` · ${fileCount} PDFs`}
                    </p>
                    <h2 className="mt-0.5 font-display text-lg font-bold text-ink">
                      {productNameFor(subject, key)}
                    </h2>
                    <p className="text-sm font-medium text-accent">
                      {productTaglineFor(subject, key)}
                    </p>
                  </div>
                  <p className="shrink-0 font-mono text-lg font-medium text-accent">
                    {sgd(alacartePrice(subject.level, key))}
                  </p>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-body">
                  {pc?.blurb ?? productBlurbFor(subject, key)}
                </p>

                {pc && (
                  <>
                    <ul className="mt-3 space-y-1.5">
                      {pc.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-sm text-body">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-guarantee"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-xs text-body">
                      <span className="font-medium text-ink">
                        Who it&apos;s for:
                      </span>{" "}
                      {pc.whoFor}
                    </p>
                    <p className="mt-1 text-xs text-body">
                      <span className="font-medium text-ink">Pairs with:</span>{" "}
                      {pc.crossSell}
                    </p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12">
        <TierSelector
          level={subject.level}
          subjectSlug={subject.slug}
          subjectName={subject.name}
        />
      </div>

      {copy && (
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body">
          <span className="font-medium text-ink">The Complete Pack.</span>{" "}
          {copy.completePack}
        </p>
      )}

      <div className="mt-12 flex flex-col gap-4 rounded-2xl bg-indigo p-6 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl font-bold">
            Taking {subject.name} and two more subjects?
          </p>
          <p className="mt-1 text-sm text-white/80">
            The Mega-Bundle prices any 3 Master subjects at{" "}
            {subject.level === "o-level" ? "S$168 — save S$36" : "a ~17% discount"}.
          </p>
        </div>
        <Link
          href="/bundles"
          className="shrink-0 rounded-lg bg-signal px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-signal-deep"
        >
          Build your bundle
        </Link>
      </div>

      <SubjectStickyCta
        level={subject.level}
        subjectSlug={subject.slug}
        subjectName={subject.name}
      />
    </div>
  );
}
