// src/components/Header.tsx

import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-chalk/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-5">
        <Link href="/" className="flex items-center gap-3">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Cabbage Talk
          </h2>
        </Link>
        <nav
          aria-label="Main"
          className="flex items-center gap-1 text-[0.95rem] font-semibold"
        >
          <Link
            href="/blog"
            className="rounded-full px-4 py-2 transition hover:bg-mist"
          >
            All articles
          </Link>
        </nav>
      </div>
    </header>
  );
}
