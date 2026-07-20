import { promises as fs } from "fs";
import path from "path";
import JSZip from "jszip";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { getCustomerId } from "@/lib/server/customer-session";
import { watermarkPdf } from "@/lib/server/watermark";

// One click, whole order: every file watermarked and zipped. Session +
// ownership gated like the single-file route; a Ultra pack is ~6 PDFs so the
// on-the-fly work stays modest.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ orderId: string }> }
) {
  const customerId = await getCustomerId();
  if (!customerId) {
    return NextResponse.redirect(new URL("/account/login", serverConfig.siteUrl), {
      status: 303,
    });
  }

  const { orderId } = await params;
  const id = Number.parseInt(orderId, 10);
  const redirectError = (reason: string) =>
    NextResponse.redirect(
      `${serverConfig.siteUrl}/downloads/error?reason=${reason}`,
      { status: 303 }
    );
  if (!Number.isInteger(id)) return redirectError("not-found");

  const order = await prisma.order.findFirst({
    where: { id, customerId },
    include: {
      items: {
        include: { productFile: true, product: { include: { subject: true } } },
      },
    },
  });
  if (!order) return redirectError("not-found");
  if (order.status === "refunded") return redirectError("refunded");

  const zip = new JSZip();
  for (const item of order.items) {
    const filePath = path.join(serverConfig.pdfStorageDir, item.productFile.filePath);
    let bytes: Uint8Array;
    try {
      bytes = await fs.readFile(filePath);
    } catch {
      console.error(`Order zip ${id}: file missing at ${filePath}`);
      continue; // ship what exists rather than failing the whole order
    }
    const stamped = await watermarkPdf(bytes, {
      email: order.email,
      orderRef: `No. ${order.id}`,
    });
    const fileKey = item.productFile.key;
    const suffix = fileKey === "main" ? "" : `-${fileKey}`;
    zip.file(
      `${item.product.subject.slug}-${item.product.key}${suffix}-studylah.pdf`,
      stamped
    );
    // Best-effort activity log, same as single-file downloads.
    try {
      await prisma.downloadEvent.create({
        data: { orderItemId: item.id, via: "account" },
      });
    } catch {
      /* never block the download on bookkeeping */
    }
  }

  const archive = await zip.generateAsync({ type: "uint8array" });
  return new NextResponse(Buffer.from(archive), {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="studylah-order-${order.id}.zip"`,
      "Cache-Control": "no-store",
    },
  });
}
