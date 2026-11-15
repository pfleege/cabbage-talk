// src/components/Logo.tsx

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect
        x="6"
        y="14"
        width="52"
        height="36"
        rx="18"
        fill="none"
        stroke="#0e2420"
        strokeWidth="5"
      />
      <rect x="17" y="25" width="30" height="14" rx="7" fill="#12c98a" />
    </svg>
  );
}
