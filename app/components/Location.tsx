import { Clock, MapPin, Phone } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="bg-[#FCFAF7] pt-16 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-14 text-center">
          <div className="mx-auto mb-5 h-1 w-14 rounded-full bg-amber-700" />

          <h2 className="font-serif text-5xl text-[#2E2118]">Temukan Kami</h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-500">
            Berlokasi strategis di Jatinangor dan mudah dijangkau. Datang dan
            rasakan suasana nyaman Heya Space 2.0.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
          {/* Google Maps */}

          <div className="overflow-hidden rounded-3xl shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=Heya+Space+2.0+Jatinangor&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              className="border-0"
            />
          </div>

          {/* Information */}

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            {/* Address */}

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-amber-100 p-3">
                <MapPin className="text-amber-700" size={22} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#2E2118]">Alamat</h3>

                <p className="mt-2 leading-7 text-zinc-500">
                  Jl. GKPN No.37, Cibeusi, Jatinangor,
                  <br />
                  Kabupaten Sumedang, Jawa Barat
                </p>
              </div>
            </div>

            <div className="my-8 h-px bg-zinc-200" />

            {/* Hours */}

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-amber-100 p-3">
                <Clock className="text-amber-700" size={22} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#2E2118]">
                  Jam Operasional
                </h3>

                <p className="mt-2 leading-7 text-zinc-500">
                  Senin - Minggu
                  <br />
                  08.00 - 23.00 WIB
                </p>
              </div>
            </div>

            <div className="my-8 h-px bg-zinc-200" />

            {/* Contact */}

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-amber-100 p-3">
                <Phone className="text-amber-700" size={22} />
              </div>

              <div className="w-full">
                <h3 className="text-lg font-semibold text-[#2E2118]">
                  Hubungi Kami
                </h3>

                <p className="mt-2 text-zinc-500">+62 xxx xxxx xxxx</p>

                <a
                  href="#"
                  className="mt-6 inline-flex rounded-xl bg-amber-700 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-amber-800 hover:shadow-lg"
                >
                  💬 Chat via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
