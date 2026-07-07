import { NextResponse } from "next/server";
import Stripe from "stripe";
import { quoteCheckout } from "@/lib/server/checkout";
import { serverConfig, stripeConfigured } from "@/lib/server/config";
import { createOrderFromCheckout } from "@/lib/server/orders";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { items?: unknown; discountCode?: unknown; email?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Enter the email address your PDFs should go to." },
      { status: 400 }
    );
  }

  const result = await quoteCheckout(body.items, body.discountCode);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
  const quote = result.quote;

  // MOCK MODE — no Stripe key configured. Creates a paid order directly so
  // the full delivery flow is testable. Clearly marked in the UI.
  if (!stripeConfigured()) {
    const { order } = await createOrderFromCheckout({
      stripeSessionId: `mock_${crypto.randomUUID()}`,
      email,
      quote,
    });
    return NextResponse.json({
      url: `/checkout/success?order=${order.accessToken}`,
      mock: true,
    });
  }

  const stripe = new Stripe(serverConfig.stripeSecretKey);
  const params: Stripe.Checkout.SessionCreateParams = {
    mode: "payment",
    line_items: quote.lines.map((line) => ({
      quantity: 1,
      price_data: {
        currency: "sgd",
        unit_amount: line.cents,
        product_data: { name: line.label },
      },
    })),
    customer_email: email,
    success_url: `${serverConfig.siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${serverConfig.siteUrl}/checkout/cancelled`,
    metadata: {
      // Compact snapshot so the webhook can re-quote server-side.
      items: JSON.stringify(
        quote.items.map((i) => ({ l: i.level, s: i.subjectSlug, t: i.tier }))
      ),
      discountCode: quote.discountCode ?? "",
    },
  };

  try {
    // PayNow requires activation on the Stripe account; fall back to cards
    // only if the account rejects it.
    let session: Stripe.Checkout.Session;
    try {
      session = await stripe.checkout.sessions.create({
        ...params,
        payment_method_types: ["paynow", "card"],
      });
    } catch {
      session = await stripe.checkout.sessions.create({
        ...params,
        payment_method_types: ["card"],
      });
    }
    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe didn't return a checkout link. Try again." },
        { status: 502 }
      );
    }
    return NextResponse.json({ url: session.url, mock: false });
  } catch (e) {
    console.error("Stripe session creation failed", e);
    return NextResponse.json(
      { error: "Payment couldn't be started. Try again in a moment." },
      { status: 502 }
    );
  }
}
