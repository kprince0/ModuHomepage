import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import RelatedPages from "@/components/ui/RelatedPages";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Tantanmen Ramen in Jacksonville | Modu Ramen",
  description: "Experience the best Tantanmen ramen in Jacksonville at Modu Ramen. A perfect balance of fiery spice and rich, creamy sesame flavor topped with seasoned ground pork.",
};

export default function TantanmenJacksonville() {
  return (
    <main className="min-h-screen selection:bg-gold selection:text-charcoal pt-[104px] bg-charcoal">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-paper mb-6">
            <span className="text-gold">Tantanmen</span> in Jacksonville
          </h1>
          <p className="text-lg md:text-xl text-paper/80 font-light max-w-3xl mx-auto leading-relaxed">
            If you crave bold, complex flavors, our signature Tantanmen at Modu Ramen is a must-try. A Japanese take on Sichuan Dan Dan noodles, we blend a rich, nutty sesame paste with fiery chili oil and our robust 18-hour pork bone broth.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden mb-16 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
          <Image
             src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/TanTan.png`}
            alt="Spicy Tantanmen at Modu Ramen in Jacksonville"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-serif text-gold mb-6">What Makes Our Tantanmen Unique?</h2>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              Tantanmen represents the perfect marriage of spice and creaminess. The foundation of our bowl starts with a rich sesame paste (goma) mixed with our house-made chili oil (rayu), providing an intoxicating aroma and a vibrant orange hue.
            </p>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              We then pour in our signature 18-hour tonkotsu broth, creating an exceptionally creamy, thick soup base that clings to every noodle. The bowl is generously topped with sweet and savory seasoned ground pork, bok choy, and a sprinkle of crushed nuts for texture. This ensures that every bite provides a satisfying crunch against the soft noodles.
            </p>
            <p className="text-paper/80 font-light leading-relaxed">
              Modu Ramen's Tantanmen has become a cult favorite for spicy food lovers in Jacksonville and the Southside area looking for something different from the classic tonkotsu. The interplay of nutty sesame, fiery chili, and deep pork bone broth creates an unforgettable umami bomb.
            </p>
          </div>
          
          <div className="bg-[#111] p-8 rounded-lg border border-paper/10">
            <h3 className="text-2xl font-serif text-paper mb-6">Perfect Pairings</h3>
            <p className="text-paper/80 font-light text-sm mb-6">Cut the rich heat of Tantanmen with these highly recommended sides:</p>
            <div className="space-y-6">
              <div className="border-b border-paper/10 pb-4">
                <h4 className="text-gold font-medium mb-1">Takoyaki</h4>
                <p className="text-sm font-light text-paper/70">Ball-shaped Japanese snacks made of a wheat flour-based batter filled with diced octopus. The savory mayo and sweet sauce perfectly balance the spicy ramen.</p>
              </div>
              <div className="border-b border-paper/10 pb-4">
                <h4 className="text-gold font-medium mb-1">Gyoza</h4>
                <p className="text-sm font-light text-paper/70">Pan-fried pork or vegetable dumplings with a delicate crisp bottom.</p>
              </div>
              <div>
                <h4 className="text-gold font-medium mb-1">Mango Cheesecake Bingsu</h4>
                <p className="text-sm font-light text-paper/70">End your meal with our signature Korean shaved ice to cool down your palate.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif text-center text-paper mb-10">Tantanmen FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-[#111] p-6 rounded border border-paper/5">
              <h3 className="text-gold font-medium mb-2">Is Tantanmen very spicy?</h3>
              <p className="text-paper/80 font-light text-sm">It packs a noticeable heat from the chili oil, but the rich sesame paste and pork broth balance it out, making it a warming, flavorful heat rather than overwhelmingly spicy.</p>
            </div>
            <div className="bg-[#111] p-6 rounded border border-paper/5">
              <h3 className="text-gold font-medium mb-2">Does Tantanmen have peanut allergy risks?</h3>
              <p className="text-paper/80 font-light text-sm">Tantanmen traditionally uses a heavy concentration of sesame paste, and we often garnish with mixed crushed nuts depending on the recipe. Please alert your server to any nut allergies!</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gold/10 p-12 rounded-lg border border-gold/20 backdrop-blur-sm">
          <h2 className="text-3xl font-serif text-paper mb-4">Try Jacksonville's Best Tantanmen</h2>
          <p className="text-paper/70 font-light mb-8 max-w-xl mx-auto">
            Available for dine-in at our Baymeadows Rd location, or order online for takeout.
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

      <RelatedPages currentPath="/tantanmen-jacksonville" />
      <Footer />
    </main>
  );
}
