import type { MetadataRoute } from "next";
import { PUBLISHED_LEVELS, subjectsForLevel } from "@/lib/catalogue";
import { allPosts } from "@/lib/blog";

const BASE = "https://www.studylah.education";

// Every indexable page, derived from the catalogue so new subjects/levels
// appear here automatically when published.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const statics: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/subjects`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    // /free-heatmap is a 308 to /diagnostic, which is listed below. A sitemap
    // should only offer canonical URLs, so the redirect is not repeated here.
    { url: `${BASE}/exam-forecast`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/bundles`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/studyland`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/fasttrack`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/accuracy`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/diagnostic`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/legal/refunds`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/legal/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/legal/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/legal/referral-terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const posts: MetadataRoute.Sitemap = allPosts().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(`${p.date}T00:00:00+08:00`),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const subjects: MetadataRoute.Sitemap = PUBLISHED_LEVELS.flatMap((level) =>
    subjectsForLevel(level).map((s) => ({
      url: `${BASE}/${level}/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }))
  );

  // /o-level and /na-level 301 to /subjects, so they stay out of the map.
  return [...statics, ...posts, ...subjects];
}
