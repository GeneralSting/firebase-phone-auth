import { Box, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "../../features/appTheme/hooks/useThemeContext";
import { darkThemeName } from "../../data/constValues/theme/theme";

const ColorModeToggler = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <Box>
      <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        {mode === darkThemeName ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
};

export default ColorModeToggler;
