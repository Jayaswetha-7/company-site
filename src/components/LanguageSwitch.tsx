import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
   
  };

  return (
    <div className="ms-10">
      <div className="container">
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          value={i18n.language}
          className="bg-white border border-gray-300 text-center px-1  py-1 outline-none rounded-2xl "
        >
          <option
            value="en"
          >
            En
          </option>
          <option
            value="ar"
          >
            العربية
          </option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
