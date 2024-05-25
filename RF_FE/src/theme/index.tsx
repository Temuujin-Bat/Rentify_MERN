import { FC } from "react";
import { createTheme } from "@mui/material/styles";
import {
  CssBaseline,
  PaletteMode,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

import { TThemeConfig } from "./type";

const ThemeConfig: FC<TThemeConfig> = ({ children }) => {
  const themeOptions = {
    palette: { mode: "light" as PaletteMode },
    typography: {
      allVariants: {
        color: "rgba(0, 0, 0, 1)",
        fontFamily: "Arial, Helvetica Neue, Helvetica, sans-serif",
        fontSize: 16,
      },
    },
  };

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeConfig;
