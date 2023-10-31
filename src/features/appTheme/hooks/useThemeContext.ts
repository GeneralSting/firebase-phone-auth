import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

export const useThemeContext = () => {
  return useContext(ThemeContext);
}