import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import data_ar from "./locales/ar/data.json";
import data_en from "./locales/en/data.json";

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      ar: {
        data: data_ar,
      },
      en: {
        data: data_en,
      },
    },
    lng: ["ar", "en"],
    fallbackLng: "ar",
    debug: false,
    // backend: {
    //   loadPath: "../public/locales/{{lng}}/{{ns}}.json",
    // },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // react: {
    //   useSuspense: false,
    // },
  });
export default i18n;
