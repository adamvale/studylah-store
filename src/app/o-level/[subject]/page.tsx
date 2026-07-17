import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSubject, subjectsForLevel } from "@/lib/catalogue";
import { SubjectView } from "@/components/subject-view";
import { subjectSeoMeta } from "@/lib/subject-seo";

export function generateStaticParams() {
  return subjectsForLevel("o-level").map((s) => ({ subject: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string }>;
}): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = getSubject("o-level", slug);
  if (!subject) return {};
  return subjectSeoMeta(subject);
}

export default async function OLevelSubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: slug } = await params;
  const subject = getSubject("o-level", slug);
  if (!subject) notFound();
  return <SubjectView subject={subject} />;
}
