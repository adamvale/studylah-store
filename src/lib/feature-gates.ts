// Features that are built, still being tested, and so are closed on the WEB
// only. The app keeps them: that is where they get tested.
//
// The web app is public, so a card hidden from the Learn hub is not a closed
// feature on its own. The gate is read in two places, the hub (to hide the
// card) and the page (to turn a visitor away), and both go through here so
// they cannot drift apart.
//
// To open a feature to everyone, delete its entry from CLOSED_ON_WEB.
//
// Whether we are in the app is only knowable in the browser (window.Capacitor,
// see src/lib/native.ts), so the enforcing happens client-side. See
// src/components/native-only.tsx.

export type GatedFeature = "tuition" | "practical" | "legends";

const CLOSED_ON_WEB: GatedFeature[] = ["tuition", "practical", "legends"];

export function isClosedOnWeb(feature: GatedFeature): boolean {
  return CLOSED_ON_WEB.includes(feature);
}
