// src/components/common/Badge.jsx
import React from 'react';

/**
 * LEARNING POINT (React Functional Component):
 * Simple display components format dynamic content cleanly without internal state logic.
 */
export const Badge = ({ children, variant = 'indigo', className = '', icon: Icon = null }) => {
  const badgeVariants = {
    indigo: 'bg-indigo-50 text-[#4F46E5] border border-indigo-100/80',
    purple: 'bg-purple-50 text-[#7C3AED] border border-purple-100/80',
    amber: 'bg-amber-50 text-[#D97706] border border-amber-100/80',
    emerald: 'bg-emerald-50 text-[#059669] border border-emerald-100/80',
    gray: 'bg-slate-100 text-slate-700 border border-slate-200',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full tracking-wide ${badgeVariants[variant] || badgeVariants.indigo} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
};

export default Badge;
