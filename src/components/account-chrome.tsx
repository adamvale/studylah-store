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

// The account area has two faces. On the web it's the familiar StudyLand
// dashboard. Inside the Capacitor shell it becomes a GAME APP: the site
// chrome disappears (header returns null there) and this component renders a
// HUD, living ghost, level, animated XP bar, streak flame, shields, with a
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
          aria-label={`${streak}-day streak${flameAtRisk ? ", at risk, practise today" : ""}`}
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
  isMaster,
  player,
  streak,
  todayDone,
  shields,
  children,
}: {
  email: string;
  isMaster: boolean;
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

  if (native && isMaster) {
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

  // ── The web dashboard, StudyLand app theme ──────────────────────────────
  // Mobile-app-first: ambient gradient backdrop, glass chrome, and a bottom
  // tab bar on phones (hidden from md up, where the top nav pills take over).
  return (
    <div className="studyland min-h-dvh">
      <div className="sl-bg" aria-hidden />
      <div className="mx-auto max-w-3xl px-4 pb-24 pt-8 md:pb-12 md:pt-12">
        {/* print:hidden, printed pages (e.g. the rescue plan) keep content only */}
        <div className="flex items-center justify-between gap-3 print:hidden">
          <div className="flex min-w-0 items-center gap-3">
            <span className="icon-orb shrink-0" aria-hidden>
              <GhostCompanion level={player.level} size={30} />
            </span>
            <div className="min-w-0">
              <p className="truncate font-display text-xl font-extrabold tracking-tight text-ink">
                Study<span className="text-accent">Land</span>
              </p>
              <p className="truncate text-xs text-body">{email}</p>
            </div>
          </div>
          <form action="/api/account/logout" method="post" className="shrink-0">
            <button
              type="submit"
              className="chip hover:border-accent/60"
              aria-label="Sign out"
            >
              Sign out
            </button>
          </form>
        </div>

        <div className="mt-4 print:hidden">
          <PlayerHeader
            level={player.level}
            title={player.title}
            intoLevel={player.intoLevel}
            needed={player.needed}
            progressPct={player.progressPct}
            streak={streak}
          />
        </div>

        {/* Top nav pills, desktop + tablet; phones use the bottom bar */}
        <div className="hidden print:hidden md:block">
          <AccountNav isMaster={isMaster} />
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
      <WebTabBar isMaster={isMaster} />
    </div>
  );
}

// ── The phone bottom tab bar (web, app-style) ───────────────────────────────
// Five thumb-reach destinations, exactly like the reference app: Today,
// Learn (the tool hub), Progress, the game, and Account. Master-gated pages
// collapse for non-Master buyers.
const WEB_TABS = [
  { href: "/account", label: "Today", d: "M4 11.5 12 4l8 7.5M6 10v9h4v-5h4v5h4v-9" },
  { href: "/account/learn", label: "Learn", d: "M4 6.5C6.5 5 9.5 5 12 6.5c2.5-1.5 5.5-1.5 8 0V18c-2.5-1.5-5.5-1.5-8 0-2.5-1.5-5.5-1.5-8 0V6.5ZM12 6.5V18" },
  { href: "/account/progress", label: "Progress", d: "M4 19h16M7 19v-6m5 6V9m5 10v-9" },
  { href: "/account/adventure", label: "Legends", d: "M7 8h10a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4h-1l-2-2h-4l-2 2H7a4 4 0 0 1-4-4v-1a4 4 0 0 1 4-4Zm1.5 3.5v3M6 13h3m6.5-.5h.01M18 14h.01" },
  { href: "/account/orders", label: "Account", d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" },
];

function WebTabBar({ isMaster }: { isMaster: boolean }) {
  const pathname = usePathname() ?? "";
  const native = useNativePlatform();
  if (native) return null; // the native shell has its own game tab bar
  const tabs = isMaster
    ? WEB_TABS
    : WEB_TABS.filter((t) => t.href === "/account/orders").concat([
        { href: "/account/unlock", label: "Unlock", d: "M7 10V8a5 5 0 0 1 10 0v2m-11 0h12v9H6v-9Zm6 3v3" },
      ]);
  return (
    <nav
      aria-label="StudyLand"
      data-bottom-cta=""
      className="fixed inset-x-3 bottom-3 z-40 rounded-3xl border border-hairline bg-night-2/80 backdrop-blur-xl md:hidden print:hidden"
      style={{ paddingBottom: "max(env(safe-area-inset-bottom) - 0.5rem, 0px)" }}
    >
      <div className={`grid ${tabs.length === 2 ? "grid-cols-2" : "grid-cols-5"}`}>
        {tabs.map(({ href, label, d }) => {
          const active =
            href === "/account" ? pathname === "/account" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className="relative flex flex-col items-center gap-0.5 py-2.5"
            >
              {active && (
                <span className="absolute inset-x-5 top-0 h-0.5 rounded-full bg-accent" aria-hidden />
              )}
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={active ? "text-accent" : "text-body opacity-70"}
                aria-hidden
              >
                <path d={d} />
              </svg>
              <span
                className={`text-[10px] font-semibold ${
                  active ? "text-accent" : "text-body opacity-80"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
