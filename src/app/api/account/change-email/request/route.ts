import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { emailLayout, sendEmail } from "@/lib/server/email";
import { getCustomerId, signChangeEmailToken } from "@/lib/server/customer-session";

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  const back = (flag: string) =>
    NextResponse.redirect(
      new URL(`/account/settings?${flag}`, serverConfig.siteUrl),
      { status: 303 }
    );

  if (!customerId) {
    return NextResponse.redirect(new URL("/account/login", serverConfig.siteUrl), {
      status: 303,
    });
  }

  const form = await request.formData().catch(() => null);
  const newEmail = String(form?.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (!newEmail || !newEmail.includes("@")) return back("error=email");

  const customer = await prisma.customer.findUnique({ where: { id: customerId } });
  if (!customer) {
    return NextResponse.redirect(new URL("/account/login", serverConfig.siteUrl), {
      status: 303,
    });
  }
  if (newEmail === customer.email.toLowerCase()) return back("error=same");

  // Reject if the address already belongs to someone else (case-insensitive).
  const taken = await prisma.$queryRaw<Array<{ id: string }>>`
    SELECT id FROM "Customer" WHERE email = ${newEmail} COLLATE NOCASE AND id <> ${customerId} LIMIT 1
  `;
  if (taken.length > 0) return back("error=taken");

  const url = `${serverConfig.siteUrl}/api/account/change-email/confirm?token=${encodeURIComponent(
    signChangeEmailToken(customerId, newEmail)
  )}`;

  // Verification link to the NEW address — clicking it applies the change.
  try {
    await sendEmail({
      to: newEmail,
      subject: "Confirm your new StudyLah email",
      html: emailLayout(`
        <h1 style="font-size:20px;margin:0 0 12px;color:#101f33;">Confirm your new email</h1>
        <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 16px;">
          Someone asked to use this address for a StudyLah account. Confirm to
          make it your new sign-in email. This link works for 30 minutes.
        </p>
        <p style="margin:0 0 20px;">
          <a href="${url}" style="display:inline-block;background:#f4552b;color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;padding:12px 20px;border-radius:8px;">
            Confirm this email
          </a>
        </p>
        <p style="font-size:12px;color:#3d4e63;line-height:1.6;margin:0;">
          Didn't request this? You can ignore this email — nothing changes.
        </p>
      `),
      text: `Confirm your new StudyLah email: ${url}\n\nThis link works for 30 minutes. If you didn't request it, ignore this email.`,
    });
  } catch (e) {
    console.error("Change-email verification send failed", e);
    return back("error=send");
  }

  // Heads-up to the OLD address so the real owner is aware of the request.
  try {
    await sendEmail({
      to: customer.email,
      subject: "A change to your StudyLah email was requested",
      html: emailLayout(`
        <h1 style="font-size:20px;margin:0 0 12px;color:#101f33;">Email change requested</h1>
        <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0;">
          Someone requested to move this account to <strong>${newEmail}</strong>.
          The change only takes effect once confirmed from that address. If this
          wasn't you, reply to this email right away and sign out of your account.
        </p>
      `),
      text: `A request was made to change your StudyLah email to ${newEmail}. It only applies once confirmed from that address. If this wasn't you, reply to this email.`,
    });
  } catch (e) {
    console.error("Change-email heads-up send failed", e);
  }

  return back("emailsent=1");
}
