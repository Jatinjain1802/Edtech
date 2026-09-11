// src/components/sections/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { Play, Star, Sparkles, BookOpen, Award, Users } from 'lucide-react';

/**
 * LEARNING POINT (Framer Motion Hero Animation Rules):
 * Prompt Rule: Only 1 subtle floating animation inside Hero.
 * We use `animate={{ y: [0, -8, 0] }}` with `repeat: Infinity` on one floating card.
 */
export const HeroSection = ({ onOpenAuth, onOpenVideo }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden gradient-bg-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs sm:text-sm font-semibold">
              <span>🚀 India's Modern Learning Platform</span>
            </div>

            {/* Huge Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#111827] tracking-tight leading-[1.1]">
              Learn Skills That <span className="gradient-text-indigo">Build Your Career.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#6B7280] font-body leading-relaxed max-w-2xl">
              Learn from industry experts, build real-world projects, and get career-ready with practical courses designed for today's tech world.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="gradient"
                size="lg"
                onClick={() => onOpenAuth('signup')}
                icon={Sparkles}
              >
                Explore Courses
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={onOpenVideo}
                icon={Play}
                iconPosition="left"
              >
                Watch Demo
              </Button>
            </div>

            {/* Trust Metrics Row */}
            <div className="pt-8 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#111827]">10,000+</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">Students Enrolled</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#111827]">200+</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">Expert Courses</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#111827]">50+</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">Industry Mentors</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-2xl sm:text-3xl font-extrabold font-heading text-[#111827]">
                  4.9 <Star className="w-5 h-5 fill-amber-400 text-amber-400 inline" />
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">Average Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background Accent Soft Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-amber-500/10 rounded-[40px] blur-2xl -z-10" />

              {/* Main Student Workspace Image */}
              <div className="relative rounded-[32px] overflow-hidden bg-white p-3 shadow-soft border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                  alt="Students collaborating on code"
                  className="w-full h-[420px] sm:h-[480px] object-cover rounded-[24px]"
                />
              </div>

              {/* Floating Info Card 1: Rating (Top Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-soft border border-slate-100 flex items-center gap-3 z-10"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                  <Star className="w-6 h-6 fill-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-bold font-heading text-slate-900">4.9 / 5.0</div>
                  <div className="text-xs text-slate-500">2,400+ Reviews</div>
                </div>
              </motion.div>

              {/* Floating Info Card 2: AI Learning (Top Right - Animate subtle float) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-4 sm:-right-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-soft border border-slate-100 flex items-center gap-3 z-10"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold font-heading text-slate-900">AI Learning</div>
                  <div className="text-xs text-indigo-600 font-semibold">2026 Ready</div>
                </div>
              </motion.div>

              {/* Floating Info Card 3: Completion Metric (Bottom Right) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -right-2 sm:-right-4 bg-white p-4 rounded-2xl shadow-soft border border-slate-100 flex items-center gap-3 z-10"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Course Progress</div>
                  <div className="text-sm font-extrabold font-heading text-slate-900">87% Completed</div>
                  <div className="w-28 bg-slate-100 h-1.5 rounded-full mt-1 overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[87%] rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
