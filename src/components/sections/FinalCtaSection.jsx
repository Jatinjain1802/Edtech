// src/components/sections/FinalCtaSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { Sparkles, GraduationCap } from 'lucide-react';

export const FinalCtaSection = ({ onOpenAuth }) => {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[36px] bg-gradient-to-tr from-[#111827] via-[#1E1B4B] to-[#4F46E5] p-10 sm:p-16 text-center text-white shadow-2xl overflow-hidden"
        >
          {/* Subtle Gradient Glow Circles */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-xs sm:text-sm font-semibold text-indigo-300 border border-white/10">
              <Sparkles className="w-4 h-4 text-amber-300" /> Transform Your Career in 2026
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Start Learning Today. Build Skills for Life.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-body leading-relaxed max-w-2xl mx-auto">
              Join over 10,000+ ambitious developers and designers building real-world projects and landing top-tier tech roles.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                variant="gradient"
                size="lg"
                onClick={() => onOpenAuth('signup')}
                icon={Sparkles}
              >
                Explore Courses
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => onOpenAuth('login')}
                icon={GraduationCap}
                iconPosition="left"
              >
                Become Instructor
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
