// src/app/layout.tsx

import type { ReactNode } from "react";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/figtree";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="mx-auto max-w-6xl pb-20 bg-green-50/90">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
