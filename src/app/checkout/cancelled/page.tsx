import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Payment not completed" };

export default function CheckoutCancelledPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-display text-3xl font-bold text-ink">
        Payment didn&apos;t go through
      </h1>
      <p className="mt-3 text-body">
        No charge was made and your cart is exactly as you left it. Card
        declined? PayNow timed out? Try again whenever you&apos;re ready.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/cart"
          className="rounded-lg bg-signal px-5 py-3 text-sm font-medium text-white hover:bg-signal-deep"
        >
          Back to your cart
        </Link>
        <Link
          href="/faq"
          className="rounded-lg border border-hairline bg-surface px-5 py-3 text-sm font-medium text-accent hover:border-hairline"
        >
          Need help?
        </Link>
      </div>
    </div>
  );
}
