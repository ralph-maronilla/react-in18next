import React from "react";
import { Trans, useTranslation } from "react-i18next";

const CircleDesc = () => {
  const { t } = useTranslation();
  return (
    <div className="circle rounded-full">
      <div className=" absolute bottom-[-20rem] right-[-3rem] circle-bg  flex  justify-center rounded-full flex-wrap  ">
        <p className="text-5xl text-center text-white mt-24">
          <Trans i18nKey="Hero Desc">
            Innovating <br /> diabetes care <br /> for generation
          </Trans>
        </p>
      </div>
    </div>
  );
};

export default CircleDesc;
