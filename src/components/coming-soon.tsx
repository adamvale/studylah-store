import Link from "next/link";
import { EmailCaptureForm } from "./email-capture";

export function ComingSoon({
  name,
  eta,
  detail,
}: {
  name: string;
  eta: string;
  detail?: string;
}) {
  return (
    <div className="mx-auto max-w-xl px-4 py-20">
      <p className="inline-block rounded-full bg-trust-soft px-3 py-1 font-mono text-xs font-medium text-trust">
        Coming {eta}
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold text-ink">{name}</h1>
      <p className="mt-3 text-body">
        Forecasts, question vaults, and rehearsals for {name} are in the works.
        {detail ? ` ${detail}` : ""} Leave your email and you&apos;ll be first
        to know — early-bird pricing included.
      </p>
      <div className="mt-7">
        <EmailCaptureForm source={`waitlist-${name}`} buttonLabel="Join the waitlist" />
      </div>
      <p className="mt-8 text-sm text-body">
        Sitting the O-Level or N(A)-Level in the meantime?{" "}
        <Link href="/o-level" className="font-medium text-trust underline">
          Those forecasts are live now
        </Link>
        .
      </p>
    </div>
  );
}
