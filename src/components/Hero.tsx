// src/components/Hero.tsx

import Link from "next/link";
import { getFeaturedPost } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function Hero() {
  const featured = await getFeaturedPost();

  return (
    <div
      className="mx-auto max-w-6xl bg-cover bg-center"
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2015/09/13/18/43/lawn-mower-938555_1280.jpg")`,
      }}
    >
      <div className="px-5 bg-amber-50/10">
        <section className="py-14 lg:py-20">
          <h1 className="max-w-[14ch] text-5xl font-extrabold text-white leading-[0.98] sm:text-6xl lg:text-7xl">
            Time to get those hands dirty.
          </h1>
          <div className="mt-7 max-w-[56ch] p-4 bg-amber-50/50 rounded-2xl">
            <p className="text-xl leading-relaxed text-black italic">
              From balcony herbs to bountiful backyards, we share simple, proven
              tips that turn any space into a thriving green haven. Your best
              garden starts here. Small habits, grounded in good evidence.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/blog" className="btn btn-primary">
              Browse articles
            </Link>
            {featured && (
              <Link href={`/blog/${featured.slug}`} className="btn btn-outline">
                Read the featured article
              </Link>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
