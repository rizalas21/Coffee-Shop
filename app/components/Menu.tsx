"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { menus } from "../data/menus";

export default function Menu() {
  const categories = ["All", "Coffee", "Non Coffee", "Food"] as const;
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof categories)[number]>("All");

  const filteredMenus = useMemo(() => {
    if (selectedCategory === "All") {
      return menus.filter((menu) => menu.featured);
    }
    return menus.filter((menu) => menu.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="menu" className="scroll-mt-10 pt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 h-1 w-12 rounded-full bg-amber-700" />
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#2E2118]">
              Menu
            </h2>
            <p className="mt-3 max-w-xl text-sm md:text-base leading-relaxed text-zinc-500">
              Nikmati pilihan minuman dan hidangan terbaik yang dibuat dengan
              bahan berkualitas untuk menemani setiap momen di Heya Coffee.
            </p>

            <div className="mt-8 flex gap-3 overflow-x-auto pb-2 scrollbar-none -mx-6 px-6 lg:mx-0 lg:px-0">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`relative rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 border whitespace-nowrap cursor-pointer z-10 ${
                      isActive
                        ? "text-white border-amber-700"
                        : "text-zinc-600 border-zinc-200 hover:border-amber-700/50 hover:text-amber-700"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryPill"
                        className="absolute inset-0 -z-10 rounded-full bg-amber-700 shadow-sm shadow-amber-950/20"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {category === "All" ? "✨ Rekomendasi" : category}
                  </button>
                );
              })}
            </div>
          </div>

          <a
            href="https://drive.google.com/file/d/1v9J374EDk_VmDZ_WoHKdhVNWSRGV05-h/view"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden lg:inline-flex items-center gap-2.5 rounded-xl border border-amber-700/30 px-5 py-3 text-sm font-semibold text-amber-700 transition duration-300 hover:bg-amber-700 hover:text-white hover:border-amber-700"
          >
            Lihat Menu Lengkap (PDF)
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        <motion.div
          layout
          className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenus.map((menu) => (
              <motion.div
                key={menu.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col justify-between overflow-hidden rounded-[2rem] border border-zinc-100 bg-white p-4 shadow-md transition duration-500 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div>
                  <div className="relative h-56 overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={menu.image}
                      alt={menu.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-amber-800 shadow-sm">
                      {menu.category}
                    </span>
                  </div>

                  <div className="px-1 pt-4 pb-3">
                    <h3 className="text-lg font-bold text-[#2E2118] tracking-tight group-hover:text-amber-800 transition-colors">
                      {menu.name}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-zinc-400 line-clamp-2">
                      {menu.description}
                    </p>
                  </div>
                </div>

                <div className="px-1 pb-1 pt-2 flex items-center justify-between border-t border-zinc-50">
                  <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
                    Harga
                  </span>
                  <p className="text-base sm:text-lg font-black text-amber-700">
                    Rp {menu.price.toLocaleString("id-ID")}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 text-center lg:hidden">
          <a
            href="https://drive.google.com/file/d/1v9J374EDk_VmDZ_WoHKdhVNWSRGV05-h/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-amber-700 px-6 py-3.5 text-sm font-semibold text-white w-full sm:w-auto shadow-md"
          >
            Lihat Menu Lengkap (PDF) →
          </a>
        </div>
      </div>
    </section>
  );
}
