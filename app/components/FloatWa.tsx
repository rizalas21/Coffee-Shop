"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function FloatingWhatsApp() {
  const [showBubble, setShowBubble] = useState(true);

  const phone = "6281234567890";
  const message = encodeURIComponent(
    "Halo Heya Space 2.0, saya ingin bertanya mengenai reservasi.",
  );

  return (
    <div className=" flex flex-col fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Bubble */}
      {showBubble && (
        <div className="relative rounded-2xl bg-white px-4 py-3 shadow-2xl border max-w-[250px] animate-in fade-in slide-in-from-right-3 duration-300">
          <button
            onClick={() => setShowBubble(false)}
            className="absolute right-2 top-2 rounded-full p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700"
          >
            <X size={16} />
          </button>

          <p className="pr-5 text-sm font-semibold text-zinc-800">👋 Hai!</p>

          <p className="mt-1 text-sm text-zinc-600">
            Ada yang ingin ditanyakan?
            <br />
            Chat kami lewat WhatsApp.
          </p>
        </div>
      )}

      {/* Tombol WhatsApp */}
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
    </div>
  );
}
