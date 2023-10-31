import { roleOwner, roleWaiter } from "../../../data/constValues/database/paths/values";

export interface IRegisteredNumber {
  allowed?: boolean;
  memoryWord?: string;
  role: typeof roleOwner | typeof roleWaiter;
  webAppRegistered?: number;
}