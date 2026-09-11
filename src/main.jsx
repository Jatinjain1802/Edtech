// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

/**
 * LEARNING POINT (React Mounting & StrictMode):
 * `ReactDOM.createRoot` initializes the React fiber tree inside `<div id="root"></div>`.
 * `<React.StrictMode>` performs extra checks during development to highlight potential side effects.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
