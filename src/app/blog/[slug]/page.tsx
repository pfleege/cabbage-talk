// src/app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/queries";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ slug: string }> };

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="text-4xl font-extrabold">{post.title}</h1>
      <div className="mt-6">
        <p>{post.content}</p>
      </div>
    </article>
  );
}
