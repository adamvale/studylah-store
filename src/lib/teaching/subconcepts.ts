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

import { BOXES as D01 } from "./dynamics/s3-01";
import { BOXES as D02 } from "./dynamics/s3-02";
import { BOXES as D03 } from "./dynamics/s3-03";
import { BOXES as D04 } from "./dynamics/s3-04";
import { BOXES as D05 } from "./dynamics/s3-05";
import { BOXES as DREV1 } from "./dynamics/s3-rev1";
import { BOXES as D06 } from "./dynamics/s3-06";
import { BOXES as D07 } from "./dynamics/s3-07";
import { BOXES as D08 } from "./dynamics/s3-08";
import { BOXES as D09 } from "./dynamics/s3-09";
import { BOXES as D10 } from "./dynamics/s3-10";
import { BOXES as DREV2 } from "./dynamics/s3-rev2";
import { BOXES as D11 } from "./dynamics/s3-11";
import { BOXES as D12 } from "./dynamics/s3-12";
import { BOXES as DREV3 } from "./dynamics/s3-rev3";
import { BOXES as DQUIZ } from "./dynamics/s3-quiz";

import { BOXES as T401 } from "./turning-effect/s4-01";
import { BOXES as T402 } from "./turning-effect/s4-02";
import { BOXES as T403 } from "./turning-effect/s4-03";
import { BOXES as TREV1 } from "./turning-effect/s4-rev1";
import { BOXES as T404 } from "./turning-effect/s4-04";
import { BOXES as T405 } from "./turning-effect/s4-05";
import { BOXES as TREV2 } from "./turning-effect/s4-rev2";
import { BOXES as TQUIZ } from "./turning-effect/s4-quiz";

import { BOXES as M01 } from "./measurement/s1-1";
import { BOXES as M02 } from "./measurement/s1-2";
import { BOXES as M03 } from "./measurement/s1-3";
import { BOXES as MREV1 } from "./measurement/s1-rev1";
import { BOXES as M04 } from "./measurement/s1-4";
import { BOXES as M05 } from "./measurement/s1-5";
import { BOXES as MREV2 } from "./measurement/s1-rev2";
import { BOXES as MQUIZ } from "./measurement/s1-quiz";

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

// The full Dynamics tree (KB Ch03 Mass and Weight + Ch04 Forces), same teaching
// order: 12 micro-lessons with a revision checkpoint at each topic seam, closing
// with the topical practice quiz. Content lives in ./dynamics/*.
const DYNAMICS: Subconcept[] = [
  ...D01, ...D02, ...D03, ...D04, ...D05, ...DREV1,
  ...D06, ...D07, ...D08, ...D09, ...D10, ...DREV2,
  ...D11, ...D12, ...DREV3,
  ...DQUIZ,
];

// The Turning Effect of Forces tree (KB Ch05), a single-chapter topic so it stays
// at 5 micro-lessons: a revision checkpoint after T4.3 and after T4.5, then the
// topical quiz. Content lives in ./turning-effect/*.
const TURNING_EFFECT: Subconcept[] = [
  ...T401, ...T402, ...T403, ...TREV1,
  ...T404, ...T405, ...TREV2,
  ...TQUIZ,
];

// The Measurement tree (KB Ch01), another single-chapter topic at 5 micro-lessons:
// a revision checkpoint after T1.3 and after T1.5, then the topical quiz.
// Content lives in ./measurement/*.
const MEASUREMENT: Subconcept[] = [
  ...M01, ...M02, ...M03, ...MREV1,
  ...M04, ...M05, ...MREV2,
  ...MQUIZ,
];

// topicKey -> its subconcepts. Kinematics shares the pure/science key
// "t2-kinematics"; the N-Level key is "kinematics". Dynamics uses "t3-dynamics"
// (Pure), "t4-dynamics" (the other level) and the N-Level key "dynamics".
const SUBCONCEPTS: Record<string, Subconcept[]> = {
  "t2-kinematics": KINEMATICS,
  kinematics: KINEMATICS,
  "t3-dynamics": DYNAMICS,
  "t4-dynamics": DYNAMICS,
  dynamics: DYNAMICS,
  // Turning Effect of Forces: "t4-..." on one level, "t5-..." on the other.
  "t4-turning-effect-of-forces": TURNING_EFFECT,
  "t5-turning-effects-of-forces": TURNING_EFFECT,
  // Measurement: the pure/science key, then the N-Level key.
  "t1-physical-quantities-and-measurement": MEASUREMENT,
  "physical-quantities-units-and-measurement": MEASUREMENT,
};

export function subconceptsFor(topicKey: string): Subconcept[] | undefined {
  return SUBCONCEPTS[topicKey];
}
