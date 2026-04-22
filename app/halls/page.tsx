'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingDrawer from '@/components/BookingDrawer';
import MenuModal from '@/components/MenuModal';
import ImageModal from '@/components/ImageModal';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function HallsPage() {
  const [bookingMode, setBookingMode] = useState<'calculation' | 'table'>('calculation');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<'sklyarenka' | 'dmytrivska'>('sklyarenka');
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string, rotate?: string} | null>(null);

  const openBooking = (mode: 'calculation' | 'table') => {
    setBookingMode(mode);
    setIsBookingOpen(true);
  };

  return (
    <main className="relative bg-[#fdfcf8]">
      <Navbar 
        onOpenBooking={openBooking} 
        onOpenMenu={() => setIsMenuOpen(true)} 
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop"
            alt="Banquet Halls Hero"
            fill
            className="object-cover brightness-[0.4]"
            priority
            referrerPolicy="no-referrer"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors uppercase tracking-[0.3em] text-[10px] font-bold mb-8"
            >
              <ArrowLeft className="w-3 h-3" /> На головну
            </Link>
            <h1 className="text-5xl md:text-7xl font-serif italic text-white mb-6">
              Наші локації
            </h1>
            <p className="text-white/80 uppercase tracking-[0.4em] text-xs font-bold">
              Обирайте ідеальний простір для вашої події
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location Switcher */}
      <section className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-md border-b border-stone-100 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-4 md:gap-8">
            <button
              onClick={() => setSelectedLocation('sklyarenka')}
              className={`pb-2 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold transition-all border-b-2 ${
                selectedLocation === 'sklyarenka'
                  ? 'border-stone-900 text-stone-900'
                  : 'border-transparent text-stone-400 hover:text-stone-600'
              }`}
            >
              Скляренка, 9
            </button>
            <button
              onClick={() => setSelectedLocation('dmytrivska')}
              className={`pb-2 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold transition-all border-b-2 ${
                selectedLocation === 'dmytrivska'
                  ? 'border-stone-900 text-stone-900'
                  : 'border-transparent text-stone-400 hover:text-stone-600'
              }`}
            >
              Дмитрівська, 62/20
            </button>
          </div>
        </div>
      </section>

      {/* Sklyarenka Location */}
      {selectedLocation === 'sklyarenka' && (
        <motion.div
          key="sklyarenka"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hall Section: Літня тераса */}
          <section className="py-24 border-b border-stone-100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <span className="text-stone-400 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
                    Скляренка, 9
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-8">
                    Літня тераса
                  </h2>
                  
                  <div className="space-y-8 mb-12">
                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-stone-900 font-bold mb-4 flex items-center gap-2">
                        <div className="w-4 h-[1px] bg-stone-900" /> Особливості локації:
                      </h3>
                      <ul className="space-y-4 text-stone-600 font-serif italic text-lg leading-relaxed">
                        <li>Живописні фонтани, що дарують відчуття затишку та свіжості.</li>
                        <li>Чотири стильні альтанки, які можна використати як лаунж-зони для відпочинку гостей.</li>
                        <li>Атмосферне освітлення та гірлянди, що створюють особливу магію у вечірній час.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-stone-900 font-bold mb-4 flex items-center gap-2">
                        <div className="w-4 h-[1px] bg-stone-900" /> Місткість:
                      </h3>
                      <div className="space-y-2 text-stone-900 font-bold">
                        <p className="flex items-center gap-3">
                          <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">▪️ до 100 гостей</span>
                          <span className="text-stone-400 font-serif italic text-sm font-normal">у банкетному форматі</span>
                        </p>
                        <p className="flex items-center gap-3">
                          <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">▪️ до 230 гостей</span>
                          <span className="text-stone-400 font-serif italic text-sm font-normal">у форматі фуршету</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => openBooking('calculation')}
                    className="group inline-flex items-center gap-4 bg-stone-900 text-white px-10 py-5 uppercase tracking-[0.2em] text-[10px] font-bold transition-all hover:bg-stone-800"
                  >
                    Розрахувати банкет <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  <div 
                    onClick={() => setSelectedImage({ src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1776890820/image4_rucuz2.jpg', alt: 'Summer Terrace 1' })}
                    className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl cursor-zoom-in group"
                  >
                    <Image
                      src="https://res.cloudinary.com/daq51lz0x/image/upload/v1776890820/image4_rucuz2.jpg"
                      alt="Summer Terrace 1"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      sizes="(max-width: 768px) 50vw, 400px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div 
                    onClick={() => setSelectedImage({ src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1776890820/image3_uejjjw.jpg', alt: 'Summer Terrace 2' })}
                    className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl translate-y-8 cursor-zoom-in group"
                  >
                    <Image
                      src="https://res.cloudinary.com/daq51lz0x/image/upload/v1776890820/image3_uejjjw.jpg"
                      alt="Summer Terrace 2"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      sizes="(max-width: 768px) 50vw, 400px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hall Section: Колонна банкетна зала */}
          <section className="py-24 border-b border-stone-100 bg-stone-50/50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div 
                  onClick={() => setSelectedImage({ src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1776890821/image5_exibyl.jpg', alt: 'Column Hall' })}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in group"
                >
                  <Image
                    src="https://res.cloudinary.com/daq51lz0x/image/upload/v1776890821/image5_exibyl.jpg"
                    alt="Column Hall"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <span className="text-stone-400 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
                    Простора зала
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-8">
                    Колонна банкетна зала
                  </h2>
                  
                  <div className="space-y-6 text-stone-600 font-serif italic text-lg leading-relaxed mb-10">
                    <p>
                      Зал вміщує до 120 гостей у форматі банкету та до 180 гостей у форматі фуршету, що дозволяє організувати захід будь-якого масштабу.
                    </p>
                    <p>
                      Для вашого свята доступне професійне звукове та світлове обладнання яке забезпечить яскраву атмосферу та бездоганну якість.
                    </p>
                    <p>
                      Верхній зал стане чудовим простором для весіль, корпоративів, ювілеїв та інших важливих подій.
                    </p>
                  </div>

                  <button
                    onClick={() => openBooking('calculation')}
                    className="group inline-flex items-center gap-4 bg-stone-900 text-white px-10 py-5 uppercase tracking-[0.2em] text-[10px] font-bold transition-all hover:bg-stone-800"
                  >
                    Розрахувати банкет <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Hall Section: Склянна зала */}
          <section className="py-24 border-b border-stone-100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <span className="text-stone-400 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
                    Панорамний вид
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-8">
                    Склянна зала
                  </h2>
                  
                  <div className="space-y-6 text-stone-600 font-serif italic text-lg leading-relaxed mb-10">
                    <p>
                      Камерний та затишний простір, створений для подій у колі найближчих. Завдяки панорамним вікнам зал наповнений світлом і відчуттям простору.
                    </p>
                    <p>
                      Зала комфортно вміщує до 35 гостей, що робить її крутим варіантом для днів народжень, сімейних свят та приватних зустрічей.
                    </p>
                  </div>

                  <button
                    onClick={() => openBooking('calculation')}
                    className="group inline-flex items-center gap-4 bg-stone-900 text-white px-10 py-5 uppercase tracking-[0.2em] text-[10px] font-bold transition-all hover:bg-stone-800"
                  >
                    Розрахувати банкет <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  <div 
                    onClick={() => setSelectedImage({ src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1776890821/image7_vhuy5i.jpg', alt: 'Glass Hall 1' })}
                    className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl cursor-zoom-in group"
                  >
                    <Image
                      src="https://res.cloudinary.com/daq51lz0x/image/upload/v1776890821/image7_vhuy5i.jpg"
                      alt="Glass Hall 1"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      sizes="(max-width: 768px) 50vw, 400px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div 
                    onClick={() => setSelectedImage({ src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1776890821/image6_wmzt95.jpg', alt: 'Glass Hall 2' })}
                    className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl translate-y-8 cursor-zoom-in group"
                  >
                    <Image
                      src="https://res.cloudinary.com/daq51lz0x/image/upload/v1776890821/image6_wmzt95.jpg"
                      alt="Glass Hall 2"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      sizes="(max-width: 768px) 50vw, 400px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hall Section: «Велюр» */}
          <section className="py-24 border-b border-stone-100 bg-stone-50/50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="flex justify-center items-center">
                  <div 
                    onClick={() => setSelectedImage({ src: 'https://res.cloudinary.com/daq51lz0x/image/upload/q_auto,f_auto/v1776890822/image8_yjfhmf.png', alt: 'Velvet Hall', rotate: '-rotate-90' })}
                    className="cursor-zoom-in group relative aspect-[2/3] w-full max-w-[400px] overflow-hidden"
                  >
                    <Image
                      src="https://res.cloudinary.com/daq51lz0x/image/upload/q_auto,f_auto/v1776890822/image8_yjfhmf.png"
                      alt="Velvet Hall"
                      fill
                      className="object-cover -rotate-90 scale-[1.6] transition-transform duration-500 group-hover:scale-[1.7]"
                      referrerPolicy="no-referrer"
                      sizes="(max-width: 1024px) 100vw, 640px"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <span className="text-stone-400 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
                    Елегантна зала
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-8">
                    «Велюр» банкетна зала
                  </h2>
                  
                  <div className="space-y-8 mb-10">
                    <p className="text-stone-600 font-serif italic text-lg leading-relaxed">
                      Зала вміщує до 50 гостей у форматі банкету та до 70 гостей у форматі фуршету, що робить її ідеальним вибором для сімейних святкувань, сімейних подій чи корпоративів.
                    </p>

                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-stone-900 font-bold mb-4 flex items-center gap-2">
                        <div className="w-4 h-[1px] bg-stone-900" /> Інтер&apos;єр залу вирізняється елегантністю:
                      </h3>
                      <ul className="space-y-4 text-stone-500 font-serif italic text-lg leading-relaxed">
                        <li className="flex gap-3">
                          <span className="text-stone-300">▪️</span> 
                          М&apos;які велюрові крісла у відтінках сірого, блакитного та синього створюють вишукану атмосферу
                        </li>
                        <li className="flex gap-3">
                          <span className="text-stone-300">▪️</span> 
                          Стильна ажурна стеля з підсвіткою додає простору легкості та розкоші
                        </li>
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => openBooking('calculation')}
                    className="group inline-flex items-center gap-4 bg-stone-900 text-white px-10 py-5 uppercase tracking-[0.2em] text-[10px] font-bold transition-all hover:bg-stone-800"
                  >
                    Розрахувати банкет <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Hall Section: VIP кімната */}
          <section className="py-24 border-b border-stone-100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <span className="text-stone-400 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
                    Приватний простір
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-8">
                    VIP кімната
                  </h2>
                  
                  <div className="space-y-8 mb-12">
                    <p className="text-stone-600 font-serif italic text-lg leading-relaxed">
                      Ідеальний простір для камерних подій до 15 осіб. Це затишна зала, яка закривається повністю під вашу компанію та створює атмосферу приватності.
                    </p>

                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-stone-900 font-bold mb-4 flex items-center gap-2">
                        <div className="w-4 h-[1px] bg-stone-900" /> Чудово підходить для:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {[
                          'ділових зустрічей у вузькому колі',
                          'сімейних вечерь',
                          'дівич-вечорів',
                          'камерних весіль та днів народження'
                        ].map((item, idx) => (
                          <div key={idx} className="flex gap-3 text-stone-500 font-serif italic text-lg">
                            <span className="text-stone-300">▪️</span> {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => openBooking('calculation')}
                    className="group inline-flex items-center gap-4 bg-stone-900 text-white px-10 py-5 uppercase tracking-[0.2em] text-[10px] font-bold transition-all hover:bg-stone-800"
                  >
                    Розрахувати банкет <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>

                <div 
                  onClick={() => setSelectedImage({ src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1776890820/image9_jps22c.png', alt: 'VIP Room' })}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in group"
                >
                  <Image
                    src="https://res.cloudinary.com/daq51lz0x/image/upload/v1776890820/image9_jps22c.png"
                    alt="VIP Room"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      )}

      {/* Dmytrivska Location */}
      {selectedLocation === 'dmytrivska' && (
        <motion.div
          key="dmytrivska"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hall Section: Таємний дворик */}
          <section className="py-24 border-b border-stone-100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <span className="text-stone-400 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
                    Дмитрівська, 62/20
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-8">
                    Таємний дворик
                  </h2>
                  
                  <div className="space-y-6 text-stone-600 font-serif italic text-lg leading-relaxed mb-10">
                    <p>
                      Це затишний простір, де сучасна естетика поєднується з атмосферою спокою та комфорту.
                    </p>
                    <p>
                      Простора, світла й елегантно оформлена зона ідеально підходить для банкетів до 40 гостей або фуршетів до 50 осіб.
                    </p>
                    <p>
                      Тераса повністю закрита від зайвих поглядів, тому кожна подія проходить у приватній, комфортній та святковій атмосфері.
                    </p>
                  </div>

                  <button
                    onClick={() => openBooking('calculation')}
                    className="group inline-flex items-center gap-4 bg-stone-900 text-white px-10 py-5 uppercase tracking-[0.2em] text-[10px] font-bold transition-all hover:bg-stone-800"
                  >
                    Розрахувати банкет <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>

                <div 
                  onClick={() => setSelectedImage({ src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1776890822/image14_zgdsbd.jpg', alt: 'Таємний дворик' })}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in group"
                >
                  <Image
                    src="https://res.cloudinary.com/daq51lz0x/image/upload/v1776890822/image14_zgdsbd.jpg"
                    alt="Таємний дворик"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hall Section: Банкетна зала */}
          <section className="py-24 border-b border-stone-100 bg-stone-50/50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div 
                  onClick={() => setSelectedImage({ src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1776890821/image15_uvubb3.jpg', alt: 'Банкетна залу' })}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in group"
                >
                  <Image
                    src="https://res.cloudinary.com/daq51lz0x/image/upload/v1776890821/image15_uvubb3.jpg"
                    alt="Банкетна зала"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <span className="text-stone-400 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
                    Елегантний простір
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-8">
                    Банкетна зала
                  </h2>
                  
                  <div className="space-y-6 text-stone-600 font-serif italic text-lg leading-relaxed mb-10">
                    <p>
                      Елегантна та затишна банкетна зала створена для особливих подій у теплій, вишуканій атмосфері. 
                    </p>
                    <p>
                      Світлий інтер&rsquo;єр з м&rsquo;якими меблями, дзеркальними елементами та стильними люстрами додає відчуття простору й комфорту.
                    </p>
                    <p>
                      Простір чудово підходить для банкетів до 40 гостей або фуршетів до 45 осіб. Тут зручно проводити дні народження, корпоративи, романтичні вечері чи весілля.
                    </p>
                  </div>

                  <button
                    onClick={() => openBooking('calculation')}
                    className="group inline-flex items-center gap-4 bg-stone-900 text-white px-10 py-5 uppercase tracking-[0.2em] text-[10px] font-bold transition-all hover:bg-stone-800"
                  >
                    Розрахувати банкет <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Hall Section: Камінна зала */}
          <section className="py-24 border-b border-stone-100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="order-2 lg:order-1"
                >
                  <span className="text-stone-400 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
                    Камерний простір
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-8">
                    Камінна зала
                  </h2>
                  
                  <div className="space-y-8 mb-12">
                    <div className="space-y-4 text-stone-600 font-serif italic text-lg leading-relaxed">
                      <p>
                        Вишуканий і затишний зал. М&rsquo;які дивани та елегантні крісла у поєднанні з теплим освітленням створюють атмосферу комфорту та спокою.
                      </p>
                      <p>
                        Дерев&rsquo;яні столи, стильний декор і приглушене підсвічування додають залу особливого шарму. 
                      </p>
                      <p>
                        Ця зала ідеальна для камерних свят, романтичних вечерь, ділових зустрічей або дружніх посиденьок.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-stone-900 font-bold mb-4 flex items-center gap-2">
                        <div className="w-4 h-[1px] bg-stone-900" /> Місткість зали:
                      </h3>
                      <div className="space-y-2 text-stone-900 font-bold">
                        <p className="flex items-center gap-3">
                          <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">▪️ до 15 гостей</span>
                          <span className="text-stone-400 font-serif italic text-sm font-normal">при банкетній розсадці</span>
                        </p>
                        <p className="flex items-center gap-3">
                          <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">▪️ до 25 осіб</span>
                          <span className="text-stone-400 font-serif italic text-sm font-normal">у форматі фуршету</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => openBooking('calculation')}
                    className="group inline-flex items-center gap-4 bg-stone-900 text-white px-10 py-5 uppercase tracking-[0.2em] text-[10px] font-bold transition-all hover:bg-stone-800"
                  >
                    Розрахувати банкет <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>

                <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                  <div 
                    onClick={() => setSelectedImage({ src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1776890822/image16_mmuk99.jpg', alt: 'Камінна зала 1' })}
                    className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl cursor-zoom-in group"
                  >
                    <Image
                      src="https://res.cloudinary.com/daq51lz0x/image/upload/v1776890822/image16_mmuk99.jpg"
                      alt="Камінна зала 1"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      sizes="(max-width: 768px) 50vw, 400px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div 
                    onClick={() => setSelectedImage({ src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1776890822/image17_mqsndy.jpg', alt: 'Камінна зала 2' })}
                    className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl translate-y-8 cursor-zoom-in group"
                  >
                    <Image
                      src="https://res.cloudinary.com/daq51lz0x/image/upload/v1776890822/image17_mqsndy.jpg"
                      alt="Камінна зала 2"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      sizes="(max-width: 768px) 50vw, 400px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      )}

      {/* Footer */}
      <Footer />

      {/* Drawers & Modals */}
      <BookingDrawer 
        key={`${isBookingOpen}-${bookingMode}`}
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        mode={bookingMode}
      />
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
        rotationClass={selectedImage?.rotate || ''}
      />
    </main>
  );
}
