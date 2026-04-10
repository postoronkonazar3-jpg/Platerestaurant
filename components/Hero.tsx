'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop"
          alt="Plate Banquet Hall"
          fill
          className="object-cover scale-105 animate-slow-zoom"
          priority
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="text-white/80 uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
            Мистецтво святкування
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-serif italic mb-8 leading-tight">
            Plate Restaurant
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-serif italic max-w-3xl mx-auto mb-12">
            Ресторан PLATE — це простір, де кожна подія перетворюється на продуманий, естетичний і по-справжньому комфортний досвід. Ми поєднуємо високий рівень сервісу, уважне ставлення до деталей і кухню, яка залишає сильне враження у кожного гостя.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button
              onClick={onOpenBooking}
              className="px-10 py-5 bg-white text-stone-900 uppercase tracking-[0.2em] text-xs font-bold hover:bg-stone-100 transition-all transform hover:-translate-y-1"
            >
              Забронювати
            </button>
            <a
              href="#menu"
              className="px-10 py-5 border border-white text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-white hover:text-stone-900 transition-all transform hover:-translate-y-1"
            >
              Переглянути меню
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <a href="#service" className="text-white/60 flex flex-col items-center gap-2 hover:text-white transition-colors">
          <span className="text-[10px] uppercase tracking-[0.3em]">Гортати</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>

      <style jsx global>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
}
