import { test } from "node:test";
import assert from "node:assert/strict";
import { tierPrice, tierValue, tierSavings, priceCart } from "@/lib/pricing";
import { getSubject, tierProducts } from "@/lib/catalogue";

// The core price points and invariants of the store. These feed every cart,
// every checkout line and every marketing number.

const chem = getSubject("o-level", "chemistry-pure")!;
const sciProducts = tierProducts("master", chem);

test("O-Level Ultra is S$68 per subject", () => {
  assert.equal(tierPrice("o-level", "master"), 68);
});

test("a full science Ultra is S$116 of parts, saving S$48", () => {
  assert.equal(tierValue("o-level", "master", sciProducts), 116);
  assert.equal(tierSavings("o-level", "master", sciProducts), 48);
});

test("value = price + savings holds for the science Ultra", () => {
  assert.equal(
    tierValue("o-level", "master", sciProducts),
    tierPrice("o-level", "master") + tierSavings("o-level", "master", sciProducts)
  );
});

test("a priced single-subject cart never charges more than the parts value", () => {
  const priced = priceCart([
    { level: "o-level", subjectSlug: "chemistry-pure", tier: "master" },
  ]);
  assert.ok(priced.total > 0);
  assert.ok(
    priced.total <= priced.baseline,
    `total ${priced.total} exceeded baseline ${priced.baseline}`
  );
  assert.equal(priced.savings, priced.baseline - priced.total);
});

test("bundling subjects lowers the average per-subject price", () => {
  const one = priceCart([
    { level: "o-level", subjectSlug: "chemistry-pure", tier: "master" },
  ]);
  const three = priceCart([
    { level: "o-level", subjectSlug: "chemistry-pure", tier: "master" },
    { level: "o-level", subjectSlug: "physics-pure", tier: "master" },
    { level: "o-level", subjectSlug: "biology-pure", tier: "master" },
  ]);
  assert.ok(
    three.total / 3 < one.total,
    `3-subject per-subject ${three.total / 3} not below single ${one.total}`
  );
});
