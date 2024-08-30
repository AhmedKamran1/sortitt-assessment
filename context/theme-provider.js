import React from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "@/theme/theme";

export const ThemeContextProvider = ({ children }) => {
  const themeMode = createTheme(theme());

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
};
