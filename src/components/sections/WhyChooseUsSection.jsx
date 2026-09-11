// src/components/sections/WhyChooseUsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { Award, Laptop, Users, ShieldCheck, CheckCircle } from 'lucide-react';

export const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Users,
      title: 'Learn Directly from Industry Experts',
      description: 'Classes taught by senior engineers and product designers actively working at FAANG and top tech startups.',
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      icon: Laptop,
      title: 'Build 100% Hands-on Real Projects',
      description: 'No boring theoretical lectures. You build and deploy real-world production code to your GitHub portfolio.',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: Award,
      title: 'Verifiable Industry Certificates',
      description: 'Receive globally recognized certificates with custom verification links shareable directly on LinkedIn.',
      color: 'bg-amber-50 text-amber-600',
    },
    {
      icon: ShieldCheck,
      title: 'Lifetime Access & Continuous Updates',
      description: 'Enjoy unlimited access to all course recordings, downloadable resources, and future curriculum additions.',
      color: 'bg-emerald-50 text-emerald-600',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-[32px] overflow-hidden shadow-soft border border-slate-200/80 bg-white p-3">
                <img
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=80"
                  alt="Developer working on project"
                  className="w-full h-[450px] object-cover rounded-[24px]"
                />
              </div>

              {/* Overlaid Badge Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-4 rounded-2xl shadow-soft border border-slate-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold font-heading text-slate-900">94% Placement Rate</div>
                    <div className="text-xs text-slate-500">Career placement within 6 months</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content & Feature List */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeader
              badge="THE EDUPULSE DIFFERENCE"
              title="Why Ambitious Learners Choose EduPulse"
              highlightWord="Choose EduPulse"
              description="We reimagined online education around active building, peer accountability, and expert feedback."
              centered={false}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-soft transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold font-heading text-[#111827] mb-2">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
