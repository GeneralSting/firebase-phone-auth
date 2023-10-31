import { useContext } from "react";
import { LanguageTextContext } from "../context/LanguageTextContext";

export const useLanguageContext = () => {
  return useContext(LanguageTextContext);
}