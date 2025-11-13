import type { ComponentProps } from "react";
import {
  SelectTrigger as SelectTriggerShadCN,
  SelectContent as SelectContentShadCN,
  SelectItem as SelectItemShadCN,
  SelectLabel as SelectLabelShadCN,
  SelectSeparator as SelectSeparatorShadCN,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export const SelectTrigger = ({
  className,
  children,
  ...props
}: ComponentProps<typeof SelectTriggerShadCN>) => (
  <SelectTriggerShadCN
    className={cn(
      "bg-select-background",
      "text-select-text",
      "border-select-border",
      "focus:ring-select-ring",
      "placeholder:text-select-placeholder",
      "[&>svg]:text-select-icon",
      className
    )}
    {...props}
  >
    {children}
  </SelectTriggerShadCN>
);

export const SelectContent = ({
  className,
  children,
  ...props
}: ComponentProps<typeof SelectContentShadCN>) => (
  <SelectContentShadCN
    className={cn(
      "bg-select-content-background",
      "border-select-content-border",
      className
    )}
    {...props}
  >
    {children}
  </SelectContentShadCN>
);

export const SelectItem = ({
  className,
  children,
  ...props
}: ComponentProps<typeof SelectItemShadCN>) => (
  <SelectItemShadCN
    className={cn(
      "text-select-item-text",
      "focus:bg-select-item-background-focus",
      "hover:bg-select-item-background-hover",
      "[&>span>svg]:text-select-icon",
      className
    )}
    {...props}
  >
    {children}
  </SelectItemShadCN>
);

export const SelectLabel = ({
  className,
  ...props
}: ComponentProps<typeof SelectLabelShadCN>) => (
  <SelectLabelShadCN
    className={cn("text-select-item-text", className)}
    {...props}
  />
);

export const SelectSeparator = ({
  className,
  ...props
}: ComponentProps<typeof SelectSeparatorShadCN>) => (
  <SelectSeparatorShadCN
    className={cn("bg-select-border", className)}
    {...props}
  />
);
