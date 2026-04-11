'use client';

import React from 'react';
import { motion } from 'motion/react';

import Image from 'next/image';

const menuItems = [
  { 
    name: 'Бенедикт з лососем', 
    price: '360 ₴', 
    desc: 'Лосось, бріош, мус філадельфія, авокадо, яйце пашот та сирний соус.',
    weight: '360 г',
    image: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1775868862/44e9310a-be3f-4ac7-b387-9e3b31a2bc76-image_rjbyzx.webp'
  },
  { 
    name: 'Тартар з лососем', 
    price: '370 ₴', 
    desc: 'Свіжий лосось з мусом авокадо-філадельфія, пармезаном та томатами чері.',
    weight: '170/30 г',
    image: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1775868862/138d998e-d6cc-440f-8a36-7e7728fca127-image_kkfatm.webp'
  },
  { 
    name: 'Мідії в соусі Блю чіз', 
    price: '380 ₴', 
    desc: 'Чорноморські мідії у ніжному вершковому соусі на основі сиру Дор Блю.',
    weight: '320 г',
    image: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1775868862/bbaba09e-c15a-440a-a7fc-ba92ab235e3d_image_lxoase.webp'
  },
  { 
    name: 'Томлені щічки', 
    price: '400 ₴', 
    desc: 'Соковиті яловичі щічки з пюре картоплі та селери під соусом деміглас.',
    weight: '400 г',
    image: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1775868862/e6e9068e-af65-4689-a704-c0c61f81a35f_image_yxu771.webp'
  },
  { 
    name: 'Курка Smoker Том Ям', 
    price: '350 ₴', 
    desc: 'Куряче стегно зі смокера з овочами та ароматною заправкою Том Ям.',
    weight: '350 г',
    image: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1775868862/1f914e9b-0376-42c5-8631-743104faf1d3-image_cuei8w.webp'
  },
  { 
    name: 'Стейк з язика з палентою', 
    price: '400 ₴', 
    desc: 'Грильований язик з вершковою палентою та соусом з лісових грибів.',
    weight: '350 г',
    image: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1775868862/883c4742-e8fd-4eee-97ca-80f34212edc5-image_oflard.webp'
  },
];

interface MenuSectionProps {
  onOpenMenu: () => void;
}

export default function MenuSection({ onOpenMenu }: MenuSectionProps) {
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
              <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-xl bg-stone-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
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
          <button 
            onClick={onOpenMenu}
            className="px-12 py-5 border border-stone-200 text-stone-900 uppercase tracking-[0.2em] text-xs font-bold hover:bg-stone-900 hover:text-white transition-all"
          >
            Переглянути меню
          </button>
        </div>
      </div>
    </section>
  );
}
