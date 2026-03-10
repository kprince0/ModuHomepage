import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import RelatedPages from "@/components/ui/RelatedPages";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BigBoss Beef Bulgogi Set in Jacksonville | Modu Ramen",
  description: "A full pound of premium beef marinated in our signature house-made bulgogi sauce. Served with steamed white rice. Add mozzarella cheese for the ultimate experience.",
};

export default function BigBossBulgogiSet() {
  return (
    <main className="min-h-screen selection:bg-gold selection:text-charcoal pt-[104px] bg-charcoal">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-paper mb-6">
            <span className="text-gold">BigBoss</span> Beef Bulgogi Set
          </h1>
          <p className="text-lg md:text-xl text-paper/80 font-light max-w-3xl mx-auto leading-relaxed">
            A full pound of beef, marinated in our signature house-made bulgogi sauce crafted from an original Korean recipe. Served with steamed white rice.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden mb-16 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
          <Image
             src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/beef Bulgogi Set canva.png`}
            alt="BigBoss Beef Bulgogi Set at Modu Ramen in Jacksonville"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-serif text-gold mb-6">The Pinnacle of Umami</h2>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              Our BigBoss Beef Bulgogi Set is a celebration of authentic Korean marinades. We start with a full pound of premium, thinly sliced beef and steep it in our signature bulgogi sauce—a secret family recipe that balances sweet, savory, and umami flavors.
            </p>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              The meat is expertly seared to caramelize the sugars in the marinade, resulting in tender, flavor-packed bites. Accompanied by fluffy steamed white rice to soak up the glorious juices.
            </p>
            <p className="text-paper/80 font-light text-gold italic leading-relaxed">
              Pro Tip: Enhance your meal by adding molten Mozzarella Cheese to the hot skillet for an unforgettable sweet and savory pull!
            </p>
          </div>
          
          <div className="bg-[#111] p-8 rounded-lg border border-paper/10 flex flex-col justify-center">
            <h3 className="text-2xl font-serif text-paper mb-6">Menu Details</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">✓</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">One Full Pound of Beef</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">A massive portion cooked to perfection, ideal for sharing or a hearty solo feast.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">✓</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">House-Made Original Sauce</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">Crafted from an authentic, original Korean recipe containing soy sauce, pear, garlic, and sesame.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">⭐</span>
                <div>
                  <h4 className="text-gold font-medium text-lg">Add Mozzarella Cheese</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">Highly recommended addition to elevate the dish to a creamy, savory masterpiece.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gold/10 p-12 rounded-lg border border-gold/20 backdrop-blur-sm">
          <h2 className="text-3xl font-serif text-paper mb-4">Try the BigBoss Today</h2>
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

      <RelatedPages currentPath="/bigboss-bulgogi-set" />
      <Footer />
    </main>
  );
}
