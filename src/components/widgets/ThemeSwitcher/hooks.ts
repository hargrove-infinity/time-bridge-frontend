import { useEffect, useState } from "react";

export const useThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = (checked: boolean) => {
    const nextTheme = checked ? "dark" : "light";
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    setIsDark(checked);
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  return { isDark, toggleTheme };
};
