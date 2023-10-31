import { Container, Grid } from "@mui/material";
import { LoginContent, useRegisteredCountries } from "../features/login";
import { pewterBlue, tumbleweed } from "../data/constValues/theme/colors";
import { OvalSpinning } from "../components/Loader/OvalSpinning";

const Login = () => {
  const registeredCountries = useRegisteredCountries();
  return (
    <Container>
      <Grid container>
        <Grid item lg={3} md={2} xs={1}></Grid>
        <Grid item lg={6} md={8} xs={10}>
          {registeredCountries && registeredCountries.length > 0 ? (
              <LoginContent registeredCountries={registeredCountries} />
          ) : (
            <Grid container rowSpacing={4}>
              <Grid
                item
                xs={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                {" "}
                <OvalSpinning
                  primaryColor={pewterBlue}
                  secondaryColor={tumbleweed}
                />
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid item lg={3} md={2} xs={1}></Grid>
      </Grid>
    </Container>
  );
};

export default Login;
