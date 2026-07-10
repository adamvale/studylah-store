import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSubject, subjectsForLevel } from "@/lib/catalogue";
import { SubjectView } from "@/components/subject-view";

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
  return {
    title: `${subject.name} — O-Level exam forecast`,
    description: `Topic forecasts, original practice questions, and a timed rehearsal for O-Level ${subject.name}.`,
    alternates: { canonical: `/o-level/${subject.slug}` },
  };
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
