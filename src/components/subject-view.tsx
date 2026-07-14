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
import { packPreviewFor } from "@/lib/pack-previews";
import { DisclaimerBox } from "./disclaimer";
import { PackPreview } from "./pack-preview";
import { ExamCountdown } from "./exam-countdown";
import { SubjectStickyCta } from "./subject-sticky-cta";
import { TierSelector } from "./tier-selector";

export async function SubjectView({ subject }: { subject: Subject }) {
  const pricing = await getPricing();
  const { alacartePrice } = pricing;
  const copy = subjectCopy(subject.level, subject.slug);
  const products = productsForSubject(subject);
  const packPreview = packPreviewFor(subject.level, subject.slug);

  const title = copy
    ? `${subject.name} ${copy.syllabusCode}`
    : subject.name;

  // Product rich-result markup: puts the price in Google's snippet.
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${subject.name}, 2026 Exam Forecast pack (${LEVELS[subject.level].shortName})`,
    description:
      "Data-driven 2026 exam forecast, original practice questions and a full timed rehearsal. Independent publisher, not affiliated with SEAB, MOE, or Cambridge.",
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
          Know what&apos;s likely, drill exactly that, and sit a full mock before
          the real {LEVELS[subject.level].name} {subject.name} paper, so 2026 feels
          familiar, not frightening.
        </p>
      )}

      {/* Bundle upsell right under the title, most students sit several
          subjects, and the per-subject price drops the more they add. */}
      <Link
        href="/bundles"
        className="mt-4 flex max-w-2xl items-center gap-3 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm transition-colors hover:bg-accent/20"
      >
        <span className="text-ink">
          Sitting more than one subject?{" "}
          <span className="font-bold text-accent">Build a bundle</span>, the more
          you pick, the cheaper each one gets (save up to S$188).
        </span>
        <span aria-hidden="true" className="ml-auto shrink-0 font-bold text-accent">
          →
        </span>
      </Link>

      {/* 2026 Exam Insight, a full-width section right below the bundle upsell. */}
      {copy && copy.headlineCalls.length > 0 && (
        <section className="mt-10 rounded-2xl border border-hairline bg-surface p-6">
          <h2 className="font-display text-2xl font-black text-accent sm:text-3xl">
            2026 Exam Insight
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-body">
            What the model is calling for the 2026 {subject.name} paper.
            Forecasts, not fixtures, every claim is charted inside the Exam
            Forecast.
          </p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {copy.headlineCalls.map((call, i) => (
              <li
                key={call.title}
                className="rounded-xl border border-hairline bg-night-2/40 p-4"
              >
                <p className="font-mono text-xs font-bold text-accent">
                  No.{i + 1}
                </p>
                <p className="mt-1 text-sm font-semibold text-ink">{call.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-body">
                  {call.body}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-accent/40 bg-surface p-5">
            <p className="font-display text-base font-bold text-ink">
              The full picture is a 40+ page Exam Forecast.
            </p>
            <p className="mt-1 text-xs leading-relaxed text-body">
              Every {subject.name} topic ranked by its 2026 probability, the
              highest-chance sections mapped in detail, and 100s of original
              practice questions built to train you on exactly those. Know
              what&apos;s likely, then drill it.
            </p>
            <Link
              href="#tiers"
              className="mt-3 inline-block rounded-lg bg-accent px-4 py-2 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
            >
              See what&apos;s inside →
            </Link>
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
                className="card-hover rounded-2xl border border-hairline bg-surface p-5"
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

      {packPreview && (
        <PackPreview preview={packPreview} subjectName={subject.name} />
      )}

      <div id="tiers" className="mt-12 scroll-mt-24">
        <TierSelector
          level={subject.level}
          subjectSlug={subject.slug}
          subjectName={subject.name}
        />
      </div>

      {/* The value stack: what a purchase actually is, in one glance. */}
      <div className="card-hover reveal mt-4 rounded-2xl border border-hairline bg-surface p-6">
        <p className="font-display text-lg font-bold text-ink">
          This isn&apos;t just PDFs. It&apos;s your child&apos;s{" "}
          <span className="text-accent">calmest month</span> before the paper.
        </p>
        <ul className="mt-3 space-y-2 text-sm">
          <li className="flex gap-3">
            <span aria-hidden="true" className="text-accent">1.</span>
            <span className="text-body">
              <span className="font-medium text-ink">Know what&apos;s coming</span>{" "}
, every {subject.name} topic ranked into four confidence tiers for 2026.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden="true" className="text-accent">2.</span>
            <span className="text-body">
              <span className="font-medium text-ink">Practise exactly that</span>{" "}
, original exam-style questions with full answer keys, weighted to
              the forecast.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden="true" className="text-accent">3.</span>
            <span className="text-body">
              <span className="font-medium text-ink">Bank the method marks</span>{" "}
, the companion covers the paper or skill strand most students
              under-rehearse.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden="true" className="text-accent">4.</span>
            <span className="text-body">
              <span className="font-medium text-ink">Sit it before you sit it</span>{" "}
, a complete timed mock in the exact 2026 format, with mark scheme.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden="true" className="text-accent">5.</span>
            <span className="text-body">
              <span className="font-medium text-ink">
                And with Master, Study<span className="text-accent">Land</span> runs it all daily
              </span>{" "}
, three questions a day on your top-tier topics, a mistake notebook
              that re-tests you until you clear it, a live Marks-at-Risk meter,
              skill drills, exam timers, and a printable rescue plan. An
              early-access beta, no subscription.
            </span>
          </li>
        </ul>
        <p className="mt-4 border-t border-hairline pt-3 text-xs text-body">
          One-time purchase, works until exam day, less than the cost of a
          single tuition session, and it never cancels on you.
        </p>
      </div>

      {copy && (
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body">
          <span className="font-medium text-ink">The Complete Pack.</span>{" "}
          {copy.completePack}
        </p>
      )}

      <div className="reveal glow-soft mt-12 flex flex-col gap-4 rounded-2xl bg-indigo p-6 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl font-bold">
            Don&apos;t stop at {subject.name}.
          </p>
          <p className="mt-1 text-sm text-white/80">
            The more subjects you bundle, the cheaper each one gets, {" "}
            {subject.level === "o-level"
              ? "any 3 Master subjects for S$168 (save S$36), up to S$188 off a full stack"
              : "a ~17% discount on any 3, scaling up the more you add"}
            . Every subject also feeds one combined StudyLand plan.
          </p>
        </div>
        <Link
          href="/bundles"
          className="cta-sheen shrink-0 rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-bold text-night transition-opacity hover:opacity-90"
        >
          Build your bundle →
        </Link>
      </div>

      {/* Honesty-first disclaimer sits at the very bottom of the page. */}
      <div className="mt-8">
        <DisclaimerBox />
      </div>

      <SubjectStickyCta
        level={subject.level}
        subjectSlug={subject.slug}
        subjectName={subject.name}
      />
    </div>
  );
}
