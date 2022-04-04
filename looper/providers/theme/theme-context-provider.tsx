import React, { ReactNode } from 'react';
import { ThemeContext } from './theme-context';

export type ThemeProviderProps = {
  /**
   * primary color of theme.
   */
  color?: string;

  /**
   * children to be rendered within this theme.
   */
  children: ReactNode;
};

export function ThemeProvider({ color, children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={{ color: 'red' }}>
      {children}
    </ThemeContext.Provider>
  );
}
