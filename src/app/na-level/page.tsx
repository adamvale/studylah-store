import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLevelPublished } from "@/lib/catalogue";
import { LevelCatalogue } from "@/components/level-catalogue";

export const metadata: Metadata = {
  title: "N(A)-Level (G2) subjects",
  description:
    "AI exam forecasts, original practice questions, and timed rehearsals for N(A)-Level subjects.",
};

export default function NALevelPage() {
  // Unpublished until real N(A) PDFs replace the seed placeholders.
  if (!isLevelPublished("na-level")) notFound();
  return <LevelCatalogue level="na-level" />;
}
