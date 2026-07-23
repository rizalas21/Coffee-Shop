"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function FloatingWhatsApp() {
  const [showBubble, setShowBubble] = useState(true);

  const phone = "6281234567890";
  const message = encodeURIComponent(
    "Halo Your Coffee Shop, saya ingin bertanya mengenai reservasi.",
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {showBubble && (
        <div className="pointer-events-auto relative rounded-2xl bg-white p-4 shadow-xl shadow-zinc-950/10 border border-zinc-100 max-w-[240px] animate-in fade-in slide-in-from-bottom-3 duration-300">
          <button
            onClick={() => setShowBubble(false)}
            className="absolute right-2 top-2 rounded-full p-1 text-zinc-400 hover:bg-zinc-50 hover:text-zinc-600 transition cursor-pointer"
          >
            <X size={14} />
          </button>

          <p className="pr-4 text-sm font-bold text-zinc-800 tracking-tight">
            👋 Hai!
          </p>

          <p className="mt-1 text-xs sm:text-sm text-zinc-500 leading-relaxed">
            Ada yang ingin ditanyakan?
            <br />
            Chat kami lewat WhatsApp.
          </p>
        </div>
      )}

      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex h-10 w-10 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-[#25D366]/30"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl sm:text-3xl" />
      </a>
    </div>
  );
}
