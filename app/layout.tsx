import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pintarly - Sedang Maintenance",
  description: "Pintarly sedang dalam pemeliharaan. Kami akan segera kembali!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
