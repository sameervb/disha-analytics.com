import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Disha: Restaurant Intelligence Platform",
  description:
    "AI-powered business intelligence for independent restaurants. Analyze margins, pricing gaps, and competitive position in under 5 minutes.",
  openGraph: {
    title: "Disha: Restaurant Intelligence Platform",
    description:
      "AI-powered business intelligence for independent restaurants. Analyze margins, pricing gaps, and competitive position in under 5 minutes.",
    url: "https://disha-analytics.com",
    siteName: "Disha",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disha: Restaurant Intelligence Platform",
    description:
      "AI-powered business intelligence for independent restaurants. In under 5 minutes.",
  },
  metadataBase: new URL("https://disha-analytics.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
