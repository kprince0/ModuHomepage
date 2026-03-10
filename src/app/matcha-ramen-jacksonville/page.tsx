import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import RelatedPages from "@/components/ui/RelatedPages";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Matcha Ramen in Jacksonville, FL | Modu Ramen',
  description: 'Experience Modu Ramen’s unique Ceremonial Grade Matcha Ramen in Jacksonville, FL. A bright, herbaceous twist on traditional Japanese ramen that you won’t find anywhere else.',
  alternates: {
    canonical: 'https://moduramen.com/matcha-ramen-jacksonville',
  },
};

export default function MatchaRamenPage() {
  return (
    <main className="min-h-screen bg-paper text-charcoal selection:bg-gold selection:text-charcoal bg-[#FDFBF7]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <span className="text-gold tracking-[0.3em] uppercase text-sm font-bold mb-4 block">A Unique Culinary Fusion</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              Ceremonial Grade <span className="text-gold italic">Matcha Ramen</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-charcoal/80 mb-8 leading-relaxed">
              Vibrant, earthy, and masterfully balanced. An unforgettable twist on traditional Japanese ramen right here in Jacksonville.
            </p>
            <div className="flex gap-4">
               <a 
                href="https://moduramennzti.web.ordersave.com/menu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-charcoal text-paper hover:bg-gold hover:text-charcoal transition-colors duration-300 uppercase tracking-widest text-sm font-semibold"
              >
                Order Online
              </a>
              <Link href="/digital-menu" className="px-8 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-paper transition-colors duration-300 uppercase tracking-widest text-sm font-semibold">
                Full Menu
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 relative w-full aspect-square">
            <div className="absolute inset-0 bg-gold/10 transform translate-x-4 translate-y-4 rounded-sm" />
            <Image 
              src="/images/extracted_smart/menu-4_4.jpg" 
              alt="Matcha Ramen at Modu Ramen Jacksonville" 
              fill
              className="object-cover rounded-sm border focus:outline-none focus:ring-2 focus:ring-gold"
              priority
            />
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl px-4 md:px-0 mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-10 text-center">What Makes Matcha Ramen So Special?</h2>
          
          <div className="prose prose-lg prose-charcoal mx-auto">
            <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
              When most people think of ramen, they picture the deep, milky-white broth of Tonkotsu or the 
              rich, salty bite of Shoyu. But at <strong>Modu Ramen in Jacksonville</strong>, Chef Kim has brought 
              something entirely unique to the local culinary scene: <strong>Ceremonial Grade Matcha Ramen</strong>.
            </p>

            <h3 className="text-2xl font-serif mt-12 mb-4 text-gold">The Flavor Profile</h3>
            <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
              Matcha—finely ground powder of specially grown and processed green tea leaves—is traditionally enjoyed as a ceremonial beverage. 
              But when carefully infused into our signature light soy broth, the matcha introduces a vibrant, earthy depth that cuts through 
              richness. It offers a slightly bitter, highly herbaceous note that balances perfectly with the savory elements of the bowl.
            </p>

            <h3 className="text-2xl font-serif mt-12 mb-4 text-gold">Premium Ingredients</h3>
            <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
              A bowl of Matcha Ramen is a visual and culinary masterpiece. We start with our meticulously prepared soy broth, steep it with 
              <strong> ceremonial grade matcha</strong> sourced directly from Japan, and top it with:
            </p>
            <ul className="list-disc pl-6 mb-8 text-lg text-charcoal/80 space-y-2">
              <li>Melt-in-your-mouth Chashu (Pork Belly)</li>
              <li>A perfectly soft-boiled Soy Marinated Egg</li>
              <li>Mayu (Black Garlic Oil) for an intense, roasted complexity</li>
              <li>Menma (Bamboo Shoots), Scallions, and Naruto</li>
              <li>A slice of fresh Lemon to brighten the tea notes</li>
              <li>A touch of Red Ginger to cleanse the palate</li>
            </ul>

            <h3 className="text-2xl font-serif mt-12 mb-4 text-gold">Vegetarian & Vegan Friendly</h3>
            <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
              We understand that dietary preferences vary. That's why we also offer a <strong>Matcha Vegetable Ramen</strong>, substituting the 
              chashu with tofu and woodear mushrooms, ensuring that everyone can experience this brilliant green bowl of flavor.
            </p>

            <div className="bg-charcoal p-10 text-paper mt-16 rounded-sm text-center">
              <p className="text-xl font-serif italic mb-6">"An incredibly refreshing take on ramen. The matcha adds a complex earthiness that makes you crave the next bite."</p>
              <p className="text-gold tracking-widest uppercase text-sm font-semibold">- A Jacksonville Local</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Component */}
      <RelatedPages currentPath="/matcha-ramen-jacksonville" />

      <Footer />
    </main>
  );
}
