import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function DigitalMenu() {
  const totalPages = 11;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <main className="min-h-screen bg-charcoal selection:bg-gold selection:text-charcoal pt-[100px] md:pt-[120px] pb-12">
      <Header />
      <div className="container mx-auto px-4 max-w-5xl flex flex-col gap-8 items-center">
        <div className="text-center mb-10 mt-4 w-full">
          <h1 className="text-4xl md:text-5xl font-serif text-paper mb-4">Our Complete Menu</h1>
          <p className="text-gold uppercase tracking-[0.2em] text-xs font-bold">Modu Ramen Jacksonville</p>
        </div>
        
        <div className="flex flex-col gap-8 w-full">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <div key={num} className="w-full relative rounded-lg shadow-2xl overflow-hidden bg-black/20">
              <img 
                src={`${basePath}/images/menu scan/menu-${num}.jpg`}
                alt={`Modu Ramen Menu Page ${num}`}
                className="w-full h-auto object-contain"
                loading={num < 3 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 mb-8 text-center flex flex-col sm:flex-row gap-4 justify-center w-full">
          <a href="https://moduramennzti.web.ordersave.com/menu" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-gold text-charcoal hover:bg-paper transition-colors duration-300 uppercase tracking-widest text-sm font-bold">
            Order Now
          </a>
          <a href="https://getseat.net?channel=merchant_web#/public/online/reservation/8G2AGD47" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-colors duration-300 uppercase tracking-widest text-sm font-semibold">
            Reserve a Table
          </a>
        </div>
      </div>
      <div className="mt-16 border-t border-paper/10 pt-12">
        <Footer />
      </div>
    </main>
  );
}
