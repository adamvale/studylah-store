import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { scorecardHeadline } from "@/lib/accuracy-data";
import { sgd } from "@/lib/catalogue";
import { getPricing } from "@/lib/server/pricing-store";
import { StickyCta } from "@/components/sticky-cta";

export const metadata: Metadata = {
  title: "Know what's likely before you sit the paper — StudyLah",
  description:
    "StudyLah reads ten years of your exact exam papers and forecasts the topics most likely to appear — with original practice and a full rehearsal. Money-back guarantee.",
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-violet px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
      {children}
    </span>
  );
}

function CTA({ children = "Find your subject's forecast" }: { children?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        href="/o-level"
        className="rounded-lg bg-accent px-6 py-3.5 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
      >
        {children}
      </Link>
      <Link
        href="/free-heatmap"
        className="rounded-lg border border-hairline bg-surface px-6 py-3.5 text-sm font-medium text-white hover:border-accent"
      >
        See a free sample →
      </Link>
    </div>
  );
}

const PROBLEMS = [
  "You revise everything, so you master nothing.",
  "You pour hours into topics that barely show up.",
  "You walk in hoping the right questions appear.",
];

const STEPS = [
  {
    n: "01",
    t: "We read ten years of your exact papers",
    b: "Every question from the last decade of your syllabus — classified, mark-weighted, and tracked for how setters rotate topics year to year.",
  },
  {
    n: "02",
    t: "We rank what's most likely for 2026",
    b: "That decade of data becomes a confidence-tiered probability for every topic on your paper. You see where the marks live before you open a book.",
  },
  {
    n: "03",
    t: "You practise it, then rehearse it",
    b: "Original questions weighted to the forecast, then a full timed mock in the exact 2026 format — so the real paper feels like the second time, not the first.",
  },
];

const GETS = [
  {
    t: "Exam Forecast",
    b: "The ranked, tiered map of your 2026 paper — every topic, with the evidence behind each call.",
  },
  {
    t: "The Companion",
    b: "A dedicated forecast for the paper or skill that decides the most marks — the practical, the source skills, the method layer.",
  },
  {
    t: "Sure Questions Vault",
    b: "Original exam-style questions weighted to the forecast, each with a full mark-scheme-style answer key.",
  },
  {
    t: "Final Rehearsal",
    b: "A complete original mock in the exact 2026 format, with the full mark scheme — sit the exam before the exam.",
  },
];

const OBJECTIONS = [
  {
    q: "Is this cheating?",
    a: "No. We don't have the real papers and never will — they're Cambridge and MOE copyright. We forecast what's likely and write our own original questions. It's studying the right things, not skipping the studying.",
  },
  {
    q: "Isn't it just guessing?",
    a: "Guessing is revising everything and hoping. This is ten years of data turned into a ranked probability — and we publish our hits and misses after every sitting.",
  },
  {
    q: "What if it's wrong?",
    a: "Then it's free. If fewer than three of our top-five topics appear in your paper, you get a full refund. We carry the risk, not you.",
  },
];

export default async function ExamForecastPage() {
  const { tierPrice, alacartePrice, tierValue, tierSavings } = await getPricing();
  const from = sgd(alacartePrice("o-level", "forecast"));
  const tiers = [
    {
      name: "Essential",
      price: sgd(tierPrice("o-level", "essential")),
      line: "The Exam Forecast — the map of your paper.",
    },
    {
      name: "Strategic",
      price: sgd(tierPrice("o-level", "strategic")),
      line: "Forecast + the Sure Questions Vault to drill it.",
    },
    {
      name: "Master",
      price: sgd(tierPrice("o-level", "master")),
      line: `All four products. ${sgd(tierValue("o-level", "master"))} of material, save ${sgd(tierSavings("o-level", "master"))}.`,
      best: true,
    },
  ];

  return (
    <div className="bg-night pb-24">
      {/* Minimal chrome: brand only, no nav — nowhere to wander off. */}
      <header className="border-b border-hairline">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Image
            src="/studylah-logo.png"
            alt="StudyLah"
            width={286}
            height={97}
            priority
            className="h-8 w-auto"
          />
          <p className="hidden text-xs font-medium text-cloud sm:block">
            Money-back guarantee · Instant download
          </p>
        </div>
      </header>

      {/* Hook */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <div className="flex justify-center">
          <Badge>Built from 10 years of real exam data</Badge>
        </div>
        <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] text-white sm:text-6xl">
          Know what&apos;s likely{" "}
          <span className="text-accent">before you sit the paper.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cloud">
          Most students revise everything and hope. StudyLah reads ten years of
          your exact papers, ranks the topics most likely to appear in 2026, and
          hands you original questions and a full rehearsal for them. Less to
          revise. More of it that counts.
        </p>
        <div className="mt-8 flex justify-center">
          <CTA />
        </div>
        <p className="mt-5 text-sm text-cloud">
          Money-back guarantee · Instant PDF download · From {from} per subject
        </p>
      </section>

      {/* Agitate the problem */}
      <section className="bg-night-2 py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
            The problem was never how hard you study.
          </h2>
          <p className="mt-4 text-lg text-cloud">
            It&apos;s that no one tells you <em>where</em> to aim. So —
          </p>
          <ul className="mt-6 space-y-3">
            {PROBLEMS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-lg text-cloud">
                <span className="mt-1 text-coral">✕</span>
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg font-medium text-white">
            The exam rewards focus, not hours. StudyLah gives you the focus.
          </p>
        </div>
      </section>

      {/* Mechanism */}
      <section className="mx-auto max-w-4xl px-4 py-20">
        <div className="text-center">
          <Badge>How it works</Badge>
          <h2 className="mt-6 font-display text-3xl font-black text-accent sm:text-4xl">
            Ten years of papers, turned into your revision plan
          </h2>
        </div>
        <div className="mt-12 space-y-5">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="flex gap-5 rounded-2xl border border-hairline bg-surface p-6"
            >
              <p className="font-display text-3xl font-black text-teal">{s.n}</p>
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  {s.t}
                </h3>
                <p className="mt-1.5 text-cloud">{s.b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="bg-night-2 py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center font-display text-3xl font-black text-white sm:text-4xl">
            Four products. One revision order.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {GETS.map((g) => (
              <div
                key={g.t}
                className="rounded-2xl border border-hairline bg-surface p-6"
              >
                <h3 className="font-display text-xl font-bold text-accent">
                  {g.t}
                </h3>
                <p className="mt-2 text-cloud">{g.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <Badge>We show our working</Badge>
        <h2 className="mt-6 font-display text-3xl font-black text-white sm:text-4xl">
          Every other guide asks you to trust them.
          <br />
          <span className="text-accent">We publish the receipts.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-cloud">
          After every sitting we put out an accuracy scorecard — what we
          forecast against what actually appeared, per subject. Hits{" "}
          <em>and</em> misses. Because a forecast you can&apos;t check is just a
          promise, and we don&apos;t make promises.
        </p>
        <p className="mt-6 font-display text-5xl font-black text-accent">
          {scorecardHeadline().perfect} of {scorecardHeadline().total}
        </p>
        <p className="mt-1 text-sm text-cloud">
          2024–25 scorecards where all five highest-mark topics were forecast
          High or above*
        </p>
        <Link
          href="/accuracy"
          className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
        >
          See the full scorecard →
        </Link>
        <p className="mx-auto mt-6 max-w-md text-xs text-cloud/60">
          *Counted from the published per-subject scorecards — every hit and
          miss is on the accuracy page.
        </p>
      </section>

      {/* Offer */}
      <section className="bg-night-2 py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center font-display text-3xl font-black text-white sm:text-4xl">
            Pick your subject. Pick your depth.
          </h2>
          <p className="mt-3 text-center text-cloud">
            From {from} a subject. Every tier is covered by the guarantee.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-2xl border bg-surface p-6 ${
                  t.best ? "border-accent" : "border-hairline"
                }`}
              >
                {t.best && (
                  <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-night">
                    Best value
                  </span>
                )}
                <h3 className="font-display text-lg font-bold text-white">
                  {t.name}
                </h3>
                <p className="mt-1 font-display text-3xl font-black text-accent">
                  {t.price}
                </p>
                <p className="mt-3 text-sm text-cloud">{t.line}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <CTA>Browse subjects &amp; buy</CTA>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="mx-auto max-w-3xl px-4 py-20">
        <div className="rounded-3xl border border-guarantee/30 bg-guarantee/5 p-8 text-center">
          <h2 className="font-display text-3xl font-black text-guarantee sm:text-4xl">
            If it doesn&apos;t deliver, it&apos;s free.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white">
            Forecasts are probabilities, not certainties — so we carry the risk,
            not you. If fewer than three of our top-five forecast topics appear
            in your paper, email your order ID within 14 days and get a full
            refund. No forms. No argument.
          </p>
          <p className="mt-4 text-sm text-cloud">
            <Link href="/faq" className="font-medium text-accent underline">
              Read the full terms →
            </Link>
          </p>
        </div>
      </section>

      {/* Objections */}
      <section className="bg-night-2 py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
            Still not sure?
          </h2>
          <div className="mt-8 space-y-6">
            {OBJECTIONS.map((o) => (
              <div key={o.q}>
                <p className="font-display text-lg font-bold text-accent">
                  {o.q}
                </p>
                <p className="mt-1 text-cloud">{o.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-cloud">
            <Link href="/faq" className="font-medium text-accent underline">
              More straight answers →
            </Link>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h2 className="font-display text-4xl font-black text-white sm:text-5xl">
          The exam is coming either way.
          <br />
          <span className="text-accent">Walk in knowing what&apos;s likely.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg text-cloud">
          Sooner is cheaper — early-bird pricing runs while forecasts first
          drop. Start with the subject that worries you most.
        </p>
        <div className="mt-8 flex justify-center">
          <CTA />
        </div>
      </section>

      <StickyCta />
    </div>
  );
}
