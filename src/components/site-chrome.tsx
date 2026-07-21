"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { PromoBar } from "./promo-bar";
import { StickyMobileCta } from "./sticky-mobile-cta";
import { DeferMount } from "./defer-mount";
import { useNativePlatform } from "@/lib/native";

// The chat + exit-intent offer are the heaviest client widgets on the page and
// neither is needed for first paint, so their JS is code-split and mounted on
// idle (keeps it out of initial script-evaluation / TBT). Both are fixed/modal,
// so appearing a beat late causes no layout shift.
const GuguChat = dynamic(() => import("./gugu-chat").then((m) => m.GuguChat), {
  ssr: false,
});
const WelcomeOffer = dynamic(
  () => import("./welcome-offer").then((m) => m.WelcomeOffer),
  { ssr: false }
);

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
  const native = useNativePlatform();
  // Storefront chrome is hidden on chromeless routes AND inside the native app
  // (the app renders its own full-screen StudyLand shell). The runtime native
  // check is the reliable backstop when the pre-paint data-native CSS stamp
  // does not apply, which was leaving the website footer visible in-app.
  const chromeless = native !== null || CHROMELESS.some((p) => pathname.startsWith(p));
  return (
    <>
      {!chromeless && <PromoBar />}
      {!chromeless && header}
      <main id="main-content" className="flex-1">
        {children}
      </main>
      {!chromeless && footer}
      {/* Floating sales helper, storefront only (hidden on chromeless ad
          landings + /admin, and self-hidden inside the native game shell).
          Deferred to idle so its JS doesn't inflate TBT. */}
      {!chromeless && (
        <DeferMount>
          <GuguChat />
        </DeferMount>
      )}
      {/* Persistent mobile action bar (storefront only; self-hides on funnel
          routes + native). Sits below the raised Gugu FAB. */}
      {!chromeless && <StickyMobileCta />}
      {/* Exit-intent welcome offer, self-suppresses on cart/checkout/native
          and after one dismissal. Deferred to idle. */}
      {!chromeless && (
        <DeferMount>
          <WelcomeOffer />
        </DeferMount>
      )}
    </>
  );
}
