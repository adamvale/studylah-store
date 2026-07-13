import { prisma } from "../db";
import { getSubject, LEVELS, type Level } from "../catalogue";
import { serverConfig } from "./config";
import { emailLayout, sendEmail } from "./email";

interface SavedItem {
  level: string;
  subjectSlug: string;
  tier: string;
}

// One recovery email for a cart the shopper left behind. Compliant: no grade
// promises, plain nudge back to the cart plus the welcome discount.
export async function sendAbandonedCartEmail(cart: {
  email: string;
  itemsJson: string;
}): Promise<boolean> {
  let items: SavedItem[] = [];
  try {
    items = JSON.parse(cart.itemsJson) as SavedItem[];
  } catch {
    return false;
  }
  if (!Array.isArray(items) || items.length === 0) return false;

  const names = items.map((i) => {
    const s = getSubject(i.level as Level, i.subjectSlug);
    const lvl = LEVELS[i.level as Level]?.shortName ?? "";
    return s ? `${s.name}${lvl ? ` (${lvl})` : ""}` : i.subjectSlug;
  });
  const listHtml = names
    .map(
      (n) =>
        `<li style="margin:0 0 6px;font-size:14px;color:#3d4e63;">${n}</li>`
    )
    .join("");
  const cartUrl = `${serverConfig.siteUrl}/cart`;
  const n = items.length;

  const html = emailLayout(`
    <h1 style="font-size:20px;margin:0 0 12px;color:#101f33;">Your StudyLah bundle is still waiting</h1>
    <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 8px;">
      You left ${n} subject${n === 1 ? "" : "s"} in your cart:
    </p>
    <ul style="margin:0 0 14px;padding-left:18px;">${listHtml}</ul>
    <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 14px;">
      It's one tap from done, and the more subjects you add, the cheaper each one gets.
      New here? Use <strong style="color:#101f33;">STUDYLAH10</strong> for 10% off your first order.
    </p>
    <p style="margin:0 0 8px;">
      <a href="${cartUrl}" style="display:inline-block;background:#f4552b;color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;padding:12px 20px;border-radius:8px;">
        Finish my order
      </a>
    </p>
    <p style="font-size:11px;color:#8894a3;line-height:1.6;margin:16px 0 0;">
      Not ready yet? Ignore this email, we won't chase you again. Reply "unsubscribe" to opt out (PDPA).
    </p>
  `);

  const text = `You left ${n} subject${n === 1 ? "" : "s"} in your StudyLah cart: ${names.join(
    ", "
  )}. Finish your order: ${cartUrl}. New here? Use STUDYLAH10 for 10% off.`;

  const res = await sendEmail({
    to: cart.email,
    subject: "Your StudyLah bundle is still waiting",
    html,
    text,
  });
  return res.delivered;
}

// Called after a paid order: drop the shopper's abandoned cart so no reminder
// is sent. Best-effort; never throws into the order flow.
export async function clearAbandonedCart(email: string): Promise<void> {
  try {
    await prisma.abandonedCart.deleteMany({ where: { email } });
  } catch (e) {
    console.error("clearAbandonedCart failed", e);
  }
}
