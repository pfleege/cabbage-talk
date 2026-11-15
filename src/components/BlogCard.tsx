// src/components/BlogCard.tsx

import type { Post } from "@/types";

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
