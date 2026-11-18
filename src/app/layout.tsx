import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liora Fashions | Women's Wear",
  description:
    "Shop women's fashion at Liora Fashions: salwar sets, shararas, co-ord sets, kurtis, leggings, feeding tops, Anarkalis, straight pants, and plazo.",
  metadataBase: new URL("https://liorafashions.com"),
  openGraph: {
    title: "Liora Fashions | Elegance in Every Thread",
    description:
      "Explore women's wear, from everyday kurtis to festive collections.",
    type: "website",
    locale: "en_US",
    siteName: "Liora Fashions",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
