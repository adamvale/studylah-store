"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNativePlatform } from "@/lib/native";
import { AccountNav } from "@/components/account-nav";
import { GhostCompanion, PlayerHeader } from "@/components/game";
import { InstallPrompt } from "@/components/pwa";
import { FxLayer } from "@/components/game-fx";
import { hud, useHud, emitFx } from "@/lib/game/fx";
import { useSoundMuted, setSoundMuted } from "@/lib/game/sound";
import {
  IconMissions,
  IconWorld,
  IconBattle,
  IconBestiary,
  IconMore,
  IconSound,
  IconShield,
} from "@/components/pixel-icons";

// The account area has two faces. On the web it's the familiar Study HQ
// dashboard. Inside the Capacitor shell it becomes a GAME APP: the site
// chrome disappears (header returns null there) and this component renders a
// HUD — living ghost, level, animated XP bar, streak flame, shields — with a
// pixel-icon bottom tab bar and the FxLayer (fly-ups, ceremonies, SFX).
// Same pages, same server data; only the shell changes, so everything still
// ships server-side with no store re-review.

export interface PlayerHud {
  level: number;
  title: string;
  intoLevel: number;
  needed: number;
  progressPct: number;
}

const TABS = [
  { href: "/account", label: "Missions", Icon: IconMissions },
  { href: "/account/adventure", label: "World", Icon: IconWorld },
  { href: "/account/practice", label: "Battle", Icon: IconBattle },
  { href: "/account/mistakes", label: "Bestiary", Icon: IconBestiary },
  { href: "/account/more", label: "More", Icon: IconMore },
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

function GameHud({
  player,
  streak,
  todayDone,
  shields,
}: {
  player: PlayerHud;
  streak: number;
  todayDone: boolean;
  shields: number;
}) {
  const live = useHud();
  const muted = useSoundMuted();
  const level = live?.level ?? player.level;
  const title = live?.title ?? player.title;
  const intoLevel = live?.intoLevel ?? player.intoLevel;
  const needed = live?.needed ?? player.needed;
  const progressPct = live?.progressPct ?? player.progressPct;
  const flameAtRisk = streak > 0 && !todayDone;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-hairline bg-night/95 pt-[env(safe-area-inset-top)] backdrop-blur">
      <div className="flex h-14 items-center gap-3 px-4">
        <Link href="/account/progress" aria-label="Your stats" className="ghost-bob shrink-0">
          <GhostCompanion level={level} size={38} />
        </Link>
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-2">
            <span className="rounded bg-accent/15 px-1.5 py-0.5 font-pixel text-[9px] text-accent">
              LV{level}
            </span>
            <span className="truncate font-display text-sm font-bold text-ink">{title}</span>
            {shields > 0 && (
              <span
                className="inline-flex items-center gap-0.5 text-trust"
                aria-label={`${shields} streak shield${shields === 1 ? "" : "s"}`}
              >
                <IconShield size={12} />
                <span className="font-pixel text-[9px]">{shields}</span>
              </span>
            )}
          </p>
          <div className="mt-1 flex items-center gap-2">
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface">
              <span
                className="xp-fill block h-full rounded-full bg-accent"
                style={{ width: `${progressPct}%` }}
              />
            </span>
            <span className="shrink-0 font-pixel text-[8px] text-body">
              {intoLevel}/{needed}
            </span>
          </div>
        </div>
        <span
          className={`shrink-0 font-pixel text-[11px] ${
            flameAtRisk ? "flame-risk text-accent" : streak > 0 ? "text-accent" : "text-body opacity-50"
          }`}
          aria-label={`${streak}-day streak${flameAtRisk ? " — at risk, practise today" : ""}`}
          title={flameAtRisk ? "Today keeps the streak alive!" : undefined}
        >
          🔥{streak}
        </span>
        <button
          type="button"
          onClick={() => setSoundMuted(!muted)}
          aria-label={muted ? "Unmute sounds" : "Mute sounds"}
          className={`shrink-0 ${muted ? "text-body opacity-50" : "text-body"}`}
        >
          <IconSound muted={muted} size={16} />
        </button>
      </div>
    </header>
  );
}

function GameTabs() {
  const pathname = usePathname() ?? "";
  return (
    <nav
      aria-label="Game"
      data-bottom-cta=""
      className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-night/95 pb-[env(safe-area-inset-bottom)] backdrop-blur"
    >
      <div className="grid grid-cols-5">
        {TABS.map(({ href, label, Icon }) => {
          const active = tabActive(href, pathname);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              onClick={() => emitFx({ type: "blip" })}
              className="relative flex flex-col items-center gap-1 pb-2 pt-2.5"
            >
              {active && (
                <span className="absolute inset-x-4 top-0 h-0.5 rounded-full bg-accent" />
              )}
              <Icon size={20} className={active ? "text-accent" : "text-body opacity-60"} />
              <span
                className={`font-pixel text-[7px] tracking-wide ${
                  active ? "text-accent" : "text-body opacity-70"
                }`}
              >
                {label.toUpperCase()}
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
  todayDone,
  shields,
  children,
}: {
  email: string;
  player: PlayerHud;
  streak: number;
  todayDone: boolean;
  shields: number;
  children: React.ReactNode;
}) {
  const native = useNativePlatform();

  // Seed the client-side HUD store from the server's numbers so XP awards
  // animate from the right baseline. (External store, not React state.)
  useEffect(() => {
    hud.init(player.level, player.intoLevel);
  }, [player.level, player.intoLevel]);

  if (native) {
    return (
      <div className="min-h-dvh">
        <GameHud player={player} streak={streak} todayDone={todayDone} shields={shields} />
        <main className="px-4 pb-[calc(84px+env(safe-area-inset-bottom))] pt-[calc(76px+env(safe-area-inset-top))]">
          <div className="mx-auto max-w-3xl">{children}</div>
        </main>
        <GameTabs />
        <FxLayer />
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
