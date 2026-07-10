import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { Banner, fmtDate, sgd } from "./ui";

type ItemRow = {
  id: string;
  productId: string;
  subjectName: string;
  productName: string;
  levelName: string;
  tier: string;
  fileLabel: string;
  product: { subject: { level: string; slug: string } };
  downloadEvents: { at: Date }[];
};

// One order groups by subject (each a dropdown for multi-subject orders), and
// within a subject by product (a subject's Master pack ships several products).
function groupBySubject(items: ItemRow[]) {
  const groups = new Map<
    string,
    { key: string; subjectName: string; levelName: string; items: ItemRow[] }
  >();
  for (const item of items) {
    const key = `${item.product.subject.level}/${item.product.subject.slug}`;
    const existing = groups.get(key);
    if (existing) existing.items.push(item);
    else groups.set(key, { key, subjectName: item.subjectName, levelName: item.levelName, items: [item] });
  }
  return [...groups.values()];
}

function groupByProduct(items: ItemRow[]) {
  const groups = new Map<
    string,
    { key: string; productName: string; tier: string; items: ItemRow[] }
  >();
  for (const item of items) {
    const existing = groups.get(item.productId);
    if (existing) existing.items.push(item);
    else
      groups.set(item.productId, {
        key: item.productId,
        productName: item.productName,
        tier: item.tier,
        items: [item],
      });
  }
  return [...groups.values()];
}

function FileRow({ item, refunded }: { item: ItemRow; refunded: boolean }) {
  const last = item.downloadEvents[0]?.at;
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-hairline bg-night px-4 py-3">
      <div>
        <p className="text-sm text-body">{item.fileLabel}</p>
        <p className="mt-0.5 text-xs text-body/80">
          {last ? `Last downloaded ${fmtDate(last)}` : "Not downloaded yet"}
        </p>
      </div>
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
  );
}

// A subject's products + file download rows — shown inline (single-subject
// order) or inside a dropdown (multi-subject order).
function SubjectFiles({ items, refunded }: { items: ItemRow[]; refunded: boolean }) {
  return (
    <div className="space-y-4">
      {groupByProduct(items).map((group) => (
        <div key={group.key}>
          <p className="text-sm font-medium text-ink">{group.productName}</p>
          <p className="text-xs text-body">{group.tier} tier</p>
          <div className="mt-2 space-y-2">
            {group.items.map((item) => (
              <FileRow key={item.id} item={item} refunded={refunded} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const MESSAGES = {
  "sent=1": { tone: "ok" as const, msg: "Receipt email sent." },
  "error=order": {
    tone: "bad" as const,
    msg: "Couldn't resend that receipt — please try again.",
  },
};

export default async function AccountOrdersPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");

  const orders = await prisma.order.findMany({
    where: { customerId },
    orderBy: { createdAt: "desc" },
    include: {
      items: {
        include: {
          product: { include: { subject: true } },
          downloadEvents: { orderBy: { at: "desc" }, take: 1 },
        },
      },
    },
  });

  const params = await searchParams;

  return (
    <div>
      <Banner params={params} messages={MESSAGES} />

      {orders.length === 0 ? (
        <div className="mt-4 rounded-2xl border border-hairline bg-surface p-8 text-center">
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
        <div className="space-y-5">
          {orders.map((order) => {
            const refunded = order.status === "refunded";
            const subjects = groupBySubject(order.items);
            const multi = subjects.length > 1;
            return (
              <section key={order.id} className="rounded-2xl border border-hairline bg-surface p-5">
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

                <div className="mt-4 space-y-3 border-t border-hairline pt-4">
                  {subjects.map((subj) =>
                    multi ? (
                      <details key={subj.key} className="group rounded-xl border border-hairline">
                        <summary className="flex cursor-pointer items-center justify-between gap-3 px-4 py-3">
                          <span>
                            <span className="font-medium text-ink">{subj.subjectName}</span>
                            <span className="ml-2 text-xs text-body">{subj.levelName}</span>
                          </span>
                          <span className="flex items-center gap-3 text-xs text-body">
                            {subj.items.length} file{subj.items.length === 1 ? "" : "s"}
                            <span
                              aria-hidden="true"
                              className="transition-transform group-open:rotate-180"
                            >
                              ▾
                            </span>
                          </span>
                        </summary>
                        <div className="border-t border-hairline px-4 py-4">
                          <SubjectFiles items={subj.items} refunded={refunded} />
                        </div>
                      </details>
                    ) : (
                      <div key={subj.key}>
                        <p className="mb-3 text-sm font-medium text-ink">
                          {subj.subjectName}{" "}
                          <span className="text-xs font-normal text-body">{subj.levelName}</span>
                        </p>
                        <SubjectFiles items={subj.items} refunded={refunded} />
                      </div>
                    )
                  )}
                </div>

                {!refunded && (
                  <form
                    action="/api/account/resend-receipt"
                    method="post"
                    className="mt-4 border-t border-hairline pt-3"
                  >
                    <input type="hidden" name="orderId" value={order.id} />
                    <button type="submit" className="text-xs font-medium text-accent underline">
                      Email me this receipt again
                    </button>
                  </form>
                )}
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
