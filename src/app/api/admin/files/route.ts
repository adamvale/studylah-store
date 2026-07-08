import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { isAdmin } from "@/lib/server/admin-auth";
import { serverConfig } from "@/lib/server/config";

/** Digest of what is actually on disk — proves an upload landed intact. */
async function digest(filePath: string) {
  try {
    const abs = path.join(serverConfig.pdfStorageDir, filePath);
    const [{ size }, bytes] = await Promise.all([stat(abs), readFile(abs)]);
    return { size, sha256: createHash("sha256").update(bytes).digest("hex") };
  } catch {
    return { size: null, sha256: null };
  }
}

/**
 * Lists every product file with its storage path, so bulk uploads can map a
 * local PDF to the right file by path rather than guessing from page order.
 * `?hash=1` also digests each file on disk, to verify an upload byte-for-byte.
 */
export async function GET(request: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }

  const wantHash = request.nextUrl.searchParams.get("hash") === "1";

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
    await Promise.all(
      files.map(async (f) => ({
        id: f.id,
        filePath: f.filePath,
        label: f.label,
        fileKey: f.key,
        productKey: f.product.key,
        level: f.product.subject.level,
        subjectSlug: f.product.subject.slug,
        ...(wantHash ? await digest(f.filePath) : {}),
      }))
    )
  );
}
