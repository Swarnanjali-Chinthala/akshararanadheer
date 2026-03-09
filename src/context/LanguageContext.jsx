import { createContext, useState } from "react";
import { en } from "../translations/en";
import { te } from "../translations/te";
import { hi } from "../translations/hi";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState("en");

  const translations = {
    en,
    te,
    hi
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language]
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};