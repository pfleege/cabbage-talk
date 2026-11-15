// src/app/page.tsx

import Link from "next/link";
import { getPosts } from "@/lib/queries";
import { BlogRow } from "@/components/BlogCard";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [posts] = await Promise.all([getPosts()]);

  return (
    <div className="mx-auto max-w-6xl px-5">
      <section aria-labelledby="latest-heading" className="mt-24">
        <div className="flex items-end justify-between gap-4">
          <h2 id="latest-heading" className="text-3xl font-bold">
            Latest articles
          </h2>
          <Link
            href="#"
            className="font-bold underline decoration-pulse decoration-4 underline-offset-4"
          >
            See all articles
          </Link>
        </div>
        <div className="mt-4">
          {posts.map((post) => (
            <BlogRow key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
