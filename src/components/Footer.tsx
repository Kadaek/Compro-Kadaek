"use client";

import { KadaekMonogram } from "@/components/KadaekLogo";

export default function Footer() {
  return (
    <footer className="border-t border-[#101C2C]/10 px-4 sm:px-6 md:px-8 py-5 sm:py-7 bg-[#E9EDF2] w-full mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-[#526D9B] text-center sm:text-left">
        <div className="flex items-center gap-2.5">
          <KadaekMonogram className="w-4 h-4 sm:w-5 sm:h-5 text-[#101C2C]" />
          <span className="text-[#101C2C] font-heading font-extrabold tracking-widest uppercase text-xs sm:text-sm">
            KADAEK
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3 gap-y-1 text-[10px] sm:text-xs">
          <span>CURATED DEVELOPER HUB</span>
          <span>•</span>
          <span>BUILT FOR BUILDERS</span>
          <span>•</span>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
