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
            <a href="#" className="text-3xl font-serif tracking-[0.2em] uppercase mb-8 block">
              Plate
            </a>
            <p className="text-stone-400 font-serif italic text-sm leading-relaxed">
              Місце, де смак зустрічається з елегантністю. Створюємо вишукані події та затишні вечори у самому серці Києва.
            </p>
            <div className="flex gap-6 mt-8">
              <a 
                href="https://www.instagram.com/plate_kyiv_?igsh=MWh5dThvdmNpOGd3Mg%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-stone-500">Навігація</h4>
            <ul className="space-y-4 text-sm font-serif italic text-stone-300">
              <li><a href="#" className="hover:text-white transition-colors">Головна</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Меню</a></li>
              <li><a href="#service" className="hover:text-white transition-colors">Сервіс</a></li>
              <li><a href="#contacts" className="hover:text-white transition-colors">Контакти</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-stone-500">Контакти</h4>
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-3 font-bold">Дмитрівська, 62/20</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex flex-col gap-1">
                    <span className="text-stone-500 text-[10px] uppercase tracking-wider">Банкетний менеджер-адміністратор</span>
                    <a href="tel:0677648880" className="text-stone-300 hover:text-white transition-colors font-sans">067 764 88 80</a>
                  </li>
                  <li className="flex gap-2 items-center text-stone-400 text-xs italic font-serif">
                    <span>8:00 — 22:00</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-3 font-bold">Скляренка, 9</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex flex-col gap-1">
                    <span className="text-stone-500 text-[10px] uppercase tracking-wider">Івент-менеджер</span>
                    <a href="tel:0679348880" className="text-stone-300 hover:text-white transition-colors font-sans">067 934 88 80</a>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-stone-500 text-[10px] uppercase tracking-wider">Банкетний менеджер</span>
                    <a href="tel:0677248880" className="text-stone-300 hover:text-white transition-colors font-sans">067 724 88 80</a>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-stone-500 text-[10px] uppercase tracking-wider">Адміністратор</span>
                    <a href="tel:0994235446" className="text-stone-300 hover:text-white transition-colors font-sans">099 423 54 46</a>
                  </li>
                  <li className="flex gap-2 items-center text-stone-400 text-xs italic font-serif">
                    <span>11:00 — 22:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-stone-500">Локації</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-stone-500 shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-stone-300 font-serif italic">вул. Дмитрівська, 62/20</span>
                  <span className="text-stone-500 text-[10px] uppercase tracking-widest">Київ, Центр</span>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-stone-500 shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-stone-300 font-serif italic">вул. Скляренка, 9</span>
                  <span className="text-stone-500 text-[10px] uppercase tracking-widest">Київ, Оболонь</span>
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
