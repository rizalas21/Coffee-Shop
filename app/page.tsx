import { MapPin, Star, Clock, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugHot,
  faUtensils,
  faLaptop,
  faWifi,
  faSeedling,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import Location from "./components/Location";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Reviews from "./components/Reviews";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatWa";
import FAQ from "./components/FAQ";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-zinc-800 w-full">
      <Navbar />

      <Hero />

      <Cards />

      <About />

      <Menu />

      <Gallery />

      <Reviews />

      <FAQ />

      <CTA />

      <Location />

      <Footer />

      <FloatingWhatsApp />
    </main>
  );
}
