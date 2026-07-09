import { existsSync, mkdirSync, rmSync, writeFileSync } from "fs";
import path from "path";
import { serverConfig } from "./config";

// Maintenance mode is a marker FILE on the persistent volume, not a DB row.
// The proxy checks it on every request, so a plain `existsSync` keeps the hot
// path free of Prisma. It sits beside the DB/PDFs on the volume, so turning on
// maintenance survives a redeploy until you explicitly turn it off.
export const MAINTENANCE_FLAG = path.join(
  path.dirname(serverConfig.pdfStorageDir),
  "maintenance.flag"
);

/** True when the site is in maintenance mode. Never throws. */
export function isMaintenanceOn(): boolean {
  try {
    return existsSync(MAINTENANCE_FLAG);
  } catch {
    return false;
  }
}

/** Turn maintenance mode on (creates the flag) or off (removes it). */
export function setMaintenance(on: boolean): void {
  if (on) {
    mkdirSync(path.dirname(MAINTENANCE_FLAG), { recursive: true });
    writeFileSync(MAINTENANCE_FLAG, new Date().toISOString());
  } else {
    rmSync(MAINTENANCE_FLAG, { force: true });
  }
}
