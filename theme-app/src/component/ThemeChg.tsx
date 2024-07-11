// src/component/ThemeChg.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface ThemeContextProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeChg = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {}
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeChg.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeChg.Provider>
  );
};
