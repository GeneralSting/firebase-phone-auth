import { useState } from "react";
import {
  getSelectedLanguage,
  setSelectedLanguage as setSelectedLanguageLS,
} from "../../../storage/localStorage/selectedLanguage";

export const useLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    getSelectedLanguage()
  );

  const changeLanguage = (newLangauge: string) => {
    setSelectedLanguage(newLangauge);
    setSelectedLanguageLS(newLangauge);
  };

  return {
    selectedLanguage: selectedLanguage,
    changeLanguage,
  };
};
