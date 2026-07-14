import { Star } from "lucide-react";
import { dataCards } from "../data/reviews";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#FCFAF7] pt-16 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="mx-auto mb-5 h-1 w-14 rounded-full bg-amber-700" />

          <h2 className="font-serif text-4xl md:text-5xl text-[#2E2118]">
            Apa Kata Mereka
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base leading-7 md:leading-8 text-zinc-500">
            Kepuasan pelanggan menjadi prioritas kami. Berikut beberapa ulasan
            dari pengunjung Heya Space 2.0.
          </p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="flex text-yellow-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>

            <p className="text-sm md:text-medium font-medium text-zinc-600">
              <span className="font-bold text-[#2E2118]">4.9/5</span> • 199+
              Google Reviews
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-12 grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-3">
          {dataCards.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-6 md:p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center gap-4 border-b border-zinc-100 pb-5">
                <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-amber-700 text-base md:text-lg font-semibold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-sm md:text-base font-semibold text-[#2E2118]">
                    {item.name}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-500">
                    ⭐ Google Review
                  </p>
                </div>
              </div>

              <div className="mb-4 flex gap-1 text-yellow-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="relative text-sm md:text-base leading-7 md:leading-8 text-zinc-600 pt-1">
                <span className="absolute -top-4 left-0 text-3xl font-serif text-amber-700/25 select-none">
                  "
                </span>
                {item.review}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 md:mt-4 text-center">
          <a
            href="https://maps.app.goo.gl/6QRPBbrVe5AKQJo29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-amber-700 px-8 py-3.5 md:py-4 text-sm md:text-base font-medium text-amber-700 transition-all duration-300 hover:bg-amber-700 hover:text-white hover:shadow-lg w-full sm:w-auto"
          >
            Lihat Semua Review →
          </a>
        </div>
      </div>
    </section>
  );
}
