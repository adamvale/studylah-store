import { NextResponse } from "next/server";
import {
  EVENT_TYPES,
  logDiagnosticEvent,
  type DiagnosticEventType,
} from "@/lib/server/diagnostic";

// Client-side funnel beacons (start, per-question, CTA clicks, shares).
// Whitelisted types only; everything lands in DiagnosticEvent for the admin
// dashboard, no third-party analytics, no cookies.
export async function POST(request: Request) {
  let body: { type?: unknown; attemptId?: unknown; meta?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ ok: true });
  }
  const type = body.type as DiagnosticEventType;
  if (!EVENT_TYPES.includes(type)) return NextResponse.json({ ok: true });
  await logDiagnosticEvent(
    type,
    typeof body.attemptId === "string" ? body.attemptId : null,
    typeof body.meta === "string" ? body.meta.slice(0, 120) : undefined
  );
  return NextResponse.json({ ok: true });
}
