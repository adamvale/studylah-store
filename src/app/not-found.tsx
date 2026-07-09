import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <p className="font-mono text-sm font-medium text-teal">404</p>
      <h1 className="mt-2 font-display text-3xl font-bold text-ink">
        This page isn&apos;t on the syllabus
      </h1>
      <p className="mt-3 text-body">
        The page you&apos;re after doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-trust px-5 py-3 text-sm font-medium text-white hover:bg-trust-deep"
        >
          Go home
        </Link>
        <Link
          href="/o-level"
          className="rounded-lg border border-hairline bg-surface px-5 py-3 text-sm font-medium text-accent hover:border-hairline"
        >
          Browse subjects
        </Link>
      </div>
    </div>
  );
}
