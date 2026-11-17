// src/components/BlogPresentation.tsx

import Link from "next/link";

interface BlogPresentationProps {
  imageUrl?: string;
  imageAlt?: string;
}

export default function BlogPresentation({
  imageUrl = "https://cdn.pixabay.com/photo/2020/03/22/04/24/nature-4955817_1280.jpg",
  imageAlt = "Cabbage Talk gardening blog presentation",
}: BlogPresentationProps) {
  return (
    <section
      aria-labelledby="blog-presentation-heading"
      className="mx-auto max-w-6xl px-4 my-12"
    >
      <div className="grid items-center gap-8 rounded-3xl border border-line bg-mist/50 p-8 md:grid-cols-2 md:p-12">
        {/* Left Column: Quick presentation text & navigation */}
        <div className="flex flex-col items-start gap-5">
          <span className="tag">Inside Cabbage Talk</span>

          <h2
            id="blog-presentation-heading"
            className="text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            Welcome to Cabbage Talk
          </h2>

          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Discover hands-on guides for thriving gardens, from essential tools
            and healthy soil to sustainable harvests and productive garden
            structures. Pick a topic from the Topics section above to explore
            specific guides, or continue straight to the blog to browse all our
            articles.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Link href="/blog" className="btn btn-primary">
              Continue to all articles
            </Link>
            <Link href="#topics-heading" className="btn btn-outline">
              Select a topic
            </Link>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative flex aspect-4/3 w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-line bg-chalk transition hover:border-pulse">
          {imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt={imageAlt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center text-muted">
              <svg
                className="mb-3 h-12 w-12 text-muted/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <p className="font-semibold text-ink">Pixabay Image Space</p>
              <p className="mt-1 max-w-[32ch] text-xs text-muted">
                Room reserved for a Pixabay image. Set via the{" "}
                <code className="rounded bg-mist px-1 py-0.5 text-ink font-semibold">
                  imageUrl
                </code>{" "}
                prop.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
