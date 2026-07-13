import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { pushConfigured } from "@/lib/server/config";

// Register (POST) or remove (DELETE) this device's push subscription. The
// subscription object comes from the browser's PushManager, we store exactly
// the three fields web-push needs and nothing else.

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }
  if (!pushConfigured()) {
    return NextResponse.json({ error: "Push is not configured." }, { status: 503 });
  }

  let body: { endpoint?: unknown; keys?: { p256dh?: unknown; auth?: unknown } };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const endpoint = typeof body.endpoint === "string" ? body.endpoint : "";
  const p256dh = typeof body.keys?.p256dh === "string" ? body.keys.p256dh : "";
  const auth = typeof body.keys?.auth === "string" ? body.keys.auth : "";
  if (!endpoint.startsWith("https://") || !p256dh || !auth || endpoint.length > 1000) {
    return NextResponse.json({ error: "Invalid subscription." }, { status: 400 });
  }

  // Upsert on endpoint: re-subscribing the same browser just refreshes keys,
  // and a device that switches accounts moves to the new customer.
  await prisma.pushSubscription.upsert({
    where: { endpoint },
    create: { customerId, endpoint, p256dh, auth },
    update: { customerId, p256dh, auth },
  });
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }
  let body: { endpoint?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const endpoint = typeof body.endpoint === "string" ? body.endpoint : "";
  if (endpoint) {
    await prisma.pushSubscription.deleteMany({ where: { endpoint, customerId } });
  }
  return NextResponse.json({ ok: true });
}
