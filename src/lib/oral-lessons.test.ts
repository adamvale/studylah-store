import { test } from "node:test";
import assert from "node:assert/strict";
import { ORAL_ITEMS, oralItemsFor, oralItem } from "@/lib/oral-lessons";

// Project Loudspeaker content ships to students, so lock the invariants.

test("every oral item has a unique key", () => {
  const keys = ORAL_ITEMS.map((i) => i.key);
  assert.equal(new Set(keys).size, keys.length);
});

test("oral content carries no em/en dashes or emojis", () => {
  const emoji = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]/u;
  for (const i of ORAL_ITEMS) {
    for (const s of [i.title, i.text, i.hint ?? ""]) {
      assert.ok(!s.includes("—") && !s.includes("–"), `dash in ${i.key}: ${s}`);
      assert.ok(!emoji.test(s), `emoji in ${i.key}: ${s}`);
    }
  }
});

test("each item declares a valid lang, mode and Azure locale", () => {
  for (const i of ORAL_ITEMS) {
    assert.ok(["chinese", "english"].includes(i.lang));
    assert.ok(["read-aloud", "conversation"].includes(i.mode));
    assert.equal(i.langCode, i.lang === "chinese" ? "zh-CN" : "en-GB");
    assert.ok(i.levels.length > 0);
    assert.ok(i.text.length > 0);
  }
});

test("both languages have practice for O-Level and N(A)-Level", () => {
  for (const lang of ["chinese", "english"] as const) {
    assert.ok(oralItemsFor(lang, "o-level").length > 0);
    assert.ok(oralItemsFor(lang, "na-level").length > 0);
  }
});

test("oralItem looks up by key and misses cleanly", () => {
  assert.ok(oralItem(ORAL_ITEMS[0].key));
  assert.equal(oralItem("nope"), undefined);
});
