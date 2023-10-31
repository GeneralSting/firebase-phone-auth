import { MuiTelInputInfo } from "mui-tel-input";

export interface IFrontCardProps {
  registeredCountries: string[] | undefined;
  selectedLanguage: string;
  themeMode: string;
  cardFlipped: boolean;
  warningMessage: string | undefined;
  setUserNumberInfo: (userData: MuiTelInputInfo | null) => void;
}