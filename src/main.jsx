// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './theme/ThemeContext.jsx';
import './index.css';

/**
 * LEARNING POINT (React Root Provider Wrappers):
 * Wrapping the top-level `<App />` component inside `<ThemeProvider>` ensures 
 * that every component across the entire app can consume and toggle the active theme.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
