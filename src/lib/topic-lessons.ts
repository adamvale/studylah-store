import type { PlaygroundLesson } from "@/lib/playground-lessons";
import { PLAYGROUND_SCIENCE } from "@/lib/playground-lessons";
import { SCIENCE_EXPANSION } from "@/lib/playground-science-expansion";
import { PLAYGROUND_MATHS } from "@/lib/playground-maths";

// Which subject topics have an interactive Playground lesson, and the lesson to
// open, for the per-subject topic pages. Science lessons target the O-Level pure
// sciences; maths targets O-Level E-Math and A-Math. A topic is "practisable"
// when a lesson is tagged with its topicKey.

// `${level}/${slug}` -> topicKey -> lesson.
const BY_SUBJECT: Record<string, Record<string, PlaygroundLesson>> = {};

function add(level: string, slug: string, lessons: PlaygroundLesson[]) {
  const key = `${level}/${slug}`;
  const bucket = (BY_SUBJECT[key] ??= {});
  for (const l of lessons) if (l.topic) bucket[l.topic] = l;
}

add("o-level", "chemistry-pure", [...PLAYGROUND_SCIENCE.chemistry, ...SCIENCE_EXPANSION.chemistry]);
add("o-level", "physics-pure", [...PLAYGROUND_SCIENCE.physics, ...SCIENCE_EXPANSION.physics]);
add("o-level", "biology-pure", [...PLAYGROUND_SCIENCE.biology, ...SCIENCE_EXPANSION.biology]);
add("o-level", "e-math", PLAYGROUND_MATHS["e-math"]);
add("o-level", "a-math", PLAYGROUND_MATHS["a-math"]);

// The lesson for a subject topic, or undefined if none exists yet.
export function lessonForTopic(level: string, slug: string, topicKey: string): PlaygroundLesson | undefined {
  return BY_SUBJECT[`${level}/${slug}`]?.[topicKey];
}

// How many of a subject's topics have a lesson (for the subject page header).
export function lessonCountFor(level: string, slug: string): number {
  const bucket = BY_SUBJECT[`${level}/${slug}`];
  return bucket ? Object.keys(bucket).length : 0;
}
