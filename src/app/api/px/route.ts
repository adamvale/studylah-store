import { NextResponse } from "next/server";

// Runtime source of the analytics/pixel ids. The Analytics component fetches
// this on mount instead of relying on NEXT_PUBLIC_* build-time inlining,
// which on Railway required the Dockerfile ARG plumbing AND an uncached
// rebuild to pick up a variable change (a stale Docker layer cache shipped
// old bundles even after correct config). Runtime env needs only a restart.
// Public, non-secret values by nature (they ship to every browser anyway).

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(
    {
      ga: process.env.NEXT_PUBLIC_GA_ID || process.env.GA_ID || null,
      meta:
        process.env.NEXT_PUBLIC_META_PIXEL_ID ||
        process.env.META_PIXEL_ID ||
        null,
      tiktok:
        process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID ||
        process.env.TIKTOK_PIXEL_ID ||
        null,
    },
    { headers: { "cache-control": "no-store" } }
  );
}
