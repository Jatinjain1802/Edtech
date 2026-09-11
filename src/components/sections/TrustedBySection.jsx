// src/components/sections/TrustedBySection.jsx
import React from 'react';
import { motion } from 'framer-motion';

export const TrustedBySection = () => {
  const brandLogos = [
    { name: 'Google', text: 'Google' },
    { name: 'Microsoft', text: 'Microsoft' },
    { name: 'Amazon', text: 'Amazon' },
    { name: 'Adobe', text: 'Adobe' },
    { name: 'Meta', text: 'Meta' },
    { name: 'IBM', text: 'IBM' },
  ];

  return (
    <section className="py-14 border-y border-slate-200/60 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8 font-heading">
          Trusted by Alumni working at World-Class Tech Companies
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {brandLogos.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer py-2"
            >
              <span className="text-xl sm:text-2xl font-extrabold font-heading tracking-tighter text-slate-800 hover:text-indigo-600 transition-colors">
                {brand.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
