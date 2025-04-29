import React, { createContext, useState, useEffect } from 'react';
import { redBlackTheme, lightTheme, darkTheme } from '../styles/themes';

export type ThemeType = 'redBlack' | 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  colors: typeof redBlackTheme;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'redBlack',
  setTheme: () => {},
  colors: redBlackTheme,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('redBlack');
  const [colors, setColors] = useState(redBlackTheme);

  useEffect(() => {
    switch (theme) {
      case 'light':
        setColors(lightTheme);
        break;
      case 'dark':
        setColors(darkTheme);
        break;
      default:
        setColors(redBlackTheme);
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};
