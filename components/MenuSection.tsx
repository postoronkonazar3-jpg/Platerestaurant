'use client';

import React from 'react';
import { motion } from 'motion/react';

const menuCategories = [
  {
    title: 'Холодні закуски',
    items: [
      { name: 'Плато італійських сирів', price: '450 ₴', desc: 'Пармезан, Горгонзола, Пекоріно з медом та горіхами' },
      { name: 'Тартар з телятини', price: '380 ₴', desc: 'З каперсами, шалотом та хрусткими грінками' },
      { name: 'Карпачо з лосося', price: '420 ₴', desc: 'З цитрусовим соусом та руколою' },
    ]
  },
  {
    title: 'Основні страви',
    items: [
      { name: 'Стейк Рібай', price: '850 ₴', desc: 'Витримана яловичина з овочами гриль' },
      { name: 'Філе дорадо', price: '560 ₴', desc: 'Зі шпинатом та вершковим соусом' },
      { name: 'Качка Конфі', price: '490 ₴', desc: 'З яблучним пюре та ягідним соусом' },
    ]
  },
  {
    title: 'Банкетні пропозиції',
    items: [
      { name: 'Запечене порося', price: 'від 4500 ₴', desc: 'Традиційна святкова страва з гарніром' },
      { name: 'Стерлядь по-царськи', price: 'від 3200 ₴', desc: 'Фарширована білою рибою та креветками' },
      { name: 'М\'ясне асорті Grill', price: '2800 ₴', desc: 'Набір стейків та ковбасок для компанії' },
    ]
  }
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-stone-400 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
            Гастрономія
          </span>
          <h2 className="text-5xl md:text-6xl font-serif italic text-stone-900">Вишукане Меню</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {menuCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif italic mb-10 pb-4 border-b border-stone-100 text-stone-800">
                {category.title}
              </h3>
              <div className="space-y-10">
                {category.items.map((item) => (
                  <div key={item.name} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-sm uppercase tracking-widest font-bold text-stone-900 group-hover:text-stone-500 transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-stone-400 font-serif italic text-sm">{item.price}</span>
                    </div>
                    <p className="text-stone-500 text-sm font-serif italic leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-12 py-5 border border-stone-200 text-stone-900 uppercase tracking-[0.2em] text-xs font-bold hover:bg-stone-900 hover:text-white transition-all">
            Завантажити повне меню (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
