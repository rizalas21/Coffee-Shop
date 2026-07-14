export default function CTA() {
  return (
    <section className="pt-10 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.06] bg-[#2E2118] px-6 sm:px-8 py-12 md:py-16 text-center text-white shadow-xl">
          <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-amber-600/10 blur-[100px]" />
          <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-orange-500/10 blur-[100px]" />

          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 text-[11px] tracking-wider uppercase text-zinc-300 backdrop-blur">
              ☕ Heya Space Experience
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl font-serif text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white leading-relaxed">
              Siap Menikmati Suasana Terbaik di Jatinangor?
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-xs sm:text-sm leading-relaxed text-zinc-400">
              Nongkrong, belajar, meeting, atau sekadar menikmati secangkir kopi
              dengan suasana yang nyaman.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2 text-[11px] text-zinc-300">
              <span className="rounded-full bg-white/[0.06] px-3 py-1.5 whitespace-nowrap">
                ⭐ 4.9 Google Reviews
              </span>

              <span className="rounded-full bg-white/[0.06] px-3 py-1.5 whitespace-nowrap">
                📶 WiFi Cepat
              </span>

              <span className="rounded-full bg-white/[0.06] px-3 py-1.5 whitespace-nowrap">
                🚗 Parkir Luas
              </span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 max-w-xs sm:max-w-none mx-auto">
              <a
                href="#location"
                className="w-full sm:w-auto text-center rounded-xl bg-amber-700 px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-amber-800"
              >
                📍 Lihat Lokasi
              </a>

              <a
                href="#menu"
                className="w-full sm:w-auto text-center rounded-xl border border-white/10 px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-white hover:text-[#2E2118]"
              >
                🍽️ Jelajahi Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
