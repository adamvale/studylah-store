import { permanentRedirect } from "next/navigation";

// The two level listings are now one page: /subjects (O-Level default).
export default function OLevelPage() {
  permanentRedirect("/subjects");
}
