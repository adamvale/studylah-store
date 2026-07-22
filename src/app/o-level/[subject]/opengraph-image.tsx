import { SUBJECT_OG_SIZE } from "@/lib/subject-og";
import { subjectOgResponse } from "@/lib/server/subject-og-response";

// Per-subject social card (public/og/o-level-<slug>.jpg). Overrides the
// site-wide app/opengraph-image.tsx for this segment, and also drives
// twitter:image via the summary_large_image card set in the root layout.
export const size = SUBJECT_OG_SIZE;
export const contentType = "image/jpeg";
export const alt = "StudyLah, 2026 O-Level exam forecast";

export default async function Image({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;
  return subjectOgResponse("o-level", subject);
}
