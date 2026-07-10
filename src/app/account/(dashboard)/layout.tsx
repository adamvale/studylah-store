import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { AccountNav } from "@/components/account-nav";

export const metadata: Metadata = {
  title: { default: "Your account", template: "%s · StudyLah!" },
  robots: { index: false, follow: false },
};

// Shared shell for every signed-in account page: header, sign-out, tab nav.
// Lives in a route group so /account/login stays OUTSIDE it — wrapping the
// login page in this guard would redirect-loop.
export default async function AccountDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  const customer = await prisma.customer.findUnique({
    where: { id: customerId },
    select: { email: true },
  });
  if (!customer) redirect("/account/login");

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold text-ink">Your account</h1>
          <p className="mt-1 text-sm text-body">
            Signed in as <span className="font-medium text-ink">{customer.email}</span>
          </p>
        </div>
        <form action="/api/account/logout" method="post">
          <button
            type="submit"
            className="rounded-lg border border-hairline px-4 py-2 text-sm font-medium text-body hover:text-ink"
          >
            Sign out
          </button>
        </form>
      </div>

      <AccountNav />

      <div className="mt-6">{children}</div>

      <p className="mt-10 text-xs text-body">
        Every PDF is watermarked to your email and order number. Trouble with
        anything?{" "}
        <a
          href="mailto:hello@studylah.education"
          className="font-medium text-accent underline"
        >
          hello@studylah.education
        </a>
        .
      </p>
    </div>
  );
}
