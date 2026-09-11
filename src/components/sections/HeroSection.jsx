// src/components/sections/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { Play, Star, Sparkles, Award } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';

/**
 * LEARNING POINT (React Typewriter Effect with useEffect & Timeout):
 * A typewriter effect incrementally slice-updates string state (`currentText`).
 * Toggling `isDeleting` controls typing forward vs backspacing before looping to the next phrase.
 */
export const HeroSection = ({ onOpenAuth, onOpenVideo }) => {
  const { activeTheme } = useTheme();

  // Typewriter Dynamic Words Array
  const phrases = [
    'Build Your Career.',
    'Master AI & Code.',
    'Launch Your Startup.',
    'Design Future Apps.',
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 45 : 90; // ms per char

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));

        // When full word is typed, pause 2 seconds before backspacing
        if (displayedText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        // Backspacing
        setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));

        // When word is cleared, switch to next phrase
        if (displayedText === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, phraseIndex]);

  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-theme-primary text-white transition-colors duration-300">
      {/* Background Accent Soft Glow Overlay */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none -z-0"
        style={{ background: activeTheme.colors.accent }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-7 text-left"
          >
            {/* Small Theme Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-theme-accent border border-white/15 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-theme-accent inline-block animate-pulse" />
              <span>🚀 India's Modern Learning Platform</span>
            </div>

            {/* Huge Heading with Live Typewriter Effect */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.15] min-h-[120px] sm:min-h-[140px]">
              Learn Skills That <br className="hidden sm:inline" />
              <span className="text-theme-accent relative inline-block font-extrabold min-h-[1.2em]">
                {displayedText}
                {/* Blinking Cursor Bar */}
                <span className="inline-block w-1.5 h-9 sm:h-12 bg-theme-accent ml-1 -mb-1 animate-pulse" />
              </span>
            </h1>

            {/* Supporting text */}
            <p className="text-lg sm:text-xl text-slate-200 font-body leading-relaxed max-w-2xl">
              Learn from industry experts, build practical projects, and develop the skills that matter in the real world.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="accent"
                size="lg"
                onClick={() => onOpenAuth('signup')}
                icon={Sparkles}
              >
                Explore Courses
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={onOpenVideo}
                icon={Play}
                iconPosition="left"
              >
                Watch Demo
              </Button>
            </div>

            {/* Trust Metrics Row */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">10K+</div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">Students</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">200+</div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">Courses</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">50+</div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">Mentors</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  4.9 <Star className="w-5 h-5 fill-amber-400 text-amber-400 inline" />
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content Visual Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Student Workspace Image Container */}
              <div className="relative rounded-[32px] overflow-hidden bg-white/10 p-3 shadow-2xl border border-white/15 backdrop-blur-md">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                  alt="Students collaborating"
                  className="w-full h-[420px] sm:h-[480px] object-cover rounded-[24px]"
                />
              </div>

              {/* Floating Info Card 1: Rating */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-10 text-slate-900"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                  <Star className="w-6 h-6 fill-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-bold font-heading text-slate-900">4.9 / 5.0</div>
                  <div className="text-xs text-slate-500">2,400+ Reviews</div>
                </div>
              </motion.div>

              {/* Floating Info Card 2: AI Learning (Subtle Float) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-4 sm:-right-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-10 text-slate-900"
              >
                <div className="w-10 h-10 rounded-xl bg-theme-accent text-theme-accent-contrast flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold font-heading text-slate-900">AI Learning</div>
                  <div className="text-xs font-bold text-slate-600">2026 Ready</div>
                </div>
              </motion.div>

              {/* Floating Info Card 3: Completion Metric */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -right-2 sm:-right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-10 text-slate-900"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Course Completion</div>
                  <div className="text-sm font-extrabold font-heading text-slate-900">87% Completed</div>
                  <div className="w-28 bg-slate-100 h-1.5 rounded-full mt-1 overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[87%] rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
