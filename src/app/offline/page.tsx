import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offline",
  robots: { index: false, follow: false },
};

// The service worker serves this cached page when a navigation fails with no
// network. Static by design — it must render with zero data.
export default function OfflinePage() {
  return (
    <div className="mx-auto max-w-md px-4 py-24 text-center">
      <p aria-hidden="true" className="text-5xl">
        📡
      </p>
      <h1 className="mt-4 font-display text-3xl font-black text-ink">
        No connection
      </h1>
      <p className="mt-3 text-body">
        Study HQ needs the internet — your questions are marked on our servers
        so answers can&apos;t leak. Once you&apos;re back online, pull to
        refresh and today&apos;s mission will be waiting.
      </p>
      <p className="mt-6 text-sm text-body">
        Meanwhile: your downloaded PDFs still work. The forecast doesn&apos;t
        need wifi. 📚
      </p>
    </div>
  );
}
