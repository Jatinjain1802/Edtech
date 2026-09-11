// src/components/common/RatingStars.jsx
import React from 'react';
import { Star } from 'lucide-react';

/**
 * LEARNING POINT (Array.from & Dynamic Keys):
 * We generate dynamic arrays with `Array.from({ length: 5 })` to map star icons.
 * Always assign unique `key` props when rendering lists in React!
 */
export const RatingStars = ({ rating = 5, reviewsCount = null, size = 'sm', className = '' }) => {
  const starSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const iconClass = starSizes[size] || starSizes.sm;

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center gap-0.5 text-amber-400">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star
            key={idx}
            className={`${iconClass} ${
              idx < Math.floor(rating)
                ? 'fill-amber-400 text-amber-400'
                : idx < rating
                ? 'fill-amber-200 text-amber-400'
                : 'text-slate-200 fill-slate-100'
            }`}
          />
        ))}
      </div>
      <span className="font-semibold text-xs text-slate-800 ml-0.5">{rating}</span>
      {reviewsCount && (
        <span className="text-xs text-slate-500 font-normal">({reviewsCount})</span>
      )}
    </div>
  );
};

export default RatingStars;
