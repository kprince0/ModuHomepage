import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import RelatedPages from "@/components/ui/RelatedPages";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentic Bulgogi Ramen in Jacksonville | Modu Ramen",
  description: "Experience the ultimate fusion of Korean and Japanese flavors with Modu Ramen's signature Bulgogi Ramen in Jacksonville. Made with 18-hour broth.",
};

export default function BulgogiRamenJacksonville() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <main className="min-h-screen selection:bg-gold selection:text-charcoal pt-[104px] bg-charcoal">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-gold tracking-widest uppercase text-sm mb-4">Korean-Japanese Fusion</p>
          <h1 className="text-4xl md:text-6xl font-serif text-paper mb-6">
            <span className="text-gold">Bulgogi Ramen</span> in Jacksonville
          </h1>
          <p className="text-lg md:text-xl text-paper/80 font-light max-w-3xl mx-auto leading-relaxed">
            Where tender, sweet-and-savory Korean marinated beef meets the deep, creamy comfort of authentic Japanese ramen broth.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden mb-16 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
          <Image
             src={`${basePath}/images/extracted_smart/beef-bulgogi-jacksonville.jpg`}
            alt="Delicious Beef Bulgogi Ramen bowl at Modu Ramen"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-serif text-gold mb-6">A Masterclass in Fusion Cooking</h2>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              Bulgogi ramen is not just a passing trend; when done right, it is a spectacular collision of two legendary culinary traditions. At Modu Ramen, we don't take shortcuts with either.
            </p>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              To create our signature Bulgogi Ramen, Chef Kim starts with his famous 18-hour, double-boiled bone broth. This creates a deeply savory, velvety foundation.
            </p>
            <p className="text-paper/80 font-light leading-relaxed">
              We then top the noodles with premium beef or pork that has been marinated for hours in our house-made secret Korean bulgogi sauce. When the sweet, soy-based juices of the grilled meat slowly leach into the rich, milky tonkotsu or savory chicken broth, the resulting flavor profile is completely unique and absolutely addictive.
            </p>
          </div>
          
          <div className="bg-[#111] p-8 rounded-lg border border-paper/10 flex flex-col justify-center">
            <h3 className="text-2xl font-serif text-paper mb-6">The Bulgogi Lineup</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">🍜</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">Beef Bulgogi Ramen</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">Savory pork or chicken broth topped with thinly sliced, marinated Korean beef, boy choy, and a soft egg.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">🍜</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">Pork Bulgogi Ramen</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">A rich fusion bowl featuring spicy-sweet marinated pork bulgogi.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">🥢</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">Not in a soup mood?</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">Try our massive 1-pound BigBoss Bulgogi Set served with rice, or our Beef Bulgogi Yaki Udon stir-fry.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gold/10 p-12 rounded-lg border border-gold/20 backdrop-blur-sm mb-20">
          <h2 className="text-3xl font-serif text-paper mb-4">Try Our Most Unique Bowl Today</h2>
          <p className="text-paper/70 font-light mb-8 max-w-xl mx-auto">
            Visit Modu Ramen on Baymeadows Rd to taste the ultimate fusion of Korean BBQ and Japanese Ramen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://moduramennzti.web.ordersave.com/menu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gold text-charcoal px-8 py-3 rounded hover:bg-paper transition-colors font-bold tracking-wide"
            >
              Order for Pickup
            </a>
            <Link 
              href="https://getseat.net?channel=merchant_web#/public/online/reservation/8G2AGD47" 
              target="_blank"
              className="px-8 py-3 rounded border border-gold text-gold hover:bg-gold/10 transition-colors tracking-wide"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
        
        <RelatedPages currentPath="/bulgogi-ramen-jacksonville" />
      </section>
      
      <Footer />
    </main>
  );
}
