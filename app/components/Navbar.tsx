"use client";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "../data/navItems";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/80 shadow-sm backdrop-blur-xl py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
        {/* Logo */}

        <a href="#" className="group">
          <h1
            className={`font-serif font-semibold flex transition-all duration-500 ease-in-out ${
              scrolled
                ? "flex-row items-center gap-1 text-2xl text-[#2E2118]"
                : "flex-col text-3xl text-white"
            }`}
          >
            <span>
              <span className="text-4xl">H</span>eya
            </span>

            <span
              className={`text-amber-700 transition-all duration-500 ${
                scrolled ? "mr-10" : "ml-7"
              }`}
            >
              <span className="text-4xl">S</span>pace
            </span>
          </h1>
        </a>

        <nav
          className={`hidden items-center gap-10 md:flex ${
            scrolled ? "text-zinc-700" : "text-white"
          }`}
        >
          {navItems.map(([title, href]) => (
            <a
              key={title}
              href={href}
              className={`group relative text-[15px] transition-all ${activeSection === href.substring(1) ? "text-amber-700 font-medium" : "font-medium hover:text-amber-700 hover:-translate-y-0.5"}`}
            >
              {title}

              <span
                className={`absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-amber-700 transition-all duration-300 group-hover:w-full ${activeSection === href.substring(1) ? "w-full" : ""}`}
              ></span>
            </a>
          ))}
        </nav>

        {/* Button */}

        <a
          href="https://maps.app.goo.gl/6QRPBbrVe5AKQJo29"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
            scrolled
              ? "bg-amber-700 text-white hover:bg-amber-800 hover:-translate-y-0.5"
              : "border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-black"
          }`}
        >
          Kunjungi Kami
          <MapPin size={17} />
        </a>
      </div>
    </header>
  );
}
