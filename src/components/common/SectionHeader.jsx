// src/components/common/SectionHeader.jsx
import React from 'react';
import { motion } from 'framer-motion';

/**
 * LEARNING POINT (Framer Motion scroll reveal):
 * Using `whileInView` and `viewport={{ once: true }}` triggers an animation 
 * only when the user scrolls down to that element, keeping performance snappy.
 */
export const SectionHeader = ({
  badge = null,
  title,
  highlightWord = null,
  description = null,
  centered = true,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {badge && (
        <div className="inline-block mb-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-indigo-50 text-[#4F46E5] border border-indigo-100">
            {badge}
          </span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#111827] tracking-tight leading-tight">
        {highlightWord ? (
          <>
            {title.split(highlightWord)[0]}
            <span className="gradient-text-indigo">{highlightWord}</span>
            {title.split(highlightWord)[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#6B7280] font-body leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
