import { selectedLanguage as selectedLanguageLS } from "../../data/constValues/storage/localStorage";
import { defaultLanguage } from "../../data/constValues/languages/appTexts";

export const setSelectedLanguage = (language: string) => {
  localStorage.setItem(selectedLanguageLS, language);
};

export const getSelectedLanguage = () => {
  return localStorage.getItem(selectedLanguageLS) || defaultLanguage;
};
