import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { isAdmin } from "@/lib/server/admin-auth";
import { serverConfig } from "@/lib/server/config";

const MAX_BYTES = 25 * 1024 * 1024; // 25 MB

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }
  const { id } = await params;

  const productFile = await prisma.productFile.findUnique({ where: { id } });
  if (!productFile) {
    return NextResponse.json({ error: "File not found." }, { status: 404 });
  }

  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
  }
  if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
    return NextResponse.json({ error: "Only PDF files are accepted." }, { status: 400 });
  }
  if (file.size === 0 || file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: `File must be between 1 byte and ${MAX_BYTES / 1024 / 1024} MB.` },
      { status: 400 }
    );
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  // Basic PDF sniff: the magic header must be present.
  if (!bytes.subarray(0, 5).toString("latin1").startsWith("%PDF-")) {
    return NextResponse.json({ error: "That doesn't look like a valid PDF." }, { status: 400 });
  }

  // Overwrite the existing private file in place; filePath stays the same, so
  // outstanding download tokens keep resolving to the new content.
  const target = path.join(serverConfig.pdfStorageDir, productFile.filePath);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, bytes);

  // Owners see an "updated - re-download" badge for files replaced after
  // their purchase.
  await prisma.productFile.update({
    where: { id },
    data: { updatedAt: new Date() },
  });

  return NextResponse.json({ ok: true, bytes: bytes.length });
}
