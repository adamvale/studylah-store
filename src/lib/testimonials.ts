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
// This array is intentionally EMPTY. The homepage SocialProof section hides
// itself completely while it is empty, so nothing fake ever ships.
//
// TO TURN IT ON: replace each placeholder below with a REAL, permissioned quote
// (uncomment the block, keep the shape). These drafts show the safe TONE only,
// they are NOT approved copy, do not ship them as-is. Three to five is plenty.
//
// export const TESTIMONIALS: Testimonial[] = [
//   {
//     quote:
//       "It told me exactly what to revise in the last two weeks instead of " +
//       "drowning in everything. I walked in so much calmer.",
//     name: "<real first name + initial>",
//     context: "O-Level Chemistry · 2024",
//   },
//   {
//     quote:
//       "The forecast matched what actually came up scarily well, and the " +
//       "practice questions felt just like the real paper.",
//     name: "<real first name + initial>",
//     context: "O-Level Physics · 2024",
//   },
//   {
//     quote:
//       "As a parent I finally knew my son was revising the right things, not " +
//       "just staying up late doing everything.",
//     name: "Parent of an N(A)-Level student",
//     context: "N(A)-Level · 2024",
//   },
// ];
export const TESTIMONIALS: Testimonial[] = [];
