import { Target, Compass, Award, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Fokus Solutif",
      desc: "Menghadirkan solusi yang secara langsung menjawab tantangan nyata bisnis klien dan menciptakan dampak terukur.",
    },
    {
      icon: Compass,
      title: "Inovasi Berkelanjutan",
      desc: "Mengadopsi teknologi terdepan untuk memastikan produk Anda siap menghadapi pertumbuhan dan tren masa depan.",
    },
    {
      icon: Award,
      title: "Kualitas Tanpa Kompromi",
      desc: "Menerapkan standar clean code, pengujian komprehensif, dan arsitektur berstandar industri.",
    },
    {
      icon: Users,
      title: "Kemitraan Jangka Panjang",
      desc: "Bukan sekadar vendor, kami adalah mitra strategis yang mendampingi kesuksesan digital Anda dari hulu ke hilir.",
    },
  ];

  return (
    <section id="tentang" className="py-24 bg-slate-900/30 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Vision */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              Tentang kadaek
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Membangun Ekosistem Digital Unggul untuk Perusahaan Modern
            </h2>
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              <strong className="text-white">kadaek</strong> adalah perusahaan teknologi yang berdedikasi membantu korporasi, UMKM, dan startup dalam merancang serta mewujudkan produk digital kelas dunia.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Berbekal tim insinyur perangkat lunak, perancang UI/UX, dan konsultan strategi digital yang berpengalaman, kami memadukan kreativitas dengan keahlian teknis untuk menghasilkan produk yang estetis, cepat, dan bernilai tinggi.
            </p>
            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="text-lg font-bold text-white">Visi</h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Menjadi katalisator transformasi teknologi terdepan yang memberdayakan industri di era digital.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="text-lg font-bold text-white">Misi</h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Menciptakan produk digital handal, aman, dan mudah digunakan dengan keunggulan rekayasa.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Values */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
