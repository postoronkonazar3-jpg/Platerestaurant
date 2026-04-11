import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fdfcf8] flex items-center justify-center px-6 text-center">
      <div>
        <span className="text-stone-300 text-9xl font-serif italic block mb-8">404</span>
        <h1 className="text-3xl md:text-4xl font-serif italic text-stone-900 mb-6">Сторінку не знайдено</h1>
        <p className="text-stone-500 font-serif italic mb-12 max-w-md mx-auto">
          Вибачте, але сторінка, яку ви шукаєте, не існує або була переміщена.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-stone-900 text-white py-5 px-12 uppercase tracking-[0.2em] text-xs font-bold hover:bg-stone-800 transition-all"
        >
          Повернутися на головну
        </Link>
      </div>
    </div>
  );
}
