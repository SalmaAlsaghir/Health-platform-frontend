import { useState, useEffect } from "react";
import translationEN from "../translations/en.json";
import translationAR from "../translations/ar.json";

const resources = {
  en: translationEN,
  ar: translationAR,
};

const useTranslation = () => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState(resources[language]);

  useEffect(() => {
    setTranslations(resources[language]);
    document.body.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const t = (key) => translations[key] || key;

  const changeLanguage = (lng) => {
    setLanguage(lng);
  };

  return { t, changeLanguage, language };
};

export default useTranslation;
