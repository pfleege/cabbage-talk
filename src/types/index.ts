// src/types/index.ts

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readMinutes: number;
  publishedAt: string;
  featured: boolean;
  coverImage: string;
  content: string;
}
