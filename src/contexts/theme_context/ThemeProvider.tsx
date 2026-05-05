'use client';
import { useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({children}: Readonly<{children: React.ReactNode}>) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;