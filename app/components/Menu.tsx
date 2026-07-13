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
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 h-1 w-14 rounded-full bg-amber-700" />

            <h2 className="font-serif text-5xl text-[#2E2118]">Menu Favorit</h2>

            <p className="mt-4 max-w-xl leading-7 text-zinc-600">
              Explore our handcrafted drinks and freshly prepared dishes,
              carefully selected to give you the best Heya Coffee experience.
            </p>

            {/* Layout Filter Pill yang Lebih Smooth & Modern */}
            <div className="mt-8 inline-flex flex-wrap gap-2 rounded-2xl bg-zinc-100 p-1.5">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`relative rounded-xl px-5 py-2.5 text-sm font-medium transition-colors duration-300 z-10 ${
                      isActive
                        ? "text-white"
                        : "text-zinc-700 hover:text-amber-700"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute inset-0 -z-10 rounded-xl bg-amber-700 shadow-md"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {category === "All" ? "⭐ Featured" : category}
                  </button>
                );
              })}
            </div>
          </div>

          <a
            href="https://drive.google.com/file/d/1v9J374EDk_VmDZ_WoHKdhVNWSRGV05-h/view"
            target="_blank"
            className="group hidden items-center gap-3 rounded-full border border-amber-700 px-6 py-3 text-sm font-medium text-amber-700 transition hover:bg-amber-700 hover:text-white lg:flex"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-700 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-amber-700">
              →
            </span>
            View Full Menu
          </a>
        </div>

        {/* Grid Spacing yang Lebih Lega */}
        <motion.div layout className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredMenus.map((menu) => (
              <motion.div
                key={menu.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col justify-between overflow-hidden rounded-[2rem] border border-zinc-100 bg-white p-4 shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div>
                  {/* Image Container dengan bingkai bagian dalam (Aesthetic Layout) */}
                  <div className="relative h-60 overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={menu.image}
                      alt={menu.name}
                      fill
                      className="object-cover transition duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Soft Overlay saat di-hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-amber-700 backdrop-blur">
                      {menu.category}
                    </span>
                  </div>

                  {/* Content Detail dengan layout spacing yang pas */}
                  <div className="px-2 pt-5 pb-4">
                    <h3 className="text-xl font-semibold text-[#2E2118]">
                      {menu.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-500 line-clamp-3">
                      {menu.description}
                    </p>
                  </div>
                </div>

                {/* Bagian Bawah Card (Harga) tanpa garis kaku */}
                <div className="px-2 pb-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-zinc-400">
                    Price
                  </span>
                  <p className="text-lg font-bold text-amber-700">
                    Rp {menu.price.toLocaleString("id-ID")}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center lg:hidden">
          <a
            href="https://drive.google.com/file/d/1v9J374EDk_VmDZ_WoHKdhVNWSRGV05-h/view"
            target="_blank"
            className="inline-flex items-center gap-3 rounded-full border border-amber-700 px-6 py-3 text-sm font-medium text-amber-700 transition hover:bg-amber-700 hover:text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-700 text-white">
              →
            </span>
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
