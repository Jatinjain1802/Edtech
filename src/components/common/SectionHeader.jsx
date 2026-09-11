// src/components/common/SectionHeader.jsx
import React from 'react';
import { motion } from 'framer-motion';

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
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-theme-accent text-theme-accent-contrast border border-theme-primary/10">
            {badge}
          </span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-theme-main tracking-tight leading-tight">
        {highlightWord ? (
          <>
            {title.split(highlightWord)[0]}
            <span className="relative inline-block text-theme-primary px-1">
              <span className="relative z-10">{highlightWord}</span>
              <span className="absolute bottom-1.5 left-0 right-0 h-3 bg-theme-accent/60 -z-0 rounded-sm" />
            </span>
            {title.split(highlightWord)[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-theme-muted font-body leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
