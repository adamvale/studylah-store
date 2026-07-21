import { test } from "node:test";
import assert from "node:assert/strict";
import {
  TIER_NAMES,
  TIER_ORDER,
  sgd,
  getSubject,
  tierProducts,
} from "@/lib/catalogue";

test("tier display names are Starter / Plus / Ultra", () => {
  assert.equal(TIER_NAMES.essential, "Starter");
  assert.equal(TIER_NAMES.strategic, "Plus");
  assert.equal(TIER_NAMES.master, "Ultra");
});

test("tier order runs cheapest to fullest", () => {
  assert.deepEqual(TIER_ORDER, ["essential", "strategic", "master"]);
});

test("sgd formats whole-dollar SGD amounts", () => {
  assert.equal(sgd(68), "S$68");
  assert.equal(sgd(0), "S$0");
});

test("a science Ultra bundles all four products (incl. the Paper 3 rehearsal)", () => {
  const chem = getSubject("o-level", "chemistry-pure")!;
  const products = tierProducts("master", chem);
  assert.equal(products.length, 4);
  assert.ok(products.includes("rehearsal"));
  assert.ok(products.includes("forecast"));
});

test("Starter tier is a strict subset of Ultra", () => {
  const chem = getSubject("o-level", "chemistry-pure")!;
  const starter = tierProducts("essential", chem);
  const ultra = tierProducts("master", chem);
  assert.ok(starter.length < ultra.length);
  for (const p of starter) assert.ok(ultra.includes(p));
});
