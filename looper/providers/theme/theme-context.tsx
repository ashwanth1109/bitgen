import { createContext } from 'react';

export type ThemeContextType = {
  /**
   * primary color of theme.
   */
  color?: string;
};

export const ThemeContext = createContext<ThemeContextType>({
  color: 'aqua'
});
