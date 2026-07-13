"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Apakah bisa reservasi tempat?",
    answer:
      "Tentu. Silakan hubungi kami melalui WhatsApp untuk melakukan reservasi.",
  },
  {
    question: "Apakah tersedia WiFi?",
    answer: "Ya, tersedia WiFi gratis untuk seluruh pelanggan.",
  },
  {
    question: "Apakah menerima pembayaran QRIS?",
    answer:
      "Kami menerima QRIS, transfer bank, kartu debit, kartu kredit, maupun pembayaran tunai.",
  },
  {
    question: "Jam berapa Heya Space 2.0 buka?",
    answer: "Setiap hari pukul 09.00 – 22.00 WIB.",
  },
  {
    question: "Apakah tersedia smoking area?",
    answer:
      "Ya. Kami menyediakan area indoor maupun outdoor, termasuk smoking area.",
  },
  {
    question: "Apakah tersedia tempat parkir?",
    answer: "Tersedia area parkir untuk motor maupun mobil.",
  },
  {
    question: "Apakah cocok untuk Work From Cafe?",
    answer:
      "Tentu. Kami menyediakan WiFi, stop kontak, serta suasana yang nyaman untuk bekerja ataupun belajar.",
  },
  {
    question: "Apakah bisa untuk meeting atau acara kecil?",
    answer:
      "Bisa. Hubungi kami melalui WhatsApp untuk informasi reservasi dan kapasitas ruangan.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#faf7f2] pb-16 mt-16 scroll-mt-26">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-6">
          <div className="mb-4 h-1 w-14 rounded-full bg-amber-700"></div>

          <h2 className="font-serif text-5xl text-[#2E2118]">FAQ</h2>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white overflow-hidden">
          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <div
                key={faq.question}
                className={`${
                  index !== faqs.length - 1 ? "border-b border-zinc-100" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(active ? null : index)}
                  className="flex w-full items-center justify-between px-8 py-6 text-left transition hover:bg-zinc-50"
                >
                  <h3 className="text-[17px] font-medium text-[#2E2118]">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    size={20}
                    className={`transition duration-300 ${
                      active ? "rotate-180 text-amber-700" : "text-zinc-400"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-6 leading-8 text-zinc-500">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
