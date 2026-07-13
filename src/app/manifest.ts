import type { MetadataRoute } from "next";

// The installable StudyLand app. start_url is the Today hub, students who
// install this are buyers, and Today is the page that runs their revision.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "StudyLah StudyLand",
    short_name: "StudyLand",
    description:
      "Your daily mission for the 2026 papers: three questions a day, a mistake notebook that re-tests you, marks-at-risk tracking, timers and plans.",
    id: "/account",
    start_url: "/account",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#161c26",
    theme_color: "#161c26",
    categories: ["education"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
