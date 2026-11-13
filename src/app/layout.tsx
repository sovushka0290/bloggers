import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Bloggers Awards Kazakhstan 2026",
    template: "%s · Bloggers Awards Kazakhstan",
  },
  description:
    "Официальный сайт премии блогеров, инфлюенсеров и креаторов Казахстана. 8 декабря 2026, Астана. Стиль — Met Gala.",
  openGraph: {
    title: "Bloggers Awards Kazakhstan 2026",
    description:
      "Лидеры мнений. Сила влияния. Признание. Национальная премия в стиле Met Gala.",
    locale: "ru_KZ",
    type: "website",
  },
  metadataBase: new URL("https://bloggersawards.kz"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
