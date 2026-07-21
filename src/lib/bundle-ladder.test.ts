import { test } from "node:test";
import assert from "node:assert/strict";
import { createPricing } from "@/lib/pricing";
import { bundleLadder } from "@/lib/bundle-ladder";

// Locks the 3/6/8 bundle ladder that the /pricing page, /bundles page and the
// homepage/subject "save up to" copy all derive from. These numbers appear in
// marketing everywhere; a silent drift is a false price claim to parents.
// (See the 2026-07-21 fix that replaced hardcoded "S$188" with these.)

const ladder = bundleLadder(createPricing());
const byKey = Object.fromEntries(ladder.map((r) => [r.key, r]));

test("bundle ladder has the three tiers in order", () => {
  assert.deepEqual(
    ladder.map((r) => r.key),
    ["mega", "allin6", "allin8"]
  );
  assert.deepEqual(
    ladder.map((r) => r.count),
    [3, 6, 8]
  );
});

test("bundle prices match the published ladder", () => {
  assert.equal(byKey.mega.price, 168);
  assert.equal(byKey.allin6.price, 268);
  assert.equal(byKey.allin8.price, 356);
});

test("bundle savings and percents match the S$116 parts value", () => {
  // value = count * S$116 (full a la carte Ultra value)
  assert.equal(byKey.mega.value, 3 * 116);
  assert.equal(byKey.allin6.value, 6 * 116);
  assert.equal(byKey.allin8.value, 8 * 116);
  assert.equal(byKey.mega.savings, 180);
  assert.equal(byKey.allin6.savings, 428);
  assert.equal(byKey.allin8.savings, 572);
  assert.equal(byKey.mega.percentOff, 52);
  assert.equal(byKey.allin6.percentOff, 61);
  assert.equal(byKey.allin8.percentOff, 62);
});

test("max 'save up to' figure is S$572 (never the stale S$188)", () => {
  const max = Math.max(...ladder.map((r) => r.savings));
  assert.equal(max, 572);
});

test("per-subject price never rises as you add subjects", () => {
  for (let i = 1; i < ladder.length; i++) {
    assert.ok(
      ladder[i].perSubject <= ladder[i - 1].perSubject,
      `per-subject rose at ${ladder[i].key}: ${ladder[i - 1].perSubject} -> ${ladder[i].perSubject}`
    );
  }
});

test("savings, value and price stay internally consistent", () => {
  for (const r of ladder) {
    assert.equal(r.savings, r.value - r.price);
    assert.equal(r.percentOff, Math.round((1 - r.price / r.value) * 100));
  }
});
