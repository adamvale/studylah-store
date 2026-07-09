import Link from "next/link";
import { averageHitRate } from "@/lib/accuracy";
import {
  COMING_SOON,
  JOURNEY_ORDER,
  LEVELS,
  PRODUCTS,
  sgd,
  PUBLISHED_LEVELS,
  subjectsForLevel,
} from "@/lib/catalogue";
import type { Pricing } from "@/lib/pricing";
import { getPricing } from "@/lib/server/pricing-store";
import { EmailCaptureForm } from "@/components/email-capture";
import { ForecastCard } from "@/components/forecast-card";
import { HeatTiles } from "@/components/heat";

/* Playful motifs, inline SVG so they need no external assets and pass CSP. */

function PlayIcons() {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <span className="grid h-6 w-6 place-items-center rounded-full border-2 border-rose" />
      <span className="text-teal">✕</span>
      <span
        className="h-0 w-0"
        style={{
          borderLeft: "9px solid transparent",
          borderRight: "9px solid transparent",
          borderBottom: "15px solid var(--color-accent)",
        }}
      />
      <span className="h-4 w-4 rounded-sm border-2 border-teal" />
    </div>
  );
}

function Ghost() {
  return (
    <svg width="52" height="46" viewBox="0 0 52 46" aria-hidden="true">
      <path
        d="M26 2C14 2 6 10 6 22v20l6-5 6 5 8-5 8 5 6-5 6 5V22C46 10 38 2 26 2Z"
        fill="#ffffff"
      />
      <circle cx="20" cy="20" r="2.6" fill="#161c26" />
      <circle cx="32" cy="20" r="2.6" fill="#161c26" />
    </svg>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-violet px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
      {children}
    </span>
  );
}

function Hero({ pricing }: { pricing: Pricing }) {
  const { alacartePrice } = pricing;
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-12 lg:grid-cols-2 lg:pt-20">
      <div className="fade-up">
        <p className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1 font-mono text-xs font-medium text-cloud">
          <HeatTiles />
          Built from 10 years of real exam data
        </p>
        <h1 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl">
          Stop revising blind. Walk in knowing{" "}
          <span className="text-accent">what&apos;s likely.</span>
        </h1>
        <p className="mt-4 max-w-lg text-lg text-cloud">
          Most students revise everything and hope. StudyLah reads ten years of
          your{" "}
          {PUBLISHED_LEVELS.map((l) => LEVELS[l].shortName).join(" and ")} papers,
          ranks the topics most likely to appear in 2026, and hands you original
          questions and a full timed rehearsal for them — so your last weeks land
          where the marks are.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/o-level"
            className="rounded-lg bg-accent px-5 py-3 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
          >
            Find your subject&apos;s forecast
          </Link>
          <Link
            href="/free-heatmap"
            className="rounded-lg border border-hairline bg-surface px-5 py-3 text-sm font-medium text-white transition-colors hover:border-accent"
          >
            See a free sample →
          </Link>
        </div>
        <p className="mt-5 text-sm text-cloud">
          Money-back guarantee · Instant PDF download · From{" "}
          {sgd(alacartePrice("o-level", "forecast"))} per subject
        </p>
      </div>
      <div className="fade-up" style={{ animationDelay: "150ms" }}>
        <ForecastCard />
      </div>
    </section>
  );
}

const WHY = [
  {
    title: "AI Pattern Recognition",
    body: "We analyse past papers to identify frequently tested topics and the question styles that keep coming back.",
  },
  {
    title: "Core Concepts",
    body: "The recurring topics that consistently anchor the most marks in past exams — so you revise them first.",
  },
  {
    title: "High-Chance Questions",
    body: "Original questions built around the highest-probability structures, giving your practice strategic focus.",
  },
];

function WhyItWorks() {
  return (
    <section className="bg-night-2 py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <div className="flex justify-center">
          <Ghost />
        </div>
        <div className="mt-4 flex justify-center">
          <Badge>From Panic to Ready</Badge>
        </div>
        <h2 className="mt-6 font-display text-4xl font-black text-accent sm:text-5xl">
          Why StudyLah! Works
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cloud">
          Exams don&apos;t reward more hours of study — they reward{" "}
          <span className="text-accent">
            focused preparation on high-impact topics
          </span>
          . Our model studies ten years of MOE exam papers to find the patterns
          that repeat across years, so you practise what is most likely to
          appear.
        </p>
        <div className="mt-12 grid gap-5 text-left md:grid-cols-3">
          {WHY.map((card, i) => (
            <div
              key={card.title}
              className="rounded-2xl border border-hairline bg-surface p-6"
            >
              <p className="font-mono text-sm font-bold text-cloud">
                No.{i + 1}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cloud">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey({ pricing }: { pricing: Pricing }) {
  const { alacartePrice, tierPrice, tierValue, tierSavings } = pricing;
  const prices = ["essential", "strategic", "master"] as const;
  return (
    <section aria-labelledby="journey-heading" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="font-mono text-xs font-medium uppercase tracking-wide text-teal">
          The revision journey
        </p>
        <h2
          id="journey-heading"
          className="mt-2 font-display text-3xl font-black text-white"
        >
          Your last 14 days, planned
        </h2>
        <p className="mt-2 max-w-xl text-cloud">
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
                className="relative rounded-2xl border border-hairline bg-surface p-6"
              >
                <span className="inline-block rounded-full bg-violet px-3 py-1 font-mono text-xs font-bold text-white">
                  {product.day}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-teal">
                  {product.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cloud">
                  {product.blurb}
                </p>
                <p className="mt-4 font-mono text-sm text-accent">
                  {sgd(alacartePrice("o-level", key))} à la carte · in the{" "}
                  {tier === "essential"
                    ? "Essential"
                    : tier === "strategic"
                      ? "Strategic"
                      : "Master"}{" "}
                  tier from {sgd(tierPrice("o-level", tier))}
                </p>
              </div>
            );
          })}
        </div>
        <p className="mt-6 rounded-xl border border-hairline bg-surface px-4 py-3 text-sm text-cloud">
          Get all three with the Master tier —{" "}
          <span className="text-accent">
            {sgd(tierValue("o-level", "master"))}
          </span>{" "}
          of material for {sgd(tierPrice("o-level", "master"))}, a saving of{" "}
          {sgd(tierSavings("o-level", "master"))} per subject.
        </p>
      </div>
    </section>
  );
}

const OLD_WAY = [
  "Continue revising blindly",
  "Hope the right topics appear",
  "Enter the exam anxious & unsure",
];
const NEW_WAY = [
  "Practise with clarity",
  "Understand exam patterns",
  "Walk in calmer & confident",
];

function Decision() {
  return (
    <section className="bg-gradient-to-b from-[#12312b] to-night py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <div className="flex justify-center">
          <Badge>Study Less, Score More</Badge>
        </div>
        <h2 className="mt-6 font-display text-4xl font-black text-accent sm:text-5xl">
          Your Moment of Decision
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white">
          StudyLah! is not about studying more. It&apos;s about studying{" "}
          <span className="text-mint">smarter</span>.
        </p>
        <div className="mt-12 grid gap-8 rounded-3xl border border-hairline bg-surface/60 p-8 text-left sm:grid-cols-2">
          <div>
            <p className="font-display text-lg font-bold text-coral">
              The Old Way
            </p>
            <hr className="mt-3 border-hairline" />
            <ul className="mt-4 space-y-4">
              {OLD_WAY.map((t) => (
                <li key={t} className="flex items-center gap-3 text-cloud">
                  <span className="text-coral">✕</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-lg font-bold text-mint">
              The StudyLah! Way
            </p>
            <hr className="mt-3 border-hairline" />
            <ul className="mt-4 space-y-4">
              {NEW_WAY.map((t) => (
                <li key={t} className="flex items-center gap-3 text-white">
                  <span className="text-mint">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function LevelEntry({ pricing }: { pricing: Pricing }) {
  const { tierPrice } = pricing;
  return (
    <section aria-labelledby="levels-heading" className="mx-auto max-w-6xl px-4 py-20">
      <h2 id="levels-heading" className="font-display text-3xl font-black text-white">
        Find your papers
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {PUBLISHED_LEVELS.map((level) => (
          <Link
            key={level}
            href={`/${level}`}
            className="group rounded-2xl border border-hairline bg-surface p-6 transition-colors hover:border-accent"
          >
            <p className="font-mono text-xs font-medium text-cloud">
              {LEVELS[level].code}
            </p>
            <h3 className="mt-1 font-display text-2xl font-bold text-accent">
              {LEVELS[level].name}
            </h3>
            <p className="mt-2 text-sm text-cloud">
              {subjectsForLevel(level).length} subjects · from{" "}
              {sgd(tierPrice(level, "essential"))} per subject
            </p>
          </Link>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-cloud">
        <span>Coming soon:</span>
        {COMING_SOON.map((l) => (
          <Link
            key={l.slug}
            href={`/${l.slug}`}
            className="rounded-full border border-hairline bg-surface px-3 py-1 text-xs font-medium text-cloud hover:border-accent"
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
    <section aria-labelledby="trust-heading" className="bg-violet-2 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="trust-heading" className="sr-only">
          Why students trust StudyLah
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-5xl font-black text-accent">
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
            <p className="font-display text-5xl font-black text-accent">Zero</p>
            <p className="mt-1 text-sm text-white/80">
              recycled past-paper content — every question is written for
              StudyLah
            </p>
          </div>
          <div>
            <p className="font-display text-5xl font-black text-accent">S$ back</p>
            <p className="mt-1 text-sm text-white/80">
              money-back guarantee if the forecast doesn&apos;t deliver.{" "}
              <Link href="/faq" className="font-medium text-accent hover:underline">
                How it works
              </Link>
            </p>
          </div>
        </div>
        <p className="mt-8 text-xs text-white/50">
          *Measured against the 2025 papers after the sitting — every hit and
          miss is in the full scorecard.
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
    body: "Topic cycles, mark weightings, and setter patterns become a confidence tier for every topic in your syllabus.",
  },
  {
    title: "Publish",
    body: "You get the forecast. After the sitting, we publish what hit and what missed — in public, every year.",
  },
];

function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="mx-auto max-w-6xl px-4 py-20">
      <h2 id="how-heading" className="font-display text-3xl font-black text-white">
        How the forecast works
      </h2>
      <p className="mt-2 max-w-xl text-cloud">
        Forecasts, not leaks. Probabilities, not promises.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {HOW_STEPS.map((step, i) => (
          <div
            key={step.title}
            className="rounded-2xl border border-hairline bg-surface p-6"
          >
            <p className="font-mono text-sm font-bold text-teal">0{i + 1}</p>
            <h3 className="mt-2 font-display text-lg font-bold text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cloud">{step.body}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-cloud">
        A forecast can be wrong — that&apos;s why the{" "}
        <Link href="/accuracy" className="font-medium text-accent underline">
          accuracy scorecard
        </Link>{" "}
        is public and the{" "}
        <Link href="/faq" className="font-medium text-accent underline">
          guarantee
        </Link>{" "}
        is real.
      </p>
    </section>
  );
}

function FreeHeatmapBanner() {
  return (
    <section aria-labelledby="heatmap-heading" className="mx-auto max-w-6xl px-4 pb-16">
      <div className="rounded-3xl border border-hairline bg-surface p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <PlayIcons />
        </div>
        <div className="mt-4 max-w-2xl">
          <h2
            id="heatmap-heading"
            className="font-display text-2xl font-black text-white"
          >
            Try it free: the Top 5 heatmap
          </h2>
          <p className="mt-2 text-sm text-cloud">
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
    <div className="bg-night">
      <Hero pricing={pricing} />
      <WhyItWorks />
      <Journey pricing={pricing} />
      <Decision />
      <LevelEntry pricing={pricing} />
      <TrustStrip />
      <HowItWorks />
      <FreeHeatmapBanner />
    </div>
  );
}
