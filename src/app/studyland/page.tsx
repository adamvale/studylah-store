import type { Metadata } from "next";
import Link from "next/link";
import { getPricing } from "@/lib/server/pricing-store";
import { sgd } from "@/lib/catalogue";

// Live pricing (the Master "from" price) must never go stale.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  alternates: { canonical: "/studyland" },
  title: "StudyLand, the study system",
  description:
    "How StudyLand takes a student who is behind and gives them a repeatable way to climb: a free readiness check, a forecast of what matters, two minutes of spaced practice a day, a mistake notebook that fights back, and a war room for the final week.",
};

// The full workflow, told as one student's run at it. Every mechanic below is
// a real feature; every claim is about the WORK, never the grade. That line
// is the compliance line and this page stays on the right side of it.

const STEPS: {
  phase: string;
  time: string;
  title: string;
  what: string;
  system: string;
  href: string;
  cta: string;
}[] = [
  {
    phase: "Day 1",
    time: "7 minutes, free",
    title: "Face the number",
    what: "Wei Jie takes the free Predict-your-mark check: 10 questions on the topics most likely to matter in 2026, marked instantly. He gets a score band and a topic heatmap, the first honest picture of where he stands.",
    system:
      "The heatmap turns \"I'm bad at Physics\" into \"I'm bleeding marks in Light, Dynamics and Practical Electricity.\" Named problems are fixable problems.",
    href: "/diagnostic",
    cta: "Try the free check",
  },
  {
    phase: "Day 1, ten minutes later",
    time: "instant with any pack",
    title: "See the battlefield",
    what: "His Exam Forecast ranks every syllabus topic by how likely it is to carry marks in 2026, built from ten years of real papers. StudyLand turns that into a live marks-at-risk meter for each subject.",
    system:
      "Revision stops being alphabetical. A student who is behind cannot afford to study everything, the meter says exactly where the marks are leaking.",
    href: "/subjects",
    cta: "See the packs",
  },
  {
    phase: "Every day",
    time: "2 minutes",
    title: "The daily three",
    what: "Three questions a day on his most-likely topics, marked instantly, with a streak that survives busy days. Nothing to decide, just open and answer.",
    system:
      "Every question he gets right comes back on a memory schedule (1, 3, 7, 21, 60 days) so it stays won. Every question he gets wrong becomes a monster in his notebook. Two minutes a day compounds into coverage.",
    href: "/account",
    cta: "Open StudyLand",
  },
  {
    phase: "Every mistake",
    time: "automatic",
    title: "The notebook that fights back",
    what: "Misses are captured automatically and tagged by WHY the mark was lost: careless slip, concept gap, method breakdown, or time. Each one resurfaces in his daily three until he beats it twice.",
    system:
      "The Diagnosis panel reads the pattern out loud: \"6 of your 9 mistakes are concept gaps in Light. That topic wants a real session, not more questions.\" That is a tutor's insight, on tap.",
    href: "/account",
    cta: "See the bestiary",
  },
  {
    phase: "Every week",
    time: "5 minutes a day",
    title: "Drills that win marks",
    what: "Definitions drilled to mark-scheme wording. Formulas recalled from memory, shown the way a textbook prints them, with every symbol and unit. Structured answers marked like a real marker: Score 2/4, here is exactly which crediting point you dropped.",
    system:
      "Markers award precise phrasing, and precision is trainable. The drills use the same spacing schedule, so the words are still there on paper day.",
    href: "/account",
    cta: "Open Drills",
  },
  {
    phase: "Falling behind?",
    time: "3 questions",
    title: "The Rescue plan",
    what: "Three questions (how do you feel, hours you can really give, which subjects) and StudyLand writes a day-by-day recovery plan that spends his remaining days only where the forecast says marks concentrate.",
    system:
      "Behind is a position, not a verdict. The plan trades perfection for the highest marks-per-hour path back.",
    href: "/account",
    cta: "See how it plans",
  },
  {
    phase: "Final 7 days",
    time: "per paper",
    title: "The War Room",
    what: "Seven days before each paper, that subject's war room opens: his top-5 forecast topics, a sweep of his own worst questions, one timed mock, and a night-before ritual that ends with sleep, not panic.",
    system:
      "No new content in the last week. Only sharpening what he already has, against the real SEAB timetable.",
    href: "/account",
    cta: "Preview the ritual",
  },
  {
    phase: "The whole time",
    time: "included, beta",
    title: "It plays like a game",
    what: "StudyLah Legends turns his subjects into provinces, his mistakes into monsters, and every battle into a real exam question. XP, streaks and badges do the motivating that willpower was failing to do.",
    system:
      "The game is the sugar. The syllabus is the medicine. He is practising either way.",
    href: "/account",
    cta: "Meet the Legends",
  },
];

export default async function StudyLandPage() {
  const pricing = await getPricing();
  const masterFrom = Math.min(
    pricing.tierPrice("o-level", "master"),
    pricing.tierPrice("na-level", "master")
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <p className="font-mono text-xs font-medium uppercase tracking-wide text-accent">
        Included with every Master pack
      </p>
      <h1 className="mt-2 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
        Study<span className="text-accent">Land</span>
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-body">
        The study system built for the student who is behind. It will not
        promise a grade, nobody honest can. It promises something better: a
        repeatable daily loop that finds where the marks are leaking, works
        exactly those topics, and keeps every mark once it is won.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href="/diagnostic"
          className="cta-sheen glow-soft rounded-lg bg-accent px-6 py-3 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
        >
          Predict your mark, free
        </Link>
        <Link
          href="/subjects"
          className="rounded-lg border border-hairline px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-accent"
        >
          Get Master, from {sgd(masterFrom)}
        </Link>
        <Link href="/account" className="text-sm text-body underline hover:text-ink">
          Already a member? Open StudyLand
        </Link>
      </div>

      {/* The premise */}
      <section className="mt-14 rounded-2xl border border-hairline bg-surface p-6">
        <h2 className="font-display text-2xl font-black text-ink">
          Meet the student we built this for
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-body">
          Wei Jie, Sec 4. Physics is wobbling, the mock said so, and the paper
          is 62 days away. He does not need more notes, his shelf is full of
          notes. He needs to know{" "}
          <span className="font-medium text-ink">which topics are bleeding marks</span>,
          a plan small enough to actually do every day, and a way to stop
          repeating the same mistakes. That is the whole design brief of
          StudyLand. Here is his next 62 days.
        </p>
      </section>

      {/* The workflow timeline */}
      <ol className="mt-10 space-y-4">
        {STEPS.map((s, i) => (
          <li
            key={s.title}
            className="relative rounded-2xl border border-hairline bg-surface p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-mono text-xs font-bold uppercase tracking-wide text-accent">
                {i + 1} · {s.phase}
              </p>
              <p className="text-xs text-body">{s.time}</p>
            </div>
            <h3 className="mt-2 font-display text-xl font-bold text-ink">
              {s.title}
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-body">
              {s.what}
            </p>
            <p className="mt-3 max-w-3xl border-l-2 border-accent/50 pl-3 text-sm leading-relaxed text-cloud">
              {s.system}
            </p>
            <Link
              href={s.href}
              className="mt-4 inline-block text-sm font-bold text-accent hover:underline"
            >
              {s.cta} →
            </Link>
          </li>
        ))}
      </ol>

      {/* What actually changes */}
      <section className="mt-12 rounded-2xl border border-accent/40 bg-surface p-6">
        <h2 className="font-display text-2xl font-black text-ink">
          What actually changes in 62 days
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            ["Nine untouched topics", "worked in priority order, highest marks first"],
            ["The same mistake, five times", "captured once, resurfaced, beaten twice, banished"],
            ["\"Roughly knows\" definitions", "mark-scheme wording, drilled until it is reflex"],
            ["A panicked final week", "a war room per paper, ending in sleep"],
          ].map(([from, to]) => (
            <div key={from} className="rounded-xl border border-hairline bg-night p-4">
              <p className="text-sm text-body line-through decoration-coral/60">{from}</p>
              <p className="mt-1 text-sm font-medium text-guarantee">→ {to}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body">
          We never promise the grade, exams keep their own counsel. We promise
          the work will be pointed at the right things, and we publish our
          forecast&apos;s hits and misses every year on the{" "}
          <Link href="/accuracy" className="font-medium text-accent hover:underline">
            accuracy scorecard
          </Link>
          . If the forecast lets you down, the{" "}
          <Link href="/faq" className="font-medium text-accent hover:underline">
            money-back guarantee
          </Link>{" "}
          is real.
        </p>
      </section>

      {/* Closing CTA */}
      <section className="mt-12 text-center">
        <h2 className="font-display text-2xl font-black text-ink">
          62 days is enough. Unfocused, it is nothing.
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-body">
          StudyLand comes free with any subject&apos;s Master pack: the
          forecast, the practice, the rehearsal, and the system that makes a
          student actually use them.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/diagnostic"
            className="cta-sheen glow-soft rounded-lg bg-accent px-6 py-3 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
          >
            Start with the free check
          </Link>
          <Link
            href="/bundles"
            className="rounded-lg border border-hairline px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-accent"
          >
            Build a bundle
          </Link>
        </div>
      </section>
    </div>
  );
}
