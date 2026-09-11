// src/components/sections/CommunitySection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { MessageSquare, Users, Sparkles, Globe } from 'lucide-react';

export const CommunitySection = ({ onOpenAuth }) => {
  const avatarList = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  ];

  return (
    <section className="py-20 md:py-24 bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[36px] bg-gradient-to-r from-[#4F46E5] via-[#4338CA] to-[#7C3AED] p-8 sm:p-14 text-white shadow-2xl overflow-hidden text-center sm:text-left"
        >
          {/* Subtle Background Glow Shape */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold tracking-wide">
                <Globe className="w-4 h-4 text-amber-300" /> GLOBAL STUDENT NETWORK
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Join 15,000+ Engineers & Designers in Our Active Community
              </h2>

              <p className="text-base sm:text-lg text-indigo-100 font-body max-w-2xl leading-relaxed">
                Connect on Discord and Slack for live hackathons, pair programming, resume reviews, referral channels, and weekly fireside chats with founders.
              </p>

              {/* Overlapping Avatar Stack */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
                <div className="flex -space-x-3">
                  {avatarList.map((url, idx) => (
                    <img
                      key={idx}
                      src={url}
                      alt="Community Member"
                      className="w-11 h-11 rounded-full border-2 border-indigo-500 object-cover shadow-sm"
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-indigo-100">
                  +12,400 Active Discord Members
                </span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-4">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-center w-full max-w-xs space-y-3">
                <MessageSquare className="w-8 h-8 text-amber-300 mx-auto" />
                <div className="text-2xl font-extrabold font-heading text-white">24/7 Mentorship</div>
                <p className="text-xs text-indigo-200">Get your code questions answered in under 15 minutes.</p>
                <Button
                  variant="accent"
                  size="md"
                  className="w-full mt-2"
                  onClick={() => onOpenAuth('signup')}
                  icon={Sparkles}
                >
                  Join Our Community
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
