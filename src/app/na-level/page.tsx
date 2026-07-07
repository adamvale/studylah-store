import type { Metadata } from "next";
import { LevelCatalogue } from "@/components/level-catalogue";

export const metadata: Metadata = {
  title: "N(A)-Level (G2) subjects",
  description:
    "AI exam forecasts, original practice questions, and timed rehearsals for all 10 N(A)-Level subjects.",
};

export default function NALevelPage() {
  return <LevelCatalogue level="na-level" />;
}
