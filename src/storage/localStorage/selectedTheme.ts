import { selectedTheme as selectedThemeLS } from "../../data/constValues/storage/localStorage";
import { defaultThemeName } from "../../data/constValues/theme/theme";
import { Theme } from "./interfaces/Theme";

export const setSelectedTheme = (language: string) => {
  localStorage.setItem(selectedThemeLS, language);
};

export const getSelectedTheme = (): Theme => {
  const theme = localStorage.getItem(selectedThemeLS) as Theme;
  return theme || defaultThemeName;
};
