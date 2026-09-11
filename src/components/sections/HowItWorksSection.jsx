// src/components/sections/HowItWorksSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { Search, PlayCircle, FolderCode, Award } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';

/**
 * LEARNING POINT (Pixel-Perfect SVG Wave Path Alignment):
 * The SVG path formula passes smoothly through exact node coordinates:
 * (125,40), (375,120), (625,40), (875,120) with graceful end terminals (50,80) and (950,80).
 */
export const HowItWorksSection = () => {
  const { activeTheme } = useTheme();

  const steps = [
    {
      step: 'Step 01',
      title: 'Choose Course',
      description: 'Select from curated career bootcamps matching your learning goals.',
      icon: Search,
      badgeBg: 'bg-[#4F46E5] text-white',
    },
    {
      step: 'Step 02',
      title: 'Start Learning',
      description: 'Watch HD video modules and join weekly live mentor Q&A sessions.',
      icon: PlayCircle,
      badgeBg: 'bg-[#7C3AED] text-white',
    },
    {
      step: 'Step 03',
      title: 'Build Projects',
      description: 'Create 4+ portfolio-ready projects with direct mentor code reviews.',
      icon: FolderCode,
      badgeBg: 'bg-[#059669] text-white',
    },
    {
      step: 'Step 04',
      title: 'Get Certified',
      description: 'Earn verified credentials and get referred to our 500+ hiring partners.',
      icon: Award,
      badgeBg: 'bg-[#D97706] text-white',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-theme-surface border-t border-theme-subtle transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="PROVEN 4-STEP PATH"
          title="How Learning Works at EduPulse"
          highlightWord="Works at EduPulse"
          description="A proven 4-step framework designed to take you from foundational understanding to landing your dream tech role."
        />

        {/* ================= DESKTOP ALTERNATING SINE WAVE TIMELINE ================= */}
        <div className="hidden lg:block relative mt-20 pt-6 pb-12">

          {/* 1. MATHEMATICALLY ALIGNED SINE WAVE SVG PATH */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-40 pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 160"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Soft Under-Glow Path */}
              <motion.path
                d="M 50,80 C 75,40 100,40 125,40 C 200,40 300,120 375,120 C 450,120 550,40 625,40 C 700,40 800,120 875,120 C 900,120 925,80 950,80"
                stroke="var(--color-primary)"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-20"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              />

              {/* Main Smooth Accent Wave Line */}
              <motion.path
                d="M 50,80 C 75,40 100,40 125,40 C 200,40 300,120 375,120 C 450,120 550,40 625,40 C 700,40 800,120 875,120 C 900,120 925,80 950,80"
                stroke="var(--color-accent)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.1, ease: 'easeInOut' }}
              />

              {/* 4 Connection Dots Mounted EXACTLY ON the Wave */}
              <circle cx="125" cy="40" r="6" fill="var(--color-primary)" stroke="var(--color-surface)" strokeWidth="2" />
              <circle cx="375" cy="120" r="6" fill="var(--color-primary)" stroke="var(--color-surface)" strokeWidth="2" />
              <circle cx="625" cy="40" r="6" fill="var(--color-primary)" stroke="var(--color-surface)" strokeWidth="2" />
              <circle cx="875" cy="120" r="6" fill="var(--color-primary)" stroke="var(--color-surface)" strokeWidth="2" />
            </svg>
          </div>

          {/* 2. ALTERNATING 4 STEP COLUMNS */}
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 1; // Step 02, 04 are BELOW the wave

              return (
                <div key={item.step} className="flex flex-col items-center text-center">
                  {/* === TOP HALF (Odd Steps: 01, 03) === */}
                  {!isEven ? (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.15 }}
                      className="flex flex-col items-center mb-4"
                    >
                      <span className="text-xs font-extrabold font-heading text-theme-primary tracking-widest uppercase mb-1">
                        {item.step}
                      </span>
                      <h3 className="text-lg font-bold font-heading text-theme-main mb-2">{item.title}</h3>
                      <p className="text-xs text-theme-muted max-w-[210px] leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Icon Circle Badge */}
                      <div className={`w-14 h-14 rounded-full ${item.badgeBg} flex items-center justify-center shadow-lg transition-transform hover:scale-110 duration-200 relative z-10`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </motion.div>
                  ) : (
                    /* Alignment Spacer */
                    <div className="h-48" />
                  )}

                  {/* === BOTTOM HALF (Even Steps: 02, 04) === */}
                  {isEven && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.15 }}
                      className="flex flex-col items-center mt-4"
                    >
                      {/* Icon Circle Badge */}
                      <div className={`w-14 h-14 rounded-full ${item.badgeBg} flex items-center justify-center shadow-lg transition-transform hover:scale-110 duration-200 relative z-10 mb-4`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className="text-xs font-extrabold font-heading text-theme-primary tracking-widest uppercase mb-1">
                        {item.step}
                      </span>
                      <h3 className="text-lg font-bold font-heading text-theme-main mb-2">{item.title}</h3>
                      <p className="text-xs text-theme-muted max-w-[210px] leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= MOBILE TIMELINE (Stacked on mobile/tablet) ================= */}
        <div className="lg:hidden mt-12 space-y-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-theme-main border border-theme shadow-xs"
              >
                <div className={`w-12 h-12 rounded-full ${item.badgeBg} flex items-center justify-center shadow-md flex-shrink-0 mt-0.5`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold font-heading text-theme-primary uppercase tracking-wider block mb-0.5">
                    {item.step}
                  </span>
                  <h3 className="text-base font-bold font-heading text-theme-main mb-1">{item.title}</h3>
                  <p className="text-xs text-theme-muted leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
