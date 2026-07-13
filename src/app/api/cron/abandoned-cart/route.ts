import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { sendAbandonedCartEmail } from "@/lib/server/abandoned-cart";

// One-shot recovery sender for carts left ~1h+ ago. Idempotent (remindedAt
// guards re-sends), so any scheduler works. Fails closed without CRON_SECRET.
const REMIND_AFTER_MS = 60 * 60 * 1000; // 1 hour

export async function GET(request: Request) {
  const key = new URL(request.url).searchParams.get("key");
  if (!serverConfig.cronSecret || key !== serverConfig.cronSecret) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }

  const cutoff = new Date(Date.now() - REMIND_AFTER_MS);
  const due = await prisma.abandonedCart.findMany({
    where: { remindedAt: null, recoveredAt: null, updatedAt: { lte: cutoff } },
    take: 50,
    orderBy: { updatedAt: "asc" },
  });

  let sent = 0;
  for (const cart of due) {
    try {
      // Already bought? Mark recovered, don't email.
      const order = await prisma.order.findFirst({ where: { email: cart.email } });
      if (order) {
        await prisma.abandonedCart.update({
          where: { id: cart.id },
          data: { recoveredAt: new Date() },
        });
        continue;
      }
      if (await sendAbandonedCartEmail(cart)) {
        await prisma.abandonedCart.update({
          where: { id: cart.id },
          data: { remindedAt: new Date() },
        });
        sent += 1;
      }
    } catch (e) {
      console.error(`Abandoned-cart recovery failed for ${cart.id}`, e);
    }
  }
  return NextResponse.json({ due: due.length, sent });
}
