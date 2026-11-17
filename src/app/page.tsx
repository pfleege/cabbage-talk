// src/app/page.tsx

import Hero from "@/components/Hero";
import TopicSelector from "@/components/TopicSelector";
import BlogPresentation from "@/components/BlogPresentation";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <TopicSelector />
      <BlogPresentation />
    </>
  );
}
