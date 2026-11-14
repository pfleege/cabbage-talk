// src/app/page.tsx

import { pool } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { rows } = await pool.query("SELECT now() AS now");
  return <p className="p-8 text-xl">Database time: {String(rows[0].now)}</p>;
}
