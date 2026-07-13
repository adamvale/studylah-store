import { permanentRedirect } from "next/navigation";

// The free giveaway is now Predict-your-mark (the diagnostic), which captures
// email at the results unlock the same way the heatmap did. Old links (past
// emails, shares, search) land on the new free offer.
export default function FreeHeatmapPage() {
  permanentRedirect("/diagnostic");
}
