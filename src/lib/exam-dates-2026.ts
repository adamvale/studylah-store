// Official 2026 written-exam dates per StudyLah subject, transcribed from the
// SEAB examination timetables ("Updated as at 13 February 2026"):
//   O-Level:   https://file.go.gov.sg/2026-o-level-exam-cal.pdf
//   N(A)-Level: https://go.gov.sg/2026-n-level-exam-cal
// Keyed by `${level}::${slug}` (same convention as SUBJECT_CODES). Times are
// Singapore time (+08:00). Practical papers run in shifts; the time shown is
// the first shift and the note says so. If SEAB revises the timetable, update
// here and bump the note below.
export const TIMETABLE_VERSION = "SEAB timetable, updated 13 Feb 2026";

export type ExamPaper = {
  paper: string; // e.g. "Paper 1"
  kind: "Written" | "Practical";
  at: string; // ISO datetime, Singapore time
  durationMin: number;
  note?: string;
};

export const EXAM_DATES_2026: Record<string, ExamPaper[]> = {
  // ---- O-Level (G3) ----
  "o-level::physics-pure": [
    { paper: "Paper 3", kind: "Practical", at: "2026-10-05T08:00:00+08:00", durationMin: 110, note: "in shifts" },
    { paper: "Paper 2", kind: "Written", at: "2026-10-29T14:00:00+08:00", durationMin: 105 },
    { paper: "Paper 1", kind: "Written", at: "2026-11-06T14:30:00+08:00", durationMin: 60 },
  ],
  "o-level::chemistry-pure": [
    { paper: "Paper 3", kind: "Practical", at: "2026-09-30T08:00:00+08:00", durationMin: 110, note: "in shifts" },
    { paper: "Paper 2", kind: "Written", at: "2026-10-27T14:00:00+08:00", durationMin: 105 },
    { paper: "Paper 1", kind: "Written", at: "2026-11-06T08:00:00+08:00", durationMin: 60 },
  ],
  "o-level::biology-pure": [
    { paper: "Paper 3", kind: "Practical", at: "2026-10-13T08:00:00+08:00", durationMin: 110, note: "in shifts" },
    { paper: "Paper 2", kind: "Written", at: "2026-10-30T08:00:00+08:00", durationMin: 105 },
    { paper: "Paper 1", kind: "Written", at: "2026-11-10T14:00:00+08:00", durationMin: 60 },
  ],
  "o-level::physics-science": [
    { paper: "Paper 5", kind: "Practical", at: "2026-10-08T08:00:00+08:00", durationMin: 90, note: "in shifts" },
    { paper: "Paper 2 (Physics)", kind: "Written", at: "2026-10-29T14:00:00+08:00", durationMin: 75 },
    { paper: "Paper 1 (MCQ)", kind: "Written", at: "2026-11-10T08:00:00+08:00", durationMin: 60 },
  ],
  "o-level::chemistry-science": [
    { paper: "Paper 5", kind: "Practical", at: "2026-10-08T08:00:00+08:00", durationMin: 90, note: "in shifts" },
    { paper: "Paper 3 (Chemistry)", kind: "Written", at: "2026-10-27T14:00:00+08:00", durationMin: 75 },
    { paper: "Paper 1 (MCQ)", kind: "Written", at: "2026-11-10T08:00:00+08:00", durationMin: 60 },
  ],
  "o-level::biology-science": [
    { paper: "Paper 5", kind: "Practical", at: "2026-10-08T08:00:00+08:00", durationMin: 90, note: "in shifts" },
    { paper: "Paper 4 (Biology)", kind: "Written", at: "2026-10-30T08:00:00+08:00", durationMin: 75 },
    { paper: "Paper 1 (MCQ)", kind: "Written", at: "2026-11-10T08:00:00+08:00", durationMin: 60 },
  ],
  "o-level::geography-pure": [
    { paper: "Paper 1", kind: "Written", at: "2026-10-22T14:00:00+08:00", durationMin: 105 },
    { paper: "Paper 2", kind: "Written", at: "2026-10-27T08:00:00+08:00", durationMin: 105 },
  ],
  "o-level::geography-elective": [
    { paper: "Paper 2 (Geography)", kind: "Written", at: "2026-10-20T14:00:00+08:00", durationMin: 105 },
    { paper: "Paper 1 (Social Studies)", kind: "Written", at: "2026-10-26T08:00:00+08:00", durationMin: 105 },
  ],
  "o-level::history-pure": [
    { paper: "Paper 1", kind: "Written", at: "2026-10-22T14:00:00+08:00", durationMin: 110 },
    { paper: "Paper 2", kind: "Written", at: "2026-10-27T08:00:00+08:00", durationMin: 110 },
  ],
  "o-level::history-elective": [
    { paper: "Paper 2 (History)", kind: "Written", at: "2026-10-20T14:00:00+08:00", durationMin: 110 },
    { paper: "Paper 1 (Social Studies)", kind: "Written", at: "2026-10-26T08:00:00+08:00", durationMin: 105 },
  ],
  "o-level::social-studies": [
    { paper: "Paper 1 (Social Studies)", kind: "Written", at: "2026-10-26T08:00:00+08:00", durationMin: 105 },
  ],
  "o-level::principles-of-accounts": [
    { paper: "Paper 1", kind: "Written", at: "2026-10-28T14:00:00+08:00", durationMin: 60 },
    { paper: "Paper 2", kind: "Written", at: "2026-10-30T14:30:00+08:00", durationMin: 120 },
  ],
  "o-level::e-math": [
    { paper: "Paper 1", kind: "Written", at: "2026-10-21T14:00:00+08:00", durationMin: 135 },
    { paper: "Paper 2", kind: "Written", at: "2026-10-23T14:30:00+08:00", durationMin: 135 },
  ],
  "o-level::a-math": [
    { paper: "Paper 1", kind: "Written", at: "2026-10-26T14:00:00+08:00", durationMin: 135 },
    { paper: "Paper 2", kind: "Written", at: "2026-10-28T08:00:00+08:00", durationMin: 135 },
  ],

  // ---- N(A)-Level (G2) ----
  // N(A) Science sits the two papers of each component in one morning
  // (e.g. 5105 Papers 1+2 = the Physics component).
  "na-level::physics": [
    { paper: "Physics papers (P1+P2)", kind: "Written", at: "2026-10-06T08:00:00+08:00", durationMin: 75 },
  ],
  "na-level::chemistry": [
    { paper: "Chemistry papers (P3+P4)", kind: "Written", at: "2026-10-08T08:00:00+08:00", durationMin: 75 },
  ],
  "na-level::biology": [
    { paper: "Biology papers (P5+P6)", kind: "Written", at: "2026-10-12T08:00:00+08:00", durationMin: 75 },
  ],
  "na-level::history": [
    { paper: "Paper 1 (Social Studies)", kind: "Written", at: "2026-09-16T08:00:00+08:00", durationMin: 105 },
    { paper: "Paper 2 (History)", kind: "Written", at: "2026-10-05T14:00:00+08:00", durationMin: 110 },
  ],
  "na-level::principles-of-accounts": [
    { paper: "Paper 1", kind: "Written", at: "2026-10-07T14:00:00+08:00", durationMin: 60 },
    { paper: "Paper 2", kind: "Written", at: "2026-10-09T14:30:00+08:00", durationMin: 120 },
  ],
  "na-level::e-math": [
    { paper: "Paper 1", kind: "Written", at: "2026-10-05T08:00:00+08:00", durationMin: 120 },
    { paper: "Paper 2", kind: "Written", at: "2026-10-07T08:00:00+08:00", durationMin: 120 },
  ],
  "na-level::a-math": [
    { paper: "Paper 1", kind: "Written", at: "2026-10-06T14:00:00+08:00", durationMin: 105 },
    { paper: "Paper 2", kind: "Written", at: "2026-10-09T08:00:00+08:00", durationMin: 105 },
  ],
  "na-level::food-and-nutrition": [
    { paper: "Paper 1", kind: "Written", at: "2026-10-13T08:00:00+08:00", durationMin: 90 },
  ],
};

export function examPapersFor(level: string, slug: string): ExamPaper[] {
  return EXAM_DATES_2026[`${level}::${slug}`] ?? [];
}

// ── The time gate ───────────────────────────────────────────────────────────
// A subject's LEARNING surfaces (daily quiz, drills, plans, the game) retire
// automatically once its 2026 exams are over: nothing left to prepare for.
// Grace period: a few days past the final paper so students can do their
// post-mortem. IMPORTANT: this gates study tools only. Orders, PDF downloads
// and the money-back guarantee flow (open 14 days AFTER the exam) are never
// touched by this gate.
const ACCESS_GRACE_DAYS = 3;

// When study access ends for a subject: final paper + grace. null = no dated
// papers known (subject never expires automatically).
export function subjectAccessEndsAt(level: string, slug: string): Date | null {
  const papers = EXAM_DATES_2026[`${level}::${slug}`];
  if (!papers || papers.length === 0) return null;
  const last = Math.max(...papers.map((p) => new Date(p.at).getTime()));
  return new Date(last + ACCESS_GRACE_DAYS * 24 * 60 * 60 * 1000);
}

export function subjectExamOver(
  level: string,
  slug: string,
  now: Date = new Date()
): boolean {
  const ends = subjectAccessEndsAt(level, slug);
  return ends !== null && now.getTime() > ends.getTime();
}
