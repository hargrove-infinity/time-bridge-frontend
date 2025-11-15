import { LANGUAGES } from "@/constants";

export const setLanguage = (language: string): void => {
  localStorage.setItem("i18nextLng", language);
};

export const getLanguage = (): string => {
  const language = localStorage.getItem("i18nextLng");
  return language || LANGUAGES.ENGLISH;
};

export const deleteLanguage = (): void => {
  localStorage.removeItem("i18nextLng");
};
