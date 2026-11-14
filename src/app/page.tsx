// src/app/page.tsx

import { pool, ensureDatabase } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  await ensureDatabase();
  const { rows } = await pool.query("SELECT * FROM posts LIMIT 1");
  const data = await Promise.all(rows);

  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.cover_image_url} alt="" />
        </div>
      ))}
    </>
  );
}
