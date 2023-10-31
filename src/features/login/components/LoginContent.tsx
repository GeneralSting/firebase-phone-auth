import { FC, useState } from "react";
import { useLanguageContext } from "../../languageText";
import "react-phone-number-input/style.css";
import { LoginContentProps } from "../../../interfaces/IPhoneInputProps";
import { MuiTelInputInfo } from "mui-tel-input";
import { useThemeContext } from "../../appTheme";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import { useRegisteredNumbers } from "../hooks/useRegisteredNumbers";
import { useUserAuth } from "../hooks/useUserAuth";
import { ConfirmationResult } from "firebase/auth";
import { roleWaiter } from "../../../data/constValues/database/paths/values";

export const LoginContent: FC<LoginContentProps> = ({
  registeredCountries,
}) => {
  const { selectedLanguage } = useLanguageContext();
  const { mode } = useThemeContext();

  const [cardFlipped, setCardFlipped] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<MuiTelInputInfo | null>(null);
  const [recaptchaResponse, setRecaptchaResponse] = useState<
    ConfirmationResult | undefined
  >();
  const [warningMessage, setWarningMessage] = useState<string | undefined>(undefined);

  const findMatchingNumber = useRegisteredNumbers();
  const { preRenderRecaptcha } = useUserAuth();

  const handleFlipCard = () => {
    setWarningMessage(undefined)
    setCardFlipped(!cardFlipped);
  };

  const setUserNumberInfo = (userInfo: MuiTelInputInfo | null) => {
    const numberValue = userInfo?.numberValue;
    if (numberValue) {
      const matchingNumber = findMatchingNumber(numberValue);

      if (matchingNumber) {
        if (matchingNumber.allowed && matchingNumber.role === roleWaiter) {
          setUpRecaptcha(numberValue);
          handleFlipCard();
        } else {
          setWarningMessage("loginPhoneNumberDisabled");
        }
      } else {
        setWarningMessage("LoginPhoneNumberNotRegistered");
      }
    }
    setUserInfo(userInfo);
  };

  const setUpRecaptcha = async (userNumber: string) => {
    const response = await preRenderRecaptcha(userNumber);
    setRecaptchaResponse(response);
  };

  const verifyOtp = async (enteredOtp: string) => {
    await recaptchaResponse?.confirm(enteredOtp).then((result) => {
      console.log(result)
    }).catch((error) => {
      setWarningMessage("loginOtpInvalid");
      console.log(error)
    })
  };

  return (
    <>
      <div id="recaptcha-container"></div>
      <div className="flipping-card-container">
        <div className={`flipping-card ${cardFlipped ? "flipped" : ""}`}>
          <FrontCard
            registeredCountries={registeredCountries}
            selectedLanguage={selectedLanguage}
            themeMode={mode}
            cardFlipped={cardFlipped}
            warningMessage={warningMessage}
            setUserNumberInfo={setUserNumberInfo}
          />
          <BackCard
            userPhoneNumber={userInfo?.numberValue}
            warningMessage={warningMessage}
            handleFlipCard={handleFlipCard}
            verifyOtp={verifyOtp}
          />
        </div>
      </div>
    </>
  );
};
