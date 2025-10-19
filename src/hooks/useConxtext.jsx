import { createContext } from "react";

export const Formuser = createContext({
  data: "",
});

export const ProviderFormUser = ({ children }) => {
  return <Formuser.Provider value={children}></Formuser.Provider>;
};
