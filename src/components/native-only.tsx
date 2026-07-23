"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useNativePlatform } from "@/lib/native";
import { isClosedOnWeb, type GatedFeature } from "@/lib/feature-gates";

// The two halves of a web-only gate.
//
// Whether we are in the StudyLah app is a browser fact (window.Capacitor), so
// neither of these can be a server component. On the web the server renders
// the page without the gated parts; in the app they appear on hydration, the
// same way the camera and microphone tools already do.

/**
 * Renders its children only in the app. On the web they are simply absent, so
 * the Learn hub keeps its order and the gated cards drop out of it.
 */
export function NativeOnly({ feature, children }: { feature: GatedFeature; children: React.ReactNode }) {
  const native = useNativePlatform();
  if (native === null && isClosedOnWeb(feature)) return null;
  return <>{children}</>;
}

/**
 * Turns a web visitor away from a feature that is not open yet. Hiding the
 * card does not close the route: it stays compiled and anyone with the URL
 * walks in, so the page carries this too.
 *
 * Client-side by necessity. That means a web visitor who types the URL sees
 * the page for a moment before being sent back, which is fine for what this
 * is: these pages sit behind sign-in and the paid tier already, and the gate
 * is here to stop unfinished features being advertised, not to keep a secret.
 */
export function CloseOnWeb({ feature }: { feature: GatedFeature }) {
  const native = useNativePlatform();
  const router = useRouter();
  const shut = native === null && isClosedOnWeb(feature);
  useEffect(() => {
    if (shut) router.replace("/account/learn");
  }, [shut, router]);
  return null;
}
