'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, animate } from 'motion/react';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    alt: "Restaurant Atmosphere",
    title: "Атмосфера",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    alt: "Exquisite Dishes",
    title: "Вишукані страви",
  },
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
    alt: "Table Setting",
    title: "Сервірування",
  },
  {
    src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2070&auto=format&fit=crop",
    alt: "Bar Area",
    title: "Барна зона",
  },
  {
    src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop",
    alt: "Chef at Work",
    title: "Майстерність",
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    alt: "Cocktails",
    title: "Авторські коктейлі",
  },
];

export default function Gallery() {
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateConstraints = () => {
      const containerWidth = containerRef.current?.offsetWidth || 0;
      const contentWidth = containerRef.current?.scrollWidth || 0;
      setDragConstraints({ left: -(contentWidth - containerWidth), right: 0 });
    };

    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  useEffect(() => {
    const controls = animate(x, [0, dragConstraints.left], {
      duration: 40,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    });

    return controls.stop;
  }, [dragConstraints.left, x]);

  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-24 mb-16">
        <span className="text-stone-400 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
          Галерея
        </span>
        <h2 className="text-5xl md:text-7xl font-serif italic text-stone-900 mb-8">
          Наші миті
        </h2>
        <p className="text-stone-500 font-serif italic text-lg leading-relaxed max-w-2xl">
          Атмосфера в PLATE формується завдяки поєднанню простору, світла та музики. Інтер’єр створює відчуття затишку та приватності для кожного гостя.
        </p>
      </div>

      <div 
        ref={containerRef}
        className="cursor-grab active:cursor-grabbing"
      >
        <motion.div
          drag="x"
          dragConstraints={dragConstraints}
          style={{ x }}
          className="flex gap-8 px-6 md:px-24"
        >
          {/* Single set of images for ping-pong effect */}
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative h-[400px] w-[300px] md:h-[500px] md:w-[400px] overflow-hidden rounded-2xl flex-shrink-0"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white text-xl font-serif italic tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {image.title}
                </p>
              </div>
            </div>
          ))}

          {/* "See More" Button */}
          <div className="flex-shrink-0 flex items-center justify-center w-[300px] md:w-[400px]">
            <button className="group flex flex-col items-center gap-6">
              <div className="w-24 h-24 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-500">
                <div className="w-2 h-2 bg-stone-900 group-hover:bg-white rounded-full transition-colors" />
              </div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-stone-400 group-hover:text-stone-900 transition-colors">
                Дивитися ще
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
