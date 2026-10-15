"use client";

import { useEffect, useState } from "react";
import { KadaekBrand, KadaekMonogram } from "@/components/KadaekLogo";

export default function Preloader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if intro has already been displayed in this browser session
    const hasSeenIntro = sessionStorage.getItem("kadaek_intro_shown");

    if (hasSeenIntro) {
      // User has already visited — do NOT show preloader on refresh
      setShouldRender(false);
      return;
    }

    // First-time visit: show preloader once and mark session as seen
    setShouldRender(true);
    sessionStorage.setItem("kadaek_intro_shown", "true");

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200);

    const unmountTimer = setTimeout(() => {
      setShouldRender(false);
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      role="status"
      aria-label="Loading Kadaek"
      className={`fixed inset-0 z-[99999] bg-[#FFFFFF] text-[#101C2C] flex flex-col items-center justify-center p-6 select-none transition-opacity duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center text-center">
        {/* Official Geometric Monogram */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-5 text-[#101C2C]">
          <KadaekMonogram className="w-full h-full text-[#101C2C]" />
        </div>

        {/* Wordmark */}
        <h1 className="font-heading text-3xl sm:text-4xl font-black tracking-[0.2em] text-[#101C2C] uppercase leading-none">
          KADAEK
        </h1>

        <p className="font-sans text-[10px] sm:text-xs tracking-[0.35em] text-[#526D9B] uppercase font-semibold mt-2.5">
          TECHNOLOGY COMPANY
        </p>

        {/* Minimal Hairline Accent */}
        <div className="w-12 h-0.5 bg-[#101C2C]/10 rounded-full overflow-hidden mt-6">
          <div className="w-full h-full bg-[#101C2C] animate-[pulse_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
