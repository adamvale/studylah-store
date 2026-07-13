import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCustomerId } from "@/lib/server/customer-session";
import { sgDay, streakState } from "@/lib/server/study";
import { getPlayer } from "@/lib/server/xp";
import { AccountChrome } from "@/components/account-chrome";

export const metadata: Metadata = {
  title: { default: "Your account", template: "%s · StudyLah!" },
  robots: { index: false, follow: false },
};

// Shared shell for every signed-in account page. Lives in a route group so
// /account/login stays OUTSIDE it, wrapping the login page in this guard
// would redirect-loop. AccountChrome renders the web dashboard OR, inside
// the native shell, the game HUD + bottom tab bar.
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

  // The streak + player level ride the shell so they're visible from every
  // tab, quiet, permanent pressure to come back tomorrow. streakState also
  // auto-spends a shield if yesterday slipped.
  const streak = await streakState(customerId, sgDay());
  const player = await getPlayer(customerId);

  return (
    <AccountChrome
      email={customer.email}
      streak={streak.current}
      todayDone={streak.doneToday}
      shields={streak.shields}
      player={{
        level: player.level,
        title: player.title,
        intoLevel: player.intoLevel,
        needed: player.needed,
        progressPct: player.progressPct,
      }}
    >
      {children}
    </AccountChrome>
  );
}
