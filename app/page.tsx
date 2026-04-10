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
                  Спокій та впевненість <br /> у кожній деталі
                </h2>
                <p className="text-stone-600 font-serif italic text-lg leading-relaxed mb-8">
                  Організація заходів у PLATE — це системний і відпрацьований процес, який знімає з вас зайвий стрес. З вами працює персональний менеджер, який допомагає скласти меню, продумати формат та координує всі процеси.
                </p>
                <p className="text-stone-500 text-sm leading-relaxed mb-10">
                  Особлива увага приділяється деталям: від сервірування та подачі страв до роботи персоналу в залі. Команда ресторану супроводжує гостей на всіх етапах, забезпечуючи бездоганний результат та атмосферу, в якій комфортно кожному.
                </p>
                <div className="flex gap-12">
                  <div>
                    <span className="text-4xl font-serif text-stone-900 block mb-2">100%</span>
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Координація</span>
                  </div>
                  <div>
                    <span className="text-4xl font-serif text-stone-900 block mb-2">0</span>
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Зайвого стресу</span>
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
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
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
            Насолоджуйтеся святом, <br /> не відволікаючись на деталі.
          </h2>
          <p className="text-white/80 font-serif italic text-lg mb-12 max-w-2xl mx-auto">
            Ми подбаємо про все: від складання меню до координації в день події. Зосередьтеся на головному — вашому святі.
          </p>
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
