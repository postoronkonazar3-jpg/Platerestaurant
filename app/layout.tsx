import type {Metadata} from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Plate - Ресторан Банкетів | Весілля та Корпоративи у Києві',
  description: 'Вишуканий ресторан Plate у Києві. Найкраще місце для ваших банкетів, весіль та корпоративів. Просторі зали, європейська кухня та професійний сервіс.',
  keywords: ['ресторан київ', 'банкетний зал', 'весілля київ', 'оренда залу для весілля', 'корпоратив київ', 'Plate ресторан'],
  openGraph: {
    title: 'Plate - Ресторан Банкетів',
    description: 'Найкраще місце для ваших особливих подій у Києві.',
    type: 'website',
    locale: 'uk_UA',
  },
  verification: {
    google: 'q-IzZRX2nJpPqR_ff_QIGH8UQ1ojPQRZhRVivnGbd5k',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="uk" className={`${inter.variable} ${cormorant.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="font-sans antialiased text-stone-900 bg-[#fdfcf8]">
        {children}
      </body>
    </html>
  );
}
