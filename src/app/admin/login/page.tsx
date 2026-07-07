import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/server/admin-auth";
import { LoginForm } from "./login-form";

export const metadata: Metadata = { title: "Admin sign in", robots: { index: false } };

export default async function AdminLoginPage() {
  if (await isAdmin()) redirect("/admin");
  return (
    <div className="mx-auto max-w-sm px-4 py-20">
      <p className="font-mono text-xs font-medium text-body">StudyLah</p>
      <h1 className="mt-1 font-display text-3xl font-bold text-ink">Admin</h1>
      <p className="mt-2 text-sm text-body">
        Sign in with the shared admin password (the <code>ADMIN_PASSWORD</code>{" "}
        env var).
      </p>
      <LoginForm />
    </div>
  );
}
