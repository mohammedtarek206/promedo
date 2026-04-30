import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'developer' | 'cyber';

interface CyberModeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const CyberModeContext = createContext<CyberModeContextType | undefined>(undefined);

export const CyberModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('developer');

  const toggleTheme = () => {
    setTheme(prev => prev === 'developer' ? 'cyber' : 'developer');
  };

  useEffect(() => {
    // Add theme class to body for global CSS targeting
    document.body.classList.remove('theme-developer', 'theme-cyber');
    document.body.classList.add(`theme-${theme}`);
    
    // Set data-theme attribute
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <CyberModeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </CyberModeContext.Provider>
  );
};

export const useCyberMode = () => {
  const context = useContext(CyberModeContext);
  if (context === undefined) {
    throw new Error('useCyberMode must be used within a CyberModeProvider');
  }
  return context;
};
