import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { masterApiGate } from "@/lib/server/entitlements";

export const runtime = "nodejs";

// Beta feedback from inside StudyLah Legends. Read in /admin/feedback.

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }
  const gate = await masterApiGate(customerId);
  if (gate) return gate;

  let body: { sentiment?: unknown; message?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }

  const message = String(body.message ?? "")
    .trim()
    .slice(0, 2000);
  const sentiment = ["love", "okay", "rough"].includes(String(body.sentiment))
    ? String(body.sentiment)
    : null;
  if (!message && !sentiment) {
    return NextResponse.json({ error: "Say a little something." }, { status: 400 });
  }

  await prisma.gameFeedback.create({
    data: { customerId, sentiment, message: message || "(sentiment only)" },
  });
  return NextResponse.json({ ok: true });
}
