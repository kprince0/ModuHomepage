"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What is the best authentic Japanese ramen restaurant in Jacksonville, FL?",
    answer: "Modu Ramen at 8602 Baymeadows Rd is one of Jacksonville's top-rated ramen restaurants, rated 4.6/5 on Google, 100% recommended on Facebook (257 reviews), and featured in Jacksonville Magazine's ramen roundup. Founded in 2019 by Chef Dongil Kim, who brings 26 years of culinary mastery since 2000, Modu Ramen serves a signature 18-hour double-boiled tonkotsu broth."
  },
  {
    question: "What is Tonkotsu ramen?",
    answer: "Tonkotsu is a famous style of Japanese ramen characterized by a rich, milky-white pork bone broth. The broth gets its creamy texture from collagen melting out of the bones during a rigorous, high-heat boiling process that often takes 12 to 18 hours or more. At Modu Ramen in Jacksonville, the tonkotsu broth is slow-cooked for a full 18 hours using a double-boil technique."
  },
  {
    question: "Where can I find the best ramen near Baymeadows in Jacksonville?",
    answer: "Modu Ramen is located right in the heart of Southside Jacksonville at 8602 Baymeadows Rd, FL 32256. We serve authentic 18-hour slow-cooked tonkotsu ramen, Korean-Japanese fusion bulgogi bowls, tantanmen, matcha ramen, and traditional Korean bingsu with plenty of on-site parking. Phone: (904) 253-3454."
  },
  {
    question: "What makes Chef Kim's ramen unique?",
    answer: "Chef Dongil Kim brings over 26 years of culinary experience, starting his career in 2000. He uses a meticulous double-boiling 18-hour broth technique and seamlessly blends authentic Japanese ramen traditions with bold Korean flavors, exemplified in signature dishes like the Bulgogi Ramen, TanTanMen, and Ceremonial Grade Matcha Ramen."
  },
  {
    question: "Can I order Modu Ramen online for takeout or delivery?",
    answer: "Yes, you can order Modu Ramen online for pickup directly through moduramennzti.web.ordersave.com/menu. Online ordering is a popular option for lunch breaks in the Baymeadows and Deerwood business districts in Jacksonville."
  },
  {
    question: "Does Modu Ramen take reservations?",
    answer: "Yes. Modu Ramen accepts reservations online at modu-waitlist.vercel.app/reserve. Walk-ins are also welcome, but reservations are recommended for weekend dinner service."
  },
  {
    question: "What are Modu Ramen's hours?",
    answer: "Modu Ramen is open Monday through Thursday 11:00 AM–3:00 PM and 5:00 PM–9:00 PM, Friday and Saturday 11:00 AM–3:00 PM and 5:00 PM–9:30 PM, and is closed on Sundays."
  },
  {
    question: "Does Modu Ramen have vegetarian options?",
    answer: "Yes. Modu Ramen offers a Vegetable Ramen made with a creamy vegetable broth, tofu, menma, scallions, and woodear mushroom — fully suitable for vegetarian diets."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-24 bg-paper/5 border-t border-paper/10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.4em] uppercase text-xs font-bold mb-4 block">Get Answers</span>
          <h2 className="text-4xl md:text-5xl font-serif text-paper mb-6">
            Frequently Asked <span className="text-gold italic">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-[#111] border border-paper/10 rounded-sm transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none cursor-pointer"
                >
                  <h3 className={`text-lg md:text-xl font-serif transition-colors ${isOpen ? 'text-gold' : 'text-paper hover:text-gold/80'}`}>
                    {faq.question}
                  </h3>
                  <span className={`text-gold text-2xl font-light transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                
                <div 
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-8 pb-8 text-paper/70 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
