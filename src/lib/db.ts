// src/lib/db.ts

import { Pool, type PoolClient } from "pg";
import { seedPosts } from "./seed-data";

declare global {
  // eslint-disable-next-line no-var
  var __pgPool: Pool | undefined;
}

const connectionString =
  process.env.DATABASE_URL ??
  "postgres://gardening:gardening_dev_password@localhost:5433/gardening";

export const pool: Pool =
  globalThis.__pgPool ?? new Pool({ connectionString, max: 10 });
if (process.env.NODE_ENV !== "production") globalThis.__pgPool = pool;

const SCHEMA = `
CREATE TABLE IF NOT EXISTS posts (
  id              SERIAL PRIMARY KEY,
  slug            TEXT        NOT NULL UNIQUE,
  title           TEXT        NOT NULL,
  excerpt         TEXT        NOT NULL,
  content         TEXT        NOT NULL,
  category        TEXT        NOT NULL,
  author          TEXT        NOT NULL,
  read_minutes    INTEGER     NOT NULL DEFAULT 5,
  cover_image_url  TEXT,
  featured         BOOLEAN     NOT NULL DEFAULT false,
  published_at     TIMESTAMPTZ NOT NULL DEFAULT now()

);

CREATE INDEX IF NOT EXISTS posts_published_at_idx ON posts (published_at DESC);
CREATE INDEX IF NOT EXISTS posts_category_idx ON posts (category);
`;

async function seed(client: PoolClient): Promise<void> {
  await client.query("BEGIN");
  try {
    for (const post of seedPosts) {
      await client.query(
        `INSERT INTO posts
           (slug, title, excerpt, content, category, author, read_minutes, cover_image_url, featured, published_at)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
        [
          post.slug,
          post.title,
          post.excerpt,
          post.content,
          post.category,
          post.author,
          post.readMinutes,
          post.coverImage,
          post.featured,
          post.publishedAt,
        ],
      );
    }
    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  }
}

async function init(): Promise<void> {
  const client = await pool.connect();
  try {
    await client.query(SCHEMA);
    const { rows } = await client.query<{ count: number }>(
      "SELECT count(*)::int AS count FROM posts",
    );
    if (rows[0].count === 0) {
      console.log("[db] Empty database detected, inserting demo data...");
      await seed(client);
    }
  } finally {
    client.release();
  }
}

// Creates schema and inserts demo data on first run
export function ensureDatabase(): Promise<void> {
  return init();
}
