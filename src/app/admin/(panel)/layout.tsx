import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { requireAdmin } from "@/lib/server/admin-auth";
import { AdminNav } from "@/components/admin/admin-nav";

export const metadata: Metadata = {
  title: { default: "Admin", template: "%s · StudyLah admin" },
  robots: { index: false, follow: false },
};

export default async function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdmin();
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/studylah-logo.png"
            alt="StudyLah"
            width={286}
            height={97}
            className="h-8 w-auto"
          />
          <div>
            <p className="font-display text-lg font-bold text-white">Admin</p>
            <p className="text-xs text-body">Operations · v1</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/" className="text-sm text-body hover:text-ink">
            View store
          </Link>
          <form action="/api/admin/logout" method="post">
            <button
              type="submit"
              className="rounded-lg border border-hairline px-3 py-1.5 text-sm font-medium text-trust hover:border-hairline"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
      <AdminNav />
      <div className="mt-6">{children}</div>
    </div>
  );
}
