import { NextResponse } from "next/server";
import { getCustomerId } from "@/lib/server/customer-session";
import { masterApiGate } from "@/lib/server/entitlements";
import { fastTrackProgress, recordFastTrackDrill } from "@/lib/server/fasttrack";

// FastTrack progress: GET the per-family play states, POST a graded drill
// result. Ultra-gated (a StudyLand surface). The drill score is computed
// from the AI marker's server-graded "Score: X/Y", so the client reports a
// bounded pct only; the worst a dishonest client gets is a few once-per-day XP.
export async function GET() {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  const families = await fastTrackProgress(customerId);
  return NextResponse.json({ families });
}

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) return NextResponse.json({ error: "Not signed in." }, { status: 401 });

  let body: { playId?: unknown; pct?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }
  const playId = typeof body.playId === "string" ? body.playId : "";
  const pct = Math.max(0, Math.min(1, Number(body.pct)));
  if (!playId || !Number.isFinite(pct)) {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }
  const result = await recordFastTrackDrill(customerId, playId, pct);
  if (!result.ok) return NextResponse.json({ error: "Unknown play or not owned." }, { status: 400 });
  return NextResponse.json(result);
}
