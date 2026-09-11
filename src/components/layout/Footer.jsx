// src/components/layout/Footer.jsx
import React, { useState } from 'react';
import { GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';

/**
 * LEARNING POINT (Inline SVG vs External Icons):
 * Lucide React removed specific corporate brand logos (GitHub, Twitter, LinkedIn, YouTube) in recent versions.
 * Using custom SVG paths for brand logos guarantees zero missing export errors while maintaining full styling control!
 */
export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#111827] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-heading tracking-tight">
                Edu<span className="text-indigo-400">Pulse</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              India's premium EdTech platform empowering future software engineers, AI developers, and product designers with industry-led masterclasses.
            </p>

            {/* Newsletter Form */}
            <div className="pt-2">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Subscribe to Industry Insights
              </h4>
              {subscribed ? (
                <div className="p-3 bg-emerald-950/80 border border-emerald-800 text-emerald-400 rounded-xl text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Thank you for subscribing! Check your inbox soon.
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2 max-w-md">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-slate-900 border border-slate-800 rounded-full text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-all"
                  />
                  <Button type="submit" variant="gradient" size="sm" icon={ArrowRight}>
                    Join
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Company Links */}
          <div>
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#hero" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#instructors" className="hover:text-indigo-400 transition-colors">Instructors</a></li>
              <li><a href="#testimonials" className="hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#blog" className="hover:text-indigo-400 transition-colors">Press & Media</a></li>
              <li><a href="#faq" className="hover:text-indigo-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Col 3: Courses Links */}
          <div>
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider mb-4">Popular Paths</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#courses" className="hover:text-indigo-400 transition-colors">Web Development</a></li>
              <li><a href="#courses" className="hover:text-indigo-400 transition-colors">AI & LLM Architecture</a></li>
              <li><a href="#courses" className="hover:text-indigo-400 transition-colors">UI/UX Design Systems</a></li>
              <li><a href="#courses" className="hover:text-indigo-400 transition-colors">Data Science & SQL</a></li>
              <li><a href="#courses" className="hover:text-indigo-400 transition-colors">Growth Marketing</a></li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#blog" className="hover:text-indigo-400 transition-colors">Blog Articles</a></li>
              <li><a href="#faq" className="hover:text-indigo-400 transition-colors">Community Forum</a></li>
              <li><a href="#faq" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
              <li><a href="#faq" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
              <li><a href="#faq" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 EduPulse Inc. All rights reserved. Designed for excellence.</p>
          <div className="flex items-center gap-4">
            {/* Twitter / X SVG */}
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors" aria-label="Twitter X">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LinkedIn SVG */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            {/* GitHub SVG */}
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors" aria-label="GitHub">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </a>

            {/* YouTube SVG */}
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors" aria-label="YouTube">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
