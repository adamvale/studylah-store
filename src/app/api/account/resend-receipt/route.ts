import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { getCustomerId } from "@/lib/server/customer-session";
import { loadFullOrder, sendOrderConfirmationEmail } from "@/lib/server/orders";

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  const back = (flag: string) =>
    NextResponse.redirect(new URL(`/account/orders?${flag}`, serverConfig.siteUrl), {
      status: 303,
    });

  if (!customerId) {
    return NextResponse.redirect(new URL("/account/login", serverConfig.siteUrl), {
      status: 303,
    });
  }

  const form = await request.formData().catch(() => null);
  const orderId = Number(form?.get("orderId"));
  if (!Number.isInteger(orderId)) return back("error=order");

  // Ownership check: the order must belong to the signed-in customer.
  const order = await prisma.order.findFirst({
    where: { id: orderId, customerId },
    select: { id: true },
  });
  if (!order) return back("error=order");

  try {
    await sendOrderConfirmationEmail(await loadFullOrder(orderId));
  } catch (e) {
    console.error(`Resend receipt for order ${orderId} failed`, e);
    return back("error=send");
  }
  return back("sent=1");
}
