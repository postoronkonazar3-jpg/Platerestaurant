'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, MapPin, FileSpreadsheet } from 'lucide-react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuOptions = [
  {
    title: 'Меню — Скляренка, 9',
    url: 'https://menu.ps.me/7jyGOX_a7PQ',
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    title: 'Меню — Дмитрівська, 62/20',
    url: 'https://plate2.ps.me/',
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    title: 'Банкетне меню',
    url: 'https://docs.google.com/spreadsheets/d/1_hrU5t8yvZm6HLklkjHpwKa6HAobHHLbuFKde-eAYjA/edit?usp=sharing',
    icon: <FileSpreadsheet className="w-5 h-5" />,
  }
];

export default function MenuModal({ isOpen, onClose }: MenuModalProps) {
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
            className="fixed inset-0 bg-black/80 z-[100] backdrop-blur-sm cursor-pointer"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[101] px-6"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-6 border-b border-stone-100 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-serif italic text-stone-900">Оберіть меню</h3>
                  <p className="text-stone-400 text-[10px] uppercase tracking-widest mt-1">Plate Restaurant</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-3 hover:bg-stone-100 rounded-full transition-colors text-stone-400 hover:text-stone-900 bg-stone-50"
                  aria-label="Закрити"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-3">
                {menuOptions.map((option, idx) => (
                  <motion.a
                    key={option.title}
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group flex items-center gap-4 p-4 rounded-2xl border border-stone-100 hover:border-stone-900 hover:bg-stone-50 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                      {option.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-stone-900 group-hover:text-stone-700 transition-colors">
                        {option.title}
                      </h4>
                    </div>
                    <ExternalLink className="w-4 h-4 text-stone-300 group-hover:text-stone-900 transition-colors" />
                  </motion.a>
                ))}
              </div>

              <div className="p-4 bg-stone-50 text-center">
                <p className="text-stone-400 text-[9px] uppercase tracking-[0.2em]">
                  Відкриється у новій вкладці
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
