// src/components/sections/FaqSection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { faqData } from '../../data/faqData';
import { ChevronDown } from 'lucide-react';

export const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Only 1 question open at a time

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-theme-main transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FREQUENTLY ASKED QUESTIONS"
          title="Everything You Need to Know"
          highlightWord="Need to Know"
          description="Have questions before enrolling? Find answers to common questions about our platform, mentorship, and certification."
        />

        {/* Accordion List */}
        <div className="mt-14 space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-theme-surface rounded-2xl border border-theme shadow-xs overflow-hidden transition-all duration-200"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold font-heading text-theme-main">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-theme-surface-alt flex items-center justify-center text-theme-main transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-theme-accent text-theme-accent-contrast' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Accordion Expand Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-theme-muted font-body border-t border-theme-subtle leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
