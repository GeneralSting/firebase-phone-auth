import { useLanguageContext } from "..";
import { appTexts } from "../../../data/constValues/languages/appTexts";

export const useText = (textId: string) => {
  const {selectedLanguage} = useLanguageContext();
  return appTexts[selectedLanguage][textId];
}