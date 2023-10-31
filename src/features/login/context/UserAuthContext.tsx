import { FC, PropsWithChildren, createContext } from "react";
import { useUserAuth } from "../hooks/useUserAuth";
import { IUserAuthContext } from "../interfaces/IUserAuthContext";

export const UserAuthContext = createContext<IUserAuthContext>({
  userAuth: null,
  preRenderRecaptcha: () => {},
  logOut: () => {}
});

export const UserAuthContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const userAuth = useUserAuth();
  return (
    <UserAuthContext.Provider value={userAuth}>
      {children}
    </UserAuthContext.Provider>
  );
};
