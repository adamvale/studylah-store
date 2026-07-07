import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { isAdmin } from "@/lib/server/admin-auth";
import { sendOrderConfirmationEmail } from "@/lib/server/orders";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }
  const { id } = await params;
  const orderId = Number.parseInt(id, 10);
  if (!Number.isInteger(orderId)) {
    return NextResponse.json({ error: "Bad order id." }, { status: 400 });
  }

  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: { items: { include: { downloadToken: true, product: true } } },
  });
  if (!order) {
    return NextResponse.json({ error: "Order not found." }, { status: 404 });
  }

  const result = await sendOrderConfirmationEmail(order);
  if (!result.delivered) {
    return NextResponse.json(
      { error: `Email failed: ${result.detail ?? "unknown error"}` },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true, via: result.via });
}
