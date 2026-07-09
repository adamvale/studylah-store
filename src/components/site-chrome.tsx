"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Hides the storefront header and footer on routes that manage their own
// chrome: /admin, and the ad landing pages (a distraction-free page converts
// paid traffic better with no nav to wander off through). Header/footer are
// passed in as already-rendered server nodes.
const CHROMELESS = ["/admin", "/exam-forecast"];

export function SiteChrome({
  header,
  footer,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname() ?? "";
  const chromeless = CHROMELESS.some((p) => pathname.startsWith(p));
  return (
    <>
      {!chromeless && header}
      <main className="flex-1">{children}</main>
      {!chromeless && footer}
    </>
  );
}
