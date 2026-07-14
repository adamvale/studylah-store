"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { GuguChat } from "./gugu-chat";
import { StickyMobileCta } from "./sticky-mobile-cta";
import { WelcomeOffer } from "./welcome-offer";

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
      <main id="main-content" className="flex-1">
        {children}
      </main>
      {!chromeless && footer}
      {/* Floating sales helper, storefront only (hidden on chromeless ad
          landings + /admin, and self-hidden inside the native game shell). */}
      {!chromeless && <GuguChat />}
      {/* Persistent mobile action bar (storefront only; self-hides on funnel
          routes + native). Sits below the raised Gugu FAB. */}
      {!chromeless && <StickyMobileCta />}
      {/* Exit-intent welcome offer, self-suppresses on cart/checkout/native
          and after one dismissal. */}
      {!chromeless && <WelcomeOffer />}
    </>
  );
}
