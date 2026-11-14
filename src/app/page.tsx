// src/app/page.tsx

import { getCategories, getPosts } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [posts, categories] = await Promise.all([getPosts(), getCategories()]);
  return (
    <div className="p-8">
      <p>{categories.map((c) => `${c.name} (${c.count})`).join(", ")}</p>
      <ul className="mt-4 list-disc pl-6">
        {posts.map((p) => (
          <li key={p.id}>
            {p.title} - {p.category}, cover {p.coverImageUrl}
          </li>
        ))}
      </ul>
    </div>
  );
}
