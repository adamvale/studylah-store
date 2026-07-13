import type { Level } from "@/lib/catalogue";

// Grade scales for the goal-gap feature. O-Level letters, N(A) numeric grades.
// Shared by the client selector and the server validator, so keep it free of
// server imports.

export const GRADE_OPTIONS: Record<Level, string[]> = {
  "o-level": ["A1", "A2", "B3", "B4", "C5", "C6", "D7", "E8"],
  "na-level": ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"],
};

// Best → worst, including the "below" floor the estimate can report.
const ORDER: Record<Level, string[]> = {
  "o-level": ["A1", "A2", "B3", "B4", "C5", "C6", "D7", "E8", "below E8"],
  "na-level": ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "below Grade 5"],
};

export function isValidGrade(level: Level, grade: string): boolean {
  return GRADE_OPTIONS[level]?.includes(grade) ?? false;
}

// Lower rank = better grade. Unknown grades sort to the bottom.
export function gradeRank(level: string, grade: string): number {
  const order = ORDER[level as Level] ?? [];
  const i = order.indexOf(grade.trim());
  return i === -1 ? 99 : i;
}

// The optimistic end of an estimate range like "B3-B4" or "Grade 2-3" →
// "B3" / "Grade 2". "below E8" has no range and returns as-is.
export function estimateTop(estimate: string): string {
  return estimate.split("-")[0].trim();
}

// Is `target` at least as good as the top of the estimate range?
export function meetsTarget(level: string, estimate: string, target: string): boolean {
  return gradeRank(level, estimateTop(estimate)) <= gradeRank(level, target);
}
