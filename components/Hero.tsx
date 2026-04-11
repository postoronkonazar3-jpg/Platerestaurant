'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (mode: 'calculation' | 'table') => void;
  onOpenMenu: () => void;
}

export default function Hero({ onOpenBooking, onOpenMenu }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/65 z-10" />
        
        <Image
          src="https://res.cloudinary.com/daq51lz0x/image/upload/v1775859911/IMG_6715_1_dabp4s.jpg"
          alt="Plate Restaurant Interior"
          fill
          className="object-cover scale-105 animate-slow-zoom"
          priority
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="text-white/80 uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
            Мистецтво святкування
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif italic mb-8 leading-tight">
            Plate — місце для ваших подій у Києві
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
            <div className="space-y-4">
              <p className="text-white/90 text-sm md:text-base font-serif italic leading-relaxed">
                Ми створили Plate як світлий та зрозумілий простір, де головне — це ваша подія та люди за столом. У нас немає зайвого пафосу, зате є багато світла, сучасний дизайн і кухня, яку полюбляють.
              </p>
              <p className="text-white/90 text-sm md:text-base font-serif italic leading-relaxed">
                Сьогодні Plate — це вже дві локації у Києві, кожна з яких має свій характер, але зберігає наш спільний підхід до якості. Плануєте ви камерне весілля, день народження чи корпоратив — ми просто робимо так, щоб вам було смачно, затишно і спокійно.
              </p>
            </div>
            <div className="space-y-4 border-l border-white/20 pl-8 hidden md:block">
              <div className="space-y-2">
                <p className="text-white text-xs uppercase tracking-widest font-bold">Два заклади</p>
                <p className="text-white/70 text-xs italic">Обирайте локацію, яка зручніша для ваших гостей.</p>
              </div>
              <div className="space-y-2">
                <p className="text-white text-xs uppercase tracking-widest font-bold">Простір</p>
                <p className="text-white/70 text-xs italic">Сучасні зали, що легко підлаштовуються под ваш декор.</p>
              </div>
              <div className="space-y-2">
                <p className="text-white text-xs uppercase tracking-widest font-bold">Кухня</p>
                <p className="text-white/70 text-xs italic">Зрозуміла європейська класика та авторські акценти.</p>
              </div>
              <div className="space-y-2">
                <p className="text-white text-xs uppercase tracking-widest font-bold">Сервіс</p>
                <p className="text-white/70 text-xs italic">Коли команда поруч саме тоді, коли це потрібно.</p>
              </div>
            </div>
          </div>

          <p className="text-white font-serif italic text-xl mb-12">
            Plate — подбаємо про ваше свято, як про своє
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button
              onClick={() => onOpenBooking('calculation')}
              className="px-10 py-5 bg-white text-stone-900 uppercase tracking-[0.2em] text-xs font-bold hover:bg-stone-100 transition-all transform hover:-translate-y-1"
            >
              Розрахунок банкету
            </button>
            <button
              onClick={() => onOpenBooking('table')}
              className="px-10 py-5 border border-white text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-white hover:text-stone-900 transition-all transform hover:-translate-y-1"
            >
              Забронювати стіл
            </button>
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
