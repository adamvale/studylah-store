import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";

// Register (POST) / remove (DELETE) a native app's FCM device token, the
// Capacitor twin of the web-push subscription route.

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }
  let body: { token?: unknown; platform?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const token = typeof body.token === "string" ? body.token : "";
  const platform = body.platform === "ios" ? "ios" : body.platform === "android" ? "android" : "";
  if (!token || token.length > 400 || !platform) {
    return NextResponse.json({ error: "Invalid token." }, { status: 400 });
  }
  // Upsert on token: reinstalls refresh, device account-switches move over.
  await prisma.nativePushToken.upsert({
    where: { token },
    create: { customerId, token, platform },
    update: { customerId, platform },
  });
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }
  let body: { token?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const token = typeof body.token === "string" ? body.token : "";
  if (token) {
    await prisma.nativePushToken.deleteMany({ where: { token, customerId } });
  }
  return NextResponse.json({ ok: true });
}
