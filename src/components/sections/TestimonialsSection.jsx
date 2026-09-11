// src/components/sections/TestimonialsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import RatingStars from '../common/RatingStars';
import { featuredTestimonial, testimonialsGrid } from '../../data/testimonialsData';
import { Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white border-t border-slate-200/60">
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
          className="mt-14 p-8 sm:p-12 rounded-[32px] bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white shadow-xl relative overflow-hidden"
        >
          {/* Subtle Background Accent Pattern */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <Quote className="w-12 h-12 text-indigo-400 opacity-80" />
              <p className="text-lg sm:text-2xl font-body font-normal leading-relaxed text-slate-100 italic">
                "{featuredTestimonial.quote}"
              </p>
              <div className="pt-2 flex items-center gap-4">
                <img
                  src={featuredTestimonial.avatar}
                  alt={featuredTestimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-indigo-400"
                />
                <div>
                  <h4 className="text-lg font-bold font-heading text-white">{featuredTestimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-indigo-300">{featuredTestimonial.role}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-3">
              <RatingStars rating={featuredTestimonial.rating} size="md" />
              <div className="text-xs text-slate-300 font-medium">Course Completed:</div>
              <div className="text-sm font-bold text-white font-heading">{featuredTestimonial.courseTaken}</div>
              <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1 pt-2">
                ✓ Verified Career Transition
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 Smaller Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonialsGrid.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-slate-50/90 p-7 rounded-[28px] border border-slate-200/80 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <RatingStars rating={item.rating} size="sm" />
                <p className="text-sm text-slate-700 leading-relaxed font-body italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-indigo-100"
                />
                <div>
                  <h4 className="text-sm font-bold font-heading text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
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
