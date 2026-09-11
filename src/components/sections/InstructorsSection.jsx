// src/components/sections/InstructorsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { instructorsData } from '../../data/instructorsData';
import { Star, Users, BookOpen } from 'lucide-react';

export const InstructorsSection = () => {
  return (
    <section id="instructors" className="py-20 md:py-28 bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="WORLD-CLASS MENTORS"
          title="Learn from World-Class Industry Engineers"
          highlightWord="Industry Engineers"
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
              className="bg-white rounded-[28px] border border-slate-200/90 overflow-hidden shadow-soft hover:shadow-soft-hover transition-all duration-300 group"
            >
              {/* Photo Container with subtle Zoom */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={instructor.avatar}
                  alt={instructor.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <a
                  href={instructor.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs text-indigo-600 flex items-center justify-center shadow-md hover:bg-indigo-600 hover:text-white transition-colors"
                  aria-label={`${instructor.name} LinkedIn Profile`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-xs">
                  {instructor.experience}
                </div>
              </div>

              {/* Info Body */}
              <div className="p-6">
                <h3 className="text-lg font-bold font-heading text-[#111827] group-hover:text-indigo-600 transition-colors">
                  {instructor.name}
                </h3>
                <p className="text-xs font-semibold text-indigo-600 mb-1">{instructor.role}</p>
                <p className="text-xs text-slate-400 mb-4">{instructor.company}</p>

                {/* Specialty Pill */}
                <div className="mb-4">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700">
                    {instructor.specialty}
                  </span>
                </div>

                {/* Footer Metrics */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {instructor.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-indigo-500" /> {instructor.students}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-slate-700">
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
