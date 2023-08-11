import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import CircleDesc from "../components/CircleDesc";
import Form from "../components/Form";

const Home = () => {
  const { i18n } = useTranslation();
  const { language } = useParams();

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n, language]);
  return (
    <div>
      <Form />
      <CircleDesc />
    </div>
  );
};

export default Home;
