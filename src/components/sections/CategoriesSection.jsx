// src/components/sections/CategoriesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { categoriesData } from '../../data/categoriesData';
import { Code2, Palette, Cpu, BarChart3, TrendingUp, Briefcase, ArrowUpRight } from 'lucide-react';

/**
 * LEARNING POINT (Dynamic Icon Component Mapping):
 * In React, we map string keys (`Code2`, `Palette`) to actual imported Lucide icon components.
 */
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
    <section id="categories" className="py-20 md:py-28 bg-[#FAFAFC]">
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
                className="group relative bg-white p-7 rounded-[28px] border border-slate-200/80 shadow-soft hover:shadow-soft-hover transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Colored Icon Square */}
                    <div className={`w-14 h-14 rounded-2xl ${category.bgColor} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                      <IconComponent className={`w-7 h-7 ${category.iconColor}`} />
                    </div>
                    {/* Top Right Arrow */}
                    <div className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-[#4F46E5] text-slate-500 group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${category.badgeColor}`}>
                    {category.courseCount}
                  </span>

                  <h3 className="text-xl font-bold font-heading text-[#111827] group-hover:text-[#4F46E5] transition-colors mb-2">
                    {category.title}
                  </h3>

                  <p className="text-sm text-[#6B7280] font-body leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600 group-hover:text-indigo-700">
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
