"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroFloatingShowcase() {
  // 3 authentic photos that can be clicked to swap to center
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

  // Helper to determine left and right photo indexes
  const leftIdx = (centerIdx + 2) % 3;
  const rightIdx = (centerIdx + 1) % 3;

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto select-none py-8 sm:py-12 px-6 sm:px-10">
      <div className="relative w-full max-w-[460px] mx-auto">
        
        {/* ── LEFT TILTED PHOTO (ACCENT PRINT, OUT ON TOP-LEFT) ── */}
        <div
          onClick={() => setCenterIdx(leftIdx)}
          title="Klik untuk tampilkan di tengah"
          className="animate-float-slow absolute -left-4 sm:-left-9 -top-3 sm:-top-5 w-[33%] sm:w-[35%] aspect-[4/3] -rotate-6 sm:-rotate-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_16px_36px_-6px_rgba(16,28,44,0.35)] border-2 border-white bg-[#101C2C] z-20 cursor-pointer hover:scale-110 hover:-rotate-3 hover:z-30 transition-all duration-300 group"
        >
          <div className="relative w-full h-full">
            <Image
              src={photos[leftIdx].src}
              alt={photos[leftIdx].alt}
              fill
              className="object-cover group-hover:opacity-95 transition-opacity"
              sizes="(max-width: 768px) 35vw, 20vw"
            />
          </div>
        </div>

        {/* ── CENTER MAIN PHOTO (HERO, DOMINANT & LEGA) ── */}
        <div className="relative w-full aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_24px_50px_-10px_rgba(16,28,44,0.28)] border-2 border-white/90 bg-[#101C2C] z-10 transition-all duration-500">
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

        {/* ── RIGHT TILTED PHOTO (ACCENT PRINT, OUT ON BOTTOM-RIGHT) ── */}
        <div
          onClick={() => setCenterIdx(rightIdx)}
          title="Klik untuk tampilkan di tengah"
          className="animate-float absolute -right-4 sm:-right-9 -bottom-3 sm:-bottom-5 w-[34%] sm:w-[36%] aspect-[4/3] rotate-6 sm:rotate-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_18px_40px_-6px_rgba(16,28,44,0.38)] border-2 border-white bg-[#101C2C] z-20 cursor-pointer hover:scale-110 hover:rotate-3 hover:z-30 transition-all duration-300 group"
        >
          <div className="relative w-full h-full">
            <Image
              src={photos[rightIdx].src}
              alt={photos[rightIdx].alt}
              fill
              className="object-cover group-hover:opacity-95 transition-opacity"
              sizes="(max-width: 768px) 35vw, 20vw"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
