// src/app/blog/page.tsx

import Link from "next/link";
import { getPosts } from "@/lib/queries";
import { BlogRow } from "@/components/BlogCard";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <h1 className="text-5xl font-extrabold sm:text-6xl">All articles</h1>
      <div className="mt-6">
        {posts.map((post) => (
          <BlogRow key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
