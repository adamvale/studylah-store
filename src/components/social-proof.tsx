import { TESTIMONIALS } from "@/lib/testimonials";

// Peer proof, right under the hero, the herd signal the data scorecard can't
// give. Renders NOTHING until real, permissioned quotes exist in
// src/lib/testimonials.ts, so the live site never shows a fabricated review.
export function SocialProof() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section aria-labelledby="voices-heading" className="border-y border-hairline bg-night-2 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center font-mono text-xs font-medium uppercase tracking-wide text-teal">
          In their words
        </p>
        <h2
          id="voices-heading"
          className="mt-2 text-center font-display text-3xl font-black text-white sm:text-4xl"
        >
          Students who stopped revising blind
        </h2>
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
      </div>
    </section>
  );
}
