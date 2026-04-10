'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
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
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-500 hover:opacity-60 ${
                isScrolled ? 'text-stone-900' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenBooking}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-500 border ${
              isScrolled
                ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-stone-900'
            }`}
          >
            Бронювання
          </button>
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
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-stone-900 text-sm uppercase tracking-widest font-bold"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-4 bg-stone-900 text-white text-xs uppercase tracking-widest font-bold"
          >
            Забронювати стіл
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
