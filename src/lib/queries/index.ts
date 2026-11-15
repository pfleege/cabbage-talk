import { ensureDatabase, pool } from "../db";
import { Post } from "@/types";

interface PostRow {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  read_minutes: number;
  cover_image_url: string | null;
  featured: boolean;
  published_at: Date;
}

const COLUMNS =
  "id, slug, title, excerpt, content, category, author, read_minutes, cover_image_url, featured, published_at";

function mapRow(row: PostRow): Post {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    category: row.category,
    author: row.author,
    readMinutes: row.read_minutes,
    coverImageUrl: row.cover_image_url,
    featured: row.featured,
    publishedAt: row.published_at,
  };
}

export async function getPosts(
  options: { category?: string; limit?: number } = {},
): Promise<Post[]> {
  await ensureDatabase();
  const params: unknown[] = [];
  let where = "";
  if (options.category) {
    params.push(options.category);
    where = `WHERE lower(category) = lower($${params.length})`;
  }
  let limit = "";
  if (options.limit) {
    params.push(options.limit);
    limit = `LIMIT $${params.length}`;
  }
  const { rows } = await pool.query<PostRow>(
    `SELECT ${COLUMNS} FROM posts ${where} ORDER BY published_at DESC ${limit}`,
    params,
  );
  return rows.map(mapRow);
}

export async function getCategories(): Promise<
  { name: string; count: number }[]
> {
  await ensureDatabase();
  const { rows } = await pool.query<{ name: string; count: number }>(
    "SELECT category AS name, count(*)::int AS count FROM posts GROUP BY category ORDER BY category",
  );
  return rows;
}

export async function getFeaturedPost(): Promise<Post | null> {
  await ensureDatabase();
  const { rows } = await pool.query<PostRow>(
    `SELECT ${COLUMNS} FROM posts ORDER BY featured DESC, published_at DESC LIMIT 1`,
  );
  return rows[0] ? mapRow(rows[0]) : null;
}
