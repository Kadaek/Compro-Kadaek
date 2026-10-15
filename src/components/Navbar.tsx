"use client";

import { KadaekBrand } from "@/components/KadaekLogo";
import { ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const navItems = [
    { id: "about", label: "About" },
    { id: "categories", label: "Categories" },
    { id: "featured", label: "Featured Tools" },
    { id: "submit", label: "Submit" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-transparent pointer-events-none transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-16 sm:h-20 flex items-center justify-between pointer-events-auto w-full">
        {/* Brand Logo in Deep Navy */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <KadaekBrand inverted={false} />
        </a>

        {/* Clean Friendly Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-colors py-1 relative ${
                activeSection === item.id
                  ? "text-[#101C2C] font-semibold"
                  : "text-[#101C2C]/60 hover:text-[#101C2C]"
              }`}
            >
              <span>{item.label}</span>
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#101C2C] rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Action: Submit Product to Platform */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="#submit"
            className="inline-flex items-center gap-1 sm:gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#101C2C] text-[#FFFFFF] text-[11px] sm:text-xs font-semibold tracking-wider hover:bg-[#526D9B] transition-all shadow-sm active:scale-95 shrink-0"
          >
            <span className="hidden xs:inline">SUBMIT PRODUK</span>
            <span className="xs:hidden">SUBMIT</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </header>
  );
}
