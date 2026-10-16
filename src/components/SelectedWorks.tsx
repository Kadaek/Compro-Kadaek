"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, X, Copy, Check, ExternalLink, Terminal } from "lucide-react";

export interface ProductItem {
  id: string;
  title: string;
  creator: string;
  category: string;
  desc: string;
  detail: string;
  image: string;
  installCommand: string;
  specs: string[];
  repoUrl: string;
  demoUrl: string;
}

export const MARKETPLACE_PRODUCTS: ProductItem[] = [
  {
    id: "core-gateway",
    title: "Kadaek Core Gateway",
    creator: "Kadaek Labs",
    category: "Infrastructure & Proxy",
    desc: "Reverse proxy cepat berbasis Go untuk membatasi traffic dan menjaga server tetap stabil saat traffic memuncak.",
    detail: "High-performance edge reverse proxy dengan latency p99 di bawah 0.2ms. Dilengkapi dynamic rate limiting, load balancer cluster otomatis, native HTTP/3 QUIC, serta integrasi Prometheus metrics.",
    image: "/tools/gateway.jpg",
    installCommand: "curl -sSL https://get.kadaek.id/gateway | sh",
    specs: ["Go 1.22", "HTTP/3 QUIC", "Prometheus Metrics", "MIT License"],
    repoUrl: "https://github.com",
    demoUrl: "https://demo.kadaek.id",
  },
  {
    id: "devsync-cli",
    title: "DevSync CLI",
    creator: "@dimasbuilds",
    category: "Developer Utilities",
    desc: "Tool terminal praktis untuk sinkronisasi file environment satu tim dengan enkripsi end-to-end tanpa kirim via chat.",
    detail: "Amankan file .env tim tanpa perlu copy-paste lewat chat. DevSync mengenkripsi nilai secret menggunakan AES-256-GCM langsung di mesin lokal sebelum disinkronkan ke cloud cluster.",
    image: "/tools/devsync.jpg",
    installCommand: "brew install kadaek/tap/devsync",
    specs: ["Rust Core", "AES-256-GCM", "Team Sync", "Free & Open Source"],
    repoUrl: "https://github.com",
    demoUrl: "https://demo.kadaek.id",
  },
  {
    id: "schemapulse",
    title: "SchemaPulse",
    creator: "@techfajar",
    category: "Database & Monitor",
    desc: "Aplikasi visualisasi skema database yang otomatis mendeteksi bottleneck dan query lemot di PostgreSQL & MySQL.",
    detail: "Interactive database ERD visualizer yang membaca skema database real-time dan memberikan rekomendasi index otomatis saat mendeteksi sequential scans atau N+1 queries.",
    image: "/tools/schemapulse.jpg",
    installCommand: "docker run -d -p 54320:80 kadaek/schemapulse:latest",
    specs: ["PostgreSQL & MySQL", "Query Plan AST", "Zero-Config", "Apache 2.0"],
    repoUrl: "https://github.com",
    demoUrl: "https://demo.kadaek.id",
  },
  {
    id: "bentoframe-ui",
    title: "BentoFrame UI",
    creator: "@rezastudio",
    category: "Design System",
    desc: "Koleksi komponen web minimalis bergaya modern bento grid siap pakai untuk website portofolio dan SaaS.",
    detail: "50+ komponen React 19 dan Tailwind CSS v4 dengan layout bento grid modern, animasi Spring physics dari Motion, aksesibilitas penuh, dan kompatibilitas server components.",
    image: "/tools/bentoframe.jpg",
    installCommand: "npx shadcn@latest add https://kadaek.id/r/bento-ui.json",
    specs: ["React 19", "Tailwind CSS v4", "Framer Motion", "Free Forever"],
    repoUrl: "https://github.com",
    demoUrl: "https://demo.kadaek.id",
  },
];

export default function SelectedWorks() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [copiedCmd, setCopiedCmd] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCopy = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section
      id="featured"
      className="snap-start snap-always relative h-[100dvh] max-h-[100dvh] flex flex-col justify-center items-center overflow-hidden pt-16 sm:pt-20 pb-4 sm:pb-6 px-4 sm:px-6 md:px-8 border-t border-[#101C2C]/10 bg-[#FFFFFF] w-full max-w-full"
    >
      <div className="max-w-6xl mx-auto w-full my-auto flex flex-col justify-center">
        
        {/* ── SECTION HEADER (CLEAN ARCHITECTURAL, ZERO BADGES) ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-6 pb-3 border-b border-[#101C2C]/10 gap-2 shrink-0">
          <div>
            <span className="font-mono text-[11px] text-[#526D9B] tracking-widest uppercase font-semibold block mb-1">
              02 / CURATED DEVELOPER MARKETPLACE
            </span>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-black text-[#101C2C] tracking-tight">
              Tools Pilihan Siap Pakai
            </h2>
          </div>

          <div className="font-mono text-[11px] text-[#526D9B] tracking-wider uppercase">
            [ DIREKTORI TERKURASI ]
          </div>
        </div>

        {/* ── 4 PROFESSIONAL REAL-IMAGE PRODUCT CARDS (DESKTOP 4-COL, MOBILE HORIZONTAL SNAP) ── */}
        <div className="flex lg:grid lg:grid-cols-4 overflow-x-auto lg:overflow-visible gap-3 sm:gap-4 pb-2 lg:pb-0 no-scrollbar snap-x snap-mandatory items-stretch">
          {MARKETPLACE_PRODUCTS.map((prod) => (
            <article
              key={prod.id}
              className="group w-[280px] sm:w-[310px] lg:w-auto shrink-0 snap-center rounded-2xl border border-[#101C2C]/15 bg-white hover:border-[#101C2C]/35 shadow-[0_4px_20px_rgba(16,28,44,0.04)] hover:shadow-[0_20px_40px_rgba(16,28,44,0.10)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              onClick={() => setSelectedProduct(prod)}
            >
              {/* TOP: REAL PRODUCT SCREENSHOT IMAGE */}
              <div className="relative h-[140px] sm:h-[150px] w-full bg-slate-900 overflow-hidden border-b border-[#101C2C]/10">
                <Image
                  src={prod.image}
                  alt={prod.title}
                  fill
                  sizes="(max-width: 768px) 310px, 280px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* BODY: MINIMAL CLEAN TYPOGRAPHY (NO ICON CLUTTER) */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#526D9B] uppercase tracking-wider mb-1">
                    {prod.creator} · {prod.category}
                  </div>
                  <h3 className="font-heading text-[15px] sm:text-[16px] font-bold text-[#101C2C] tracking-tight group-hover:text-[#526D9B] transition-colors line-clamp-1">
                    {prod.title}
                  </h3>
                  <p className="text-[12px] text-[#526D9B] leading-relaxed line-clamp-2 mt-1.5 font-normal">
                    {prod.desc}
                  </p>
                </div>

                {/* BOTTOM: CLEAN CTA "LIHAT" */}
                <div className="pt-3 mt-3 border-t border-[#101C2C]/10 flex items-center justify-end">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(prod);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#101C2C] text-white hover:bg-[#526D9B] text-[12px] font-semibold tracking-wide transition-all shadow-xs active:scale-95 cursor-pointer"
                  >
                    <span>Lihat</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── MOBILE SWIPE HELPER (TOUCH DEVICES ONLY) ── */}
        <div className="flex lg:hidden items-center justify-between mt-3 px-1 text-[10px] font-mono text-[#526D9B]">
          <span className="tracking-wider uppercase">← Geser untuk lihat tools lainnya →</span>
          <span className="text-[#101C2C] font-semibold">4 Tools</span>
        </div>

      </div>

      {/* ── INTERACTIVE PRODUCT PREVIEW MODAL (CLEAN ARCHITECTURAL, ZERO BADGES) ── */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl border border-[#101C2C]/20 max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-[200px] sm:h-[240px] w-full bg-slate-950 border-b border-[#101C2C]/10 shrink-0">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 p-2 rounded-lg bg-black/50 text-white hover:bg-black/80 transition-colors backdrop-blur-xs cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title Overlay */}
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <div className="text-[11px] font-mono uppercase tracking-widest text-slate-300">
                  {selectedProduct.creator} · {selectedProduct.category}
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-black tracking-tight mt-0.5">
                  {selectedProduct.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
              <p className="text-xs sm:text-sm text-[#526D9B] leading-relaxed">
                {selectedProduct.detail}
              </p>

              {/* Install Command Terminal Snippet */}
              <div>
                <span className="text-[10px] font-mono text-[#526D9B] uppercase tracking-wider block mb-1.5 font-semibold">
                  Install / Quick Run Snippet
                </span>
                <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#0E1624] text-slate-200 font-mono text-[11px] sm:text-xs border border-slate-800">
                  <div className="flex items-center gap-2 truncate pr-2">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{selectedProduct.installCommand}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(selectedProduct.installCommand)}
                    className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-white shrink-0 cursor-pointer"
                  >
                    {copiedCmd ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Technical Specifications (Clean Architectural Spec Line, Zero Badges) */}
              <div>
                <span className="text-[10px] font-mono text-[#526D9B] uppercase tracking-wider block mb-1 font-semibold">
                  Spesifikasi & Lisensi
                </span>
                <p className="text-xs font-mono text-[#101C2C] bg-[#FAFBFC] p-2.5 rounded-md border border-[#101C2C]/10">
                  {selectedProduct.specs.join("  ·  ")}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#101C2C]/10 flex flex-wrap items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2 rounded-lg border border-[#101C2C]/15 hover:bg-[#E9EDF2] text-xs font-semibold text-[#101C2C] transition-colors cursor-pointer"
                >
                  Tutup
                </button>
                <a
                  href={selectedProduct.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#101C2C] text-white hover:bg-[#526D9B] text-xs font-semibold transition-colors shadow-xs"
                >
                  <span>Buka Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
