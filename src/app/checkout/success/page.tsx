import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { ClearCartOnMount } from "@/components/clear-cart";

export const metadata: Metadata = { title: "Payment received" };

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string; session_id?: string }>;
}) {
  const { order: accessToken, session_id: sessionId } = await searchParams;

  const order = accessToken
    ? await prisma.order.findUnique({ where: { accessToken } })
    : sessionId
      ? await prisma.order.findUnique({ where: { stripeSessionId: sessionId } })
      : null;

  // Paid on Stripe but the webhook hasn't landed yet: reassure and retry.
  if (!order && sessionId) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <meta httpEquiv="refresh" content="4" />
        <h1 className="font-display text-3xl font-bold text-ink">
          Payment received — preparing your downloads
        </h1>
        <p className="mt-3 text-body">
          This usually takes a few seconds. The page refreshes itself, and your
          download link is also on its way to your inbox — you don&apos;t need
          to wait here.
        </p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-bold text-ink">
          Thanks — check your inbox
        </h1>
        <p className="mt-3 text-body">
          If you completed a payment, your download link is in your email. Lost
          it? Write to{" "}
          <a href="mailto:hello@studylah.education" className="font-medium text-accent underline">
            hello@studylah.education
          </a>
          .
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="rounded-lg bg-trust px-5 py-3 text-sm font-medium text-white hover:bg-trust-deep"
          >
            Back to StudyLah
          </Link>
        </div>
      </div>
    );
  }

  const isMock = order.stripeSessionId.startsWith("mock_");

  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <ClearCartOnMount />
      {isMock && (
        <p className="mb-6 rounded-lg border border-heat-3 bg-heat-3/20 px-4 py-2.5 text-sm font-medium text-ink">
          Test order — mock mode, no payment was taken.
        </p>
      )}
      <p
        aria-hidden="true"
        className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-guarantee/10 font-display text-2xl font-bold text-guarantee"
      >
        ✓
      </p>
      <h1 className="mt-5 font-display text-3xl font-bold text-ink">
        Order No. {order.id} confirmed
      </h1>
      <p className="mt-3 text-body">
        Your PDFs are ready, watermarked to {order.email}. The same link is in
        your inbox.
      </p>
      <div className="mt-8">
        <Link
          href={`/downloads/${order.accessToken}`}
          className="rounded-lg bg-signal px-6 py-3 text-sm font-medium text-white hover:bg-signal-deep"
        >
          Open your downloads
        </Link>
      </div>
      <p className="mt-6 text-xs text-body">
        Links last 7 days · Money-back guarantee applies ·{" "}
        <Link href="/faq" className="underline">
          How the guarantee works
        </Link>
      </p>

      <div className="mt-10 rounded-2xl border border-hairline bg-surface p-5 text-left">
        <p className="font-display text-lg font-bold text-ink">
          Know someone sitting the papers too?
        </p>
        <p className="mt-1 text-sm text-body">
          Refer a friend and{" "}
          <span className="font-medium text-ink">you both get S$15</span> —
          they save on their first order, we PayNow you the reward. Your
          personal code is waiting in your account.
        </p>
        <Link
          href="/account/referrals"
          className="mt-4 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
        >
          Get my referral code
        </Link>
      </div>
    </div>
  );
}
