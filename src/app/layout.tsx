import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Big Bad Wolf Electric | Commercial & Residential Electrical",
  description:
    "Big Bad Wolf Electric — Powering Commercial & Residential Excellence. Licensed, insured, A+ BBB certified. Lic# 67363.",
  keywords: [
    "electrician",
    "commercial electrical",
    "residential electrical",
    "LED upgrade",
    "parking lot lighting",
    "licensed electrician",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
