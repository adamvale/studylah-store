import Link from "next/link";
import { averageHitRate } from "@/lib/accuracy";
import {
  COMING_SOON,
  JOURNEY_ORDER,
  LEVELS,
  PRODUCTS,
  sgd,
  subjectsForLevel,
} from "@/lib/catalogue";
import type { Pricing } from "@/lib/pricing";
import { getPricing } from "@/lib/server/pricing-store";
import { EmailCaptureForm } from "@/components/email-capture";
import { ForecastCard } from "@/components/forecast-card";
import { HeatTiles } from "@/components/heat";

function Hero({ pricing }: { pricing: Pricing }) {
  const { alacartePrice } = pricing;
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-12 lg:grid-cols-2 lg:pt-20">
      <div className="fade-up">
        <p className="inline-flex items-center gap-2 rounded-full bg-trust-soft px-3 py-1 font-mono text-xs font-medium text-trust">
          <HeatTiles />
          Built from 10 years of real exam data
        </p>
        <h1 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-5xl">
          Walk into the exam knowing what&apos;s coming.
        </h1>
        <p className="mt-4 max-w-lg text-lg text-body">
          AI forecasts of your O-Level and N(A)-Level papers — which topics are
          likely, which questions to practise, and a full rehearsal before the
          real thing. Original questions, written for StudyLah — zero recycled
          past-paper content.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/o-level"
            className="rounded-lg bg-signal px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-signal-deep"
          >
            Browse O-Level subjects
          </Link>
          <Link
            href="/na-level"
            className="rounded-lg border border-trust/25 bg-white px-5 py-3 text-sm font-medium text-trust transition-colors hover:border-trust/50"
          >
            N(A)-Level subjects
          </Link>
        </div>
        <p className="mt-5 text-sm text-body">
          Money-back guarantee · Instant PDF download · From {sgd(alacartePrice("o-level", "forecast"))} per subject
        </p>
      </div>
      <div className="fade-up" style={{ animationDelay: "150ms" }}>
        <ForecastCard />
      </div>
    </section>
  );
}

function Journey({ pricing }: { pricing: Pricing }) {
  const { alacartePrice, tierPrice, tierValue, tierSavings } = pricing;
  const prices = ["essential", "strategic", "master"] as const;
  return (
    <section aria-labelledby="journey-heading" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="font-mono text-xs font-medium uppercase tracking-wide text-signal-deep">
          The revision journey
        </p>
        <h2 id="journey-heading" className="mt-2 font-display text-3xl font-bold text-ink">
          Your last 14 days, planned
        </h2>
        <p className="mt-2 max-w-xl text-body">
          Three PDFs per subject, each built for a different moment in your
          countdown.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {JOURNEY_ORDER.map((key, i) => {
            const product = PRODUCTS[key];
            const tier = prices[i];
            return (
              <div
                key={key}
                className="relative rounded-2xl border border-trust/10 bg-paper p-6"
              >
                <span className="inline-block rounded-full bg-trust px-3 py-1 font-mono text-xs font-medium text-white">
                  {product.day}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-ink">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-signal-deep">
                  {product.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {product.blurb}
                </p>
                <p className="mt-4 font-mono text-sm text-trust">
                  {sgd(alacartePrice("o-level", key))} à la carte · in the{" "}
                  {tier === "essential" ? "Essential" : tier === "strategic" ? "Strategic" : "Master"}{" "}
                  tier from {sgd(tierPrice("o-level", tier))}
                </p>
              </div>
            );
          })}
        </div>
        <p className="mt-6 rounded-xl bg-trust-soft px-4 py-3 text-sm text-trust">
          Get all three with the Master tier — {sgd(tierValue("o-level", "master"))} of
          material for {sgd(tierPrice("o-level", "master"))}, a saving of{" "}
          {sgd(tierSavings("o-level", "master"))} per subject.
        </p>
      </div>
    </section>
  );
}

function LevelEntry({ pricing }: { pricing: Pricing }) {
  const { tierPrice } = pricing;
  return (
    <section aria-labelledby="levels-heading" className="mx-auto max-w-6xl px-4 py-16">
      <h2 id="levels-heading" className="font-display text-3xl font-bold text-ink">
        Find your papers
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {(["o-level", "na-level"] as const).map((level) => (
          <Link
            key={level}
            href={`/${level}`}
            className="group rounded-2xl border border-trust/10 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <p className="font-mono text-xs font-medium text-body">
              {LEVELS[level].code}
            </p>
            <h3 className="mt-1 font-display text-2xl font-bold text-trust group-hover:underline">
              {LEVELS[level].name}
            </h3>
            <p className="mt-2 text-sm text-body">
              {subjectsForLevel(level).length} subjects · from{" "}
              {sgd(tierPrice(level, "essential"))} per subject
            </p>
          </Link>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-body">
        <span>Coming soon:</span>
        {COMING_SOON.map((l) => (
          <Link
            key={l.slug}
            href={`/${l.slug}`}
            className="rounded-full border border-trust/15 bg-white px-3 py-1 text-xs font-medium text-body hover:border-trust/40"
          >
            {l.name} · {l.eta}
          </Link>
        ))}
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section aria-labelledby="trust-heading" className="bg-indigo py-14 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="trust-heading" className="sr-only">
          Why students trust StudyLah
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-4xl font-extrabold text-accent">
              {averageHitRate()}%
            </p>
            <p className="mt-1 text-sm text-white/80">
              average forecast hit rate, 2025 sitting*
            </p>
            <Link
              href="/accuracy"
              className="mt-2 inline-block text-sm font-medium text-accent hover:underline"
            >
              See the full scorecard
            </Link>
          </div>
          <div>
            <p className="font-display text-4xl font-extrabold text-accent">Zero</p>
            <p className="mt-1 text-sm text-white/80">
              recycled past-paper content — every question is written for
              StudyLah
            </p>
          </div>
          <div>
            <p className="font-display text-4xl font-extrabold text-accent">S$ back</p>
            <p className="mt-1 text-sm text-white/80">
              money-back guarantee if the forecast doesn&apos;t deliver.{" "}
              <Link href="/faq" className="font-medium text-accent hover:underline">
                How it works
              </Link>
            </p>
          </div>
        </div>
        <p className="mt-8 text-xs text-white/50">
          *Placeholder figure for preview — the real scorecard publishes after
          every sitting, hits and misses included.
        </p>
      </div>
    </section>
  );
}

const HOW_STEPS = [
  {
    title: "Ingest",
    body: "Ten years of past papers, mark schemes, and every syllabus revision go into the model.",
  },
  {
    title: "Model",
    body: "Topic cycles, mark weightings, and setter patterns become a probability for every topic in your syllabus.",
  },
  {
    title: "Publish",
    body: "You get the forecast. After the sitting, we publish what hit and what missed — in public, every year.",
  },
];

function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="mx-auto max-w-6xl px-4 py-16">
      <h2 id="how-heading" className="font-display text-3xl font-bold text-ink">
        How the forecast works
      </h2>
      <p className="mt-2 max-w-xl text-body">
        Forecasts, not leaks. Probabilities, not promises.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {HOW_STEPS.map((step, i) => (
          <div key={step.title} className="rounded-2xl border border-trust/10 bg-white p-6">
            <p className="font-mono text-sm font-medium text-signal-deep">0{i + 1}</p>
            <h3 className="mt-2 font-display text-lg font-bold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{step.body}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-body">
        A forecast can be wrong — that&apos;s why the{" "}
        <Link href="/accuracy" className="font-medium text-trust underline">
          accuracy scorecard
        </Link>{" "}
        is public and the{" "}
        <Link href="/faq" className="font-medium text-trust underline">
          guarantee
        </Link>{" "}
        is real.
      </p>
    </section>
  );
}

function FreeHeatmapBanner() {
  return (
    <section aria-labelledby="heatmap-heading" className="mx-auto max-w-6xl px-4 pb-4">
      <div className="rounded-2xl border border-signal/25 bg-white p-6 sm:p-8">
        <div className="max-w-2xl">
          <h2 id="heatmap-heading" className="font-display text-2xl font-bold text-ink">
            Try it free: the Top 5 heatmap
          </h2>
          <p className="mt-2 text-sm text-body">
            The five most likely topics for one subject of your choice, as a
            free PDF. No card, no catch — just proof.
          </p>
        </div>
        <div className="mt-5 max-w-2xl">
          <EmailCaptureForm source="homepage-banner" showSubjectSelect />
        </div>
      </div>
    </section>
  );
}

export default async function Home() {
  const pricing = await getPricing();
  return (
    <>
      <Hero pricing={pricing} />
      <Journey pricing={pricing} />
      <LevelEntry pricing={pricing} />
      <TrustStrip />
      <HowItWorks />
      <FreeHeatmapBanner />
    </>
  );
}
