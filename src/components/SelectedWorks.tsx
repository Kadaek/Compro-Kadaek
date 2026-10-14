"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  awards: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: "fintrack",
    number: "01",
    title: "FINTRACK CORP",
    category: "Fintech Platform & Cloud Core",
    year: "2025",
    awards: "Awwwards Site of the Day / FWA Daily",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "logismart",
    number: "02",
    title: "LOGISMART FLEET",
    category: "Supply Chain IoT & Mobile System",
    year: "2025",
    awards: "CSSDA Best UI/UX / Innovation",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "educore",
    number: "03",
    title: "EDUCORE ECOSYSTEM",
    category: "High-Load Streaming & Web Platform",
    year: "2024",
    awards: "Awwwards Developer Award",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "atlas",
    number: "04",
    title: "ATLAS PROTOCOL",
    category: "Web3 Enterprise Infrastructure",
    year: "2024",
    awards: "FWA of the Day",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "spatial",
    number: "05",
    title: "SPATIAL STUDIO",
    category: "3D Product Visualization & Brand",
    year: "2024",
    awards: "CSSDA Website of the Month",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function SelectedWorks() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let currentX = -500;
    let currentY = -500;
    let targetX = -500;
    let targetY = -500;
    let rafId = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const loop = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      setMousePos({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="works" className="py-28 px-6 sm:px-12 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-baseline justify-between mb-16 pb-4 border-b border-[#101C2C]/10 gap-4">
        <div>
          <span className="text-xs font-mono text-[#526D9B] uppercase tracking-widest">[ 02 — SELECTED WORK ]</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#101C2C] mt-2">
            Karya & Rekayasa Terpilih
          </h2>
        </div>
        <div className="text-xs font-mono text-[#526D9B] uppercase tracking-wider">
          Total /05 Proyek Utama
        </div>
      </div>

      {/* Projects List with Group Dimming */}
      <div className="dim-group divide-y divide-[#101C2C]/10 border-b border-[#101C2C]/10">
        {PROJECTS.map((proj) => (
          <div
            key={proj.id}
            onMouseEnter={() => setActiveProject(proj)}
            onMouseLeave={() => setActiveProject(null)}
            className="dim-item group py-8 sm:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer transition-all duration-300 relative"
          >
            <div className="flex items-baseline gap-6 sm:gap-12">
              <span className="text-xs sm:text-sm font-mono text-[#526D9B] group-hover:text-[#101C2C] transition-colors font-semibold">
                /{proj.number}
              </span>
              <div>
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#101C2C] tracking-tight group-hover:translate-x-3 transition-transform duration-300">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#526D9B] mt-2">
                  {proj.category}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 md:text-right">
              <div className="hidden sm:block">
                <div className="text-xs font-mono text-[#101C2C] uppercase tracking-wider font-medium">
                  {proj.awards}
                </div>
                <div className="text-xs font-mono text-[#526D9B] mt-0.5">
                  Tahun {proj.year}
                </div>
              </div>
              <div className="w-11 h-11 rounded-full border border-[#101C2C]/15 bg-[#E9EDF2] group-hover:bg-[#101C2C] group-hover:text-white text-[#101C2C] flex items-center justify-center transition-all duration-300 shrink-0 shadow-sm">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Cursor Media Preview (Signature huyml.co style) */}
      <div
        className="hover-preview-card pointer-events-none hidden md:block"
        style={{
          left: `${mousePos.x + 24}px`,
          top: `${mousePos.y + 24}px`,
          opacity: activeProject ? 1 : 0,
          transform: activeProject ? "scale(1) translate(0, 0)" : "scale(0.85) translate(20px, 20px)",
        }}
      >
        {activeProject && (
          <div className="w-76 h-48 rounded-xl overflow-hidden border border-[#101C2C]/20 shadow-2xl bg-white relative">
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101C2C]/90 via-transparent to-transparent p-4 flex flex-col justify-end">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E9EDF2]">
                {activeProject.category}
              </span>
              <span className="text-sm font-bold text-white tracking-tight">
                {activeProject.title}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
