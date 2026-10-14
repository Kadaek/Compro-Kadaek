"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  accolade: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: "fintrack",
    number: "01",
    title: "FinTrack Corporate",
    subtitle: "Enterprise Treasury & Automated Clearing Hub",
    category: "Fintech Platform · Cloud Core",
    year: "2025",
    accolade: "Awwwards Site of the Day",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "logismart",
    number: "02",
    title: "LogiSmart Fleet OS",
    subtitle: "Autonomous Telemetry & Supply Chain Mesh",
    category: "Industrial IoT · Mobile Systems",
    year: "2025",
    accolade: "CSSDA Best UI/UX Innovation",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "educore",
    number: "03",
    title: "EduCore Platform",
    subtitle: "Adaptive Interactive Learning & Media Edge",
    category: "High-Load Streaming · Web Architecture",
    year: "2024",
    accolade: "FWA Daily Showcase",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "atlas",
    number: "04",
    title: "Atlas Protocols",
    subtitle: "Distributed Ledger & Settlement Interface",
    category: "Web3 Systems · Security Auditing",
    year: "2024",
    accolade: "Developer Choice Honors",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "spatial",
    number: "05",
    title: "Spatial Interactive",
    subtitle: "Realtime 3D Product Canvas & Configurator",
    category: "Visual Computing · Brand Experience",
    year: "2024",
    accolade: "Design Direction Special Mention",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function SelectedWorks() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

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
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;
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
    <section id="works" className="py-28 px-6 sm:px-12 max-w-7xl mx-auto relative bg-[#FFFFFF]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-baseline justify-between mb-16 pb-4 border-b border-[#101C2C]/10 gap-3">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#526D9B] uppercase tracking-[0.2em] font-semibold">
            [ 02 — SELECTED WORKS ]
          </span>
          <h2 className="text-sm font-heading font-bold tracking-tight text-[#101C2C] uppercase">
            Selected Digital Engineering
          </h2>
        </div>
        <div className="text-xs font-mono text-[#526D9B] uppercase tracking-wider">
          Archive /05 Featured Cases
        </div>
      </div>

      {/* Projects List with Signature huyml Group Dimming */}
      <div className="dim-group divide-y divide-[#101C2C]/10 border-b border-[#101C2C]/10">
        {PROJECTS.map((proj) => (
          <div
            key={proj.id}
            onMouseEnter={() => setActiveProject(proj)}
            onMouseLeave={() => setActiveProject(null)}
            className="dim-item group py-10 sm:py-14 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer transition-all duration-300"
          >
            {/* Left: Index + Title + Subtitle */}
            <div className="flex items-baseline gap-6 sm:gap-12 md:max-w-2xl">
              <span className="text-xs sm:text-sm font-mono text-[#526D9B] group-hover:text-[#101C2C] transition-colors font-semibold">
                /{proj.number}
              </span>
              <div>
                <h3 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#101C2C] tracking-tight group-hover:translate-x-3 transition-transform duration-300">
                  {proj.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#526D9B] mt-2 font-normal">
                  {proj.subtitle}
                </p>
              </div>
            </div>

            {/* Right: Accolades + Category + Arrow */}
            <div className="flex items-center gap-8 md:text-right pl-12 md:pl-0">
              <div className="hidden sm:block">
                <div className="font-mono text-xs text-[#101C2C] font-semibold tracking-wider uppercase">
                  {proj.category}
                </div>
                <div className="font-mono text-[11px] text-[#526D9B] mt-1">
                  {proj.accolade} • {proj.year}
                </div>
              </div>

              <div className="w-12 h-12 rounded-full border border-[#101C2C]/15 bg-[#E9EDF2] group-hover:bg-[#101C2C] group-hover:text-white text-[#101C2C] flex items-center justify-center transition-all duration-300 shrink-0 shadow-sm">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Hover Card (Signature huyml.co Effect) */}
      <div
        className="hover-preview-card pointer-events-none hidden md:block"
        style={{
          left: `${mousePos.x + 28}px`,
          top: `${mousePos.y + 28}px`,
          opacity: activeProject ? 1 : 0,
          transform: activeProject ? "scale(1) translate(0, 0)" : "scale(0.85) translate(20px, 20px)",
        }}
      >
        {activeProject && (
          <div className="w-80 h-52 rounded-2xl overflow-hidden border border-[#101C2C]/15 shadow-2xl bg-white relative">
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101C2C]/90 via-[#101C2C]/20 to-transparent p-5 flex flex-col justify-end">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#E9EDF2] font-medium">
                {activeProject.category}
              </span>
              <span className="font-heading text-base font-extrabold text-white tracking-tight mt-0.5">
                {activeProject.title}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
