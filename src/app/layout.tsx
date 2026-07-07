import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { PricingProvider } from "@/lib/pricing-context";
import { getEarlyBird, getPricingTable } from "@/lib/server/pricing-store";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SiteChrome } from "@/components/site-chrome";

// Type pairing borrowed from the live site: Inter for body/UI, Archivo for
// bold display headings.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "StudyLah! — Study Less, Score More.",
    template: "%s · StudyLah!",
  },
  description:
    "AI exam forecasts, original practice questions, and full timed rehearsals for the Singapore-Cambridge O-Level and N(A)-Level. Built from 10 years of real exam data.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [table, earlyBird] = await Promise.all([getPricingTable(), getEarlyBird()]);
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <PricingProvider table={table} earlyBird={earlyBird}>
          <CartProvider>
            <SiteChrome header={<Header />} footer={<Footer />}>
              {children}
            </SiteChrome>
          </CartProvider>
        </PricingProvider>
      </body>
    </html>
  );
}
