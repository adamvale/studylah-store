import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// v1 admin auth: a single shared password from the environment. The session
// cookie holds an HMAC keyed on that password, so it can't be forged without
// it, and it invalidates automatically if the password is rotated.
const COOKIE_NAME = "studylah_admin";
const SESSION_PAYLOAD = "studylah-admin-v1";

function adminPassword(): string {
  return process.env.ADMIN_PASSWORD ?? "";
}

export function sessionToken(): string {
  return createHmac("sha256", adminPassword()).update(SESSION_PAYLOAD).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ba.length !== bb.length) return false;
  return timingSafeEqual(ba, bb);
}

export function checkPassword(candidate: string): boolean {
  const expected = adminPassword();
  // A blank ADMIN_PASSWORD disables login entirely rather than allowing "".
  if (expected === "") return false;
  return safeEqual(candidate, expected);
}

export const ADMIN_COOKIE = COOKIE_NAME;

export async function isAdmin(): Promise<boolean> {
  if (adminPassword() === "") return false;
  const store = await cookies();
  const value = store.get(COOKIE_NAME)?.value;
  return value != null && safeEqual(value, sessionToken());
}

export async function requireAdmin(): Promise<void> {
  if (!(await isAdmin())) redirect("/admin/login");
}
