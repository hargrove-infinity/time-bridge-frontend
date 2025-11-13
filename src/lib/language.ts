import { LANGUAGES } from "@/constants";

export const setLanguage = (language: string): void => {
  localStorage.setItem("language", language);
};

export const getLanguage = (): string => {
  const language = localStorage.getItem("language");
  return language || LANGUAGES.ENGLISH;
};

export const deleteLanguage = (): void => {
  localStorage.removeItem("language");
};
