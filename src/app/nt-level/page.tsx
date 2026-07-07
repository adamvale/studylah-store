import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = { title: "N(T)-Level — coming 2026" };

export default function NTLevelPage() {
  return <ComingSoon name="N(T)-Level" eta="2026" />;
}
