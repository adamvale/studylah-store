import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { scorecardHeadline } from "@/lib/accuracy-data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};
import {
  COMING_SOON,
  getSubject,
  JOURNEY_ORDER,
  LEVELS,
  PRODUCTS,
  sgd,
  PUBLISHED_LEVELS,
  subjectsForLevel,
  tierProducts,
} from "@/lib/catalogue";
import { subjectCopy } from "@/lib/subject-copy";
import type { Pricing } from "@/lib/pricing";
import { getPricing } from "@/lib/server/pricing-store";
import { ExamCountdown } from "@/components/exam-countdown";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { SocialProof } from "@/components/social-proof";

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

// Crisp pixel art from StudyLah Legends suite. next/image with unoptimized so
// the sprites are served 1:1 and scaled with nearest-neighbour.
function Px({
  src,
  size,
  w,
  h,
  alt = "",
  className = "",
}: {
  src: string;
  size?: number;
  w?: number;
  h?: number;
  alt?: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={w ?? size ?? 48}
      height={h ?? size ?? 48}
      unoptimized
      aria-hidden={alt === "" ? true : undefined}
      className={`px-img ${className}`}
    />
  );
}

// Gugu, the ghost mascot (traced from the app favicon).
function Ghost({ size = 48, pose = "default" }: { size?: number; pose?: "default" | "victory" }) {
  return (
    <Px
      src={`/marketing/mascot_${pose}.png`}
      size={size}
      alt=""
    />
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-violet px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
      {children}
    </span>
  );
}

// Smooth (non-pixel) ghost head that sits above the "The Problem / Cause /
// Solution" badges, tucked slightly behind the pill.
function SectionGhost() {
  return (
    <Image
      src="/marketing/gugu-head.png"
      alt=""
      aria-hidden="true"
      width={484}
      height={371}
      className="h-auto w-16"
    />
  );
}

// Colourful subject pills, one per O-Level subject, that link into each page.
const PILL_STYLES = [
  "bg-violet text-white",
  "bg-teal text-night",
  "bg-accent text-night",
  "bg-coral text-white",
  "bg-mint text-night",
  "bg-[#5b5bd6] text-white",
  "bg-[#0fb5ae] text-night",
  "bg-[#e0729b] text-white",
  "bg-[#3fbf5f] text-night",
];

function SubjectPills() {
  const subjects = subjectsForLevel("o-level");
  return (
    <div className="mt-6 flex max-w-3xl flex-wrap justify-center gap-2">
      {subjects.map((s, i) => (
        <Link
          key={s.slug}
          href={`/o-level/${s.slug}`}
          className={`rounded-full px-3 py-1 text-xs font-bold transition-opacity hover:opacity-85 ${
            PILL_STYLES[i % PILL_STYLES.length]
          }`}
        >
          {s.name}
        </Link>
      ))}
    </div>
  );
}

function Hero({ pricing }: { pricing: Pricing }) {
  const { alacartePrice } = pricing;
  const { perfect, total } = scorecardHeadline();
  return (
    <section className="relative flex items-center overflow-hidden md:min-h-[calc(100svh-4.5rem)]">
      <HeroBackdrop />
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-24 pt-14 text-center lg:pt-16">
        <div className="fade-up flex w-full flex-col items-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs font-medium text-cloud backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Built from 10 years of real exam data
          </div>

          {/* Headline, sized to land the eye on the key words. */}
          <h1 className="mt-5 flex max-w-4xl flex-col font-display font-black leading-[1.02] tracking-tight text-white">
            <span className="text-4xl sm:text-6xl">Stop revising blind.</span>
            <span className="mt-1 text-3xl font-extrabold text-cloud sm:text-5xl">
              Walk in knowing
            </span>
            <span className="mt-1 text-5xl text-accent sm:text-7xl">
              what&apos;s likely.
            </span>
          </h1>

          {/* The three 2026 packs, moved above the copy. */}
          <div className="mt-8 w-full">
            <PackRow />
          </div>

          {/* One-sentence subhead, value-forward */}
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-cloud sm:text-lg">
            We rank every{" "}
            {PUBLISHED_LEVELS.map((l) => LEVELS[l].shortName).join(" and ")}{" "}
            topic by how likely it is on the 2026 paper, then hand your child the
            exact questions to drill, so their final weeks build{" "}
            <span className="font-semibold text-white">calm, confident readiness</span>,
            not last-minute panic.
          </p>

          {/* Colourful subject pills, one per subject */}
          <SubjectPills />
          <Link
            href="/subjects"
            className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
          >
            See every subject →
          </Link>

          {/* Countdown, right above the primary CTA */}
          <div className="mt-8">
            <ExamCountdown />
          </div>

          {/* The two actions (stacked on mobile) */}
          <div className="mt-4 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/diagnostic"
              className="btn-pixel cta-sheen glow-soft rounded bg-accent px-5 py-3.5 text-center text-sm font-bold text-night"
            >
              See the topics you&apos;ll lose marks on, free
            </Link>
            <Link
              href="/subjects"
              className="rounded-lg border border-white/15 bg-white/5 px-5 py-3.5 text-center text-sm font-medium text-white backdrop-blur transition-colors hover:border-accent"
            >
              Start preparing smarter →
            </Link>
          </div>
          <p className="mt-3 text-xs text-cloud/70">
            10 questions · ~7 min · instant score &amp; worked solutions · no card
          </p>

          {/* One calm trust line (guarantee · price · proof) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 border-t border-white/10 pt-5 text-sm text-cloud">
            <span className="inline-flex items-center gap-1.5 font-medium text-guarantee">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1.5l5 2v4c0 3-2.1 5.2-5 6.5C5.1 12.7 3 10.5 3 7.5v-4l5-2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M5.8 8l1.6 1.6L10.4 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Money-back guarantee
            </span>
            <span aria-hidden="true" className="text-white/25">·</span>
            <span>from {sgd(alacartePrice("o-level", "forecast"))}/subject</span>
            <span aria-hidden="true" className="text-white/25">·</span>
            <Link href="/accuracy" className="inline-flex items-center gap-1 transition-colors hover:text-accent">
              <strong className="font-bold text-white">
                {perfect}/{total}
              </strong>{" "}
              forecasts on target →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// A small red circled glyph (?, !) used in "The Big Question".
function ProblemGlyph({ char }: { char: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-coral text-xs font-black text-coral"
    >
      {char}
    </span>
  );
}

// "The Problem" agitation section: names the pain a parent feels before we show
// the fix. Drop the 3D man-on-cloud art at public/marketing/parent-thinking.png
// and it appears; until then the section renders cleanly without it.
function TheProblem() {
  const artPath = "/marketing/parent-thinking.png";
  const hasArt = existsSync(
    join(process.cwd(), "public", "marketing", "parent-thinking.png")
  );
  return (
    <section aria-labelledby="problem-heading" className="reveal py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <div className="flex justify-center">
          <SectionGhost />
        </div>
        <div className="relative z-10 -mt-[6px] flex justify-center">
          <Badge>The Problem</Badge>
        </div>
        <h2
          id="problem-heading"
          className="mt-4 font-display text-3xl font-black text-accent sm:text-4xl"
        >
          No One Talks About It
        </h2>
        <p className="mt-1 font-display text-xl font-bold text-cloud sm:text-2xl">
          But Every Parent <span className="text-accent">Feels</span>.
        </p>

        {hasArt && (
          <div className="mt-5 flex justify-center">
            <Image
              src={artPath}
              alt="A parent sitting on a cloud, deep in thought"
              width={300}
              height={300}
              className="h-auto w-44 sm:w-52"
            />
          </div>
        )}

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cloud">
          Every year, <span className="text-accent">it&apos;s the same story</span>.
          Your child studies hard. They do assessment books. They revise again
          and again. Yet on exam day, they walk out saying:
        </p>

        <div className="mt-8 grid gap-5 text-left sm:grid-cols-2">
          {[
            "This didn't come out. I didn't expect that question.",
            "I knew the topic, but I didn't know how to answer.",
          ].map((quote) => (
            <blockquote
              key={quote}
              className="rounded-2xl border border-hairline bg-surface p-6"
            >
              <span
                aria-hidden="true"
                className="font-display text-4xl font-black leading-none text-coral"
              >
                &ldquo;
              </span>
              <p className="mt-1 text-base font-medium italic leading-relaxed text-cloud">
                {quote}
              </p>
            </blockquote>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-hairline bg-surface/60 p-8">
          <p className="font-display text-2xl font-black text-coral">
            The Big Question:
          </p>
          <ul className="mx-auto mt-5 flex max-w-md flex-col gap-3 text-lg">
            <li className="flex items-center justify-center gap-3 text-cloud">
              <ProblemGlyph char="?" />
              Was it lack of effort?
            </li>
            <li className="flex items-center justify-center gap-3 text-cloud">
              <ProblemGlyph char="?" />
              Was it stress?
            </li>
            <li className="flex items-center justify-center gap-3 font-bold text-accent">
              <ProblemGlyph char="!" />
              Or was it simply... inefficient preparation?
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// "The Cause" section: the three kinds of capable-but-stuck students StudyLah
// is built for. Sits right after "The Problem" and shares its ghost + badge +
// 3D-illustration language, inside a bordered panel.
const CAUSE_TYPES: { label: string; body: React.ReactNode }[] = [
  {
    label: "Type 1",
    body: (
      <>Students knew the content, but still didn&apos;t recognise exam patterns.</>
    ),
  },
  {
    label: "Type 2",
    body: (
      <>
        Students revised everything, instead of the{" "}
        <span className="font-bold text-white">right things.</span>
      </>
    ),
  },
  {
    label: "Type 3",
    body: <>Students spent hours studying daily, yet barely passing tests.</>,
  },
];

function TheCause() {
  const artPath = "/marketing/cause-student.png";
  const hasArt = existsSync(
    join(process.cwd(), "public", "marketing", "cause-student.png")
  );
  return (
    <section aria-labelledby="cause-heading" className="reveal py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-hairline bg-night-2 px-4 py-16 text-center sm:px-10">
          <div className="flex justify-center">
            <SectionGhost />
          </div>
          <div className="relative z-10 -mt-[6px] flex justify-center">
            <Badge>The Cause</Badge>
          </div>
          <h2
            id="cause-heading"
            className="mt-4 font-display text-3xl font-black text-accent sm:text-4xl lg:text-5xl"
          >
            Why StudyLah! Exists
          </h2>

          {hasArt && (
            <div className="mt-6 flex justify-center">
              <Image
                src={artPath}
                alt="A student at a desk, unsure between an A and an F"
                width={320}
                height={305}
                className="h-auto w-48 sm:w-56 lg:w-64"
              />
            </div>
          )}

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-cloud sm:text-xl">
            We work with the following types of students who are{" "}
            <span className="font-semibold text-accent">
              capable and hardworking, yet stuck
            </span>{" "}
            in a system that rewards exam intelligence, not just knowledge.
          </p>

          <div className="mt-10 grid gap-5 text-left sm:grid-cols-3">
            {CAUSE_TYPES.map((t) => (
              <div
                key={t.label}
                className="rounded-2xl border border-hairline bg-surface p-6"
              >
                <p className="text-center font-display text-lg font-bold text-accent sm:text-left">
                  {t.label}
                </p>
                <div className="mt-3 flex gap-3">
                  <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-coral">
                    ✕
                  </span>
                  <p className="leading-relaxed text-cloud">{t.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 font-display text-xl font-black text-accent sm:text-2xl">
            StudyLah! focuses on patterns, probability, and strategy, not volume.
          </p>
        </div>
      </div>
    </section>
  );
}

// "The Solution": the four products in every subject's suite. Names and copy
// stay compliant, no "predicted papers" / leaked-exam framing.
const SOLUTIONS: {
  no: string;
  name: string;
  tag: string;
  body: React.ReactNode;
  tier: string;
}[] = [
  {
    no: "Solution No.1",
    name: "Exam Forecast",
    tag: "Know What's Likely",
    body: (
      <>
        Built to <span className="font-bold text-accent">narrow revision down</span>{" "}
        to the topics most likely on the 2026 paper, so the last weeks go to
        what matters, not everything.
      </>
    ),
    tier: "Every tier",
  },
  {
    no: "Solution No.2",
    name: "Sure Questions Vault",
    tag: "Core Concept Certainty",
    body: (
      <>
        Built to <span className="font-bold text-accent">narrow revision down</span>{" "}
        to the non-negotiable core concepts and high-impact question types that
        students should not risk skipping.
      </>
    ),
    tier: "Strategic & up",
  },
  {
    no: "Solution No.3",
    name: "Final Rehearsal",
    tag: "Pattern Familiarity + Execution",
    body: (
      <>
        Built to <span className="font-bold text-accent">simulate exam conditions</span>{" "}
        so students practise how questions are framed, how marks are awarded,
        and how to start confidently.
      </>
    ),
    tier: "Master tier",
  },
  {
    no: "Solution No.4",
    name: "The Companion",
    tag: "The Under-Rehearsed Marks",
    body: (
      <>
        Built to <span className="font-bold text-accent">bank the marks most students skip</span>:
        a dedicated forecast for the paper or skill strand that decides the most
        marks, with model full-credit exhibits.
      </>
    ),
    tier: "Master tier",
  },
];

const STRATEGY_STEPS = [
  "Use the Exam Forecast to aim your final weeks at the likeliest topics.",
  "Use the Sure Questions Vault to lock the non-negotiable core concepts.",
  "Use the Final Rehearsal to train pattern recognition and exam execution closer to the paper.",
  "Add the Companion to bank the marks most students under-rehearse.",
];

function TheSolution() {
  const artPath = "/marketing/solution-target.png";
  const hasArt = existsSync(
    join(process.cwd(), "public", "marketing", "solution-target.png")
  );
  return (
    <section aria-labelledby="solution-heading" className="reveal py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-hairline bg-night-2 px-4 py-16 text-center sm:px-10">
          <div className="flex justify-center">
            <SectionGhost />
          </div>
          <div className="relative z-10 -mt-[6px] flex justify-center">
            <Badge>The Solution</Badge>
          </div>
          <h2
            id="solution-heading"
            className="mt-4 font-display text-3xl font-black text-accent sm:text-4xl lg:text-5xl"
          >
            What StudyLah! Does
          </h2>

          {hasArt && (
            <div className="mt-6 flex justify-center">
              <Image
                src={artPath}
                alt="Darts hitting the centre of a target"
                width={320}
                height={298}
                className="h-auto w-28 sm:w-36"
              />
            </div>
          )}

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cloud sm:text-xl">
            We don&apos;t promise magic. We create{" "}
            <span className="font-semibold text-accent">
              clarity, direction, and focus
            </span>
            .
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-body">
            Every subject you buy includes all four, one for each job in the run
            up to the paper.
          </p>

          {/* The four solutions */}
          <div className="mt-10 grid gap-5 text-center sm:grid-cols-2">
            {SOLUTIONS.map((s) => (
              <div
                key={s.no}
                className="flex flex-col rounded-3xl border border-hairline bg-surface p-8"
              >
                <p className="font-display text-lg font-black text-accent">
                  {s.no}
                </p>
                <h3 className="mt-1 font-display text-2xl font-black text-white sm:text-3xl">
                  {s.name}
                </h3>
                <div className="mt-3 flex justify-center">
                  <span className="rounded-full border border-hairline px-4 py-2 text-sm font-semibold text-cloud">
                    {s.tag}
                  </span>
                </div>
                <p className="mx-auto mt-4 max-w-md flex-1 leading-relaxed text-cloud">
                  {s.body}
                </p>
                <div className="mt-6 flex justify-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm">
                    <span className="text-body">Included in:</span>
                    <span className="font-bold text-accent">{s.tier}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* The bundle: The Smarter Strategy */}
          <div className="mt-6 rounded-3xl border border-hairline bg-surface p-8 text-center sm:p-12">
            <p className="font-display text-lg font-black text-accent">
              Bundled Up
            </p>
            <h3 className="mt-1 font-display text-2xl font-black text-white sm:text-3xl">
              The Smarter Strategy
            </h3>
            <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-cloud">
              On their own, each product does one job. Bought together, they
              become a single revision sequence, from{" "}
              <span className="font-bold text-white">knowing what to revise</span>{" "}
              all the way to{" "}
              <span className="font-bold text-white">walking in ready</span>:
            </p>
            <ul className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 text-left">
              {STRATEGY_STEPS.map((step) => (
                <li key={step} className="flex items-start gap-3 text-cloud">
                  <span
                    aria-hidden="true"
                    className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full border-2 border-guarantee"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-guarantee" />
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="#tiers"
                className="btn-pixel cta-sheen glow-soft inline-block rounded bg-accent px-6 py-3 text-sm font-bold text-night"
              >
                Get all four with Master →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TIERS: {
  key: "essential" | "strategic" | "master";
  name: string;
  note: string;
  popular?: boolean;
  products: string[];
}[] = [
  {
    key: "essential",
    name: "Essential",
    note: "The entry point",
    products: ["Exam Forecast"],
  },
  {
    key: "strategic",
    name: "Strategic",
    note: "",
    products: ["Exam Forecast", "Sure Questions Vault"],
  },
  {
    key: "master",
    name: "Master",
    note: "",
    popular: true,
    products: [
      "Exam Forecast",
      "Sure Questions Vault",
      "Final Rehearsal",
      "Subject Companion",
    ],
  },
];

function PricingTiers({ pricing }: { pricing: Pricing }) {
  const { tierPrice, tierValue, tierSavings } = pricing;
  // Value/savings reflect a full four-product (science) suite, so Master reads
  // its true bundle value rather than the 3-product default.
  const refSubject = getSubject("o-level", "chemistry-pure");
  return (
    <section id="tiers" className="reveal scroll-mt-24 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-3xl font-black text-white sm:text-4xl">
          Choose your tier
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-cloud">
          Most families choose{" "}
          <span className="font-semibold text-white">Master</span>: the complete
          plan that turns ten years of exam data into a calm, focused final
          month, and the biggest saving. Start smaller only if you prefer.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 md:gap-5">
          {TIERS.map((t) => {
            const products = refSubject
              ? tierProducts(t.key, refSubject)
              : undefined;
            const price = tierPrice("o-level", t.key);
            const value = tierValue("o-level", t.key, products);
            const savings = tierSavings("o-level", t.key, products);
            return (
              <div
                key={t.key}
                className={`relative flex flex-col rounded-2xl border p-3 sm:p-6 ${
                  t.popular
                    ? "border-accent bg-night-2"
                    : "border-hairline bg-surface"
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wide text-night sm:-top-3 sm:px-3 sm:py-1 sm:text-[11px]">
                    <span className="sm:hidden">Best value</span>
                    <span className="hidden sm:inline">
                      Most popular · Best value
                    </span>
                  </span>
                )}
                <p className="font-display text-base font-bold text-white sm:text-2xl">
                  {t.name}
                </p>
                <p className="mt-1 font-display text-xl font-black text-accent sm:text-4xl">
                  {sgd(price)}
                </p>
                {t.key === "essential" ? (
                  <p className="mt-1 text-[10px] text-body sm:text-sm">
                    {t.note}
                  </p>
                ) : (
                  <p className="mt-1 text-[10px] font-medium leading-tight text-guarantee sm:text-sm">
                    {sgd(value)} value, save {sgd(savings)}
                  </p>
                )}
                <ul className="mt-3 space-y-1.5 sm:mt-5 sm:space-y-2">
                  {t.products.map((p) => (
                    <li
                      key={p}
                      className="flex gap-1.5 text-[11px] leading-tight text-cloud sm:gap-2 sm:text-sm"
                    >
                      <span aria-hidden="true" className="text-guarantee">
                        •
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <Link
            href="/subjects"
            className="btn-pixel cta-sheen glow-soft rounded bg-accent px-7 py-3.5 text-sm font-bold text-night"
          >
            Choose your subject →
          </Link>
          <p className="text-center font-mono text-xs text-body">
            Instant PDF download · works right up to exam day · watermarked to
            you
          </p>
          <div className="mx-auto max-w-2xl rounded-xl border border-hairline bg-surface px-4 py-3 text-center text-sm text-cloud">
            <span className="font-medium text-guarantee">
              Money-back guarantee.
            </span>{" "}
            Full refund if fewer than 3 of our top-5 forecast topics appear in
            the paper, email your order ID within 14 days of the exam.{" "}
            <Link href="/faq" className="font-medium text-accent hover:underline">
              How it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Compliant reworking of the "three product packs" merchandising idea: real
// subjects, real forecast framing (no "predicted papers", no "sure appear",
// no invented scarcity), each pack a link into its subject page.
const FEATURED_PACKS = [
  { level: "o-level", slug: "chemistry-pure", grad: "linear-gradient(155deg,#0fb5ae 0%,#0a3a36 100%)" },
  { level: "o-level", slug: "biology-science", grad: "linear-gradient(155deg,#3fbf5f 0%,#0f3a1e 100%)" },
  { level: "na-level", slug: "biology", grad: "linear-gradient(155deg,#c9a227 0%,#3a2e0a 100%)" },
] as const;

// The three 2026 packs, rendered as a plain 3-up row for use inside the hero.
// A real PNG at public/packs/<level>/<slug>.png takes over automatically;
// until then each pack falls back to the styled gradient card.
function PackRow() {
  const packs = FEATURED_PACKS.map((p) => {
    const rel = `/packs/${p.level}/${p.slug}.png`;
    const hasImg = existsSync(
      join(process.cwd(), "public", "packs", p.level, `${p.slug}.png`)
    );
    return {
      ...p,
      name: getSubject(p.level, p.slug)?.name ?? p.slug,
      code: subjectCopy(p.level, p.slug)?.syllabusCode ?? "",
      img: hasImg ? rel : null,
    };
  });
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-3 gap-0.5 sm:gap-1">
      {packs.map((p) =>
        p.img ? (
          <div key={p.slug} className="relative aspect-[333/456] w-full">
            <Image
              src={p.img}
              alt={`${p.name}, StudyLah 2026 pack`}
              fill
              sizes="(max-width: 640px) 33vw, 300px"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        ) : (
          <div key={p.slug}>
            <div
              className="relative flex aspect-[3/4] flex-col overflow-hidden rounded-2xl border border-white/10 p-3 text-left shadow-xl sm:p-5"
              style={{ background: p.grad }}
            >
              {/* holographic sheen */}
              <div className="pointer-events-none absolute -left-6 -top-16 h-28 w-[140%] rotate-12 bg-white/15 blur-2xl" />
              <div className="relative flex items-center justify-between">
                <span className="font-display text-xs font-black tracking-tight text-white sm:text-sm">
                  Study<span className="text-accent">Lah</span>
                </span>
                <span className="rounded-full bg-black/25 px-1.5 py-0.5 font-mono text-[9px] font-bold text-white/90 sm:text-[10px]">
                  2026
                </span>
              </div>
              <div className="relative mt-3 sm:mt-6">
                <p className="font-mono text-[9px] font-medium uppercase tracking-widest text-white/70 sm:text-[11px]">
                  {LEVELS[p.level].shortName} · {p.code}
                </p>
                <h3 className="mt-1 font-display text-sm font-black leading-tight text-white sm:text-2xl">
                  {p.name}
                </h3>
              </div>
              <div className="relative mt-auto pt-3">
                <div className="rounded-lg bg-black/30 px-2 py-1.5 backdrop-blur sm:px-3 sm:py-2">
                  <p className="font-mono text-[9px] font-bold uppercase tracking-wide text-white sm:text-[11px]">
                    <span className="sm:hidden">Exam Forecast</span>
                    <span className="hidden sm:inline">Exam Forecast Pack</span>
                  </p>
                  <p className="mt-0.5 hidden text-[10px] text-white/70 sm:block">
                    Forecast · practice · rehearsal
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

const WHY: { title: string; body: React.ReactNode }[] = [
  {
    title: "AI Pattern Recognition",
    body: (
      <>
        Analyse past papers to identify{" "}
        <span className="font-semibold text-accent">frequently tested</span>{" "}
        topics and question styles.
      </>
    ),
  },
  {
    title: "Core Concepts",
    body: (
      <>
        Important <span className="font-semibold text-accent">recurring topics</span>{" "}
        that consistently anchor marks in past exams.
      </>
    ),
  },
  {
    title: "High-Chance Questions",
    body: (
      <>
        Questions designed around{" "}
        <span className="font-semibold text-accent">high probability</span>{" "}
        structures, giving strategic focus.
      </>
    ),
  },
];

function WhyItWorks() {
  const hasArt = existsSync(
    join(process.cwd(), "public", "marketing", "why-brain.png")
  );
  return (
    <section className="reveal py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <div className="flex justify-center">
          <SectionGhost />
        </div>
        <div className="relative z-10 -mt-[6px] flex justify-center">
          <Badge>From Panic to Ready</Badge>
        </div>
        <h2 className="mt-4 font-display text-3xl font-black text-accent sm:text-4xl lg:text-5xl">
          Why StudyLah! Works
        </h2>
        {hasArt && (
          <div className="mt-6 flex justify-center">
            <Image
              src="/marketing/why-brain.png"
              alt="A brain lit up with circuitry"
              width={320}
              height={280}
              className="h-auto w-40 sm:w-52"
            />
          </div>
        )}
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-cloud sm:text-xl">
          Exams don&apos;t reward more hours of study, they reward{" "}
          <span className="font-semibold text-accent">
            focused preparation on high-impact topics
          </span>
          . Our model studies{" "}
          <span className="font-semibold text-accent">ten years</span> of
          Singapore-Cambridge O-Level and N(A)-Level papers to find the patterns
          that repeat, so your child practises what is most likely to appear.
        </p>
        <div className="mt-10 grid gap-5 text-left md:grid-cols-3">
          {WHY.map((card, i) => (
            <div
              key={card.title}
              className="rounded-2xl border border-hairline bg-surface p-6"
            >
              <p className="font-mono text-sm font-bold text-body">
                No.{i + 1}
              </p>
              <h3 className="mt-3 font-display text-2xl font-black text-white">
                {card.title}
              </h3>
              <p className="mt-3 leading-relaxed text-cloud">{card.body}</p>
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
    <section aria-labelledby="journey-heading" className="reveal py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center font-mono text-xs font-medium uppercase tracking-wide text-teal">
          The revision journey
        </p>
        <h2
          id="journey-heading"
          className="mt-2 text-center font-display text-3xl font-black text-white"
        >
          Your last 14 days, planned
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-cloud">
          No more staring at a mountain of notes. Each subject arrives as a
          day-by-day plan, so the final fortnight has a{" "}
          <span className="font-semibold text-white">
            clear start, middle and calm finish
          </span>
          .
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
          Get all three with the Master tier, {" "}
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

const STUDY_HQ_FEATURES = [
  {
    emoji: "🎯",
    title: "Marks at Risk",
    body: "One honest number per subject: how much of a typical paper is still in play. Tick topics, clear mistakes, watch it fall.",
  },
  {
    emoji: "🔥",
    title: "The Daily Three",
    body: "Three questions a day on your VERY HIGH and HIGH topics, marked instantly. Ten minutes that beat three-hour cramming.",
  },
  {
    emoji: "📓",
    title: "Mistake notebook",
    body: "Every miss saved automatically. Missed questions come back until you beat them twice, then they clear for good.",
  },
  {
    emoji: "🧰",
    title: "Skill drills",
    body: "Keyword-precision for sciences, definitions decks, QA drillers, careless-error checklists, source-skills ladders, POA formats.",
  },
  {
    emoji: "🚨",
    title: "The rescue plan",
    body: "Behind? One tap ranks what's left by marks recovered per hour and lays it out day by day to your first paper. Printable.",
  },
  {
    emoji: "⏱",
    title: "Exam timers & pacing",
    body: "A rehearsal clock with invigilator chimes, a focus timer with weekly totals, and a pace target from your real paper dates.",
  },
] as const;

function StudyHq() {
  return (
    <section className="reveal py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center font-mono text-xs font-medium uppercase tracking-wide text-teal">
          Included with every subject · no subscription
        </p>
        <h2 className="mt-2 text-center font-display text-4xl font-black text-white sm:text-5xl">
          The PDFs are the plan.{" "}
          <span className="text-accent">StudyLand runs it.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-cloud">
          Buy any subject and your dashboard wakes up: daily practice aimed by
          the forecast, a notebook that hunts your weak spots, and a live count
          of the marks still on the table.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STUDY_HQ_FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-hairline bg-surface p-6"
            >
              <p aria-hidden="true" className="text-2xl">
                {f.emoji}
              </p>
              <h3 className="mt-3 font-display text-lg font-bold text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cloud">{f.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/diagnostic"
            className="btn-pixel inline-block rounded bg-accent px-6 py-3 text-sm font-bold text-night"
          >
            Start free: predict your mark →
          </Link>
          <p className="mt-3 text-xs text-cloud">
            10 questions on your subject&apos;s most-likely topics · instant
            marking · indicative grade band, never a promise
          </p>
        </div>
      </div>
    </section>
  );
}

const HEROES = [
  { src: "/marketing/hero_jun.png", name: "JUN" },
  { src: "/marketing/hero_mei.png", name: "MEI" },
  { src: "/marketing/hero_agent.png", name: "AGENT X" },
] as const;

const GURUS = [
  {
    sprite: "/marketing/guru_newt.png",
    emblem: "/marketing/emblem_flask.png",
    name: "Guru Fen",
    province: "Chemistry · Marshlight Fen",
    teach: "Moles, bonding and acids from first principles, one bubbling experiment at a time.",
  },
  {
    sprite: "/marketing/guru_ram.png",
    emblem: "/marketing/emblem_atom.png",
    name: "Guru Tor",
    province: "Physics · Kitestone Highlands",
    teach: "Forces, fields and units taught on the windiest cliff in the world.",
  },
  {
    sprite: "/marketing/guru_sprout.png",
    emblem: "/marketing/emblem_leaf.png",
    name: "Guru Vale",
    province: "Biology · Deepgrove",
    teach: "Cells to ecosystems, with the keyword precision examiners reward.",
  },
  {
    sprite: "/marketing/guru_counter.png",
    emblem: "/marketing/icon_abacus.png",
    name: "Guru Sum",
    province: "Mathematics · Terrace Vale",
    teach: "Steps stacked in the right order. Method drills until careless slips vanish.",
  },
  {
    sprite: "/marketing/guru_drifter.png",
    emblem: "/marketing/emblem_globe.png",
    name: "Guru Mere",
    province: "Geography · Windmere Shores",
    teach: "Map skills and case studies that stick, taught with the tide as a chalkboard.",
  },
  {
    sprite: "/marketing/guru_watcher.png",
    emblem: "/marketing/icon_scroll.png",
    name: "Guru Ash",
    province: "History · Ashlight Ruins",
    teach: "Sources, evidence and essays that finish on time.",
  },
] as const;

// The game, framed exactly as the owner wants it: the prediction suite is the
// product; StudyLah Legends is a beta playground it unlocks, for purchasers only.
function FogFrontierBeta() {
  return (
    <section id="fog-frontier" className="reveal scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="rounded bg-violet px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-white">
            Beta
          </span>
          <span className="rounded-full border border-hairline bg-surface px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-cloud">
            Included with any subject · purchasers only
          </span>
        </div>
        <h2 className="mx-auto mt-5 max-w-3xl text-center font-display text-4xl font-black text-white sm:text-5xl">
          Revision that plays like an adventure, {" "}
          <span className="text-accent">because combat is real exam questions.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-cloud">
          Every subject you own opens a province to explore. Wild monsters are the
          questions you tend to miss; every answer builds a worked-solution you keep.
          Fifteen minutes a day, aimed by your forecast at your actual weak topics.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-cloud">
          <span className="font-semibold text-white">The prediction suite is the product you buy.</span>{" "}
          StudyLah Legends is the beta playground it unlocks, a bonus, not the pitch.
          It&apos;s in active development, so expect it to keep growing.
        </p>

        {/* Pick your researcher + Gugu */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-hairline bg-surface p-6">
          <div className="flex flex-wrap items-end justify-center gap-6">
            {HEROES.map((h) => (
              <div key={h.name} className="flex flex-col items-center gap-2">
                <Px src={h.src} w={48} h={72} alt={h.name} />
                <span className="font-mono text-xs font-bold tracking-widest text-accent">
                  {h.name}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-sm text-cloud">
            Pick your researcher. <span className="text-white">Gugu</span>, your ghost
            companion, drifts a step behind, cheering every strike and evolving with
            your effort: Gugu → Guglow → Gugleam → Gubright → Guguardian.
          </p>
        </div>

        {/* The Gurus */}
        <div className="mt-14">
          <p className="text-center font-mono text-xs font-medium uppercase tracking-widest text-violet">
            The Academy
          </p>
          <h3 className="mt-2 text-center font-display text-2xl font-black text-white">
            Every subject has a Guru waiting to teach you.
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-cloud">
            Short lessons, worked examples, then a check-question tuned to your own
            mistake notebook. Visit any time, they never judge, they only teach.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GURUS.map((g) => (
              <div
                key={g.name}
                className="flex items-start gap-4 rounded-2xl border border-hairline bg-surface p-5"
              >
                <Px src={g.sprite} size={56} alt={g.name} />
                <div>
                  <div className="flex items-center gap-2">
                    <Px src={g.emblem} size={20} />
                    <h4 className="font-display text-lg font-bold text-white">{g.name}</h4>
                  </div>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-teal">
                    {g.province}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-cloud">{g.teach}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/subjects"
            className="btn-pixel inline-block rounded bg-accent px-6 py-3 text-sm font-bold text-night"
          >
            Unlock StudyLah Legends with any subject →
          </Link>
          <p className="mt-3 text-xs text-cloud">
            No separate purchase, no subscription. Buy the forecast; the beta comes with it.
          </p>
        </div>
      </div>
    </section>
  );
}

function Decision() {
  return (
    <section className="reveal bg-gradient-to-b from-[#12312b] to-night py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <div className="flex justify-center">
          <SectionGhost />
        </div>
        <div className="relative z-10 -mt-[6px] flex justify-center">
          <Badge>Study Less, Score More</Badge>
        </div>
        <h2 className="mt-4 font-display text-3xl font-black text-accent sm:text-4xl lg:text-5xl">
          Your Moment of Decision
        </h2>
        {existsSync(
          join(process.cwd(), "public", "marketing", "decision-summit.png")
        ) && (
          <div className="mt-6 flex justify-center">
            <Image
              src="/marketing/decision-summit.png"
              alt="A flag planted on a mountain summit"
              width={300}
              height={320}
              className="h-auto w-36 sm:w-44"
            />
          </div>
        )}
        <p className="mx-auto mt-6 max-w-xl text-lg text-white sm:text-xl">
          StudyLah! is not about studying more. It&apos;s about studying{" "}
          <span className="font-bold text-mint">smarter</span>.
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
    <section aria-labelledby="levels-heading" className="reveal mx-auto max-w-6xl px-4 py-20">
      <h2 id="levels-heading" className="text-center font-display text-3xl font-black text-white">
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
  const { perfect, total } = scorecardHeadline();
  return (
    <section aria-labelledby="trust-heading" className="reveal bg-violet-2 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="trust-heading" className="sr-only">
          Why students trust StudyLah
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-5xl font-black text-accent">
              {perfect} of {total}
            </p>
            <p className="mt-1 text-sm text-white/80">
              2024-25 scorecards where all five highest-mark topics were
              forecast High or above*
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
              recycled past-paper content, every question is written for
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
          *Counted from the published per-subject scorecards, every hit and
          miss is on the accuracy page.
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
    body: "You get the forecast. After the sitting, we publish what hit and what missed, in public, every year.",
  },
];

function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="reveal mx-auto max-w-6xl px-4 py-20">
      <h2 id="how-heading" className="text-center font-display text-3xl font-black text-white">
        How the forecast works
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-cloud">
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
        A forecast can be wrong, that&apos;s why the{" "}
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
            Try it free: predict your mark
          </h2>
          <p className="mt-2 text-sm text-cloud">
            Ten questions on the topics most likely to come up in your subject,
            auto-marked in about seven minutes. Get an instant score, an
            indicative grade band, and worked solutions, free, no card. See
            exactly where you stand before you spend a cent.
          </p>
        </div>
        <div className="mt-5">
          <Link
            href="/diagnostic"
            className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-bold text-night"
          >
            Predict your mark, free →
          </Link>
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
      <TheProblem />
      <TheCause />
      <SocialProof />
      <TheSolution />
      <PricingTiers pricing={pricing} />
      <WhyItWorks />
      <Journey pricing={pricing} />
      <StudyHq />
      <FogFrontierBeta />
      <Decision />
      <LevelEntry pricing={pricing} />
      <TrustStrip />
      <HowItWorks />
      <FreeHeatmapBanner />
    </div>
  );
}
