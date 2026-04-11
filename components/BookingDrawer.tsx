'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Users, Clock, Phone, User } from 'lucide-react';

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'calculation' | 'table';
}

export default function BookingDrawer({ isOpen, onClose, mode }: BookingDrawerProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: mode === 'calculation' ? '10' : '1',
    type: 'banquet',
    location: 'sklyarenka',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode,
          ...formData
        }),
      });

      if (response.ok) {
        const message = mode === 'calculation' 
          ? 'Дякуємо! Ваша заявка на розрахунок прийнята. Ми зателефонуємо вам найближчим часом.'
          : 'Дякуємо! Ваш запит на бронювання столу прийнято. Ми зателефонуємо вам для підтвердження.';
        alert(message);
        onClose();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Error sending booking:', error);
      alert('Вибачте, сталася помилка. Будь ласка, спробуйте пізніше або зателефонуйте нам.');
    }
  };

  const isCalculation = mode === 'calculation';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#fdfcf8] shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-serif italic text-stone-800">
                  {isCalculation ? 'Розрахунок банкету' : 'Забронювати стіл'}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-stone-500" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 mb-4 font-medium">
                    Оберіть локацію
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, location: 'sklyarenka' })}
                      className={`p-4 text-left border transition-all ${
                        formData.location === 'sklyarenka' 
                          ? 'border-stone-900 bg-stone-900 text-white' 
                          : 'border-stone-200 bg-white text-stone-600 hover:border-stone-400'
                      }`}
                    >
                      <p className="text-xs font-bold uppercase tracking-widest mb-1">Скляренка, 9</p>
                      <p className={`text-[10px] italic font-serif ${formData.location === 'sklyarenka' ? 'text-white/70' : 'text-stone-400'}`}>
                        Світлий простір для масштабних подій
                      </p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, location: 'dmytrivska' })}
                      className={`p-4 text-left border transition-all ${
                        formData.location === 'dmytrivska' 
                          ? 'border-stone-900 bg-stone-900 text-white' 
                          : 'border-stone-200 bg-white text-stone-600 hover:border-stone-400'
                      }`}
                    >
                      <p className="text-xs font-bold uppercase tracking-widest mb-1">Дмитрівська, 62/20</p>
                      <p className={`text-[10px] italic font-serif ${formData.location === 'dmytrivska' ? 'text-white/70' : 'text-stone-400'}`}>
                        Затишна локація у центрі міста
                      </p>
                    </button>
                  </div>
                </div>

                {isCalculation && (
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 font-medium">
                      Тип події
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full bg-white border border-stone-200 rounded-none p-4 focus:outline-none focus:border-stone-800 transition-colors font-serif italic"
                    >
                      <option value="banquet">Банкет</option>
                      <option value="wedding">Весілля</option>
                      <option value="corporate">Корпоратив</option>
                      <option value="birthday">День народження</option>
                    </select>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 font-medium">
                      Бажана дата
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                      <input
                        type="date"
                        required
                        className="w-full bg-white border border-stone-200 rounded-none p-4 pl-12 focus:outline-none focus:border-stone-800 transition-colors"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 font-medium">
                      Час
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                      <input
                        type="time"
                        required
                        className="w-full bg-white border border-stone-200 rounded-none p-4 pl-12 focus:outline-none focus:border-stone-800 transition-colors"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 font-medium">
                    Кількість гостей
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <input
                      type="number"
                      min={isCalculation ? "10" : "1"}
                      max={isCalculation ? "120" : "9"}
                      required
                      className="w-full bg-white border border-stone-200 rounded-none p-4 pl-12 focus:outline-none focus:border-stone-800 transition-colors"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    />
                  </div>
                  <p className="text-[10px] text-stone-400 mt-2 italic">
                    {isCalculation ? 'Від 10 до 120 осіб' : 'До 9 осіб'}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-sm uppercase tracking-widest text-stone-400 mb-6 font-semibold">Контактна інформація</h3>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                      <input
                        type="text"
                        placeholder="Ваше ім'я"
                        required
                        className="w-full bg-white border border-stone-200 rounded-none p-4 pl-12 focus:outline-none focus:border-stone-800 transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                      <input
                        type="tel"
                        placeholder="Номер телефону"
                        required
                        className="w-full bg-white border border-stone-200 rounded-none p-4 pl-12 focus:outline-none focus:border-stone-800 transition-colors"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-stone-900 text-white py-5 px-8 uppercase tracking-[0.2em] text-xs font-bold hover:bg-stone-800 transition-all transform active:scale-[0.98] mt-8"
                >
                  {isCalculation ? 'Замовити дзвінок' : 'Забронювати'}
                </button>
              </form>

              <div className="mt-12 text-center">
                <p className="text-stone-400 text-sm italic font-serif">
                  Або зателефонуйте нам: <br />
                  <span className="text-stone-800 not-italic font-sans font-bold tracking-wider">+38 (044) 123-45-67</span>
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
