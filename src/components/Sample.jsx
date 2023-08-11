import React from "react";
import { useTranslation } from "react-i18next";

const Sample = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-4xl font-bold">{t("Welcome")}</h1>
      <h3>{t("Language")}</h3>
    </div>
  );
};

export default Sample;
