import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bingsu in Jacksonville | Korean Shaved Ice at Modu Ramen",
  description: "Discover the best Bingsu in Jacksonville at Modu Ramen. Our Korean shaved ice desserts feature finely milled ice that melts in your mouth like snow.",
};

export default function BingsuJacksonville() {
  return (
    <main className="min-h-screen selection:bg-gold selection:text-charcoal pt-[104px] bg-charcoal">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-paper mb-6">
            <span className="text-gold">Bingsu</span> in Jacksonville
          </h1>
          <p className="text-lg md:text-xl text-paper/80 font-light max-w-3xl mx-auto leading-relaxed">
            Looking for authentic Korean Bingsu in Jacksonville? At Modu Ramen, we don't just serve incredible noodles—we also craft the finest Korean snow-ice desserts. Our Bingsu features ice shaved so finely it perfectly mimics the texture of freshly fallen snow, piled high with fresh fruits and sweet toppings.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden mb-16 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/Bingsu/mango cheesecake.png`}
            alt="Delicious Bingsu dessert at Modu Ramen in Jacksonville"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-serif text-gold mb-6">What is Bingsu?</h2>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              Bingsu (빙수) is a beloved traditional Korean shaved ice dessert with sweet toppings. Unlike traditional American snow cones or Hawaiian shaved ice which uses crushed ice and syrup, authentic Bingsu is made by freezing a milky sweet liquid and shaving it with a specialized machine.
            </p>
            <p className="text-paper/80 font-light leading-relaxed">
              The result is a delicate, fluffy texture that melts instantly in your mouth. At Modu Ramen, it's the perfect light and refreshing dessert to follow up a hot, rich bowl of our signature tonkotsu ramen.
            </p>
          </div>
          
          <div className="bg-[#111] p-8 rounded-lg border border-paper/10 flex flex-col justify-center">
            <h3 className="text-2xl font-serif text-paper mb-6">Our Popular Bingsu Flavors</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">✓</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">Mango Cheesecake Bingsu</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">Our most popular flavor! Fluffy snow ice topped with sweet, ripe mango pieces and rich cheesecake bites, finished with a drizzle of condensed milk.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">✓</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">Tiramisu Bingsu</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">A perfect fusion of Italian and Korean desserts—fluffy snow ice layered with espresso, cocoa, and rich mascarpone.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gold/10 p-12 rounded-lg border border-gold/20 backdrop-blur-sm">
          <h2 className="text-3xl font-serif text-paper mb-4">Treat Yourself to Jacksonville's Best Bingsu</h2>
          <p className="text-paper/70 font-light mb-8 max-w-xl mx-auto">
            Stop by our Baymeadows Rd location for a refreshing bowl of Korean snow-ice today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://moduramennzti.web.ordersave.com/menu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold text-charcoal hover:bg-paper transition-colors duration-300 uppercase tracking-widest text-sm font-bold"
            >
              Order Online
            </a>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Modu+Ramen+8602+Baymeadows+Rd+Jacksonville+FL" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-colors duration-300 uppercase tracking-widest text-sm font-bold bg-charcoal/30"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
