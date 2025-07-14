import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "G style",
  description: "A Next.js project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
