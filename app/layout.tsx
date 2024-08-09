import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS108S63430630720110001",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
