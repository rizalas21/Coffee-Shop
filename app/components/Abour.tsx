import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16 scroll-mt-10">
      <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        {/* LEFT */}
        <div className="max-w-lg">
          <div className="mb-5 h-1 w-14 rounded-full bg-amber-700" />

          <h2 className="text-5xl mt-8 font-serif font-semibold leading-tight text-[#2E2118]">
            Tentang
            <br />
            Heya Space 2.0
          </h2>

          <p className="mt-8 text-[17px] leading-8 text-zinc-600">
            Heya Space 2.0 adalah cafe yang berada di Jatinangor, menyediakan
            tempat nyaman untuk nongkrong, belajar, meeting, hingga work from
            cafe.
          </p>

          <p className="mt-5 text-[17px] leading-8 text-zinc-600">
            Kami menghadirkan suasana hangat dengan pelayanan terbaik, pilihan
            kopi berkualitas, dan menu makanan yang cocok menemani aktivitasmu.
          </p>

          <a
            href="#menu"
            className="mt-10 rounded-xl border border-amber-700 px-8 py-3 text-lg font-medium cursor-pointer text-amber-700 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-700 hover:text-white hover:shadow-xl"
          >
            Jelajahi Menu →
          </a>
        </div>

        {/* RIGHT */}
        <div className="grid h-[520px] grid-cols-[1.7fr_1fr] gap-4">
          {/* IMAGE BESAR */}
          <div className="group relative overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop"
              alt="Heya Space 2.0"
              fill
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* KANAN */}
          <div className="flex flex-col gap-4">
            <div className="group relative h-[58%] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                alt="Heya Space 2.0"
                fill
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="grid h-[42%] grid-cols-2 gap-4">
              <div className="group relative overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop"
                  alt="Heya Space 2.0"
                  fill
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="group relative overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"
                  alt="Heya Space 2.0"
                  fill
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
