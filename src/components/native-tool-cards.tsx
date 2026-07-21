"use client";

import Link from "next/link";
import { useNativePlatform } from "@/lib/native";
import { NamedIcon, type IconName } from "@/components/icons";

// Learn-hub cards that exist ONLY in the StudyLah app (they use the camera and
// microphone). On the web they render nothing, so the hub grid is identical to
// before; in the native shell they slot in alongside the other tools.
const NATIVE_TOOLS: {
  href: string;
  icon: IconName;
  name: string;
  blurb: string;
  tint: string;
  badge?: string;
}[] = [
  {
    href: "/account/tutor",
    icon: "chat",
    name: "Guru Tutor",
    blurb: "Your 1-to-1 tutor: teach, practise, mark, plan",
    tint: "from-sky-500/25 to-violet-600/10",
    badge: "NEW",
  },
  {
    href: "/account/life",
    icon: "sparkle",
    name: "Life Skills",
    blurb: "Money, confidence, and the stuff school skips",
    tint: "from-emerald-500/25 to-violet-600/10",
    badge: "NEW",
  },
  {
    href: "/account/scan",
    icon: "camera",
    name: "Snap & Teach",
    blurb: "Photograph a question, Guru teaches it",
    tint: "from-violet-500/25 to-fuchsia-600/10",
    badge: "NEW",
  },
  {
    href: "/account/oral",
    icon: "mic",
    name: "Oral Skills",
    blurb: "Hear it, read it aloud, get your pronunciation scored",
    tint: "from-rose-500/25 to-violet-600/10",
    badge: "NEW",
  },
];

export function NativeToolCards() {
  const native = useNativePlatform();
  if (native === null) return null;
  return (
    <>
      {NATIVE_TOOLS.map((t) => (
        <Link
          key={t.href}
          href={t.href}
          className={`glass group relative overflow-hidden bg-gradient-to-br p-4 transition-transform hover:-translate-y-0.5 ${t.tint}`}
        >
          {t.badge && (
            <span className="absolute right-3 top-3 rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-bold tracking-wide text-ink">
              {t.badge}
            </span>
          )}
          <span className="icon-orb text-accent" aria-hidden>
            <NamedIcon name={t.icon} size={20} />
          </span>
          <p className="mt-3 font-display text-base font-bold text-ink">{t.name}</p>
          <p className="mt-0.5 text-xs leading-relaxed text-body">{t.blurb}</p>
          <span
            className="mt-2 inline-block text-xs font-bold text-accent opacity-0 transition-opacity group-hover:opacity-100"
            aria-hidden
          >
            Open →
          </span>
        </Link>
      ))}
    </>
  );
}
