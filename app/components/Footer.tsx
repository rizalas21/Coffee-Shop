import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Clock, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden bg-[#2A2018] text-white">
      {/* Background Blur */}
      <div className="absolute -left-32 -top-40 h-80 w-80 rounded-full bg-amber-600/10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-4xl">
              Heya <span className="text-amber-500">Space</span>
            </h2>

            <p className="mt-5 max-w-sm leading-8 text-zinc-400">
              Tempat nyaman untuk menikmati kopi, makanan, work from cafe,
              meeting, dan quality time bersama teman maupun keluarga.
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-600"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-4" />
              </a>

              <a
                href="https://maps.app.goo.gl/6QRPBbrVe5AKQJo29"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-600"
              >
                <MapPin size={18} />
              </a>

              <a
                href="tel:+628123456789"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-600"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Navigation</h3>

            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="transition hover:text-amber-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="transition hover:text-amber-400">
                  Tentang
                </a>
              </li>

              <li>
                <a href="#menu" className="transition hover:text-amber-400">
                  Menu
                </a>
              </li>

              <li>
                <a href="#gallery" className="transition hover:text-amber-400">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#location" className="transition hover:text-amber-400">
                  Lokasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact</h3>

            <div className="space-y-5 text-zinc-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-amber-500" />

                <p>
                  Jl. GKPN No.37
                  <br />
                  Cibeusi, Jatinangor
                  <br />
                  Sumedang
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500" />

                <a
                  href="tel:+628123456789"
                  className="transition hover:text-white"
                >
                  +62 812 3456 7890
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Opening Hours</h3>

            <div className="space-y-5 text-zinc-400">
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-1 text-amber-500" />

                <div>
                  <p>Senin - Minggu</p>
                  <p>08.00 - 23.00 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-zinc-500 md:flex-row">
          <p>© 2026 Heya Space 2.0. All Rights Reserved.</p>

          <p>
            Designed & Developed by{" "}
            <span className="text-amber-500">Rizal Sudrajat</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
