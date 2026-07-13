import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "More" };

// The game shell's fifth tab: everything that isn't a core loop screen.
// Reachable on the web too (it's harmless), but only linked from the native
// bottom bar. Reader-app rule: no purchase or cash-reward surfaces here, 
// subjects and referrals are managed on the website.
const ITEMS: Array<{ href: string; icon: string; title: string; blurb: string }> = [
  {
    href: "/account/study",
    icon: "🏰",
    title: "Campaign",
    blurb: "Your study plan, clear the fog, topic by topic",
  },
  {
    href: "/account/progress",
    icon: "📊",
    title: "Stats",
    blurb: "Marks at risk, score history, badges",
  },
  {
    href: "/account/timer",
    icon: "⏱️",
    title: "Focus timer",
    blurb: "Timed rehearsals and pomodoro sprints",
  },
  {
    href: "/account/orders",
    icon: "🎁",
    title: "Loot",
    blurb: "Your packs, every PDF you own",
  },
  {
    href: "/account/settings",
    icon: "⚙️",
    title: "Settings",
    blurb: "Reminders, parent digest, email",
  },
  {
    href: "/blog",
    icon: "📜",
    title: "The Signal",
    blurb: "Exam-season intel from the StudyLah desk",
  },
];

export default function MorePage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2">
        {ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-4 rounded-2xl border border-hairline bg-surface p-4 transition-colors hover:border-accent/50"
          >
            <span className="text-3xl" aria-hidden>
              {item.icon}
            </span>
            <span className="min-w-0">
              <span className="block font-display text-base font-bold text-ink">
                {item.title}
              </span>
              <span className="mt-0.5 block text-xs text-body">{item.blurb}</span>
            </span>
          </Link>
        ))}
      </div>

      <p className="text-xs text-body">
        Subjects and referrals are managed on the StudyLah website.
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-5">
        <p className="text-xs text-body">
          <Link href="/legal/privacy" className="underline hover:text-ink">
            Privacy
          </Link>{" "}
          ·{" "}
          <Link href="/legal/terms" className="underline hover:text-ink">
            Terms
          </Link>{" "}
          ·{" "}
          <a href="mailto:hello@studylah.education" className="underline hover:text-ink">
            hello@studylah.education
          </a>
        </p>
        <form action="/api/account/logout" method="post">
          <button
            type="submit"
            className="rounded-lg border border-hairline px-4 py-2 text-sm font-medium text-body hover:text-ink"
          >
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
}
