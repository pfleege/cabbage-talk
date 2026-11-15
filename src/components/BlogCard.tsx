// src/components/BlogCard.tsx

import Link from "next/link";
import type { Post } from "@/types";
import { formatDate } from "@/utils/format-date";

export function CoverImage({
  post,
  className = "",
}: {
  post: Post;
  className?: string;
}) {
  // Fallback -> gradinet fill
  if (!post.coverImageUrl) {
    return (
      <div className={`bg-linear-120 from-mist to-amber-100 ${className}`} />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={post.coverImageUrl}
      alt={`Cover image for ${post.title}`}
      loading="lazy"
      className={`object-cover ${className}`}
    />
  );
}

export function BlogMeta({ post }: { post: Post }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
      <span className="font-semibold text-ink">{post.author}</span>
      <time dateTime={post.publishedAt.toISOString()}>
        {formatDate(post.publishedAt)}
      </time>
      <span>{post.readMinutes} min read</span>
    </div>
  );
}

export function BlogRow({ post }: { post: Post }) {
  return (
    <article className="border-t border-line first:border-t-0">
      <Link
        href={`/blog/${post.slug}`}
        className="group grid gap-6 py-8 sm:grid-cols-[15rem_1fr] sm:items-center sm:gap-10"
      >
        <div className="aspect-video overflow-hidden rounded-full bg-mist">
          <CoverImage
            post={post}
            className="h-full w-full transition duration-500 group-hover:scale-105"
          />
        </div>
        <div>
          <span className="tag">{post.category}</span>
          <h3 className="mt-3 text-2xl font-bold leading-tight transition group-hover:text-pulse-deep md:text-[1.7rem]">
            {post.title}
          </h3>
          <p className="mt-2 max-w-[60ch] leading-relaxed text-muted">
            {post.excerpt}
          </p>
          <div className="mt-4">
            <BlogMeta post={post} />
          </div>
        </div>
      </Link>
    </article>
  );
}
