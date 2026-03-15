'use client';
import { Dispatch, SetStateAction, createContext } from 'react';

type ThemeType = {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeType|undefined>(undefined);

export default ThemeContext;