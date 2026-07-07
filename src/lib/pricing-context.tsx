"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { createPricing, type Pricing, type PricingTable } from "./pricing";

const PricingContext = createContext<Pricing | null>(null);

// The server layout reads the live price table + early-bird flag from the
// database and passes them here, so client components (cart, tier selector,
// bundle builder) price with exactly what the storefront and checkout use.
export function PricingProvider({
  table,
  earlyBird,
  children,
}: {
  table: PricingTable;
  earlyBird: boolean;
  children: ReactNode;
}) {
  const pricing = useMemo(
    () => createPricing(table, earlyBird),
    [table, earlyBird]
  );
  return <PricingContext.Provider value={pricing}>{children}</PricingContext.Provider>;
}

export function usePricing(): Pricing {
  const ctx = useContext(PricingContext);
  if (!ctx) throw new Error("usePricing must be used inside PricingProvider");
  return ctx;
}
