// src/components/layout/ThemeSwitcher.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../theme/ThemeContext';
import { Palette, Check } from 'lucide-react';

export const ThemeSwitcher = ({ isScrolled = true }) => {
  const { themeKey, activeTheme, setThemeKey, themesList } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Popover Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-bold shadow-xs transition-all duration-200 ${
          isScrolled
            ? 'border-theme/70 hover:border-theme-primary text-theme-main bg-theme-surface/90 backdrop-blur-md hover:bg-theme-surface-alt'
            : 'border-white/25 hover:border-white/50 text-white bg-white/15 backdrop-blur-lg hover:bg-white/25'
        }`}
        aria-label="Select website theme"
        aria-expanded={isOpen}
      >
        <Palette className={`w-4 h-4 ${isScrolled ? 'text-theme-primary' : 'text-theme-accent'}`} />
        <span className="hidden sm:inline font-heading">Style:</span>
        <span className="flex items-center gap-1.5 font-semibold">
          <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: activeTheme.colors.accent }} />
          {activeTheme.name}
        </span>
      </button>

      {/* Popover Swatch Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute right-0 mt-2.5 w-72 p-4 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200 z-50 overflow-hidden text-slate-900"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <span className="text-xs font-bold font-heading text-slate-900 uppercase tracking-wider">
                Choose Brand Identity
              </span>
              <span className="text-[10px] font-semibold text-slate-400">4 Themes</span>
            </div>

            {/* 4 Visual Color Swatches */}
            <div className="space-y-2">
              {themesList.map((item) => {
                const isSelected = themeKey === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setThemeKey(item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-2xl border transition-all text-left group ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/70 shadow-xs font-bold'
                        : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Dual Color Circle Swatch */}
                      <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-xs border border-slate-200 flex-shrink-0 flex">
                        <div className="w-1/2 h-full" style={{ backgroundColor: item.swatchPrimary }} />
                        <div className="w-1/2 h-full" style={{ backgroundColor: item.swatchAccent }} />
                      </div>

                      <div>
                        <div className="text-xs font-bold font-heading text-slate-900 flex items-center gap-1.5">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
