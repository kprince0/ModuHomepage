'use client';

import React from 'react';
import Image from 'next/image';

const menuItems = [
  {
    category: "Fusion Ramen",
    name: "Beef Bulgogi Ramen",
    description: "A rich fusion ramen featuring savory broth, topped with marinated beef bulgogi, soft-boiled egg, and fresh bok choy.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/Pork Bulgogi.png`
  },
  {
    category: "Fusion Ramen",
    name: "Matcha Ramen",
    description: "Soy broth infused with Ceremonial Grade Matcha, chashu (pork), soy marinated egg, black garlic oil, and red ginger.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/matcha-ramen.jpg`
  },
  {
    category: "Entree",
    name: "BigBoss Beef Bulgogi Set",
    description: "A full pound of beef marinated in our signature house-made bulgogi sauce crafted from an original Korean recipe.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/beef Bulgogi Set canva.png`
  },
  {
    category: "Appetizer",
    name: "K.F.C Modu Wings",
    description: "Authentic Korean Fried Chicken wings, crispy fried and tossed in a traditional Korean spicy sauce.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/spicy modu wings.png`
  },
  {
    category: "Classic Ramen",
    name: "Kimchi Tonkotsu",
    description: "Pork bone broth with chashu, soy marinated egg, black garlic oil, woodear mushroom, and nori seaweed.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/Kimchi Tonkatsu.png`
  },
  {
    category: "Classic Ramen",
    name: "Curry Tonkatsu",
    description: "Pork bone broth with Fried Ton-Ka-Tsu, soy marinated egg, shiitake mushroom, corn, menma, and scallions.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/curry tonkatsu 1.jpg`
  },
  {
    category: "Fusion Ramen",
    name: "TanTanMen",
    description: "Pork bone broth with ground pork, menma, black garlic oil, peanut, corn, and bok choy.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/TanTan.png`
  },
  {
    category: "Vegetarian",
    name: "Vegetable Ramen",
    description: "Creamy vegetable broth, tofu, menma, scallions, and woodear mushroom.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/Veg.png`
  },
  {
    category: "BingSu",
    name: "Mango Cheese Cake / Tiramisu Bingsu",
    description: "Delicate shaved ice topped with your choice of sweet mango and cheesecake OR rich cocoa, espresso powder, and mascarpone cream.",
    images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/Bingsu/mango cheesecake.png`, `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/Bingsu/Tiramisu.jpg`]
  },
  {
    category: "Soju Cocktail",
    name: "Caipirinha / Sunrise",
    description: "Refreshing Soju-based craft cocktails featuring vibrant citrus and tropical profiles.",
    images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/Soju Cocktail/caipirinha.png`, `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/Soju Cocktail/sunrise.png`]
  }
];

export default function MenuGallery() {
  return (
    <section id="menu" className="py-24 bg-charcoal text-paper">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
          Our <span className="text-gold">Artistry</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
          {menuItems.map((item, index) => (
            <div key={index} className="group overflow-hidden">
              <div className="relative h-80 w-full mb-6 overflow-hidden rounded-sm bg-black/40">
                {item.images ? (
                  <div className="flex w-full h-full gap-2 p-2">
                    {item.images.map((img, i) => (
                      <div key={i} className="relative w-1/2 h-full">
                        <Image
                          src={img}
                          alt={`${item.name} ${i + 1}`}
                          fill
                          className={`transition-transform duration-700 opacity-90 group-hover:opacity-100 ${['BingSu', 'Soju Cocktail'].includes(item.category) ? 'object-contain p-2' : 'object-cover'} ${img.includes('sunrise') ? 'scale-[1.3] group-hover:scale-[1.35] translate-y-[10%]' : 'group-hover:scale-105'}`}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <Image
                    src={item.image as string}
                    alt={item.name}
                    fill
                    className={`transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 ${['BingSu', 'Soju Cocktail'].includes(item.category) ? 'object-contain p-4' : 'object-cover'}`}
                  />
                )}
              </div>
              <div className="border-b border-gold/20 pb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-gold/60 block mb-2">{item.category}</span>
                <h3 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors">{item.name}</h3>
                <p className="text-paper/70 leading-relaxed font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}