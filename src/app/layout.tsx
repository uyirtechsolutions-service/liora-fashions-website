import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liora Fashions | Women's Wear",
  description:
    "Shop women's fashion at Liora Fashions: salwar sets, shararas, co-ord sets, kurtis, leggings, feeding tops, Anarkalis, straight pants, and plazo.",
  metadataBase: new URL("https://liorafashions09.in"),
  openGraph: {
    title: "Liora Fashions | Elegance in Every Thread",
    description:
      "Explore women's wear, from everyday kurtis to festive collections.",
    type: "website",
    locale: "en_US",
    siteName: "Liora Fashions",
    images: [
      {
        url: "/liora-logo.jpeg",
        width: 1152,
        height: 768,
        alt: "Liora Fashions — Elegance in Every Thread",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liora Fashions | Elegance in Every Thread",
    description:
      "Explore women's wear, from everyday kurtis to festive collections.",
    images: [
      {
        url: "/liora-logo.jpeg",
        alt: "Liora Fashions — Elegance in Every Thread",
      },
    ],
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
