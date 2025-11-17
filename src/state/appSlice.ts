import type { StateCreator } from "zustand";
import {
  CHANGE_LANGUAGE_ERROR,
  LOCAL_ERRORS_COMMON_NAMESPACE,
} from "@/constants";
import {
  displayNotification,
  getLanguage,
  getTheme,
  setLanguage,
  setTheme,
} from "@/lib";
import i18n from "../i18n";
import type { AppErrorItem } from "./types";

export interface AppSlice {
  errors: AppErrorItem[] | null;
  language: string;
  theme: string;
  toggleLanguage: (language: string) => void;
  toggleTheme: (theme: string) => void;
}

export const createAppSlice: StateCreator<AppSlice> = (set) => ({
  errors: null,
  language: getLanguage(),
  theme: getTheme(),
  toggleLanguage: (language: string) => {
    i18n.changeLanguage(language, (error) => {
      if (error) {
        set({ errors: CHANGE_LANGUAGE_ERROR });
        displayNotification({
          errors: CHANGE_LANGUAGE_ERROR,
          ns: LOCAL_ERRORS_COMMON_NAMESPACE,
        });
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
