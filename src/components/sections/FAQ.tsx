"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What is Tonkotsu ramen?",
    answer: "Tonkotsu is a famous style of Japanese ramen characterized by a rich, milky-white pork bone broth. The broth gets its creamy texture from collagen melting out of the bones during a rigorous, high-heat boiling process that often takes 12 to 18 hours or more."
  },
  {
    question: "Where can I find the best ramen near Baymeadows in Jacksonville?",
    answer: "Modu Ramen is located right in the heart of Southside Jacksonville at 8602 Baymeadows Rd. We serve authentic 18-hour slow-cooked ramen, fusion bulgogi bowls, and traditional Korean Bingsu with plenty of on-site parking."
  },
  {
    question: "What makes Chef Kim's ramen unique?",
    answer: "Chef Kim brings over 26 years of culinary experience, starting his career in 2000. He uses a meticulous double-boiling '18-hour broth' technique and seamlessly blends authentic Japanese ramen traditions with bold Korean flavors, like our signature Bulgogi Ramen."
  },
  {
    question: "Can I order Modu Ramen online for takeout?",
    answer: "Yes, you can easily place an order online through our website for quick pickup. It is a popular option for lunch breaks in the Baymeadows and Deerwood business districts."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
                className="bg-[#111] border border-paper/10 rounded-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
                >
                  <h3 className={`text-lg md:text-xl font-serif transition-colors ${isOpen ? 'text-gold' : 'text-paper hover:text-gold/80'}`}>
                    {faq.question}
                  </h3>
                  <span className={`text-gold text-2xl font-light transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8 text-paper/70 font-light leading-relaxed">
                    {faq.answer}
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
