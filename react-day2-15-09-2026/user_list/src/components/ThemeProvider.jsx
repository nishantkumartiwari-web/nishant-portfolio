import React, { useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppContext } from "../../ContextAPI/AppContext";

export default function ThemeProviderCustom({children}) {
  const { lightMode, setLightMode } = useContext(AppContext);

  const theme = createTheme({
    palette: {
      mode: lightMode ? "light" : "dark",
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
