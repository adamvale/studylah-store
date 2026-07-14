"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHideCommerce } from "@/lib/native";

const LINKS = [
  { href: "/account", label: "Today" },
  { href: "/account/adventure", label: "Adventure" },
  { href: "/account/study", label: "Study plan" },
  { href: "/account/progress", label: "Progress" },
  { href: "/account/practice", label: "Practice" },
  { href: "/account/mistakes", label: "Mistakes" },
  { href: "/account/timer", label: "Timer" },
  { href: "/account/orders", label: "Orders" },
  { href: "/account/add-subjects", label: "Add subjects" },
  { href: "/account/referrals", label: "Refer a friend" },
  { href: "/account/settings", label: "Settings" },
];

// StudyLand tabs that require the Master tier. Non-Master buyers only keep the
// pages that stay open to every customer (orders, settings, commerce).
const MASTER_ONLY = new Set([
  "/account",
  "/account/adventure",
  "/account/study",
  "/account/progress",
  "/account/practice",
  "/account/mistakes",
  "/account/timer",
]);

export function AccountNav({ isMaster }: { isMaster: boolean }) {
  const pathname = usePathname();
  // Reader-app rule: no purchase surfaces (Add subjects) and no cash-reward
  // surfaces (Refer a friend) inside the native app.
  const hideCommerce = useHideCommerce();
  let links = hideCommerce
    ? LINKS.filter(
        (l) => l.href !== "/account/add-subjects" && l.href !== "/account/referrals"
      )
    : LINKS;
  // Non-Master buyers: hide every locked StudyLand tab and lead with the
  // upgrade prompt instead. Their PDFs stay reachable via Orders.
  if (!isMaster) {
    links = [
      { href: "/account/unlock", label: "Unlock StudyLand" },
      ...links.filter((l) => !MASTER_ONLY.has(l.href)),
    ];
  }
  return (
    <nav
      aria-label="Account"
      className="mt-6 flex flex-wrap gap-1 border-b border-hairline"
    >
      {links.map((link) => {
        const active =
          link.href === "/account"
            ? pathname === "/account"
            : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`-mb-px border-b-2 px-3 py-2 text-sm font-medium transition-colors ${
              active
                ? "border-accent text-ink"
                : "border-transparent text-body hover:text-ink"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
