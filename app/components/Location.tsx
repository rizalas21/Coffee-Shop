import { Clock, MapPin, Phone } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="bg-[#FCFAF7] pt-16 pb-16 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-amber-700" />

          <h2 className="font-serif text-3xl md:text-5xl text-[#2E2118]">
            Temukan Kami
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-lg leading-relaxed md:leading-8 text-zinc-500">
            Berlokasi strategis di Jatinangor dan mudah dijangkau. Datang dan
            rasakan suasana nyaman Your Coffee Shop.
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-[1.5fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl border border-zinc-200/60 bg-white shadow-sm transition-shadow hover:shadow-md">
            <iframe
              src="https://www.google.com/maps?q=Heya+Space+2.0+Jatinangor&output=embed"
              width="100%"
              className="border-0 h-[300px] md:h-[500px] w-full"
              loading="lazy"
            />
          </div>

          <div className="rounded-3xl bg-white p-6 md:p-8 border border-zinc-200/60 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-amber-50 p-3 shrink-0">
                  <MapPin className="text-amber-700" size={20} />
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-semibold text-[#2E2118]">
                    Alamat
                  </h3>
                  <p className="mt-1 text-sm md:text-base leading-relaxed text-zinc-500">
                    Jl. GKPN No.37, Cibeusi, Jatinangor,
                    <br />
                    Kabupaten Sumedang, Jawa Barat
                  </p>
                </div>
              </div>

              <div className="h-px bg-zinc-100" />

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-amber-50 p-3 shrink-0">
                  <Clock className="text-amber-700" size={20} />
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-semibold text-[#2E2118]">
                    Jam Operasional
                  </h3>
                  <p className="mt-1 text-sm md:text-base leading-relaxed text-zinc-500">
                    Senin - Minggu
                    <br />
                    08.00 - 23.00 WIB
                  </p>
                </div>
              </div>

              <div className="h-px bg-zinc-100" />

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-amber-50 p-3 shrink-0">
                  <Phone className="text-amber-700" size={20} />
                </div>

                <div className="w-full">
                  <h3 className="text-base md:text-lg font-semibold text-[#2E2118]">
                    Hubungi Kami
                  </h3>
                  <p className="mt-1 text-sm md:text-base text-zinc-500">
                    +62 xxx xxxx xxxx
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 w-full">
              <a
                href="#"
                className="block text-center w-full md:w-auto md:inline-flex justify-center rounded-xl bg-amber-700 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-amber-800"
              >
                💬 Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
