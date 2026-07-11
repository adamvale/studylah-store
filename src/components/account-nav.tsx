"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

export function AccountNav() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Account"
      className="mt-6 flex flex-wrap gap-1 border-b border-hairline"
    >
      {LINKS.map((link) => {
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
