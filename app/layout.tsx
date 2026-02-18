import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Introduction to Digital Electronics | Curriculum Guide",
  description: "Teacher-facing semester curriculum guide for NYC CTE Introduction to Digital Electronics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
