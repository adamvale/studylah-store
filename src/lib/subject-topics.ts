import { FORECAST_TABLES } from "@/lib/forecast-tables";

// The topical system: the canonical list of topics for every subject, one flat
// source of truth that content (lessons, drills, the Gurus) and coverage
// tracking map to. Derived from each subject's real topic table so it stays in
// sync, but NEUTRAL: we take the topic names only, never the forecast tier, so
// nothing here implies a 2026 prediction. The tiers stay in forecast-tables for
// the study checklist and rescue plan, which are the right place for them.
//
// Keyed by "<level>/<slug>", e.g. "o-level/chemistry-pure".

// A stable, URL-safe key for a topic, for tagging content and tracking coverage.
export function topicKey(topic: string): string {
  return topic
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
}

export const SUBJECT_TOPICS: Record<string, string[]> = Object.fromEntries(
  Object.entries(FORECAST_TABLES).map(([key, rows]) => [key, rows.map((r) => r.topic)])
);

// Topics for one subject (empty if the subject has no table yet).
export function subjectTopics(level: string, slug: string): string[] {
  return SUBJECT_TOPICS[`${level}/${slug}`] ?? [];
}

// Every subject key that has a topic list.
export function subjectKeys(): string[] {
  return Object.keys(SUBJECT_TOPICS);
}

// Look up a topic by its key within a subject (for routing / tagging).
export function topicFromKey(level: string, slug: string, key: string): string | undefined {
  return subjectTopics(level, slug).find((t) => topicKey(t) === key);
}
