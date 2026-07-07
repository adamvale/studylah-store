"use client";

import { useEffect } from "react";
import { useCart } from "@/lib/cart-context";

// Rendered on the post-payment success page: the order exists, so the local
// cart has served its purpose.
export function ClearCartOnMount() {
  const { clear, ready } = useCart();
  useEffect(() => {
    if (ready) clear();
  }, [ready, clear]);
  return null;
}
