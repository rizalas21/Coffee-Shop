export default function Hero() {
  return (
    <section id="home" className="relative flex h-screen items-center">
      <img
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1800&auto=format&fit=crop"
        className="absolute inset-0 h-full w-full object-cover"
        alt=""
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-7xl px-12 text-white space-y-6">
        <h2 className="max-w-3xl text-6xl font-black leading-tight">
          Tempat Favorit untuk Nongkrong, Belajar & WFC di Jatinangor.
        </h2>
        <p className="max-w-xl text-lg text-zinc-200">
          Nikmati kopi berkualitas, makanan lezat, dan suasana nyaman di Heya
          Space 2.0.
        </p>
        <span className="rounded-full bg-white/30 hover:bg-white/60 px-4 py-2 backdrop-blur">
          ⭐ 4.9 • (+199 Google Reviews)
        </span>
        <div className="mt-10 flex gap-4">
          <a className="rounded-xl bg-amber-700 px-6 py-3 font-semibold text-white">
            Lihat Menu
          </a>
          <a className="rounded-xl border border-white px-6 py-3 font-semibold">
            Kunjungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}
