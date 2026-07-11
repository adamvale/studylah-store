"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNativePlatform } from "@/lib/native";
import { AccountNav } from "@/components/account-nav";
import { GhostCompanion, PlayerHeader } from "@/components/game";
import { InstallPrompt } from "@/components/pwa";

// The account area has two faces. On the web it's the familiar Study HQ
// dashboard. Inside the Capacitor shell it becomes a GAME APP: the site
// chrome disappears (header returns null there) and this component renders a
// HUD — ghost companion, level, XP bar, streak — with a game-style bottom tab
// bar. Same pages, same server data; only the shell around them changes, so
// the whole experience still ships server-side with no store re-review.

export interface PlayerHud {
  level: number;
  title: string;
  intoLevel: number;
  needed: number;
  progressPct: number;
}

const TABS = [
  { href: "/account", label: "Missions", icon: "🎯" },
  { href: "/account/adventure", label: "World", icon: "🗺️" },
  { href: "/account/practice", label: "Battle", icon: "⚔️" },
  { href: "/account/mistakes", label: "Bestiary", icon: "👾" },
  { href: "/account/more", label: "More", icon: "🎒" },
];

function tabActive(href: string, pathname: string): boolean {
  if (href === "/account") return pathname === "/account";
  if (href === "/account/more") {
    // "More" owns every screen that isn't a tab of its own.
    return (
      pathname.startsWith("/account/more") ||
      ["/account/study", "/account/progress", "/account/timer", "/account/orders", "/account/settings", "/account/rescue"].some(
        (p) => pathname.startsWith(p)
      )
    );
  }
  return pathname.startsWith(href);
}

function GameHud({ player, streak }: { player: PlayerHud; streak: number }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-hairline bg-night/95 pt-[env(safe-area-inset-top)] backdrop-blur">
      <div className="flex h-14 items-center gap-3 px-4">
        <Link href="/account/progress" aria-label="Your stats" className="shrink-0">
          <GhostCompanion level={player.level} size={38} />
        </Link>
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-2">
            <span className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[11px] font-bold text-accent">
              Lv {player.level}
            </span>
            <span className="truncate font-display text-sm font-bold text-ink">
              {player.title}
            </span>
          </p>
          <div className="mt-1 flex items-center gap-2">
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface">
              <span
                className="block h-full rounded-full bg-accent"
                style={{ width: `${player.progressPct}%` }}
              />
            </span>
            <span className="shrink-0 font-mono text-[10px] text-body">
              {player.intoLevel}/{player.needed}
            </span>
          </div>
        </div>
        <span
          className={`shrink-0 font-mono text-sm font-bold ${
            streak > 0 ? "text-accent" : "text-body opacity-60"
          }`}
          aria-label={`${streak}-day streak`}
        >
          🔥{streak}
        </span>
      </div>
    </header>
  );
}

function GameTabs() {
  const pathname = usePathname() ?? "";
  return (
    <nav
      aria-label="Game"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-night/95 pb-[env(safe-area-inset-bottom)] backdrop-blur"
    >
      <div className="grid grid-cols-5">
        {TABS.map((tab) => {
          const active = tabActive(tab.href, pathname);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={active ? "page" : undefined}
              className="relative flex flex-col items-center gap-0.5 pb-2 pt-2.5"
            >
              {active && (
                <span className="absolute inset-x-4 top-0 h-0.5 rounded-full bg-accent" />
              )}
              <span
                className={`text-xl leading-none ${active ? "" : "opacity-45 grayscale"}`}
                aria-hidden
              >
                {tab.icon}
              </span>
              <span
                className={`font-mono text-[10px] font-medium ${
                  active ? "text-accent" : "text-body"
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function AccountChrome({
  email,
  player,
  streak,
  children,
}: {
  email: string;
  player: PlayerHud;
  streak: number;
  children: React.ReactNode;
}) {
  const native = useNativePlatform();

  if (native) {
    return (
      <div className="min-h-dvh">
        <GameHud player={player} streak={streak} />
        <main className="px-4 pb-[calc(84px+env(safe-area-inset-bottom))] pt-[calc(76px+env(safe-area-inset-top))]">
          <div className="mx-auto max-w-3xl">{children}</div>
        </main>
        <GameTabs />
      </div>
    );
  }

  // The web dashboard, unchanged.
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      {/* print:hidden — printed pages (e.g. the rescue plan) keep only content */}
      <div className="flex flex-wrap items-start justify-between gap-4 print:hidden">
        <div>
          <h1 className="font-display text-4xl font-bold text-ink">
            Study <span className="text-accent">HQ</span>
          </h1>
          <p className="mt-1 text-sm text-body">
            Your PDFs, plan, practice and progress — signed in as{" "}
            <span className="font-medium text-ink">{email}</span>
          </p>
          <div className="mt-3">
            <PlayerHeader
              level={player.level}
              title={player.title}
              intoLevel={player.intoLevel}
              needed={player.needed}
              progressPct={player.progressPct}
              streak={streak}
            />
          </div>
        </div>
        <form action="/api/account/logout" method="post">
          <button
            type="submit"
            className="rounded-lg border border-hairline px-4 py-2 text-sm font-medium text-body hover:text-ink"
          >
            Sign out
          </button>
        </form>
      </div>

      <div className="print:hidden">
        <AccountNav />
      </div>

      <div className="mt-6">
        <InstallPrompt />
        {children}
      </div>

      <p className="mt-10 text-xs text-body print:hidden">
        Every PDF is watermarked to your email and order number. Trouble with
        anything?{" "}
        <a
          href="mailto:hello@studylah.education"
          className="font-medium text-accent underline"
        >
          hello@studylah.education
        </a>
        .
      </p>
    </div>
  );
}
