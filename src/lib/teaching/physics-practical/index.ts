import type { Subconcept } from "@/lib/teaching/subconcepts";

import { BOXES as P1_1 } from "./p1-1";
import { BOXES as P1_2 } from "./p1-2";
import { BOXES as P1_3 } from "./p1-3";
import { BOXES as P1_4 } from "./p1-4";
import { BOXES as P1_5 } from "./p1-5";
import { BOXES as P1_6 } from "./p1-6";
import { BOXES as P1_R1 } from "./p1-rev1";
import { BOXES as P1_R2 } from "./p1-rev2";
import { BOXES as P1_Q } from "./p1-quiz";

import { BOXES as P2_1 } from "./p2-1";
import { BOXES as P2_2 } from "./p2-2";
import { BOXES as P2_3 } from "./p2-3";
import { BOXES as P2_4 } from "./p2-4";
import { BOXES as P2_5 } from "./p2-5";
import { BOXES as P2_6 } from "./p2-6";
import { BOXES as P2_R1 } from "./p2-rev1";
import { BOXES as P2_R2 } from "./p2-rev2";
import { BOXES as P2_Q } from "./p2-quiz";

import { BOXES as P3_1 } from "./p3-1";
import { BOXES as P3_2 } from "./p3-2";
import { BOXES as P3_3 } from "./p3-3";
import { BOXES as P3_4 } from "./p3-4";
import { BOXES as P3_5 } from "./p3-5";
import { BOXES as P3_6 } from "./p3-6";
import { BOXES as P3_R1 } from "./p3-rev1";
import { BOXES as P3_R2 } from "./p3-rev2";
import { BOXES as P3_Q } from "./p3-quiz";

import { BOXES as P4_1 } from "./p4-1";
import { BOXES as P4_2 } from "./p4-2";
import { BOXES as P4_3 } from "./p4-3";
import { BOXES as P4_4 } from "./p4-4";
import { BOXES as P4_5 } from "./p4-5";
import { BOXES as P4_6 } from "./p4-6";
import { BOXES as P4_R1 } from "./p4-rev1";
import { BOXES as P4_R2 } from "./p4-rev2";
import { BOXES as P4_Q } from "./p4-quiz";
// The Physics PRACTICAL run (Paper 3), authored in the same teach-then-test
// shape as the theory topics so it plays on the same engine:
//   TP1 Practical skills, TP2 Measurements and kinematics, TP3 Dynamics, TP4 Heat
// Each is 6 micro-lessons, a revision checkpoint after the third and the sixth,
// then a topical quiz. Surfaced through the Practical Lab rather than the topic
// list, because the practical paper is not a syllabus topic you can forecast.
export const PHYSICS_PRACTICAL: Subconcept[] = [
  ...P1_1, ...P1_2, ...P1_3, ...P1_R1,
  ...P1_4, ...P1_5, ...P1_6, ...P1_R2,
  ...P1_Q,
  ...P2_1, ...P2_2, ...P2_3, ...P2_R1,
  ...P2_4, ...P2_5, ...P2_6, ...P2_R2,
  ...P2_Q,
  ...P3_1, ...P3_2, ...P3_3, ...P3_R1,
  ...P3_4, ...P3_5, ...P3_6, ...P3_R2,
  ...P3_Q,
  ...P4_1, ...P4_2, ...P4_3, ...P4_R1,
  ...P4_4, ...P4_5, ...P4_6, ...P4_R2,
  ...P4_Q,
];
