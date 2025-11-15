import type { ComponentProps } from "react";
import { Input as InputShadCN } from "@/components/ui/input";
import { cn } from "@/lib";

export type InputProps = ComponentProps<typeof InputShadCN>;

export const Input = ({ className, ...props }: InputProps) => (
  <InputShadCN
    className={cn(
      "bg-input-background",
      "dark:bg-input-background",
      "border-input-border",
      "text-input-text",
      "placeholder:text-input-text-placeholder",
      "aria-invalid:border-input-error-border",
      "focus-visible:ring-0 ",
      "focus-visible:ring-offset-0",
      "focus-visible:border-input-border-focus",
      className
    )}
    {...props}
  />
);
