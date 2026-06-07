import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import Collections from "./Collections";

export default function Home() {
  return (
    <div className="bg-[#fffaf5] text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Collections />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
