"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getSubject, PUBLISHED_LEVELS, type Level, type Tier } from "./catalogue";
import type { CartItem } from "./pricing";

const STORAGE_KEY = "studylah-cart-v1";

interface CartContextValue {
  items: CartItem[];
  // False until the cart has been read from localStorage, so server and first
  // client render agree (avoids hydration mismatches on the count badge).
  ready: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (level: Level, subjectSlug: string) => void;
  setTier: (level: Level, subjectSlug: string, tier: Tier) => void;
  clear: () => void;
  count: number;
}

const CartContext = createContext<CartContextValue | null>(null);

function isCartItem(value: unknown): value is CartItem {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    // A cart saved before a level was unpublished would otherwise fail
    // checkout with an opaque error. Drop those items on load instead.
    PUBLISHED_LEVELS.includes(v.level as Level) &&
    typeof v.subjectSlug === "string" &&
    getSubject(v.level as Level, v.subjectSlug as string) !== undefined &&
    (v.tier === "essential" || v.tier === "strategic" || v.tier === "master")
  );
}

function readStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isCartItem) : [];
  } catch {
    // Corrupt storage: start with an empty cart.
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  // Lazy initializer reads localStorage once. `ready` stays false until after
  // mount so the count badge renders 0 on the server and first client render
  // (avoiding a hydration mismatch), then reveals the real count.
  const [items, setItems] = useState<CartItem[]>(readStoredCart);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // One-time "has mounted" flag (see initializer comment above).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage full or unavailable: cart still works in memory.
    }
  }, [items, ready]);

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => {
      const rest = prev.filter(
        (i) => !(i.level === item.level && i.subjectSlug === item.subjectSlug)
      );
      return [...rest, item];
    });
  }, []);

  const removeItem = useCallback((level: Level, subjectSlug: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.level === level && i.subjectSlug === subjectSlug))
    );
  }, []);

  const setTier = useCallback((level: Level, subjectSlug: string, tier: Tier) => {
    setItems((prev) =>
      prev.map((i) =>
        i.level === level && i.subjectSlug === subjectSlug ? { ...i, tier } : i
      )
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  return (
    <CartContext.Provider
      value={{
        items,
        ready,
        addItem,
        removeItem,
        setTier,
        clear,
        count: ready ? items.length : 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
