'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (mode: 'calculation' | 'table') => void;
  onOpenMenu: () => void;
}

export default function Navbar({ onOpenBooking, onOpenMenu }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Головна', href: '#' },
    { name: 'Меню', href: '#menu' },
    { name: 'Сервіс', href: '#service' },
    { name: 'Контакти', href: '#contacts' },
  ];

  const handleNavClick = (link: { name: string; href: string }) => {
    if (link.name === 'Меню') {
      onOpenMenu();
    } else {
      if (link.href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetId = link.href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex flex-col items-center group">
          <span className={`text-3xl font-serif tracking-[0.2em] uppercase transition-colors duration-500 ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            Plate
          </span>
          <div className={`h-px w-0 group-hover:w-full transition-all duration-500 ${isScrolled ? 'bg-stone-900' : 'bg-white'}`} />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className={`text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-500 hover:opacity-60 ${
                isScrolled ? 'text-stone-900' : 'text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="flex items-center gap-4">
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
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-stone-900' : 'text-white'} />
          ) : (
            <MenuIcon className={isScrolled ? 'text-stone-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-white overflow-hidden"
      >
        <div className="px-6 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleNavClick(link);
              }}
              className="text-stone-900 text-sm uppercase tracking-widest font-bold text-left"
            >
              {link.name}
            </button>
          ))}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking('table');
              }}
              className="w-full py-4 border border-stone-900 text-stone-900 text-xs uppercase tracking-widest font-bold"
            >
              Забронювати стіл
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking('calculation');
              }}
              className="w-full py-4 bg-stone-900 text-white text-xs uppercase tracking-widest font-bold"
            >
              Розрахунок банкету
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
