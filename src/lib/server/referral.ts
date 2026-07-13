// Refer-a-friend: a customer's referral code gives a friend S$15 off their
// FIRST order, and earns the referrer a S$15 cash reward once that order is
// paid. Rewards are a ledger only, disbursement is manual (admin payouts
// list); nothing here moves money.
import { randomInt } from "crypto";
import { Prisma, type Customer } from "@prisma/client";
import { prisma } from "../db";

// Friend's discount and referrer's reward, in cents. Flat S$15 each way.
export const REFERRAL_DISCOUNT_CENTS = 1500;
export const REFERRAL_REWARD_CENTS = 1500;

// Unambiguous alphabet: no 0/O or 1/I. Codes read like "SL-7KQ2MX".
const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function randomCode(): string {
  let out = "SL-";
  for (let i = 0; i < 6; i++) {
    out += CODE_ALPHABET[randomInt(CODE_ALPHABET.length)];
  }
  return out;
}

/** The customer's referral code, minting one on first use. Idempotent. */
export async function ensureReferralCode(customerId: string): Promise<string> {
  const existing = await prisma.customer.findUnique({
    where: { id: customerId },
    select: { referralCode: true },
  });
  if (existing?.referralCode) return existing.referralCode;

  for (let attempt = 0; attempt < 5; attempt++) {
    const code = randomCode();
    // A referral code must never shadow an admin discount code: checkout
    // checks DiscountCode first, so a clash would break attribution.
    const clash = await prisma.discountCode.findUnique({ where: { code } });
    if (clash) continue;
    try {
      await prisma.customer.update({
        where: { id: customerId },
        data: { referralCode: code },
      });
      return code;
    } catch (e) {
      // Unique collision with another customer's code, roll a new one.
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
        continue;
      }
      throw e;
    }
  }
  throw new Error("Could not mint a unique referral code.");
}

export async function findReferrerByCode(code: string): Promise<Customer | null> {
  return prisma.customer.findUnique({ where: { referralCode: code } });
}

/** Case-insensitive: does this email already have any order? */
async function hasOrders(email: string): Promise<boolean> {
  const rows = await prisma.$queryRaw<Array<{ n: number }>>`
    SELECT COUNT(*) AS n FROM "Order" o
    JOIN "Customer" c ON c.id = o."customerId"
    WHERE c.email = ${email} COLLATE NOCASE
  `;
  return Number(rows[0]?.n ?? 0) > 0;
}

export type ReferralCheck =
  | { ok: true; referrer: Customer }
  | { ok: false; error: string };

/**
 * Validate a referral code for use as a checkout discount. `email` is the
 * buyer's, when known: the strict first-order and self-referral guards only
 * run with an email, so the webhook's lenient re-quote (customer already
 * paid) can never fail an order on referral rules.
 */
export async function checkReferralCode(
  code: string,
  email?: string
): Promise<ReferralCheck> {
  const referrer = await findReferrerByCode(code);
  if (!referrer) return { ok: false, error: "That discount code isn't valid." };
  if (email) {
    if (email.trim().toLowerCase() === referrer.email.trim().toLowerCase()) {
      return { ok: false, error: "You can't use your own referral code." };
    }
    if (await hasOrders(email)) {
      return {
        ok: false,
        error: "Referral codes only apply to your first StudyLah order.",
      };
    }
  }
  return { ok: true, referrer };
}

/**
 * Record the referrer's reward for a freshly created paid order, if it used a
 * referral code and passes the guards. Never throws, a paid order must never
 * fail on referral bookkeeping. Idempotent via the unique refereeOrderId.
 */
export async function processReferralReward(order: {
  id: number;
  email: string;
  customerId: string;
  discountCode: string | null;
}): Promise<void> {
  try {
    if (!order.discountCode) return;
    const referrer = await findReferrerByCode(order.discountCode);
    if (!referrer) return; // a normal admin discount code
    // Self-referral pays nothing, whether by account or by email.
    if (referrer.id === order.customerId) return;
    if (referrer.email.trim().toLowerCase() === order.email.trim().toLowerCase()) return;
    // First order only: any OTHER order for this customer disqualifies.
    const prior = await prisma.order.count({
      where: { customerId: order.customerId, id: { not: order.id } },
    });
    if (prior > 0) return;

    await prisma.referral.create({
      data: {
        referrerId: referrer.id,
        refereeOrderId: order.id,
        refereeEmail: order.email,
        rewardCents: REFERRAL_REWARD_CENTS,
      },
    });
    console.log(
      `Referral: order No. ${order.id} earns ${referrer.referralCode} S$${(REFERRAL_REWARD_CENTS / 100).toFixed(2)}.`
    );
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
      return; // duplicate webhook delivery, reward already recorded
    }
    console.error(`Referral bookkeeping failed for order ${order.id}`, e);
  }
}

/**
 * A refunded referee order stops being payable. Rewards already marked paid
 * are left alone, the cash has left; clawing it back is a human decision.
 */
export async function voidReferralForOrder(orderId: number): Promise<void> {
  try {
    const res = await prisma.referral.updateMany({
      where: { refereeOrderId: orderId, status: "payable" },
      data: { status: "void" },
    });
    if (res.count > 0) {
      console.warn(`Referral: reward for refunded order No. ${orderId} voided.`);
    }
  } catch (e) {
    console.error(`Referral void failed for order ${orderId}`, e);
  }
}
