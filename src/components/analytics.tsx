"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Ad / analytics pixels, each loaded ONLY when its id is set, so the site
// ships zero tracking until you decide to run ads. The ids come from
// /api/px at RUNTIME (not NEXT_PUBLIC_* build-time inlining), so setting or
// changing a pixel id on Railway takes effect on a restart, with no rebuild
// and no Docker-layer-cache trap.
//   GA_ID / NEXT_PUBLIC_GA_ID              e.g. G-XXXXXXX   (Google Analytics 4)
//   META_PIXEL_ID / NEXT_PUBLIC_META_PIXEL_ID    (Meta / Facebook / Instagram)
//   TIKTOK_PIXEL_ID / NEXT_PUBLIC_TIKTOK_PIXEL_ID (TikTok)

interface PixelIds {
  ga: string | null;
  meta: string | null;
  tiktok: string | null;
}

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

// Mid-funnel add-to-cart, a strong intent signal paid social can optimise
// toward between Lead and Purchase.
export function trackAddToCart(valueSgd?: number) {
  const money = valueSgd ? { value: valueSgd, currency: "SGD" } : undefined;
  window.gtag?.("event", "add_to_cart", { currency: "SGD", value: valueSgd });
  window.fbq?.("track", "AddToCart", money);
  window.ttq?.track?.("AddToCart", money);
}

// Top-of-funnel lead, fired once when a free diagnostic result is reached.
// This is the signal paid social optimises against before anyone buys, so it
// matters as much as Purchase for a campaign.
export function trackLead() {
  window.gtag?.("event", "generate_lead", { currency: "SGD" });
  window.fbq?.("track", "Lead");
  window.ttq?.track?.("SubmitForm");
}

function injectGa(id: string) {
  if (document.getElementById("ga-init")) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);
  const init = document.createElement("script");
  init.id = "ga-init";
  init.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${id}');`;
  document.head.appendChild(init);
}

function injectMeta(id: string) {
  if (document.getElementById("meta-pixel")) return;
  const s = document.createElement("script");
  s.id = "meta-pixel";
  s.text = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${id}');fbq('track','PageView');`;
  document.head.appendChild(s);
}

function injectTiktok(id: string) {
  if (document.getElementById("tiktok-pixel")) return;
  const s = document.createElement("script");
  s.id = "tiktok-pixel";
  s.text = `!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=d.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=d.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};ttq.load('${id}');ttq.page();}(window,document,'ttq');`;
  document.head.appendChild(s);
}

export function Analytics() {
  const pathname = usePathname();
  const [loaded, setLoaded] = useState(false);

  // Fetch the ids once, then inject whichever pixels are configured.
  useEffect(() => {
    let cancelled = false;
    fetch("/api/px")
      .then((r) => r.json())
      .then((ids: PixelIds) => {
        if (cancelled) return;
        if (ids.ga) injectGa(ids.ga);
        if (ids.meta) injectMeta(ids.meta);
        if (ids.tiktok) injectTiktok(ids.tiktok);
        setLoaded(true);
      })
      .catch(() => {
        /* no analytics if the fetch fails; the site works regardless */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // SPA route-change page views. Guarded on `loaded` so the very first view
  // (fired by the injected snippets themselves) is not double-counted.
  useEffect(() => {
    if (!loaded || !pathname) return;
    window.gtag?.("event", "page_view", { page_path: pathname });
    window.fbq?.("track", "PageView");
    window.ttq?.page?.();
  }, [pathname, loaded]);

  return null;
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
