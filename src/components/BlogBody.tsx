// src/components/BlogBody.tsx

export function BlogBody({ content }: { content: string }) {
  const blocks = content.trim().split(/\n{2,}/);

  return (
    <div className="max-w-[68ch]">
      {blocks.map((block, i) => {
        const lines = block.split("\n");
        if (block.startsWith("    ## ")) {
          return (
            <h2 key={i} className="mb-3 mt-14 text-3xl font-bold">
              {block.slice(7)}
            </h2>
          );
        }

        if (lines.every((l) => l.startsWith("    - "))) {
          return (
            <ul key={i} className="my-7 space-y-3">
              {lines.map((l, j) => (
                <li key={j} className="flex gap-4 text-lg leading-8">
                  <span
                    className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-pulse"
                    aria-hidden="true"
                  />
                  <span>{l.slice(6)}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.startsWith("    > ")) {
          return (
            <blockquote
              key={i}
              className="my-10 rounded-4xl bg-mist px-8 py-7 font-display text-2xl font-semibold leading-snug md:text-[1.4rem]"
            >
              {block.slice(6)}
            </blockquote>
          );
        }

        return (
          <p key={i} className="my-5 text-[1.15rem] leading-[1.85] text-ink/90">
            {block}
          </p>
        );
      })}
    </div>
  );
}
