"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useHideCommerce } from "@/lib/native";

// StudyLand's nav grew past 11 flat tabs (4 wrapped rows on mobile), so it is
// grouped: two standalone tabs plus two dropdowns. Groups stay small and
// task-shaped: "Study" is the daily work, "Account" is the admin drawer.

type NavLink = { href: string; label: string; blurb?: string };
type NavGroup = { label: string; links: NavLink[] };

const STUDY_GROUP: NavGroup = {
  label: "Study",
  links: [
    { href: "/account/study", label: "Study plan", blurb: "Topic-by-topic plan to exam day" },
    { href: "/account/rescue", label: "Rescue plan", blurb: "Behind? Get a recovery plan" },
    { href: "/account/practice", label: "Practice", blurb: "Daily questions and battles" },
    { href: "/account/mistakes", label: "Mistakes", blurb: "Your mistake notebook" },
    { href: "/account/progress", label: "Progress", blurb: "Stats, streaks and heatmaps" },
    { href: "/account/timer", label: "Timer", blurb: "Focus and rehearsal timers" },
  ],
};

const ACCOUNT_GROUP: NavGroup = {
  label: "Account",
  links: [
    { href: "/account/orders", label: "Orders", blurb: "Your PDFs and receipts" },
    { href: "/account/add-subjects", label: "Add subjects", blurb: "Extend your bundle" },
    { href: "/account/referrals", label: "Refer a friend", blurb: "Share, both of you win" },
    { href: "/account/settings", label: "Settings", blurb: "Email, exam dates, privacy" },
  ],
};

function useOutsideClose(close: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function onDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [close]);
  return ref;
}

function Dropdown({
  group,
  pathname,
  open,
  onToggle,
  onClose,
}: {
  group: NavGroup;
  pathname: string;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const ref = useOutsideClose(onClose);
  const active = group.links.some((l) => pathname.startsWith(l.href));
  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-haspopup="menu"
        className={`-mb-px flex items-center gap-1 border-b-2 px-3 py-2 text-sm font-medium transition-colors ${
          active
            ? "border-accent text-ink"
            : "border-transparent text-body hover:text-ink"
        }`}
      >
        {group.label}
        <svg
          aria-hidden="true"
          viewBox="0 0 12 12"
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      {open && (
        <div
          role="menu"
          // Mobile: centred on the button and clamped to the viewport so it
          // never clips off-screen; sm+: standard left-anchored dropdown.
          className="absolute left-1/2 top-full z-30 mt-1 w-56 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-xl border border-hairline bg-night-2 p-1.5 shadow-xl sm:left-0 sm:w-64 sm:translate-x-0"
        >
          {group.links.map((l) => {
            const current = pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                role="menuitem"
                href={l.href}
                onClick={onClose}
                className={`block rounded-lg px-3 py-2 transition-colors hover:bg-surface ${
                  current ? "bg-surface" : ""
                }`}
              >
                <span
                  className={`block text-sm font-medium ${
                    current ? "text-accent" : "text-ink"
                  }`}
                >
                  {l.label}
                </span>
                {l.blurb && (
                  <span className="block text-xs text-body">{l.blurb}</span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function AccountNav({ isMaster }: { isMaster: boolean }) {
  const pathname = usePathname() ?? "";
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  // Reader-app rule: no purchase surfaces (Add subjects) and no cash-reward
  // surfaces (Refer a friend) inside the native app.
  const hideCommerce = useHideCommerce();

  // Close any open dropdown when the route changes.
  useEffect(() => setOpenMenu(null), [pathname]);

  const accountGroup: NavGroup = {
    ...ACCOUNT_GROUP,
    links: hideCommerce
      ? ACCOUNT_GROUP.links.filter(
          (l) =>
            l.href !== "/account/add-subjects" && l.href !== "/account/referrals"
        )
      : ACCOUNT_GROUP.links,
  };

  // Non-Master buyers: every StudyLand surface is locked, lead with the
  // upgrade prompt and keep only the open pages (orders, settings, commerce).
  const standalone: NavLink[] = isMaster
    ? [
        { href: "/account", label: "Today" },
        { href: "/account/adventure", label: "Adventure" },
      ]
    : [{ href: "/account/unlock", label: "Unlock StudyLand" }];
  const groups: NavGroup[] = isMaster
    ? [STUDY_GROUP, accountGroup]
    : [accountGroup];

  return (
    <nav
      aria-label="Account"
      className="mt-6 flex flex-wrap items-stretch gap-1 border-b border-hairline"
    >
      {standalone.map((link) => {
        const active =
          link.href === "/account"
            ? pathname === "/account"
            : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`-mb-px border-b-2 px-3 py-2 text-sm font-medium transition-colors ${
              active
                ? "border-accent text-ink"
                : "border-transparent text-body hover:text-ink"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
      {groups.map((g) => (
        <Dropdown
          key={g.label}
          group={g}
          pathname={pathname}
          open={openMenu === g.label}
          onToggle={() =>
            setOpenMenu((cur) => (cur === g.label ? null : g.label))
          }
          onClose={() => setOpenMenu(null)}
        />
      ))}
    </nav>
  );
}
