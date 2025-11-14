export const LANGUAGES = {
  ENGLISH: "en",
  FRENCH: "fr",
};

const LOCAL_LOGIN_NAMESPACE = "local/login";
const LOCAL_REGISTER_NAMESPACE = "local/register";
const NETWORK_TRANSLATIONS_NAMESPACE = "network/translations";

const LOCALE_NAMESPACES = [
  LOCAL_LOGIN_NAMESPACE,
  LOCAL_REGISTER_NAMESPACE,
  NETWORK_TRANSLATIONS_NAMESPACE,
];

export const CHANGE_LANGUAGE_ERROR = [
  {
    code: "Change language error",
    description: "Error i18n while changing language",
    data: [],
  },
];

export {
  LOCAL_LOGIN_NAMESPACE,
  LOCAL_REGISTER_NAMESPACE,
  NETWORK_TRANSLATIONS_NAMESPACE,
  LOCALE_NAMESPACES,
};
