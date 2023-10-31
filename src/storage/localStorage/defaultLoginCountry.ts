import { Country } from "react-phone-number-input";
import { defaultLoginCountry as defaultLoginCountryLS } from "../../data/constValues/storage/localStorage";

export const setDefaultLoginCountry = (defaultCountry: string) => {
  localStorage.setItem(defaultLoginCountryLS, defaultCountry);
};

export const getDefaultLoginCountry = () => {
  return localStorage.getItem(defaultLoginCountryLS) as Country || undefined;
};
