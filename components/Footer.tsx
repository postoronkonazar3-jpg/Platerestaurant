'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacts" className="bg-stone-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-4xl font-serif tracking-[0.2em] uppercase mb-10 block">
              Plate
            </a>
            <p className="text-stone-400 font-serif italic text-base leading-relaxed">
              Місце, де смак зустрічається з елегантністю. Створюємо вишукані події та затишні вечори у самому серці Києва.
            </p>
            <div className="flex gap-8 mt-10">
              <a 
                href="https://www.instagram.com/plate_kyiv_?igsh=MWh5dThvdmNpOGd3Mg%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors p-1"
              >
                <Instagram className="w-8 h-8" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-10 text-stone-500 underline underline-offset-8 decoration-stone-800">Навігація</h4>
            <ul className="space-y-6 text-base font-serif italic text-stone-300">
              <li><a href="#" className="hover:text-white transition-colors uppercase tracking-wider">Головна</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors uppercase tracking-wider">Меню</a></li>
              <li><a href="#service" className="hover:text-white transition-colors uppercase tracking-wider">Сервіс</a></li>
              <li><a href="#contacts" className="hover:text-white transition-colors uppercase tracking-wider">Контакти</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-sm uppercase tracking-widest font-bold mb-10 text-stone-500 underline underline-offset-8 decoration-stone-800">Контакти</h4>
            <div className="space-y-10">
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-4 font-bold">Дмитрівська, 62/20</p>
                <ul className="space-y-5 text-base">
                  <li className="flex flex-col gap-2">
                    <span className="text-stone-500 text-xs uppercase tracking-wider">Банкетний менеджер-адміністратор</span>
                    <a href="tel:0677648880" className="text-stone-300 hover:text-white transition-colors font-sans text-lg tracking-wider">067 764 88 80</a>
                  </li>
                  <li className="flex gap-3 items-center text-stone-400 text-sm italic font-serif">
                    <span>8:00 — 22:00</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-4 font-bold">Скляренка, 9</p>
                <ul className="space-y-5 text-base">
                  <li className="flex flex-col gap-2">
                    <span className="text-stone-500 text-xs uppercase tracking-wider">Івент-менеджер</span>
                    <a href="tel:0679348880" className="text-stone-300 hover:text-white transition-colors font-sans text-lg tracking-wider">067 934 88 80</a>
                  </li>
                  <li className="flex flex-col gap-2">
                    <span className="text-stone-500 text-xs uppercase tracking-wider">Банкетний менеджер</span>
                    <a href="tel:0677248880" className="text-stone-300 hover:text-white transition-colors font-sans text-lg tracking-wider">067 724 88 80</a>
                  </li>
                  <li className="flex flex-col gap-2">
                    <span className="text-stone-500 text-xs uppercase tracking-wider">Адміністратор</span>
                    <a href="tel:0994235446" className="text-stone-300 hover:text-white transition-colors font-sans text-lg tracking-wider">099 423 54 46</a>
                  </li>
                  <li className="flex gap-3 items-center text-stone-400 text-sm italic font-serif">
                    <span>11:00 — 22:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-10 text-stone-500 underline underline-offset-8 decoration-stone-800">Локації</h4>
            <ul className="space-y-10 text-base">
              <li className="flex gap-6">
                <MapPin className="w-8 h-8 text-stone-500 shrink-0" />
                <div className="flex flex-col gap-2">
                  <span className="text-stone-300 font-serif italic text-lg">вул. Дмитрівська, 62/20</span>
                  <span className="text-stone-500 text-xs uppercase tracking-[0.2em]">Київ, Центр</span>
                </div>
              </li>
              <li className="flex gap-6">
                <MapPin className="w-8 h-8 text-stone-500 shrink-0" />
                <div className="flex flex-col gap-2">
                  <span className="text-stone-300 font-serif italic text-lg">вул. Скляренка, 9</span>
                  <span className="text-stone-500 text-xs uppercase tracking-[0.2em]">Київ, Оболонь</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-500 text-[10px] uppercase tracking-widest">
            © 2026 Plate Restaurant. Всі права захищені.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-stone-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Політика конфіденційності</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Публічна оферта</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
