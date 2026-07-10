import {
  faCar,
  faLaptop,
  faMugHot,
  faSeedling,
  faUtensils,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cards() {
  const features = [
    {
      icon: faMugHot,
      title: "Kopi Berkualitas",
      description: "Biji kopi pilihan, dengan rasa terbaik.",
    },
    {
      icon: faUtensils,
      title: "Makanan Lezat",
      description: "Beragam menu makanan dan camilan yang menggugah gurih.",
    },
    {
      icon: faLaptop,
      title: "Cocok untuk WFC",
      description: "Tempat luas, nyaman dan mendukung produktivitas.",
    },
    {
      icon: faWifi,
      title: "Wi-Fi Cepat",
      description:
        "Internet cepat dan stabil untuk mendukung aktivitas belajar atau bekerja.",
    },
    {
      icon: faSeedling,
      title: "Suasana Nyaman",
      description:
        "Desain interior yang hangat dan homey, cocok untuk bersantai.",
    },
    {
      icon: faCar,
      title: "Parkir Tersedia",
      description: "Parkir luas dan aman untuk kendaraan Anda.",
    },
  ];

  return (
    <section className="mx-auto -mt-15 grid max-w-full gap-6 px-6 md:grid-cols-6 relative z-10">
      {features.map(({ icon: Icon, title, description }, i) => (
        <div
          key={i}
          className="flex flex-col items-center rounded-3xl bg-white p-6 shadow-xl"
        >
          <FontAwesomeIcon
            icon={Icon}
            className="mb-4 h-10 w-10 text-amber-700"
          />
          <h3 className="font-bold">{title}</h3>
          <p className="text-zinc-500 text-center">{description}</p>
        </div>
      ))}
    </section>
  );
}
