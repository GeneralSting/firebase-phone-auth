import { IRegisteredCountry } from "./IRegisteredCountry";

export interface IRegisteredCountries {
  countryCode: Record<string, IRegisteredCountry>
}