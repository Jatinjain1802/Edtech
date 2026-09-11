// src/components/sections/CategoriesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { categoriesData } from '../../data/categoriesData';
import { Code2, Palette, Cpu, BarChart3, TrendingUp, Briefcase, ArrowUpRight } from 'lucide-react';

const iconMap = {
  Code2,
  Palette,
  Cpu,
  BarChart3,
  TrendingUp,
  Briefcase,
};

export const CategoriesSection = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-20 md:py-28 bg-theme-main transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="EXPLORE DISCIPLINES"
          title="Browse Top Learning Categories"
          highlightWord="Learning Categories"
          description="Explore high-demand career tracks engineered to take you from foundational basics to senior industry readiness."
        />

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-14">
          {categoriesData.map((category, idx) => {
            const IconComponent = iconMap[category.iconName] || Code2;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => onSelectCategory(category.id)}
                className="group relative bg-theme-surface p-7 rounded-[28px] border border-theme shadow-soft hover:shadow-soft-hover transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Icon background using theme accent with appropriate opacity */}
                    <div className="w-14 h-14 rounded-2xl bg-theme-accent text-theme-accent-contrast flex items-center justify-center font-bold shadow-xs transition-transform group-hover:scale-110 duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <div className="w-9 h-9 rounded-full bg-theme-surface-alt text-theme-main group-hover:bg-theme-primary group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 bg-theme-surface-alt text-theme-main border border-theme-subtle">
                    {category.courseCount}
                  </span>

                  <h3 className="text-xl font-bold font-heading text-theme-main group-hover:text-theme-primary transition-colors mb-2">
                    {category.title}
                  </h3>

                  <p className="text-sm text-theme-muted font-body leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-theme-subtle flex items-center justify-between text-xs font-semibold text-theme-primary">
                  <span>Explore Courses</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
