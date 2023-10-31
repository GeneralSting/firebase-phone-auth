import {createTheme } from "@mui/material";
import { createContext, FC, PropsWithChildren } from "react";
import { useColorTheme } from "../hooks/useColorTheme";
import { lightThemeName } from "../../../data/constValues/theme/theme";
import { IThemeContext } from "../interfaces/IThemeContext";

export const ThemeContext = createContext<IThemeContext>({
  mode: lightThemeName,
  toggleColorMode: () => {},
  theme: createTheme(),
});

export const ThemeContextProvider: FC<PropsWithChildren> = ({children}) => {
  const themeValue = useColorTheme();
  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};