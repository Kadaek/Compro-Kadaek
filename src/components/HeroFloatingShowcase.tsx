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
    <div className="relative w-full max-w-[580px] sm:max-w-[640px] mx-auto select-none py-4 sm:py-6 px-6 sm:px-12">
      <div className="relative w-full mx-auto">
        
        {/* ── LEFT TILTED PHOTO (SATELLITE ACCENT, TILTED -10°) ── */}
        <div
          onClick={() => setCenterIdx(leftIdx)}
          className="animate-float-slow absolute -left-6 sm:-left-12 top-1/2 -translate-y-1/2 w-[37%] sm:w-[39%] aspect-[4/3] -rotate-10 rounded-2xl overflow-hidden shadow-[0_22px_45px_-8px_rgba(16,28,44,0.32)] border border-[#101C2C]/15 bg-[#101C2C] z-20 cursor-pointer hover:scale-105 hover:-rotate-6 hover:z-30 transition-all duration-300 group"
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

        {/* ── CENTER MAIN PHOTO (BESAR, GAGAH, 100% BEBAS HAMBATAN) ── */}
        <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_25px_60px_-12px_rgba(16,28,44,0.28)] border border-[#101C2C]/10 bg-[#101C2C] z-10 transition-all duration-500">
          <div className="relative w-full h-full">
            <Image
              src={photos[centerIdx].src}
              alt={photos[centerIdx].alt}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>
        </div>

        {/* ── RIGHT TILTED PHOTO (SATELLITE ACCENT, TILTED +10°) ── */}
        <div
          onClick={() => setCenterIdx(rightIdx)}
          className="animate-float absolute -right-6 sm:-right-12 -bottom-3 sm:-bottom-5 w-[39%] sm:w-[41%] aspect-[4/3] rotate-10 rounded-2xl overflow-hidden shadow-[0_24px_48px_-8px_rgba(16,28,44,0.34)] border border-[#101C2C]/15 bg-[#101C2C] z-20 cursor-pointer hover:scale-105 hover:rotate-6 hover:z-30 transition-all duration-300 group"
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
