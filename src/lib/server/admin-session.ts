import { createHmac, timingSafeEqual } from "crypto";

// Pure-crypto mirror of the admin session check in admin-auth.ts, safe to import
// from the proxy (which must not pull in next/headers). Keep these two constants
// identical to admin-auth.ts. If they ever drift, the only effect is that the
// admin maintenance-bypass stops working — fail-safe, not a security hole.
export const ADMIN_COOKIE = "studylah_admin";
const SESSION_PAYLOAD = "studylah-admin-v1";

function sessionToken(): string {
  return createHmac("sha256", process.env.ADMIN_PASSWORD ?? "")
    .update(SESSION_PAYLOAD)
    .digest("hex");
}

/** True when the cookie value is a valid admin session for the current password. */
export function verifyAdminToken(value: string | undefined | null): boolean {
  if (!process.env.ADMIN_PASSWORD || !value) return false;
  const a = Buffer.from(value);
  const b = Buffer.from(sessionToken());
  return a.length === b.length && timingSafeEqual(a, b);
}
