import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCustomerId } from "@/lib/server/customer-session";
import { requireMaster } from "@/lib/server/entitlements";
import { isFeatureClosed, type GatedFeature } from "@/lib/feature-gates";
import { NamedIcon, type IconName } from "@/components/icons";
import { NativeToolCards } from "@/components/native-tool-cards";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Learn" };

// The Learn hub: every study tool as one tappable card, the app-style
// explore screen that replaced the old 10-item dropdown. Each card is a
// bite-sized doorway; the tools themselves do one thing per screen.

const TOOLS: {
  href: string;
  emoji: string;
  name: string;
  blurb: string;
  tint: string; // gradient tint per card, the reference's colour variety
  badge?: string;
  feature?: GatedFeature; // gated tools drop out of the grid while closed
}[] = [
  {
    href: "/account/learn/tuition",
    emoji: "book",
    name: "Tuition",
    blurb: "Your subjects, taught topic by topic",
    tint: "from-indigo-400/25 to-violet-600/10",
    badge: "NEW",
    feature: "tuition",
  },
  {
    href: "/account/fasttrack",
    emoji: "target",
    name: "FastTrack",
    blurb: "Answer the way examiners award marks",
    tint: "from-fuchsia-500/25 to-violet-600/10",
    badge: "NEW",
  },
  {
    href: "/account/drills",
    emoji: "bolt",
    name: "Drills",
    blurb: "Definitions, formulas, structured answers",
    tint: "from-amber-400/20 to-violet-600/10",
  },
  {
    href: "/account/practical",
    emoji: "flask",
    name: "Practical Lab",
    blurb: "Train the science practical paper",
    tint: "from-teal-400/20 to-violet-600/10",
    badge: "NEW",
    feature: "practical",
  },
  {
    href: "/account/practice",
    emoji: "swords",
    name: "Practice",
    blurb: "Daily questions and battles",
    tint: "from-sky-400/20 to-violet-600/10",
  },
  {
    href: "/account/study",
    emoji: "map",
    name: "Study plan",
    blurb: "Topic-by-topic to exam day",
    tint: "from-emerald-400/20 to-violet-600/10",
  },
  {
    href: "/account/mistakes",
    emoji: "ghost",
    name: "Mistakes",
    blurb: "The bestiary of marks to win back",
    tint: "from-rose-400/25 to-violet-600/10",
  },
  {
    href: "/account/timer",
    emoji: "timer",
    name: "Timer",
    blurb: "Focus sessions and rehearsals",
    tint: "from-cyan-400/20 to-violet-600/10",
  },
  {
    href: "/account/rescue",
    emoji: "lifebuoy",
    name: "Rescue plan",
    blurb: "Behind? A day-by-day recovery",
    tint: "from-orange-400/20 to-violet-600/10",
  },
  {
    href: "/account/warroom",
    emoji: "castle",
    name: "War Room",
    blurb: "The final week, paper by paper",
    tint: "from-indigo-400/25 to-violet-600/10",
  },
  // Legends is not listed here: it has its own slot in the bottom tab bar, so a
  // card would only be a second door to the same room.
];

export default async function LearnHubPage() {
  const customerId = await getCustomerId();
  if (!customerId) redirect("/account/login");
  await requireMaster(customerId);

  return (
    <div>
      <PageHeading description="Every tool does one job. Pick one, do one bite, come back tomorrow.">
        Learn <span className="sl-grad-text">your way</span>
      </PageHeading>

      <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
        <NativeToolCards />
        {TOOLS.filter((t) => !t.feature || !isFeatureClosed(t.feature)).map((t) => (
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
              <NamedIcon name={t.emoji as IconName} size={20} />
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
      </div>
    </div>
  );
}
