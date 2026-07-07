import { NextResponse } from "next/server";
import { quoteCheckout } from "@/lib/server/checkout";

// Validates a discount code against the current cart and returns the adjusted
// total for display. The authoritative application happens at checkout.
export async function POST(request: Request) {
  let body: { items?: unknown; code?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const result = await quoteCheckout(body.items, body.code);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  const { quote } = result;
  return NextResponse.json({
    code: quote.discountCode,
    description: quote.discountDescription,
    discountCents: quote.discountCents,
    totalCents: quote.totalCents,
  });
}
