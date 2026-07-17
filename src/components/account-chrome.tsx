"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AccountNav } from "@/components/account-nav";
import { GhostCompanion, PlayerHeader } from "@/components/game";
import { FxLayer } from "@/components/game-fx";
import { hud } from "@/lib/game/fx";

// One StudyLand shell for every surface. The web dashboard and the Capacitor
// app render the exact same chrome: gradient backdrop, glass header, player
// bar, and the bottom tab bar on phones. The FxLayer keeps XP fly-ups and
// level ceremonies everywhere. Everything still ships server-side.

export interface PlayerHud {
  level: number;
  title: string;
  intoLevel: number;
  needed: number;
  progressPct: number;
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
  // Seed the client-side HUD store from the server's numbers so XP awards
  // animate from the right baseline. (External store, not React state.)
  useEffect(() => {
    hud.init(player.level, player.intoLevel);
  }, [player.level, player.intoLevel]);
  void todayDone;
  void shields;

  // Mobile-app-first: ambient gradient backdrop, glass chrome, and a bottom
  // tab bar on phones (hidden from md up, where the top nav pills take over).
  return (
    <div className="studyland min-h-dvh">
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

        <div className="mt-6">{children}</div>

        <p className="mt-10 text-xs text-body print:hidden">
          iOS and Android app coming. Trouble with anything?{" "}
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
      <FxLayer />
    </div>
  );
}

// ── The phone bottom tab bar (app-style) ────────────────────────────────────
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
