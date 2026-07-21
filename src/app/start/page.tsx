import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { IconBook, IconChart, IconShield, IconTarget } from "@/components/icons";

// The link-in-bio landing page: the single link behind every social bio
// (TikTok, Instagram, Facebook). One screen, big tap targets, straight to the
// free diagnostic. Bio links carry ?utm_source=... so we forward the UTM to
// every outgoing link, keeping attribution intact however the visitor roams
// (the visitor tracker also persists first-touch UTM as a fallback).

export const metadata: Metadata = {
  alternates: { canonical: "/start" },
  title: "Start Here: Predict Your 2026 Mark Free",
  description:
    "Predict your O-Level or N(A)-Level mark in 7 minutes, free. Then see the 2026 forecast, the accuracy record, and the bundle pricing.",
  robots: { index: false }, // a routing page for social traffic, not a search target
};

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign"] as const;

function withUtm(href: string, utm: URLSearchParams): string {
  if ([...utm].length === 0) return href;
  return `${href}?${utm.toString()}`;
}

// Same season-start reference the promo bar uses, so the two counts agree.
const SEASON_START = Date.UTC(2026, 9, 1);

function daysToFirstPaper(): number {
  return Math.max(0, Math.ceil((SEASON_START - Date.now()) / 86_400_000));
}

export default async function StartPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const utm = new URLSearchParams();
  for (const k of UTM_KEYS) {
    const v = params[k];
    if (typeof v === "string" && v) utm.set(k, v.slice(0, 100));
  }

  const links = [
    {
      href: "/diagnostic",
      icon: IconTarget,
      title: "Predict your mark, free",
      sub: "10 questions, 7 minutes, instant score",
      primary: true,
    },
    {
      href: "/subjects",
      icon: IconBook,
      title: "See the 2026 exam forecast",
      sub: "Every topic ranked by probability",
      primary: false,
    },
    {
      href: "/accuracy",
      icon: IconChart,
      title: "Our accuracy record",
      sub: "What we forecast vs what came out",
      primary: false,
    },
    {
      href: "/pricing",
      icon: IconShield,
      title: "Pricing and bundles",
      sub: "Money back guarantee on every pack",
      primary: false,
    },
  ];

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-12">
      <div className="flex justify-center">
        <Image
          src="/marketing/gugu-head.png"
          alt=""
          aria-hidden="true"
          width={484}
          height={371}
          className="h-auto w-14"
        />
      </div>
      <h1 className="mt-3 text-center font-display text-2xl font-black text-ink">
        Choose StudyLah, Study Less, Score More
      </h1>
      <p className="mt-2 text-center font-mono text-xs font-medium uppercase tracking-wide text-accent">
        {daysToFirstPaper()} days to the first 2026 paper
      </p>

      <div className="mt-8 space-y-3">
        {links.map(({ href, icon: Icon, title, sub, primary }) => (
          <Link
            key={href}
            href={withUtm(href, utm)}
            data-track={`start: ${href}`}
            className={
              primary
                ? "cta-sheen glow-soft flex items-center gap-4 rounded-2xl bg-accent px-5 py-4 text-night transition-transform hover:-translate-y-0.5"
                : "flex items-center gap-4 rounded-2xl border border-hairline bg-surface px-5 py-4 transition-colors hover:border-accent"
            }
          >
            <Icon size={24} className={primary ? "shrink-0" : "shrink-0 text-accent"} />
            <span className="min-w-0">
              <span
                className={`block font-display text-base font-bold ${primary ? "" : "text-ink"}`}
              >
                {title}
              </span>
              <span className={`block text-xs ${primary ? "text-night/80" : "text-body"}`}>
                {sub}
              </span>
            </span>
          </Link>
        ))}
      </div>

      <p className="mt-6 text-center text-[11px] text-body">
        Forecasts are probabilities, not promises. Free diagnostic, no card
        needed.
      </p>
    </div>
  );
}
