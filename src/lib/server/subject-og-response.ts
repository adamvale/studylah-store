import { readFile } from "node:fs/promises";
import path from "node:path";
import { subjectOgCardFile } from "@/lib/subject-og";

// Serves a subject's designed social card as the raw image bytes, for the
// opengraph-image route in each subject segment. Reading from public/ (rather
// than linking the URL) lets the file convention override the site-wide
// code-generated card cleanly, with no duplicate og:image tag.
export async function subjectOgResponse(level: string, subject: string): Promise<Response> {
  const file = subjectOgCardFile(level, subject);
  if (!file) {
    // No designed card for this subject: fall back to the site-wide static one.
    const buf = await readFile(path.join(process.cwd(), "public", "og-card.png"));
    return new Response(new Uint8Array(buf), {
      headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=31536000, immutable" },
    });
  }
  const buf = await readFile(path.join(process.cwd(), "public", "og", file));
  return new Response(new Uint8Array(buf), {
    headers: { "Content-Type": "image/jpeg", "Cache-Control": "public, max-age=31536000, immutable" },
  });
}
