import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import RelatedPages from "@/components/ui/RelatedPages";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Spicy Ramen in Jacksonville | Modu Ramen",
  description: "Love heat? Modu Ramen serves the best spicy ramen in Jacksonville. Try our fiery Spicy Tonkotsu or bold Tantanmen made with 18-hour pork bone broth.",
};

export default function SpicyRamenJacksonville() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <main className="min-h-screen selection:bg-gold selection:text-charcoal pt-[104px] bg-charcoal">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-gold tracking-widest uppercase text-sm mb-4">Feel The Heat</p>
          <h1 className="text-4xl md:text-6xl font-serif text-paper mb-6">
            The Best <span className="text-gold">Spicy Ramen</span> in Jacksonville
          </h1>
          <p className="text-lg md:text-xl text-paper/80 font-light max-w-3xl mx-auto leading-relaxed">
            For those who crave a fiery kick without sacrificing deep flavor, Modu Ramen offers intensely satisfying spicy ramen bowls crafted from our authentic 18-hour broth.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden mb-16 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
          <Image
             src={`${basePath}/images/menu/TanTan.png`}
            alt="Spicy Tantanmen ramen bowl at Modu Ramen Jacksonville"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-serif text-gold mb-6">Heat That Enhances, Never Overpowers</h2>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              At Modu Ramen, we believe that "spicy" shouldn't mean just blinding heat. A truly great spicy ramen must be built upon a foundation of incredible flavor.
            </p>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              Chef Kim utilizes our premium 18-hour double-boiled pork bone broth as the base for our spicy selections. The rich collagen and natural creaminess of the broth perfectly balances the intense heat of our house-made chili oils and pastes.
            </p>
            <p className="text-paper/80 font-light leading-relaxed">
              Whether you prefer the nutty, complex heat of our signature Tantanmen or the sharp, savory bite of a Kimchi-infused broth, we have the perfect bowl to warm you up on a chilly Jacksonville evening—or to make you sweat during the summer!
            </p>
          </div>
          
          <div className="bg-[#111] p-8 rounded-lg border border-paper/10 flex flex-col justify-center">
            <h3 className="text-2xl font-serif text-paper mb-6">Our Spicy Best-Sellers</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">🌶️</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">Tantanmen</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">Our most popular spicy bowl. Features an intensely flavorful spicy sesame and peanut broth with ground pork and chili oil.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">🌶️</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">Spicy Tonkotsu</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">The classic creamy 18-hour pork broth elevated with our secret blend of chili paste.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">🌶️</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">Kimchi Ramen</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">Available in Tonkotsu, Miso, or Shoyu bases, topped with our fried and seasoned spicy Korean kimchi.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#111] py-12 px-6 rounded-lg border border-gold/20 mb-20 text-paper">
          <h2 className="text-3xl font-serif mb-4">Ready to Turn Up the Heat?</h2>
          <p className="text-paper/70 font-light mb-8 max-w-2xl mx-auto">
            Visit us on Baymeadows Rd to challenge your spice tolerance or order online for a fiery dinner at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://moduramennzti.web.ordersave.com/menu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gold text-charcoal px-8 py-3 rounded hover:bg-paper transition-colors font-bold tracking-wide"
            >
              Order Online
            </a>
            <Link 
              href="/digital-menu" 
              className="px-8 py-3 rounded border border-gold text-gold hover:bg-gold/10 transition-colors tracking-wide"
            >
              View Full Menu
            </Link>
          </div>
        </div>
        
        <RelatedPages currentPath="/spicy-ramen-jacksonville" />
      </section>
      
      <Footer />
    </main>
  );
}
