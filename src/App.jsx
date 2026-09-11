// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import TrustedBySection from './components/sections/TrustedBySection';
import CategoriesSection from './components/sections/CategoriesSection';
import FeaturedCoursesSection from './components/sections/FeaturedCoursesSection';
import WhyChooseUsSection from './components/sections/WhyChooseUsSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import InstructorsSection from './components/sections/InstructorsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import CommunitySection from './components/sections/CommunitySection';
import BlogSection from './components/sections/BlogSection';
import FaqSection from './components/sections/FaqSection';
import FinalCtaSection from './components/sections/FinalCtaSection';

// Interactive Modals
import CourseModal from './components/modals/CourseModal';
import VideoModal from './components/modals/VideoModal';
import AuthModal from './components/modals/AuthModal';

/**
 * LEARNING POINT (React State Lift & Central Component Assembly):
 * In React, state is lifted to the nearest common parent (`App.jsx`) when 
 * multiple sub-components need to share or trigger modal dialogs.
 */
export function App() {
  // Modal State Management
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [authModalState, setAuthModalState] = useState({ isOpen: false, mode: 'signup' });
  const [selectedCategoryId, setSelectedCategoryId] = useState('all');

  const handleOpenAuth = (mode = 'signup') => {
    setAuthModalState({ isOpen: true, mode });
  };

  const handleCloseAuth = () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleCategorySelect = (catId) => {
    setSelectedCategoryId(catId);
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#111827] flex flex-col font-body selection:bg-indigo-500 selection:text-white">
      {/* 1. Sticky Navbar */}
      <Navbar onOpenAuth={handleOpenAuth} />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection
          onOpenAuth={handleOpenAuth}
          onOpenVideo={() => setIsVideoOpen(true)}
        />

        {/* 3. Trusted By Logos */}
        <TrustedBySection />

        {/* 4. Learning Categories */}
        <CategoriesSection onSelectCategory={handleCategorySelect} />

        {/* 5. Featured Courses */}
        <FeaturedCoursesSection
          onSelectCourse={(course) => setSelectedCourse(course)}
          selectedCategoryId={selectedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
        />

        {/* 6. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 7. How Learning Works */}
        <HowItWorksSection />

        {/* 8. Instructors */}
        <InstructorsSection />

        {/* 9. Student Testimonials */}
        <TestimonialsSection />

        {/* 10. Community Section */}
        <CommunitySection onOpenAuth={handleOpenAuth} />

        {/* 11. Blog Section */}
        <BlogSection
          onSelectArticle={(article) => {
            // Can open course or article dialog
            alert(`Opening article: "${article.title}"`);
          }}
        />

        {/* 12. FAQ Accordion */}
        <FaqSection />

        {/* 13. Final CTA */}
        <FinalCtaSection onOpenAuth={handleOpenAuth} />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* Interactive Modal Dialogs */}
      <CourseModal
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        course={selectedCourse}
        onOpenAuth={handleOpenAuth}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <AuthModal
        isOpen={authModalState.isOpen}
        onClose={handleCloseAuth}
        initialMode={authModalState.mode}
      />
    </div>
  );
}

export default App;
