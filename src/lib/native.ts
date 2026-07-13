"use client";

import { useSyncExternalStore } from "react";

// Detecting the Capacitor shell. The native app injects window.Capacitor;
// everything commerce-shaped must disappear on iOS (Apple's reader-app rule:
// apps that show purchasable digital content owe 15-30%, so the app shows
// NONE; buying lives on the website).
//
// Dev aid: localStorage.studylah_native = "ios" | "android" simulates the
// shell in a normal browser for testing the gated UI.

export type NativePlatform = "ios" | "android" | null;

interface CapacitorGlobal {
  isNativePlatform?: () => boolean;
  getPlatform?: () => string;
}

function detect(): NativePlatform {
  if (typeof window === "undefined") return null;
  try {
    const override = localStorage.getItem("studylah_native");
    if (override === "ios" || override === "android") return override;
  } catch {
    // storage unavailable, fall through to real detection
  }
  const cap = (window as unknown as { Capacitor?: CapacitorGlobal }).Capacitor;
  if (cap?.isNativePlatform?.()) {
    const p = cap.getPlatform?.();
    return p === "ios" ? "ios" : p === "android" ? "android" : null;
  }
  return null;
}

const noop = () => () => {};

// Server snapshot = null (web) so SSR markup is the full site; the shell
// re-renders with the platform right after hydration.
export function useNativePlatform(): NativePlatform {
  return useSyncExternalStore(noop, detect, () => null);
}

export function useHideCommerce(): boolean {
  // Google tolerates external purchases more than Apple, but one consistent
  // app is simpler to reason about (and to review): hide commerce on BOTH.
  return useNativePlatform() !== null;
}
