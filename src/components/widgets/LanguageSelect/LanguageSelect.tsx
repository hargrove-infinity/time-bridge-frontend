import { LANGUAGES } from "@/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components";
import { useLanguageSelect } from "./hooks";

export const LanguageSelect = () => {
  const hook = useLanguageSelect();

  return (
    <Select value={hook.language} onValueChange={hook.switchLanguage}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={LANGUAGES.ENGLISH}>English</SelectItem>
        <SelectItem value={LANGUAGES.FRENCH}>French</SelectItem>
      </SelectContent>
    </Select>
  );
};
