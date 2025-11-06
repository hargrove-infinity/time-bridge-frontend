import { Router, ThemeSwitcher } from "@/components";

export const App = () => (
  <div className="flex items-center justify-center min-h-screen">
    <ThemeSwitcher />
    <Router />
  </div>
);
