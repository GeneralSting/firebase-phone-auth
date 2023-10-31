import { Container, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import "./assets/styles/scss/main.scss";
import { useThemeContext } from "./features/appTheme/index";
import Header from "./layouts/Header";
import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useLanguageContext } from "./features/languageText/index";
import { IntlProvider } from "react-intl";
import { appTexts } from "./data/constValues/languages/appTexts";
import { home, registration, root } from "./data/constValues/routes/routes";
import Footer from "./layouts/Footer";

function App() {
  const { theme } = useThemeContext();
  const { selectedLanguage } = useLanguageContext();

  return (
    <ThemeProvider theme={theme}>
      <IntlProvider
        locale={selectedLanguage}
        messages={appTexts[selectedLanguage]}
      >
        <Grid
          sx={{ minHeight: "100%" }}
          container
          direction="column"
          alignItems="stretch"
        >
          <Grid item>
            <Header />
          </Grid>
          <Grid
            item
            xs
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Routes>
              <Route path={root} element={<Login />} />
              <Route path={registration} element={<Registration />} />
              <Route path={home} element={<Home />} />
            </Routes>
          </Grid>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>

        <CssBaseline />
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
