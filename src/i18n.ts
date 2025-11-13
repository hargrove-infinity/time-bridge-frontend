import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import { LANGUAGES, LOCALE_NAMESPACES } from "@/constants";

const localePath = "/locales";
const localeExtension = "json";

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    fallbackLng: LANGUAGES.ENGLISH,
    ns: LOCALE_NAMESPACES,
    backend: {
      loadPath: (lang: string, ns: string) => {
        return `${localePath}/${lang}/${ns}.${localeExtension}`;
      },
    },
  });
