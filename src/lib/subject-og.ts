// Designed per-subject social share cards. Each lives at
// public/og/<level>-<slug>.jpg (1200 x 669, the artwork the owner supplied).
// The o-level/[subject] and na-level/[subject] routes serve these via their
// opengraph-image route, which overrides the code-generated site-wide card in
// app/opengraph-image.tsx. Subjects without a designed card fall back to that
// site-wide card, so this set is the single source of truth for "has artwork".

export const SUBJECT_OG_SIZE = { width: 1200, height: 669 };

const CARDS = new Set<string>([
  "o-level/chemistry-pure",
  "o-level/chemistry-science",
  "o-level/physics-pure",
  "o-level/physics-science",
  "o-level/biology-pure",
  "o-level/biology-science",
  "o-level/geography-pure",
  "o-level/geography-elective",
  "o-level/history-pure",
  "o-level/history-elective",
  "o-level/social-studies",
  "o-level/principles-of-accounts",
  "o-level/e-math",
  "o-level/a-math",
  "na-level/chemistry",
  "na-level/physics",
  "na-level/biology",
  "na-level/history",
  "na-level/principles-of-accounts",
  "na-level/e-math",
  "na-level/food-and-nutrition",
  "na-level/a-math",
]);

export function hasSubjectOgCard(level: string, slug: string): boolean {
  return CARDS.has(`${level}/${slug}`);
}

// The public/og filename for a subject's card, or null if it has none.
export function subjectOgCardFile(level: string, slug: string): string | null {
  return hasSubjectOgCard(level, slug) ? `${level}-${slug}.jpg` : null;
}
