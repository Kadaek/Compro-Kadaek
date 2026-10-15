"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles, Terminal } from "lucide-react";

export default function HeroFloatingShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: "video",
      src: "/videos/startup-office.mp4",
      tag: "REAL-TIME STUDIO",
      title: "Collaborative Engineering",
      desc: "Suasana kerja studio rekayasa perangkat lunak modern.",
    },
    {
      type: "image",
      src: "/cinematic_hero.jpg",
      tag: "FOUNDERS & CORE DEVS",
      title: "Engineered by Builders",
      desc: "Dua insinyur perangkat lunak dengan dedikasi presisi tinggi.",
    },
    {
      type: "video",
      src: "/videos/future-network.mp4",
      tag: "SYSTEM ARCHITECTURE",
      title: "Distributed Infrastructure",
      desc: "Simulasi alur komputasi & integritas jaringan terdistribusi.",
    },
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto select-none">
      {/* ── MAIN FLOATING CARD ── */}
      <div className="animate-float rounded-2xl sm:rounded-3xl border border-[#101C2C]/12 bg-[#101C2C] shadow-2xl shadow-[#101C2C]/15 overflow-hidden aspect-[4/3] sm:aspect-[16/11] relative group">
        {/* Slides Render */}
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {slide.type === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                >
                  <source src={slide.src} type="video/mp4" />
                </video>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              )}

              {/* Bottom Scrim & Caption */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-[#101C2C]/95 via-[#101C2C]/60 to-transparent text-white">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{slide.tag}</span>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-white">
                  {slide.title}
                </h3>
                <p className="text-xs text-white/70 mt-0.5 line-clamp-1">
                  {slide.desc}
                </p>
              </div>
            </div>
          );
        })}

        {/* Carousel Navigation Arrows */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Indicators Dots */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                i === currentSlide ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── FLOATING OVERLAPPING BADGE (MELAYANG DI SUDUT) ── */}
      <div className="animate-float-slow absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 z-30 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#101C2C]/10 shadow-xl shadow-[#101C2C]/10 flex items-center gap-3.5">
        <div className="w-9 h-9 rounded-xl bg-[#101C2C] text-white flex items-center justify-center shrink-0">
          <Terminal className="w-4 h-4 text-emerald-400" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-heading font-extrabold text-[#101C2C] uppercase tracking-wider">
              KADAEK LABS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <p className="text-[11px] font-mono text-[#526D9B] mt-0.5">
            Precision Systems · ID & SG
          </p>
        </div>
      </div>
    </div>
  );
}
