"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Hides the storefront header and footer on /admin routes, which have their
// own chrome. Header/footer are passed in as already-rendered server nodes.
export function SiteChrome({
  header,
  footer,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin") ?? false;
  return (
    <>
      {!isAdmin && header}
      <main className="flex-1">{children}</main>
      {!isAdmin && footer}
    </>
  );
}
