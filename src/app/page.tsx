// src/app/page.tsx

import Hero from "@/components/Hero";
import TopicSelector from "@/components/TopicSelector";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <TopicSelector />
    </>
  );
}
