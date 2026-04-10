'use client';

import React from 'react';
import { motion } from 'motion/react';

const menuItems = [
  { 
    name: 'Бенедикт з лососем', 
    price: '360 ₴', 
    desc: 'Лосось, бріош, мус філадельфія, авокадо, яйце пашот та сирний соус.',
    weight: '360 г'
  },
  { 
    name: 'Тартар з лососем', 
    price: '370 ₴', 
    desc: 'Свіжий лосось з мусом авокадо-філадельфія, пармезаном та томатами чері.',
    weight: '170/30 г'
  },
  { 
    name: 'Мідії в соусі Блю чіз', 
    price: '380 ₴', 
    desc: 'Чорноморські мідії у ніжному вершковому соусі на основі сиру Дор Блю.',
    weight: '320 г'
  },
  { 
    name: 'Томлені щічки', 
    price: '400 ₴', 
    desc: 'Соковиті яловичі щічки з пюре картоплі та селери під соусом деміглас.',
    weight: '400 г'
  },
  { 
    name: 'Курка Smoker Том Ям', 
    price: '350 ₴', 
    desc: 'Куряче стегно зі смокера з овочами та ароматною заправкою Том Ям.',
    weight: '350 г'
  },
  { 
    name: 'Стейк з язика з палентою', 
    price: '400 ₴', 
    desc: 'Грильований язик з вершковою палентою та соусом з лісових грибів.',
    weight: '350 г'
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-stone-400 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
            Гастрономія
          </span>
          <h2 className="text-5xl md:text-6xl font-serif italic text-stone-900 mb-8">Вишукане Меню</h2>
          <p className="text-stone-500 font-serif italic text-lg leading-relaxed">
            Кухня PLATE — це баланс між різноманіттям, якістю та подачею. Особлива увага приділяється смаку, свіжості інгредієнтів і візуальній естетиці кожної подачі.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {menuItems.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex gap-6 items-start"
            >
              <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-xl bg-stone-100 flex items-center justify-center">
                <div className="w-full h-full bg-stone-200 animate-pulse" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-sm uppercase tracking-widest font-bold text-stone-900 group-hover:text-stone-500 transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-stone-400 font-serif italic text-sm whitespace-nowrap ml-4">{item.price}</span>
                </div>
                <p className="text-stone-500 text-xs font-serif italic leading-relaxed mb-2">
                  {item.desc}
                </p>
                <span className="text-[10px] text-stone-300 uppercase tracking-widest font-bold">
                  {item.weight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-12 py-5 border border-stone-200 text-stone-900 uppercase tracking-[0.2em] text-xs font-bold hover:bg-stone-900 hover:text-white transition-all">
            Переглянути меню
          </button>
        </div>
      </div>
    </section>
  );
}
