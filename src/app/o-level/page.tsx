import type { Metadata } from "next";
import { LevelCatalogue } from "@/components/level-catalogue";

export const metadata: Metadata = {
  title: "O-Level (G3) subjects",
  description:
    "AI exam forecasts, original practice questions, and timed rehearsals for all 14 O-Level subjects.",
};

export default function OLevelPage() {
  return <LevelCatalogue level="o-level" />;
}
