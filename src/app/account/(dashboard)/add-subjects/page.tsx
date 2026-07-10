import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { PUBLISHED_LEVELS, subjectsForLevel } from "@/lib/catalogue";
import { getCustomerId } from "@/lib/server/customer-session";
import { BundleBuilder } from "@/components/bundle-builder";

export const metadata: Metadata = { title: "Add subjects" };

export default async function AddSubjectsPage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");

  // What they already own (ignore refunded orders) — those are hidden from
  // the builder so it only offers genuinely new subjects.
  const orders = await prisma.order.findMany({
    where: { customerId, status: { not: "refunded" } },
    include: { items: { include: { product: { include: { subject: true } } } } },
  });
  const owned = new Set<string>();
  for (const order of orders) {
    for (const item of order.items) {
      owned.add(`${item.product.subject.level}::${item.product.subject.slug}`);
    }
  }
  const hasUnowned = PUBLISHED_LEVELS.some((level) =>
    subjectsForLevel(level).some((s) => !owned.has(`${level}::${s.slug}`))
  );

  return (
    <div>
      <h2 className="font-display text-lg font-bold text-ink">Complete your set</h2>
      <p className="mt-1 text-sm text-body">
        Add the subjects you don&apos;t own yet — pick 3 or more and bundle
        pricing applies automatically.
      </p>
      {hasUnowned ? (
        <BundleBuilder hide={[...owned]} stacked />
      ) : (
        <p className="mt-4 rounded-2xl border border-hairline bg-surface p-5 text-sm text-body">
          You already own every published subject — nice work.
        </p>
      )}
    </div>
  );
}
