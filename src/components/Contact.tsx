"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import { ArrowUpRight, Copy, Check, MessageSquare } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "submit@kadaek.id";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="submit"
      className="snap-start snap-always relative min-h-[100dvh] flex flex-col justify-between pt-16 sm:pt-20 border-t border-[#101C2C]/10 bg-[#FFFFFF]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full flex-1 flex flex-col justify-center py-6 sm:py-10">
        <ScrollReveal direction="up">
          <span className="text-xs font-mono text-[#526D9B] uppercase tracking-widest font-semibold">
            [ 03 — SUBMIT PRODUK ]
          </span>
        </ScrollReveal>

        <div className="mt-4 sm:mt-6 max-w-3xl">
          <ScrollReveal direction="up" delay={100}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#101C2C] tracking-tight leading-tight">
              Punya tool atau karya digital yang mau dipamerin?
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={180}>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-[#526D9B] leading-relaxed">
              Yuk daftarin project buatanmu di Kadaek Hub! Biar makin banyak yang tahu, dapet feedback langsung dari sesama builder, dan nambah pengguna pertama tanpa ribet dan tanpa biaya pendaftaran.
            </p>
          </ScrollReveal>

          {/* Direct Submission Email */}
          <ScrollReveal direction="up" delay={260}>
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 flex-wrap">
              <a
                href={`mailto:${email}?subject=Submission%20Produk%20Digital%20Kadaek`}
                className="font-heading text-2xl sm:text-4xl md:text-5xl font-black text-[#101C2C] hover:text-[#526D9B] tracking-tight transition-colors break-all sm:break-normal"
              >
                {email}
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#101C2C]/15 bg-[#E9EDF2] hover:bg-[#101C2C] hover:text-[#FFFFFF] text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#101C2C] transition-colors shadow-sm self-start sm:self-center cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "COPIED" : "COPY EMAIL"}</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Direct Instant Action: WhatsApp Submission */}
          <ScrollReveal direction="up" delay={340}>
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono max-w-full">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Kadaek,%20saya%20ingin%20submit%20produk/tools%20digital%20saya%20ke%20Kadaek%20Hub."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[#101C2C] hover:bg-[#526D9B] text-[#FFFFFF] font-medium transition-colors shadow-sm text-xs sm:text-sm max-w-full truncate"
              >
                <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>Submit via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70 shrink-0" />
              </a>

              <span className="text-[#526D9B] font-medium text-[11px] sm:text-xs">
                Kurasi cepat 1×24 jam
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Docked Footer */}
      <Footer />
    </section>
  );
}
