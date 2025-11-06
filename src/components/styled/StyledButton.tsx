import type { ComponentProps } from "react";
import { Button as ButtonShadCN } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentProps<typeof ButtonShadCN>;

export const Button = ({ className, ...props }: ButtonProps) => (
  <ButtonShadCN
    className={cn(
      "cursor-pointer",
      "bg-button-background",
      "text-button-text",
      "hover:bg-button-background-hover",
      className
    )}
    {...props}
  />
);
