"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroFloatingShowcase() {
  const [centerIdx, setCenterIdx] = useState(1); // Default center: Founders Studio

  const photos = [
    {
      id: 0,
      title: "Studio & Sanctuary",
      src: "/images/startup-loft.webp",
      alt: "Kadaek Engineering Studio Workspace",
    },
    {
      id: 1,
      title: "Core Builders",
      src: "/images/founders-studio.webp",
      alt: "Founders & Engineers at Work",
    },
    {
      id: 2,
      title: "Production Systems",
      src: "/images/product-showcase.webp",
      alt: "Digital Product Architecture & Telemetry Mockup",
    },
  ];

  const leftIdx = (centerIdx + 2) % 3;
  const rightIdx = (centerIdx + 1) % 3;

  return (
    <div className="relative w-full max-w-[460px] sm:max-w-[500px] mx-auto select-none px-4 sm:px-8">
      <div className="relative w-full mx-auto">
        
        {/* ── OBJECT 1: TILTED YELLOW STICKY NOTE (POST-IT) ON UPPER LEFT ── */}
        <div className="animate-float-slow absolute -left-10 sm:-left-24 -top-8 sm:-top-10 z-30 hidden sm:block pointer-events-none">
          <div className="relative w-28 sm:w-32 bg-[#FEF9C3] rounded-sm p-2.5 shadow-[0_12px_24px_-4px_rgba(0,0,0,0.18)] border border-[#E4D96F] -rotate-6">
            {/* Frosted Tape on Top */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-3.5 bg-white/70 backdrop-blur-sm border-x border-black/10 shadow-xs" />
            <div className="font-mono text-[9px] sm:text-[10px] text-[#713F12] leading-tight space-y-0.5">
              <div className="font-bold border-b border-[#E4D96F] pb-1 uppercase tracking-wider text-[8px]">
                // KDK SPRINT
              </div>
              <div className="pt-0.5 font-semibold">✓ Sub-10ms core</div>
              <div>✓ Zero downtime</div>
              <div className="text-[8px] text-[#A16207] italic pt-1">keep it simple.</div>
            </div>
          </div>
        </div>

        {/* ── OBJECT 2: 35MM ARCHIVAL FILM SLIDE MOUNT ON UPPER RIGHT ── */}
        <div className="animate-float absolute -right-8 sm:-right-24 -top-6 sm:-top-8 z-30 hidden sm:block pointer-events-none">
          <div className="relative bg-[#F9F9F8] rounded-md p-2 shadow-[0_14px_28px_-4px_rgba(16,28,44,0.22)] border border-[#101C2C]/15 rotate-8 w-26 sm:w-28 text-center">
            {/* Sprocket Holes */}
            <div className="flex justify-between items-center px-1 mb-1.5 opacity-30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#101C2C]" />
              <span className="font-mono text-[7px] text-[#101C2C] tracking-widest uppercase">KADAEK 400</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#101C2C]" />
            </div>
            {/* Inner Dark Window */}
            <div className="w-full aspect-[4/3] bg-[#0A121D] rounded-xs flex items-center justify-center p-1.5 border border-black/20">
              <span className="font-mono text-[8px] text-emerald-400 font-semibold tracking-wider">
                EXP. 24 // ARCHIVE
              </span>
            </div>
            <div className="font-mono text-[7px] text-[#526D9B] mt-1 tracking-widest uppercase font-semibold">
              PLATE #024A
            </div>
          </div>
        </div>

        {/* ── OBJECT 3: ARCHIVAL BARCODE INSPECTION TAG ON LOWER LEFT ── */}
        <div className="animate-float absolute -left-8 sm:-left-20 -bottom-3 sm:-bottom-5 z-30 hidden sm:block pointer-events-none">
          <div className="bg-white/95 backdrop-blur-md rounded-lg px-2.5 py-1.5 shadow-[0_10px_20px_-3px_rgba(16,28,44,0.18)] border border-[#101C2C]/12 rotate-4 flex items-center gap-2">
            {/* Barcode Graphic */}
            <div className="flex items-center gap-[1.5px] h-5 opacity-70">
              <span className="w-[1px] h-full bg-[#101C2C]" />
              <span className="w-[2px] h-full bg-[#101C2C]" />
              <span className="w-[1px] h-full bg-[#101C2C]" />
              <span className="w-[3px] h-full bg-[#101C2C]" />
              <span className="w-[1px] h-full bg-[#101C2C]" />
              <span className="w-[2px] h-full bg-[#101C2C]" />
              <span className="w-[1px] h-full bg-[#101C2C]" />
            </div>
            <div className="font-mono text-[8px] text-[#526D9B] leading-tight">
              <div className="font-bold text-[#101C2C]">SYS.088</div>
              <div>ID & SG</div>
            </div>
          </div>
        </div>

        {/* ── OBJECT 4: CIRCULAR ARCHITECTURAL STUDIO STAMP ON LOWER RIGHT ── */}
        <div className="animate-float-slow absolute -right-6 sm:-right-18 -bottom-4 sm:-bottom-6 z-30 hidden sm:block pointer-events-none">
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border-2 border-dashed border-[#526D9B]/50 bg-white/90 backdrop-blur-md shadow-[0_10px_22px_-4px_rgba(16,28,44,0.15)] flex flex-col items-center justify-center p-1 -rotate-12 text-[#101C2C]">
            <div className="w-full h-full rounded-full border border-[#101C2C]/20 flex flex-col items-center justify-center text-center p-0.5">
              <span className="font-mono text-[6px] tracking-widest text-[#526D9B] uppercase font-bold">
                VERIFIED
              </span>
              <span className="font-heading text-[8px] sm:text-[9px] font-black tracking-tight uppercase leading-none my-0.5">
                KADAEK
              </span>
              <span className="font-mono text-[6px] text-emerald-600 font-semibold">
                ● 2026 CORE
              </span>
            </div>
          </div>
        </div>

        {/* ── LEFT TILTED PHOTO (SATELLITE ACCENT, TILTED -8°) ── */}
        <div
          onClick={() => setCenterIdx(leftIdx)}
          className="animate-float-slow absolute -left-5 sm:-left-9 top-1/2 -translate-y-1/2 w-[37%] sm:w-[39%] aspect-[4/3] -rotate-8 rounded-2xl overflow-hidden shadow-[0_18px_36px_-6px_rgba(16,28,44,0.3)] border border-[#101C2C]/15 bg-[#101C2C] z-20 cursor-pointer hover:scale-105 hover:-rotate-4 hover:z-30 transition-all duration-300 group"
        >
          <div className="relative w-full h-full">
            <Image
              src={photos[leftIdx].src}
              alt={photos[leftIdx].alt}
              fill
              className="object-cover group-hover:opacity-95 transition-opacity"
              sizes="(max-width: 768px) 40vw, 25vw"
            />
          </div>
        </div>

        {/* ── CENTER MAIN PHOTO (BESAR, RAPI, FIT 100VH) ── */}
        <div className="relative w-full aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_22px_48px_-10px_rgba(16,28,44,0.25)] border border-[#101C2C]/10 bg-[#101C2C] z-10 transition-all duration-500">
          <div className="relative w-full h-full">
            <Image
              src={photos[centerIdx].src}
              alt={photos[centerIdx].alt}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* ── RIGHT TILTED PHOTO (SATELLITE ACCENT, TILTED +8°) ── */}
        <div
          onClick={() => setCenterIdx(rightIdx)}
          className="animate-float absolute -right-5 sm:-right-9 -bottom-2 sm:-bottom-4 w-[38%] sm:w-[40%] aspect-[4/3] rotate-8 rounded-2xl overflow-hidden shadow-[0_20px_40px_-6px_rgba(16,28,44,0.32)] border border-[#101C2C]/15 bg-[#101C2C] z-20 cursor-pointer hover:scale-105 hover:rotate-4 hover:z-30 transition-all duration-300 group"
        >
          <div className="relative w-full h-full">
            <Image
              src={photos[rightIdx].src}
              alt={photos[rightIdx].alt}
              fill
              className="object-cover group-hover:opacity-95 transition-opacity"
              sizes="(max-width: 768px) 40vw, 25vw"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
