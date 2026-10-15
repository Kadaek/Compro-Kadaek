"use client";

import HeroFloatingShowcase from "@/components/HeroFloatingShowcase";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="about"
      className="snap-start snap-always relative h-[100dvh] max-h-[100dvh] flex flex-col justify-center items-center bg-[#FFFFFF] overflow-hidden pt-16 sm:pt-20 pb-4 sm:pb-6 px-4 sm:px-6 md:px-8 w-full max-w-full"
    >
      <div className="max-w-5xl xl:max-w-6xl mx-auto w-full h-full flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 text-center my-auto">
        
        {/* Center Stage: Friendly Headline -> Subheadline -> Single CTA (Spacious, No Dempet) */}
        <div className="animate-creative-reveal max-w-3xl sm:max-w-4xl mx-auto px-2 pt-4 sm:pt-6 md:pt-8">
          <h1 className="font-heading text-2xl xs:text-3xl sm:text-5xl md:text-[3.25rem] font-black text-[#101C2C] tracking-tight leading-[1.14] [text-wrap:balance] mt-1 sm:mt-2">
            Temukan solusimu dari ratusan ide para builder
          </h1>
          <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-[#526D9B] font-normal leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
            Kumpulan tools, template, dan software buatan developer yang bisa langsung kamu coba. Punya project keren juga? Pajang karyamu di sini secara gratis!
          </p>

          {/* Single Primary Action CTA: Jelajahi Tools */}
          <div className="flex items-center justify-center pt-5 sm:pt-6">
            <a
              href="#categories"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-[#101C2C] text-[#FFFFFF] text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#526D9B] transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <span>JELAJAHI TOOLS</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Center Stage: Floating Available Tools Showcase (Lifted closer, reduced margin-top) */}
        <div className="animate-creative-reveal-delay-1 w-full flex items-center justify-center -mt-1 sm:-mt-2 md:-mt-3">
          <HeroFloatingShowcase />
        </div>

      </div>
    </section>
  );
}
