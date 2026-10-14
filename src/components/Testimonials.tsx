import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "CTO, Finova Teknologi",
      comment:
        "Tim kadaek luar biasa profesional. Mereka tidak hanya memahami requirement teknis kami dengan tepat, namun juga memberikan saran arsitektur yang menghemat cost cloud kami secara signifikan.",
      rating: 5,
    },
    {
      name: "Sarah Wijaya",
      role: "Head of Product, TransLogis",
      comment:
        "Aplikasi mobile armada kami selesai tepat waktu dan tingkat bug sangat minim. Respon tim support kadaek selalu cepat dan solutif. Sangat direkomendasikan!",
      rating: 5,
    },
    {
      name: "Hendrik Prasetyo",
      role: "Founder, Kreasi Retail Group",
      comment:
        "Transformasi sistem POS dan inventory kami berjalan mulus bersama kadaek. Transisi dari offline ke platform online modern berjalan tanpa downtime berarti.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-slate-900/30 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Testimoni Klien
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Kepercayaan dari Mitra Kami
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Kisah nyata dari para pemimpin bisnis yang mempercayakan platform mereka kepada kadaek.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-blue-500/20 absolute top-6 right-6" />
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="font-semibold text-white text-base">
                  {t.name}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
