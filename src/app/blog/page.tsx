import type { Metadata } from "next";
import Link from "next/link";
import { allPosts } from "@/lib/blog";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "The StudyLah Blog — study smarter for the 2026 papers",
  description:
    "How the forecasts are built, the study science behind Study HQ, and honest guides to revising for the Singapore-Cambridge O-Level and N(A)-Level.",
};

const fmtDate = (iso: string) =>
  new Date(`${iso}T00:00:00+08:00`).toLocaleDateString("en-SG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function BlogIndexPage() {
  const posts = allPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <p className="font-mono text-xs font-medium uppercase tracking-wide text-accent">
        The StudyLah Blog
      </p>
      <h1 className="mt-2 font-display text-4xl font-black text-ink">
        Study smarter, not longer
      </h1>
      <p className="mt-3 max-w-xl text-body">
        How the forecasts are built, the learning science behind Study HQ, and
        straight answers about what works — written for students sitting the
        2026 papers (and the parents backing them).
      </p>

      <div className="mt-10 space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-2xl border border-hairline bg-surface p-6 transition-colors hover:border-accent"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs text-body">
              <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-medium text-accent">
                {post.tag}
              </span>
              <span>
                {fmtDate(post.date)} · {post.readMinutes} min read
              </span>
            </div>
            <h2 className="mt-3 font-display text-xl font-bold text-ink">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-body">{post.description}</p>
            <p className="mt-3 text-sm font-medium text-accent">Read it →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
