import { Router, ThemeSwitcher, LanguageSelect } from "@/components";

export const App = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <header className="w-full flex items-center justify-end">
      <LanguageSelect />
      <ThemeSwitcher />
    </header>
    <Router />
  </div>
);
