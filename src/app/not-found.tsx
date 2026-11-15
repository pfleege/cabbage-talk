// src/app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-32">
      <h1 className="text-5xl font-extrabold">That page is not here</h1>
      <p className="mt-4 text-lg text-muted">
        The article may have moved, or the link is wrong. Try the full list.
      </p>
      <Link href="/" className="btn btn-primary mt-8">
        Browse articles
      </Link>
    </div>
  );
}
