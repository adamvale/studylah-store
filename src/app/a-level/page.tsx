import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = { title: "A-Level — coming 2026" };

export default function ALevelPage() {
  return (
    <ComingSoon
      name="A-Level (Singapore)"
      eta="2026"
      detail="Edexcel and AQA international A-Levels follow in 2027."
    />
  );
}
