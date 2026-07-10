import { Star } from "lucide-react";

export default function Reviews() {
  const dataCards = [
    {
      name: "Yudha P. D",
      review:
        "Lokasinya strategis di Jatinangor. Tempatnya luas, nyaman, cocok untuk nongkrong maupun mengerjakan tugas.",
    },
    {
      name: "Zakia Aurora",
      review:
        "Tempatnya terang, sirkulasi udara bagus, makanan enak, dan sangat nyaman untuk work from cafe.",
    },
    {
      name: "Local Guide",
      review:
        "Kopinya enak banget. Pelayanannya ramah dan suasananya bikin betah berlama-lama.",
    },
  ];

  return (
    <section id="reviews" className="bg-[#FCFAF7] pt-16 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="text-center">
          <div className="mx-auto mb-5 h-1 w-14 rounded-full bg-amber-700" />

          <h2 className="font-serif text-5xl text-[#2E2118]">
            Apa Kata Mereka
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-500">
            Kepuasan pelanggan menjadi prioritas kami. Berikut beberapa ulasan
            dari pengunjung Heya Space 2.0.
          </p>

          {/* Rating */}

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex text-yellow-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>

            <p className="font-medium text-zinc-600">
              <span className="font-bold text-[#2E2118]">4.9/5</span> • 199+
              Google Reviews
            </p>
          </div>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {dataCards.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Stars */}

              <div className="mb-6 flex gap-1 text-yellow-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review */}

              <p className="relative leading-8 text-zinc-600">
                <span className="absolute -top-7 text-3xl font-serif text-amber-700/25">
                  "
                </span>

                {item.review}
              </p>

              {/* User */}

              <div className="mt-10 flex items-center gap-4 border-t border-zinc-100 pt-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-700 text-lg font-semibold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-[#2E2118]">{item.name}</h3>

                  <p className="text-sm text-zinc-500">⭐ Google Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}

        <div className="mt-14 text-center">
          <a
            href="https://maps.app.goo.gl/6QRPBbrVe5AKQJo29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-amber-700 px-8 py-4 font-medium text-amber-700 transition-all duration-300 hover:bg-amber-700 hover:text-white hover:shadow-lg"
          >
            Lihat Semua Review →
          </a>
        </div>
      </div>
    </section>
  );
}
