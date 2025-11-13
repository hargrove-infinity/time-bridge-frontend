import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components";
import { cn } from "@/lib";
import { useThemeSwitcher } from "./hooks";

export const ThemeSwitcher = () => {
  const hook = useThemeSwitcher();

  return (
    <div className="flex items-center p-3 relative">
      <Switch checked={hook.isDarkTheme} onCheckedChange={hook.switchTheme} />
      <div
        className={cn(
          "absolute left-5 transition-transform duration-250 ease-in-out pointer-events-none",
          hook.isDarkTheme && "translate-x-[26px]"
        )}
      >
        {hook.isDarkTheme ? (
          <Moon size={18} className="text-switch-icon" />
        ) : (
          <Sun size={18} className="text-switch-icon" />
        )}
      </div>
    </div>
  );
};
