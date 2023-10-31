export type ILanguageContext = {
  selectedLanguage: string;
  changeLanguage: (newLanguage: string) => void;
}