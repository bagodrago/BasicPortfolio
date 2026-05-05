'use client';

import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function useTheme() {
  const consumer = useContext(ThemeContext);
  if (!consumer) throw new Error("useTheme() not used in a ThemeProvider");
  return consumer;
}
