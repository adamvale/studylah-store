import type { MetadataRoute } from "next";

// Crawl policy. AI answer engines (Google AI Overviews via Googlebot,
// ChatGPT Search, Perplexity, Claude) are deliberately WELCOME on public
// pages, citations in AI answers are a discovery channel for a store this
// size, not a threat. Private/transactional surfaces stay out.
const PRIVATE = [
  "/admin",
  "/account",
  "/api/",
  "/cart",
  "/checkout/",
  "/diagnostic/results/",
  "/downloads/",
  "/maintenance",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE },
      // Named so the policy is explicit even if a bot special-cases itself.
      { userAgent: "Googlebot", allow: "/", disallow: PRIVATE },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: PRIVATE },
      { userAgent: "PerplexityBot", allow: "/", disallow: PRIVATE },
      { userAgent: "ClaudeBot", allow: "/", disallow: PRIVATE },
    ],
    sitemap: "https://www.studylah.education/sitemap.xml",
  };
}
