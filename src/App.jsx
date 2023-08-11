import { Suspense, useState } from "react";

import i18n from "./i18n";
import LocaleContext from "./LocaleContext";
import Home from "./pages/Home";

import Promotion from "./pages/Promotion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen  bg-gray-500  text-white text-[80px]">
      <h1>Loading...</h1>
    </div>
  );
}

function App() {
  const { t } = useTranslation();
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  const handleOnChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      {/* <Routes>
        <Route>
          <Route path="/:language(en|fr|ja|ko)?" exact element={<Home />} />
          <Route
            path="/:language(en|fr|ja|ko)?/promotion"
            element={<Promotion />}
          />
        </Route>
      </Routes> */}

      <div className="flex flex-col  landing ">
        <LocaleContext.Provider value={{ locale, setLocale }}>
          <Suspense fallback={<Loading />}>
            <div className="my-3 flex justify-end mr-5 gap-3">
              <label>
                <img src={t("Flag")} alt="" width={50} height={50} />
              </label>
              <select name="" id="" value={locale} onChange={handleOnChange}>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="ja">Japanese</option>
                <option value="kr">Korean</option>
              </select>
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/promo" element={<Promotion />} />
            </Routes>
          </Suspense>
        </LocaleContext.Provider>
      </div>
    </>
  );
}

export default App;
