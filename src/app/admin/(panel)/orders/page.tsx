import Link from "next/link";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";
import { ResendButton } from "@/components/admin/resend-button";

export const dynamic = "force-dynamic";

function money(cents: number): string {
  return `S$${(cents / 100).toFixed(2)}`;
}

export default async function AdminOrdersPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q ?? "").trim();

  const where: Prisma.OrderWhereInput = {};
  if (query) {
    const asId = Number.parseInt(query, 10);
    where.OR = [
      { email: { contains: query } },
      ...(Number.isInteger(asId) ? [{ id: asId }] : []),
    ];
  }

  const orders = await prisma.order.findMany({
    where,
    orderBy: { createdAt: "desc" },
    take: 100,
    include: { _count: { select: { items: true } } },
  });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-2xl font-bold text-ink">Orders</h1>
        <form method="get" className="flex gap-2">
          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Search email or order no."
            className="w-56 rounded-lg border border-trust/20 bg-white px-3 py-1.5 text-sm"
          />
          <button
            type="submit"
            className="rounded-lg border border-trust/25 px-3 py-1.5 text-sm font-medium text-trust hover:border-trust/50"
          >
            Search
          </button>
          {query && (
            <Link
              href="/admin/orders"
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-body hover:text-ink"
            >
              Clear
            </Link>
          )}
        </form>
      </div>

      {orders.length === 0 ? (
        <p className="mt-8 text-sm text-body">
          {query ? "No orders match that search." : "No orders yet."}
        </p>
      ) : (
        <div className="mt-5 overflow-x-auto rounded-2xl border border-trust/10 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-trust/10 text-left text-xs text-body">
                <th scope="col" className="px-4 py-3 font-medium">No.</th>
                <th scope="col" className="px-4 py-3 font-medium">Date</th>
                <th scope="col" className="px-4 py-3 font-medium">Email</th>
                <th scope="col" className="px-4 py-3 font-medium">Files</th>
                <th scope="col" className="px-4 py-3 font-medium">Total</th>
                <th scope="col" className="px-4 py-3 font-medium">Status</th>
                <th scope="col" className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-trust/5 last:border-0">
                  <td className="px-4 py-3 font-mono text-ink">{order.id}</td>
                  <td className="px-4 py-3 text-body">
                    {order.createdAt.toLocaleDateString("en-SG")}
                  </td>
                  <td className="px-4 py-3 text-body">
                    {order.email}
                    {order.stripeSessionId.startsWith("mock_") && (
                      <span className="ml-2 rounded-full bg-heat-3/25 px-2 py-0.5 text-xs text-ink">
                        test
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 font-mono text-body">{order._count.items}</td>
                  <td className="px-4 py-3 font-mono text-ink">
                    {money(order.totalCents)}
                    {order.discountCode && (
                      <span className="ml-1 text-xs text-guarantee">({order.discountCode})</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        order.status === "paid"
                          ? "bg-guarantee/10 text-guarantee"
                          : "bg-heat-5/10 text-heat-5"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/downloads/${order.accessToken}`}
                        className="rounded-md border border-trust/25 px-2.5 py-1 text-xs font-medium text-trust hover:border-trust/50"
                      >
                        Downloads
                      </Link>
                      <ResendButton orderId={order.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="mt-3 text-xs text-body">Showing up to 100 most recent orders.</p>
    </div>
  );
}
