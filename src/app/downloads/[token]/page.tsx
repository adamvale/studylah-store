import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";

export const metadata: Metadata = {
  robots: { index: false, follow: false }, title: "Your downloads" };

// A product can ship several PDFs (the Final Rehearsal ships three), so the
// per-file order items are grouped back under their product for display.
function groupByProduct<
  T extends {
    productId: string;
    subjectName: string;
    productName: string;
    levelName: string;
    tier: string;
  },
>(items: T[]) {
  const groups = new Map<
    string,
    {
      key: string;
      subjectName: string;
      productName: string;
      levelName: string;
      tier: string;
      items: T[];
    }
  >();
  for (const item of items) {
    const existing = groups.get(item.productId);
    if (existing) {
      existing.items.push(item);
    } else {
      groups.set(item.productId, {
        key: item.productId,
        subjectName: item.subjectName,
        productName: item.productName,
        levelName: item.levelName,
        tier: item.tier,
        items: [item],
      });
    }
  }
  return [...groups.values()];
}

function maskEmail(email: string): string {
  const [user, domain] = email.split("@");
  if (!domain) return email;
  const visible = user.slice(0, 2);
  return `${visible}${"*".repeat(Math.max(1, user.length - 2))}@${domain}`;
}

export default async function DownloadsPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const order = await prisma.order.findUnique({
    where: { accessToken: token },
    include: {
      items: {
        include: { downloadToken: true, product: { include: { subject: true } } },
      },
    },
  });

  if (!order) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-bold text-ink">
          We don&apos;t recognise this link
        </h1>
        <p className="mt-3 text-body">
          The download link may be incomplete — check it copied fully from your
          email. If it still doesn&apos;t work, reply to your order email or
          write to{" "}
          <a href="mailto:hello@studylah.education" className="font-medium text-accent underline">
            hello@studylah.education
          </a>{" "}
          and we&apos;ll re-send your downloads.
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
  const now = new Date();

  if (order.status === "refunded") {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <p className="font-mono text-xs font-medium text-body">
          Order No. {order.id} · {maskEmail(order.email)}
        </p>
        <h1 className="mt-1 font-display text-3xl font-bold text-ink">
          This order was refunded
        </h1>
        <p className="mt-3 text-body">
          These downloads were deactivated when the order was refunded. If you
          believe this is a mistake, email us with your order number and
          we&apos;ll look into it.
        </p>
        <div className="mt-8">
          <a
            href="mailto:hello@studylah.education"
            className="rounded-lg bg-trust px-5 py-3 text-sm font-medium text-white hover:bg-trust-deep"
          >
            Email support
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      {isMock && (
        <p className="mb-6 rounded-lg border border-heat-3 bg-heat-3/20 px-4 py-2.5 text-sm font-medium text-ink">
          Test order — created in mock mode, no payment was taken.
        </p>
      )}
      <p className="font-mono text-xs font-medium text-body">
        Order No. {order.id} · {maskEmail(order.email)}
      </p>
      <h1 className="mt-1 font-display text-4xl font-bold text-ink">
        Your downloads
      </h1>
      <p className="mt-2 max-w-xl text-body">
        Each file is watermarked to your email address. Links work for{" "}
        {serverConfig.downloadExpiryDays} days from purchase, up to{" "}
        {serverConfig.downloadMaxUses} downloads per file — save them somewhere
        safe.
      </p>

      <div className="mt-8 space-y-6">
        {groupByProduct(order.items).map((group) => (
          <section key={group.key}>
            <h2 className="font-display text-lg font-bold text-ink">
              {group.subjectName} — {group.productName}
            </h2>
            <p className="text-xs text-body">
              {group.levelName} · {group.tier} tier
              {group.items.length > 1 && ` · ${group.items.length} PDFs`}
            </p>
            <div className="mt-2 space-y-2">
        {group.items.map((item) => {
          const dt = item.downloadToken;
          const expired = !dt || dt.expiresAt < now;
          const usedUp = dt != null && dt.uses >= dt.maxUses;
          const usable = dt != null && !expired && !usedUp;
          return (
            <div
              key={item.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-hairline bg-surface p-5"
            >
              <div>
                <p className="font-display font-bold text-ink">
                  {item.fileLabel}
                </p>
                <p className="mt-0.5 text-xs text-body">
                  {dt && usable && (
                    <>
                      {dt.maxUses - dt.uses} of {dt.maxUses} downloads left ·
                      expires {dt.expiresAt.toLocaleDateString("en-SG")}
                    </>
                  )}
                </p>
              </div>
              {usable ? (
                <a
                  href={`/api/download/${dt.token}`}
                  className="rounded-lg bg-signal px-4 py-2.5 text-sm font-medium text-white hover:bg-signal-deep"
                >
                  Download PDF
                </a>
              ) : (
                <p className="text-sm text-body">
                  {expired ? "Link expired" : "Download limit reached"} —{" "}
                  <a
                    href="mailto:hello@studylah.education"
                    className="font-medium text-accent underline"
                  >
                    contact us
                  </a>
                </p>
              )}
            </div>
          );
        })}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-8 text-xs text-body">
        Sharing these files breaks the licence — every page carries your email
        and order number. Something wrong with a file? We&apos;ll replace or
        refund it: hello@studylah.education.
      </p>
    </div>
  );
}
