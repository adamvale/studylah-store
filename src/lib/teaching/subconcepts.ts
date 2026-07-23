import type { LessonStep } from "@/lib/lesson-steps";

import { BOXES as S21 } from "./kinematics/s21";
import { BOXES as S22 } from "./kinematics/s22";
import { BOXES as S23 } from "./kinematics/s23";
import { BOXES as S24 } from "./kinematics/s24";
import { BOXES as REV1 } from "./kinematics/rev1";
import { BOXES as S25 } from "./kinematics/s25";
import { BOXES as REV2 } from "./kinematics/rev2";
import { BOXES as S26 } from "./kinematics/s26";
import { BOXES as REV3 } from "./kinematics/rev3";
import { BOXES as S27 } from "./kinematics/s27";
import { BOXES as REV4 } from "./kinematics/rev4";
import { BOXES as S2829 } from "./kinematics/s2829";
import { BOXES as REV5 } from "./kinematics/rev5";
import { BOXES as QUIZ } from "./kinematics/quiz";

// The bite-sized lesson layer. A topic is broken into small subconcepts; each
// one teaches a little, then tests it with a question, so a student learns the
// idea before facing exam questions. Keyed by topicKey (the same keys the
// teaching packs use), so the same content serves Pure, Science and N-Level.

export interface Subconcept {
  id: string; // "t2.1"
  code: string; // "T2.1"
  title: string; // "Distance vs displacement"
  blurb: string; // one line shown on the box
  steps: LessonStep[]; // teach, then test (concept + a question + insight)
  // "lesson" (default) teaches then tests. "revision" is a checkpoint quiz over
  // the boxes before it (5 MCQ + 5 interactive + 2 open). "quiz" is the final
  // topical practice (10 MCQ + 10 interactive + 5 open). Both are question-only.
  kind?: "lesson" | "revision" | "quiz";
}

// The full Kinematics tree in teaching order: teach in small single-idea steps,
// test after each micro-lesson, and a checkpoint revision after each section,
// closing with the topical practice quiz. Content lives in ./kinematics/*.
const KINEMATICS: Subconcept[] = [
  ...S21, ...S22, ...S23, ...S24, ...REV1,
  ...S25, ...REV2,
  ...S26, ...REV3,
  ...S27, ...REV4,
  ...S2829, ...REV5,
  ...QUIZ,
];

// topicKey -> its subconcepts. Kinematics shares the pure/science key
// "t2-kinematics"; the N-Level key is "kinematics".
const SUBCONCEPTS: Record<string, Subconcept[]> = {
  "t2-kinematics": KINEMATICS,
  kinematics: KINEMATICS,
};

export function subconceptsFor(topicKey: string): Subconcept[] | undefined {
  return SUBCONCEPTS[topicKey];
}
