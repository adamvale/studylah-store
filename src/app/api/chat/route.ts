import { NextResponse } from "next/server";
import { askGugu } from "@/lib/server/gugu-brain";

export const runtime = "nodejs";

// Best-effort in-memory rate limit. Railway runs a single replica (see
// docs/PROJECT-STATE.md), so a process-local map is enough to cap abuse and
// bound API spend. Over the limit → { fallback: true }, so the client quietly
// serves a scripted answer instead of erroring.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 8;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

interface Body {
  messages?: { role?: unknown; content?: unknown }[];
  page?: unknown;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ fallback: true }, { status: 429 });
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ fallback: true }, { status: 400 });
  }

  // Keep only the last few well-formed turns, cap each message length (bounds
  // cost + prompt-injection surface). The final turn must be the user's.
  const history = (Array.isArray(body.messages) ? body.messages : [])
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .slice(-6)
    .map((m) => ({
      role: m.role as "user" | "assistant",
      content: (m.content as string).slice(0, 500),
    }));

  if (history.length === 0 || history[history.length - 1].role !== "user") {
    return NextResponse.json({ fallback: true }, { status: 400 });
  }

  const page =
    typeof body.page === "string" ? body.page.slice(0, 120) : undefined;

  const result = await askGugu(history, page);
  return NextResponse.json(result);
}
