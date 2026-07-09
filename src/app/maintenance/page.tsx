import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "We'll be right back — StudyLah",
  robots: { index: false, follow: false },
};

// Rendered via the proxy rewrite when maintenance mode is on. A fixed, full-
// screen overlay so it covers the storefront header/footer cleanly regardless
// of the URL the visitor requested.
export default function MaintenancePage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-paper px-6 text-center">
      <div className="max-w-md">
        <Image
          src="/studylah-logo.png"
          alt="StudyLah"
          width={286}
          height={97}
          priority
          className="mx-auto h-10 w-auto"
        />
        <h1 className="mt-6 font-display text-4xl font-black tracking-tight text-ink">
          We&apos;re making improvements
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-body">
          StudyLah is briefly offline for scheduled updates. We&apos;ll be back
          very shortly — thank you for your patience.
        </p>
        <p className="mt-6 text-sm text-body">
          Already bought a pack? The download links in your order email still
          work.
        </p>
        <p className="mt-8 text-sm">
          Questions?{" "}
          <a
            href="mailto:hello@studylah.education"
            className="font-medium text-trust underline"
          >
            hello@studylah.education
          </a>
        </p>
      </div>
    </div>
  );
}
