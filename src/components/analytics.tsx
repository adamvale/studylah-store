"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Ad / analytics pixels, each loaded ONLY when its env id is set, so the site
// ships zero tracking until you decide to run ads. IDs are NEXT_PUBLIC_* so they
// inline into the client bundle:
//   NEXT_PUBLIC_GA_ID              e.g. G-XXXXXXX   (Google Analytics 4)
//   NEXT_PUBLIC_META_PIXEL_ID      e.g. 123456789   (Meta / Facebook / Instagram)
//   NEXT_PUBLIC_TIKTOK_PIXEL_ID    e.g. CXXXXXXXX    (TikTok)

const GA = process.env.NEXT_PUBLIC_GA_ID;
const META = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const TIKTOK = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    ttq?: { page?: () => void; track?: (event: string, data?: unknown) => void };
    dataLayer?: unknown[];
  }
}

// Purchase conversion, fired once from the order-success page.
export function trackPurchase(valueSgd: number, orderId: string | number) {
  window.gtag?.("event", "purchase", {
    transaction_id: String(orderId),
    value: valueSgd,
    currency: "SGD",
  });
  window.fbq?.("track", "Purchase", { value: valueSgd, currency: "SGD" });
  window.ttq?.track?.("CompletePayment", { value: valueSgd, currency: "SGD" });
}

// Top-of-funnel lead, fired once when a free diagnostic result is reached.
// This is the signal paid social optimises against before anyone buys, so it
// matters as much as Purchase for a campaign.
export function trackLead() {
  window.gtag?.("event", "generate_lead", { currency: "SGD" });
  window.fbq?.("track", "Lead");
  window.ttq?.track?.("SubmitForm");
}

export function Analytics() {
  const pathname = usePathname();

  // SPA route-change page views (the initial load is covered by the snippets).
  useEffect(() => {
    if (!pathname) return;
    window.gtag?.("event", "page_view", { page_path: pathname });
    window.fbq?.("track", "PageView");
    window.ttq?.page?.();
  }, [pathname]);

  return (
    <>
      {GA && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA}');`}
          </Script>
        </>
      )}
      {META && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META}');fbq('track','PageView');`}
        </Script>
      )}
      {TIKTOK && (
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=d.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=d.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};ttq.load('${TIKTOK}');ttq.page();}(window,document,'ttq');`}
        </Script>
      )}
    </>
  );
}

// Fires the purchase conversion once per order (dedup via sessionStorage, since
// the success page auto-refreshes while waiting for the webhook).
export function PurchaseBeacon({
  orderId,
  valueSgd,
}: {
  orderId: string | number;
  valueSgd: number;
}) {
  useEffect(() => {
    const key = `purchase-tracked-${orderId}`;
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");
    } catch {
      /* private mode, fire anyway */
    }
    trackPurchase(valueSgd, orderId);
  }, [orderId, valueSgd]);
  return null;
}
