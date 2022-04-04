import React, { useContext } from 'react';
import { ThemeProvider } from './theme-context-provider';
import { ThemeContext } from './theme-context';

export function MockComponent() {
  const theme = useContext(ThemeContext);

  return <div style={{ color: theme.color }}>this should be {theme.color}</div>;
}

export const BasicThemeUsage = () => {
  return (
    <ThemeProvider color="blue">
      <MockComponent />
    </ThemeProvider>
  );
};
