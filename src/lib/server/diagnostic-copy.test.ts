import { test } from "node:test";
import assert from "node:assert/strict";
import { BAND_COPY, ESTIMATE_CAVEAT, ctaFor } from "@/lib/server/diagnostic";
import type { Band } from "@/lib/server/diagnostic";

// Every string here ships inside the diagnostic result + nurture emails. The
// house rules: no em/en dashes anywhere, no grade/result promise. Locking this
// stops a future copy edit (like the "Danger zone" softening) from silently
// reintroducing a violation.

const bands: Band[] = ["danger", "warning", "pass"];
// The weakness buckets ctaFor accepts; null exercises the default (rehearsal)
// CTA, so all four CTA branches' copy is still scanned.
const weaknesses = [null, "companion", "vault"] as const;

const allCopy: string[] = [
  ESTIMATE_CAVEAT,
  ...bands.flatMap((b) => [BAND_COPY[b].title, BAND_COPY[b].line]),
  ...bands.flatMap((b) =>
    weaknesses.map((w) => {
      const c = ctaFor(b, w);
      return `${c.headline} ${c.body}`;
    })
  ),
];

test("no diagnostic email copy contains an em or en dash", () => {
  for (const s of allCopy) {
    assert.ok(!s.includes("—"), `em dash in: ${s}`);
    assert.ok(!s.includes("–"), `en dash in: ${s}`);
  }
});

test("no diagnostic email copy promises a grade or result", () => {
  // "money-back guarantee" (refund feature) is allowed; result promises are not.
  const banned = [
    /\bsure win\b/i,
    /\bguaranteed? (a |an )?(grade|mark|pass|result|score|distinction)/i,
    /\b100 ?%/,
    /\bwill (score|get|pass|hit)\b/i,
  ];
  for (const s of allCopy) {
    for (const re of banned) {
      assert.ok(!re.test(s), `banned promissory phrase ${re} in: ${s}`);
    }
  }
});

test("the estimate caveat frames the score as an estimate, not a promise", () => {
  assert.match(ESTIMATE_CAVEAT, /estimate/i);
  assert.match(ESTIMATE_CAVEAT, /not a promise|not a prediction/i);
});

test("the danger band still routes to the full pack", () => {
  // Behaviour guard so a copy rewrite can't accidentally change the CTA target.
  assert.equal(ctaFor("danger", "vault").product, "master");
});
