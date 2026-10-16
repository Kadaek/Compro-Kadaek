"use client";

import { useState } from "react";
import Footer from "@/components/Footer";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [makerHandle, setMakerHandle] = useState("");

  const email = "submit@kadaek.id";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Halo Tim Kadaek,\n\nSaya ingin mengajukan kurasi produk untuk Kadaek Hub:\n• Nama Tool: ${projectName || "[Nama Tool]"}\n• URL Repo / Demo: ${projectUrl || "[URL]"}\n• Maker: ${makerHandle || "[Handle]"}\n\nTerima kasih.`
    );
    return `https://wa.me/6281234567890?text=${text}`;
  };

  return (
    <section
      id="submit"
      className="snap-start snap-always relative h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between pt-16 sm:pt-20 border-t border-[#101C2C]/10 bg-[#FFFFFF] w-full max-w-full"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full flex-1 flex flex-col justify-center py-2 sm:py-4">
        
        {/* Section Header (Clean Architectural Line, Zero Badges) */}
        <div className="flex items-center justify-between pb-2 mb-4 sm:mb-6 border-b border-[#101C2C]/10">
          <span className="font-mono text-[11px] text-[#526D9B] tracking-widest uppercase font-semibold">
            [ 03 — SUBMIT PRODUK & KURASI ]
          </span>
          <span className="font-mono text-[11px] text-[#526D9B] tracking-wider uppercase hidden sm:inline-block">
            DIRECT COMMUNITY SUBMISSION
          </span>
        </div>

        {/* 2-Column Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          
          {/* Left Column: Direct Heading & Clean Numerical Criteria */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-[#101C2C] tracking-tight leading-snug">
              Publikasikan Tool & Library Anda
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#526D9B] leading-relaxed">
              Katalog terbuka untuk developer Indonesia membagikan karya perangkat lunak, CLI utility, modul backend, atau sistem desain yang siap dipakai publik.
            </p>

            {/* Clean Spec Blocks (Pure Typography, Zero Cliché AI Icons, Zero Badges) */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mt-4 sm:mt-6">
              <div className="p-3 sm:p-3.5 rounded-lg border border-[#101C2C]/10 bg-[#FAFBFC]">
                <span className="font-mono text-[10px] text-[#526D9B] font-semibold block mb-1">
                  01 / AKSES
                </span>
                <h4 className="font-heading font-semibold text-[13px] text-[#101C2C]">100% Gratis</h4>
                <p className="text-[11px] text-[#526D9B] mt-0.5 leading-snug">Tanpa biaya listing</p>
              </div>

              <div className="p-3 sm:p-3.5 rounded-lg border border-[#101C2C]/10 bg-[#FAFBFC]">
                <span className="font-mono text-[10px] text-[#526D9B] font-semibold block mb-1">
                  02 / REVIEW
                </span>
                <h4 className="font-heading font-semibold text-[13px] text-[#101C2C]">24 Jam</h4>
                <p className="text-[11px] text-[#526D9B] mt-0.5 leading-snug">Validasi tim teknis</p>
              </div>

              <div className="p-3 sm:p-3.5 rounded-lg border border-[#101C2C]/10 bg-[#FAFBFC]">
                <span className="font-mono text-[10px] text-[#526D9B] font-semibold block mb-1">
                  03 / FEED
                </span>
                <h4 className="font-heading font-semibold text-[13px] text-[#101C2C]">Spotlight</h4>
                <p className="text-[11px] text-[#526D9B] mt-0.5 leading-snug">Direktori mingguan</p>
              </div>
            </div>

            {/* Direct Email (Clean Sans/Mono, Zero Badges) */}
            <div className="mt-4 pt-3 border-t border-[#101C2C]/10 flex items-center justify-between text-xs font-mono">
              <div className="text-[#526D9B]">
                <span className="text-[#101C2C] font-semibold">{email}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-2.5 py-1 rounded-md border border-[#101C2C]/15 bg-white hover:bg-[#101C2C] hover:text-white text-[11px] font-mono transition-colors cursor-pointer"
              >
                {copied ? "TERSALIN" : "SALIN EMAIL"}
              </button>
            </div>
          </div>

          {/* Right Column: Clean Architectural Form */}
          <div className="lg:col-span-6">
            <div className="rounded-xl border border-[#101C2C]/15 bg-white p-4 sm:p-5 shadow-[0_4px_24px_rgba(16,28,44,0.04)] flex flex-col justify-between">
              
              <div className="pb-3 border-b border-[#101C2C]/10 mb-3 flex items-center justify-between">
                <span className="font-heading font-semibold text-xs sm:text-sm text-[#101C2C]">
                  Formulir Pengajuan Tool
                </span>
                <span className="text-[10px] font-mono text-[#526D9B]">
                  VERIFIKASI TERBUKA
                </span>
              </div>

              {/* Form Inputs */}
              <div className="space-y-2.5">
                <div>
                  <label className="block text-[10px] font-mono text-[#526D9B] uppercase tracking-wider mb-1">
                    Nama Tool / Produk
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Kadaek Core Gateway, DevSync"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-md border border-[#101C2C]/15 focus:outline-none focus:border-[#101C2C] bg-[#FAFBFC] font-sans transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-[#526D9B] uppercase tracking-wider mb-1">
                    Link Repository / Demo URL
                  </label>
                  <input
                    type="text"
                    placeholder="https://github.com/... atau https://mytool.dev"
                    value={projectUrl}
                    onChange={(e) => setProjectUrl(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-md border border-[#101C2C]/15 focus:outline-none focus:border-[#101C2C] bg-[#FAFBFC] font-sans transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-[#526D9B] uppercase tracking-wider mb-1">
                    Maker / Handle Pembuat
                  </label>
                  <input
                    type="text"
                    placeholder="@username atau nama developer"
                    value={makerHandle}
                    onChange={(e) => setMakerHandle(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-md border border-[#101C2C]/15 focus:outline-none focus:border-[#101C2C] bg-[#FAFBFC] font-sans transition-colors"
                  />
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 pt-3 border-t border-[#101C2C]/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#526D9B]">
                  Respon langsung via kurator
                </span>
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#101C2C] hover:bg-[#526D9B] text-white text-xs font-semibold tracking-wide transition-all shadow-xs active:scale-95"
                >
                  <span>Kirim Pengajuan</span>
                  <span className="font-mono text-sm leading-none">→</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Docked Footer with Developer Ecosystem Links */}
      <Footer />
    </section>
  );
}
