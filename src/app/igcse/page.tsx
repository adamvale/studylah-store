import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = { title: "IGCSE, coming 2026" };

export default function IgcsePage() {
  return (
    <ComingSoon
      name="IGCSE (CAIE)"
      eta="2026"
      detail="Edexcel and AQA follow in 2027."
    />
  );
}
