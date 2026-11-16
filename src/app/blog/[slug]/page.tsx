// src/app/blog/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/queries";
import { BlogBody } from "@/components/BlogBody";
import { CoverImage, BlogMeta } from "@/components/BlogCard";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ slug: string }> };

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-6xl px-5 py-12">
      <Link
        href="/blog"
        className="font-bold text-muted transition hover:text-ink"
      >
        Back to all articles
      </Link>

      <header className="mt-8 max-w-3xl">
        <Link
          href={`/blog?category=${encodeURIComponent(post.category)}`}
          className="tag"
        >
          {post.category}
        </Link>
        <h1 className="mt-5 text-4xl font-extrabold leading-[1.02] sm:text-5xl md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-6 max-w-[56ch] text-xl leading-relaxed text-muted">
          {post.excerpt}
        </p>
        <div className="mt-6">
          <BlogMeta post={post} />
        </div>
      </header>
      <div className="mt-10 overflow-hidden rounded-[2.5rem] bg-mist">
        <CoverImage post={post} className="aspect-video w-full" />
      </div>

      <div className="mt-6">
        <BlogBody content={post.content} />
      </div>
    </article>
  );
}
