import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";

export const metadata: Metadata = { title: "Your downloads" };

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
          <a href="mailto:hello@studylah.education" className="font-medium text-trust underline">
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

      <div className="mt-8 space-y-3">
        {order.items.map((item) => {
          const dt = item.downloadToken;
          const expired = !dt || dt.expiresAt < now;
          const usedUp = dt != null && dt.uses >= dt.maxUses;
          const usable = dt != null && !expired && !usedUp;
          return (
            <div
              key={item.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-trust/10 bg-white p-5"
            >
              <div>
                <p className="font-display font-bold text-ink">
                  {item.subjectName} — {item.productName}
                </p>
                <p className="mt-0.5 text-xs text-body">
                  {item.levelName} · {item.tier} tier
                  {dt && usable && (
                    <>
                      {" "}
                      · {dt.maxUses - dt.uses} of {dt.maxUses} downloads left ·
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
                    className="font-medium text-trust underline"
                  >
                    contact us
                  </a>
                </p>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-xs text-body">
        Sharing these files breaks the licence — every page carries your email
        and order number. Something wrong with a file? We&apos;ll replace or
        refund it: hello@studylah.education.
      </p>
    </div>
  );
}
