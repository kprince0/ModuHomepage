'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Quote } from 'lucide-react';

const LocalTrust = () => {
  return (
    <section className="py-20 bg-charcoal text-paper relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-5xl font-serif text-gold mb-6 leading-tight">
                  Loved by <span className="text-paper italic">Jacksonville Locals</span>
                </h2>
                <div className="w-20 h-1 bg-gold mb-8" />
              </div>

              <div className="relative p-8 bg-paper/5 border-l-4 border-gold rounded-r-lg">
                <Quote className="text-gold/20 absolute -top-4 -left-2 w-12 h-12" />
                <p className="text-xl md:text-2xl font-serif italic mb-6 leading-relaxed">
                  "Simply the best ramen in Jax. You can taste the 18-hour effort in the broth!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-gold/50" />
                  <p className="text-sm uppercase tracking-widest text-gold font-bold">Google Reviewer</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-paper/5 p-10 rounded-sm border border-paper/10 backdrop-blur-sm group hover:border-gold/30 transition-colors duration-500">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-500">
                    <MapPin className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-paper mb-4 uppercase tracking-widest">Our Location</h3>
                    <p className="text-paper/70 text-lg leading-relaxed mb-6">
                      📍 Located at <span className="text-paper font-semibold">8602 Baymeadows Rd, Jacksonville, FL 32256</span>.
                    </p>
                    <a 
                      href="https://www.google.com/maps/dir/?api=1&destination=Modu+Ramen+Jacksonville" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gold hover:text-paper transition-colors duration-300 font-bold uppercase tracking-widest text-sm"
                    >
                      Get Directions <span>→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-paper/5 p-6 rounded-sm text-center border border-paper/5">
                  <p className="text-3xl font-serif text-gold mb-1">4.8+</p>
                  <p className="text-xs uppercase tracking-widest text-paper/50">Google Rating</p>
                </div>
                <div className="bg-paper/5 p-6 rounded-sm text-center border border-paper/5">
                  <p className="text-3xl font-serif text-gold mb-1">500+</p>
                  <p className="text-xs uppercase tracking-widest text-paper/50">Local Reviews</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Background patterns/effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(212,175,55,0.15),_transparent_50%)]" />
      </div>
    </section>
  );
};

export default LocalTrust;
