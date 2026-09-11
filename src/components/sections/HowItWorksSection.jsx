// src/components/sections/HowItWorksSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { Search, PlayCircle, FolderCode, Award } from 'lucide-react';

export const HowItWorksSection = () => {
  const steps = [
    {
      step: '01',
      title: 'Choose Course',
      description: 'Select from curated career bootcamps matching your learning goals.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Start Learning',
      description: 'Watch HD video modules and join weekly live mentor Q&A sessions.',
      icon: PlayCircle,
    },
    {
      step: '03',
      title: 'Build Projects',
      description: 'Create 4+ portfolio-ready projects with direct mentor code reviews.',
      icon: FolderCode,
    },
    {
      step: '04',
      title: 'Get Certified',
      description: 'Earn verified credentials and get referred to our 500+ hiring partners.',
      icon: Award,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SIMPLE STEP-BY-STEP"
          title="How Learning Works at EduPulse"
          highlightWord="Works at EduPulse"
          description="A proven 4-step framework designed to take you from foundational understanding to landing your dream tech role."
        />

        {/* Timeline Container */}
        <div className="relative mt-16">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-16 right-16 h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-emerald-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.12 }}
                  className="flex flex-col items-center text-center p-6 bg-slate-50/80 rounded-3xl border border-slate-200/60 hover:bg-white hover:shadow-soft transition-all duration-300 group"
                >
                  {/* Step Number Circle */}
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-indigo-100 group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 flex items-center justify-center text-xl font-bold font-heading shadow-xs transition-all duration-300 mb-5 relative">
                    <Icon className="w-7 h-7" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-[#111827] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] font-body leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
