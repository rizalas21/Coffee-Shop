import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#FCFAF7] pt-16 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <div className="mb-5 h-1 w-14 rounded-full bg-amber-700"></div>

            <h2 className="font-serif text-5xl text-[#2E2118]">Galeri Kami</h2>

            <p className="mt-4 max-w-xl text-zinc-500 leading-8">
              Nikmati suasana hangat, interior yang nyaman, dan berbagai menu
              favorit di Your Coffee Shop.
            </p>
          </div>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-2 lg:grid-cols-12 gap-5">
          <div className="group col-span-2 lg:col-span-6 row-span-2 overflow-hidden rounded-3xl relative">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop"
              alt="Gallery Image 1"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div className="group col-span-1 lg:col-span-3 overflow-hidden rounded-3xl relative">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
              alt="Gallery Image 2"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div className="group col-span-1 lg:col-span-3 overflow-hidden rounded-3xl relative">
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
              alt="Gallery Image 3"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div className="group col-span-1 lg:col-span-3 overflow-hidden rounded-3xl relative">
            <Image
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop"
              alt="Gallery Image 4"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div className="group col-span-1 lg:col-span-3 overflow-hidden rounded-3xl relative">
            <Image
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop"
              alt="Gallery Image 5"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
