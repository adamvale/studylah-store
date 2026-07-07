import Link from "next/link";
import { COMING_SOON } from "@/lib/catalogue";
import { HeatTiles } from "./heat";

const SHOP = [
  { href: "/o-level", label: "O-Level (G3)" },
  { href: "/na-level", label: "N(A)-Level (G2)" },
  { href: "/bundles", label: "Bundle builder" },
  { href: "/free-heatmap", label: "Free heatmap" },
];

const TRUST = [
  { href: "/accuracy", label: "Accuracy scorecard" },
  { href: "/faq", label: "FAQ and guarantee" },
];

const LEGAL = [
  { href: "/legal/refunds", label: "Refund policy" },
  { href: "/legal/privacy", label: "Privacy policy" },
  { href: "/legal/terms", label: "Terms of use" },
];

export function Footer() {
  return (
    <footer className="mt-16 bg-indigo text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-extrabold">StudyLah!</p>
            <p className="mt-0.5 text-sm font-medium text-accent">
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
          <p className="text-xs leading-relaxed text-white/60">
            StudyLah materials are data-driven probabilistic forecasts and
            original practice content. They are not actual examination content,
            and no grade outcome is guaranteed. StudyLah is an independent
            company and is not affiliated with, endorsed by, or connected to
            the Singapore Examinations and Assessment Board (SEAB), the
            Ministry of Education (MOE), or Cambridge (UCLES).
          </p>
          <p className="mt-3 text-xs text-white/40">
            © {new Date().getFullYear()} StudyLah · studylah.education ·
            Singapore
          </p>
        </div>
      </div>
    </footer>
  );
}
