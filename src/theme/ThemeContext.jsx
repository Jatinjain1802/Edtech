// src/theme/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes, DEFAULT_THEME } from './themes';

/**
 * LEARNING POINT (React Context & Web Storage API):
 * - `createContext()` creates a Context object that allows components to share data 
 *   without manually passing props down through every level of the component tree.
 * - `localStorage` provides persistent key-value browser storage across page reloads.
 */

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeKey, setThemeKey] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('edtech-theme');
      return savedTheme && themes[savedTheme] ? savedTheme : DEFAULT_THEME;
    } catch {
      return DEFAULT_THEME;
    }
  });

  const activeTheme = themes[themeKey] || themes[DEFAULT_THEME];

  useEffect(() => {
    // 1. Update localStorage
    try {
      localStorage.setItem('edtech-theme', themeKey);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }

    // 2. Set root DOM data attribute & CSS custom variables dynamically
    const root = document.documentElement;
    root.setAttribute('data-theme', themeKey);

    const colors = activeTheme.colors;
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-hover', colors.primaryHover);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--color-accent-hover', colors.accentHover);
    root.style.setProperty('--color-accent-text', colors.accentText);
    root.style.setProperty('--color-bg-main', colors.background);
    root.style.setProperty('--color-surface', colors.surface);
    root.style.setProperty('--color-surface-alt', colors.surfaceAlt);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-text-main', colors.textMain);
    root.style.setProperty('--color-text-muted', colors.textMuted);
    root.style.setProperty('--color-border', colors.border);
    root.style.setProperty('--color-border-subtle', colors.borderSubtle);
    root.style.setProperty('--color-card-shadow', colors.cardShadow);
    root.style.setProperty('--hero-gradient', colors.heroGradient);
  }, [themeKey, activeTheme]);

  return (
    <ThemeContext.Provider value={{ themeKey, activeTheme, setThemeKey, themesList: Object.values(themes) }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
