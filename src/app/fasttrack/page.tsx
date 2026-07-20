import type { Metadata } from "next";
import Link from "next/link";
import { getPricing } from "@/lib/server/pricing-store";
import { sgd } from "@/lib/catalogue";
import { PLAYBOOKS, LEAKS, FAMILY_META, type Family } from "@/lib/fasttrack";
import { NamedIcon, type IconName } from "@/components/icons";

// Public marketing + SEO page for FastTrack. Distinct route from the
// Ultra-gated tool at /account/fasttrack. Targets the high-intent searches
// "O-Level / N-Level Chemistry / Physics / Biology answering technique,
// structured answers, exam keywords, how to score higher". Content is drawn
// from the real playbook so the page is substantive and unique (good for SEO
// and honest to what a buyer gets). Compliance: never promises a grade, no
// banned words, no em/en dashes.

export const dynamic = "force-dynamic"; // live "from" price must not go stale

export const metadata: Metadata = {
  alternates: { canonical: "/fasttrack" },
  title: "FastTrack: score higher on O-Level & N-Level Chemistry, Physics, Biology answers",
  description:
    "FastTrack teaches Singapore O-Level and N(A)-Level Chemistry, Physics and Biology students to write answers the way examiners award marks: the exact keywords, the right structure, the correct format, complete logic. Trained per question type, with instant mark-scheme feedback.",
  keywords: [
    "O-Level Chemistry answering technique",
    "O-Level Physics structured answers",
    "O-Level Biology exam keywords",
    "N-Level Chemistry answers",
    "N(A)-Level Physics revision",
    "N-Level Biology answering technique",
    "Singapore Chemistry mark scheme",
    "how to answer O-Level science questions",
    "exam answering technique Singapore",
    "structured answer practice O-Level",
    "score higher O-Level science",
    "GCE O-Level Combined Science",
  ],
  openGraph: {
    title: "FastTrack: answer O-Level & N-Level science the way examiners award marks",
    description:
      "Chemistry, Physics and Biology answers trained per question type: exact examiner keywords, the right structure, instant mark-scheme feedback. Included with StudyLah Ultra.",
    type: "website",
  },
};

// ── the SEO content, drawn from the real playbook ──────────────────────────
// A representative Play per subject → a keyword pair and a skeleton snippet,
// so the page carries genuine, subject-specific answering technique.
function highlightsFor(family: Family) {
  const plays = PLAYBOOKS[family];
  return {
    count: plays.length,
    names: plays.map((p) => p.name),
    keyword: plays[0].keywords[0], // vague → exact contrast, real example
    skeleton: plays[0].skeleton,
    playName: plays[0].name,
  };
}

const SUBJECT_ORDER: Family[] = ["chemistry", "physics", "biology"];

const SUBJECT_SEO: Record<Family, { levels: string; papers: string; intent: string }> = {
  chemistry: {
    levels: "O-Level Chemistry (Pure 6092 and Combined 5076/5078) and N(A)-Level Chemistry",
    papers: "bonding and structure, mole calculations, tests for gases and ions, rates of reaction, electrolysis, organic chemistry and titration method",
    intent:
      "Chemistry marks are lost on wording more than on knowing. A student who writes \"the bonds are strong\" instead of \"strong electrostatic forces of attraction between oppositely charged ions\" understands the idea but earns no mark.",
  },
  physics: {
    levels: "O-Level Physics (Pure 6091 and Combined 5076/5077) and N(A)-Level Physics",
    papers: "calculations with formula and units, forces and motion, energy transfers, experiment design, graph interpretation, waves and circuits",
    intent:
      "Physics is full of method marks that leak when working is not shown. FastTrack drills the formula, substitution, evaluation and unit as separate steps, so a wrong final number still earns the marks the working deserves.",
  },
  biology: {
    levels: "O-Level Biology (Pure 6093 and Combined 5076/5078) and N(A)-Level Biology",
    papers: "structure and function, pathways and processes, enzymes, experiment design, data response, definitions, comparisons, homeostasis and genetics",
    intent:
      "Biology rewards precise definitions and paired feature-and-function points. \"It has a big surface\" scores nothing; \"a large surface area to volume ratio, for faster diffusion\" scores the mark. FastTrack trains the exact wording.",
  },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is StudyLah FastTrack?",
    a: "FastTrack is a study tool inside StudyLah that trains O-Level and N(A)-Level Chemistry, Physics and Biology students to write answers the way examiners award marks. It works by question type, showing the exact keywords, the answer structure, the correct format and the full logic each question needs, then marks your own answer against the mark scheme.",
  },
  {
    q: "Who is FastTrack for?",
    a: "It is built for students who understand the material but keep scoring below their ability, usually under 60 percent, because their answers do not match what the mark scheme credits. Most of those lost marks come from missing keywords, vague phrasing, wrong format and incomplete logic, which are all trainable.",
  },
  {
    q: "Which subjects and levels does FastTrack cover?",
    a: "FastTrack covers Chemistry, Physics and Biology for the Singapore-Cambridge O-Level (G3) and N(A)-Level (G2), including the Pure and Combined Science variants, which share the same answering technique. More subjects follow.",
  },
  {
    q: "How is FastTrack different from just doing practice questions?",
    a: "Practice questions test what you know. FastTrack trains how you write it down. For each question type you learn to recognise it in seconds, follow the answer structure examiners expect, use the exact crediting phrases, and then you write an answer that is marked point by point against the mark scheme.",
  },
  {
    q: "Does FastTrack guarantee a better grade?",
    a: "No. Nobody honest can promise a grade. FastTrack trains the answering habits that stop capable students from leaking marks they already deserve, and it shows you exactly where each answer falls short of the mark scheme.",
  },
  {
    q: "How do I get FastTrack?",
    a: "FastTrack is included with any StudyLah Ultra pack for Chemistry, Physics or Biology, alongside the exam forecast, original practice and the full study system. There is no separate purchase.",
  },
];

export default async function FastTrackMarketingPage() {
  const pricing = await getPricing();
  const masterFrom = Math.min(
    pricing.tierPrice("o-level", "master"),
    pricing.tierPrice("na-level", "master")
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "StudyLah FastTrack: O-Level and N-Level Chemistry, Physics and Biology answering technique",
    description:
      "Trains Singapore O-Level and N(A)-Level science students to write answers the way examiners award marks, per question type, with mark-scheme feedback.",
    provider: {
      "@type": "Organization",
      name: "StudyLah Education",
      sameAs: "https://www.studylah.education",
    },
    about: ["Chemistry", "Physics", "Biology"],
    educationalLevel: "Singapore-Cambridge O-Level (G3) and N(A)-Level (G2)",
    inLanguage: "en-SG",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.studylah.education" },
      { "@type": "ListItem", position: 2, name: "FastTrack", item: "https://www.studylah.education/fasttrack" },
    ],
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <p className="font-mono text-xs font-medium uppercase tracking-wide text-accent">
        Included with every Ultra pack
      </p>
      <h1 className="mt-2 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
        Study<span className="text-accent">Lah</span> FastTrack
      </h1>
      <p className="mt-3 max-w-3xl text-lg leading-relaxed text-body">
        Score higher on O-Level and N(A)-Level{" "}
        <span className="font-medium text-ink">Chemistry, Physics and Biology</span>{" "}
        by writing answers the way examiners award marks. Marks are not given for
        understanding, they are given for answers that match the mark scheme.
        FastTrack trains that, one question type at a time.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href="/subjects"
          className="cta-sheen glow-soft rounded-lg bg-accent px-6 py-3 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
        >
          Get Ultra, from {sgd(masterFrom)}
        </Link>
        <Link
          href="/diagnostic"
          className="rounded-lg border border-hairline px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-accent"
        >
          Predict your mark, free
        </Link>
        <Link href="/account/fasttrack" className="text-sm text-body underline hover:text-ink">
          Already a member? Open FastTrack
        </Link>
      </div>

      {/* The problem, keyword-rich */}
      <section className="mt-14 rounded-2xl border border-hairline bg-surface p-6">
        <h2 className="font-display text-2xl font-black text-ink">
          Why capable students still score below 60 percent
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-body">
          In Singapore-Cambridge science papers, marks are awarded for answers
          that match the examiner&apos;s standard, not for understanding alone.
          A student can know the topic and still lose the mark. It happens the
          same four ways in Chemistry, Physics and Biology:
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {LEAKS.map((l) => (
            <div key={l.id} className="rounded-xl border border-hairline bg-night p-4">
              <p className="text-sm font-bold text-coral">{l.label}</p>
              <p className="mt-1 text-sm text-guarantee">FastTrack fix: {l.fix}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works, the 5 parts */}
      <section className="mt-12">
        <h2 className="font-display text-2xl font-black text-ink">
          How FastTrack turns a topic you know into marks you keep
        </h2>
        <p className="mt-2 max-w-3xl leading-relaxed text-body">
          Every question type on the paper has a Play, and every Play has the
          same five parts. It is the difference between understanding Chemistry,
          Physics or Biology and being paid full marks for it.
        </p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["Recognise it in 5 seconds", "The trigger words that flag the question type, what it is really testing, and how many marks means how many points. Reading the question fast is where marks are won."],
            ["The answer shape", "The three or four ordered steps examiners recognise instantly. Structure your answer the way the mark scheme is written, and every point lands where a marker looks for it."],
            ["The examiner's exact words", "The precise crediting phrases, shown against the vague version students usually write. This is what closes the missing-keyword and vague-phrasing gaps."],
            ["A full-mark model", "A complete answer with each crediting point highlighted, so you see exactly what earns each mark."],
            ["You write one, marked instantly", "You answer a fresh question of the same type. It is marked point by point against the mark scheme, showing which crediting points you earned and exactly which you dropped."],
          ].map(([t, b], i) => (
            <li key={t} className="rounded-2xl border border-hairline bg-surface p-5">
              <p className="font-mono text-xs font-bold text-accent">STEP {i + 1}</p>
              <h3 className="mt-1 font-display text-lg font-bold text-ink">{t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-body">{b}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Per-subject SEO sections */}
      {SUBJECT_ORDER.map((family) => {
        const meta = FAMILY_META[family];
        const seo = SUBJECT_SEO[family];
        const h = highlightsFor(family);
        return (
          <section
            key={family}
            id={family}
            className="mt-12 scroll-mt-24 rounded-2xl border border-hairline bg-surface p-6"
          >
            <h2 className="flex items-center gap-2 font-display text-2xl font-black text-ink">
              <NamedIcon name={meta.emoji as IconName} size={20} className="inline text-accent" /> FastTrack for {meta.label}
            </h2>
            <p className="mt-1 text-sm font-medium text-accent">{seo.levels}</p>
            <p className="mt-3 max-w-3xl leading-relaxed text-body">{seo.intent}</p>
            <p className="mt-3 max-w-3xl leading-relaxed text-body">
              FastTrack covers {h.count} of the highest-value {meta.label} question
              types, including {seo.papers}. Each one is trained to the mark
              scheme, not just the answer.
            </p>

            {/* a real keyword contrast pulled from the playbook */}
            <div className="mt-4 rounded-xl border border-hairline bg-night p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-body">
                Example: {h.playName}
              </p>
              <p className="mt-2 text-sm text-coral line-through decoration-coral/40">
                {h.keyword.vague}
              </p>
              <p className="mt-1 text-sm font-medium text-guarantee">
                → {h.keyword.exact}
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-wide text-body">
                The answer shape FastTrack drills
              </p>
              <ol className="mt-1 space-y-1">
                {h.skeleton.slice(0, 3).map((step, i) => (
                  <li key={i} className="text-sm text-body">
                    {i + 1}. {step}
                  </li>
                ))}
              </ol>
            </div>

            <details className="mt-4 rounded-xl border border-hairline bg-night p-4">
              <summary className="cursor-pointer text-sm font-bold text-ink">
                All {meta.label} question types in FastTrack
              </summary>
              <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                {h.names.map((n) => (
                  <li key={n} className="text-sm text-body">
                    <span className="text-guarantee">✓</span> {n}
                  </li>
                ))}
              </ul>
            </details>
          </section>
        );
      })}

      {/* The 5-second read game */}
      <section className="mt-12 rounded-2xl border border-violet/40 bg-surface p-6">
        <h2 className="font-display text-2xl font-black text-ink">
          Know what each question is testing in the first 5 seconds
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-body">
          The fastest way to lose marks is to answer the wrong kind of question.
          FastTrack&apos;s 5-second read game flashes real exam stems and asks you
          to name the question type before the clock runs. Recognition under time
          pressure is the skill that unlocks every other, and it turns a stressful
          paper into a familiar one.
        </p>
      </section>

      {/* FAQ, mirrors the JSON-LD */}
      <section className="mt-12">
        <h2 className="font-display text-2xl font-black text-ink">
          FastTrack, answered
        </h2>
        <div className="mt-4 space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="rounded-2xl border border-hairline bg-surface p-5">
              <summary className="cursor-pointer font-display text-base font-bold text-ink">
                {f.q}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-body">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mt-12 text-center">
        <h2 className="font-display text-2xl font-black text-ink">
          Stop leaking the marks you already deserve
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-body">
          FastTrack comes free with any Chemistry, Physics or Biology Ultra
          pack, alongside the exam forecast, original practice and the full
          study system.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/subjects"
            className="cta-sheen glow-soft rounded-lg bg-accent px-6 py-3 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
          >
            Get Ultra, from {sgd(masterFrom)}
          </Link>
          <Link
            href="/studyland"
            className="rounded-lg border border-hairline px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-accent"
          >
            See the whole study system
          </Link>
        </div>
      </section>
    </div>
  );
}
