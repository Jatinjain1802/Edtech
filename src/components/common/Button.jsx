// src/components/common/Button.jsx
import React from 'react';
import { motion } from 'framer-motion';

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
  const baseStyle = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-theme-primary text-white hover:bg-[var(--color-primary-hover)] shadow-sm hover:shadow-md',
    accent: 'bg-theme-accent text-theme-accent-contrast hover:bg-[var(--color-accent-hover)] font-bold shadow-sm',
    secondary: 'bg-theme-surface hover:bg-theme-surface-alt text-theme-main border border-theme shadow-xs',
    outline: 'border-2 border-theme-primary text-theme-primary hover:bg-theme-surface-alt',
    dark: 'bg-[#101010] hover:bg-black text-white shadow-sm',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-2.5 text-base gap-2',
    lg: 'px-8 py-3.5 text-lg gap-2.5 font-semibold',
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
