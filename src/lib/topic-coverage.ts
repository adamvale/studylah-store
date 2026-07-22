import { PRACTICAL_SUBJECTS } from "@/lib/practical-lab";
import { SUBJECT_TOPICS, topicKey } from "@/lib/subject-topics";

// Topic coverage: which subject topics have an interactive lesson, so we can
// author the GAPS. A lesson counts toward a topic via its `topic` field (a
// topicKey), or, for lessons authored before tagging existed, via this map.
// New lessons should set `topic` inline instead of adding to this map.
//
// The keys here are O-Level pure syllabus topicKeys (see docs/SUBJECT-TOPICS.md),
// which is where the science lessons target.
export const LESSON_TOPIC: Record<string, string> = {
  // Chemistry
  "chem-qa-1": "c6-qualitative-analysis",
  "chem-titration-1": "c1-experimental-chemistry",
  "chem-gas-1": "c6-qualitative-analysis",
  "chem-mole-1": "c4-chemical-calculations",
  "chem-rate-1": "c10-rate-of-reactions",
  "chem-electro-1": "c7-redox-chemistry-and-electrochemistry",
  "chem-acidbase-1": "c5-acid-base-chemistry",
  "chem-bonding-1": "c3-chemical-bonding-and-structure",
  // Physics
  "phys-measure-1": "t1-physical-quantities-and-measurement",
  "phys-graph-1": "t1-physical-quantities-and-measurement",
  "phys-circuit-1": "t15-d-c-circuits",
  "phys-forces-1": "t3-dynamics",
  "phys-moments-1": "t4-turning-effect-of-forces",
  "phys-energy-1": "t6-energy-stores-and-transfers",
  "phys-waves-1": "t10-general-wave-properties",
  "phys-circuit-2": "t15-d-c-circuits",
  // Biology
  "bio-foodtest-1": "t3-biological-molecules-and-enzymes",
  "bio-cell-1": "t1-cell-structure-and-organisation",
  "bio-enzyme-1": "t3-biological-molecules-and-enzymes",
  "bio-transport-1": "t2-movement-of-substances",
  "bio-genetics-1": "t14-inheritance",
};

// A lesson's topicKey, whether set inline or via the map.
export function lessonTopic(lesson: { key: string; topic?: string }): string | undefined {
  return lesson.topic ?? LESSON_TOPIC[lesson.key];
}

// Every topicKey that has at least one interactive lesson.
export function coveredTopicKeys(): Set<string> {
  const set = new Set<string>();
  for (const subject of PRACTICAL_SUBJECTS) {
    for (const lesson of subject.lessons) {
      const t = lessonTopic(lesson);
      if (t) set.add(t);
    }
  }
  return set;
}

export interface TopicStatus {
  topic: string;
  key: string;
  covered: boolean;
}

// Per-topic coverage for one subject.
export function subjectCoverage(level: string, slug: string): TopicStatus[] {
  const covered = coveredTopicKeys();
  return (SUBJECT_TOPICS[`${level}/${slug}`] ?? []).map((topic) => {
    const key = topicKey(topic);
    return { topic, key, covered: covered.has(key) };
  });
}

// One-line count for a subject.
export function coverageCount(level: string, slug: string): { covered: number; total: number } {
  const rows = subjectCoverage(level, slug);
  return { covered: rows.filter((r) => r.covered).length, total: rows.length };
}
