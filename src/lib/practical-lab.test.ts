import { test } from "node:test";
import assert from "node:assert/strict";
import { PRACTICAL_SUBJECTS, practicalSubject, practicalLesson } from "@/lib/practical-lab";
import { stepText } from "@/lib/lesson-steps";

const allText = PRACTICAL_SUBJECTS.flatMap((s) => [
  s.name,
  ...s.lessons.flatMap((l) => [
    l.title,
    l.talkPrompt ?? "",
    ...l.steps.flatMap(stepText),
  ]),
]);

test("covers the three sciences", () => {
  assert.deepEqual(PRACTICAL_SUBJECTS.map((s) => s.slug).sort(), ["biology", "chemistry", "physics"]);
});

test("lesson keys are unique", () => {
  const keys = PRACTICAL_SUBJECTS.flatMap((s) => s.lessons.map((l) => l.key));
  assert.equal(new Set(keys).size, keys.length);
});

test("no practical content has dashes or emojis", () => {
  const emoji = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]/u;
  for (const s of allText) {
    assert.ok(!s.includes("—") && !s.includes("–"), `dash in: ${s}`);
    assert.ok(!emoji.test(s), `emoji in: ${s}`);
  }
});

test("every practical lesson is interactive with valid choices", () => {
  for (const subj of PRACTICAL_SUBJECTS)
    for (const l of subj.lessons) {
      assert.ok(l.steps.some((s) => s.kind === "choice" || s.kind === "reveal"), `${l.key} not interactive`);
      for (const s of l.steps)
        if (s.kind === "choice")
          assert.ok(s.correct >= 0 && s.correct < s.options.length, `${l.key} bad correct index`);
    }
});

test("lookups work", () => {
  assert.ok(practicalSubject("chemistry"));
  assert.equal(practicalSubject("nope"), undefined);
  assert.ok(practicalLesson(PRACTICAL_SUBJECTS[0].lessons[0].key));
  assert.equal(practicalLesson("nope"), undefined);
});
