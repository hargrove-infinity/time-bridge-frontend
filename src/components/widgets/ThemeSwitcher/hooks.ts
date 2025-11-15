import { useEffect } from "react";
import { THEMES } from "@/constants";
import { useStore } from "@/state";
import { getTheme } from "@/lib";

export const useThemeSwitcher = () => {
  const { theme, toggleTheme } = useStore();

  const switchTheme = (checked: boolean): void => {
    const nextTheme = checked ? THEMES.DARK : THEMES.LIGHT;

    document.documentElement.classList.toggle(
      THEMES.DARK,
      nextTheme === THEMES.DARK
    );

    toggleTheme(nextTheme);
  };

  useEffect(() => {
    const storedTheme = getTheme();
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme === THEMES.DARK || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add(THEMES.DARK);
      toggleTheme(THEMES.DARK);
    }
  }, []);

  return { isDarkTheme: theme === THEMES.DARK, switchTheme };
};
