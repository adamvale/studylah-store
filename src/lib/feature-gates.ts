// Features that are built but not yet open to customers.
//
// Hiding a card is not the same as closing a feature: the web app is public,
// the routes stay compiled, and anyone with the URL walks straight in. So the
// gate lives here and is read in both places — the Learn hub hides the card,
// and the page itself redirects. Neither can drift from the other.
//
// To open a feature, delete its entry from CLOSED. Nothing else to change.

export type GatedFeature = "tuition" | "practical";

const CLOSED: GatedFeature[] = ["tuition", "practical"];

export function isFeatureClosed(feature: GatedFeature): boolean {
  return CLOSED.includes(feature);
}
