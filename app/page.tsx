'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import BookingDrawer from '@/components/BookingDrawer';
import { motion } from 'motion/react';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="relative">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />
      
      {/* About Section */}
      <section id="about" className="py-24 bg-white">
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
                  Наша історія
                </span>
                <h2 className="text-5xl md:text-6xl font-serif italic text-stone-900 mb-8">
                  Смак, що надихає <br /> на святкування
                </h2>
                <p className="text-stone-600 font-serif italic text-lg leading-relaxed mb-8">
                  Ресторан &quot;Plate&quot; народився з пристрасті до вишуканої кухні та гостинності. Ми віримо, що кожен банкет — це унікальна історія, яку ми пишемо разом з вами.
                </p>
                <p className="text-stone-500 text-sm leading-relaxed mb-10">
                  Наші шеф-кухарі поєднують локальні традиції з сучасними кулінарними техніками, створюючи страви, які дивують навіть найвибагливіших гурманів. Від камерних вечерь до масштабних весіль — ми забезпечуємо бездоганний сервіс та атмосферу.
                </p>
                <div className="flex gap-12">
                  <div>
                    <span className="text-4xl font-serif text-stone-900 block mb-2">10+</span>
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Років досвіду</span>
                  </div>
                  <div>
                    <span className="text-4xl font-serif text-stone-900 block mb-2">2.5k</span>
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Щасливих подій</span>
                  </div>
                </div>
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
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
                  alt="Restaurant Interior"
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

      <MenuSection />
      
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
          <h2 className="text-4xl md:text-6xl font-serif italic mb-12">
            Плануєте особливу подію? <br /> Давайте створимо її разом.
          </h2>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="px-12 py-6 bg-white text-stone-900 uppercase tracking-[0.2em] text-xs font-bold hover:bg-stone-100 transition-all transform hover:scale-105"
          >
            Забронювати дату
          </button>
        </div>
      </section>

      <Footer />

      <BookingDrawer isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}
