import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/db";
import { quoteCheckout } from "@/lib/server/checkout";
import { serverConfig, stripeConfigured } from "@/lib/server/config";
import { createOrderFromCheckout } from "@/lib/server/orders";
import { voidReferralForOrder } from "@/lib/server/referral";
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

  if (event.type === "charge.refunded") {
    await handleRefund(stripe, event.data.object);
  }

  return NextResponse.json({ received: true });
}

/**
 * A refunded buyer must lose access to the PDFs they downloaded. Stripe's
 * refund event carries a payment_intent, not our checkout-session id, so the
 * order is found via the session behind that payment intent. Only a FULL
 * refund revokes: a partial refund (e.g. one subject of a bundle) leaves the
 * order intact. Idempotent, repeated deliveries reapply the same state.
 */
async function handleRefund(stripe: Stripe, charge: Stripe.Charge) {
  if (charge.amount_refunded < charge.amount) {
    // Partial refund, do not revoke the whole order.
    return;
  }

  const paymentIntent =
    typeof charge.payment_intent === "string"
      ? charge.payment_intent
      : charge.payment_intent?.id;
  if (!paymentIntent) {
    console.error(`Refund on charge ${charge.id}: no payment_intent; cannot map to order.`);
    return;
  }

  const sessions = await stripe.checkout.sessions.list({
    payment_intent: paymentIntent,
    limit: 1,
  });
  const session = sessions.data[0];
  if (!session) {
    console.error(`Refund on charge ${charge.id}: no checkout session for ${paymentIntent}.`);
    return;
  }

  const order = await prisma.order.findFirst({
    where: { stripeSessionId: session.id },
    include: { items: true },
  });
  if (!order) {
    console.error(`Refund on charge ${charge.id}: no order for session ${session.id}.`);
    return;
  }

  // Mark the order and expire every download token it issued. The download
  // route already refuses an expired token and (as of this change) a refunded
  // order, so both gates now close.
  await prisma.$transaction([
    prisma.order.update({
      where: { id: order.id },
      data: { status: "refunded" },
    }),
    prisma.downloadToken.updateMany({
      where: { orderItemId: { in: order.items.map((i) => i.id) } },
      data: { expiresAt: new Date(0) },
    }),
  ]);
  // A refunded order also stops owing its referrer a reward (unless already
  // paid out, clawing back sent cash is a human decision, not the app's).
  await voidReferralForOrder(order.id);
  console.warn(`Refund: order No. ${order.id} marked refunded, downloads revoked.`);
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
