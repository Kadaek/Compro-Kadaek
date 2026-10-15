"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

export const FEATURED_TOOLS = [
  {
    num: "01",
    title: "Kadaek Core Gateway",
    maker: "Kadaek Labs",
    category: "Infra & Proxy Server",
    year: "2026",
    desc: "Reverse proxy cepat berbasis Go untuk membatasi traffic dan menjaga server tetap stabil saat diakses ribuan pengguna bersamaan.",
    url: "#",
  },
  {
    num: "02",
    title: "DevSync CLI",
    maker: "@dimasbuilds",
    category: "Tools Developer",
    year: "2026",
    desc: "Tool terminal praktis buat sinkronisasi file .env satu tim dengan enkripsi aman tanpa perlu kirim-kirim manual via chat.",
    url: "#",
  },
  {
    num: "03",
    title: "SchemaPulse",
    maker: "@techfajar",
    category: "Database & Monitor",
    year: "2025",
    desc: "Aplikasi visualisasi skema database yang otomatis mendeteksi query lemot di database PostgreSQL dan MySQL kamu.",
    url: "#",
  },
  {
    num: "04",
    title: "BentoFrame UI",
    maker: "@rezastudio",
    category: "Desain & Komponen Web",
    year: "2025",
    desc: "Koleksi komponen web minimalis bergaya bento grid yang siap dipakai untuk bikin website portofolio atau dokumentasi.",
    url: "#",
  },
];

export default function SelectedWorks() {
  return (
    <section
      id="featured"
      className="snap-start snap-always relative min-h-[100dvh] flex items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t border-[#101C2C]/10 bg-[#FFFFFF]"
    >
      <div className="max-w-6xl mx-auto w-full">
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between mb-6 sm:mb-8 pb-3 border-b border-[#101C2C]/10 gap-1.5 sm:gap-2">
            <span className="text-xs font-mono text-[#526D9B] uppercase tracking-widest font-semibold">
              [ 02 — TOOLS UNGGULAN ]
            </span>
            <span className="text-xs font-mono text-[#526D9B] uppercase tracking-wider">
              Karya pilihan yang siap langsung kamu coba
            </span>
          </div>
        </ScrollReveal>

        <div className="divide-y divide-[#101C2C]/10 border-b border-[#101C2C]/10">
          {FEATURED_TOOLS.map((proj, idx) => (
            <ScrollReveal key={proj.num} delay={idx * 80} direction="up">
              <div className="py-4 sm:py-5 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-6 group hover:bg-[#E9EDF2]/40 px-3 sm:px-4 rounded-xl transition-all duration-300">
                <div className="flex items-start sm:items-baseline gap-3 sm:gap-6 md:gap-8">
                  <span className="text-xs sm:text-sm font-mono text-[#526D9B] font-semibold group-hover:text-[#101C2C] transition-colors shrink-0 pt-0.5 sm:pt-0">
                    /{proj.num}
                  </span>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-extrabold text-[#101C2C] tracking-tight group-hover:text-[#526D9B] group-hover:translate-x-0.5 transition-all duration-300">
                        {proj.title}
                      </h3>
                      <span className="text-xs font-mono text-[#526D9B]">
                        oleh {proj.maker}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#526D9B] mt-1 font-normal max-w-xl leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 pt-2 md:pt-0 border-t md:border-t-0 border-[#101C2C]/5">
                  <div className="text-left md:text-right">
                    <div className="font-mono text-[11px] sm:text-xs text-[#101C2C] font-semibold uppercase">
                      {proj.category}
                    </div>
                    <div className="font-mono text-[10px] sm:text-[11px] text-[#526D9B] mt-0.5">
                      Rilis {proj.year}
                    </div>
                  </div>

                  <a
                    href={proj.url}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#101C2C]/15 bg-[#E9EDF2] group-hover:bg-[#101C2C] group-hover:text-white text-[#101C2C] flex items-center justify-center transition-all duration-300 shrink-0 group-hover:scale-105"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
