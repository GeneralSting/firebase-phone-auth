import { User } from "firebase/auth";

export type IUserAuthContext = {
  userAuth: User | null;
  preRenderRecaptcha: (userNumber: string) => void;
  logOut: () => void;
}