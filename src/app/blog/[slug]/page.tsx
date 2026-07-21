import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts, getPost, type BlogBlock } from "@/lib/blog";

export function generateStaticParams() {
  return allPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    alternates: { canonical: `/blog/${post.slug}` },
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

const fmtDate = (iso: string) =>
  new Date(`${iso}T00:00:00+08:00`).toLocaleDateString("en-SG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

function Block({ block }: { block: BlogBlock }) {
  switch (block.kind) {
    case "p":
      return <p className="mt-5 leading-relaxed text-body">{block.text}</p>;
    case "h2":
      return (
        <h2 className="mt-9 font-display text-2xl font-bold text-ink">{block.text}</h2>
      );
    case "ul":
      return (
        <ul className="mt-5 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-body">
              <span aria-hidden="true" className="mt-0.5 text-accent">
                →
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <p className="mt-6 rounded-2xl border border-accent/40 bg-surface p-5 text-ink">
          {block.text}
        </p>
      );
    case "cta":
      return (
        <div className="mt-8 rounded-2xl border border-hairline bg-surface p-5">
          <Link
            href={block.href}
            className="inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
          >
            {block.label}
          </Link>
          {block.note && <p className="mt-2 text-xs text-body">{block.note}</p>}
        </div>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "StudyLah Education" },
    publisher: { "@type": "Organization", name: "StudyLah Education" },
    mainEntityOfPage: `https://www.studylah.education/blog/${post.slug}`,
    ...(post.heroImage
      ? { image: `https://www.studylah.education${post.heroImage}` }
      : {}),
  };

  const others = allPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-2xl px-4 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link href="/blog" className="text-xs font-medium text-accent hover:underline">
        ← All posts
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-body">
        <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-medium text-accent">
          {post.tag}
        </span>
        <span>
          {fmtDate(post.date)} · {post.readMinutes} min read
        </span>
      </div>
      <h1 className="mt-3 font-display text-3xl font-black leading-tight text-ink sm:text-4xl">
        {post.title}
      </h1>

      {post.heroImage && (
        <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-hairline">
          <Image
            src={post.heroImage}
            alt={post.heroAlt ?? post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
          />
        </div>
      )}

      <article>
        {post.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </article>

      <hr className="mt-12 border-hairline" />

      {others.length > 0 && (
        <div className="mt-8">
          <p className="font-display text-lg font-bold text-ink">Keep reading</p>
          <ul className="mt-3 space-y-2">
            {others.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="text-sm font-medium text-accent hover:underline"
                >
                  {p.title} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="mt-10 text-xs text-body/70">
        StudyLah Education is an independent publisher and is not affiliated
        with, endorsed by, or connected to SEAB, MOE, or Cambridge (UCLES). All
        predictions are data-driven probabilistic forecasts, not guarantees.
        All questions are original works created for practice purposes.
      </p>
    </div>
  );
}
