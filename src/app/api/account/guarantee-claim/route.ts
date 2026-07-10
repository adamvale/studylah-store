import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { emailLayout, sendEmail } from "@/lib/server/email";
import { getCustomerId } from "@/lib/server/customer-session";

const SUPPORT_EMAIL = "hello@studylah.education";

// Structured money-back guarantee claim: stores the audit row and emails the
// owner. A human decides — nothing here approves or refunds automatically.
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
  const subjectName = String(form?.get("subject") ?? "").trim().slice(0, 80);
  const message = String(form?.get("message") ?? "").trim().slice(0, 2000);
  if (!Number.isInteger(orderId) || !subjectName || message.length < 10) {
    return back("error=claim");
  }

  // Ownership + the subject must actually be on the order.
  const order = await prisma.order.findFirst({
    where: { id: orderId, customerId },
    include: { items: { select: { subjectName: true } } },
  });
  if (!order || !order.items.some((i) => i.subjectName === subjectName)) {
    return back("error=claim");
  }

  // One open claim per order+subject — resubmitting doesn't duplicate.
  const existing = await prisma.guaranteeClaim.findFirst({
    where: { orderId, subjectName, status: "submitted" },
  });
  if (existing) return back("claim=1");

  await prisma.guaranteeClaim.create({
    data: { orderId, customerId, subjectName, message },
  });

  try {
    await sendEmail({
      to: SUPPORT_EMAIL,
      subject: `Guarantee claim — order No. ${orderId}, ${subjectName}`,
      html: emailLayout(`
        <h1 style="font-size:18px;margin:0 0 12px;color:#101f33;">Guarantee claim</h1>
        <p style="font-size:14px;color:#3d4e63;margin:0 0 8px;">
          <strong>Order:</strong> No. ${orderId} · <strong>Buyer:</strong> ${order.email}<br/>
          <strong>Subject:</strong> ${subjectName}
        </p>
        <p style="font-size:14px;color:#3d4e63;white-space:pre-wrap;margin:0;">${message
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")}</p>
      `),
      text: `Guarantee claim\nOrder No. ${orderId} (${order.email})\nSubject: ${subjectName}\n\n${message}`,
    });
  } catch (e) {
    console.error(`Guarantee claim email failed for order ${orderId}`, e);
  }

  return back("claim=1");
}
