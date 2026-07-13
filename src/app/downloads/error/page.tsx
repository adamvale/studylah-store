import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  robots: { index: false, follow: false }, title: "Download problem" };

const REASONS: Record<string, { title: string; body: string }> = {
  expired: {
    title: "This download link has expired",
    body: "Links last 7 days from purchase. Email us with your order number and we'll issue a fresh link, your purchase is never lost.",
  },
  "used-up": {
    title: "This file hit its download limit",
    body: "Each file allows 5 downloads. If you genuinely need another (new phone, lost file), email us with your order number and we'll reset it.",
  },
  "missing-file": {
    title: "We couldn't fetch your file",
    body: "That's on us, not you, the file didn't load from storage and your download count wasn't used. Try again in a minute, or email us and we'll sort it immediately.",
  },
  "not-found": {
    title: "We don't recognise this download link",
    body: "Check the link copied fully from your email. If it still fails, email us and we'll re-send your downloads page.",
  },
  refunded: {
    title: "This order was refunded",
    body: "These downloads were deactivated when the order was refunded. If you believe this is a mistake, email us with your order number and we'll look into it.",
  },
};

export default async function DownloadErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ reason?: string }>;
}) {
  const { reason } = await searchParams;
  const info = REASONS[reason ?? ""] ?? REASONS["not-found"];

  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-display text-3xl font-bold text-ink">{info.title}</h1>
      <p className="mt-3 text-body">{info.body}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="mailto:hello@studylah.education"
          className="rounded-lg bg-signal px-5 py-3 text-sm font-medium text-white hover:bg-signal-deep"
        >
          Email support
        </a>
        <Link
          href="/"
          className="rounded-lg border border-hairline bg-surface px-5 py-3 text-sm font-medium text-accent hover:border-hairline"
        >
          Back to StudyLah
        </Link>
      </div>
    </div>
  );
}
