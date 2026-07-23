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

import { BOXES as P01 } from "./pressure/s5-1";
import { BOXES as P02 } from "./pressure/s5-2";
import { BOXES as P03 } from "./pressure/s5-3";
import { BOXES as PREV1 } from "./pressure/s5-rev1";
import { BOXES as P04 } from "./pressure/s5-4";
import { BOXES as P05 } from "./pressure/s5-5";
import { BOXES as P06 } from "./pressure/s5-6";
import { BOXES as PREV2 } from "./pressure/s5-rev2";
import { BOXES as PQUIZ } from "./pressure/s5-quiz";

import { BOXES as E01 } from "./energy/s6-1";
import { BOXES as E02 } from "./energy/s6-2";
import { BOXES as E03 } from "./energy/s6-3";
import { BOXES as EREV1 } from "./energy/s6-rev1";
import { BOXES as E04 } from "./energy/s6-4";
import { BOXES as E05 } from "./energy/s6-5";
import { BOXES as E06 } from "./energy/s6-6";
import { BOXES as EREV2 } from "./energy/s6-rev2";
import { BOXES as EQUIZ } from "./energy/s6-quiz";

import { BOXES as K01 } from "./kinetic-model/s7-1";
import { BOXES as K02 } from "./kinetic-model/s7-2";
import { BOXES as K03 } from "./kinetic-model/s7-3";
import { BOXES as KREV1 } from "./kinetic-model/s7-rev1";
import { BOXES as K04 } from "./kinetic-model/s7-4";
import { BOXES as K05 } from "./kinetic-model/s7-5";
import { BOXES as KREV2 } from "./kinetic-model/s7-rev2";
import { BOXES as KQUIZ } from "./kinetic-model/s7-quiz";

import { BOXES as H01 } from "./thermal-processes/s8-1";
import { BOXES as H02 } from "./thermal-processes/s8-2";
import { BOXES as H03 } from "./thermal-processes/s8-3";
import { BOXES as HREV1 } from "./thermal-processes/s8-rev1";
import { BOXES as H04 } from "./thermal-processes/s8-4";
import { BOXES as H05 } from "./thermal-processes/s8-5";
import { BOXES as HREV2 } from "./thermal-processes/s8-rev2";
import { BOXES as HQUIZ } from "./thermal-processes/s8-quiz";

import { BOXES as TP01 } from "./thermal-properties/s9-1";
import { BOXES as TP02 } from "./thermal-properties/s9-2";
import { BOXES as TP03 } from "./thermal-properties/s9-3";
import { BOXES as TPREV1 } from "./thermal-properties/s9-rev1";
import { BOXES as TP04 } from "./thermal-properties/s9-4";
import { BOXES as TP05 } from "./thermal-properties/s9-5";
import { BOXES as TP06 } from "./thermal-properties/s9-6";
import { BOXES as TPREV2 } from "./thermal-properties/s9-rev2";
import { BOXES as TPQUIZ } from "./thermal-properties/s9-quiz";

import { BOXES as W01 } from "./waves/s10-1";
import { BOXES as W02 } from "./waves/s10-2";
import { BOXES as W03 } from "./waves/s10-3";
import { BOXES as WREV1 } from "./waves/s10-rev1";
import { BOXES as W04 } from "./waves/s10-4";
import { BOXES as W05 } from "./waves/s10-5";
import { BOXES as W06 } from "./waves/s10-6";
import { BOXES as WREV2 } from "./waves/s10-rev2";
import { BOXES as WQUIZ } from "./waves/s10-quiz";

import { BOXES as S11_1 } from "./em-spectrum/s11-1";
import { BOXES as S11_2 } from "./em-spectrum/s11-2";
import { BOXES as S11_3 } from "./em-spectrum/s11-3";
import { BOXES as S11_4 } from "./em-spectrum/s11-4";
import { BOXES as S11_5 } from "./em-spectrum/s11-5";
import { BOXES as S11_R1 } from "./em-spectrum/s11-rev1";
import { BOXES as S11_R2 } from "./em-spectrum/s11-rev2";
import { BOXES as S11_Q } from "./em-spectrum/s11-quiz";

import { BOXES as S12_1 } from "./light/s12-1";
import { BOXES as S12_2 } from "./light/s12-2";
import { BOXES as S12_3 } from "./light/s12-3";
import { BOXES as S12_4 } from "./light/s12-4";
import { BOXES as S12_5 } from "./light/s12-5";
import { BOXES as S12_6 } from "./light/s12-6";
import { BOXES as S12_R1 } from "./light/s12-rev1";
import { BOXES as S12_R2 } from "./light/s12-rev2";
import { BOXES as S12_Q } from "./light/s12-quiz";

import { BOXES as S13_1 } from "./static/s13-1";
import { BOXES as S13_2 } from "./static/s13-2";
import { BOXES as S13_3 } from "./static/s13-3";
import { BOXES as S13_4 } from "./static/s13-4";
import { BOXES as S13_5 } from "./static/s13-5";
import { BOXES as S13_6 } from "./static/s13-6";
import { BOXES as S13_R1 } from "./static/s13-rev1";
import { BOXES as S13_R2 } from "./static/s13-rev2";
import { BOXES as S13_Q } from "./static/s13-quiz";

import { BOXES as S14_1 } from "./current/s14-1";
import { BOXES as S14_2 } from "./current/s14-2";
import { BOXES as S14_3 } from "./current/s14-3";
import { BOXES as S14_4 } from "./current/s14-4";
import { BOXES as S14_5 } from "./current/s14-5";
import { BOXES as S14_6 } from "./current/s14-6";
import { BOXES as S14_R1 } from "./current/s14-rev1";
import { BOXES as S14_R2 } from "./current/s14-rev2";
import { BOXES as S14_Q } from "./current/s14-quiz";

import { BOXES as S15_1 } from "./dc-circuits/s15-1";
import { BOXES as S15_2 } from "./dc-circuits/s15-2";
import { BOXES as S15_3 } from "./dc-circuits/s15-3";
import { BOXES as S15_4 } from "./dc-circuits/s15-4";
import { BOXES as S15_5 } from "./dc-circuits/s15-5";
import { BOXES as S15_6 } from "./dc-circuits/s15-6";
import { BOXES as S15_R1 } from "./dc-circuits/s15-rev1";
import { BOXES as S15_R2 } from "./dc-circuits/s15-rev2";
import { BOXES as S15_Q } from "./dc-circuits/s15-quiz";

import { BOXES as S16_1 } from "./practical-electricity/s16-1";
import { BOXES as S16_2 } from "./practical-electricity/s16-2";
import { BOXES as S16_3 } from "./practical-electricity/s16-3";
import { BOXES as S16_4 } from "./practical-electricity/s16-4";
import { BOXES as S16_5 } from "./practical-electricity/s16-5";
import { BOXES as S16_R1 } from "./practical-electricity/s16-rev1";
import { BOXES as S16_R2 } from "./practical-electricity/s16-rev2";
import { BOXES as S16_Q } from "./practical-electricity/s16-quiz";

import { BOXES as S17_1 } from "./magnetism/s17-1";
import { BOXES as S17_2 } from "./magnetism/s17-2";
import { BOXES as S17_3 } from "./magnetism/s17-3";
import { BOXES as S17_4 } from "./magnetism/s17-4";
import { BOXES as S17_5 } from "./magnetism/s17-5";
import { BOXES as S17_6 } from "./magnetism/s17-6";
import { BOXES as S17_R1 } from "./magnetism/s17-rev1";
import { BOXES as S17_R2 } from "./magnetism/s17-rev2";
import { BOXES as S17_Q } from "./magnetism/s17-quiz";

import { BOXES as S18_1 } from "./electromagnetism/s18-1";
import { BOXES as S18_2 } from "./electromagnetism/s18-2";
import { BOXES as S18_3 } from "./electromagnetism/s18-3";
import { BOXES as S18_4 } from "./electromagnetism/s18-4";
import { BOXES as S18_5 } from "./electromagnetism/s18-5";
import { BOXES as S18_6 } from "./electromagnetism/s18-6";
import { BOXES as S18_R1 } from "./electromagnetism/s18-rev1";
import { BOXES as S18_R2 } from "./electromagnetism/s18-rev2";
import { BOXES as S18_Q } from "./electromagnetism/s18-quiz";

import { BOXES as S19_1 } from "./em-induction/s19-1";
import { BOXES as S19_2 } from "./em-induction/s19-2";
import { BOXES as S19_3 } from "./em-induction/s19-3";
import { BOXES as S19_4 } from "./em-induction/s19-4";
import { BOXES as S19_5 } from "./em-induction/s19-5";
import { BOXES as S19_R1 } from "./em-induction/s19-rev1";
import { BOXES as S19_R2 } from "./em-induction/s19-rev2";
import { BOXES as S19_Q } from "./em-induction/s19-quiz";

import { BOXES as S20_1 } from "./radioactivity/s20-1";
import { BOXES as S20_2 } from "./radioactivity/s20-2";
import { BOXES as S20_3 } from "./radioactivity/s20-3";
import { BOXES as S20_4 } from "./radioactivity/s20-4";
import { BOXES as S20_5 } from "./radioactivity/s20-5";
import { BOXES as S20_6 } from "./radioactivity/s20-6";
import { BOXES as S20_R1 } from "./radioactivity/s20-rev1";
import { BOXES as S20_R2 } from "./radioactivity/s20-rev2";
import { BOXES as S20_Q } from "./radioactivity/s20-quiz";

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

// Pressure (KB Ch06, which carries density too), a large single chapter at 6
// micro-lessons: revision after T5.3 and T5.6, then the quiz. In ./pressure/*.
const PRESSURE: Subconcept[] = [
  ...P01, ...P02, ...P03, ...PREV1,
  ...P04, ...P05, ...P06, ...PREV2,
  ...PQUIZ,
];

// Energy (KB Ch07, stores through resources), also 6 micro-lessons. In ./energy/*.
const ENERGY: Subconcept[] = [
  ...E01, ...E02, ...E03, ...EREV1,
  ...E04, ...E05, ...E06, ...EREV2,
  ...EQUIZ,
];

// Kinetic Particle Model (KB Ch08), a conceptual chapter: no calculations, so
// no working blocks anywhere. 5 micro-lessons. In ./kinetic-model/*.
const KINETIC_MODEL: Subconcept[] = [
  ...K01, ...K02, ...K03, ...KREV1,
  ...K04, ...K05, ...KREV2,
  ...KQUIZ,
];

// Thermal Processes (KB Ch09), also conceptual: conduction, convection,
// radiation and where they show up. 5 micro-lessons. In ./thermal-processes/*.
const THERMAL_PROCESSES: Subconcept[] = [
  ...H01, ...H02, ...H03, ...HREV1,
  ...H04, ...H05, ...HREV2,
  ...HQUIZ,
];

// Thermal Properties of Matter (KB Ch10), a calculation chapter: internal
// energy, heat capacity, latent heat and the change-of-state curves. In
// ./thermal-properties/* (distinct from T8's ./thermal-processes/*).
const THERMAL_PROPERTIES: Subconcept[] = [
  ...TP01, ...TP02, ...TP03, ...TPREV1,
  ...TP04, ...TP05, ...TP06, ...TPREV2,
  ...TPQUIZ,
];

// General Wave Properties (KB Ch11), also a calculation chapter, closing on
// reading wave graphs. Content lives in ./waves/*.
const WAVES: Subconcept[] = [
  ...W01, ...W02, ...W03, ...WREV1,
  ...W04, ...W05, ...W06, ...WREV2,
  ...WQUIZ,
];


// Electromagnetic Waves (KB Ch13): 5 micro-lessons, a revision checkpoint after 11.3 and at the
// end, then the topical quiz. Content lives in ./em-spectrum/*.
const EM_SPECTRUM: Subconcept[] = [
  ...S11_1, ...S11_2, ...S11_3, ...S11_R1,
  ...S11_4, ...S11_5, ...S11_R2,
  ...S11_Q,
];

// Light (KB Ch14): 6 micro-lessons, a revision checkpoint after 12.3 and at the
// end, then the topical quiz. Content lives in ./light/*.
const LIGHT: Subconcept[] = [
  ...S12_1, ...S12_2, ...S12_3, ...S12_R1,
  ...S12_4, ...S12_5, ...S12_6, ...S12_R2,
  ...S12_Q,
];

// Static Electricity (KB Ch15): 6 micro-lessons, a revision checkpoint after 13.3 and at the
// end, then the topical quiz. Content lives in ./static/*.
const STATIC: Subconcept[] = [
  ...S13_1, ...S13_2, ...S13_3, ...S13_R1,
  ...S13_4, ...S13_5, ...S13_6, ...S13_R2,
  ...S13_Q,
];

// Current of Electricity (KB Ch16): 6 micro-lessons, a revision checkpoint after 14.3 and at the
// end, then the topical quiz. Content lives in ./current/*.
const CURRENT: Subconcept[] = [
  ...S14_1, ...S14_2, ...S14_3, ...S14_R1,
  ...S14_4, ...S14_5, ...S14_6, ...S14_R2,
  ...S14_Q,
];

// D.C. Circuits (KB Ch17): 6 micro-lessons, a revision checkpoint after 15.3 and at the
// end, then the topical quiz. Content lives in ./dc-circuits/*.
const DC_CIRCUITS: Subconcept[] = [
  ...S15_1, ...S15_2, ...S15_3, ...S15_R1,
  ...S15_4, ...S15_5, ...S15_6, ...S15_R2,
  ...S15_Q,
];

// Practical Electricity (KB Ch18): 5 micro-lessons, a revision checkpoint after 16.2 and at the
// end, then the topical quiz. Content lives in ./practical-electricity/*.
const PRACTICAL_ELECTRICITY: Subconcept[] = [
  ...S16_1, ...S16_2, ...S16_R1,
  ...S16_3, ...S16_4, ...S16_5, ...S16_R2,
  ...S16_Q,
];

// Magnetism (KB Ch19): 6 micro-lessons, a revision checkpoint after 17.3 and at the
// end, then the topical quiz. Content lives in ./magnetism/*.
const MAGNETISM: Subconcept[] = [
  ...S17_1, ...S17_2, ...S17_3, ...S17_R1,
  ...S17_4, ...S17_5, ...S17_6, ...S17_R2,
  ...S17_Q,
];

// Electromagnetism (KB Ch20): 6 micro-lessons, a revision checkpoint after 18.3 and at the
// end, then the topical quiz. Content lives in ./electromagnetism/*.
const ELECTROMAGNETISM: Subconcept[] = [
  ...S18_1, ...S18_2, ...S18_3, ...S18_R1,
  ...S18_4, ...S18_5, ...S18_6, ...S18_R2,
  ...S18_Q,
];

// Electromagnetic Induction (KB Ch21): 5 micro-lessons, a revision checkpoint after 19.3 and at the
// end, then the topical quiz. Content lives in ./em-induction/*.
const EM_INDUCTION: Subconcept[] = [
  ...S19_1, ...S19_2, ...S19_3, ...S19_R1,
  ...S19_4, ...S19_5, ...S19_R2,
  ...S19_Q,
];

// Radioactivity (KB Ch22): 6 micro-lessons, a revision checkpoint after 20.3 and at the
// end, then the topical quiz. Content lives in ./radioactivity/*.
const RADIOACTIVITY: Subconcept[] = [
  ...S20_1, ...S20_2, ...S20_3, ...S20_R1,
  ...S20_4, ...S20_5, ...S20_6, ...S20_R2,
  ...S20_Q,
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
  // Pressure also answers to the other level's "force and pressure" keys.
  "t5-pressure": PRESSURE,
  "t3-force-and-pressure": PRESSURE,
  "force-and-pressure": PRESSURE,
  "t6-energy-stores-and-transfers": ENERGY,
  "t6-energy": ENERGY,
  energy: ENERGY,
  "t7-kinetic-particle-model-of-matter": KINETIC_MODEL,
  "t7-kinetic-particle-model": KINETIC_MODEL,
  "kinetic-particle-model-of-matter": KINETIC_MODEL,
  "t8-thermal-processes": THERMAL_PROCESSES,
  "thermal-processes": THERMAL_PROCESSES,
  "t9-thermal-properties-of-matter": THERMAL_PROPERTIES,
  // Waves: the pure key, the other level's combined waves-and-sound key, and N-Level.
  "t10-general-wave-properties": WAVES,
  "t9-general-wave-properties-and-sound": WAVES,
  "general-properties-of-waves": WAVES,
  "t11-electromagnetic-spectrum": EM_SPECTRUM,
  "t10-electromagnetic-spectrum": EM_SPECTRUM,
  "electromagnetic-spectrum": EM_SPECTRUM,
  "t12-light": LIGHT,
  "t11-light": LIGHT,
  "t13-static-electricity": STATIC,
  "t14-current-of-electricity": CURRENT,
  "t12-electric-charge-and-current": CURRENT,
  "electric-charge-and-current-of-electricity": CURRENT,
  "t15-d-c-circuits": DC_CIRCUITS,
  "t13-d-c-circuits": DC_CIRCUITS,
  "d-c-circuits": DC_CIRCUITS,
  "t16-practical-electricity": PRACTICAL_ELECTRICITY,
  "t14-practical-electricity": PRACTICAL_ELECTRICITY,
  "practical-electricity": PRACTICAL_ELECTRICITY,
  "t17-magnetism": MAGNETISM,
  "t18-electromagnetism": ELECTROMAGNETISM,
  "t19-electromagnetic-induction": EM_INDUCTION,
  "t20-radioactivity": RADIOACTIVITY,
  "t16-radioactivity": RADIOACTIVITY,
  "radioactivity": RADIOACTIVITY,
  // One syllabus teaches magnetism and electromagnetism as a single topic,
  // so that key gets both trees in order.
  "t15-magnetism-and-electromagnetism": [...MAGNETISM, ...ELECTROMAGNETISM],
};

export function subconceptsFor(topicKey: string): Subconcept[] | undefined {
  return SUBCONCEPTS[topicKey];
}
