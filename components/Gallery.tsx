'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, animate } from 'motion/react';

const galleryImages = [
  { src: "https://res.cloudinary.com/daq51lz0x/image/upload/v1775869606/photo_5_2026-04-11_04-05-18_jydehg.jpg", alt: "Plate Event 1" },
  { src: "https://res.cloudinary.com/daq51lz0x/image/upload/v1775869605/photo_5_2026-04-11_04-05-06_tm0mne.jpg", alt: "Plate Event 2" },
  { src: "https://res.cloudinary.com/daq51lz0x/image/upload/v1775869604/photo_4_2026-04-11_04-05-06_mb69le.jpg", alt: "Plate Event 3" },
  { src: "https://res.cloudinary.com/daq51lz0x/image/upload/v1775869605/photo_4_2026-04-11_04-05-18_fmx0ua.jpg", alt: "Plate Event 4" },
  { src: "https://res.cloudinary.com/daq51lz0x/image/upload/v1775869604/photo_3_2026-04-11_04-05-06_lfbutg.jpg", alt: "Plate Event 5" },
  { src: "https://res.cloudinary.com/daq51lz0x/image/upload/v1775869604/photo_3_2026-04-11_04-05-18_jb4f3v.jpg", alt: "Plate Event 6" },
  { src: "https://res.cloudinary.com/daq51lz0x/image/upload/v1775869604/photo_2_2026-04-11_04-05-18_vtzi8i.jpg", alt: "Plate Event 7" },
  { src: "https://res.cloudinary.com/daq51lz0x/image/upload/v1775869604/photo_1_2026-04-11_04-05-18_hqakti.jpg", alt: "Plate Event 8" },
  { src: "https://res.cloudinary.com/daq51lz0x/image/upload/v1775869604/photo_2_2026-04-11_04-05-06_ds5qnr.jpg", alt: "Plate Event 9" },
  { src: "https://res.cloudinary.com/daq51lz0x/image/upload/v1775869604/IMG_6715_n97itn.jpg", alt: "Plate Event 10" },
  { src: "https://res.cloudinary.com/daq51lz0x/image/upload/v1775869604/photo_1_2026-04-11_04-05-06_ozqe9y.jpg", alt: "Plate Event 11" },
  { src: "https://res.cloudinary.com/daq51lz0x/image/upload/v1775869603/photo_6_2026-04-11_04-05-18_m5ksc4.jpg", alt: "Plate Event 12" },
  { src: "https://res.cloudinary.com/daq51lz0x/image/upload/v1775869604/photo_2026-04-11_01-29-07_zaktlm.jpg", alt: "Plate Event 13" },
  { src: "https://res.cloudinary.com/daq51lz0x/image/upload/v1775869603/photo_9_2026-04-11_04-05-18_beaoqz.jpg", alt: "Plate Event 14" },
  { src: "https://res.cloudinary.com/daq51lz0x/image/upload/v1775869603/photo_8_2026-04-11_04-05-18_lgcrsg.jpg", alt: "Plate Event 15" },
  { src: "https://res.cloudinary.com/daq51lz0x/image/upload/v1775869603/photo_7_2026-04-11_04-05-06_fj4xn7.jpg", alt: "Plate Event 16" },
  { src: "https://res.cloudinary.com/daq51lz0x/image/upload/v1775869603/photo_7_2026-04-11_04-05-18_ioxnto.jpg", alt: "Plate Event 17" },
  { src: "https://res.cloudinary.com/daq51lz0x/image/upload/v1775869603/photo_6_2026-04-11_04-05-06_e3xyxd.jpg", alt: "Plate Event 18" },
  { src: "https://res.cloudinary.com/daq51lz0x/image/upload/v1775860177/photo_2026-04-10_15-00-44_eofk6r.jpg", alt: "Plate Event 19" },
];

export default function Gallery() {
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
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
    if (!isAutoPlaying || dragConstraints.left === 0) return;

    const controls = animate(x, [x.get(), dragConstraints.left, 0], {
      duration: 120, // 2 times slower (was 60)
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });

    return controls.stop;
  }, [dragConstraints.left, x, isAutoPlaying]);

  const handleDragStart = () => {
    setIsAutoPlaying(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleDragEnd = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

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
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{ x }}
          className="flex gap-8 px-6 md:px-24"
        >
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
                priority={index < 8} // Preload first 8 images
                loading={index >= 8 ? "eager" : undefined} // Force eager loading for the rest
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
