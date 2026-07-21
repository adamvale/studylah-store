import { test } from "node:test";
import assert from "node:assert/strict";
import {
  bandFor,
  gradeEstimateFor,
  gradeAttempt,
  ctaFor,
} from "@/lib/server/diagnostic";
import type { DiagnosticSet } from "@/lib/diagnostic-questions";

// The diagnostic grading engine is the core product: it decides whether a
// student's answer earns the mark, the band shown, and the CTA. These are pure
// functions (no DB), so they are cheap to lock. A regression here silently
// mis-marks free diagnostics, the top of the whole funnel.

// Minimal set builder: gradeAttempt only reads id/type/correctKey/marks/
// mapsToProduct, so we cast a lean shape to the full type.
function setOf(
  questions: Array<{
    id: string;
    type: "mcq" | "short";
    correctKey: string[];
    marks: number;
    mapsToProduct: "companion" | "vault" | "rehearsal";
  }>
): DiagnosticSet {
  return { questions } as unknown as DiagnosticSet;
}

test("bandFor thresholds: <=50 danger, <=80 warning, else pass", () => {
  assert.equal(bandFor(0, 10), "danger");
  assert.equal(bandFor(5, 10), "danger"); // exactly 50%
  assert.equal(bandFor(6, 10), "warning");
  assert.equal(bandFor(8, 10), "warning"); // exactly 80%
  assert.equal(bandFor(9, 10), "pass");
  assert.equal(bandFor(10, 10), "pass");
  assert.equal(bandFor(0, 0), "danger"); // no divide-by-zero blow-up
});

test("gradeEstimateFor maps O-Level and N(A) bands", () => {
  assert.equal(gradeEstimateFor("o-level", 10, 10), "A1-A2");
  assert.equal(gradeEstimateFor("o-level", 4, 10), "D7-E8"); // 40% is the D7-E8 floor
  assert.equal(gradeEstimateFor("o-level", 3, 10), "below E8"); // below 40%
  assert.equal(gradeEstimateFor("na-level", 10, 10), "Grade 1-2");
  assert.equal(gradeEstimateFor("na-level", 3, 10), "below Grade 5");
});

test("MCQ grading is case-insensitive on the accepted key", () => {
  const set = setOf([
    { id: "q1", type: "mcq", correctKey: ["B"], marks: 1, mapsToProduct: "vault" },
  ]);
  assert.equal(gradeAttempt(set, { q1: "b" }).score, 1);
  assert.equal(gradeAttempt(set, { q1: "C" }).score, 0);
});

test("numeric short answers require an EXACT match ('3' must not pass '30')", () => {
  const set = setOf([
    { id: "q1", type: "short", correctKey: ["30"], marks: 2, mapsToProduct: "companion" },
  ]);
  assert.equal(gradeAttempt(set, { q1: "30" }).score, 2);
  assert.equal(gradeAttempt(set, { q1: "3" }).score, 0);
  assert.equal(gradeAttempt(set, { q1: "300" }).score, 0);
});

test("phrasing short answers pass when the answer contains an accepted phrase", () => {
  const set = setOf([
    {
      id: "q1",
      type: "short",
      correctKey: ["exothermic"],
      marks: 1,
      mapsToProduct: "companion",
    },
  ]);
  assert.equal(gradeAttempt(set, { q1: "it is an exothermic reaction" }).score, 1);
  assert.equal(gradeAttempt(set, { q1: "endothermic" }).score, 0);
  assert.equal(gradeAttempt(set, { q1: "" }).score, 0);
});

test("score, totalMarks and weakness reflect the dropped-mark buckets", () => {
  const set = setOf([
    { id: "q1", type: "mcq", correctKey: ["A"], marks: 1, mapsToProduct: "vault" },
    { id: "q2", type: "mcq", correctKey: ["A"], marks: 3, mapsToProduct: "companion" },
    { id: "q3", type: "mcq", correctKey: ["A"], marks: 1, mapsToProduct: "companion" },
  ]);
  // miss q2 and q3 (both companion, 4 marks) but get q1 (vault)
  const r = gradeAttempt(set, { q1: "A", q2: "B", q3: "B" });
  assert.equal(r.score, 1);
  assert.equal(r.totalMarks, 5);
  assert.equal(r.weakness, "companion"); // most marks dropped there
});

test("a clean sheet has no weakness", () => {
  const set = setOf([
    { id: "q1", type: "mcq", correctKey: ["A"], marks: 1, mapsToProduct: "vault" },
  ]);
  assert.equal(gradeAttempt(set, { q1: "A" }).weakness, null);
});

test("ctaFor routes danger to the full Ultra pack, else by weakness", () => {
  assert.equal(ctaFor("danger", "companion").product, "master");
  assert.equal(ctaFor("warning", "companion").product, "companion");
  assert.equal(ctaFor("warning", "vault").product, "vault");
  assert.equal(ctaFor("pass", null).product, "rehearsal");
});
