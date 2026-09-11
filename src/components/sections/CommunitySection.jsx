// src/components/sections/CommunitySection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { MessageSquare, Globe, Sparkles } from 'lucide-react';

export const CommunitySection = ({ onOpenAuth }) => {
  const avatarList = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  ];

  return (
    <section className="py-20 md:py-24 bg-theme-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[36px] bg-theme-primary p-8 sm:p-14 text-white shadow-2xl overflow-hidden text-center sm:text-left transition-colors duration-300"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-theme-accent text-xs font-bold tracking-wide border border-white/10">
                <Globe className="w-4 h-4" /> GLOBAL LEARNER NETWORK
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                You're Not Learning Alone.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-body max-w-2xl leading-relaxed">
                Join a growing community of learners, creators, and experts. Connect on Discord and Slack for live pair programming, resume reviews, and weekly founder Q&A sessions.
              </p>

              {/* Overlapping Avatars */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
                <div className="flex -space-x-3">
                  {avatarList.map((url, idx) => (
                    <img
                      key={idx}
                      src={url}
                      alt="Community Member"
                      className="w-11 h-11 rounded-full border-2 border-[var(--color-primary)] object-cover shadow-sm"
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-300">
                  +12,400 Active Community Members
                </span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-4">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-center w-full max-w-xs space-y-3">
                <MessageSquare className="w-8 h-8 text-theme-accent mx-auto" />
                <div className="text-xl font-extrabold font-heading text-white">24/7 Peer Mentorship</div>
                <p className="text-xs text-slate-300">Get your code questions answered in under 15 minutes.</p>
                <Button
                  variant="accent"
                  size="md"
                  className="w-full mt-2"
                  onClick={() => onOpenAuth('signup')}
                  icon={Sparkles}
                >
                  Join the Community
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
