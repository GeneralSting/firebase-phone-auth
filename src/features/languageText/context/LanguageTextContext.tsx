import { FC, PropsWithChildren, createContext } from "react";
import { getSelectedLanguage } from "../../../storage/localStorage/selectedLanguage";
import { useLanguage } from "../hooks/useLanguage";
import { ILanguageContext } from "../interfaces/ILanguageContext";


export const LanguageTextContext = createContext<ILanguageContext>({
  selectedLanguage: getSelectedLanguage(),
  changeLanguage: () => {},
});

export const LanguageContextProvider: FC<PropsWithChildren> = ({children}) => {
  const languageValue = useLanguage();
  return (
    <LanguageTextContext.Provider value={languageValue}>{children}</LanguageTextContext.Provider>
  )
}