"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useNativePlatform } from "@/lib/native";

// ── Native (Capacitor) push bridge ────────────────────────────────────────
// Inside the shell, Capacitor injects window.Capacitor.Plugins.*, including
// PushNotifications when the native project bundles it. The web build never
// imports the plugin package; everything goes through the injected bridge.

interface PushPlugin {
  requestPermissions: () => Promise<{ receive: string }>;
  register: () => Promise<void>;
  addListener: (
    event: string,
    cb: (data: { value?: string; notification?: { data?: { url?: string } } }) => void
  ) => Promise<{ remove: () => void }> | { remove: () => void };
}

function nativePushPlugin(): PushPlugin | null {
  if (typeof window === "undefined") return null;
  const cap = (window as unknown as { Capacitor?: { Plugins?: { PushNotifications?: PushPlugin } } })
    .Capacitor;
  return cap?.Plugins?.PushNotifications ?? null;
}

// Mounted once (root layout): routes notification taps to their in-app URL.
export function NativePushBridge() {
  const platform = useNativePlatform();
  useEffect(() => {
    if (!platform) return;
    const plugin = nativePushPlugin();
    if (!plugin) return;
    void plugin.addListener("pushNotificationActionPerformed", (data) => {
      const url = data.notification?.data?.url;
      if (url && url.startsWith("/")) window.location.href = url;
    });
  }, [platform]);
  return null;
}

// PWA plumbing + prompts, all in one place:
//   <SwRegister />, registers the service worker (mounted site-wide)
//   <InstallPrompt />, "add StudyLand to your home screen" card (portal)
//   <NotificationToggle/>, enable/disable streak reminders (Settings + card)
//
// Everything degrades silently: unsupported browsers see nothing.

export function SwRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  }, []);
  return null;
}

// ── Install prompt ────────────────────────────────────────────────────────

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

function useStandalone(): boolean {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(display-mode: standalone)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () =>
      window.matchMedia("(display-mode: standalone)").matches ||
      // iOS Safari legacy flag
      Boolean((navigator as unknown as { standalone?: boolean }).standalone),
    () => true // server snapshot: assume installed so nothing flashes
  );
}

const DISMISS_KEY = "studylah_install_dismissed";

const noopSubscribe = () => () => {};

// Client-only reads via useSyncExternalStore: the server snapshot renders
// nothing, the client re-reads after hydration, no mismatch, no effect-time
// setState (see ExamCountdown for the same pattern).
function useStoredDismissed(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => {
      try {
        return localStorage.getItem(DISMISS_KEY) === "1";
      } catch {
        return false;
      }
    },
    () => true
  );
}

function useIsIos(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => /iphone|ipad|ipod/i.test(navigator.userAgent),
    () => false
  );
}

export function InstallPrompt() {
  const standalone = useStandalone();
  const storedDismissed = useStoredDismissed();
  const isIos = useIsIos();
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [justDismissed, setJustDismissed] = useState(false);
  const dismissed = storedDismissed || justDismissed;

  useEffect(() => {
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  if (standalone || dismissed) return null;
  // Show only when we have something real to offer: a native prompt (Android/
  // Chrome) or iOS instructions.
  if (!deferred && !isIos) return null;

  function dismiss() {
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // storage unavailable, the card returns next visit, acceptable
    }
    setJustDismissed(true);
  }

  return (
    <div className="mb-6 rounded-2xl border border-accent/40 bg-surface p-4 print:hidden">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="font-display font-bold text-ink">
            📲 Put StudyLand on your home screen
          </p>
          <p className="mt-0.5 text-xs text-body">
            {deferred
              ? "One tap, opens full-screen like an app, no store needed."
              : "In Safari: tap Share, then “Add to Home Screen”. Opens full-screen like an app."}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          {deferred && (
            <button
              type="button"
              onClick={() => {
                void deferred.prompt();
                void deferred.userChoice.finally(dismiss);
              }}
              className="rounded-lg bg-accent px-4 py-2 text-sm font-bold text-night"
            >
              Install
            </button>
          )}
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss install prompt"
            className="text-xs text-body hover:text-ink"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Notifications (streak reminders) ─────────────────────────────────────

function urlBase64ToUint8Array(base64String: string): Uint8Array<ArrayBuffer> {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  // Explicit ArrayBuffer so the type satisfies BufferSource under strict libs.
  const outputArray = new Uint8Array(new ArrayBuffer(rawData.length));
  for (let i = 0; i < rawData.length; ++i) outputArray[i] = rawData.charCodeAt(i);
  return outputArray;
}

type PushState = "unsupported" | "default" | "granted" | "denied" | "subscribed";

const NATIVE_TOKEN_KEY = "studylah_native_push_token";

export function NotificationToggle() {
  const [state, setState] = useState<PushState>("unsupported");
  const [busy, setBusy] = useState(false);
  const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? "";
  const platform = useNativePlatform();

  useEffect(() => {
    // Native shell: the toggle drives the Capacitor plugin, not web push.
    if (platform) {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem(NATIVE_TOKEN_KEY);
      } catch {
        // storage unavailable
      }
      const plugin = nativePushPlugin();
      if (!plugin) return; // shell without the plugin, leave "unsupported"
      let cancelled = false;
      queueMicrotask(() => {
        if (!cancelled) setState(stored ? "subscribed" : "default");
      });
      return () => {
        cancelled = true;
      };
    }
    // Web: default state is already "unsupported", only the supported path
    // probes, and it sets state strictly in the async continuation.
    if (!("serviceWorker" in navigator) || !("PushManager" in window) || !publicKey) {
      return;
    }
    let cancelled = false;
    void (async () => {
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.getSubscription();
      if (cancelled) return;
      setState(sub ? "subscribed" : (Notification.permission as PushState));
    })();
    return () => {
      cancelled = true;
    };
  }, [publicKey, platform]);

  async function enableNative() {
    const plugin = nativePushPlugin();
    if (!plugin || !platform) return;
    setBusy(true);
    try {
      const perm = await plugin.requestPermissions();
      if (perm.receive !== "granted") {
        setState("denied");
        return;
      }
      const registration = new Promise<string>((resolve, reject) => {
        void plugin.addListener("registration", (data) => {
          if (data.value) resolve(data.value);
        });
        void plugin.addListener("registrationError", () => reject(new Error("registration failed")));
        setTimeout(() => reject(new Error("registration timeout")), 15000);
      });
      await plugin.register();
      const token = await registration;
      const res = await fetch("/api/account/push/native", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, platform }),
      });
      if (!res.ok) throw new Error();
      try {
        localStorage.setItem(NATIVE_TOKEN_KEY, token);
      } catch {
        // storage unavailable, server still has the token
      }
      setState("subscribed");
    } catch {
      setState("default");
    } finally {
      setBusy(false);
    }
  }

  async function disableNative() {
    setBusy(true);
    try {
      let token: string | null = null;
      try {
        token = localStorage.getItem(NATIVE_TOKEN_KEY);
        localStorage.removeItem(NATIVE_TOKEN_KEY);
      } catch {
        // storage unavailable
      }
      if (token) {
        await fetch("/api/account/push/native", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
      }
      setState("default");
    } finally {
      setBusy(false);
    }
  }

  async function enable() {
    setBusy(true);
    try {
      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        setState(permission as PushState);
        return;
      }
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey),
      });
      const res = await fetch("/api/account/push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sub.toJSON()),
      });
      if (!res.ok) throw new Error();
      setState("subscribed");
    } catch {
      setState(Notification.permission as PushState);
    } finally {
      setBusy(false);
    }
  }

  async function disable() {
    setBusy(true);
    try {
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.getSubscription();
      if (sub) {
        await fetch("/api/account/push", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ endpoint: sub.endpoint }),
        });
        await sub.unsubscribe();
      }
      setState("granted");
    } finally {
      setBusy(false);
    }
  }

  if (state === "unsupported") {
    return (
      <p className="text-sm text-body">
        This browser doesn&apos;t support notifications. On iPhone, add Study
        HQ to your home screen first (Share → Add to Home Screen), then enable
        reminders from inside the installed app.
      </p>
    );
  }

  if (state === "denied") {
    return (
      <p className="text-sm text-body">
        Notifications are blocked for this site in your browser settings, 
        allow them there, then come back and switch reminders on.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <p className="text-sm text-body">
        {state === "subscribed"
          ? "Streak reminders are on for this device, an evening nudge only on days your streak is at risk."
          : "Get one evening nudge on days your streak is about to break. No spam, that's the only push we send."}
      </p>
      {state === "subscribed" ? (
        <button
          type="button"
          onClick={() => void (platform ? disableNative() : disable())}
          disabled={busy}
          className="rounded-lg border border-hairline px-4 py-2 text-sm font-medium text-body hover:text-ink disabled:opacity-50"
        >
          Turn off
        </button>
      ) : (
        <button
          type="button"
          onClick={() => void (platform ? enableNative() : enable())}
          disabled={busy}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-bold text-night disabled:opacity-50"
        >
          {busy ? "Setting up…" : "🔔 Remind me"}
        </button>
      )}
    </div>
  );
}
