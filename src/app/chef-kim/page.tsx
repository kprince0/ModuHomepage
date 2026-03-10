import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chef Kim's 26-Year Ramen Mastery | Modu Ramen Jacksonville",
  description: "Learn about Chef Kim's 26-year culinary journey and his dedication to bringing the most authentic Japanese ramen experience to Jacksonville, FL.",
};

export default function ChefKim() {
  return (
    <main className="min-h-screen selection:bg-gold selection:text-charcoal pt-[104px] bg-charcoal">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-paper mb-6">
            Chef Kim's <span className="text-gold">26-Year</span> Mastery
          </h1>
          <p className="text-lg md:text-xl text-paper/80 font-light max-w-3xl mx-auto leading-relaxed">
            The soul of Modu Ramen lies in the hands of its creator. Since 2000, Chef Dongil Kim has dedicated his life to the art of Asian cuisine, bringing decades of refined technique and an uncompromising standard of quality to Jacksonville.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden mb-16 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/Pork Bulgogi.png`}
            alt="Chef Kim plating authentic Japanese ramen at Modu Ramen"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-serif text-gold mb-6">Crafting Umami Since 2000</h2>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              Chef Kim's culinary journey began over two decades ago. Throughout his 26-year career, he has studied the nuances of broth extraction, noodle textures, and the delicate balance of fats, salts, and umami that make Japanese ramen a globally revered dish.
            </p>
            <p className="text-paper/80 font-light mb-6 leading-relaxed">
              Establishing Modu Ramen in Jacksonville in 2019 was the culmination of his life's work. His goal was simple but ambitious: to elevate the local ramen scene by introducing an uncompromising 18-hour double-boil tonkotsu broth that rivals the finest shops in Japan.
            </p>
            <p className="text-paper/80 font-light leading-relaxed">
              "Modu" means "Everyone" in Korean. Chef Kim's philosophy is rooted in hospitality—crafting bowls of incredible depth and comfort that can be enjoyed by everyone who walks through his doors on Baymeadows Road.
            </p>
          </div>
          
          <div className="relative h-[500px] rounded-lg overflow-hidden border border-gold/20 shadow-lg">
             <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/Pork Bulgogi.png`}
              alt="Chef Kim's signature Tonkotsu ramen"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent flex items-end p-8">
              <blockquote className="text-xl font-serif text-paper italic">
                "We don't take shortcuts. The 18-hour broth is the heartbeat of this restaurant."
                <footer className="text-gold text-sm uppercase tracking-widest mt-4 non-italic font-bold">
                  — Chef Dongil Kim
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gold/10 p-12 rounded-lg border border-gold/20 backdrop-blur-sm">
          <h2 className="text-3xl font-serif text-paper mb-4">Experience the Mastery</h2>
          <p className="text-paper/70 font-light mb-8 max-w-xl mx-auto">
            Come taste the culmination of 26 years of culinary dedication at Modu Ramen.
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
              href="https://www.google.com/maps/dir/?api=1&destination=Modu+Ramen+8602+Baymeadows+Rd+Jacksonville+FL" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-paper text-paper hover:bg-paper hover:text-charcoal transition-colors duration-300 uppercase tracking-widest text-sm font-bold bg-charcoal/30"
            >
              Visit Our Location
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
