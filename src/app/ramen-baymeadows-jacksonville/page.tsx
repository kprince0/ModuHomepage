import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import RelatedPages from "@/components/ui/RelatedPages";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Ramen in Baymeadows, Jacksonville | Modu Ramen",
  description: "Find the best authentic Japanese ramen near Baymeadows in Jacksonville. Modu Ramen serves rich tonkotsu, tantanmen, and bulgogi fusion ramen. Dine-in or order online.",
};

export default function RamenBaymeadows() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <main className="min-h-screen selection:bg-gold selection:text-charcoal pt-[104px] bg-charcoal">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-paper mb-6">
            The Best Ramen Near <span className="text-gold">Baymeadows</span>
          </h1>
          <p className="text-lg md:text-xl text-paper/80 font-light max-w-3xl mx-auto leading-relaxed">
            Conveniently located in Jacksonville, Modu Ramen brings 26 years of culinary expertise and authentic, 18-hour pork bone broth directly to the Baymeadows community.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden mb-16 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
          <Image
             src={`${basePath}/images/main_banner_3.png`}
            alt="Modu Ramen dining experience near Baymeadows"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-serif text-gold mb-6">Your Local Spot for Authentic Japanese Noodles</h2>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              If you live or work around the Baymeadows, Southside, or Deerwood areas of Jacksonville, you don't have to travel far to experience spectacular, artisan ramen. Modu Ramen is your local neighborhood destination for deep, comforting bowls of soup.
            </p>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              Whether you are grabbing a quick lunch during the workday, picking up dinner for the family, or enjoying a relaxed weekend date, our Baymeadows-adjacent location offers easy access and ample parking.
            </p>
            <p className="text-paper/80 font-light leading-relaxed">
              Led by Chef Kim, who brings over two decades of experience starting from year 2000, our kitchen never compromises. We double-boil our pork bones for a full 18 hours to release profound umami rich flavors, making us the top choice for ramen enthusiasts in the 32256 zip code and beyond.
            </p>
          </div>
          
          <div className="bg-[#111] p-8 rounded-lg border border-paper/10 flex flex-col justify-center">
            <h3 className="text-2xl font-serif text-paper mb-6">Baymeadows Favorites</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">✓</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">Tonkotsu Ramen</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">Our signature classic. A creamy 18-hour broth that is perfect for a comforting dinner.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">✓</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">BigBoss Bulgogi Set</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">A hearty lunch option featuring a full pound of Korean marinated beef or pork.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">✓</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">Refreshing Bingsu</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">The perfect cooldown on a hot Jacksonville afternoon—Korean shaved ice dessert.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif text-center text-paper mb-10">Visiting Modu Ramen from Baymeadows</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-[#111] p-6 rounded border border-paper/5">
              <h3 className="text-gold font-medium mb-2">Do you offer takeout for lunch?</h3>
              <p className="text-paper/80 font-light text-sm">Absolutely! Many professionals in the Baymeadows and Southside business districts order online for quick pickup. We ensure your noodles and hot broth are packaged perfectly so your ramen is fresh when you return to the office.</p>
            </div>
            <div className="bg-[#111] p-6 rounded border border-paper/5">
              <h3 className="text-gold font-medium mb-2">Is there plenty of parking?</h3>
              <p className="text-paper/80 font-light text-sm">Yes, we are located in a convenient plaza with extensive free parking for all our guests right outside the restaurant doors.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gold/10 p-12 rounded-lg border border-gold/20 backdrop-blur-sm mb-20">
          <h2 className="text-3xl font-serif text-paper mb-4">Craving Ramen Near Baymeadows?</h2>
          <p className="text-paper/70 font-light mb-8 max-w-xl mx-auto">
            Order online for fast pickup, or reserve a table to dine in with us tonight.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://moduramennzti.web.ordersave.com/menu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gold text-charcoal px-8 py-3 rounded hover:bg-paper transition-colors font-bold tracking-wide"
            >
              Order Pickup
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
        
        <RelatedPages currentPath="/ramen-baymeadows-jacksonville" />
      </section>
      
      <Footer />
    </main>
  );
}
