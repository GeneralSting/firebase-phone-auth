import { Theme } from "@mui/material";

export type IThemeContext = {
  mode: string;
  toggleColorMode: () => void;
  theme: Theme;
};
