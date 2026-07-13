import { permanentRedirect } from "next/navigation";

// The two level listings are now one page: /subjects with a level toggle.
export default function NALevelPage() {
  permanentRedirect("/subjects?level=na-level");
}
