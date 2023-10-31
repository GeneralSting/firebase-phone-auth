import { IRegisteredNumber } from "./IRegisteredNumber";

export interface IRegisteredNumbers  {
  [cafeId: string]: Record<string, IRegisteredNumber>;
}