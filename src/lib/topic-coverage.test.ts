import { test } from "node:test";
import assert from "node:assert/strict";
import { SUBJECT_TOPICS, topicKey } from "@/lib/subject-topics";
import { LESSON_TOPIC } from "@/lib/topic-coverage";
import { PRACTICAL_SUBJECTS } from "@/lib/practical-lab";

// Every topicKey that exists across all subjects.
const validKeys = new Set<string>();
for (const topics of Object.values(SUBJECT_TOPICS)) for (const t of topics) validKeys.add(topicKey(t));

test("every LESSON_TOPIC value is a real topicKey", () => {
  for (const [lessonKey, tk] of Object.entries(LESSON_TOPIC))
    assert.ok(validKeys.has(tk), `${lessonKey} -> ${tk} is not a real topicKey`);
});

test("every inline lesson.topic is a real topicKey", () => {
  for (const s of PRACTICAL_SUBJECTS)
    for (const l of s.lessons)
      if (l.topic) assert.ok(validKeys.has(l.topic), `${l.key} inline topic "${l.topic}" is not a real topicKey`);
});

test("LESSON_TOPIC keys point at lessons that exist", () => {
  const lessonKeys = new Set(PRACTICAL_SUBJECTS.flatMap((s) => s.lessons.map((l) => l.key)));
  for (const k of Object.keys(LESSON_TOPIC))
    assert.ok(lessonKeys.has(k), `LESSON_TOPIC references "${k}" but no such lesson exists`);
});
