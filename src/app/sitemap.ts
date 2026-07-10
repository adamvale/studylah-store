import type { MetadataRoute } from "next";
import { PUBLISHED_LEVELS, subjectsForLevel } from "@/lib/catalogue";

const BASE = "https://www.studylah.education";

// Every indexable page, derived from the catalogue so new subjects/levels
// appear here automatically when published.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const statics: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/exam-forecast`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/bundles`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/accuracy`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/free-heatmap`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/diagnostic`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/legal/refunds`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/legal/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/legal/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/legal/referral-terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const levels: MetadataRoute.Sitemap = PUBLISHED_LEVELS.map((level) => ({
    url: `${BASE}/${level}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const subjects: MetadataRoute.Sitemap = PUBLISHED_LEVELS.flatMap((level) =>
    subjectsForLevel(level).map((s) => ({
      url: `${BASE}/${level}/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }))
  );

  return [...statics, ...levels, ...subjects];
}
