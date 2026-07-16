"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/products", label: "Products & pricing" },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/visitors", label: "Visitors" },
  { href: "/admin/access", label: "Access" },
  { href: "/admin/whatsapp", label: "WhatsApp" },
  { href: "/admin/feedback", label: "Feedback" },
  { href: "/admin/payouts", label: "Payouts" },
  { href: "/admin/leads", label: "Leads" },
];

export function AdminNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Admin" className="mt-6 flex flex-wrap gap-1 border-b border-hairline">
      {LINKS.map((link) => {
        const active =
          link.href === "/admin"
            ? pathname === "/admin"
            : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`-mb-px border-b-2 px-3 py-2 text-sm font-medium transition-colors ${
              active
                ? "border-signal text-ink"
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
