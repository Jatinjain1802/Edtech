// src/components/sections/FeaturedCoursesSection.jsx
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import Badge from '../common/Badge';
import RatingStars from '../common/RatingStars';
import { coursesData } from '../../data/coursesData';
import { Users, Clock, ArrowRight, Eye } from 'lucide-react';

/**
 * LEARNING POINT (React useMemo & Filter Logic):
 * `useMemo` caches filtered computations so React doesn't re-run expensive array filtering on unnecessary re-renders.
 */
export const FeaturedCoursesSection = ({ onSelectCourse, selectedCategoryId, setSelectedCategoryId }) => {
  const [activeTab, setActiveTab] = useState(selectedCategoryId || 'all');

  const filterTabs = [
    { id: 'all', label: 'All Courses' },
    { id: 'web-dev', label: 'Web Development' },
    { id: 'ai-ml', label: 'AI & ML' },
    { id: 'ui-ux', label: 'UI/UX Design' },
  ];

  const filteredCourses = useMemo(() => {
    if (activeTab === 'all') return coursesData;
    return coursesData.filter((c) => c.category === activeTab);
  }, [activeTab]);

  return (
    <section id="courses" className="py-20 md:py-28 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="CURATED MASTERCLASSES"
          title="Featured Industry Bootcamps"
          highlightWord="Industry Bootcamps"
          description="Hand-crafted bootcamps taught by tech veterans from Google, Meta, and Figma with practical code reviews."
        />

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#4F46E5] text-white shadow-md shadow-indigo-500/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-[28px] border border-slate-200/90 overflow-hidden shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Course Image */}
                <div className="relative h-52 overflow-hidden bg-slate-900 group">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="indigo">{course.badge}</Badge>
                  </div>
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-sm backdrop-blur-[2px]"
                  >
                    <Eye className="w-5 h-5" /> Quick Preview
                  </button>
                </div>

                {/* Course Body */}
                <div className="p-6">
                  {/* Category & Duration */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-indigo-600 uppercase tracking-wider">
                      {course.categoryName}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {course.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onSelectCourse(course)}
                    className="text-lg font-bold font-heading text-[#111827] hover:text-[#4F46E5] transition-colors cursor-pointer line-clamp-2 mb-3"
                  >
                    {course.title}
                  </h3>

                  {/* Instructor */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-8 h-8 rounded-full object-cover border border-slate-200"
                    />
                    <div className="text-xs">
                      <span className="font-semibold text-slate-800 block">{course.instructor.name}</span>
                      <span className="text-slate-400">{course.instructor.role}</span>
                    </div>
                  </div>

                  {/* Rating & Enrolled Stats */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                    <RatingStars rating={course.rating} reviewsCount={course.reviewsCount} />
                    <span className="text-slate-500 flex items-center gap-1 font-medium">
                      <Users className="w-3.5 h-3.5" /> {course.studentsCount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-extrabold font-heading text-[#111827]">{course.price}</span>
                  <span className="text-xs text-slate-400 line-through ml-1.5">{course.originalPrice}</span>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => onSelectCourse(course)}
                  icon={ArrowRight}
                >
                  Enroll Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
