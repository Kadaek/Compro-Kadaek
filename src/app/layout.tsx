import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kadaek | Solusi Transformasi Digital & Teknologi Modern",
  description:
    "Kadaek menghadirkan solusi teknologi terkini, pengembangan perangkat lunak, dan transformasi digital yang andal untuk memajukan bisnis Anda.",
  keywords: [
    "Kadaek",
    "Company Profile",
    "software development",
    "digital transformation",
    "web development",
    "mobile apps",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
