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
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto select-none py-10 sm:py-14 px-3 sm:px-6">
      <div className="relative w-full aspect-[16/11] max-w-[480px] mx-auto flex items-center justify-center">
        
        {/* ── LEFT TILTED PHOTO (OVERLAPPING ON THE LEFT) ── */}
        <div
          onClick={() => setCenterIdx(leftIdx)}
          title="Klik untuk tampilkan di tengah"
          className="animate-float-slow absolute -left-3 sm:-left-8 top-4 sm:top-8 w-[45%] sm:w-[48%] aspect-[4/3] -rotate-8 sm:-rotate-10 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_16px_36px_-8px_rgba(16,28,44,0.35)] border border-[#101C2C]/15 bg-[#101C2C] z-20 cursor-pointer hover:scale-105 hover:-rotate-4 hover:z-30 transition-all duration-300"
        >
          <div className="relative w-full h-full">
            <Image
              src={photos[leftIdx].src}
              alt={photos[leftIdx].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 30vw"
            />
            {/* Subtle photographic print grain / sheen */}
            <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors" />
          </div>
        </div>

        {/* ── CENTER MAIN PHOTO (LARGE & PROMINENT) ── */}
        <div className="relative w-[82%] sm:w-[84%] aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(16,28,44,0.3)] border border-[#101C2C]/12 bg-[#101C2C] z-10 transition-all duration-500">
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

        {/* ── RIGHT TILTED PHOTO (OVERLAPPING ON THE RIGHT) ── */}
        <div
          onClick={() => setCenterIdx(rightIdx)}
          title="Klik untuk tampilkan di tengah"
          className="animate-float absolute -right-3 sm:-right-8 bottom-2 sm:bottom-4 w-[46%] sm:w-[49%] aspect-[4/3] rotate-8 sm:rotate-10 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_18px_40px_-8px_rgba(16,28,44,0.38)] border border-[#101C2C]/15 bg-[#101C2C] z-20 cursor-pointer hover:scale-105 hover:rotate-4 hover:z-30 transition-all duration-300"
        >
          <div className="relative w-full h-full">
            <Image
              src={photos[rightIdx].src}
              alt={photos[rightIdx].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 30vw"
            />
            {/* Subtle photographic print grain / sheen */}
            <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors" />
          </div>
        </div>

      </div>
    </div>
  );
}
