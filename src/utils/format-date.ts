// src/utils/format-date.ts

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-FI", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
