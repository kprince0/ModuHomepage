import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import RelatedPages from "@/components/ui/RelatedPages";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Ramen in Jacksonville, FL | Modu Ramen",
  description: "If you are looking for the best ramen in Jacksonville, Modu Ramen serves authentic Japanese ramen with an 18-hour pork bone broth. Visit our Baymeadows location.",
};

export default function BestRamenJacksonville() {
  return (
    <main className="min-h-screen selection:bg-gold selection:text-charcoal pt-[104px] bg-charcoal">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-paper mb-6">
            <span className="text-gold">Best Ramen</span> in Jacksonville
          </h1>
          <p className="text-lg md:text-xl text-paper/80 font-light max-w-3xl mx-auto leading-relaxed">
            If you are looking for the best ramen in Jacksonville, Modu Ramen serves authentic Japanese ramen crafted with an 18-hour double-boiled pork bone broth, handcrafted flavor balance, and Chef Kim's 26-year culinary mastery.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden mb-16 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/Staff.png`}
            alt="Modu Ramen signature bowl - The best authentic Japanese ramen in Jacksonville"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-serif text-gold mb-6">Why We're Jacksonville's Premier Ramen Destination</h2>
            <ul className="space-y-6 text-paper/80 font-light">
              <li>
                <strong className="text-paper block mb-1">18-Hour Signature Broth</strong>
                Our commitment to authentic flavor begins with our tonkotsu broth, painstakingly slow-cooked for 18 hours to release essential umami, collagen, and depth that cannot be rushed.
              </li>
              <li>
                <strong className="text-paper block mb-1">Chef Kim's 26-Year Mastery</strong>
                Crafting the perfect bowl of Japanese ramen requires decades of dedication. Chef Kim brings 26 years of culinary mastery to every single bowl served at our Baymeadows location since 2019.
              </li>
              <li>
                <strong className="text-paper block mb-1">Authentic Ingredients</strong>
                From perfectly marinated chashu pork to rich black garlic oil and perfectly cooked noodles, we source and prepare only the highest quality ingredients.
              </li>
            </ul>
          </div>
          
          <div className="bg-[#111] p-8 rounded-lg border border-paper/10">
            <h3 className="text-2xl font-serif text-paper mb-6">Must-Try Favorites</h3>
            <div className="space-y-6">
              <div className="border-b border-paper/10 pb-4">
                <h4 className="text-gold font-medium mb-1">Tonkotsu Ramen</h4>
                <p className="text-sm font-light text-paper/70">Our flagship 18-hour pork bone broth, rich and creamy, served with chashu, soft boiled egg, and wood ear mushrooms.</p>
              </div>
              <div className="border-b border-paper/10 pb-4">
                <h4 className="text-gold font-medium mb-1">Tantanmen</h4>
                <p className="text-sm font-light text-paper/70">A spicy, nutty sesame-based broth topped with seasoned ground pork. A favorite among Jacksonville locals.</p>
              </div>
              <div>
                <h4 className="text-gold font-medium mb-1">Modu Wings</h4>
                <p className="text-sm font-light text-paper/70">The perfect starter: Korean-style fried chicken wings, double-fried for ultimate crispiness.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif text-center text-paper mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-[#111] p-6 rounded border border-paper/5">
              <h3 className="text-gold font-medium mb-2">Where are you located in Jacksonville?</h3>
              <p className="text-paper/80 font-light text-sm">We are conveniently located at 8602 Baymeadows Rd, Jacksonville, FL 32256, in the heart of the Southside area with plenty of parking.</p>
            </div>
            <div className="bg-[#111] p-6 rounded border border-paper/5">
              <h3 className="text-gold font-medium mb-2">Do you offer takeout and delivery?</h3>
              <p className="text-paper/80 font-light text-sm">Yes! You can order online directly through our website for quick pickup or delivery anywhere in Jacksonville.</p>
            </div>
            <div className="bg-[#111] p-6 rounded border border-paper/5">
              <h3 className="text-gold font-medium mb-2">Do you take reservations?</h3>
              <p className="text-paper/80 font-light text-sm">Yes, we highly recommend reserving a table, especially on weekends, to ensure you get to enjoy the best ramen in town without a wait.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gold/10 p-12 rounded-lg border border-gold/20 backdrop-blur-sm">
          <h2 className="text-3xl font-serif text-paper mb-4">Experience Jacksonville's Best Ramen Today</h2>
          <p className="text-paper/70 font-light mb-8 max-w-xl mx-auto">
            Join us at our Baymeadows location and taste the difference that 18 hours of dedication makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://getseat.net?channel=merchant_web#/public/online/reservation/8G2AGD47" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold text-charcoal hover:bg-paper transition-colors duration-300 uppercase tracking-widest text-sm font-bold"
            >
              Reserve a Table
            </a>
            <a 
              href="https://moduramennzti.web.ordersave.com/menu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-colors duration-300 uppercase tracking-widest text-sm font-bold bg-charcoal/30"
            >
              Order Online
            </a>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Modu+Ramen+8602+Baymeadows+Rd+Jacksonville+FL" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-paper text-paper hover:bg-paper hover:text-charcoal transition-colors duration-300 uppercase tracking-widest text-sm font-bold bg-charcoal/30"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <RelatedPages currentPath="/best-ramen-jacksonville" />
      <Footer />
    </main>
  );
}
