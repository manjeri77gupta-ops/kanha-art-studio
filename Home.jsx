import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Collections from "../components/Collections";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

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