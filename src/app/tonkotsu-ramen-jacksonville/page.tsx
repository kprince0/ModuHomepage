import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tonkotsu Ramen in Jacksonville | Modu Ramen",
  description: "Looking for rich tonkotsu ramen in Jacksonville? Modu Ramen serves authentic Japanese ramen with a creamy 18-hour pork bone broth at our Baymeadows location.",
};

export default function TonkotsuRamenJacksonville() {
  return (
    <main className="min-h-screen selection:bg-gold selection:text-charcoal pt-[104px] bg-charcoal">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-paper mb-6">
            <span className="text-gold">Tonkotsu Ramen</span> in Jacksonville
          </h1>
          <p className="text-lg md:text-xl text-paper/80 font-light max-w-3xl mx-auto leading-relaxed">
            Looking for authentic, rich tonkotsu ramen in Jacksonville? At Modu Ramen, our signature pork bone broth is slow-cooked for 18 hours to create a creamy, deep umami flavor, served with perfectly marinated chashu, ajitama (egg), and classic fresh toppings.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden mb-16 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
          <Image
             src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/Kimchi Tonkatsu.png`}
            alt="Authentic Tonkotsu ramen with chashu and soy-marinated egg at Modu Ramen in Jacksonville"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-serif text-gold mb-6">The Secret to the Perfect Tonkotsu</h2>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              True Japanese tonkotsu ramen cannot be rushed. The hallmark of a great tonkotsu is a milky, rich broth heavily infused with collagen and marrow. 
            </p>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              At Modu Ramen, located on Baymeadows Rd in Jacksonville, Chef Kim employs a rigorous 18-hour double-boil process. We extract every ounce of flavor from premium pork bones, resulting in a soup base that is incredibly creamy without feeling overly heavy.
            </p>
            <p className="text-paper/80 font-light leading-relaxed">
              We pair this magnificent broth with thin, straight noodles that perfectly hold the soup, thick-cut melt-in-your-mouth chashu (braised pork belly), kikurage (wood ear mushrooms), and a beautifully soft-boiled marinated egg.
            </p>
          </div>
          
          <div className="bg-[#111] p-8 rounded-lg border border-paper/10 flex flex-col justify-center">
            <h3 className="text-2xl font-serif text-paper mb-6">Our Tonkotsu Bowls</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">✓</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">Classic Tonkotsu Ramen</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">The traditional 18-hour broth, chashu, scallions, kikurage, and soy-marinated egg.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">✓</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">Spicy Tonkotsu Ramen</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">Our classic tonkotsu elevated with our house-made spicy chili blend for a deep, fiery kick.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif text-center text-paper mb-10">Tonkotsu Ramen FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-[#111] p-6 rounded border border-paper/5">
              <h3 className="text-gold font-medium mb-2">What does "Tonkotsu" mean?</h3>
              <p className="text-paper/80 font-light text-sm">Tonkotsu literally translates to "pork bone" in Japanese. It refers to the broth style, which is made by boiling pork bones for an extended period until the marrow and collagen dissolve into a creamy, rich soup.</p>
            </div>
            <div className="bg-[#111] p-6 rounded border border-paper/5">
              <h3 className="text-gold font-medium mb-2">Is Tonkotsu ramen spicy?</h3>
              <p className="text-paper/80 font-light text-sm">Classic tonkotsu is not spicy; it is savory and deeply umami. However, we do offer a Spicy Tonkotsu variation for those who love heat!</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gold/10 p-12 rounded-lg border border-gold/20 backdrop-blur-sm">
          <h2 className="text-3xl font-serif text-paper mb-4">Craving Authentic Tonkotsu in Jacksonville?</h2>
          <p className="text-paper/70 font-light mb-8 max-w-xl mx-auto">
            Order online for pickup/delivery or reserve a table to dine with us on Baymeadows Rd.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://moduramennzti.web.ordersave.com/menu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold text-charcoal hover:bg-paper transition-colors duration-300 uppercase tracking-widest text-sm font-bold"
            >
              Order Tonkotsu Now
            </a>
            <a 
              href="https://getseat.net?channel=merchant_web#/public/online/reservation/8G2AGD47" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-colors duration-300 uppercase tracking-widest text-sm font-bold bg-charcoal/30"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
