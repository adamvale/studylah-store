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

// --- 6-digit login codes (for the native app, where magic links break) ---
// Stateless: the code is an HMAC of (email, 10-minute window), so nothing is
// stored. Verification accepts the current and previous window (grace for
// slow typers). Brute force is bounded by the caller's rate limiting PLUS the
// 20-minute total validity.
const CODE_WINDOW_MS = 10 * 60 * 1000;

function codeFor(email: string, window: number): string {
  const digest = createHmac("sha256", secret())
    .update(`logincode:${email.toLowerCase()}:${window}`)
    .digest();
  return String(digest.readUInt32BE(0) % 1_000_000).padStart(6, "0");
}

export function currentLoginCode(email: string): string {
  return codeFor(email, Math.floor(Date.now() / CODE_WINDOW_MS));
}

export function verifyLoginCode(email: string, code: string): boolean {
  if (!secret() || !/^\d{6}$/.test(code)) return false;
  const w = Math.floor(Date.now() / CODE_WINDOW_MS);
  return timingEqual(code, codeFor(email, w)) || timingEqual(code, codeFor(email, w - 1));
}

// --- Parent-digest unsubscribe (emailed to the parent, long-lived) ---
const PARENT_UNSUB_TTL_MS = 365 * 24 * 60 * 60 * 1000; // 1 year

export function signParentUnsubToken(customerId: string): string {
  const body = Buffer.from(
    `parentunsub:${customerId}:${Date.now() + PARENT_UNSUB_TTL_MS}`
  ).toString("base64url");
  const sig = createHmac("sha256", secret()).update(body).digest("base64url");
  return `${body}.${sig}`;
}

export function verifyParentUnsubToken(token: string | undefined | null): string | null {
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
  const [kind, customerId, expStr] = decoded.split(":");
  const exp = Number(expStr);
  if (kind !== "parentunsub" || !customerId || !Number.isFinite(exp) || exp < Date.now()) {
    return null;
  }
  return customerId;
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
