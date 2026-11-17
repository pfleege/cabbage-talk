// src/components/TopicSelector.tsx

import Link from "next/link";
import { getCategories } from "@/lib/queries";

const [categories] = await Promise.all([getCategories()]);

export default async function TopicSelector() {
  return (
    <>
      <section
        aria-labelledby="topics-heading"
        className="mx-auto max-w-6xl px-4 mt-6"
      >
        <h2 id="topics-heading" className="text-3xl font-bold">
          Topics
        </h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {categories.map((c) => (
            <li key={c.name}>
              <Link
                href={`/blog?category=${encodeURIComponent(c.name)}`}
                className="inline-flex items-center gap-3 rounded-full border-2 border-pulse-deep px-5 py-2.5 font-bold transition hover:border-pulse hover:bg-mist"
              >
                {c.name}
                <span className="rounded-full bg-pulse px-2 py-0.5 text-xs font-extrabold text-ink">
                  {c.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
