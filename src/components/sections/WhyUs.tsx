'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const highlights = [
    {
      title: "18-Hour Perfection",
      description: "Our rich, creamy tonkotsu broth isn't made—it’s crafted over 18 hours to extract every drop of umami.",
      icon: "🍜"
    },
    {
      title: "26 Years of Mastery",
      description: "Chef Dongil Kim brings over two decades of culinary expertise to every bowl, ensuring an authentic taste of Japan in every slurp.",
      icon: "🔪"
    },
    {
      title: "The Freshness Guarantee",
      description: "From hand-selected ingredients to perfectly timed noodles, we never compromise on quality.",
      icon: "✨"
    }
  ];

  return (
    <section className="py-24 bg-paper relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6 leading-tight"
          >
            Why Modu Ramen is <span className="text-gold italic">Jacksonville's Favorite</span> Destination
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-gold mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-10 rounded-sm border border-gold/10 shadow-xl hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4 border-b border-gold/20 pb-2 inline-block">
                {item.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed font-light mt-4">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
    </section>
  );
};

export default WhyUs;
