// src/components/sections/WhyChooseUsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { Users, Laptop, Award, Clock, CheckCircle } from 'lucide-react';

export const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Users,
      title: 'Learn From Experts',
      description: 'Classes taught by senior engineers and leads actively working at FAANG and top tech startups.',
    },
    {
      icon: Laptop,
      title: 'Hands-on Projects',
      description: 'No boring theoretical lectures. Build and deploy real-world production code directly to your GitHub portfolio.',
    },
    {
      icon: Award,
      title: 'Industry Certificates',
      description: 'Receive globally recognized certificates with custom verification links shareable directly on LinkedIn.',
    },
    {
      icon: Clock,
      title: 'Learn at Your Own Pace',
      description: 'Lifetime access to all video modules, downloadable resources, and live weekly Q&A recordings.',
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-theme-main border-t border-theme-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-[32px] overflow-hidden shadow-soft border border-theme bg-theme-surface p-3">
                <img
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=80"
                  alt="Developer working on project"
                  className="w-full h-[450px] object-cover rounded-[24px]"
                />
              </div>

              {/* Overlaid Placement Rate Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-theme-surface p-4 rounded-2xl shadow-soft border border-theme max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-theme-accent text-theme-accent-contrast flex items-center justify-center font-bold">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold font-heading text-theme-main">94% Placement Rate</div>
                    <div className="text-xs text-theme-muted">Career placement within 6 months</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Editorial Two-Column Feature List */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeader
              badge="WHY CHOOSE US"
              title="Built for Practical Career Success"
              highlightWord="Career Success"
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
                    className="p-6 rounded-2xl bg-theme-surface border border-theme shadow-xs hover:shadow-soft transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-theme-accent text-theme-accent-contrast flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold font-heading text-theme-main mb-2">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">{feature.description}</p>
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
