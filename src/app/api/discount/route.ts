import { NextResponse } from "next/server";
import { quoteCheckout } from "@/lib/server/checkout";

// Validates a discount or referral code against the current cart and returns
// the adjusted total for display. The authoritative application happens at
// checkout. `email` is optional here, when the buyer has typed theirs, the
// strict referral guards (first order, no self-referral) run early so they
// see the rejection before paying rather than at the pay button.
export async function POST(request: Request) {
  let body: { items?: unknown; code?: unknown; email?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email =
    typeof body.email === "string" && body.email.includes("@")
      ? body.email.trim()
      : undefined;

  const result = await quoteCheckout(body.items, body.code, email);
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
