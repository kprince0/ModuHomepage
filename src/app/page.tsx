import Hero from "@/components/sections/Hero";
import Heritage from "@/components/sections/Heritage";
import Craft from "@/components/sections/Craft";
import MenuGallery from "@/components/sections/MenuGallery";
import Experience from "@/components/sections/Experience";
import Location from "@/components/sections/Location";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-gold selection:text-charcoal">
      <Header />
      <Hero />
      <Heritage />
      <Craft />
      <MenuGallery />
      <Experience />
      <Location />
      <Footer />
    </main>
  );
}
