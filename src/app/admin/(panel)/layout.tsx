import type { Metadata } from "next";
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
          <span aria-hidden="true" className="flex items-end gap-0.5">
            <span className="h-2 w-1.5 rounded-sm bg-heat-2" />
            <span className="h-3 w-1.5 rounded-sm bg-heat-3" />
            <span className="h-4 w-1.5 rounded-sm bg-heat-5" />
          </span>
          <div>
            <p className="font-display text-lg font-bold text-trust">StudyLah admin</p>
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
              className="rounded-lg border border-trust/25 px-3 py-1.5 text-sm font-medium text-trust hover:border-trust/50"
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
