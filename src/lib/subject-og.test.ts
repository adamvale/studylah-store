import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import path from "node:path";
import { subjectsForLevel } from "@/lib/catalogue";
import { subjectOgCardFile } from "@/lib/subject-og";

// Every catalogue subject should have a designed social card, and the file it
// points at must exist. Guards against adding a subject without artwork (the
// unfurl would silently fall back to the generic card) or a broken filename.
test("every subject has a designed OG card present on disk", () => {
  for (const level of ["o-level", "na-level"] as const) {
    for (const s of subjectsForLevel(level)) {
      const file = subjectOgCardFile(level, s.slug);
      assert.ok(file, `${level}/${s.slug} has no OG card registered in subject-og.ts`);
      assert.ok(
        existsSync(path.join(process.cwd(), "public", "og", file as string)),
        `OG card ${file} is registered but missing from public/og`
      );
    }
  }
});
