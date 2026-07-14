"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center md:justify-start"
    >
      <Image
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1800&auto=format&fit=crop"
        className="absolute inset-0 h-full w-full object-cover"
        fill
        priority
        alt=""
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-12 relative text-white">
        <div className="flex flex-col items-center text-center md:items-start md:text-left md:mt-2 space-y-3 md:space-y-2">
          <div className="inline-flex rounded-full bg-white/30 hover:bg-white/60 px-4 py-2 backdrop-blur text-xs sm:text-sm font-medium transition cursor-default">
            ⭐ 4.9 • (+199 Google Reviews)
          </div>

          <h2 className="max-w-xs sm:max-w-xl md:max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            Tempat Favorit untuk Nongkrong, Belajar & WFC di Jatinangor.
          </h2>

          <p className="max-w-sm sm:max-w-md md:max-w-xl text-sm sm:text-base md:text-lg text-zinc-200 leading-relaxed">
            Nikmati kopi berkualitas, makanan lezat, dan suasana nyaman di Heya
            Space 2.0.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#menu"
              className="inline-flex justify-center items-center rounded-xl bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800 text-center text-sm md:text-base"
            >
              Lihat Menu
            </a>
            <a
              href="https://maps.app.goo.gl/6QRPBbrVe5AKQJo29"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center rounded-xl border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-black text-center text-sm md:text-base"
            >
              Kunjungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
