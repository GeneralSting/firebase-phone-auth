import { Alert, Grid, Paper, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FC, useState } from "react";
import { IBackCardProps } from "../interfaces/IBackCardProps";
import { MuiOtpInput } from "mui-one-time-password-input";
import { matchIsNumeric } from "../../../utils/matchIsNumeric";

const BackCard: FC<IBackCardProps> = ({
  userPhoneNumber,
  warningMessage,
  handleFlipCard,
  verifyOtp,
}) => {
  const [otpValue, setOtpValue] = useState<string | undefined>();

  const handleChange = (value: string) => {
    setOtpValue(value);
  };

  const handleComplete = (finalValue: string) => {
    verifyOtp(finalValue);
  };

  const validateChar = (value: string) => {
    return matchIsNumeric(value);
  };

  const flipBackCard = () => {
    setOtpValue(undefined);
    handleFlipCard();
  };

  return (
    <Paper elevation={20} className="back-card">
      <Grid sx={{ marginTop: "0px" }} container rowGap={8} rowSpacing={2}>
        <Grid
          item
          xs={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ArrowBackIcon
            fontSize="large"
            className="arrow-card-back"
            onClick={flipBackCard}
          />
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={2}>
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
              {userPhoneNumber}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} />
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
              textAlign="center"
            >
              <Typography variant="body1">
                <FormattedMessage id="loginEnterOtp" />
              </Typography>{" "}
            </Grid>
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
              id="otp-input-grid"
            >
              <MuiOtpInput
                length={6}
                value={otpValue}
                onChange={handleChange}
                onComplete={handleComplete}
                validateChar={validateChar}
                autoFocus={true}
                TextFieldsProps={{ placeholder: "_" }}
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
      </Grid>
    </Paper>
  );
};

export default BackCard;
