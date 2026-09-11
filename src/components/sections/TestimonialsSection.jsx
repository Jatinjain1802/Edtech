// src/components/sections/TestimonialsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import RatingStars from '../common/RatingStars';
import { featuredTestimonial, testimonialsGrid } from '../../data/testimonialsData';
import { Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-theme-surface border-t border-theme-subtle transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="STUDENT TRANSFORMATIONS"
          title="Loved by 10,000+ Future Tech Leaders"
          highlightWord="Tech Leaders"
          description="Read authentic career transformation stories from students who launched high-paying software and design roles."
        />

        {/* 1 Large Featured Testimonial Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 p-8 sm:p-12 rounded-[32px] bg-theme-primary text-white shadow-xl relative overflow-hidden transition-colors duration-300"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <Quote className="w-12 h-12 text-theme-accent opacity-90" />
              <p className="text-lg sm:text-2xl font-body font-normal leading-relaxed text-slate-100 italic">
                "{featuredTestimonial.quote}"
              </p>
              <div className="pt-2 flex items-center gap-4">
                <img
                  src={featuredTestimonial.avatar}
                  alt={featuredTestimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[var(--color-accent)]"
                />
                <div>
                  <h4 className="text-lg font-bold font-heading text-white">{featuredTestimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-slate-300">{featuredTestimonial.role}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-3">
              <RatingStars rating={featuredTestimonial.rating} size="md" />
              <div className="text-xs text-slate-300 font-medium">Course Completed:</div>
              <div className="text-sm font-bold text-white font-heading">{featuredTestimonial.courseTaken}</div>
              <div className="text-xs text-theme-accent font-bold flex items-center gap-1 pt-2">
                ✓ Verified Career Transition
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 Smaller Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonialsGrid.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-theme-main p-7 rounded-[28px] border border-theme shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <RatingStars rating={item.rating} size="sm" />
                <p className="text-sm text-theme-main leading-relaxed font-body italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-theme-subtle flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-theme"
                />
                <div>
                  <h4 className="text-sm font-bold font-heading text-theme-main">{item.name}</h4>
                  <p className="text-xs text-theme-muted">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
