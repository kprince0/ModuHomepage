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
      { name: "Modu Wings", description: "Plain | Spicy | Honey", image: "/images/extracted_smart/menu-2_0.jpg" },
      { name: "K.F.C Modu Wings", description: "Spicy only. Crispy fried chicken wings tossed in a traditional Korean spicy sauce.", image: "/images/extracted_smart/menu-2_1.jpg" },
      { name: "Chicken Karaage", description: "Crispy fried chicken thigh meat served with teriyaki sauce, tonkatsu sauce, and Japanese mayonnaise.", image: "/images/extracted_smart/menu-2_2.jpg" },
      { name: "Pork Gyoza", description: "Pork bone broth with chashu, soy marinated egg, ground pork, menma, mayu, peanut, corn, bok choy, scallions.", image: "/images/extracted_smart/menu-2_3.jpg" },
      { name: "Vegetable Gyoza", description: "", image: "/images/extracted_smart/menu-2_4.jpg" },
      { name: "KimChi Gyoza", description: "", image: "/images/extracted_smart/menu-2_5.jpg" },
      { name: "Takoyaki", description: "Japanese-style takoyaki with a crispy exterior and soft interior, made with octopus and finished with savory sauce and Japanese mayonnaise.", image: "/images/extracted_smart/menu-2_6.jpg" },
      { name: "Croquette", description: "Japanese-style croquette with a crispy exterior and a soft, creamy filling made with sweet corn.", image: "/images/extracted_smart/menu-2_7.jpg" },
      { name: "Edamame", description: "", image: "/images/extracted_smart/menu-3_0.jpg" },
      { name: "KimChi Pancake", description: "", image: "/images/extracted_smart/menu-3_1.jpg" },
      { name: "Bao bun Chashu", description: "", image: "/images/extracted_smart/menu-3_2.jpg" },
      { name: "Bao bun Ton-ka-tsu", description: "", image: "/images/extracted_smart/menu-3_3.jpg" },
      { name: "Jax French Fries", description: "", image: "/images/extracted_smart/menu-3_4.jpg" },
      { name: "Sparkling Wings", description: "(2 piece wings + 1 soda)", image: "/images/extracted_smart/menu-3_5.jpg" },
      { name: "Drunken Wings", description: "(2 piece wings + 1 Kirin or Sapporo beer)", image: "/images/extracted_smart/menu-3_6.jpg" },
      { name: "Sparkling Gyoza", description: "(3 piece pork or veg Gyoza + 1 soda)", image: "/images/extracted_smart/menu-3_7.jpg" },
    ],
  },
  {
    category: "Beer & Sake",
    items: [
      { name: "Asahi Lager", description: "", image: "/images/extracted_smart/menu-4_0.jpg" },
      { name: "Sapporo", description: "12 oz / 20 oz", image: "/images/extracted_smart/menu-4_1.jpg" },
      { name: "Kirin Ichiban", description: "", image: "/images/extracted_smart/menu-4_2.jpg" },
      { name: "Sake", description: "Cold • Hot", image: "/images/extracted_smart/menu-4_3.jpg" },
      { name: "Nigori Sake Mango", description: "", image: "/images/extracted_smart/menu-4_4.jpg" },
      { name: "Nigori Sake Strawberry", description: "", image: "/images/extracted_smart/menu-4_5.jpg" },
      { name: "Plum Wine", description: "750 ml", image: "/images/extracted_smart/menu-4_6.jpg" },
      { name: "Sparkling Plum Wine", description: "750 ml", image: "/images/extracted_smart/menu-4_7.jpg" },
      { name: "Soju Good Friends Peach", description: "", image: "/images/extracted_smart/menu-5_0.jpg" },
      { name: "Soju Good Friends Strawberry", description: "", image: "/images/extracted_smart/menu-5_1.jpg" },
      { name: "Soju Good Friends Green Grape", description: "", image: "/images/extracted_smart/menu-5_2.jpg" },
      { name: "Soju Good Friends Lychee", description: "", image: "/images/extracted_smart/menu-5_3.jpg" },
      { name: "Draft Sapporo", description: "12 oz / 16 oz", image: "/images/extracted_smart/menu-5_4.jpg" },
      { name: "Draft Asahi", description: "12 oz / 16 oz", image: "/images/extracted_smart/menu-5_5.jpg" },
    ],
  },
  {
    category: "Tea & Drink",
    items: [
      { name: "Iced Yuzu Tea", description: "", image: "/images/extracted_smart/menu-6_0.jpg" },
      { name: "Butterscotch Latte", description: "", image: "/images/extracted_smart/menu-6_1.jpg" },
      { name: "Hot Yuzu Tea", description: "", image: "/images/extracted_smart/menu-6_2.jpg" },
      { name: "Strawberry Matcha Latte", description: "", image: "/images/extracted_smart/menu-6_3.jpg" },
      { name: "Soda", description: "Coke • Diet Coke • Sprite • Dr.Pepper • Lemonade" },
      { name: "Iced Tea", description: "Sweet / Unsweet tea" },
      { name: "Hot Tea", description: "" },
    ],
  },
  {
    category: "Ramen",
    items: [
      { name: "Beef Bulgogi", description: "A rich fusion ramen featuring your choice of savory pork or chicken broth, paired with ramen noodles and topped with marinated beef bulgogi, soft-boiled egg, scallions, naruto, and bok choy where Korean flavor meets Japanese comfort.", image: "/images/extracted_smart/menu-7_0.jpg" },
      { name: "Pork Bulgogi", description: "A rich fusion ramen featuring your choice of savory pork or chicken broth, paired with ramen noodles and topped with marinated pork bulgogi, soft-boiled egg, scallions, naruto, and bok choy where Korean flavor meets Japanese comfort.", image: "/images/extracted_smart/menu-7_1.jpg" },
      { name: "Curry Tonkotsu", description: "Pork bone broth with Fried Ton-Ka-Tsu, soy marinated egg, shiitake mushroom, corn, menma, scallions.", image: "/images/extracted_smart/menu-7_2.jpg" },
      { name: "TanTanMen", description: "Pork bone broth with chashu(pork), soy marinated egg, ground pork, menma, mayu(black garlic oil), peanut, corn, bok choy, scallions.", image: "/images/extracted_smart/menu-7_3.jpg" },
      { name: "Matcha Ramen", description: "Soy broth with CEREMONIAL GRADE MATCHA, chashu, soy marinated egg, naruto, mayu(black garlic oil), menma, scallions, red ginger, lemon.", image: "/images/extracted_smart/menu-7_4.jpg" },
      { name: "Matcha Vegetable Ramen", description: "Soy broth with CEREMONIAL GRADE MATCHA, tofu, woodear mushroom, mayu(black garlic oil), menma, scallions, red ginger, lemon.", image: "/images/extracted_smart/menu-7_5.jpg" },
      { name: "Tonkotsu", description: "Pork bone broth with chashu(pork), soy marinated egg, naruto, mayu(black garlic oil), woodear mushroom, menma, scallions, nori.", image: "/images/extracted_smart/menu-7_6.jpg" },
      { name: "Kimchi Tonkotsu", description: "Fried and seasoned Kimchi, pork bone broth with chashu(pork), soy marinated egg, naruto, mayu(black garlic oil), woodear mushroom, menma, scallions, nori.", image: "/images/extracted_smart/menu-7_7.jpg" },
      { name: "Miso Ramen", description: "Pork bone broth with chashu(pork), soy marinated egg, mayu(black garlic oil), menma, scallions, naruto, corn, nori.", image: "/images/extracted_smart/menu-8_0.jpg" },
      { name: "Kimchi Miso", description: "Fried and seasoned Kimchi, pork bone broth with chashu(pork), soy marinated egg, mayu(black garlic oil), menma, scallions, naruto, corn, nori.", image: "/images/extracted_smart/menu-8_1.jpg" },
      { name: "Curry Ramen", description: "Pork bone broth with Fried Ton-Ka-Tsu, soy marinated egg, shiitake mushroom, corn, menma, scallions.", image: "/images/extracted_smart/menu-8_2.jpg" },
      { name: "TsukeMen", description: "Pork bone broth with chashu(pork), soy marinated egg, ground pork, menma, mayu(black garlic oil), peanut, corn, bok choy, scallions.", image: "/images/extracted_smart/menu-8_3.jpg" },
      { name: "Shio", description: "Chicken bone broth with sea salt, chashu(pork), woodear mushroom, scallions, soy-marinated egg, menma, naruto.", image: "/images/extracted_smart/menu-8_4.jpg" },
      { name: "Kimchi Shio", description: "Fried and seasoned Kimchi, chicken bone broth with sea salt, chashu(pork), woodear mushroom, scallions, soy-marinated egg, menma, naruto.", image: "/images/extracted_smart/menu-8_5.jpg" },
      { name: "Shoyu", description: "Chicken bone broth with soy sauce, chashu(pork), bok choy, scallions, menma, woodear mushroom, soy-marinated egg, naruto.", image: "/images/extracted_smart/menu-8_6.jpg" },
      { name: "Kimchi Shoyu", description: "Fried and seasoned Kimchi, chicken bone broth with soy sauce, chashu(pork), bok choy, scallions, menma, woodear mushroom, soy-marinated egg, naruto.", image: "/images/extracted_smart/menu-8_7.jpg" },
      { name: "Vegetable Ramen", description: "Vegetable broth, tofu, menma, scallions, woodear mushroom.", image: "/images/extracted_smart/menu-9_0.jpg" },
      { name: "Kimchi Vegetable Ramen", description: "Fried and seasoned Kimchi, vegetable broth, tofu, menma, scallions, woodear mushroom.", image: "/images/extracted_smart/menu-9_1.jpg" },
      { name: "Curry Vegetable", description: "Corn, curry spicy, vegetable broth with tofu, menma, scallions, shiitake mushroom.", image: "/images/extracted_smart/menu-9_2.jpg" },
      { name: "Miso Vegetable", description: "Miso, vegetable broth with tofu, corn, menma, scallions.", image: "/images/extracted_smart/menu-9_3.jpg" },
      { name: "Kimchi Miso Vegetable", description: "Fried and seasoned Kimchi, miso, vegetable broth with tofu, corn, menma, scallions.", image: "/images/extracted_smart/menu-9_4.jpg" },
      { name: "Tempura Udon", description: "Fried tofu, soy marinated egg, krab, naruto, bok choy, fried shrimp, scallions.", image: "/images/extracted_smart/menu-9_5.jpg" },
    ],
  },
  {
    category: "Entree",
    items: [
      { name: "BigBoss Beef Bulgogi Set", description: "A full pound of beef, marinated in our signature house-made bulgogi sauce crafted from an original Korean recipe. Served with steamed white rice. Add Mozzarella Cheese", image: "/images/extracted_smart/menu-10_0.jpg" },
      { name: "BigBoss Pork Bulgogi Set", description: "A full pound of pork, marinated in our signature house-made bulgogi sauce crafted from an original Korean recipe. Served with steamed white rice. Add Mozzarella Cheese", image: "/images/extracted_smart/menu-10_1.jpg" },
      { name: "Tonkatsu Set", description: "Deep fried pork loin cutlet with Tonkatsu sauce, white rice.", image: "/images/extracted_smart/menu-10_2.jpg" },
      { name: "Chicken Katsu Set", description: "Deep fried Chicken thigh with Tonkatsu sauce, white rice.", image: "/images/extracted_smart/menu-10_3.jpg" },
      { name: "Modu Wing Set", description: "Plain | Spicy | Honey - fried wings, white rice, kimchi or daikon.", image: "/images/extracted_smart/menu-10_4.jpg" },
      { name: "Chashu Don", description: "White rice with seasoned pork, scallion, pickled ginger, pickled radish, egg, mayo, teriyaki, special soy based house sauce.", image: "/images/extracted_smart/menu-10_5.jpg" },
      { name: "Beef Bulgogi Don", description: "Savory marinated beef served over steamed white rice, topped with scallions, pickled ginger, pickled radish, and a soft egg.", image: "/images/extracted_smart/menu-10_6.jpg" },
      { name: "Pork Bulgogi Don", description: "Savory marinated pork served over steamed white rice, topped with scallions, pickled ginger, pickled radish, and a soft egg.", image: "/images/extracted_smart/menu-10_7.jpg" },
      { name: "Tonkatsu Don", description: "White rice with fried pork loin cutlet, scallion, pickled ginger, pickled radish, egg, mayo, teriyaki, Tonkatsu sauce special soy based house sauce.", image: "/images/extracted_smart/menu-11_0.jpg" },
      { name: "Chicken Katsu Don", description: "White rice with fried Chicken thigh, scallion, pickled ginger, pickled radish, egg, mayo, teriyaki, Tonkatsu sauce special soy based house sauce.", image: "/images/extracted_smart/menu-11_1.jpg" },
      { name: "Beef Bulgogi Yaki Udon", description: "A hearty stir-fry of marinated bulgogi and onions with udon noodles, cooked in our signature Bigboss bulgogi sauce. Add Mozzarella Cheese.", image: "/images/extracted_smart/menu-11_2.jpg" },
      { name: "Pork Bulgogi Yaki Udon", description: "A hearty stir-fry of marinated bulgogi and onions with udon noodles, cooked in our signature Bigboss bulgogi sauce. Add Mozzarella Cheese.", image: "/images/extracted_smart/menu-11_3.jpg" },
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
            <section key={idx} className="relative bg-[#1a1a1a] rounded-xl border border-gold/10 p-8 md:p-12 shadow-2xl overflow-hidden">
              {/* Decorative Korean/Asian Inspired Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 md:w-16 md:h-16 border-t-2 border-l-2 border-[#D92A2A] rounded-tl-xl opacity-70"></div>
              <div className="absolute top-0 right-0 w-8 h-8 md:w-16 md:h-16 border-t-2 border-r-2 border-[#D92A2A] rounded-tr-xl opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 md:w-16 md:h-16 border-b-2 border-l-2 border-[#D92A2A] rounded-bl-xl opacity-70"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 md:w-16 md:h-16 border-b-2 border-r-2 border-[#D92A2A] rounded-br-xl opacity-70"></div>

              <h2 className="text-3xl md:text-5xl font-serif font-black text-gold mb-16 text-center tracking-widest uppercase">
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex gap-6 group items-start border-b border-paper/5 pb-8 lg:border-none lg:pb-0">
                    {/* Render Image utilizing object-contain to preserve original Polaroid without clipping */}
                    {item.image && (
                      <div className="shrink-0 w-28 h-28 sm:w-36 sm:h-36 relative transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
                        <Image
                          src={`${basePath}${item.image}`}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    
                    <div className="flex flex-col flex-grow justify-center">
                      <h3 className="text-xl sm:text-2xl font-bold text-paper mb-3 tracking-wide font-serif group-hover:text-gold transition-colors duration-300">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-paper/70 font-light text-sm sm:text-base leading-relaxed">
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
          <a href="https://moduramennzti.web.ordersave.com/menu" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 bg-gold text-charcoal hover:bg-paper transition-all duration-300 uppercase tracking-widest text-sm font-bold shadow-lg shadow-gold/20 hover:shadow-gold/40 rounded-sm">
            Order Now
          </a>
          <a href="https://getseat.net?channel=merchant_web#/public/online/reservation/8G2AGD47" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 uppercase tracking-widest text-sm font-bold shadow-lg shadow-transparent hover:shadow-gold/20 rounded-sm bg-charcoal/50">
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
