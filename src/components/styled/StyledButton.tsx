import type { ComponentProps } from "react";
import { Button as ButtonShadCN } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentProps<typeof ButtonShadCN> & {
  isLoading?: boolean;
};

export const Button = ({
  className,
  children,
  isLoading,
  ...props
}: ButtonProps) => (
  <ButtonShadCN
    disabled={isLoading || props.disabled}
    className={cn(
      "cursor-pointer",
      "bg-button-background",
      "text-button-text",
      "hover:bg-button-background-hover",
      className
    )}
    {...props}
  >
    {isLoading && <Spinner />}
    {children}
  </ButtonShadCN>
);
