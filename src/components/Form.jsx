import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Form = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/promo");
  };
  return (
    <div className="max-w-md ml-10 p-6 bg-[#372A9B] rounded-[33px] shadow-md  text-white ">
      <h3 className="text-4xl mb-5">{t("Register")} </h3>

      <form className="mx-10" onSubmit={handleSubmit}>
        <div className="flex flex-row text-lg font-semibold my-2 items-center">
          <label className="block text-sm font-medium text-white w-1/3">
            {t("Full name")}
          </label>
          <input
            type="text"
            name=""
            id=""
            className="mt-1 p-2 block w-full border border-gray-500 rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
          />
        </div>
        <div className="flex flex-row text-lg font-semibold my-2 items-center">
          <label className="block text-sm font-medium text-white w-1/3">
            {t("Age")}
          </label>
          <input
            type="text"
            name=""
            id=""
            className="mt-1 p-2 block w-full border border-gray-500 rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
          />
        </div>
        <div className="flex flex-row text-lg font-semibold my-2 items-center">
          <label className="block text-sm font-medium text-white w-1/3">
            {t("Address")}
          </label>
          <input
            type="text"
            name=""
            id=""
            className="mt-1 p-2 block w-full border border-gray-500 rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
          />
        </div>
        <div className="flex flex-row text-lg font-semibold my-2 items-center">
          <label className="block text-sm font-medium text-white w-1/3">
            {t("Email Address")}
          </label>
          <input
            type="email"
            name=""
            id=""
            className="mt-1 p-2 block w-full border border-gray-500 rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
          />
        </div>
        <div className="flex flex-row text-lg font-semibold my-2 items-center">
          <label className="block text-sm font-medium text-white w-1/3">
            {t("Address")}
          </label>
          <input
            type="text"
            name=""
            id=""
            className="mt-1 p-2 block w-full border border-gray-500 rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
          />
        </div>
        <div className="flex flex-row text-lg font-semibold my-2 items-center">
          <label className="block text-sm font-medium text-white w-1/3">
            {t("Store Location")}
          </label>
          <input
            type="text"
            name=""
            id=""
            className="mt-1 p-2 block w-full border border-gray-500 rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
          />
        </div>
        <div className="flex flex-row text-lg font-semibold my-2 items-center">
          <label className="block text-sm font-medium text-white w-1/3">
            {t("Physicians name")}
          </label>
          <input
            type="text"
            name=""
            id=""
            className="mt-1 p-2 block w-full border border-gray-500 rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
          />
        </div>
        <div className="flex flex-row text-lg font-semibold my-2 items-center">
          <label className="block text-sm font-medium text-white w-1/3">
            {t("Prc num")}
          </label>
          <input
            type="text"
            name=""
            id=""
            className="mt-1 p-2 block w-full border border-gray-500 rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
          />
        </div>
        <div className="flex flex-row text-lg font-semibold my-2 items-center">
          <label className="block text-sm font-medium text-white w-1/3">
            {t("Prescription")}
          </label>
          <input
            type="file"
            name=""
            id=""
            className="mt-1 p-2 block w-full border border-gray-500 rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
          />
        </div>
        <button className="w-3/4 h-auto bg-[#BE3DA3] text-white p-3 font-bold text-xl rounded-lg mt-5">
          {t("Submit")}
        </button>
      </form>
    </div>
  );
};

export default Form;
