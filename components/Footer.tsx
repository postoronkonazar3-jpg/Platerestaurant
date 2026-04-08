'use client';

import React, { useState } from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail, FileDown } from 'lucide-react';
import { domToJpeg } from 'modern-screenshot';
import jsPDF from 'jspdf';

export default function Footer() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSaveAsPDF = async () => {
    setIsGenerating(true);
    try {
      const element = document.body;
      
      // modern-screenshot handles oklch and other modern CSS better
      const dataUrl = await domToJpeg(element, {
        quality: 0.8,
      });
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [element.scrollWidth, element.scrollHeight]
      });
      
      pdf.addImage(dataUrl, 'JPEG', 0, 0, element.scrollWidth, element.scrollHeight);
      pdf.save('plate-restaurant-screenshot.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Вибачте, сталася помилка при створенні PDF. Спробуйте ще раз або відкрийте сайт у новому вікні.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <footer id="contacts" className="bg-stone-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-3xl font-serif tracking-[0.2em] uppercase mb-8 block">
              Plate
            </a>
            <p className="text-stone-400 font-serif italic text-sm leading-relaxed">
              Місце, де смак зустрічається з елегантністю. Створюємо вишукані події з 2015 року.
            </p>
            <div className="flex gap-6 mt-8">
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-stone-500">Навігація</h4>
            <ul className="space-y-4 text-sm font-serif italic text-stone-300">
              <li><a href="#" className="hover:text-white transition-colors">Головна</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Меню</a></li>
              <li><a href="#banquets" className="hover:text-white transition-colors">Банкети</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Про нас</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-stone-500">Контакти</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-stone-500 shrink-0" />
                <span className="text-stone-300 font-serif italic">вул. Вишнева, 12, Київ, Україна</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-stone-500 shrink-0" />
                <span className="text-stone-300">+38 (044) 123-45-67</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-stone-500 shrink-0" />
                <span className="text-stone-300">hello@plate-restaurant.ua</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-stone-500">Години роботи</h4>
            <ul className="space-y-4 text-sm font-serif italic text-stone-300">
              <li className="flex justify-between">
                <span>Пн - Пт</span>
                <span>11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Сб - Нд</span>
                <span>10:00 - 00:00</span>
              </li>
              <li className="pt-4 text-stone-500 text-xs uppercase tracking-widest font-bold not-italic">
                Банкети: за домовленістю
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-500 text-[10px] uppercase tracking-widest">
            © 2026 Plate Restaurant. Всі права захищені.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-8 text-[10px] uppercase tracking-widest text-stone-500">
            <a href="#" className="hover:text-white transition-colors">Політика конфіденційності</a>
            <button 
              onClick={handleSaveAsPDF}
              disabled={isGenerating}
              className="flex items-center gap-2 hover:text-white transition-colors disabled:opacity-50"
            >
              <FileDown className="w-3 h-3" />
              {isGenerating ? 'Завантаження...' : 'Зберегти як PDF'}
            </button>
            <a href="#" className="hover:text-white transition-colors">Публічна оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
