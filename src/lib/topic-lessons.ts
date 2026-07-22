import type { PlaygroundLesson } from "@/lib/playground-lessons";
import type { LessonStep } from "@/lib/lesson-steps";
import { PLAYGROUND_MATHS } from "@/lib/playground-maths";
import { PRACTICAL_SUBJECTS } from "@/lib/practical-lab";
import { lessonTopic } from "@/lib/topic-coverage";

// Which subject topics have an interactive Playground lesson, and the lesson to
// open, for the per-subject topic pages. Science lessons come from the Practical
// Lab (which already carries round 1 + the enrichment batch) and target the
// O-Level pure sciences; maths targets O-Level E-Math and A-Math. A topic is
// "practisable" when a lesson is tagged with its topicKey (inline, or via the
// LESSON_TOPIC map for the older lessons).

interface Openable {
  key: string;
  title: string;
  steps: LessonStep[];
}

// `${level}/${slug}` -> topicKey -> lesson.
const BY_SUBJECT: Record<string, Record<string, Openable>> = {};

function put(level: string, slug: string, topicKey: string | undefined, lesson: Openable) {
  if (!topicKey) return;
  const key = `${level}/${slug}`;
  const bucket = (BY_SUBJECT[key] ??= {});
  // Keep the first lesson seen for a topic (foundational before enrichment).
  if (!bucket[topicKey]) bucket[topicKey] = lesson;
}

// Sciences: the Practical Lab subjects (slugs chemistry/physics/biology) target
// the O-Level pure syllabus, so index them under "<family>-pure".
for (const subject of PRACTICAL_SUBJECTS) {
  for (const lesson of subject.lessons) {
    put("o-level", `${subject.slug}-pure`, lessonTopic(lesson), lesson);
  }
}

// Maths: lessons carry an inline topicKey.
function addMaths(slug: string, lessons: PlaygroundLesson[]) {
  for (const l of lessons) put("o-level", slug, l.topic, l);
}
addMaths("e-math", PLAYGROUND_MATHS["e-math"]);
addMaths("a-math", PLAYGROUND_MATHS["a-math"]);

// The lesson for a subject topic, or undefined if none exists yet.
export function lessonForTopic(level: string, slug: string, topicKey: string): Openable | undefined {
  return BY_SUBJECT[`${level}/${slug}`]?.[topicKey];
}

// How many of a subject's topics have a lesson (for the subject page header).
export function lessonCountFor(level: string, slug: string): number {
  const bucket = BY_SUBJECT[`${level}/${slug}`];
  return bucket ? Object.keys(bucket).length : 0;
}
