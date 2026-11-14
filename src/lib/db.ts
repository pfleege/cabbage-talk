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
