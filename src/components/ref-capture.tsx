"use client";

import { useEffect } from "react";

// Lands anywhere with ?ref=CODE (a referral share link) → remember the code
// for 30 days so the cart can apply it automatically. Renders nothing.
export function RefCapture() {
  useEffect(() => {
    const ref = new URLSearchParams(window.location.search).get("ref");
    if (!ref) return;
    const code = ref.trim().toUpperCase().slice(0, 24);
    if (!/^[A-Z0-9-]+$/.test(code)) return;
    document.cookie = `studylah_ref=${encodeURIComponent(code)}; path=/; max-age=${
      30 * 24 * 60 * 60
    }; samesite=lax`;
  }, []);
  return null;
}
