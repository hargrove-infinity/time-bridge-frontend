import type { StateCreator } from "zustand";
import type { ApiErrorItem } from "@/api";
import { CHANGE_LANGUAGE_ERROR } from "@/constants";
import { getLanguage, getTheme, setLanguage, setTheme } from "@/lib";
import i18n from "../i18n";

export interface AppSlice {
  error: ApiErrorItem[] | null;
  language: string;
  theme: string;
  toggleLanguage: (language: string) => void;
  toggleTheme: (theme: string) => void;
}

export const createAppSlice: StateCreator<AppSlice> = (set) => ({
  error: null,
  language: getLanguage(),
  theme: getTheme(),
  toggleLanguage: (language: string) => {
    i18n.changeLanguage(language, (error) => {
      if (error) {
        set({ error: CHANGE_LANGUAGE_ERROR });
        return;
      }

      setLanguage(language);
      set({ language });
    });
  },
  toggleTheme: (theme: string) => {
    setTheme(theme);
    set({ theme });
  },
});
