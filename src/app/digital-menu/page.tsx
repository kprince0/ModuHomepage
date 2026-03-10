import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Image from "next/image";

type MenuItem = {
  name: string;
  description?: string;
  image?: string;
};

type MenuCategory = {
  category: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    category: "Appetizers",
    items: [
      { name: "K.F.C Modu Wings (Spicy)", description: "Crispy fried chicken wings tossed in a traditional Korean spicy sauce.", image: "/images/menu/spicy modu wings.png" },
      { name: "Modu Wings", description: "Plain | Spicy | Honey" },
      { name: "Chicken Karaage", description: "Crispy fried chicken thigh meat served with teriyaki sauce, tonkatsu sauce, and Japanese mayonnaise." },
      { name: "Pork Gyoza", description: "pork bone broth with chashu(pork), soy marinated egg, ground pork, menma, mayu(black garlic oil), peanut, corn, bok choy, scallions" },
      { name: "Vegetable Gyoza", description: "" },
      { name: "KimChi Gyoza", description: "" },
      { name: "Takoyaki", description: "Japanese-style takoyaki with a crispy exterior and soft interior, made with octopus and finished with savory sauce and Japanese mayonnaise." },
      { name: "Croquette", description: "Japanese-style croquette with a crispy exterior and a soft, creamy filling made with sweet corn." },
      { name: "Edamame", description: "" },
      { name: "KimChi Pancake", description: "" },
      { name: "Bao bun Chashu", description: "" },
      { name: "Bao bun Ton-ka-tsu", description: "" },
    ],
  },
  {
    category: "Ramen",
    items: [
      { name: "Beef Bulgogi Ramen", description: "A rich fusion ramen featuring your choice of savory pork or chicken broth, paired with ramen noodles and topped with marinated beef bulgogi, soft-boiled egg, scallions, naruto, and bok choy where Korean flavor meets Japanese comfort." },
      { name: "Pork Bulgogi Ramen", description: "A rich fusion ramen featuring your choice of savory pork or chicken broth, paired with ramen noodles and topped with marinated pork bulgogi, soft-boiled egg, scallions, naruto, and bok choy where Korean flavor meets Japanese comfort.", image: "/images/menu/Pork Bulgogi.png" },
      { name: "Curry Tonkotsu", description: "pork bone broth with Fried Ton-Ka-Tsu, soy marinated egg, shiitake mushroom, corn, menma, scallions", image: "/images/menu/curry tonkatsu 1.jpg" },
      { name: "TanTanMen", description: "pork bone broth with chashu(pork), soy marinated egg, ground pork, menma, mayu(black garlic oil), peanut, corn, bok choy, scallions", image: "/images/menu/TanTan.png" },
      { name: "Matcha Ramen", description: "Soy broth with CEREMONIAL GRADE MATCHA chashu, soy marinated egg, naruto, mayu(black garlic oil), menma, scallions, red ginger, lemon", image: "/images/menu/matcha-ramen.jpg" },
      { name: "Tonkotsu", description: "pork bone broth with chashu(pork), soy marinated egg, naruto, mayu(black garlic oil), woodear mushroom, menma, scallions, nori" },
      { name: "Kimchi Tonkotsu", description: "Fried and seasoned Kimchi, pork bone broth with chashu(pork), soy marinated egg, naruto mayu(black garlic oil), woodear mushroom, menma, scallions, nori", image: "/images/menu/Kimchi Tonkatsu.png" },
      { name: "Miso Ramen", description: "pork bone broth with chashu(pork), soy marinated egg, mayu(black garlic oil), menma, scallions, naruto, corn, nori." },
      { name: "Vegetable Ramen", description: "vegetable broth,tofu, menma, scallions, woodear mushroom.", image: "/images/menu/Veg.png" },
      { name: "Tempura Udon", description: "fried tofu, soy marinated egg, krab, naruto, bok choy, fried shrimp, scallions" },
    ],
  },
  {
    category: "Entree",
    items: [
      { name: "BigBoss Beef Bulgogi Set", description: "A full pound of beef, marinated in our signature house-made bulgogi sauce crafted from an original Korean recipe. Served with steamed white rice. Add Mozzarella Cheese", image: "/images/menu/beef Bulgogi Set canva.png" },
      { name: "BigBoss Pork Bulgogi Set", description: "A full pound of pork, marinated in our signature house-made bulgogi sauce crafted from an original Korean recipe. Served with steamed white rice. Add Mozzarella Cheese" },
      { name: "Tonkatsu Set", description: "Deep fried pork loin cutlet with Tonkatsu sauce, white rice" },
      { name: "Chicken Katsu Set", description: "Deep fried Chicken thigh with Tonkatsu sauce, white rice" },
      { name: "Beef Bulgogi Yaki Udon", description: "A hearty stir-fry of marinated bulgogi and onions with udon noodles, cooked in our signature Bigboss bulgogi sauce. Add Mozzarella Cheese" },
    ],
  },
  {
    category: "Bingsu & Drinks",
    items: [
      { name: "Mango Bingsu", description: "Sweet fresh mango shaved ice", image: "/images/menu/Bingsu/Mango Bingsu.png" },
      { name: "Mango Cheesecake Bingsu", description: "Mango ice with cheesecake bites", image: "/images/menu/Bingsu/mango cheesecake.png" },
      { name: "Melon Bingsu", description: "Fresh melon scooped over shaved ice", image: "/images/menu/Bingsu/melon.png" },
      { name: "Strawberry Bingsu", description: "Fresh strawberries over sweet milk shaved ice", image: "/images/menu/Bingsu/Strawberry.png" },
      { name: "Tiramisu Bingsu", description: "Coffee infused tiramisu shaved ice", image: "/images/menu/Bingsu/Tiramisu.jpg" },
      { name: "Soju Cocktail Sunrise", image: "/images/menu/Soju Cocktail/sunrise.png" },
      { name: "Soju Cocktail Caipirinha", image: "/images/menu/Soju Cocktail/caipirinha.png" },
      { name: "Hot / Iced Yuzu Tea", description: "Citrus honey tea" },
    ],
  }
];

export default function DigitalMenu() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <main className="min-h-screen bg-charcoal selection:bg-gold selection:text-charcoal pt-[100px] md:pt-[120px] pb-12">
      <Header />
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 mt-4">
          <h1 className="text-4xl md:text-5xl font-serif text-paper mb-4 uppercase tracking-widest relative inline-block">
            Modu Ramen Menu
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gold"></div>
          </h1>
          <p className="text-paper/70 mt-12 max-w-2xl mx-auto font-light leading-relaxed">
            Experience our authentic 18-hour broth tonkotsu, fresh ingredients, and dedication to Japanese culinary arts.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {menuData.map((category, idx) => (
            <section key={idx} className="relative bg-charcoal-light/30 border border-gold/10 p-8 md:p-12">
              {/* Decorative Korean/Asian Inspired Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 md:w-16 md:h-16 border-t-2 border-l-2 border-[#D92A2A]"></div>
              <div className="absolute top-0 right-0 w-8 h-8 md:w-16 md:h-16 border-t-2 border-r-2 border-[#D92A2A]"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 md:w-16 md:h-16 border-b-2 border-l-2 border-[#D92A2A]"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 md:w-16 md:h-16 border-b-2 border-r-2 border-[#D92A2A]"></div>

              <h2 className="text-3xl md:text-5xl font-black text-gold mb-12 text-center tracking-widest uppercase">
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex gap-6 group items-start">
                    {/* Render Image if exists, else show a decorative icon/box or nothing based on preference. Here we just show text. */}
                    {item.image && (
                      <div className="shrink-0 w-24 h-24 sm:w-32 sm:h-32 p-2 bg-white rotate-[-3deg] group-hover:rotate-0 transition-transform duration-300 shadow-xl overflow-hidden relative">
                        <Image
                          src={`${basePath}${item.image}`}
                          alt={item.name}
                          width={112}
                          height={112}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-xl sm:text-2xl font-bold text-paper mb-2 tracking-wide font-sans">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-paper/60 font-light text-sm sm:text-base leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        
        <div className="mt-20 mb-8 text-center flex flex-col sm:flex-row gap-4 justify-center w-full">
          <a href="https://moduramennzti.web.ordersave.com/menu" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 bg-gold text-charcoal hover:bg-paper transition-all duration-300 uppercase tracking-widest text-sm font-bold shadow-lg shadow-gold/20 hover:shadow-gold/40">
            Order Now
          </a>
          <a href="https://getseat.net?channel=merchant_web#/public/online/reservation/8G2AGD47" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 uppercase tracking-widest text-sm font-bold shadow-lg shadow-transparent hover:shadow-gold/20">
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
