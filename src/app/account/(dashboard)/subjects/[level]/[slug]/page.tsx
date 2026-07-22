import type { Metadata } from "next";
import { redirect, notFound } from "next/navigation";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import { getSubject, subjectCode, type Level } from "@/lib/catalogue";
import { SUBJECT_TOPICS, topicKey } from "@/lib/subject-topics";
import { lessonForTopic } from "@/lib/topic-lessons";
import { SubjectTopics, type TopicRow } from "@/components/subject-topics";

export const metadata: Metadata = { title: "Subject" };

// A subject's own page: the full topic list, each topic a doorway into the
// interactive practice for that topic. Owners only, on the same engine as the
// Practical Lab lessons.
export default async function SubjectPage({
  params,
}: {
  params: Promise<{ level: string; slug: string }>;
}) {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  await requireMaster(customerId);

  const { level, slug } = await params;
  const subject = getSubject(level as Level, slug);
  if (!subject) notFound();

  const topics = SUBJECT_TOPICS[`${level}/${slug}`] ?? [];
  const rows: TopicRow[] = topics.map((topic) => {
    const key = topicKey(topic);
    const lesson = lessonForTopic(level, slug, key);
    return {
      topic,
      key,
      lesson: lesson ? { key: lesson.key, title: lesson.title, steps: lesson.steps } : null,
    };
  });

  return (
    <SubjectTopics
      subjectName={subject.name}
      code={subjectCode(level as Level, slug) ?? null}
      rows={rows}
    />
  );
}
