// Order creation and delivery. Idempotent on the Stripe session id: the
// webhook can fire multiple times, and mock checkout reuses the same path.
import { randomBytes } from "crypto";
import { Prisma } from "@prisma/client";
import { prisma } from "../db";
import {
  getSubject,
  LEVELS,
  TIER_NAMES,
  productFilesFor,
  productNameFor,
  tierProducts,
} from "../catalogue";
import type { CheckoutQuote } from "./checkout";
import { serverConfig } from "./config";
import { emailLayout, sendEmail } from "./email";
import { clearAbandonedCart } from "./abandoned-cart";
import { processReferralReward } from "./referral";

export function newToken(): string {
  return randomBytes(24).toString("hex");
}

export type OrderWithItems = Prisma.OrderGetPayload<{
  include: {
    items: { include: { downloadToken: true; product: true; productFile: true } };
  };
}>;

export async function loadFullOrder(id: number): Promise<OrderWithItems> {
  const order = await prisma.order.findUnique({
    where: { id },
    include: {
      items: { include: { downloadToken: true, product: true, productFile: true } },
    },
  });
  if (!order) throw new Error(`Order ${id} disappeared mid-request.`);
  return order;
}

export interface CreateOrderResult {
  order: OrderWithItems;
  created: boolean;
}

export async function createOrderFromCheckout(options: {
  stripeSessionId: string;
  email: string;
  quote: CheckoutQuote;
}): Promise<CreateOrderResult> {
  const { stripeSessionId, email, quote } = options;

  // findFirst, deliberately not findUnique: Prisma 7.8's query compiler
  // panics when concurrent identical findUnique calls get dataloader-batched
  // (selection.rs unwrap on None). findFirst skips the batching path.
  const existing = await prisma.order.findFirst({
    where: { stripeSessionId },
    select: { id: true },
  });
  if (existing) {
    return { order: await loadFullOrder(existing.id), created: false };
  }

  // Resolve every PDF the order unlocks: each cart line expands to the products
  // its tier includes, and each product expands to its files (the Final
  // Rehearsal ships three). One order item, and one download token, per file.
  const fileEntries: {
    productId: string;
    productFileId: string;
    subjectName: string;
    levelName: string;
    productName: string;
    fileLabel: string;
    tier: string;
  }[] = [];
  for (const line of quote.lines) {
    const catalogueSubject = getSubject(line.item.level, line.item.subjectSlug);
    if (!catalogueSubject) {
      throw new Error(
        `Unknown subject: ${line.item.level}/${line.item.subjectSlug}.`
      );
    }
    const subject = await prisma.subject.findUnique({
      where: {
        level_slug: { level: line.item.level, slug: line.item.subjectSlug },
      },
      include: { products: { include: { files: true } } },
    });
    if (!subject) {
      throw new Error(
        `Subject missing from database: ${line.item.level}/${line.item.subjectSlug}. Run the seed script.`
      );
    }
    for (const key of tierProducts(line.item.tier, catalogueSubject)) {
      const product = subject.products.find((p) => p.key === key);
      if (!product) {
        throw new Error(
          `Product missing from database: ${subject.slug}/${key}. Run the seed script.`
        );
      }
      // Driven by the catalogue spec, not by whatever rows exist, so a legacy
      // file left behind by an older schema can never be delivered by mistake.
      for (const spec of productFilesFor(catalogueSubject, key)) {
        const file = product.files.find((f) => f.key === spec.key);
        if (!file) {
          throw new Error(
            `File missing from database: ${subject.slug}/${key}/${spec.key}. Run the seed script.`
          );
        }
        fileEntries.push({
          productId: product.id,
          productFileId: file.id,
          subjectName: subject.name,
          levelName: LEVELS[line.item.level].shortName,
          productName: productNameFor(catalogueSubject, key),
          fileLabel: spec.label,
          tier: TIER_NAMES[line.item.tier],
        });
      }
    }
  }

  const expiresAt = new Date(
    Date.now() + serverConfig.downloadExpiryDays * 24 * 60 * 60 * 1000
  );

  try {
    const order = await prisma.$transaction(async (tx) => {
      const customer = await tx.customer.upsert({
        where: { email },
        create: { email },
        update: {},
      });
      const created = await tx.order.create({
        data: {
          accessToken: newToken(),
          stripeSessionId,
          email,
          customerId: customer.id,
          subtotalCents: quote.subtotalCents,
          discountCents: quote.discountCents,
          discountCode: quote.discountCode,
          totalCents: quote.totalCents,
          pricingJson: JSON.stringify({
            items: quote.items,
            priced: quote.priced,
            earlyBird: quote.earlyBird,
            discountCode: quote.discountCode,
            discountCents: quote.discountCents,
          }),
        },
      });
      for (const entry of fileEntries) {
        await tx.orderItem.create({
          data: {
            orderId: created.id,
            productId: entry.productId,
            productFileId: entry.productFileId,
            subjectName: entry.subjectName,
            levelName: entry.levelName,
            productName: entry.productName,
            fileLabel: entry.fileLabel,
            tier: entry.tier,
            downloadToken: {
              create: {
                token: newToken(),
                expiresAt,
                maxUses: serverConfig.downloadMaxUses,
              },
            },
          },
        });
      }
      if (quote.discountCode) {
        // updateMany: a referral code has no DiscountCode row, a plain
        // update would throw and roll back the whole paid order.
        await tx.discountCode.updateMany({
          where: { code: quote.discountCode },
          data: { redemptions: { increment: 1 } },
        });
      }
      return created;
    });

    const full = await loadFullOrder(order.id);

    // Refer-a-friend bookkeeping, never throws, idempotent per order.
    await processReferralReward(full);

    // Best-effort: a failed email must never lose a paid order.
    try {
      await sendOrderConfirmationEmail(full);
    } catch (e) {
      console.error(`Order ${order.id}: confirmation email failed`, e);
    }

    // They bought: clear any abandoned-cart recovery for this email.
    await clearAbandonedCart(email);

    return { order: full, created: true };
  } catch (e) {
    // Unique violation on stripeSessionId: a concurrent webhook won the race.
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
      const winner = await prisma.order.findUnique({
        where: { stripeSessionId },
        select: { id: true },
      });
      if (winner) return { order: await loadFullOrder(winner.id), created: false };
    }
    throw e;
  }
}

export async function sendOrderConfirmationEmail(order: OrderWithItems) {
  const downloadUrl = `${serverConfig.siteUrl}/downloads/${order.accessToken}`;
  // One line per file, so a three-part Final Rehearsal reads as three downloads.
  const itemsHtml = order.items
    .map(
      (item) =>
        `<li style="margin:0 0 6px;font-size:13px;color:#3d4e63;">${item.subjectName}, ${item.fileLabel} <span style="color:#8894a3;">(${item.levelName}, ${item.tier} tier)</span></li>`
    )
    .join("");
  const total = `S$${(order.totalCents / 100).toFixed(2)}`;

  const html = emailLayout(`
    <h1 style="font-size:20px;margin:0 0 12px;color:#101f33;">Your StudyLah PDFs are ready</h1>
    <p style="font-size:14px;color:#3d4e63;line-height:1.6;margin:0 0 16px;">
      Thanks for your order (No. ${order.id}, ${total}). Your files are on your
      personal download page for ${serverConfig.downloadExpiryDays} days, up to
      ${serverConfig.downloadMaxUses} downloads each.
    </p>
    <p style="margin:0 0 20px;">
      <a href="${downloadUrl}" style="display:inline-block;background:#f4552b;color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;padding:12px 20px;border-radius:8px;">
        Open your downloads
      </a>
    </p>
    <ul style="margin:0 0 16px;padding-left:18px;">${itemsHtml}</ul>
    <p style="font-size:12px;color:#3d4e63;line-height:1.6;margin:0 0 12px;">
      Each PDF is watermarked to ${order.email}. Lost the link? Reply to this
      email and we'll re-send it. Money-back guarantee applies, see
      studylah.education/faq.
    </p>
    <p style="font-size:12px;color:#3d4e63;line-height:1.6;margin:0;">
      Know someone sitting the papers too? <strong>You both get S$15</strong>
      when they use your referral code, grab yours at
      <a href="${serverConfig.siteUrl}/account/referrals" style="color:#f4552b;">your account page</a>.
    </p>
  `);

  const text = [
    `Your StudyLah order No. ${order.id} (${total}) is ready.`,
    ``,
    `Download your PDFs: ${downloadUrl}`,
    `Links last ${serverConfig.downloadExpiryDays} days, ${serverConfig.downloadMaxUses} downloads per file.`,
    ``,
    ...order.items.map((i) => `- ${i.subjectName}, ${i.fileLabel} (${i.levelName})`),
  ].join("\n");

  return sendEmail({
    to: order.email,
    subject: `Your StudyLah downloads, order No. ${order.id}`,
    html,
    text,
  });
}
