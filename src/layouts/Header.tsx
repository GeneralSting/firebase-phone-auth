import { Grid } from "@mui/material";
import { ColorModeToggler } from "../features/appTheme";
import { Box, Typography, AppBar, Toolbar} from "@mui/material";
import { FormattedMessage } from "react-intl";
import { LanguageSelector } from "../components/header/LanguageSelector";

const Header = () => {

  return (
    <>
      <Box id="header-box">
        <AppBar position="static">
          <Toolbar>
            <Grid container>
              <Grid
                item
                xs={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <LanguageSelector />
              </Grid>
              <Grid
                item
                xs={6}
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
              >
                <Typography variant="h4" className="header-title" sx={{lineHeight: "1"}}>
                  <FormattedMessage
                    id="headerTitle"
                  />
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <ColorModeToggler />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
