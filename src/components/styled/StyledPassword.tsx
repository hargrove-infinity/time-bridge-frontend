import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, type InputProps } from "./StyledInput";

export const Password = (props: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (): void => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <Input type={showPassword ? "text" : "password"} {...props} />
      <Button
        type="button"
        variant="ghost"
        className={`
          w-[34px] 
          h-[34px]
          absolute 
          right-px 
          top-px
          cursor-pointer 
          hover:bg-button-eye-icon-background-hover
          dark:hover:bg-button-eye-icon-background-hover
        `}
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <EyeOff className="h-4 w-4 text-eye-icon-text" />
        ) : (
          <Eye className="h-4 w-4 text-eye-icon-text" />
        )}
      </Button>
    </div>
  );
};
