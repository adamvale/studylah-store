import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSubject, isLevelPublished, subjectsForLevel } from "@/lib/catalogue";
import { SubjectView } from "@/components/subject-view";
import { subjectSeoMeta } from "@/lib/subject-seo";

export function generateStaticParams() {
  // Nothing to prerender while the level is unpublished.
  if (!isLevelPublished("na-level")) return [];
  return subjectsForLevel("na-level").map((s) => ({ subject: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string }>;
}): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = getSubject("na-level", slug);
  if (!subject) return {};
  return subjectSeoMeta(subject);
}

export default async function NALevelSubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: slug } = await params;
  if (!isLevelPublished("na-level")) notFound();
  const subject = getSubject("na-level", slug);
  if (!subject) notFound();
  return <SubjectView subject={subject} />;
}
