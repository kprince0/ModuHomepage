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
      { name: "K.F.C Modu Wings (Spicy)", description: "Crispy fried chicken wings tossed in a traditional Korean spicy sauce." },
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
      { name: "Jax French Fries", description: "" },
      { name: "Sparkling Wings", description: "(2 piece wings + 1 soda)" },
      { name: "Drunken Wings", description: "(2 piece wings + 1 Kirin or Sapporo beer)" },
      { name: "Sparkling Gyoza", description: "(3 piece pork or vegGyoza + 1 soda)" },
    ],
  },
  {
    category: "Ramen",
    items: [
      { name: "Beef Bulgogi Ramen", description: "A rich fusion ramen featuring your choice of savory pork or chicken broth, paired with ramen noodles and topped with marinated beef bulgogi, soft-boiled egg, scallions, naruto, and bok choy where Korean flavor meets Japanese comfort." },
      { name: "Pork Bulgogi Ramen", description: "A rich fusion ramen featuring your choice of savory pork or chicken broth, paired with ramen noodles and topped with marinated pork bulgogi, soft-boiled egg, scallions, naruto, and bok choy where Korean flavor meets Japanese comfort." },
      { name: "Curry Tonkotsu", description: "pork bone broth with Fried Ton-Ka-Tsu, soy marinated egg, shiitake mushroom, corn, menma, scallions" },
      { name: "TanTanMen", description: "pork bone broth with chashu(pork), soy marinated egg, ground pork, menma, mayu(black garlic oil), peanut, corn, bok choy, scallions" },
      { name: "Matcha Ramen", description: "Soy broth with CEREMONIAL GRADE MATCHA chashu, soy marinated egg, naruto, mayu(black garlic oil), menma, scallions, red ginger, lemon" },
      { name: "Matcha Vegetable Ramen", description: "Soy broth with CEREMONIAL GRADE MATCHA, tofu, woodear mushroom, mayu(black garlic oil), menma, scallions, red ginger, lemon" },
      { name: "Tonkotsu", description: "pork bone broth with chashu(pork), soy marinated egg, naruto, mayu(black garlic oil), woodear mushroom, menma, scallions, nori" },
      { name: "Kimchi Tonkotsu", description: "Fried and seasoned Kimchi, pork bone broth with chashu(pork), soy marinated egg, naruto mayu(black garlic oil), woodear mushroom, menma, scallions, nori" },
      { name: "Miso Ramen", description: "pork bone broth with chashu(pork), soy marinated egg, mayu(black garlic oil), menma, scallions, naruto, corn, nori." },
      { name: "Kimchi Miso", description: "Fried and seasoned Kimchi, pork bone broth with chashu(pork), soy marinated egg, mayu(black garlic oil), menma, scallions, naruto, corn, nori." },
      { name: "Curry Ramen", description: "pork bone broth with Fried Ton-Ka-Tsu, soy marinated egg, shiitake mushroom, corn, menma, scallions" },
      { name: "TsukeMen", description: "pork bone broth with chashu(pork), soy marinated egg, ground pork, menma, mayu(black garlic oil), peanut, corn, bok choy, scallions" },
      { name: "Shio", description: "chicken bone broth with sea salt, chashu(pork), woodear mushroom, scallions, soy-marinated egg, menma, naruto" },
      { name: "Kimchi Shio", description: "Fried and seasoned Kimchi, chicken bone broth with sea salt, chashu(pork), woodear mushroom, scallions, soy-marinated egg, menma, naruto" },
      { name: "Shoyu", description: "chicken bone broth with soy sauce, chashu(pork), bok choy, scallions, menma, woodear mushroom, soy-marinated egg, naruto" },
      { name: "Kimchi Shoyu", description: "Fried and seasoned Kimchi, chicken bone broth with soy sauce, chashu(pork), bok choy, scallions, menma, woodear mushroom, soy-marinated egg, naruto" },
      { name: "Vegetable Ramen", description: "vegetable broth,tofu, menma, scallions, woodear mushroom." },
      { name: "Kimchi Vegetable Ramen", description: "Fried and seasoned Kimchi, vegetable broth,tofu, menma, scallions, woodear mushroom" },
      { name: "Curry Vegetable", description: "Corn, curry spicy, vegetable broth with tofu, menma, scallions, shiitake mushroom." },
      { name: "Miso Vegetable", description: "miso, vegetable broth with tofu, corn, menma, scallions" },
      { name: "Kimchi Miso Vegetable", description: "Fried and seasoned Kimchi, miso, vegetable broth with tofu, corn, menma, scallions" },
      { name: "Tempura Udon", description: "fried tofu, soy marinated egg, krab, naruto, bok choy, fried shrimp, scallions" },
    ],
  },
  {
    category: "Entree",
    items: [
      { name: "BigBoss Beef Bulgogi Set", description: "A full pound of beef, marinated in our signature house-made bulgogi sauce crafted from an original Korean recipe. Served with steamed white rice. Add Mozzarella Cheese" },
      { name: "BigBoss Pork Bulgogi Set", description: "A full pound of pork, marinated in our signature house-made bulgogi sauce crafted from an original Korean recipe. Served with steamed white rice. Add Mozzarella Cheese" },
      { name: "Tonkatsu Set", description: "Deep fried pork loin cutlet with Tonkatsu sauce, white rice" },
      { name: "Chicken Katsu Set", description: "Deep fried Chicken thigh with Tonkatsu sauce, white rice" },
      { name: "Modu Wing Set", description: "Plain | Spicy | Honey - fried wings, white rice, kimchi or daikon" },
      { name: "Chashu Don", description: "white rice with seasoned pork, scallion, pickled ginger, pickled radish, egg, mayo, teriyaki, special soy based house sauce" },
      { name: "Beef Bulgogi Don", description: "Savory marinated beef served over steamed white rice, topped with scallions, pickled ginger, pickled radish, and a soft egg." },
      { name: "Pork Bulgogi Don", description: "Savory marinated pork served over steamed white rice, topped with scallions, pickled ginger, pickled radish, and a soft egg." },
      { name: "Tonkatsu Don", description: "white rice with fried pork loin cutlet, scallion, pickled ginger, pickled radish, egg, mayo, teriyaki, Tonkatsu sauce special soy based house sauce" },
      { name: "Chicken Katsu Don", description: "white rice with fried Chicken thigh, scallion, pickled ginger, pickled radish, egg, mayo, teriyaki, Tonkatsu sauce special soy based house sauce" },
      { name: "Beef Bulgogi Yaki Udon", description: "A hearty stir-fry of marinated bulgogi and onions with udon noodles, cooked in our signature Bigboss bulgogi sauce. Add Mozzarella Cheese" },
      { name: "Pork Bulgogi Yaki Udon", description: "A hearty stir-fry of marinated bulgogi and onions with udon noodles, cooked in our signature Bigboss bulgogi sauce. Add Mozzarella Cheese" },
    ],
  },
  {
    category: "Beer & Sake",
    items: [
      { name: "Asahi Lager" },
      { name: "Sapporo (12 oz / 20 oz)" },
      { name: "Kirin Ichiban" },
      { name: "Sake Cold / Hot" },
      { name: "Nigori Sake Mango" },
      { name: "Nigori Sake Strawberry" },
      { name: "Plum Wine 750 ml" },
      { name: "Sparking Plum Wine (750ml)" },
      { name: "Soju Good Friends Peach" },
      { name: "Soju Good Friends Strawberry" },
      { name: "Soju Good Friends Green Grape" },
      { name: "Soju Good Friends Lychee" },
      { name: "Draft Sapporo 12oz / 16oz" },
      { name: "Draft Asahi 12 oz / 16 oz" },
    ],
  },
  {
    category: "Tea & Drink",
    items: [
      { name: "Iced Yuzu Tea" },
      { name: "Hot Yuzu Tea" },
      { name: "Butterscotch Latte" },
      { name: "Strawberry Matcha Latte" },
      { name: "Soda", description: "Coke, Diet Coke, Sprite, dr.pepper, Lemonade, Sweet/Unsweet tea, Hot Tea" },
    ],
  },
  {
    category: "Side Dishes & Extra Toppings",
    items: [
      { name: "Kimchi" },
      { name: "Cooked Kimchi" },
      { name: "White rice" },
      { name: "Daikon (pickled radish)" },
      { name: "Chashu" },
      { name: "Soy Marinated Egg" },
      { name: "Noodles" },
      { name: "House spicy sauce" },
      { name: "Black garlic oil" },
      { name: "Scallions" },
    ],
  }
];

export default function DigitalMenu() {
  return (
    <main className="min-h-screen bg-charcoal selection:bg-gold selection:text-charcoal pt-[100px] md:pt-[120px] pb-12">
      <Header />
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16 mt-4">
          <h1 className="text-4xl md:text-5xl font-serif text-paper mb-4">Our Complete Menu</h1>
          <p className="text-gold uppercase tracking-[0.2em] text-xs font-bold">Modu Ramen Jacksonville</p>
          <p className="text-paper/70 mt-6 max-w-2xl mx-auto font-light leading-relaxed">
            *Customer is responsible for all orders placed.<br/>
            *Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {menuData.map((category, idx) => (
            <section key={idx} className="bg-black/20 p-8 md:p-12 rounded-lg border border-gold/10 shadow-2xl">
              <h2 className="text-4xl font-serif text-gold mb-12 text-center border-b border-gold/20 pb-4">
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col gap-2 group">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-medium text-paper group-hover:text-gold transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    {item.description && (
                      <p className="text-paper/60 font-light text-sm leading-relaxed pr-4">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        
        <div className="mt-20 mb-8 text-center w-full flex gap-4 justify-center flex-wrap">
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
