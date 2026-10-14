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
    <html lang="id" className={geist.variable} style={{ backgroundColor: "#FFFFFF" }}>
      <body
        className="bg-[#FFFFFF] text-[#101C2C] selection:bg-[#526D9B] selection:text-white"
        style={{ backgroundColor: "#FFFFFF", color: "#101C2C" }}
      >
        <div id="cur-dot" aria-hidden="true" />
        <div id="cur-ring" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
