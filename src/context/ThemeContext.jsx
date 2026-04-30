import React, { createContext, useContext, useState, useEffect } from 'react';

const themes = {
  minimalist: {
    name: 'Minimalist',
    className: 'theme-minimalist',
    config: {
      primary: '#09090b',
      secondary: '#71717a',
      background: '#ffffff',
      fontSans: '"Inter", sans-serif',
      fontSerif: '"Instrument Serif", serif',
    }
  },
  terminal: {
    name: 'Terminal',
    className: 'theme-terminal',
    config: {
      primary: '#22c55e',
      secondary: '#14532d',
      background: '#020617',
      fontMono: '"JetBrains Mono", monospace',
    }
  },
  editorial: {
    name: 'Editorial',
    className: 'theme-editorial',
    config: {
      primary: '#be123c',
      secondary: '#fb7185',
      background: '#fffcf2',
      fontSans: '"Space Grotesk", sans-serif',
      fontSerif: '"Playfair Display", serif',
    }
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'minimalist';
  });

  useEffect(() => {
    const themeData = themes[currentTheme];
    const root = window.document.documentElement;
    
    // Remove all theme classes
    Object.values(themes).forEach(t => root.classList.remove(t.className));
    // Add current theme class
    root.classList.add(themeData.className);
    
    // Set CSS Variables for Tailwind
    const config = themeData.config;
    Object.entries(config).forEach(([key, value]) => {
      const cssVar = `--${key.replace(/[A-Z]/g, m => "-" + m.toLowerCase())}`;
      root.style.setProperty(cssVar, value);
    });

    localStorage.setItem('portfolio-theme', currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: setCurrentTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
