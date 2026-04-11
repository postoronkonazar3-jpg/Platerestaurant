import React from 'react';
import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#fdfcf8] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-stone-400 uppercase tracking-widest text-[10px] font-bold mb-12 inline-block hover:text-stone-900 transition-colors">
          ← На головну
        </Link>
        <h1 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-12">Публічна оферта</h1>
        
        <div className="prose prose-stone max-w-none font-serif italic text-stone-700 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-sans font-bold uppercase tracking-widest text-stone-900 not-italic mb-4">1. Предмет договору</h2>
            <p>Цей договір є публічною офертою ресторану Plate щодо надання послуг з бронювання столів та організації банкетних заходів.</p>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold uppercase tracking-widest text-stone-900 not-italic mb-4">2. Порядок бронювання</h2>
            <p>Бронювання вважається підтвердженим після отримання відповідного повідомлення або дзвінка від адміністратора закладу.</p>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold uppercase tracking-widest text-stone-900 not-italic mb-4">3. Скасування та зміни</h2>
            <p>Користувач зобов&apos;язується повідомити про скасування або зміну часу бронювання не пізніше ніж за 2 години до запланованого візиту.</p>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold uppercase tracking-widest text-stone-900 not-italic mb-4">4. Організація банкетів</h2>
            <p>Умови організації банкетів (від 10 осіб) регулюються окремими домовленостями та можуть потребувати внесення передоплати.</p>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold uppercase tracking-widest text-stone-900 not-italic mb-4">5. Відповідальність</h2>
            <p>Заклад не несе відповідальності за неможливість надання послуг у разі форс-мажорних обставин.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
