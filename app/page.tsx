'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import BookingDrawer from '@/components/BookingDrawer';
import MenuModal from '@/components/MenuModal';
import { motion } from 'motion/react';

export default function Home() {
  const [bookingMode, setBookingMode] = useState<'calculation' | 'table'>('calculation');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openBooking = (mode: 'calculation' | 'table') => {
    setBookingMode(mode);
    setIsBookingOpen(true);
  };

  return (
    <main className="relative">
      <Navbar 
        onOpenBooking={openBooking} 
        onOpenMenu={() => setIsMenuOpen(true)} 
      />
      
      <Hero 
        onOpenBooking={openBooking} 
        onOpenMenu={() => setIsMenuOpen(true)}
      />
      
      {/* Service & Organization Section */}
      <section id="service" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-stone-400 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
                  Сервіс та Організація
                </span>
                <h2 className="text-5xl md:text-6xl font-serif italic text-stone-900 mb-8">
                  Ваше свято — <br /> у надійних руках
                </h2>
                <p className="text-stone-600 font-serif italic text-lg leading-relaxed mb-8">
                  Ми в PLATE зробили все, щоб організація банкету не нагадувала складний квест. Для нас це чіткий процес, а для вас — можливість просто розслабитися і передчувати крутий вечір.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="w-1 h-1 rounded-full bg-stone-300 mt-2 shrink-0" />
                    <p className="text-stone-500 text-sm leading-relaxed">
                      <strong className="text-stone-900 font-bold">Координація 360°:</strong> Ми поруч від першого «привіт» до останнього гостя. Контролюємо все, що відбувається в залі, щоб ви не відволікалися від спілкування.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1 h-1 rounded-full bg-stone-300 mt-2 shrink-0" />
                    <p className="text-stone-500 text-sm leading-relaxed">
                      <strong className="text-stone-900 font-bold">Меню саме для вас:</strong> Жодних шаблонів. Хочете легкий фуршет чи розкішну вечерю з декількома винесеннями страв? Ми підберемо ідеальний набір під ваш бюджет і смак.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1 h-1 rounded-full bg-stone-300 mt-2 shrink-0" />
                    <p className="text-stone-500 text-sm leading-relaxed">
                      <strong className="text-stone-900 font-bold">Жодних технічних головоломок:</strong> Допоможемо правильно розставити столи, виділити місце для танців чи презентації та організуємо все так, щоб гостям було максимально зручно.
                    </p>
                  </div>
                </div>

                <p className="text-stone-900 font-serif italic text-lg">
                  З нас — ідеальний результат, з вас — гарний настрій. 0% стресу, обіцяємо!
                </p>
              </motion.div>
            </div>
            <div className="flex-1 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <Image
                  src="https://res.cloudinary.com/daq51lz0x/image/upload/v1775860177/photo_2026-04-10_15-00-44_eofk6r.jpg"
                  alt="Event Organization"
                  width={1000}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#f5f2ed] -z-0 rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </div>
      </section>

      <MenuSection onOpenMenu={() => setIsMenuOpen(true)} />
      
      <Gallery />

      {/* Testimonials or CTA */}
      <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif italic mb-8">
            Насолоджуйтеся святом, <br /> не відволікаючись на деталі.
          </h2>
          <p className="text-white uppercase tracking-[0.3em] text-[10px] font-bold mb-8 block">
            Організовуємо банкети від 10 до 120 гостей
          </p>
          <p className="text-white/80 font-serif italic text-lg mb-12 max-w-2xl mx-auto">
            Ми подбаємо про все: від складання меню до координації в день події. Зосередьтеся на головному — вашому святі.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button
              onClick={() => openBooking('table')}
              className="px-12 py-6 border border-white text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-white hover:text-stone-900 transition-all transform hover:scale-105"
            >
              Забронювати стіл
            </button>
            <button
              onClick={() => openBooking('calculation')}
              className="px-12 py-6 bg-white text-stone-900 uppercase tracking-[0.2em] text-xs font-bold hover:bg-stone-100 transition-all transform hover:scale-105"
            >
              Розрахунок банкету
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <BookingDrawer 
        key={`${isBookingOpen}-${bookingMode}`}
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        mode={bookingMode}
      />
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
