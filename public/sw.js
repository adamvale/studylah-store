/* StudyLah Study HQ service worker.
 *
 * Three jobs, deliberately conservative:
 *   1. Push notifications (streak reminders) + click-through to Study HQ.
 *   2. Cache-first for immutable static assets (hashed /_next/static, icons).
 *   3. Network-first for page navigations with an /offline fallback.
 *
 * It NEVER touches /api, /admin, /downloads, /checkout or /cart — payments,
 * webhooks and watermarked file delivery must always hit the network.
 */

const VERSION = "hq-v1";
const STATIC_CACHE = `static-${VERSION}`;
const PAGE_CACHE = `pages-${VERSION}`;
const OFFLINE_URL = "/offline";

const NEVER_HANDLE = ["/api/", "/admin", "/downloads", "/checkout", "/cart"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PAGE_CACHE)
      .then((cache) => cache.addAll([OFFLINE_URL]))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== STATIC_CACHE && k !== PAGE_CACHE)
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (NEVER_HANDLE.some((p) => url.pathname.startsWith(p))) return;

  // Immutable build assets + icons: cache-first.
  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/icons/")
  ) {
    event.respondWith(
      caches.open(STATIC_CACHE).then((cache) =>
        cache.match(request).then(
          (hit) =>
            hit ||
            fetch(request).then((res) => {
              if (res.ok) cache.put(request, res.clone());
              return res;
            })
        )
      )
    );
    return;
  }

  // Page navigations: network-first (content is personalised), offline
  // fallback when the network is gone.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() =>
        caches
          .open(PAGE_CACHE)
          .then((cache) => cache.match(OFFLINE_URL))
          .then((hit) => hit || Response.error())
      )
    );
  }
});

// ── Push notifications ────────────────────────────────────────────────────
self.addEventListener("push", (event) => {
  if (!event.data) return;
  let data = {};
  try {
    data = event.data.json();
  } catch {
    data = { title: "StudyLah", body: event.data.text() };
  }
  event.waitUntil(
    self.registration.showNotification(data.title || "Study HQ", {
      body: data.body || "",
      icon: data.icon || "/icons/icon-192.png",
      badge: "/icons/icon-192.png",
      vibrate: [100, 50, 100],
      tag: data.tag || "studylah",
      data: { url: data.url || "/account" },
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const target = (event.notification.data && event.notification.data.url) || "/account";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((wins) => {
      for (const win of wins) {
        if (win.url.includes("/account") && "focus" in win) return win.focus();
      }
      return clients.openWindow(target);
    })
  );
});
