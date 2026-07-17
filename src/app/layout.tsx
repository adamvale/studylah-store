import type { Metadata, Viewport } from "next";
import { Archivo, Inter, Plus_Jakarta_Sans, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { PricingProvider } from "@/lib/pricing-context";
import { getEarlyBird, getPricingTable } from "@/lib/server/pricing-store";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SiteChrome } from "@/components/site-chrome";
import { Analytics } from "@/components/analytics";
import { VisitorTracker } from "@/components/visitor-tracker";
import { RefCapture } from "@/components/ref-capture";
import { SwRegister, NativePushBridge } from "@/components/pwa";

// PWA chrome: the browser UI matches the night theme, and the installed app
// gets a proper title + status bar on iOS.
export const viewport: Viewport = {
  themeColor: "#0c0920",
  // Let content extend under the iPhone notch/home bar; the native game
  // shell pads with env(safe-area-inset-*) itself.
  viewportFit: "cover",
};

// Runs before first paint (parser-blocking): stamps html[data-native] when
// the page is inside the Capacitor shell (or the dev override is set), so
// the game-shell CSS applies with zero flash of website chrome. Capacitor
// injects window.Capacitor at document start, ahead of any page script.
// ?native=ios|android persists the game-app preview in any browser (demos,
// support, playtesting); ?native=off clears it. The real shell needs no
// param, Capacitor injects window.Capacitor.
const NATIVE_STAMP = `(function(){try{var q=new URLSearchParams(location.search).get("native");if(q==="off")localStorage.removeItem("studylah_native");else if(q==="ios"||q==="android")localStorage.setItem("studylah_native",q);var o=localStorage.getItem("studylah_native");if(o==="ios"||o==="android"){document.documentElement.setAttribute("data-native",o);return}}catch(e){}var c=window.Capacitor;if(c&&c.isNativePlatform&&c.isNativePlatform()){var p=c.getPlatform?c.getPlatform():"app";document.documentElement.setAttribute("data-native",p)}})();`;

// Type pairing borrowed from the live site: Inter for body/UI, Archivo for
// bold display headings.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Plus Jakarta Sans powers the StudyLand app theme (the reference design's
// rounded humanist look); scoped via the .studyland wrapper class.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

// The game voice: used ONLY for numbers and short game labels (HUD, level-up
// ceremony, tab bar), body text stays Inter for readability.
const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.studylah.education"),
  title: {
    default: "StudyLah!, Study Less, Score More.",
    template: "%s · StudyLah!",
  },
  description:
    "AI exam forecasts, original practice questions, and full timed rehearsals for the Singapore-Cambridge O-Level and N(A)-Level. Built from 10 years of real exam data.",
  // Social share cards, referral links travel by WhatsApp/Telegram, and a
  // branded unfurl converts far better than a bare grey URL.
  // Share card comes from the code-generated app/opengraph-image.tsx (which
  // also populates twitter:image). Don't set images here too, or Next emits a
  // duplicate og:image tag alongside the generated one.
  openGraph: {
    siteName: "StudyLah!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icons/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "StudyLah",
  },
};

// Entity card for search + AI answer engines: who runs the site, what it is,
// and the honest positioning ("independent publisher") in machine-readable form.
const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.studylah.education/#org",
      name: "StudyLah Education",
      url: "https://www.studylah.education",
      logo: "https://www.studylah.education/studylah-logo.png",
      slogan: "Study Less, Score More.",
      description:
        "Independent Singapore publisher of data-driven exam forecasts, original practice questions and timed rehearsals for the Singapore-Cambridge O-Level and N(A)-Level. Not affiliated with SEAB, MOE, or Cambridge (UCLES).",
      email: "hello@studylah.education",
      areaServed: "SG",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.studylah.education/#website",
      url: "https://www.studylah.education",
      name: "StudyLah!",
      publisher: { "@id": "https://www.studylah.education/#org" },
    },
  ],
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
      className={`${inter.variable} ${archivo.variable} ${jakarta.variable} ${pressStart.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script dangerouslySetInnerHTML={{ __html: NATIVE_STAMP }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-night"
        >
          Skip to content
        </a>
        <RefCapture />
        <SwRegister />
        <NativePushBridge />
        <Analytics />
        <VisitorTracker />
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
