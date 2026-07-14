import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { features } from "../data/featuresItems";

export default function Cards() {
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
            size="2x"
          />
          <h3 className="font-bold">{title}</h3>
          <p className="text-zinc-500 text-center">{description}</p>
        </div>
      ))}
    </section>
  );
}
