export interface Testimonial {
  // The buyer's own words, lightly trimmed for length — never invented.
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
// wording about the experience — clarity, focus, confidence, the forecast being
// useful — not result guarantees.
//
// This array is intentionally EMPTY. The homepage SocialProof section hides
// itself completely while it is empty, so nothing fake ever ships. Paste in
// genuine customer words (with consent) to switch the section on. Example shape:
//
//   {
//     quote: "It told me exactly what to revise in the last two weeks instead
//             of drowning in everything. Walked in so much calmer.",
//     name: "Rachel T.",
//     context: "O-Level Chemistry · 2024",
//   },
export const TESTIMONIALS: Testimonial[] = [];
