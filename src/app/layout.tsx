import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "KADAEK — Technology Company | Engineered Precision",
  description:
    "Kadaek is a technology company engineered with precision. Innovating the future through high-performance software architecture and scalable digital platforms.",
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${manrope.variable} ${inter.variable}`}
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <body
        className="bg-[#FFFFFF] text-[#101C2C] selection:bg-[#526D9B] selection:text-white font-sans antialiased"
        style={{ backgroundColor: "#FFFFFF", color: "#101C2C" }}
      >
        <div id="cur-dot" aria-hidden="true" />
        <div id="cur-ring" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
