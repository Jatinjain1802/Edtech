// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Menu, X, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from '../../theme/ThemeContext';

/**
 * LEARNING POINT (Responsive Styling & Breakpoints):
 * Tailwind utility prefixes like `max-lg:` apply styles exclusively to screens below the `lg` breakpoint.
 * We enforce a solid white background (`bg-white backdrop-blur-none`) on mobile while preserving 
 * desktop glassmorphism (`lg:backdrop-blur-xl`).
 */
export const Navbar = ({ onOpenAuth }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { themeKey, setThemeKey, themesList } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Courses', href: '#courses' },
    { name: 'Categories', href: '#categories' },
    { name: 'Instructors', href: '#instructors' },
    { name: 'About', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white max-lg:bg-white max-lg:backdrop-blur-none max-lg:text-slate-900 max-lg:border-b max-lg:border-slate-200 lg:bg-theme-surface/85 lg:backdrop-blur-xl shadow-md lg:border-b lg:border-theme/60 py-3.5 text-theme-main'
            : 'bg-white max-lg:bg-white max-lg:backdrop-blur-none max-lg:text-slate-900 max-lg:border-b max-lg:border-slate-200 lg:bg-white/10 lg:backdrop-blur-xl lg:border-b lg:border-white/15 py-5 text-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform ${
                  isScrolled
                    ? 'bg-theme-primary text-theme-accent max-lg:bg-indigo-600 max-lg:text-white'
                    : 'bg-indigo-600 text-white lg:bg-white/20 lg:backdrop-blur-md lg:text-theme-accent lg:border lg:border-white/25'
                }`}
              >
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className={`text-xl font-bold font-heading tracking-tight ${isScrolled ? 'text-theme-main' : 'text-slate-900 lg:text-white'}`}>
                Edu<span className={isScrolled ? 'text-theme-primary' : 'text-indigo-600 lg:text-theme-accent'}>Pulse</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-semibold py-1 transition-colors group ${
                    isScrolled
                      ? 'text-theme-muted hover:text-theme-primary'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 rounded-full transition-all duration-200 group-hover:w-full ${
                      isScrolled ? 'bg-theme-primary' : 'bg-theme-accent'
                    }`}
                  />
                </a>
              ))}
            </nav>

            {/* Desktop Right Controls */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeSwitcher isScrolled={isScrolled} />

              <button
                onClick={() => onOpenAuth('login')}
                className={`text-sm font-semibold px-3.5 py-2 rounded-full transition-colors ${
                  isScrolled
                    ? 'text-theme-main hover:text-theme-primary hover:bg-theme-surface-alt'
                    : 'text-white hover:text-theme-accent hover:bg-white/10'
                }`}
              >
                Log In
              </button>
              <Button
                variant={isScrolled ? 'primary' : 'accent'}
                size="sm"
                onClick={() => onOpenAuth('signup')}
                icon={Sparkles}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Controls (Solid White Header on Mobile) */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeSwitcher isScrolled={true} />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl focus:outline-none text-slate-800 hover:bg-slate-100"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Solid White Background - No Glassmorphism) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[72px] z-30 bg-white backdrop-blur-none text-slate-900 border-b border-slate-200 shadow-2xl lg:hidden overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-slate-800 hover:text-indigo-600 py-2 border-b border-slate-100"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Mobile Theme Swatches */}
              <div className="pt-2">
                <span className="text-xs font-bold font-heading text-slate-500 uppercase tracking-wider block mb-2">
                  Select Visual Style
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {themesList.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setThemeKey(t.id)}
                      className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition-all ${
                        themeKey === t.id
                          ? 'border-indigo-600 bg-indigo-50 font-bold'
                          : 'border-slate-200 bg-white text-slate-600'
                      }`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full inline-block" style={{ backgroundColor: t.swatchAccent }} />
                      <span className="text-xs font-heading text-slate-900">{t.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <Button
                  variant="secondary"
                  size="md"
                  className="w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth('login');
                  }}
                >
                  Log In
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth('signup');
                  }}
                >
                  Get Started Free
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
