// src/app/page.tsx

import { getCategories, getPosts } from "@/lib/queries";
import { CoverImage } from "@/components/BlogCard";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [posts, categories] = await Promise.all([getPosts(), getCategories()]);
  return (
    <div className="p-8 font-display">
      <CoverImage post={posts[2]} className="rounded-2xl h-40 w-40" />
      <p>{categories.map((c) => `${c.name} (${c.count})`).join(", ")}</p>
      <ul className="mt-4 list-disc pl-6">
        {posts.map((p) => (
          <li key={p.id}>
            {p.coverImageUrl && (
              <>
                <p>{p.coverImageUrl}</p>
                <img
                  className="h-20 max-w-30 w-auto"
                  src={p.coverImageUrl}
                  alt=""
                />
              </>
            )}
            <h2>{p.title}</h2>
            {p.category}
          </li>
        ))}
      </ul>
    </div>
  );
}
