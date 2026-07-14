export interface Testimonial {
  // The buyer's own words, lightly trimmed for length, never invented.
  quote: string;
  // Attribution you have permission to show: first name + level, or
  // "Parent of an O-Level student", etc.
  name: string;
  // Short context, e.g. "O-Level Chemistry · 2024".
  context: string;
}

// ⚠️ REAL, PERMISSIONED quotes ONLY.
//
// StudyLah is a minors-facing store bound by the marketing-compliance standard
// (src/lib/compliance.ts): never fabricate a review, and never publish a quote
// that promises or implies a grade ("got my A1 thanks to…"). Use outcome-safe
// wording about the experience, clarity, focus, confidence, the forecast being
// useful, not result guarantees.
//
// Real, permissioned quotes, lightly edited for compliance: grade-outcome
// claims ("C5 to A2", "achieved his target grade") and "predicted/leaked paper"
// framing are removed, the person's voice and story are kept. Grade promises are
// non-negotiable-forbidden (see src/lib/compliance.ts).
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Instead of drowning in everything, StudyLah showed me exactly which " +
      "Chemistry topics to focus on in my last few weeks, and the practice " +
      "felt just like the real thing. I walked in genuinely confident.",
    name: "Marcus T.",
    context: "O-Level Chemistry",
  },
  {
    quote:
      "My daughter was struggling with Physics, but working through StudyLah's " +
      "forecast and practice, her confidence soared. It gave me real peace of " +
      "mind knowing she was revising the right things.",
    name: "Mrs. Lim",
    context: "Parent, O-Level",
  },
  {
    quote:
      "The worked solutions were the best part, they showed me why I got " +
      "things wrong, not just the answer. It really helped me understand the " +
      "content properly.",
    name: "Aloysius L.",
    context: "O-Level Chemistry",
  },
];
