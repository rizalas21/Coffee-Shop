export default function CTA() {
  return (
    <section className="pt-10 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#2E2118] px-8 py-10 text-center text-white shadow-xl">
          {/* Background Blur */}
          <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-amber-600/20 blur-[100px]" />
          <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-orange-500/20 blur-[100px]" />

          <div className="relative z-10">
            {/* Badge */}
            <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs backdrop-blur">
              ☕ Heya Space Experience
            </span>

            {/* Heading */}
            <h2 className="mx-auto mt-5 max-w-2xl font-serif text-3xl font-semibold leading-tight text-white lg:text-4xl">
              Siap Menikmati
              <br />
              Suasana Terbaik di Jatinangor?
            </h2>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-300 lg:text-base">
              Nongkrong, belajar, meeting, atau sekadar menikmati secangkir kopi
              dengan suasana yang nyaman.
            </p>

            {/* Info */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
              <span className="rounded-full bg-white/10 px-3 py-1.5">
                ⭐ 4.9 Google Reviews
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1.5">
                📶 WiFi Cepat
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1.5">
                🚗 Parkir Luas
              </span>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#location"
                className="rounded-lg bg-amber-700 px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-amber-800"
              >
                📍 Lihat Lokasi
              </a>

              <a
                href="#menu"
                className="rounded-lg border border-white/20 px-6 py-3 font-medium transition-all duration-300 hover:bg-white hover:text-[#2E2118]"
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
