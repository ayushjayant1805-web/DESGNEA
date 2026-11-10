import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desgnea — Growth System Studio",
  description:
    "Desgnea connects strategy, brand, content, technology, acquisition and automation into one growth system built to attract, convert and retain customers.",
  keywords: [
    "growth system studio",
    "brand strategy",
    "content production",
    "web development",
    "growth marketing",
    "CRM automation",
    "India",
  ],
  authors: [{ name: "Desgnea" }],
  creator: "Desgnea",
  metadataBase: new URL("https://desgnea.in"),
  alternates: {
    canonical: "/",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
