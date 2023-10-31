import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";
import { lightThemeName } from "../../../data/constValues/theme/theme";
import {
  black,
  darkBg,
  lightTumbleweed,
  pewterBlue,
  tumbleweed,
  white,
  whiteBg,
} from "../../../data/constValues/theme/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
  ...(mode === lightThemeName
    ? {
        components: {
          MuiInputLabel: {
            defaultProps: {
              style: {
                color: black,
              },
            },
          },
        },
      }
    : {
        components: {
          MuiInputLabel: {
            defaultProps: {
              style: {
                color: tumbleweed,
              },
            },
          },
        },
      }),
  palette: {
    mode,
    ...(mode === lightThemeName
      ? {
          // palette values for light mode
          primary: {
            main: tumbleweed,
          },
          divider: amber[200],
          background: {
            default: whiteBg,
            paper: lightTumbleweed,
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: pewterBlue,
          },
          divider: deepOrange[700],
          background: {
            default: darkBg,
            paper: darkBg,
          },
          text: {
            primary: white,
            secondary: grey[500],
          },
        }),
  },
});
