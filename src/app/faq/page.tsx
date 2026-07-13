import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/faq" },
  title: "FAQ and guarantee",
  description:
    "How StudyLah forecasts work, what the money-back guarantee covers, and answers to common questions.",
};

// `plain` mirrors ReactNode answers as text for the FAQPage JSON-LD below —
// Google rich results need plain strings.
const FAQS: { q: string; a: React.ReactNode; plain?: string }[] = [
  {
    // Entity-defining answer, written to be quotable by search/AI engines:
    // self-contained, factual, and carries the independence disclaimer.
    q: "What is StudyLah?",
    a: "StudyLah is an independent Singapore publisher of exam-preparation PDFs for the Singapore-Cambridge O-Level and N(A)-Level. For each subject it sells a data-driven Exam Forecast (every syllabus topic ranked by likelihood for the 2026 sitting, built from ten years of past papers), original practice questions, and a full timed rehearsal paper. Forecasts are probabilistic — hits and misses are published after every sitting — and purchases carry a money-back guarantee. StudyLah is not affiliated with SEAB, MOE, or Cambridge (UCLES).",
  },
  {
    q: "Is this cheating? Are these the real exam questions?",
    a: "No — and that's the whole point. We don't have the real papers and we'd never touch them; they belong to Cambridge and MOE / SEAB. What we do is read ten years of past papers and forecast which topics are most likely to come up, then write our own original questions in that exact style. This isn't a shortcut around studying. It's studying the right things.",
  },
  {
    q: "Isn't this just guessing?",
    plain:
      "Guessing is revising everything and hoping. This is ten years of classified questions, mark weightings and setter patterns turned into a ranked probability for every topic on your syllabus. And we don't ask you to take our word for it — after every sitting the accuracy scorecard shows exactly what we called against what appeared. Hits and misses. In public.",
    a: (
      <>
        Guessing is revising everything and hoping. This is ten years of
        classified questions, mark weightings and setter patterns turned into a
        ranked probability for every topic on your syllabus. And we don&apos;t
        ask you to take our word for it — after every sitting the{" "}
        <Link href="/accuracy" className="font-medium text-accent underline">
          accuracy scorecard
        </Link>{" "}
        shows exactly what we called against what appeared. Hits and misses. In
        public.
      </>
    ),
  },
  {
    q: "What if the forecast is wrong?",
    a: "Then you get your money back. Forecasts are probabilities, not promises — so we carry the risk, not you. If fewer than three of our top-five topics turn up in your paper, email your order ID within 14 days of the exam and we refund you in full. No forms. No argument.",
  },
  {
    q: "Why not just use the ten-year series?",
    a: "A TYS hands you every past question with equal weight — including topics that were cut from the syllabus years ago. StudyLah tells you which topics are likely next, ranks them, and drills only what's still examinable. Same decade of papers. Sorted, not dumped in your lap.",
  },
  {
    q: "Is it worth the money?",
    a: "One subject's forecast costs less than an hour of tuition and works across your whole final stretch of revision. If it doesn't deliver, it's free — that's what the guarantee is for. The expensive option is the weeks you'd spend revising the wrong things.",
  },
  {
    q: "How do I get my PDFs?",
    a: "Instantly. Pay, and your download page opens on the spot — the same link lands in your inbox. Links stay live for 7 days, up to 5 downloads per file. Save them to your devices and go.",
  },
  {
    q: "Can I share my PDFs with friends?",
    a: "Please don't — every page is watermarked with your email and order ID, so a shared copy points straight back to you. Send them the free Predict-your-mark check instead and let them judge us for themselves.",
  },
  {
    q: "I take multiple subjects. Do bundles work?",
    a: "Yes. Add every subject you're sitting and the cart automatically charges you the cheapest valid bundle. You never do the maths, and you never overpay.",
  },
  {
    q: "What is StudyLand? Is it extra?",
    a: "StudyLand is the study dashboard that comes with every purchase — no subscription, no extra cost. It turns your PDFs into a running system: a daily three-question practice drawn from your subjects' most-likely topics, a mistake notebook that saves every miss and re-tests you until you clear it, a Marks-at-Risk meter per subject, skill drills, exam timers, grade goals, and a printable rescue plan for when you're behind schedule. Sign in with the email you bought with — a magic link, no password.",
  },
  {
    q: "What is \"Predict your mark\"?",
    a: "A free ten-question check per subject, drawn from the topics our forecast rates most likely for 2026. It's auto-marked in seven minutes and ends with a score, worked solutions, and an indicative grade band on those topics. The band is an estimate from a small sample — never a promise or prediction of your actual result — but retake it every couple of weeks and the trend tells you honestly whether the work is working.",
  },
  {
    q: "Can my parents see how I'm doing?",
    a: "Only if you choose. In StudyLand settings you can add a parent's email and switch on a short weekly summary — topics revised, practice done, current streak. No grades are promised in it, they can unsubscribe from any email, and you can turn it off any time. Nothing is shared without your explicit opt-in (PDPA applies).",
  },
  {
    q: "When should I buy?",
    a: "Sooner is cheaper. The Forecast is built for your last two weeks, the Vault for your last week, the Rehearsal for the final days — and early-bird pricing runs when forecasts first drop. Take the free Predict-your-mark check — you'll be on the list and first to know the moment your forecast goes live.",
  },
  {
    q: "What happens to my email address?",
    plain:
      "We use it to send what you asked for, store your consent timestamp because PDPA requires provable opt-in, and do nothing else with it. No reselling, no spam. Full details in the privacy policy.",
    a: (
      <>
        We use it to send what you asked for, store your consent timestamp
        because PDPA requires provable opt-in, and do nothing else with it. No
        reselling, no spam. Full details in the{" "}
        <Link href="/legal/privacy" className="font-medium text-accent underline">
          privacy policy
        </Link>
        .
      </>
    ),
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof faq.a === "string" ? faq.a : (faq.plain ?? faq.q),
      },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="font-display text-4xl font-black text-ink">
        Straight answers. No fine print.
      </h1>
      <p className="mt-2 text-body">
        The honest version of everything students and parents ask us before they
        buy.
      </p>

      <section
        aria-labelledby="guarantee-heading"
        className="mt-8 rounded-2xl border border-guarantee/30 bg-guarantee/5 p-6"
      >
        <h2 id="guarantee-heading" className="font-display text-2xl font-black text-guarantee">
          If it doesn&apos;t deliver, it&apos;s free.
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink">
          Forecasts are probabilities, not certainties — so we carry the risk,
          not you. If fewer than three of our top-five forecast topics appear in
          your paper, claim a full refund within 14 days of the exam. Email your
          order ID, get your money back. No forms. No argument.
        </p>
        <p className="mt-2 text-xs text-body">
          Full terms are in the{" "}
          <Link href="/legal/refunds" className="font-medium text-accent underline">
            refund policy
          </Link>
          .
        </p>
      </section>

      <div className="mt-10 space-y-3">
        {FAQS.map((faq) => (
          <details key={faq.q} className="group rounded-2xl border border-hairline bg-surface">
            <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 font-medium text-ink">
              {faq.q}
              <span
                aria-hidden="true"
                className="text-body transition-transform group-open:rotate-180"
              >
                ▾
              </span>
            </summary>
            <div className="border-t border-hairline px-5 py-4 text-sm leading-relaxed text-body">
              {faq.a}
            </div>
          </details>
        ))}
      </div>

      <p className="mt-10 text-sm text-body">
        Something else on your mind? Email{" "}
        <a href="mailto:hello@studylah.education" className="font-medium text-accent underline">
          hello@studylah.education
        </a>
        .
      </p>
    </div>
  );
}
