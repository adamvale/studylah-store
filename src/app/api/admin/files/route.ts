import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { isAdmin } from "@/lib/server/admin-auth";

/**
 * Lists every product file with its storage path, so bulk uploads can map a
 * local PDF to the right file by path rather than guessing from page order.
 */
export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }

  const files = await prisma.productFile.findMany({
    orderBy: { filePath: "asc" },
    select: {
      id: true,
      key: true,
      label: true,
      filePath: true,
      product: {
        select: { key: true, subject: { select: { level: true, slug: true } } },
      },
    },
  });

  return NextResponse.json(
    files.map((f) => ({
      id: f.id,
      filePath: f.filePath,
      label: f.label,
      fileKey: f.key,
      productKey: f.product.key,
      level: f.product.subject.level,
      subjectSlug: f.product.subject.slug,
    }))
  );
}
