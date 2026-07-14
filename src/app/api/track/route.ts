import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// First-party visitor journey ingest. Public (anonymous), so it's defensive:
// caps batch size + field lengths, whitelists event types, stores no PII.
type InEvent = { type: string; path: string; label?: string };

const MAX_EVENTS = 50;
const clip = (v: unknown, n: number) =>
  typeof v === "string" ? v.slice(0, n) : null;

export async function POST(request: Request) {
  let body: {
    sessionId?: unknown;
    visitorId?: unknown;
    init?: Record<string, unknown> | null;
    events?: unknown;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: true });
  }

  const sessionId = clip(body.sessionId, 64);
  const visitorId = clip(body.visitorId, 64) ?? "anon";
  if (!sessionId) return NextResponse.json({ ok: true });

  const rawEvents = Array.isArray(body.events) ? body.events.slice(0, MAX_EVENTS) : [];
  const events: InEvent[] = [];
  for (const e of rawEvents) {
    if (typeof e !== "object" || e === null) continue;
    const ev = e as Record<string, unknown>;
    const type = ev.type === "click" ? "click" : ev.type === "pageview" ? "pageview" : null;
    const path = clip(ev.path, 300);
    if (!type || !path) continue;
    events.push({ type, path, label: clip(ev.label, 120) ?? undefined });
  }

  const pageviews = events.filter((e) => e.type === "pageview").length;
  const clicks = events.filter((e) => e.type === "click").length;
  const init = (body.init ?? null) as Record<string, unknown> | null;

  try {
    // Ensure the session row exists (create with init on first hit, otherwise
    // a minimal shell so events never orphan), then bump counters.
    await prisma.visitorSession.upsert({
      where: { id: sessionId },
      create: {
        id: sessionId,
        visitorId,
        landingPath: clip(init?.landingPath, 300) ?? events[0]?.path ?? "/",
        referrer: clip(init?.referrer, 200),
        utmSource: clip(init?.utmSource, 100),
        utmMedium: clip(init?.utmMedium, 100),
        utmCampaign: clip(init?.utmCampaign, 100),
        device: clip(init?.device, 20) ?? "desktop",
        isReturning: init?.isReturning === true,
        pageviews,
        clicks,
        lastSeenAt: new Date(),
      },
      update: {
        lastSeenAt: new Date(),
        pageviews: { increment: pageviews },
        clicks: { increment: clicks },
      },
    });

    if (events.length > 0) {
      await prisma.visitorEvent.createMany({
        data: events.map((e) => ({
          sessionId,
          type: e.type,
          path: e.path,
          label: e.label ?? null,
        })),
      });
    }
  } catch (err) {
    console.error("track ingest failed", err);
  }

  // Beacons ignore the body; keep it tiny.
  return new NextResponse(null, { status: 204 });
}
