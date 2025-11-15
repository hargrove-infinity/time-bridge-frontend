import { useStore } from "@/state";

export const useLanguageSelect = () => {
  const { language, toggleLanguage } = useStore();

  const switchLanguage = (value: string): void => {
    toggleLanguage(value);
  };

  return { language, switchLanguage };
};
