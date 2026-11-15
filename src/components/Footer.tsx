// src/components/Footer.tsx

import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-28 bg-mist">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Logo />
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Cabbage Talk
            </h2>
          </div>
          <p className="mt-4 max-w-md leading-relaxed text-muted">
            Practical writing about gardening. This is a showcase project with
            sample content.
          </p>
        </div>
        <ul className="space-y-2 font-semibold">
          <li>
            <Link href="/" className="hover:text-pulse-deep">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-pulse-deep">
              All articles
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
