import type { StateCreator } from "zustand";
import { getLanguage, getTheme, setLanguage, setTheme } from "@/lib";

export interface AppSlice {
  language: string;
  theme: string;
  toggleLanguage: (language: string) => void;
  toggleTheme: (theme: string) => void;
}

export const createAppSlice: StateCreator<AppSlice> = (set) => ({
  language: getLanguage(),
  theme: getTheme(),
  toggleLanguage: (language: string) => {
    setLanguage(language);
    set({ language });
  },
  toggleTheme: (theme: string) => {
    setTheme(theme);
    set({ theme });
  },
});
