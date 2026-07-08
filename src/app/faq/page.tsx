import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ and guarantee",
  description:
    "How StudyLah forecasts work, what the money-back guarantee covers, and answers to common questions.",
};

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "Are these the actual exam questions?",
    a: "No. StudyLah forecasts which topics are likely, using ten years of past papers, syllabus weightings and setter patterns. Every practice question is written by us in exam style — zero recycled past-paper content. Real examination papers are the copyright of UCLES and MOE / SEAB, and we neither reproduce nor have access to them.",
  },
  {
    q: "How accurate are the forecasts?",
    a: (
      <>
        We publish the answer instead of asking you to trust us. After every
        sitting, the{" "}
        <Link href="/accuracy" className="font-medium text-trust underline">
          accuracy scorecard
        </Link>{" "}
        shows what we forecast against what appeared, per subject — hits and
        misses included.
      </>
    ),
  },
  {
    q: "How does the money-back guarantee work?",
    a: "If fewer than three of our top-five forecast topics appear in your paper, you can claim a full refund within 14 days of the exam — email us your order ID and we process it, no forms and no argument. [Exact terms FOR LAWYER REVIEW.]",
  },
  {
    q: "How do I get my PDFs?",
    a: "Instantly. After payment you land on your download page and receive the same link by email. Links stay live for 7 days with up to 5 downloads per file — plenty to save them to your devices.",
  },
  {
    q: "Can I share my PDFs with friends?",
    a: "No. Every PDF is watermarked with the buyer's email and order ID on every page. Sharing breaks the terms of use — and honestly, the forecast is cheap enough that your friends can judge us on the free heatmap.",
  },
  {
    q: "I take multiple subjects. Do bundles still work?",
    a: "Yes. Bundle pricing applies per subject at that subject's level pricing, and the cart always charges you the cheapest valid combination — you never need to work it out yourself.",
  },
  {
    q: "When should I buy?",
    a: "The Forecast is built for your last 14 days, the Vault for your last week, and the Rehearsal for the days before the paper. Early-bird pricing runs when forecasts first release — join the free heatmap list and we'll tell you when.",
  },
  {
    q: "What happens to my email address?",
    a: (
      <>
        We store it with your consent timestamp (PDPA requires provable
        opt-in), use it to deliver what you asked for, and nothing else. Full
        details in the{" "}
        <Link href="/legal/privacy" className="font-medium text-trust underline">
          privacy policy
        </Link>
        .
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-4xl font-bold text-ink">
        FAQ and guarantee
      </h1>

      <section
        aria-labelledby="guarantee-heading"
        className="mt-8 rounded-2xl border border-guarantee/30 bg-guarantee/5 p-6"
      >
        <h2 id="guarantee-heading" className="font-display text-2xl font-bold text-guarantee">
          The money-back guarantee
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink">
          Forecasts are probabilities, not certainties — so the risk is ours,
          not yours. If fewer than three of our top-five forecast topics appear
          in your paper, claim a full refund within 14 days of the exam. Email
          your order ID, get your money back. No forms, no argument.
        </p>
        <p className="mt-2 text-xs text-body">
          Placeholder terms — exact wording FOR LAWYER REVIEW.
        </p>
      </section>

      <div className="mt-10 space-y-3">
        {FAQS.map((faq) => (
          <details key={faq.q} className="group rounded-2xl border border-trust/10 bg-white">
            <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 font-medium text-ink">
              {faq.q}
              <span
                aria-hidden="true"
                className="text-body transition-transform group-open:rotate-180"
              >
                ▾
              </span>
            </summary>
            <div className="border-t border-trust/10 px-5 py-4 text-sm leading-relaxed text-body">
              {faq.a}
            </div>
          </details>
        ))}
      </div>

      <p className="mt-10 text-sm text-body">
        Something else on your mind? Email{" "}
        <a href="mailto:hello@studylah.education" className="font-medium text-trust underline">
          hello@studylah.education
        </a>
        .
      </p>
    </div>
  );
}
