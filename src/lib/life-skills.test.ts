import { test } from "node:test";
import assert from "node:assert/strict";
import { LIFE_TRACKS, lifeTrack, lifeLesson } from "@/lib/life-skills";

// The Life Skills wing ships to minors, so lock the content invariants.

function stepText(s: (typeof LIFE_TRACKS)[number]["lessons"][number]["steps"][number]): string[] {
  if (s.kind === "concept") return [s.heading ?? "", s.body];
  if (s.kind === "insight") return [s.body];
  if (s.kind === "reveal") return [s.prompt, s.answer];
  return [s.question, ...s.options, s.explain];
}

const allText = LIFE_TRACKS.flatMap((t) => [
  t.name,
  t.blurb,
  ...t.lessons.flatMap((l) => [l.title, l.talkPrompt ?? "", ...l.steps.flatMap(stepText)]),
]);

test("there are ten Life Skills tracks", () => {
  assert.equal(LIFE_TRACKS.length, 10);
});

test("every track and lesson key is globally unique", () => {
  const trackKeys = LIFE_TRACKS.map((t) => t.key);
  assert.equal(new Set(trackKeys).size, trackKeys.length);
  const lessonKeys = LIFE_TRACKS.flatMap((t) => t.lessons.map((l) => l.key));
  assert.equal(new Set(lessonKeys).size, lessonKeys.length);
});

test("no student-facing life content has em/en dashes or emojis", () => {
  const emoji = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]/u;
  for (const s of allText) {
    assert.ok(!s.includes("—") && !s.includes("–"), `dash in: ${s}`);
    assert.ok(!emoji.test(s), `emoji in: ${s}`);
  }
});

test("no life content promises a grade or a sure outcome", () => {
  const banned = [/\bguaranteed\b/i, /\bsure win\b/i, /\b100 ?%/, /\bget rich\b/i];
  for (const s of allText) for (const re of banned) assert.ok(!re.test(s), `banned in: ${s}`);
});

test("the sensitive tracks carry their safety guardrails", () => {
  const money = lifeTrack("money")!;
  assert.match(money.guardrail, /invest/i);
  const calm = lifeTrack("calm")!;
  assert.match(calm.guardrail, /therapy|helpline|trusted adult/i);
});

test("every lesson has steps and at least one interactive one", () => {
  for (const t of LIFE_TRACKS) {
    assert.ok(t.lessons.length > 0, `${t.key} has no lessons`);
    for (const l of t.lessons) {
      assert.ok(l.steps.length > 0, `${l.key} has no steps`);
      assert.ok(
        l.steps.some((s) => s.kind === "choice" || s.kind === "reveal"),
        `${l.key} is not interactive`
      );
    }
  }
});

test("every choice step has a correct index inside its options", () => {
  for (const t of LIFE_TRACKS)
    for (const l of t.lessons)
      for (const s of l.steps)
        if (s.kind === "choice")
          assert.ok(s.correct >= 0 && s.correct < s.options.length, `${l.key} bad correct index`);
});

test("lookups work and miss cleanly", () => {
  assert.ok(lifeTrack("money"));
  assert.equal(lifeTrack("nope"), undefined);
  assert.ok(lifeLesson(LIFE_TRACKS[0].lessons[0].key));
  assert.equal(lifeLesson("nope"), undefined);
});
