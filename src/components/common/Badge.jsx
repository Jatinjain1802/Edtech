// src/components/common/Badge.jsx
import React from 'react';

export const Badge = ({ children, variant = 'accent', className = '', icon: Icon = null }) => {
  const badgeVariants = {
    accent: 'bg-theme-accent text-theme-accent-contrast border border-theme-primary/10',
    primary: 'bg-theme-primary text-white',
    outline: 'bg-theme-surface text-theme-main border border-theme',
    subtle: 'bg-theme-surface-alt text-theme-main border border-theme-subtle',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full tracking-wide ${badgeVariants[variant] || badgeVariants.accent} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
};

export default Badge;
