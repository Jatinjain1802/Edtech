// src/components/common/Button.jsx
import React from 'react';
import { motion } from 'framer-motion';

/**
 * LEARNING POINT (React Props & Framer Motion):
 * - `props`: Parameters passed to React components (children, onClick, variant, size, className, icon).
 * - `motion.button`: Framer Motion component wrapping a native standard HTML button, enabling smooth hover & tap animations (`whileHover`, `whileTap`).
 */
export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  icon: Icon = null,
  iconPosition = 'right',
  disabled = false,
}) => {
  // Base classes according to prompt style (Rounded Full, premium colors)
  const baseStyle = 'inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-sm hover:shadow-md',
    secondary: 'bg-white hover:bg-slate-50 text-[#111827] border border-[#E5E7EB] shadow-xs hover:border-slate-300',
    outline: 'border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-indigo-50/50',
    gradient: 'bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white shadow-md',
    accent: 'bg-gradient-to-r from-[#F59E0B] to-[#EA580C] hover:from-[#D97706] hover:to-[#C2410C] text-white shadow-sm',
    dark: 'bg-[#111827] hover:bg-black text-white shadow-sm',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5 font-semibold',
  };

  return (
    <motion.button
      whileHover={{ y: disabled ? 0 : -2, scale: disabled ? 1 : 1.01 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </motion.button>
  );
};

export default Button;
