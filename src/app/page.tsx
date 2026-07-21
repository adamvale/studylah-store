import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { scorecardHeadline } from "@/lib/accuracy-data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  // Absolute title so the homepage carries the money keywords, not just the
  // brand slogan (the template still brands every inner page).
  title: {
    absolute: "O Level & N Level Exam Prep 2026: Predicted Topics & Practice | StudyLah",
  },
  description:
    "Data-driven 2026 exam preparation for Singapore O-Level and N-Level students: Chemistry, Physics, Biology, Maths and more. Every topic ranked by likelihood, original practice questions, and full timed mock papers. Independent publisher, accuracy published.",
  keywords: [
    "O Level exam prep Singapore",
    "N Level exam prep Singapore",
    "O Level Chemistry 2026",
    "O Level Physics 2026",
    "O Level Biology 2026",
    "N Level Chemistry 2026",
    "N Level Physics 2026",
    "N Level Biology 2026",
    "O Level predicted topics",
    "O Level practice questions",
    "Singapore Cambridge GCE O Level",
  ],
};
import {
  getSubject,
  JOURNEY_ORDER,
  LEVELS,
  PRODUCTS,
  sgd,
  PUBLISHED_LEVELS,
  subjectsForLevel,
} from "@/lib/catalogue";
import { subjectCopy } from "@/lib/subject-copy";
import type { Pricing } from "@/lib/pricing";
import { bundleLadder } from "@/lib/bundle-ladder";
import { getPricing } from "@/lib/server/pricing-store";
import { ExamCountdown } from "@/components/exam-countdown";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { PackCarousel } from "@/components/pack-carousel";
import { SocialProof } from "@/components/social-proof";
import { NamedIcon } from "@/components/icons";

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
  // coral + pink fail WCAG AA against white (2.8/3.0:1); dark text clears it.
  "bg-coral text-night",
  "bg-mint text-night",
  "bg-[#5b5bd6] text-white",
  "bg-[#0fb5ae] text-night",
  "bg-[#e0729b] text-night",
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
    <section
      // overflow-x-clip, not overflow-hidden: hidden would break the pack
      // carousel's position:sticky pinning; clip still contains horizontal
      // bleed from the breakout row (the backdrop clips itself).
      className="relative flex items-center overflow-x-clip md:min-h-[calc(100svh-4.5rem)]"
    >
      <HeroBackdrop />
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-12 pt-7 text-center lg:pt-8">
        <div className="fade-up flex w-full flex-col items-center">
          {/* Eyebrow, animated: drops in, then floats gently */}
          <div className="hero-pill inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs font-medium text-cloud backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Built from 10 years of real exam data
          </div>

          {/* Headline, sized to land the eye on the key words. */}
          <h1 className="mt-5 flex max-w-5xl flex-col font-display font-black leading-[1.02] tracking-tight text-white">
            <span className="text-4xl sm:text-7xl">Stop revising blind.</span>
            <span className="mt-1 text-3xl font-extrabold text-cloud sm:text-6xl">
              Walk in knowing
            </span>
            <span className="mt-1 text-5xl text-accent sm:text-8xl">
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
            <span className="font-semibold text-accent">calm, confident readiness</span>,
            not last-minute panic.
          </p>

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

          {/* Browse-by-subject affordance, below the primary action so the CTA
              is never buried under the (tall) subject list on mobile. */}
          <div className="mt-8 w-full border-t border-white/10 pt-6">
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-wide text-cloud/70">
              Or jump straight to your subject
            </p>
            <SubjectPills />
            <Link
              href="/subjects"
              className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
            >
              See every subject →
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

// "The Problem" agitation section: names the pain a parent feels before we
// show the fix. Two overheard-after-the-paper speech bubbles (chat style,
// alternating sides) and a verdict card that dims the wrong explanations and
// lights up the real one.
function TheProblem() {
  const artPath = "/marketing/parent-thinking.webp";
  const hasArt = existsSync(
    join(process.cwd(), "public", "marketing", "parent-thinking.webp")
  );
  return (
    <section aria-labelledby="problem-heading" className="reveal pb-16 pt-8">
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

        {/* Overheard after the paper: chat-style bubbles, tail toward the
            speaker's side, so the pain reads as a real voice, not a card. */}
        <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 text-left">
          {[
            {
              quote: "This didn't come out. I didn't expect that question.",
              where: "Outside the exam hall",
              side: "left" as const,
            },
            {
              quote: "I knew the topic, but I didn't know how to answer.",
              where: "At the dinner table",
              side: "right" as const,
            },
          ].map((q) => (
            <div
              key={q.quote}
              className={`flex ${q.side === "right" ? "justify-end" : "justify-start"}`}
            >
              <blockquote
                className={`relative max-w-[88%] rounded-2xl border border-coral/30 bg-surface px-5 py-4 sm:max-w-md ${
                  q.side === "right" ? "rounded-br-md" : "rounded-bl-md"
                }`}
              >
                <p className="text-base font-semibold leading-snug text-white">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p className="mt-2 flex items-center gap-1.5 font-mono text-[10px] font-medium uppercase tracking-wide text-coral/80">
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-coral" />
                  {q.where}
                </p>
              </blockquote>
            </div>
          ))}
        </div>

        {/* The verdict: two dimmed wrong explanations, then the real one lit. */}
        <div className="mx-auto mt-6 max-w-xl overflow-hidden rounded-2xl border border-hairline text-left">
          <div className="border-b border-hairline bg-surface px-5 py-3.5">
            <p className="font-display text-lg font-black text-coral">
              The Big Question:
            </p>
          </div>
          <ul className="divide-y divide-hairline">
            <li className="flex items-center gap-3 bg-surface/50 px-5 py-3.5 text-base text-cloud/70">
              <ProblemGlyph char="?" />
              Was it lack of effort?
            </li>
            <li className="flex items-center gap-3 bg-surface/50 px-5 py-3.5 text-base text-cloud/70">
              <ProblemGlyph char="?" />
              Was it stress?
            </li>
            <li className="flex items-center gap-3 bg-accent/10 px-5 py-4 text-base font-bold text-accent">
              <span
                aria-hidden="true"
                className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-black text-night"
              >
                !
              </span>
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
        <span className="font-bold text-accent">right things.</span>
      </>
    ),
  },
  {
    label: "Type 3",
    body: <>Students spent hours studying daily, yet barely passing tests.</>,
  },
];

function TheCause() {
  const artPath = "/marketing/cause-student.webp";
  const hasArt = existsSync(
    join(process.cwd(), "public", "marketing", "cause-student.webp")
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
    tier: "Plus & up",
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
    tier: "Ultra tier",
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
    tier: "Ultra tier",
  },
];

const STRATEGY_STEPS = [
  "Use the Exam Forecast to aim your final weeks at the likeliest topics.",
  "Use the Sure Questions Vault to lock the non-negotiable core concepts.",
  "Use the Final Rehearsal to train pattern recognition and exam execution closer to the paper.",
  "Add the Companion to bank the marks most students under-rehearse.",
];

function TheSolution() {
  const artPath = "/marketing/solution-target.webp";
  const hasArt = existsSync(
    join(process.cwd(), "public", "marketing", "solution-target.webp")
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
              <span className="font-bold text-accent">knowing what to revise</span>{" "}
              all the way to{" "}
              <span className="font-bold text-accent">walking in ready</span>:
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
                href="/pricing"
                className="btn-pixel cta-sheen glow-soft inline-block rounded bg-accent px-6 py-3 text-sm font-bold text-night"
              >
                Get all four with Ultra →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// The full tier + bundle ladder now lives on /pricing; the home page keeps a
// slim hand-off band so the flow (Solution -> price question) still resolves.
function PricingHandoff({ pricing }: { pricing: Pricing }) {
  const { tierPrice, tierSavings } = pricing;
  const maxBundleSavings = Math.max(...bundleLadder(pricing).map((b) => b.savings));
  return (
    <section id="tiers" className="reveal scroll-mt-24 py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-3xl border border-hairline bg-surface p-8 text-center sm:p-10">
          <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
            One subject from {sgd(tierPrice("o-level", "essential"))}.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-cloud">
            Ultra is {sgd(tierPrice("o-level", "master"))} per subject and most
            families bundle: stack subjects and save up to{" "}
            <span className="font-bold text-guarantee">{sgd(maxBundleSavings)}</span>. Every tier
            is covered by the{" "}
            <span className="font-medium text-guarantee">money-back guarantee</span>.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/pricing"
              className="btn-pixel cta-sheen glow-soft rounded bg-accent px-7 py-3.5 text-sm font-bold text-night"
            >
              See pricing and bundles →
            </Link>
            <Link
              href="/subjects"
              className="rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-accent"
            >
              Browse subjects
            </Link>
          </div>
          <p className="mt-4 font-mono text-xs text-body">
            Ultra saves {sgd(tierSavings("o-level", "master"))} per subject vs
            buying the parts · instant PDF download
          </p>
        </div>
      </div>
    </section>
  );
}

// Compliant reworking of the "product packs" merchandising idea: real
// subjects, real forecast framing (no "predicted papers", no "sure appear",
// no invented scarcity), each pack a link into its subject page.
// Sequence matters: the wheel shows [0,1,2] at rest, so Chemistry (index 1)
// starts as the large centre box, and scrolling turns the wheel through
// Social Studies, Geography and History.
const FEATURED_PACKS = [
  { level: "o-level", slug: "physics-pure", grad: "linear-gradient(155deg,#0066ff 0%,#002e7a 100%)" },
  { level: "o-level", slug: "chemistry-pure", grad: "linear-gradient(155deg,#7c1fff 0%,#3d007a 100%)" },
  { level: "o-level", slug: "biology-pure", grad: "linear-gradient(155deg,#00b34a 0%,#00521f 100%)" },
  { level: "o-level", slug: "social-studies", grad: "linear-gradient(155deg,#ff00a8 0%,#b80079 100%)" },
  { level: "o-level", slug: "geography-pure", grad: "linear-gradient(155deg,#00b3c8 0%,#004e5c 100%)" },
  { level: "o-level", slug: "history-pure", grad: "linear-gradient(155deg,#ff1f4c 0%,#5e0519 100%)" },
] as const;

// The 2026 packs inside the hero. With the box renders present this is the
// scroll-driven wheel (three visible, centre largest); if renders are
// missing it falls back to a static 3-up of styled gradient cards.
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

  const withImg = packs.filter(
    (p): p is (typeof packs)[number] & { img: string } => p.img !== null
  );
  if (withImg.length >= 3) {
    return (
      <div className="sm:-mx-8 md:-mx-16 lg:-mx-24">
        <PackCarousel
          packs={withImg.map((p) => ({
            slug: p.slug,
            level: p.level,
            name: p.name,
            img: p.img,
          }))}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-4xl grid-cols-3 gap-1">
      {packs.slice(0, 3).map((p) =>
        p.img ? (
          <div key={p.slug} className="relative aspect-[333/456] w-full">
            <Image
              src={p.img}
              alt={`${p.name}, StudyLah 2026 pack`}
              fill
              priority
              sizes="(max-width: 640px) 45vw, 400px"
              className="rotate-1 object-contain drop-shadow-2xl"
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
    join(process.cwd(), "public", "marketing", "why-brain.webp")
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
              src="/marketing/why-brain.webp"
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
  const { tierPrice, tierValue, tierSavings } = pricing;
  return (
    <section aria-labelledby="journey-heading" className="reveal py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <div className="flex justify-center">
          <SectionGhost />
        </div>
        <div className="relative z-10 -mt-[6px] flex justify-center">
          <Badge>The Revision Journey</Badge>
        </div>
        <h2
          id="journey-heading"
          className="mt-4 font-display text-3xl font-black text-accent sm:text-4xl lg:text-5xl"
        >
          Your last 30 days, planned
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-cloud">
          No more staring at a mountain of notes. Each subject arrives as a
          day-by-day plan, so the final fortnight has a{" "}
          <span className="font-semibold text-accent">
            clear start, middle and calm finish
          </span>
          .
        </p>
        <div className="mt-10 grid gap-6 text-left md:grid-cols-3">
          {JOURNEY_ORDER.map((key, i) => {
            const product = PRODUCTS[key];
            const dayLabel = ["Day 30", "Day 20", "Day 10"][i];
            return (
              <div
                key={key}
                className="relative rounded-2xl border border-hairline bg-surface p-6"
              >
                <span className="inline-block rounded-full bg-violet px-3 py-1 font-mono text-xs font-bold text-white">
                  {dayLabel}
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
              </div>
            );
          })}
        </div>
        <p className="mt-6 rounded-xl border border-hairline bg-surface px-4 py-3 text-sm text-cloud">
          Get all three with the Ultra tier,{" "}
          {sgd(tierValue("o-level", "master"))} of material for{" "}
          <span className="font-semibold text-accent">
            {sgd(tierPrice("o-level", "master"))}
          </span>
          , a saving of{" "}
          <span className="font-semibold text-accent">
            {sgd(tierSavings("o-level", "master"))}
          </span>{" "}
          per subject.
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
    emoji: "target",
    title: "Marks at Risk",
    body: "One honest number per subject: how much of a typical paper is still in play. Tick topics, clear mistakes, watch it fall.",
  },
  {
    emoji: "flame",
    title: "The Daily Three",
    body: "Three questions a day on your VERY HIGH and HIGH topics, marked instantly. Ten minutes that beat three-hour cramming.",
  },
  {
    emoji: "pencil",
    title: "Mistake notebook",
    body: "Every miss saved automatically. Missed questions come back until you beat them twice, then they clear for good.",
  },
  {
    emoji: "calculator",
    title: "Skill drills",
    body: "Keyword-precision for sciences, definitions decks, QA drillers, careless-error checklists, source-skills ladders, POA formats.",
  },
  {
    emoji: "lifebuoy",
    title: "The rescue plan",
    body: "Behind? One tap ranks what's left by marks recovered per hour and lays it out day by day to your first paper. Printable.",
  },
  {
    emoji: "timer",
    title: "Exam timers & pacing",
    body: "A rehearsal clock with invigilator chimes, a focus timer with weekly totals, and a pace target from your real paper dates.",
  },
] as const;

function StudyHq() {
  return (
    <section className="reveal py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center font-mono text-xs font-medium uppercase tracking-wide text-teal">
          Ultra tier only · In beta · Early access
        </p>
        <h2 className="mt-2 text-center font-display text-4xl font-black text-white sm:text-5xl">
          The PDFs are the plan.{" "}
          <span className="text-accent">StudyLand runs it.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-cloud">
          Unlock the{" "}
          <span className="font-semibold text-accent">Ultra tier</span>{" "}
          and your dashboard wakes up: daily practice aimed by the forecast, a notebook
          that hunts weak spots, and a live count of the marks still on the
          table. It&apos;s the{" "}
          <span className="font-semibold text-accent">cherry on top</span>, an
          early-access beta that lets your child run the whole study journey like
          never before.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {STUDY_HQ_FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-hairline bg-surface p-4 sm:p-6"
            >
              <p aria-hidden="true" className="text-2xl">
                <NamedIcon name={f.emoji} size={26} />
              </p>
              <h3 className="mt-3 font-display text-base font-bold text-white sm:text-lg">
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
            A short diagnostic quiz on the concepts most likely to appear in your
            2026 paper, then an indicative prediction of your score, never a
            promise.
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
          <span className="rounded-full border-2 border-violet bg-surface px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wide text-cloud">
            Ultra tier only · early access
          </span>
        </div>
        <h2 className="mx-auto mt-5 max-w-3xl text-center font-display text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
          Play an <span className="text-accent">RPG game</span> to learn.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-cloud">
          The <span className="font-semibold text-accent">Ultra tier</span> unlocks
          StudyLah Legends: every subject you own opens a province to explore. Wild
          monsters are the questions you tend to miss; every answer builds a
          worked-solution you keep. Fifteen minutes a day, aimed by your forecast
          at your actual weak topics.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-cloud">
          <span className="font-semibold text-accent">The prediction suite is the product you buy.</span>{" "}
          StudyLah Legends is the early-access beta that comes with Ultra, a bonus,
          not the pitch, and it keeps growing.
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
            Unlock StudyLah Legends with the Ultra tier →
          </Link>
          <p className="mt-3 text-xs text-cloud">
            No separate purchase, no subscription. The Ultra tier includes the
            early-access beta.
          </p>
        </div>
      </div>
    </section>
  );
}

function Decision() {
  return (
    <section className="reveal bg-gradient-to-b from-teal/10 to-transparent py-20">
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
          join(process.cwd(), "public", "marketing", "decision-summit.webp")
        ) && (
          <div className="mt-6 flex justify-center">
            <Image
              src="/marketing/decision-summit.webp"
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
    // No page-level background: the landing page sits on the same site-wide
    // gradient as every other page. A `bg-night` wrapper here used to veil the
    // whole page and made the hero look like a different surface.
    <div>
      <Hero pricing={pricing} />
      <TheProblem />
      <TheCause />
      <SocialProof />
      <TheSolution />
      <PricingHandoff pricing={pricing} />
      <WhyItWorks />
      <Journey pricing={pricing} />
      <StudyHq />
      <FogFrontierBeta />
      <Decision />
      <FreeHeatmapBanner />
    </div>
  );
}
