import { NextResponse } from "next/server";
import { ADMIN_COOKIE, checkPassword, sessionToken } from "@/lib/server/admin-auth";

export async function POST(request: Request) {
  let password = "";
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    const body = (await request.json().catch(() => null)) as { password?: unknown } | null;
    password = typeof body?.password === "string" ? body.password : "";
  } else {
    const form = await request.formData();
    const value = form.get("password");
    password = typeof value === "string" ? value : "";
  }

  if (!checkPassword(password)) {
    return NextResponse.json(
      { error: "Wrong password, or admin access isn't configured." },
      { status: 401 }
    );
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, sessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12, // 12 hours
  });
  return res;
}
