import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import RelatedPages from "@/components/ui/RelatedPages";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Authentic 18-Hour Ramen Broth | Modu Ramen Jacksonville",
  description: "Learn why Modu Ramen's signature pork bone broth takes 18 hours to perfect. A dedication to authentic Japanese tonkotsu flavor in Jacksonville.",
};

export default function OurBroth() {
  return (
    <main className="min-h-screen selection:bg-gold selection:text-charcoal pt-[104px] bg-charcoal">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-paper mb-6">
            The <span className="text-gold">18-Hour</span> Broth
          </h1>
          <p className="text-lg md:text-xl text-paper/80 font-light max-w-3xl mx-auto leading-relaxed">
            Great ramen cannot be rushed. It requires patience, precision, and an unwavering commitment to the craft. Discover the rigorous 18-hour double-boil process that creates Jacksonville's most authentic tonkotsu broth.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden mb-16 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/Pork Bulgogi.png`}
            alt="Rich, creamy 18-hour pork bone broth at Modu Ramen"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-serif text-gold mb-6">The Double-Boil Method</h2>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              In an age of instant gratification and shortcuts, Chef Kim insists on traditional Japanese methods. Our signature tonkotsu broth is born from an extensive 18-hour double-boil process.
            </p>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              We begin by carefully selecting premium pork bones. The first boil is crucial for purifying the bones—removing any impurities that could cloud the flavor. After a meticulous cleaning, the second, extended boil begins. 
            </p>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              For 18 continuous hours, the bones are kept at a rolling, vigorous boil. This intense heat and constant agitation force the collagen, marrow, and fat to emulsify completely into the liquid, transforming clear water into a pearlescent, milky, and incredibly creamy soup base.
            </p>
            <p className="text-paper/80 font-light leading-relaxed">
              The result is an intensely flavorful, deep umami broth that forms the backbone of our legendary Tonkotsu and Tantanmen. It's a labor of love that Chef Kim has perfected over his 26-year career, ensuring every bowl served in Jacksonville is as authentic as those found in Japan.
            </p>
          </div>
          
          <div className="bg-[#111] p-8 rounded-lg border border-paper/10 flex flex-col justify-center">
            <h3 className="text-2xl font-serif text-paper mb-6">Why It Matters</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">✓</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">Deep Umami</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">The long extraction time pulls every ounce of natural umami from the bones, making artificial flavor enhancers completely unnecessary.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">✓</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">Creamy Texture wihout Dairy</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">Our broth is incredibly rich and velvety on the tongue, a texture created purely from naturally emulsified collagen, not dairy or thickeners.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">✓</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">Perfect Coating</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">The resulting viscosity ensures that the rich broth perfectly coats every single strand of our custom noodles.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gold/10 p-12 rounded-lg border border-gold/20 backdrop-blur-sm">
          <h2 className="text-3xl font-serif text-paper mb-4">Taste the 18-Hour Difference</h2>
          <p className="text-paper/70 font-light mb-8 max-w-xl mx-auto">
            Experience the depth of true Japanese ramen at our Baymeadows Rd location.
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
              href="/#menu" 
              className="px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-colors duration-300 uppercase tracking-widest text-sm font-bold bg-charcoal/30"
            >
              Explore Our Menu
            </a>
          </div>
        </div>
      </section>

      <RelatedPages currentPath="/our-broth" />
      <Footer />
    </main>
  );
}
