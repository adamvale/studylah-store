import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { getCustomerId } from "@/lib/server/customer-session";

// Opt a parent in (or out) of the weekly digest. PDPA: we store the consent
// timestamp as the provable opt-in, and only when the box is ticked.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.redirect(new URL("/account/login", serverConfig.siteUrl));
  }

  const form = await request.formData();
  const remove = form.get("remove") === "1";
  if (remove) {
    await prisma.customer.update({
      where: { id: customerId },
      data: { parentEmail: null, parentDigestConsentAt: null },
    });
    return NextResponse.redirect(new URL("/account/settings?parent=removed", serverConfig.siteUrl), 303);
  }

  const parentEmail = String(form.get("parentEmail") ?? "").trim().toLowerCase();
  const consent = form.get("consent") === "on";
  if (!EMAIL_RE.test(parentEmail) || parentEmail.length > 200) {
    return NextResponse.redirect(new URL("/account/settings?parent=bademail", serverConfig.siteUrl), 303);
  }
  if (!consent) {
    return NextResponse.redirect(new URL("/account/settings?parent=consent", serverConfig.siteUrl), 303);
  }

  await prisma.customer.update({
    where: { id: customerId },
    data: { parentEmail, parentDigestConsentAt: new Date() },
  });
  return NextResponse.redirect(new URL("/account/settings?parent=on", serverConfig.siteUrl), 303);
}
