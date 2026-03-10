import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import RelatedPages from "@/components/ui/RelatedPages";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why 18-Hour Pork Bone Broth Tastes Better | Modu Ramen Blog",
  description: "Discover the secret behind Modu Ramen's signature Tonkotsu. Find out why double-boiling pork bones for 18 hours creates the richest, creamiest ramen broth.",
};

export default function WhyEighteenHourBroth() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <main className="min-h-screen selection:bg-gold selection:text-charcoal pt-[104px] bg-charcoal">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-gold tracking-widest uppercase text-sm mb-4">Ramen Blog</p>
          <h1 className="text-4xl md:text-6xl font-serif text-paper mb-6">
            Why <span className="text-gold">18-Hour Broth</span> Tastes Better
          </h1>
          <p className="text-lg md:text-xl text-paper/80 font-light max-w-3xl mx-auto leading-relaxed">
            Not all ramen is created equal. At Modu Ramen, we believe that the only path to producing authentic, unforgettable tonkotsu is through time, heat, and patience.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden mb-16 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
          <Image
             src={`${basePath}/images/Broth.jpg`}
            alt="Chef preparing 18-hour pork bone broth at Modu Ramen"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-serif text-gold mb-6">The Magic of Emulsification</h2>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              If you’ve ever had true tonkotsu ramen, you know it isn’t just soup—it’s an experience. The broth is thick, milky, and leaves a pleasant stickiness on your lips. This cannot be faked with dairy or thickeners. It happens through a natural chemical process called emulsification.
            </p>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              When premium pork bones, fat, and marrow are boiled at a rolling, rapid boil for long periods, the collagen within the bones breaks down into gelatin. Simultaneously, the fat is blasted into microscopic droplets. The intense, continuous heat forces the fat and the gelatin-rich water to combine perfectly. 
            </p>
            
            <h2 className="text-3xl font-serif text-gold mb-6 mt-12">Why Specifically 18 Hours?</h2>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              At Modu Ramen, Chef Kim developed an exacting 18-hour double-boil standard over his 26-year career. 
            </p>
            <p className="text-paper/80 font-light leading-relaxed">
              Boil it for too little time (under 12 hours), and the marrow hasn't fully dissolved; the soup remains thin and lacks depth. Boil it too long without careful supervision, and the broth can scorch, becoming bitter and overly heavy. Eighteen hours, with constant skimming to remove impurities, is the sweet spot. It yields a broth that is profound in umami, elegantly creamy, yet incredibly clean on the palate without feeling greasy.
            </p>
          </div>
          
          <div className="bg-[#111] p-8 rounded-lg border border-paper/10 flex flex-col">
            <h3 className="text-2xl font-serif text-paper mb-6">The Modu Process</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">1</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">Initial Blanching</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">We rapidly boil the bones first to draw out blood and impurities, then wash them bone-by-bone. This prevents the soup from tasting metallic or overly “porky.”</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">2</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">The Double Boil</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">New water is added and brought to a rolling boil. We maintain this extreme heat continuously.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">3</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">Constant Skimming</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">Throughout the 18 hours, Chef Kim routinely skims the surface to ensure the broth stays pure and white, rather than murky.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold text-xl mt-1">4</span>
                <div>
                  <h4 className="text-paper font-medium text-lg">The Result</h4>
                  <p className="text-sm font-light text-paper/70 mt-1">A velvety, collagen-dense soup that warms the soul and respects true Japanese ramen traditions.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-charcoal py-12 px-6 rounded-lg border border-gold/20 mb-20 text-paper shadow-2xl">
          <h2 className="text-3xl font-serif mb-4 text-gold">Taste the 18-Hour Difference</h2>
          <p className="text-paper/70 font-light mb-8 max-w-2xl mx-auto">
            Ready to taste what 18 hours of dedication tastes like? Visit us in Jacksonville and try our signature Original Tonkotsu or Spicy Tonkotsu ramen today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/our-broth" 
              className="px-8 py-3 rounded border border-gold text-gold hover:bg-gold/10 transition-colors tracking-wide"
            >
              Learn More About Our Broth
            </Link>
            <Link 
              href="/tonkotsu-ramen-jacksonville" 
              className="bg-gold text-charcoal px-8 py-3 rounded hover:bg-paper transition-colors font-bold tracking-wide"
            >
              View Our Tonkotsu Ramen
            </Link>
          </div>
        </div>
        
        <RelatedPages currentPath="/why-18-hour-pork-bone-broth-tastes-better" />
      </section>
      
      <Footer />
    </main>
  );
}
