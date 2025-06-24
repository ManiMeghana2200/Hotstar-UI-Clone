import React, { createContext, useContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

// ── context and custom hook 
const ThemeModeContext = createContext();
export const useThemeMode = () => useContext(ThemeModeContext);

// ── provider component 
export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");          // default = dark

  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  // memoize theme to avoid recreation on every render
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === "dark" ? "#121212" : "#f4f4f4",
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
};
