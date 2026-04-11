import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#fdfcf8] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-stone-400 uppercase tracking-widest text-[10px] font-bold mb-12 inline-block hover:text-stone-900 transition-colors">
          ← На головну
        </Link>
        <h1 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-12">Політика конфіденційності</h1>
        
        <div className="prose prose-stone max-w-none font-serif italic text-stone-700 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-sans font-bold uppercase tracking-widest text-stone-900 not-italic mb-4">1. Загальні положення</h2>
            <p>Ця Політика конфіденційності визначає порядок отримання, зберігання, обробки та використання персональних даних користувачів сайту Plate.</p>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold uppercase tracking-widest text-stone-900 not-italic mb-4">2. Які дані ми збираємо</h2>
            <p>Ми збираємо лише ті дані, які ви добровільно надаєте через форми бронювання або розрахунку банкету: ім&apos;я, номер телефону та деталі вашої події.</p>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold uppercase tracking-widest text-stone-900 not-italic mb-4">3. Мета збору даних</h2>
            <p>Ваші дані використовуються виключно для обробки ваших запитів, підтвердження бронювання та надання консультацій щодо організації заходів у наших закладах.</p>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold uppercase tracking-widest text-stone-900 not-italic mb-4">4. Захист даних</h2>
            <p>Ми вживаємо всіх необхідних заходів для захисту вашої персональної інформації від несанкціонованого доступу, зміни або розголошення.</p>
          </section>

          <section>
            <h2 className="text-xl font-sans font-bold uppercase tracking-widest text-stone-900 not-italic mb-4">5. Зміни в політиці</h2>
            <p>Ми залишаємо за собою право вносити зміни до цієї політики. Актуальна версія завжди доступна на цій сторінці.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
