import { createContext } from "react";

const defaultValue = {
  locale: "kr",
  setLocale: () => {},
};

export default createContext(defaultValue);
