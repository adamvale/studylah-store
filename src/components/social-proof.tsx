import Image from "next/image";
import { TESTIMONIALS } from "@/lib/testimonials";

// Peer proof, right under the hero, the herd signal the data scorecard can't
// give. Renders NOTHING until real, permissioned quotes exist in
// src/lib/testimonials.ts, so the live site never shows a fabricated review.
export function SocialProof() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section aria-labelledby="voices-heading" className="border-y border-hairline py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-center">
          <Image
            src="/marketing/stars.png"
            alt="Five out of five stars"
            width={988}
            height={160}
            className="h-auto w-32"
          />
        </div>
        <h2
          id="voices-heading"
          className="mt-3 text-center font-display text-3xl font-black text-white sm:text-4xl"
        >
          Real students. Real relief.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-cloud">
          Built to the exact Singapore-Cambridge{" "}
          <span className="text-accent">(SEAB / MOE)</span> syllabus your school
          teaches, so the moment a pack lands, your child stops guessing and
          starts revising with a plan.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl border border-hairline bg-surface p-6"
            >
              <div aria-hidden="true" className="flex gap-0.5 text-accent">
                {"★★★★★".split("").map((s, j) => (
                  <span key={j}>{s}</span>
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-cloud">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 border-t border-hairline pt-3">
                <span className="font-display text-sm font-bold text-white">{t.name}</span>
                <span className="mt-0.5 block font-mono text-xs text-body">{t.context}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-body/70">
          Shared with permission. Individual experiences; StudyLah&apos;s
          forecasts are probabilistic and it makes no grade guarantees. StudyLah
          is an independent publisher, not affiliated with, endorsed by, or
          connected to SEAB, MOE or Cambridge.
        </p>
      </div>
    </section>
  );
}
