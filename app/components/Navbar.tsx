"use client";
import { MapPin, Menu as MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "../data/navItems";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/80 shadow-sm backdrop-blur-xl py-3"
            : "bg-transparent pt-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8">
          <a href="#" className="group z-50">
            <h1
              className={`font-serif font-semibold flex transition-all duration-500 ease-in-out ${
                scrolled
                  ? "flex-row items-center gap-1 text-2xl text-[#2E2118]"
                  : "text-2xl md:text-3xl flex-row items-center gap-1 md:flex-col text-white"
              } ${isOpen ? "!text-[#2E2118]" : ""}`}
            >
              <span>
                <span className="text-3xl md:text-4xl">C</span>offee
              </span>
              <span
                className={`text-amber-700 transition-all duration-500 ${
                  scrolled ? "ml-1" : "ml-1 md:ml-14"
                }`}
              >
                <span className="text-3xl md:text-4xl">S</span>hop
              </span>
            </h1>
          </a>

          <nav
            className={`hidden items-center gap-8 lg:gap-10 md:flex ${
              scrolled ? "text-zinc-700" : "text-white"
            }`}
          >
            {navItems.map(([title, href]) => (
              <a
                key={title}
                href={href}
                className={`group relative text-[15px] transition-all ${
                  activeSection === href.substring(1)
                    ? "text-amber-700 font-medium"
                    : "font-medium hover:text-amber-700 hover:-translate-y-0.5"
                }`}
              >
                {title}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-amber-700 transition-all duration-300 group-hover:w-full ${
                    activeSection === href.substring(1) ? "w-full" : ""
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="https://maps.app.goo.gl/6QRPBbrVe5AKQJo29"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? "bg-amber-700 text-white hover:bg-amber-800 hover:-translate-y-0.5"
                  : "border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-black"
              }`}
            >
              Kunjungi Kami
              <MapPin size={17} />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative z-50 block p-2 md:hidden transition-colors duration-300 ${
              isOpen
                ? "text-[#2E2118]"
                : scrolled
                  ? "text-[#2E2118]"
                  : "text-white"
            }`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-white px-8 pt-28 pb-10 shadow-2xl md:hidden"
          >
            <nav className="flex flex-col gap-6 text-xl">
              {navItems.map(([title, href]) => (
                <a
                  key={title}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`w-fit py-1 text-2xl font-serif text-[#2E2118] transition-all duration-300 ${
                    activeSection === href.substring(1)
                      ? "text-amber-700 font-bold border-b-2 border-amber-700"
                      : "opacity-80"
                  }`}
                >
                  {title}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-zinc-100">
              <a
                href="https://maps.app.goo.gl/6QRPBbrVe5AKQJo29"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 w-full rounded-full bg-amber-700 py-4 font-medium text-white shadow-lg active:bg-amber-800"
              >
                Kunjungi Kami
                <MapPin size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
