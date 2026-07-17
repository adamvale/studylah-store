import Image from "next/image";
import Link from "next/link";
import { COMING_SOON, LEVELS, PUBLISHED_LEVELS } from "@/lib/catalogue";
import { STANDARD_DISCLAIMER } from "@/lib/compliance";
import { HeatTiles } from "./heat";

const SHOP = [
  ...PUBLISHED_LEVELS.map((level) => ({
    href: `/${level}`,
    label: LEVELS[level].name,
  })),
  { href: "/bundles", label: "Bundle builder" },
];

const TRUST = [
  { href: "/accuracy", label: "Accuracy scorecard" },
  { href: "/diagnostic", label: "Predict your mark, free" },
  { href: "/studyland", label: "Inside StudyLand" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ and guarantee" },
];

const LEGAL = [
  { href: "/legal/refunds", label: "Refund policy" },
  { href: "/legal/privacy", label: "Privacy policy" },
  { href: "/legal/terms", label: "Terms of use" },
];

export function Footer() {
  return (
    <footer className="native-hide border-t border-hairline bg-night-2 text-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-28 sm:pb-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/studylah-logo.png"
              alt="StudyLah"
              width={286}
              height={97}
              className="h-9 w-auto"
            />
            <p className="mt-3 text-sm font-medium text-accent">
              Study Less, Score More.
            </p>
            <HeatTiles className="mt-3" />
            <p className="mt-3 text-sm text-white/70">
              AI-driven exam forecasts and original practice for Singapore
              students. Built from 10 years of real exam data.
            </p>
          </div>
          <nav aria-label="Shop">
            <p className="text-sm font-medium text-white/50">Shop</p>
            <ul className="mt-2 space-y-1.5">
              {SHOP.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/85 hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Trust">
            <p className="text-sm font-medium text-white/50">Trust</p>
            <ul className="mt-2 space-y-1.5">
              {TRUST.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/85 hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-medium text-white/50">Coming soon</p>
            <ul className="mt-2 space-y-1.5">
              {COMING_SOON.map((l) => (
                <li key={l.slug}>
                  <Link href={`/${l.slug}`} className="text-sm text-white/60 hover:text-accent">
                    {l.name} · {l.eta}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Legal">
            <p className="text-sm font-medium text-white/50">Legal</p>
            <ul className="mt-2 space-y-1.5">
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/85 hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 border-t border-white/15 pt-6">
          {/* Mandated disclaimer, verbatim, see src/lib/compliance.ts */}
          <p className="text-xs leading-relaxed text-white/60">
            {STANDARD_DISCLAIMER}
          </p>
          <p className="mt-3 text-xs text-white/60">
            © {new Date().getFullYear()} StudyLah · studylah.education ·
            Singapore
          </p>
        </div>
      </div>
    </footer>
  );
}
