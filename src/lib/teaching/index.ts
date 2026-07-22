import type { Misconception, TeachQuestion } from "./types";
import { KINEMATICS_MISCONCEPTIONS } from "./kinematics-misconceptions";
import { KINEMATICS_QUESTIONS } from "./kinematics-questions";
import { MEASUREMENT_MISCONCEPTIONS } from "./measurement-misconceptions";
import { MEASUREMENT_QUESTIONS } from "./measurement-questions";
import { DYNAMICS_MISCONCEPTIONS } from "./dynamics-misconceptions";
import { DYNAMICS_QUESTIONS } from "./dynamics-questions";
import { TURNING_EFFECT_MISCONCEPTIONS } from "./turning-effect-misconceptions";
import { TURNING_EFFECT_QUESTIONS } from "./turning-effect-questions";
import { PRESSURE_MISCONCEPTIONS } from "./pressure-misconceptions";
import { PRESSURE_QUESTIONS } from "./pressure-questions";
import { ENERGY_MISCONCEPTIONS } from "./energy-misconceptions";
import { ENERGY_QUESTIONS } from "./energy-questions";
import { KINETIC_MISCONCEPTIONS } from "./kinetic-model-misconceptions";
import { KINETIC_QUESTIONS } from "./kinetic-model-questions";
import { THERMAL_PROCESSES_MISCONCEPTIONS } from "./thermal-processes-misconceptions";
import { THERMAL_PROCESSES_QUESTIONS } from "./thermal-processes-questions";
import { THERMAL_PROPERTIES_MISCONCEPTIONS } from "./thermal-properties-misconceptions";
import { THERMAL_PROPERTIES_QUESTIONS } from "./thermal-properties-questions";
import { WAVES_MISCONCEPTIONS } from "./waves-misconceptions";
import { WAVES_QUESTIONS } from "./waves-questions";
import { EM_SPECTRUM_MISCONCEPTIONS } from "./em-spectrum-misconceptions";
import { EM_SPECTRUM_QUESTIONS } from "./em-spectrum-questions";
import { LIGHT_MISCONCEPTIONS } from "./light-misconceptions";
import { LIGHT_QUESTIONS } from "./light-questions";
import { STATIC_MISCONCEPTIONS } from "./static-misconceptions";
import { STATIC_QUESTIONS } from "./static-questions";
import { CURRENT_MISCONCEPTIONS } from "./current-misconceptions";
import { CURRENT_QUESTIONS } from "./current-questions";
import { DC_CIRCUITS_MISCONCEPTIONS } from "./dc-circuits-misconceptions";
import { DC_CIRCUITS_QUESTIONS } from "./dc-circuits-questions";
import { PRACTICAL_ELEC_MISCONCEPTIONS } from "./practical-electricity-misconceptions";
import { PRACTICAL_ELEC_QUESTIONS } from "./practical-electricity-questions";
import { MAGNETISM_MISCONCEPTIONS } from "./magnetism-misconceptions";
import { MAGNETISM_QUESTIONS } from "./magnetism-questions";
import { ELECTROMAGNETISM_MISCONCEPTIONS } from "./electromagnetism-misconceptions";
import { ELECTROMAGNETISM_QUESTIONS } from "./electromagnetism-questions";
import { EM_INDUCTION_MISCONCEPTIONS } from "./em-induction-misconceptions";
import { EM_INDUCTION_QUESTIONS } from "./em-induction-questions";
import { RADIOACTIVITY_MISCONCEPTIONS } from "./radioactivity-misconceptions";
import { RADIOACTIVITY_QUESTIONS } from "./radioactivity-questions";

// Which topics have a teaching pack, and the pack to open. A pack is a question
// bank whose every wrong option is tagged with the misconception it reveals,
// plus the misconception library keyed by id. When a student picks a wrong
// option, the app looks up the exact misconception and re-teaches it, the way a
// human tutor responds to your specific mistake. Grounded in the physics notes.

export type { Misconception, TeachQuestion };

export interface TeachingPack {
  topicKey: string;
  questions: TeachQuestion[];
  byId: Record<string, Misconception>;
}

// The physics packs, by short name. O-Level pure physics is the base; the
// Science and N-Level syllabuses reuse the same physics (see the registrations
// below), because the underlying concepts and mistakes are identical.
const BASE: Record<string, { m: Misconception[]; q: TeachQuestion[] }> = {
  measurement: { m: MEASUREMENT_MISCONCEPTIONS, q: MEASUREMENT_QUESTIONS },
  kinematics: { m: KINEMATICS_MISCONCEPTIONS, q: KINEMATICS_QUESTIONS },
  dynamics: { m: DYNAMICS_MISCONCEPTIONS, q: DYNAMICS_QUESTIONS },
  "turning-effect": { m: TURNING_EFFECT_MISCONCEPTIONS, q: TURNING_EFFECT_QUESTIONS },
  pressure: { m: PRESSURE_MISCONCEPTIONS, q: PRESSURE_QUESTIONS },
  energy: { m: ENERGY_MISCONCEPTIONS, q: ENERGY_QUESTIONS },
  "kinetic-model": { m: KINETIC_MISCONCEPTIONS, q: KINETIC_QUESTIONS },
  "thermal-processes": { m: THERMAL_PROCESSES_MISCONCEPTIONS, q: THERMAL_PROCESSES_QUESTIONS },
  "thermal-properties": { m: THERMAL_PROPERTIES_MISCONCEPTIONS, q: THERMAL_PROPERTIES_QUESTIONS },
  waves: { m: WAVES_MISCONCEPTIONS, q: WAVES_QUESTIONS },
  "em-spectrum": { m: EM_SPECTRUM_MISCONCEPTIONS, q: EM_SPECTRUM_QUESTIONS },
  light: { m: LIGHT_MISCONCEPTIONS, q: LIGHT_QUESTIONS },
  static: { m: STATIC_MISCONCEPTIONS, q: STATIC_QUESTIONS },
  current: { m: CURRENT_MISCONCEPTIONS, q: CURRENT_QUESTIONS },
  "dc-circuits": { m: DC_CIRCUITS_MISCONCEPTIONS, q: DC_CIRCUITS_QUESTIONS },
  "practical-electricity": { m: PRACTICAL_ELEC_MISCONCEPTIONS, q: PRACTICAL_ELEC_QUESTIONS },
  magnetism: { m: MAGNETISM_MISCONCEPTIONS, q: MAGNETISM_QUESTIONS },
  electromagnetism: { m: ELECTROMAGNETISM_MISCONCEPTIONS, q: ELECTROMAGNETISM_QUESTIONS },
  "em-induction": { m: EM_INDUCTION_MISCONCEPTIONS, q: EM_INDUCTION_QUESTIONS },
  radioactivity: { m: RADIOACTIVITY_MISCONCEPTIONS, q: RADIOACTIVITY_QUESTIONS },
};

// Build a pack from one or more base packs (merged, for combined syllabus topics).
function build(topicKey: string, ...names: string[]): TeachingPack {
  const m = names.flatMap((n) => BASE[n].m);
  const q = names.flatMap((n) => BASE[n].q);
  return { topicKey, questions: q, byId: Object.fromEntries(m.map((x) => [x.id, x])) };
}

const PACKS: Record<string, TeachingPack> = {};
function reg(topicKey: string, ...names: string[]) {
  PACKS[topicKey] = build(topicKey, ...names);
}

// ── O-Level Physics (Pure), 6091 ──
reg("t1-physical-quantities-and-measurement", "measurement");
reg("t2-kinematics", "kinematics");
reg("t3-dynamics", "dynamics");
reg("t4-turning-effect-of-forces", "turning-effect");
reg("t5-pressure", "pressure");
reg("t6-energy-stores-and-transfers", "energy");
reg("t7-kinetic-particle-model-of-matter", "kinetic-model");
reg("t8-thermal-processes", "thermal-processes");
reg("t9-thermal-properties-of-matter", "thermal-properties");
reg("t10-general-wave-properties", "waves");
reg("t11-electromagnetic-spectrum", "em-spectrum");
reg("t12-light", "light");
reg("t13-static-electricity", "static");
reg("t14-current-of-electricity", "current");
reg("t15-d-c-circuits", "dc-circuits");
reg("t16-practical-electricity", "practical-electricity");
reg("t17-magnetism", "magnetism");
reg("t18-electromagnetism", "electromagnetism");
reg("t19-electromagnetic-induction", "em-induction");
reg("t20-radioactivity", "radioactivity");

// ── O-Level Physics (Science), 5086/5087 — same physics, syllabus tags differ ──
// (t1, t2, t8 share the pure topicKey string and are already registered.)
reg("t3-force-and-pressure", "pressure");
reg("t4-dynamics", "dynamics");
reg("t5-turning-effects-of-forces", "turning-effect");
reg("t6-energy", "energy");
reg("t7-kinetic-particle-model", "kinetic-model");
reg("t9-general-wave-properties-and-sound", "waves");
reg("t10-electromagnetic-spectrum", "em-spectrum");
reg("t11-light", "light");
reg("t12-electric-charge-and-current", "current");
reg("t13-d-c-circuits", "dc-circuits");
reg("t14-practical-electricity", "practical-electricity");
reg("t15-magnetism-and-electromagnetism", "magnetism", "electromagnetism");
reg("t16-radioactivity", "radioactivity");

// ── N(A)-Level Physics, 5105/5106 — same physics, syllabus tags differ ──
reg("physical-quantities-units-and-measurement", "measurement");
reg("kinematics", "kinematics");
reg("dynamics", "dynamics");
reg("force-and-pressure", "pressure");
reg("energy", "energy");
reg("kinetic-particle-model-of-matter", "kinetic-model");
reg("thermal-processes", "thermal-processes");
reg("general-properties-of-waves", "waves");
reg("electromagnetic-spectrum", "em-spectrum");
reg("electric-charge-and-current-of-electricity", "current");
reg("d-c-circuits", "dc-circuits");
reg("practical-electricity", "practical-electricity");
reg("radioactivity", "radioactivity");

export function teachingPackFor(topicKey: string): TeachingPack | undefined {
  return PACKS[topicKey];
}

// The public path for a diagram referenced by a misconception/question `figure`.
// All physics chapter diagrams live under one folder, keyed by their fig name.
export function physicsFigureSrc(figure: string | null | undefined): string | null {
  if (!figure) return null;
  const name = figure.endsWith(".svg") ? figure : `${figure}.svg`;
  return `/physics/images/${name}`;
}
