import { useState, createContext } from 'react';

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleDarkTheme = () => setDarkTheme(!darkTheme);

  const value = {
    darkTheme,
    handleDarkTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
