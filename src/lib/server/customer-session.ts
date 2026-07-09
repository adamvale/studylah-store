import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { serverConfig } from "./config";

// Passwordless customer auth. Two stateless, HMAC-signed tokens:
//   • a magic-link token (15 min) emailed to the customer, and
//   • a session token stored in an httpOnly cookie (30 days).
// Both carry only the customer id and an expiry; a wrong "kind" or a tampered
// signature fails to verify. No server-side session store, so logout simply
// clears the cookie. Keep this file free of Prisma so it stays cheap to import.

export const CUSTOMER_COOKIE = "studylah_customer";
const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const LOGIN_TTL_MS = 15 * 60 * 1000; // 15 minutes

// Dedicated signing secret. In production it MUST be configured; without it the
// whole feature fails closed. In development we fall back to a fixed secret so
// local/preview works without extra setup.
function secret(): string {
  if (serverConfig.customerAuthSecret) return serverConfig.customerAuthSecret;
  if (process.env.NODE_ENV === "production") return "";
  return "studylah-dev-only-customer-secret-not-for-production";
}

export function customerAuthEnabled(): boolean {
  return secret() !== "";
}

function timingEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  return ba.length === bb.length && timingSafeEqual(ba, bb);
}

// token = base64url("<kind>:<customerId>:<expiryMs>") + "." + base64url(hmac)
function signToken(kind: "login" | "session", customerId: string, ttlMs: number): string {
  const body = Buffer.from(`${kind}:${customerId}:${Date.now() + ttlMs}`).toString("base64url");
  const sig = createHmac("sha256", secret()).update(body).digest("base64url");
  return `${body}.${sig}`;
}

function verifyToken(kind: "login" | "session", token: string | undefined | null): string | null {
  const key = secret();
  if (!key || !token) return null;
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const expected = createHmac("sha256", key).update(body).digest("base64url");
  if (!timingEqual(sig, expected)) return null;
  let decoded: string;
  try {
    decoded = Buffer.from(body, "base64url").toString();
  } catch {
    return null;
  }
  const [k, customerId, expStr] = decoded.split(":");
  const exp = Number(expStr);
  if (k !== kind || !customerId || !Number.isFinite(exp) || exp < Date.now()) return null;
  return customerId;
}

// --- Magic link (emailed) ---
export function signLoginToken(customerId: string): string {
  return signToken("login", customerId, LOGIN_TTL_MS);
}
export function verifyLoginToken(token: string | undefined | null): string | null {
  return verifyToken("login", token);
}

// --- Change-email link (emailed to the NEW address to prove ownership) ---
const CHANGE_EMAIL_TTL_MS = 30 * 60 * 1000; // 30 minutes

export function signChangeEmailToken(customerId: string, newEmail: string): string {
  const payload = `changeemail:${customerId}:${Buffer.from(newEmail).toString(
    "base64url"
  )}:${Date.now() + CHANGE_EMAIL_TTL_MS}`;
  const body = Buffer.from(payload).toString("base64url");
  const sig = createHmac("sha256", secret()).update(body).digest("base64url");
  return `${body}.${sig}`;
}

export function verifyChangeEmailToken(
  token: string | undefined | null
): { customerId: string; newEmail: string } | null {
  const key = secret();
  if (!key || !token) return null;
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const expected = createHmac("sha256", key).update(body).digest("base64url");
  if (!timingEqual(sig, expected)) return null;
  let decoded: string;
  try {
    decoded = Buffer.from(body, "base64url").toString();
  } catch {
    return null;
  }
  const [kind, customerId, emailB64, expStr] = decoded.split(":");
  const exp = Number(expStr);
  if (
    kind !== "changeemail" ||
    !customerId ||
    !emailB64 ||
    !Number.isFinite(exp) ||
    exp < Date.now()
  ) {
    return null;
  }
  try {
    return { customerId, newEmail: Buffer.from(emailB64, "base64url").toString() };
  } catch {
    return null;
  }
}

// --- Session cookie ---
export function signSessionToken(customerId: string): string {
  return signToken("session", customerId, SESSION_TTL_MS);
}

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: Math.floor(SESSION_TTL_MS / 1000),
  };
}

// Read the logged-in customer id from the session cookie. Safe in Server
// Components and Route Handlers (reading only). Returns null when signed out.
export async function getCustomerId(): Promise<string | null> {
  const store = await cookies();
  return verifyToken("session", store.get(CUSTOMER_COOKIE)?.value);
}
