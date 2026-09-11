// src/components/modals/CourseModal.jsx
import React, { useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import Badge from '../common/Badge';
import RatingStars from '../common/RatingStars';
import { BookOpen, Clock, Users, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

/**
 * LEARNING POINT (Interactive Modal & Local State):
 * Modals receive selected data objects as props (`course`) and maintain local UI state 
 * (like `enrolled` confirmation or active tab preview).
 */
export const CourseModal = ({ isOpen, onClose, course, onOpenAuth }) => {
  const [enrolled, setEnrolled] = useState(false);

  if (!course) return null;

  const handleEnroll = () => {
    setEnrolled(true);
    setTimeout(() => {
      setEnrolled(false);
      onClose();
    }, 2000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={course.title} maxWidth="max-w-3xl">
      <div className="space-y-6">
        {/* Banner Image & Category */}
        <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-900">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge variant="indigo">{course.categoryName}</Badge>
            <Badge variant="purple">{course.level}</Badge>
          </div>
        </div>

        {/* Course Overview Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <RatingStars rating={course.rating} reviewsCount={course.reviewsCount} size="md" />
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
                {course.studentsCount} Students Enrolled
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{course.description}</p>
          </div>
          <div className="text-right sm:min-w-[140px]">
            <div className="text-3xl font-extrabold text-[#111827] font-heading">{course.price}</div>
            <div className="text-sm text-slate-400 line-through">{course.originalPrice}</div>
          </div>
        </div>

        {/* Quick Specs */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
          <div className="flex flex-col items-center">
            <Clock className="w-5 h-5 text-indigo-600 mb-1" />
            <span className="text-xs text-slate-500 font-medium">Duration</span>
            <span className="text-sm font-semibold text-slate-800">{course.duration}</span>
          </div>
          <div className="flex flex-col items-center border-x border-slate-200">
            <BookOpen className="w-5 h-5 text-purple-600 mb-1" />
            <span className="text-xs text-slate-500 font-medium">Modules</span>
            <span className="text-sm font-semibold text-slate-800">{course.syllabus?.length || 5} Modules</span>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-5 h-5 text-emerald-600 mb-1" />
            <span className="text-xs text-slate-500 font-medium">Certificate</span>
            <span className="text-sm font-semibold text-slate-800">Included</span>
          </div>
        </div>

        {/* Instructor Info */}
        <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-white shadow-xs">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-indigo-100"
          />
          <div>
            <span className="text-xs font-semibold text-indigo-600 tracking-wide uppercase">Course Instructor</span>
            <h4 className="text-base font-bold text-[#111827] font-heading">{course.instructor.name}</h4>
            <p className="text-xs text-slate-500">{course.instructor.role}</p>
          </div>
        </div>

        {/* Syllabus Lessons */}
        <div>
          <h4 className="text-lg font-bold text-[#111827] font-heading mb-3">Curriculum Syllabus</h4>
          <div className="space-y-2">
            {course.syllabus?.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-semibold text-slate-800">{item.title}</span>
                </div>
                <span className="text-xs font-medium text-slate-500">{item.lessons}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          {enrolled ? (
            <div className="w-full py-4 rounded-full bg-emerald-600 text-white font-bold text-center flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Enrolled Successfully! Redirecting to Dashboard...
            </div>
          ) : (
            <Button variant="gradient" size="lg" className="w-full" onClick={handleEnroll} icon={ArrowRight}>
              Enroll Now for {course.price}
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default CourseModal;
