import { Typography } from "@mui/material";
import { useThemeContext } from "../features/appTheme";
import { lightThemeName } from "../data/constValues/theme/theme";
import { FormattedMessage } from "react-intl";
import { githubURL } from "../data/constValues/languages/appTexts";

const Footer = () => {
  const { theme } = useThemeContext();

  const styles = {
    footer: {
      boxShadow: 24,
      backgroundColor:
        theme.palette.mode === "light"
          ? theme.palette.primary.main
          : "transparent",
      backgroundImage:
        theme.palette.mode === "dark"
          ? "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))"
          : "none",
    },
  };

  return (
    <Typography align="center" sx={styles.footer} p={0.4} variant="h5" id="footer-text">
      <a href={githubURL} target="_blank" rel="noopener noreferrer" className="footer-link">
        <FormattedMessage id="footerText" />
      </a>{" "}
    </Typography>
  );
};

export default Footer;
