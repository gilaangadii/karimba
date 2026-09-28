import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth";

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
  title: "KARIMBA — Let's Explore Indonesia's Forests",
  description:
    "KARIMBA is a digital platform that provides information about Indonesia's forests, their ecosystems, and the importance of conservation. Explore the rich biodiversity and learn how to protect these vital natural resources.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-surface text-neutral antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
