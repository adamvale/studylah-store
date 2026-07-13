import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { watermarkPdf } from "@/lib/server/watermark";

function failureRedirect(
  reason: "not-found" | "expired" | "used-up" | "missing-file" | "refunded"
) {
  return NextResponse.redirect(
    `${serverConfig.siteUrl}/downloads/error?reason=${reason}`,
    { status: 303 }
  );
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const downloadToken = await prisma.downloadToken.findUnique({
    where: { token },
    include: {
      orderItem: {
        include: {
          order: true,
          productFile: true,
          product: { include: { subject: true } },
        },
      },
    },
  });

  if (!downloadToken) return failureRedirect("not-found");
  // A refunded order loses access even if a token's expiry was somehow extended.
  if (downloadToken.orderItem.order.status === "refunded") {
    return failureRedirect("refunded");
  }
  if (downloadToken.expiresAt < new Date()) return failureRedirect("expired");

  // Atomic use-count: the guarded update loses the race gracefully when two
  // downloads land at once on the last remaining use.
  const claimed = await prisma.downloadToken.updateMany({
    where: { token, uses: { lt: downloadToken.maxUses } },
    data: { uses: { increment: 1 } },
  });
  if (claimed.count === 0) return failureRedirect("used-up");

  const { orderItem } = downloadToken;
  const filePath = path.join(serverConfig.pdfStorageDir, orderItem.productFile.filePath);
  let bytes: Uint8Array;
  try {
    bytes = await fs.readFile(filePath);
  } catch {
    console.error(`Download ${token}: file missing at ${filePath}`);
    // Don't burn a use on our own failure.
    await prisma.downloadToken.update({
      where: { token },
      data: { uses: { decrement: 1 } },
    });
    return failureRedirect("missing-file");
  }

  const stamped = await watermarkPdf(bytes, {
    email: orderItem.order.email,
    orderRef: `No. ${orderItem.orderId}`,
  });

  // Activity log, best-effort, never block the download on it.
  try {
    await prisma.downloadEvent.create({
      data: { orderItemId: orderItem.id, via: "email" },
    });
  } catch (e) {
    console.error("Download event log failed", e);
  }

  // e.g. physics-pure-rehearsal-paper2-studylah.pdf
  const fileKey = orderItem.productFile.key;
  const suffix = fileKey === "main" ? "" : `-${fileKey}`;
  const filename = `${orderItem.product.subject.slug}-${orderItem.product.key}${suffix}-studylah.pdf`;
  return new NextResponse(Buffer.from(stamped), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
