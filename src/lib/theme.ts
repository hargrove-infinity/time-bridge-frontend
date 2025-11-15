import { THEMES } from "@/constants";

export const setTheme = (theme: string): void => {
  localStorage.setItem("theme", theme);
};

export const getTheme = (): string => {
  const theme = localStorage.getItem("theme");
  return theme || THEMES.LIGHT;
};

export const deleteTheme = (): void => {
  localStorage.removeItem("theme");
};
