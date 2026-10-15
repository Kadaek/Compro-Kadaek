"use client";

import ScrollReveal from "@/components/ScrollReveal";

export const CATEGORIES_DATA = [
  {
    num: "01",
    title: "TOOLS DEVELOPER & CLI",
    desc: "Kumpulan script otomatisasi, command-line tool, dan utilitas terminal yang bikin alur ngoding kamu jadi jauh lebih cepat dan praktis.",
    stack: "CLI Tools · Script Otomatisasi · Terminal Apps",
  },
  {
    num: "02",
    title: "BACKEND & DATABASE",
    desc: "Engine API siap pakai, visualizer skema database, dan utilitas microservice yang mempermudah urusan server.",
    stack: "API Ready · Database Visualizer · Microservices",
  },
  {
    num: "03",
    title: "AI & OTOMASI CERDAS",
    desc: "Runner model AI lokal, asisten koding cerdas, dan tools pengolah data otomatis untuk memangkas waktu kerja manual.",
    stack: "Local AI · Otomasi Kerja · Prompt Tools",
  },
  {
    num: "04",
    title: "KOMPONEN & DESAIN WEB",
    desc: "Koleksi komponen siap pakai React & Tailwind, template landing page, dan inspirasi antarmuka modern yang tinggal copy-paste.",
    stack: "React UI · Tailwind Kits · Web Template",
  },
];

export default function Services() {
  return (
    <section
      id="categories"
      className="snap-start snap-always relative min-h-[100dvh] flex items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-[#FFFFFF]"
    >
      <div className="max-w-6xl mx-auto w-full">
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between mb-6 sm:mb-8 pb-3 border-b border-[#101C2C]/10 gap-1.5 sm:gap-2">
            <span className="text-xs font-mono text-[#526D9B] uppercase tracking-widest font-semibold">
              [ 01 — KATEGORI TOOLS ]
            </span>
            <span className="text-xs font-mono text-[#526D9B] uppercase tracking-wider">
              Temukan apa yang kamu butuhkan
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {CATEGORIES_DATA.map((item, idx) => (
            <ScrollReveal key={item.num} delay={idx * 100} direction="up">
              <div className="p-5 sm:p-6 md:p-7 rounded-2xl border border-[#101C2C]/10 bg-[#E9EDF2]/40 hover:bg-[#E9EDF2]/80 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="font-mono text-xs text-[#526D9B] font-semibold mb-3 sm:mb-4">
                    /{item.num}
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#101C2C] tracking-tight uppercase mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#526D9B] font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-[#101C2C]/10 text-xs font-mono text-[#101C2C] font-medium">
                  {item.stack}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
