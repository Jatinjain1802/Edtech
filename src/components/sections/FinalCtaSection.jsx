// src/components/sections/FinalCtaSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { Sparkles, MessageSquare } from 'lucide-react';

export const FinalCtaSection = ({ onOpenAuth }) => {
  return (
    <section className="py-20 md:py-28 bg-theme-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[36px] bg-theme-primary p-10 sm:p-16 text-center text-white shadow-2xl overflow-hidden transition-colors duration-300"
        >
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-theme-accent text-xs sm:text-sm font-semibold border border-white/10">
              <Sparkles className="w-4 h-4" /> Transform Your Career in 2026
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Start Learning Today.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-body leading-relaxed max-w-2xl mx-auto">
              Join over 10,000+ ambitious developers and designers building real-world projects and landing top-tier tech roles.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
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
                onClick={() => onOpenAuth('signup')}
                icon={MessageSquare}
                iconPosition="left"
              >
                Join the Community
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
