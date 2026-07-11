"use client";

import { useHideCommerce } from "@/lib/native";

// Wraps purchase/cash-reward surfaces. On the web: renders children. In the
// native app: renders a pointer to the website instead (Apple reader-app
// rule — we can state where the account is managed, but not link a store).
export function CommerceGate({ children }: { children: React.ReactNode }) {
  const hide = useHideCommerce();
  if (!hide) return <>{children}</>;
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-8 text-center">
      <p className="font-display text-lg font-bold text-ink">
        Manage subjects on the website
      </p>
      <p className="mt-2 text-sm text-body">
        Adding subjects and account extras are handled at studylah.education in
        your browser. Everything you already own is right here in the app.
      </p>
    </div>
  );
}
