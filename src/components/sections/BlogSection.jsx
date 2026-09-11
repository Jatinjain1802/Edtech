// src/components/sections/BlogSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { blogArticlesData } from '../../data/blogData';
import { Clock, ArrowUpRight, Calendar } from 'lucide-react';

export const BlogSection = ({ onSelectArticle }) => {
  return (
    <section id="blog" className="py-20 md:py-28 bg-theme-surface border-t border-theme-subtle transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="KNOWLEDGE HUB"
          title="Latest Articles & Tech Guides"
          highlightWord="Tech Guides"
          description="Insights, tutorials, and career strategies written by industry leads to keep you ahead of 2026 tech trends."
        />

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {blogArticlesData.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => onSelectArticle(article)}
              className="bg-theme-surface rounded-[28px] border border-theme overflow-hidden shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-theme-accent text-theme-accent-contrast px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                    {article.category}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-theme-muted mb-3">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5" /> {article.date}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5" /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-theme-main group-hover:text-theme-primary transition-colors line-clamp-2 mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-theme-muted font-body line-clamp-2 leading-relaxed">
                    {article.snippet}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-theme-primary">
                <span>Read Full Article</span>
                <div className="w-7 h-7 rounded-full bg-theme-surface-alt group-hover:bg-theme-primary group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
