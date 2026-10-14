import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
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
    >
      <body className="bg-[#FFFFFF] text-[#101C2C] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
