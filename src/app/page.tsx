"use client";

import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SelectedWorks from "@/components/SelectedWorks";
import Contact from "@/components/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "categories", "featured", "submit"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#101C2C] flex flex-col justify-between selection:bg-[#101C2C] selection:text-white w-full max-w-full overflow-x-hidden">
      {/* ── Cinematic Visual Preloader ── */}
      <Preloader />

      {/* ── Fixed Transparent Navbar ── */}
      <Navbar activeSection={activeSection} />

      {/* ── Sliced Section Modules ── */}
      <main className="flex-1 w-full max-w-full">
        <Hero />
        <Services />
        <SelectedWorks />
        <Contact />
      </main>
    </div>
  );
}
