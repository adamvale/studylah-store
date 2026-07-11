import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import {
  CUSTOMER_COOKIE,
  customerAuthEnabled,
  verifyLoginCode,
  signSessionToken,
  sessionCookieOptions,
} from "@/lib/server/customer-session";

// Code-based sign-in for the native app (and anyone who prefers typing a code
// to hunting an email link). The code arrives in the same email as the magic
// link. Attempts are throttled hard: 6 digits is only safe when nobody can
// grind it.
//
// APP-REVIEW ACCOUNT: when REVIEW_EMAIL + REVIEW_CODE are set, that exact
// pair always signs in (Apple/Google reviewers can't receive our emails).
// Point it at a demo customer, never a real one.

const attempts = new Map<string, { n: number; resetAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 10 * 60 * 1000;

function throttled(key: string): boolean {
  const now = Date.now();
  const entry = attempts.get(key);
  if (!entry || entry.resetAt < now) {
    attempts.set(key, { n: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.n++;
  return entry.n > MAX_ATTEMPTS;
}

export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  const email = String(form?.get("email") ?? "").trim().toLowerCase();
  const code = String(form?.get("code") ?? "").trim();
  const fail = () =>
    NextResponse.redirect(new URL("/account/login?error=code", serverConfig.siteUrl), 303);

  if (!customerAuthEnabled() || !email.includes("@") || !/^\d{6}$/.test(code)) {
    return fail();
  }
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (throttled(`e:${email}`) || throttled(`ip:${ip}`)) {
    return NextResponse.redirect(new URL("/account/login?error=throttle", serverConfig.siteUrl), 303);
  }

  const reviewEmail = (process.env.REVIEW_EMAIL ?? "").toLowerCase();
  const reviewCode = process.env.REVIEW_CODE ?? "";
  const isReviewer =
    reviewEmail !== "" && reviewCode !== "" && email === reviewEmail && code === reviewCode;

  if (!isReviewer && !verifyLoginCode(email, code)) return fail();

  const rows = await prisma.$queryRaw<Array<{ id: string }>>`
    SELECT id FROM "Customer" WHERE email = ${email} COLLATE NOCASE LIMIT 1
  `;
  const customer = rows[0];
  if (!customer) return fail();

  const res = NextResponse.redirect(new URL("/account", serverConfig.siteUrl), 303);
  res.cookies.set(CUSTOMER_COOKIE, signSessionToken(customer.id), sessionCookieOptions());
  res.cookies.set("studylah_acct", "1", { ...sessionCookieOptions(), httpOnly: false });
  return res;
}
