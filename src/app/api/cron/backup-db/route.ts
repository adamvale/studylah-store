import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import os from "os";
import { gzipSync } from "zlib";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { r2Configured, r2Put, r2List, r2Delete } from "@/lib/server/r2";
import { sgDay } from "@/lib/server/study";

// Nightly offsite backup of the production SQLite database to R2. The volume
// is otherwise the ONLY copy of orders/customers — this is the disaster
// hedge. `VACUUM INTO` produces a consistent snapshot even while the app is
// serving traffic. One object per (Singapore) day, ~30 days retained.
// Fails closed without CRON_SECRET; safe to run any number of times a day
// (same-day runs overwrite the same key).

const PREFIX = "backups/";
const RETAIN_DAYS = 30;

export async function GET(request: Request) {
  const key = new URL(request.url).searchParams.get("key");
  if (!serverConfig.cronSecret || key !== serverConfig.cronSecret) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }
  if (!r2Configured()) {
    return NextResponse.json({ error: "R2 is not configured." }, { status: 503 });
  }

  const tmp = path.join(os.tmpdir(), `studylah-backup-${Date.now()}.db`);
  try {
    // A consistent point-in-time copy of the live database.
    await prisma.$executeRawUnsafe(`VACUUM INTO '${tmp.replace(/'/g, "''")}'`);
    const raw = await fs.readFile(tmp);
    const gz = gzipSync(raw);

    const objectKey = `${PREFIX}prod-${sgDay()}.db.gz`;
    await r2Put(objectKey, gz, "application/gzip");

    // Retention: drop backups older than RETAIN_DAYS.
    const cutoff = Date.now() - RETAIN_DAYS * 24 * 60 * 60 * 1000;
    const existing = await r2List(PREFIX);
    let pruned = 0;
    for (const obj of existing) {
      if (obj.lastModified && obj.lastModified.getTime() < cutoff) {
        await r2Delete(obj.key);
        pruned++;
      }
    }

    // `existing` was listed after the upload, so it already includes today's.
    return NextResponse.json({
      key: objectKey,
      bytes: raw.length,
      gzBytes: gz.length,
      retained: existing.length - pruned,
      pruned,
    });
  } catch (e) {
    console.error("DB backup failed", e);
    return NextResponse.json({ error: "Backup failed." }, { status: 500 });
  } finally {
    await fs.unlink(tmp).catch(() => {});
  }
}
