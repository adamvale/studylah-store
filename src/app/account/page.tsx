import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";

export const metadata: Metadata = { title: "Your account" };

type Item = {
  id: string;
  productId: string;
  subjectName: string;
  productName: string;
  levelName: string;
  tier: string;
  fileLabel: string;
};

function groupByProduct(items: Item[]) {
  const groups = new Map<string, { key: string; subjectName: string; productName: string; levelName: string; tier: string; items: Item[] }>();
  for (const item of items) {
    const existing = groups.get(item.productId);
    if (existing) existing.items.push(item);
    else
      groups.set(item.productId, {
        key: item.productId,
        subjectName: item.subjectName,
        productName: item.productName,
        levelName: item.levelName,
        tier: item.tier,
        items: [item],
      });
  }
  return [...groups.values()];
}

const sgd = (cents: number) => `S$${(cents / 100).toFixed(2)}`;
const fmtDate = (d: Date) =>
  d.toLocaleDateString("en-SG", { day: "numeric", month: "short", year: "numeric" });

export default async function AccountPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string; error?: string }>;
}) {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");

  const customer = await prisma.customer.findUnique({
    where: { id: customerId },
    include: {
      orders: {
        orderBy: { createdAt: "desc" },
        include: { items: true },
      },
    },
  });
  if (!customer) redirect("/account/login");

  const { sent, error } = await searchParams;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold text-ink">Your account</h1>
          <p className="mt-1 text-sm text-body">
            Signed in as <span className="font-medium text-ink">{customer.email}</span>
          </p>
        </div>
        <form action="/api/account/logout" method="post">
          <button
            type="submit"
            className="rounded-lg border border-hairline px-4 py-2 text-sm font-medium text-body hover:text-ink"
          >
            Sign out
          </button>
        </form>
      </div>

      {sent && (
        <p className="mt-6 rounded-lg bg-guarantee/15 px-4 py-2.5 text-sm text-ink">
          Receipt email sent to {customer.email}.
        </p>
      )}
      {error && (
        <p className="mt-6 rounded-lg bg-coral/15 px-4 py-2.5 text-sm text-ink">
          Something went wrong — please try again, or email hello@studylah.education.
        </p>
      )}

      {customer.orders.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-hairline bg-surface p-8 text-center">
          <p className="font-display text-lg font-bold text-ink">No orders yet</p>
          <p className="mt-2 text-sm text-body">
            When you buy a forecast it&apos;ll appear here for re-download.
          </p>
          <Link
            href="/o-level"
            className="mt-4 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night"
          >
            Browse subjects
          </Link>
        </div>
      ) : (
        <div className="mt-8 space-y-5">
          {customer.orders.map((order) => {
            const refunded = order.status === "refunded";
            return (
              <section
                key={order.id}
                className="rounded-2xl border border-hairline bg-surface p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-display font-bold text-ink">
                    Order No. {order.id}
                    {refunded && (
                      <span className="ml-2 rounded-full bg-coral/20 px-2 py-0.5 text-xs font-medium text-coral">
                        Refunded
                      </span>
                    )}
                  </p>
                  <p className="font-mono text-sm text-body">
                    {fmtDate(order.createdAt)} · {sgd(order.totalCents)}
                  </p>
                </div>

                <div className="mt-4 space-y-4 border-t border-hairline pt-4">
                  {groupByProduct(order.items).map((group) => (
                    <div key={group.key}>
                      <p className="text-sm font-medium text-ink">
                        {group.subjectName} — {group.productName}
                      </p>
                      <p className="text-xs text-body">
                        {group.levelName} · {group.tier} tier
                      </p>
                      <div className="mt-2 space-y-2">
                        {group.items.map((item) => (
                          <div
                            key={item.id}
                            className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-hairline bg-night px-4 py-3"
                          >
                            <span className="text-sm text-body">{item.fileLabel}</span>
                            {refunded ? (
                              <span className="text-xs text-body">Unavailable</span>
                            ) : (
                              <a
                                href={`/api/account/download/${item.id}`}
                                className="rounded-lg bg-signal px-4 py-2 text-sm font-medium text-white hover:bg-signal-deep"
                              >
                                Download
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {!refunded && (
                  <form
                    action="/api/account/resend-receipt"
                    method="post"
                    className="mt-4 border-t border-hairline pt-3"
                  >
                    <input type="hidden" name="orderId" value={order.id} />
                    <button
                      type="submit"
                      className="text-xs font-medium text-accent underline"
                    >
                      Email me this receipt again
                    </button>
                  </form>
                )}
              </section>
            );
          })}
        </div>
      )}

      <p className="mt-10 text-xs text-body">
        Every PDF is watermarked to your email and order number. Trouble with a
        file?{" "}
        <a href="mailto:hello@studylah.education" className="font-medium text-accent underline">
          hello@studylah.education
        </a>
        .
      </p>
    </div>
  );
}
