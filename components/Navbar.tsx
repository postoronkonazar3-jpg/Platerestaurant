'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X, Phone, Instagram } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  onOpenBooking: (mode: 'calculation' | 'table') => void;
  onOpenMenu: () => void;
}

export default function Navbar({ onOpenBooking, onOpenMenu }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Головна', href: '/' },
    { name: 'Меню', isMenuTrigger: true },
    { name: 'Банкетні зали', href: '/halls' },
    { name: 'Сервіс', href: '/#service' },
    { name: 'Контакти', href: '/#contacts' },
  ];

  const handleMobileNavClick = (href: string, isMenuTrigger?: boolean) => {
    setIsMobileMenuOpen(false);
    
    if (isMenuTrigger) {
      onOpenMenu();
      return;
    }

    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        router.push(href);
      }
    } else if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push(href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center group">
          <span className={`text-3xl font-serif tracking-[0.2em] uppercase transition-colors duration-500 ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            Plate
          </span>
          <div className={`h-px w-0 group-hover:w-full transition-all duration-500 ${isScrolled ? 'bg-stone-900' : 'bg-white'}`} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            link.isMenuTrigger ? (
              <button
                key={link.name}
                onClick={onOpenMenu}
                className={`text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-500 hover:opacity-60 ${
                  isScrolled ? 'text-stone-900' : 'text-white'
                }`}
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                href={link.href!}
                className={`text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-500 hover:opacity-60 ${
                  isScrolled ? 'text-stone-900' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            )
          ))}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/plate_kyiv_?igsh=MWh5dThvdmNpOGd3Mg%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 transition-colors duration-500 hover:opacity-60 ${isScrolled ? 'text-stone-900' : 'text-white'}`}
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button
              onClick={() => onOpenBooking('table')}
              className={`px-5 py-3 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 border ${
                isScrolled
                  ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-stone-900'
              }`}
            >
              Забронювати стіл
            </button>
            <button
              onClick={() => onOpenBooking('calculation')}
              className={`px-5 py-3 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 border ${
                isScrolled
                  ? 'border-stone-900 bg-stone-900 text-white hover:bg-stone-800'
                  : 'border-white bg-white text-stone-900 hover:bg-stone-100'
              }`}
            >
              Розрахунок банкету
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 relative z-[110]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-stone-900" />
          ) : (
            <MenuIcon className={isScrolled ? 'text-stone-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white overflow-hidden border-b border-stone-100 shadow-2xl relative z-50"
          >
            <div className="px-6 py-12 flex flex-col space-y-8">
              <div className="flex justify-between items-center border-b border-stone-50 pb-4">
                <span className="text-xs uppercase tracking-widest font-bold text-stone-400">Меню</span>
                <a 
                  href="https://www.instagram.com/plate_kyiv_?igsh=MWh5dThvdmNpOGd3Mg%3D%3D&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-stone-900 hover:opacity-60 transition-opacity"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleMobileNavClick(link.href || '', link.isMenuTrigger)}
                  className="text-stone-900 text-base uppercase tracking-[0.2em] font-bold text-left py-2 border-b border-stone-50"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex flex-col gap-4 pt-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking('table');
                  }}
                  className="w-full py-5 border border-stone-900 text-stone-900 text-xs uppercase tracking-[0.2em] font-bold"
                >
                  Забронювати стіл
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking('calculation');
                  }}
                  className="w-full py-5 bg-stone-900 text-white text-xs uppercase tracking-[0.2em] font-bold"
                >
                  Розрахунок банкету
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
