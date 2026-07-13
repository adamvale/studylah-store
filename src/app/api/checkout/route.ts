import { NextResponse } from "next/server";
import Stripe from "stripe";
import { quoteCheckout } from "@/lib/server/checkout";
import { serverConfig, stripeConfigured } from "@/lib/server/config";
import { createOrderFromCheckout } from "@/lib/server/orders";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: {
    items?: unknown;
    discountCode?: unknown;
    email?: unknown;
    parentConsent?: unknown;
  };
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

  const result = await quoteCheckout(body.items, body.discountCode, email);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
  const quote = result.quote;

  // MOCK MODE, no Stripe key configured. Creates a paid order directly so
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
      // Record the parent/guardian acknowledgement (minors-facing store).
      parentConsent: body.parentConsent === true ? "yes" : "no",
    },
  };

  // Preferred payment methods, most-inclusive first. Enable whichever of
  // these you want in the Stripe Dashboard (Settings -> Payment methods);
  // Stripe only presents the ones eligible for SGD and the customer. If the
  // account hasn't activated some (e.g. Alipay/WeChat Pay), session creation
  // for that set errors and we fall back to the next set, so checkout always
  // works with at least cards.
  const methodSets: Stripe.Checkout.SessionCreateParams.PaymentMethodType[][] = [
    ["paynow", "card", "alipay", "wechat_pay"],
    ["paynow", "card"],
    ["card"],
  ];

  let session: Stripe.Checkout.Session | null = null;
  let lastError: unknown = null;
  for (const methods of methodSets) {
    try {
      session = await stripe.checkout.sessions.create({
        ...params,
        payment_method_types: methods,
        // WeChat Pay requires the client to be declared; only send it when
        // WeChat Pay is in this set.
        ...(methods.includes("wechat_pay")
          ? { payment_method_options: { wechat_pay: { client: "web" as const } } }
          : {}),
      });
      break;
    } catch (e) {
      lastError = e;
    }
  }

  if (!session) {
    console.error("Stripe session creation failed", lastError);
    return NextResponse.json(
      { error: "Payment couldn't be started. Try again in a moment." },
      { status: 502 }
    );
  }
  if (!session.url) {
    return NextResponse.json(
      { error: "Stripe didn't return a checkout link. Try again." },
      { status: 502 }
    );
  }
  return NextResponse.json({ url: session.url, mock: false });
}
