import { Alert, Button, Grid, Paper, Typography } from "@mui/material";
import {
  MuiTelInput,
  MuiTelInputCountry,
  MuiTelInputInfo,
  matchIsValidTel,
} from "mui-tel-input";
import { FC, useState, KeyboardEvent } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { getDefaultLoginCountry } from "../../../storage/localStorage/defaultLoginCountry";
import { IFrontCardProps } from "../interfaces/IFrontCardProps";
import { registration } from "../../../data/constValues/routes/routes";
import { lightThemeName } from "../../../data/constValues/theme/theme";
import { useText } from "../../languageText";
import upperCase from "../../../utils/upperCase";
import SendIcon from "@mui/icons-material/Send";

const FrontCard: FC<IFrontCardProps> = ({
  registeredCountries,
  selectedLanguage,
  themeMode,
  cardFlipped,
  warningMessage,
  setUserNumberInfo,
}) => {
  const countryCodes: MuiTelInputCountry[] | undefined =
    registeredCountries as MuiTelInputCountry[];

  const [userPhoneNumber, setUserPhoneNumber] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [userInfo, setUserInfo] = useState<MuiTelInputInfo | null>(null);

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && event.code === "Enter" && !cardFlipped) {
      if (matchIsValidTel(userPhoneNumber)) {
        setUserNumberInfo(userInfo);
      }
    }
  };

  const handleNumberChange = (value: string, info: MuiTelInputInfo) => {
    if (matchIsValidTel(value)) {
      setUserInfo(info);
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
    setUserPhoneNumber(value);
  };

  const handleButtonPress = () => {
    if (!cardFlipped) {
      if (matchIsValidTel(userPhoneNumber)) {
        setUserNumberInfo(userInfo);
      }
    }
  };

  return (
    <Paper elevation={20} className="front-card">
      <Grid
        container
        rowGap={8}
        rowSpacing={2}
        direction="row"
        alignItems="stretch"
        justifyContent="center"
      >
        <Grid
          item
          xs={12}
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid container justifyContent="center" alignItems="center">
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h2">
                <FormattedMessage id="loginPageTitle" />
              </Typography>{" "}
            </Grid>
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Link to={registration} className="registration-link">
                <Typography
                  variant="h5"
                  className={`${
                    themeMode === lightThemeName
                      ? "registration-link-text-light"
                      : "registration-link-text-dark"
                  }`}
                >
                  <FormattedMessage id="loginRegistrationLink" />
                </Typography>{" "}
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            rowGap={1}
          >
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <MuiTelInput
                label={useText("loginNumberPH")}
                value={userPhoneNumber}
                onChange={handleNumberChange}
                onKeyDown={handleKeyPress}
                defaultCountry={upperCase(getDefaultLoginCountry())}
                onlyCountries={upperCase(countryCodes)}
                variant="outlined"
                focusOnSelectCountry
                langOfCountryName={selectedLanguage}
                flagSize="small"
              />
            </Grid>
            {warningMessage && (
              <Grid
                item
                xs={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Alert variant="outlined" severity="warning">
                  <Typography variant="body1">
                    <FormattedMessage id={warningMessage} />
                  </Typography>{" "}
                </Alert>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleButtonPress}
            sx={{ width: "100%" }}
            disabled={buttonDisabled}
          >
            <FormattedMessage id="loginBtnSendNumber" />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FrontCard;
