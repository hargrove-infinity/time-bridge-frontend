import type { ComponentProps } from "react";
import { Button as ButtonShadCN } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib";

type ButtonProps = ComponentProps<typeof ButtonShadCN> & {
  isLoading?: boolean;
};

export const Button = ({
  className,
  children,
  isLoading,
  variant,
  ...props
}: ButtonProps) => (
  <ButtonShadCN
    disabled={isLoading || props.disabled}
    variant={variant}
    className={cn(
      "cursor-pointer",
      variant !== "link" && [
        "bg-button-background",
        "text-button-text",
        "hover:bg-button-background-hover",
      ],
      variant === "link" && [
        "text-button-link-text",
        "hover:text-button-link-text-hover",
        "no-underline",
      ],
      className
    )}
    {...props}
  >
    {isLoading && <Spinner />}
    {children}
  </ButtonShadCN>
);
