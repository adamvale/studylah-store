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
} from "@/lib/catalogue";
import { subjectCopy } from "@/lib/subject-copy";
import type { Pricing } from "@/lib/pricing";
import { getPricing } from "@/lib/server/pricing-store";
import { ExamCountdown } from "@/components/exam-countdown";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { PackPreview } from "@/components/pack-preview";
import { packPreviewFor } from "@/lib/pack-previews";
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

function Hero({ pricing }: { pricing: Pricing }) {
  const { alacartePrice } = pricing;
  const { perfect, total } = scorecardHeadline();
  const heroPreview = packPreviewFor("o-level", "chemistry-pure");
  return (
    <section className="relative flex items-center overflow-hidden md:min-h-[calc(100svh-4.5rem)]">
      <HeroBackdrop />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-24 pt-14 lg:grid-cols-2 lg:pt-16">
        <div className="fade-up">
          {/* Layer 1 — eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs font-medium text-cloud backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Built from 10 years of real exam data
          </div>

          {/* Countdown, right under the eyebrow */}
          <div className="mt-3">
            <ExamCountdown />
          </div>

          {/* Layer 2 — headline */}
          <h1 className="mt-5 font-display text-[2.6rem] font-black leading-[1.05] tracking-tight text-white sm:text-6xl">
            Stop revising blind. Walk in knowing{" "}
            <span className="text-gradient">what&apos;s likely.</span>
          </h1>

          {/* Layer 3 — one-sentence subhead */}
          <p className="mt-4 max-w-md text-base leading-relaxed text-cloud sm:text-lg">
            We rank every{" "}
            {PUBLISHED_LEVELS.map((l) => LEVELS[l].shortName).join(" and ")}{" "}
            topic by how likely it is on the 2026 paper, and drill the questions
            according to it, so your last weeks go to what matters, not
            everything.
          </p>

          {/* Layer 4 — the two actions (full-width, stacked on mobile) */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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

          {/* Layer 5 — one calm trust line (guarantee · price · proof) */}
          <div className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 border-t border-white/10 pt-5 text-sm text-cloud">
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
        <div className="fade-up relative" style={{ animationDelay: "150ms" }}>
          <div className="mascot-bob pointer-events-none absolute -right-2 -top-8 z-10 hidden sm:block">
            <Ghost size={72} pose="victory" />
          </div>
          {/* The flippable "see inside" preview of the real PDFs, floated off
              the aurora. Replaces the old abstract forecast card. */}
          {heroPreview && (
            <PackPreview
              preview={heroPreview}
              subjectName="Chemistry (Pure)"
              variant="hero"
            />
          )}
        </div>
      </div>

      {/* Scroll cue, signals there's more below the full-height hero. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-5 hidden justify-center md:flex">
        <span className="scroll-cue text-cloud" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </section>
  );
}

// Compliant reworking of the "three product packs" merchandising idea: real
// subjects, real forecast framing (no "predicted papers", no "sure appear",
// no invented scarcity), each pack a link into its subject page.
const FEATURED_PACKS = [
  { slug: "physics-pure", grad: "linear-gradient(155deg,#5b5bd6 0%,#191b52 100%)" },
  { slug: "chemistry-pure", grad: "linear-gradient(155deg,#0fb5ae 0%,#0a3a36 100%)" },
  { slug: "biology-pure", grad: "linear-gradient(155deg,#3fbf5f 0%,#0f3a1e 100%)" },
] as const;

function FeaturedPacks({ pricing }: { pricing: Pricing }) {
  const { alacartePrice } = pricing;
  const packs = FEATURED_PACKS.map((p) => ({
    ...p,
    name: getSubject("o-level", p.slug)?.name ?? p.slug,
    code: subjectCopy("o-level", p.slug)?.syllabusCode ?? "",
  }));
  return (
    <section aria-labelledby="packs-heading" className="reveal border-t border-white/5 py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <div className="flex justify-center">
          <Badge>Study Less, Score More</Badge>
        </div>
        <h2
          id="packs-heading"
          className="mt-5 font-display text-3xl font-black text-white sm:text-4xl"
        >
          Smarter O-Level &amp; N(A)-Level{" "}
          <span className="text-accent">final-exam prep</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-cloud">
          Stop guessing. Stop over-studying. Every pack ranks your 2026 topics
          by how likely they are, then drills them with original questions, so
          you walk in calm, confident and ready.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-5">
          {packs.map((p) => (
            <Link key={p.slug} href={`/o-level/${p.slug}`} className="group">
              <div
                className="relative flex aspect-[3/4] flex-col overflow-hidden rounded-2xl border border-white/10 p-3 text-left shadow-xl transition-transform duration-300 group-hover:-translate-y-1.5 sm:p-5"
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
                    O-Level · {p.code}
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
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Link
            href="/subjects"
            className="btn-pixel cta-sheen glow-soft rounded bg-accent px-7 py-3.5 text-sm font-bold text-night"
          >
            See every subject →
          </Link>
          <p className="font-mono text-xs text-cloud">
            Every subject: forecast, practice, rehearsal. From{" "}
            {sgd(alacartePrice("o-level", "forecast"))} · money-back guarantee
          </p>
        </div>
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
    body: "The recurring topics that consistently anchor the most marks in past exams, so you revise them first.",
  },
  {
    title: "High-Chance Questions",
    body: "Original questions built around the highest-probability structures, giving your practice strategic focus.",
  },
];

function WhyItWorks() {
  return (
    <section className="reveal bg-night-2 py-20">
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
          Exams don&apos;t reward more hours of study, they reward{" "}
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
              className="card-hover rounded-2xl border border-hairline bg-surface p-6"
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
    <section aria-labelledby="journey-heading" className="reveal py-20">
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
                className="card-hover relative rounded-2xl border border-hairline bg-surface p-6"
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
    <section className="reveal bg-night-2 py-20">
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
              className="card-hover rounded-2xl border border-hairline bg-surface p-6"
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
    <section id="fog-frontier" className="reveal scroll-mt-20 bg-night-2 py-20">
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
                className="card-hover flex items-start gap-4 rounded-2xl border border-hairline bg-surface p-5"
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
    <section aria-labelledby="levels-heading" className="reveal mx-auto max-w-6xl px-4 py-20">
      <h2 id="levels-heading" className="font-display text-3xl font-black text-white">
        Find your papers
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {PUBLISHED_LEVELS.map((level) => (
          <Link
            key={level}
            href={`/${level}`}
            className="card-hover group rounded-2xl border border-hairline bg-surface p-6 transition-colors hover:border-accent"
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
            className="card-hover rounded-2xl border border-hairline bg-surface p-6"
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
            className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
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
      <FeaturedPacks pricing={pricing} />
      <SocialProof />
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
