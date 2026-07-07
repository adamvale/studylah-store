import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSubject, subjectsForLevel } from "@/lib/catalogue";
import { SubjectView } from "@/components/subject-view";

export function generateStaticParams() {
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
  return {
    title: `${subject.name} — N(A)-Level exam forecast`,
    description: `Topic forecasts, original practice questions, and a timed rehearsal for N(A)-Level ${subject.name}.`,
  };
}

export default async function NALevelSubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: slug } = await params;
  const subject = getSubject("na-level", slug);
  if (!subject) notFound();
  return <SubjectView subject={subject} />;
}
