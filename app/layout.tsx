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
  title: 'Plate - Ресторан Банкетів',
  description: 'Вишуканий ресторан Plate у Києві. Найкраще місце для ваших банкетів, весіль та корпоративів.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="uk" className={`${inter.variable} ${cormorant.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-stone-900 bg-[#fdfcf8]">
        {children}
      </body>
    </html>
  );
}
