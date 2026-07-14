import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve images straight from /public instead of through the Next image
  // optimizer (/_next/image). The optimizer was returning 502 in production
  // (memory-heavy on the small Railway instance) — blanking the logo and
  // hanging the page load. Our images are tiny pixel-art PNGs that must NOT be
  // resampled anyway (optimization blurs pixel art), so raw serving is both a
  // fix and an improvement. Raw /public assets already return 200.
  images: { unoptimized: true },

  async headers() {
    return [
      {
        // Security headers on every response (Lighthouse "best practices" +
        // real hardening). No CSP here: the app relies on Next's inline
        // bootstrap scripts, so a strict policy needs per-request nonces, more
        // risk than reward for now. HSTS is safe, the site is HTTPS-only.
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
      {
        // The service worker must never be cached (a stale SW is unkillable)
        // and is pinned to same-origin scripts.
        source: "/sw.js",
        headers: [
          { key: "Content-Type", value: "application/javascript; charset=utf-8" },
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self'" },
        ],
      },
    ];
  },
};

export default nextConfig;
