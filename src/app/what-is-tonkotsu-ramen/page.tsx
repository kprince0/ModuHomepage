import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import RelatedPages from "@/components/ui/RelatedPages";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is Tonkotsu Ramen? | Modu Ramen Guide",
  description: "Learn what makes Tonkotsu Ramen special. Discover the ingredients, history, and why the milky pork bone broth is a worldwide favorite. Brought to you by Modu Ramen.",
};

export default function WhatIsTonkotsuRamen() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <main className="min-h-screen selection:bg-gold selection:text-charcoal pt-[104px] bg-charcoal">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-gold tracking-widest uppercase text-sm mb-4">Ramen Guide</p>
          <h1 className="text-4xl md:text-6xl font-serif text-paper mb-6">
            <span className="text-gold">What is</span> Tonkotsu Ramen?
          </h1>
          <p className="text-lg md:text-xl text-paper/80 font-light max-w-3xl mx-auto leading-relaxed">
            It is arguably the most famous and beloved style of ramen in the world. But what exactly is tonkotsu, and why is that milky white broth so incredibly delicious?
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden mb-16 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
          <Image
             src={`${basePath}/images/menu/Kimchi Tonkatsu.png`}
            alt="Close up of a bowl of Tonkotsu Ramen showing the milky broth"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-serif text-gold mb-6">The Meaning of "Tonkotsu"</h2>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              In Japanese, "Tonkotsu" (豚骨) literally translates to "pork bones." Therefore, tonkotsu ramen refers specifically to the style of broth used in the soup, rather than the seasoning (like shoyu/soy sauce or shio/salt) or the toppings.
            </p>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              Originating from Fukuoka on the island of Kyushu in Japan, tonkotsu broth is instantly recognizable by its cloudy, milky-white appearance and extremely rich, sticky, and creamy texture.
            </p>
            
            <h2 className="text-3xl font-serif text-gold mb-6 mt-12">How is it Made?</h2>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              Unlike clear broths (chintan) which are gently simmered, tonkotsu broth (paitan) is boiled vigorously at high heat for many hours—often 12, 18, or even 24 hours. 
            </p>
            <p className="text-paper/80 font-light leading-relaxed">
              This intensive boiling process emulsifies liquid fat with the massive amounts of collagen and marrow melting out of the pork bones. The result is a natural suspension that gives the soup its iconic creaminess, body, and profound umami depth without needing dairy or artificial thickeners.
            </p>
          </div>
          
          <div className="bg-[#111] p-8 rounded-lg border border-paper/10 flex flex-col">
            <h3 className="text-2xl font-serif text-paper mb-6">Key Components of Tonkotsu Ramen</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">1</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">The Broth (Soup)</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">The gelatinous, rich pork bone base that defines the dish. It coats the noodles and leaves a delightful stickiness on the lips.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">2</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">The Noodles</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">Traditionally served with very thin, straight, and hard noodles (katamen) that hold up well in the heavy broth.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">3</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">Tare (Seasoning)</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">The salty base—often soy sauce (shoyu) or sea salt (shio)—mixed into the bottom of the bowl before the broth is poured.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">4</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">Classic Toppings</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">Typically features Chashu (braised pork belly), Ajitama (soft-boiled marinated egg), Kikurage (wood ear mushroom), and fresh scallions.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#111] py-12 px-6 rounded-lg border border-gold/20 mb-20 text-paper">
          <h2 className="text-3xl font-serif mb-4">Taste the Difference at Modu Ramen</h2>
          <p className="text-paper/70 font-light mb-8 max-w-2xl mx-auto">
            At Modu Ramen in Jacksonville, Chef Kim uses an authentic 18-hour double-boiling technique to extract the purest, richest tonkotsu flavor possible. Come experience true Japanese culinary tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tonkotsu-ramen-jacksonville" 
              className="bg-gold text-charcoal px-8 py-3 rounded hover:bg-paper transition-colors font-bold tracking-wide"
            >
              See Our Tonkotsu Menu
            </Link>
          </div>
        </div>
        
        <RelatedPages currentPath="/what-is-tonkotsu-ramen" />
      </section>
      
      <Footer />
    </main>
  );
}
