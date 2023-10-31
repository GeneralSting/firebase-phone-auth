import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useLanguageContext } from "../../features/languageText/hooks/useLanguageContext";
import { SelectChangeEvent } from "@mui/material/Select";
import { useLanguageCodes } from "../../features/languageText/hooks/useLanguageCodes";
import { useThemeContext } from "../../features/appTheme";
import { lightThemeName } from "../../data/constValues/theme/theme";

export const LanguageSelector = () => {
  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    changeLanguage(event.target.value);
  };

  const { mode } = useThemeContext();

  const { selectedLanguage, changeLanguage } = useLanguageContext();

  return (
    <Box className="language-selector-box">
      <FormControl fullWidth variant="filled" id="header-language-form">
        <InputLabel
          id="header-language-label"
          
          className={`${
            mode === lightThemeName
              ? "header-language-label-light"
              : "header-language-label-dark "
          }`}
        >
          <FormattedMessage id="selectLocale"></FormattedMessage>
        </InputLabel>
        <Select
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom", // Position the menu below the Select component
              horizontal: "left", // Position the menu to the left of the Select component
            },
            transformOrigin: {
              vertical: "top", // Align the top of the menu with the top of the Select component
              horizontal: "left", // Align the left of the menu with the left of the Select component
            },
            disableScrollLock: true,
          }}
          labelId="header-language-label"
          id="header-language-selector"
          label="Locale"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          {useLanguageCodes.map((language: string) => {
            return (
              <MenuItem key={language} value={language}>
                {language}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
