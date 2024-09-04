import { useTranslation } from "react-i18next";
import "../../config/i18n";
import catala from "../../assets/flags/catala.png";
import castellano from "../../assets/flags/castellano.png";
import english from "../../assets/flags/english.png";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    {
      code: "en",
      flag: english,
      label: "English",
    },
    {
      code: "ca",
      flag: catala,
      label: "Català",
    },
    {
      code: "es",
      flag: castellano,
      label: "Castellano",
    },
  ];

  return (
    <div
      className="inline-flex space-x-2 p-2 bg-white rounded-3xl mt-5"
      role="group">
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => changeLanguage(language.code)}
          className="focus:outline-none">
          <img
            src={language.flag}
            alt={language.label}
            className="w-8 h-8 rounded-full hover:scale-110 hover:brightness-110  transition-transform duration-200"
          />
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
