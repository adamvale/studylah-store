import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { getCustomerId } from "@/lib/server/customer-session";
import { watermarkPdf } from "@/lib/server/watermark";

// Re-download for a signed-in owner. Authorised by session + order ownership,
// so there are no token expiry or use-count limits — a paying customer can
// always fetch a fresh, watermarked copy of what they bought.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ itemId: string }> }
) {
  const { itemId } = await params;
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.redirect(new URL("/account/login", serverConfig.siteUrl), {
      status: 303,
    });
  }

  const item = await prisma.orderItem.findUnique({
    where: { id: itemId },
    include: {
      order: true,
      productFile: true,
      product: { include: { subject: true } },
    },
  });

  const redirectError = (reason: string) =>
    NextResponse.redirect(
      `${serverConfig.siteUrl}/downloads/error?reason=${reason}`,
      { status: 303 }
    );

  if (!item || item.order.customerId !== customerId) return redirectError("not-found");
  if (item.order.status === "refunded") return redirectError("refunded");

  const filePath = path.join(serverConfig.pdfStorageDir, item.productFile.filePath);
  let bytes: Uint8Array;
  try {
    bytes = await fs.readFile(filePath);
  } catch {
    console.error(`Account download: file missing at ${filePath}`);
    return redirectError("missing-file");
  }

  const stamped = await watermarkPdf(bytes, {
    email: item.order.email,
    orderRef: `No. ${item.orderId}`,
  });

  const fileKey = item.productFile.key;
  const suffix = fileKey === "main" ? "" : `-${fileKey}`;
  const filename = `${item.product.subject.slug}-${item.product.key}${suffix}-studylah.pdf`;
  return new NextResponse(Buffer.from(stamped), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
