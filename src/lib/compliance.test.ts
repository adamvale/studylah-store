import { test } from "node:test";
import assert from "node:assert/strict";
import { STANDARD_DISCLAIMER, PARENT_REASSURANCE } from "@/lib/compliance";

// House rules that bind ALL customer-facing copy: no em/en dashes anywhere, no
// result guarantees. These strings ship in every diagnostic email, so lock them.

const approvedCopy = [STANDARD_DISCLAIMER, ...PARENT_REASSURANCE];

test("approved copy contains no em or en dashes", () => {
  for (const s of approvedCopy) {
    assert.ok(!s.includes("—"), `em dash in: ${s}`);
    assert.ok(!s.includes("–"), `en dash in: ${s}`);
  }
});

test("approved copy makes no result guarantee", () => {
  // "money back guarantee" (refund feature) is allowed; a bare "guarantee" of
  // results is not. The disclaimer explicitly says "not guarantees", which is
  // the compliant negation, so we only flag the promissory forms.
  const banned = [/\bsure win\b/i, /\bguaranteed (grade|mark|pass|result|score)/i, /\b100 ?%/];
  for (const s of approvedCopy) {
    for (const re of banned) {
      assert.ok(!re.test(s), `banned phrase ${re} in: ${s}`);
    }
  }
});

test("the independence disclaimer names the boards it is NOT affiliated with", () => {
  assert.match(STANDARD_DISCLAIMER, /SEAB/);
  assert.match(STANDARD_DISCLAIMER, /independent/i);
});
