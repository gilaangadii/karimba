import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-headline",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "KARIMBA — Kenali Hutan Indonesia",
  description:
    "Interactive digital platform untuk mengenalkan hutan Indonesia kepada generasi muda. Jelajahi ekosistem, biodiversitas, dan cerita hutan Indonesia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-surface text-neutral antialiased">
        {children}
      </body>
    </html>
  );
}
