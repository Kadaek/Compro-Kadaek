import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "KADAEK — Curated Developer Tools & Product Hub Indonesia",
  description:
    "Katalog dan marketplace curated untuk tools, CLI utilities, infra, dan produk digital buatan engineer & tech creator Indonesia.",
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${jetbrains.variable}`}
    >
      <body className="bg-[#FFFFFF] text-[#101C2C] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
