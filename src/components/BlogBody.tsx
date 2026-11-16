// src/components/BlogBody.tsx

export function BlogBody({ content }: { content: string }) {
  const blocks = content.trim().split(/\n{2,}/);
  return (
    <div className="max-w-[68ch]">
      {blocks.map((block, i) => (
        <p key={i} className="my-5 text-[1.15rem] leading-[1.85] text-ink/90">
          {block}
        </p>
      ))}
    </div>
  );
}
