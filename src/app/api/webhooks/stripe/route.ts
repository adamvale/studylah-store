import { NextResponse } from "next/server";
import Stripe from "stripe";
import { quoteCheckout } from "@/lib/server/checkout";
import { serverConfig, stripeConfigured } from "@/lib/server/config";
import { createOrderFromCheckout } from "@/lib/server/orders";
import type { Level, Tier } from "@/lib/catalogue";

export async function POST(request: Request) {
  if (!stripeConfigured() || !serverConfig.stripeWebhookSecret) {
    return NextResponse.json(
      { error: "Stripe is not configured." },
      { status: 501 }
    );
  }

  const stripe = new Stripe(serverConfig.stripeSecretKey);
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature." }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    const rawBody = await request.text();
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      serverConfig.stripeWebhookSecret
    );
  } catch {
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    if (session.payment_status !== "paid") {
      // Async payment methods (e.g. PayNow pending) complete later via
      // checkout.session.async_payment_succeeded.
      return NextResponse.json({ received: true, deferred: true });
    }
    await fulfillSession(session);
  }

  if (event.type === "checkout.session.async_payment_succeeded") {
    await fulfillSession(event.data.object);
  }

  return NextResponse.json({ received: true });
}

async function fulfillSession(session: Stripe.Checkout.Session) {
  const email = session.customer_details?.email ?? session.customer_email;
  if (!email) {
    console.error(`Session ${session.id}: no customer email; cannot fulfil.`);
    return;
  }

  let rawItems: unknown;
  try {
    const compact = JSON.parse(session.metadata?.items ?? "[]") as {
      l: Level;
      s: string;
      t: Tier;
    }[];
    rawItems = compact.map((i) => ({
      level: i.l,
      subjectSlug: i.s,
      tier: i.t,
    }));
  } catch {
    console.error(`Session ${session.id}: unparseable items metadata.`);
    return;
  }

  const result = await quoteCheckout(rawItems, session.metadata?.discountCode);
  if (!result.ok) {
    console.error(`Session ${session.id}: re-quote failed: ${result.error}`);
    return;
  }

  if (
    session.amount_total != null &&
    session.amount_total !== result.quote.totalCents
  ) {
    // Prices changed between session creation and payment (e.g. early-bird
    // toggled). The customer paid the session amount; record it and flag.
    console.warn(
      `Session ${session.id}: paid ${session.amount_total}c but re-quote is ${result.quote.totalCents}c.`
    );
    result.quote.totalCents = session.amount_total;
  }

  // Idempotent: duplicate webhook deliveries return the existing order.
  await createOrderFromCheckout({
    stripeSessionId: session.id,
    email,
    quote: result.quote,
  });
}
