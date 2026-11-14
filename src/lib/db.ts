// src/lib/db.ts

import { Pool } from "pg";

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

async function init(): Promise<void> {
  await pool.query(SCHEMA);
}

// Creates schema and inserts demo data on first run
export function ensureDatabase(): Promise<void> {
  return init();
}
