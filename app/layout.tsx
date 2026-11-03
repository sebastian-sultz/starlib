import type { Metadata } from "next";
import { Figtree, Lora } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swaraj Books — Library Hub",
  description: "re-library that connects India's libraries",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${lora.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
