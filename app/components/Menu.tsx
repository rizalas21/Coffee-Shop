import Image from "next/image";

export default function Menu() {
  const menus = [
    {
      category: "Coffee",
      name: "Cappuccino",
      description: "Espresso dengan steamed milk dan busa susu yang lembut.",
      price: "25.000",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    },
    {
      category: "Non-Coffee",
      name: "Matcha Latte",
      description: "Teh hijau bubuk yang dicampur dengan susu panas.",
      price: "28.000",
      image:
        "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      category: "Food",
      name: "Chicken Rice Bowl",
      description: "Nasi dengan daging ayam goreng dan sayuran segar.",
      price: "35.000",
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
    },
    {
      category: "Snack",
      name: "French Fries",
      description: "Kentang goreng renyah dengan saus.",
      price: "22.000",
      image:
        "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section id="menu" className="pt-16 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="mb-5 h-1 w-14 rounded-full bg-amber-700"></div>

            <h2 className="font-serif text-5xl text-[#2E2118]">Menu Favorit</h2>
          </div>

          <button className="hidden items-center gap-3 rounded-full border border-amber-700 px-6 py-3 text-sm font-medium text-amber-700 transition hover:bg-amber-700 hover:text-white lg:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-700 text-white">
              →
            </span>
            Lihat Semua Menu
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {menus.map((menu) => (
            <div
              key={menu.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={menu.image}
                  alt={menu.name}
                  fill
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-2 p-5">
                <h3 className="text-xl font-semibold">{menu.name}</h3>
                <p className="text-zinc-500">{menu.description}</p>
                <p className="text-sm text-zinc-400">{menu.category}</p>
                <div className="h-[1px] w-full bg-zinc-200" />
                <p className="text-lg font-bold text-amber-700">
                  Rp {menu.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
