import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata: Metadata = {
  title: "Disha: Restaurant Intelligence for Independent Operators",
  description:
    "Disha scans 8 public data sources and runs 6 AI agents to produce a ranked action plan for your restaurant — competitive position, pricing gaps, review signals, and financial hypotheses. In under 5 minutes.",
  openGraph: {
    title: "Disha: Restaurant Intelligence for Independent Operators",
    description:
      "Disha scans 8 public data sources and runs 6 AI agents to produce a ranked action plan for your restaurant. In under 5 minutes.",
    url: "https://disha-analytics.com",
    siteName: "Disha",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disha: Restaurant Intelligence for Independent Operators",
    description:
      "Ranked action plan for your restaurant — pricing gaps, review signals, competitive position. In under 5 minutes.",
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
      <body className="bg-white text-slate-900 antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
