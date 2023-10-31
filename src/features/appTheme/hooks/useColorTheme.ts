import { PaletteMode, createTheme } from "@mui/material"
import { useMemo, useState } from "react"
import { getDesignTokens } from "../components/appTheme"
import {darkThemeName, lightThemeName } from "../../../data/constValues/theme/theme";
import { getSelectedTheme, setSelectedTheme } from "../../../storage/localStorage/selectedTheme";

export const useColorTheme = () => {
  const [mode, setMode] = useState<PaletteMode>(getSelectedTheme());
  const toggleColorMode = () => {
    const prevMode = mode;
    setMode(prevMode === lightThemeName ? darkThemeName : lightThemeName);
    setSelectedTheme(prevMode === lightThemeName ? darkThemeName : lightThemeName);
  }

  const modifiedTheme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};