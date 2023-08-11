import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const Promotion = () => {
  const { i18n } = useTranslation();
  const { language } = useParams();

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n, language]);
  return <div>Promotion</div>;
};

export default Promotion;
