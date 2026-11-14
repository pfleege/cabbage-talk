// src/types/index.ts

export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  readMinutes: number;
  coverImageUrl: string | null;
  featured: boolean;
  publishedAt: Date;
}

export interface SeedPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  readMinutes: number;
  coverImage: string | null;
  featured: boolean;
  publishedAt: string;
}
