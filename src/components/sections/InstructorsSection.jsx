// src/components/sections/InstructorsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { instructorsData } from '../../data/instructorsData';
import { Star, Users, BookOpen } from 'lucide-react';

export const InstructorsSection = () => {
  return (
    <section id="instructors" className="py-20 md:py-28 bg-theme-main transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="EXPERT INSTRUCTORS"
          title="Learn from Industry Engineering Leads"
          highlightWord="Engineering Leads"
          description="Our instructors don't just teach theory—they build software at Google, Meta, Amazon, and Figma."
        />

        {/* 4 Instructor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {instructorsData.map((instructor, idx) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-theme-surface rounded-[28px] border border-theme overflow-hidden shadow-soft hover:shadow-soft-hover transition-all duration-300 group"
            >
              {/* Photo Container */}
              <div className="relative h-64 overflow-hidden bg-theme-surface-alt">
                <img
                  src={instructor.avatar}
                  alt={instructor.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <a
                  href={instructor.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-theme-surface/90 text-theme-primary flex items-center justify-center shadow-md hover:bg-theme-primary hover:text-white transition-colors"
                  aria-label={`${instructor.name} LinkedIn Profile`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
                <div className="absolute bottom-3 left-3 bg-theme-surface/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-theme-main shadow-xs">
                  {instructor.experience}
                </div>
              </div>

              {/* Info Body */}
              <div className="p-6">
                <h3 className="text-lg font-bold font-heading text-theme-main group-hover:text-theme-primary transition-colors">
                  {instructor.name}
                </h3>
                <p className="text-xs font-semibold text-theme-primary mb-1">{instructor.role}</p>
                <p className="text-xs text-theme-muted mb-4">{instructor.company}</p>

                <div className="mb-4">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-medium bg-theme-surface-alt text-theme-main border border-theme-subtle">
                    {instructor.specialty}
                  </span>
                </div>

                <div className="pt-3 border-t border-theme-subtle flex items-center justify-between text-xs text-theme-muted">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {instructor.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-theme-primary" /> {instructor.students}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-theme-main">
                    <BookOpen className="w-3.5 h-3.5" /> {instructor.coursesCount} Courses
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
