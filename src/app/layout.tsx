import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Kadaek — Studio Teknologi & Rekayasa Digital",
  description: "Studio rekayasa perangkat lunak. Kami membangun produk digital yang presisi.",
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${geist.variable}`}>
      <body>
        {/* Animated film grain */}
        <div className="grain" aria-hidden="true" />
        {/* Cursor elements */}
        <div id="cursor-dot" aria-hidden="true" />
        <div id="cursor-ring" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
